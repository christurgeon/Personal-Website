import Link from "next/link";
import Image from "next/image";
import { getAllCategories } from "@/lib/photography";
import { MapPinIcon, CameraIcon, ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of photographs from travels around the world.",
};

export default function PhotographyPage() {
  const categories = getAllCategories();
  const totalPhotos = categories.reduce((acc, cat) => acc + cat.photos.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="from-accent/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="animate-fade-in">
            <div className="text-accent mb-4 flex items-center gap-2">
              <CameraIcon className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Photography</span>
            </div>
            <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">Through the Lens</h1>
          </div>
          <p className="text-muted animate-fade-in-delay-1 mb-8 max-w-2xl text-xl md:text-2xl">
            Moments captured from journeys across {categories.length} destinations.
            {totalPhotos > 0 && ` ${totalPhotos} photographs and counting.`}
          </p>

          <div className="animate-fade-in-delay-2 flex items-center gap-4">
            <Link
              href="/photography/shuffle"
              className="bg-accent hover:bg-accent-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
            >
              Shuffle All Photos
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/photography/${category.slug}`}
              className="group bg-card border-border hover:border-accent/50 relative block aspect-[4/3] overflow-hidden rounded-2xl border transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Cover Image */}
              <div className="bg-foreground/5 absolute inset-0">
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{category.country}</span>
                    <span className="mx-2">•</span>
                    <span>{category.photos.length} photos</span>
                  </div>
                  <h2 className="mb-2 font-serif text-3xl font-medium md:text-4xl">{category.name}</h2>
                  <p className="line-clamp-2 text-sm text-white/80 md:text-base">{category.description}</p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="border-border animate-fade-in rounded-xl border border-dashed py-20 text-center">
            <CameraIcon className="text-muted mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-3 font-serif text-2xl font-medium">No photos yet</h2>
            <p className="text-muted">Check back soon for new photography collections!</p>
          </div>
        )}
      </section>
    </div>
  );
}
