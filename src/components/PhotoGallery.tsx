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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(index)}
            className={`group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 cursor-zoom-in ${getColumnSpan(photo)}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded[photo.id] ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, [photo.id]: true }))}
            />
            
            {/* Loading skeleton */}
            {!imageLoaded[photo.id] && (
              <div className="absolute inset-0 bg-card animate-pulse" />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Photo info on hover */}
            {showLocation && photo.location && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="w-4 h-4" />
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
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <XIcon className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Main image container */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              width={currentPhoto.width}
              height={currentPhoto.height}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg animate-lightbox-enter"
              priority
            />
          </div>

          {/* Photo info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-lg font-medium mb-1">{currentPhoto.alt}</p>
            <div className="flex items-center justify-center gap-3 text-sm text-white/70">
              {currentPhoto.location && (
                <span className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  {currentPhoto.location}
                </span>
              )}
              {currentPhoto.date && <span>{currentPhoto.date}</span>}
              <span>{currentIndex + 1} / {photos.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
