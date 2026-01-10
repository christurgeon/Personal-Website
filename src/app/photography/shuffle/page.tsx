"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPhotos, Photo } from "@/lib/photography";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ShuffleIcon, ChevronLeftIcon, CameraIcon } from "@/components/Icons";

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ShufflePage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // Initial shuffle on mount
    setPhotos(shuffleArray(getAllPhotos()));
  }, []);

  const handleShuffle = () => {
    setIsShuffling(true);
    // Small delay for visual feedback
    setTimeout(() => {
      setPhotos(shuffleArray(getAllPhotos()));
      setIsShuffling(false);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-border relative overflow-hidden border-b">
        <div className="from-accent/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          {/* Back link */}
          <Link href="/photography" className="text-muted hover:text-accent group mb-8 inline-flex items-center gap-2 transition-colors">
            <ChevronLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>All Collections</span>
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="animate-fade-in">
              <div className="text-accent mb-3 flex items-center gap-2 text-sm">
                <ShuffleIcon className="h-4 w-4" />
                <span className="font-medium tracking-wide uppercase">Random Selection</span>
              </div>

              <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">Shuffled Gallery</h1>

              <p className="text-muted max-w-2xl text-xl">
                A random selection of {photos.length} photographs from all collections. Click shuffle to see a new arrangement.
              </p>
            </div>

            <button
              onClick={handleShuffle}
              disabled={isShuffling}
              className={`bg-accent hover:bg-accent-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all ${
                isShuffling ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              <ShuffleIcon className={`h-5 w-5 ${isShuffling ? "animate-spin" : ""}`} />
              {isShuffling ? "Shuffling..." : "Shuffle Again"}
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {photos.length > 0 ? (
          <div className={`transition-opacity duration-300 ${isShuffling ? "opacity-50" : "opacity-100"}`}>
            <PhotoGallery photos={photos} showLocation />
          </div>
        ) : (
          <div className="border-border rounded-xl border border-dashed py-20 text-center">
            <CameraIcon className="text-muted mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-3 font-serif text-2xl font-medium">No photos yet</h2>
            <p className="text-muted">Check back soon for new photography!</p>
          </div>
        )}
      </section>
    </div>
  );
}
