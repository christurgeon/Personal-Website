"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Photo } from "@/lib/photography";
import { XIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from "@/components/Icons";

interface PhotoGalleryProps {
  photos: Photo[];
  showLocation?: boolean;
}

export function PhotoGallery({ photos, showLocation = true }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  const currentPhoto = photos[currentIndex];

  // Determine column span based on image aspect ratio
  const getColumnSpan = (photo: Photo) => {
    const aspectRatio = photo.width / photo.height;
    if (aspectRatio > 1.4) return "md:col-span-2"; // Wide images
    return ""; // Normal or tall images
  };

  return (
    <>
      {/* Masonry-style Grid */}
      <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(index)}
            className={`group bg-card border-border hover:border-accent/50 relative cursor-zoom-in overflow-hidden rounded-xl border transition-all duration-300 ${getColumnSpan(photo)}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded[photo.id] ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, [photo.id]: true }))}
            />

            {/* Loading skeleton */}
            {!imageLoaded[photo.id] && <div className="bg-card absolute inset-0 animate-pulse" />}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Photo info on hover */}
            {showLocation && photo.location && (
              <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{photo.location}</span>
                  {photo.date && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{photo.date}</span>
                    </>
                  )}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={closeLightbox}>
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <XIcon className="h-6 w-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:left-8"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-8"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Main image container */}
          <div className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              width={currentPhoto.width}
              height={currentPhoto.height}
              className="animate-lightbox-enter h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
          </div>

          {/* Photo info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <div className="flex items-center justify-center gap-3 text-sm text-white/70">
              {currentPhoto.location && (
                <span className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4" />
                  {currentPhoto.location}
                </span>
              )}
              {currentPhoto.date && <span>{currentPhoto.date}</span>}
              <span>
                {currentIndex + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
