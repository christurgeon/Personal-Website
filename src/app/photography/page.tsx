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
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
<div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
<div className="animate-fade-in">
<div className="flex items-center gap-2 text-accent mb-4">
<CameraIcon className="w-5 h-5" />
<span className="text-sm font-medium tracking-wide uppercase">Photography</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
Through the Lens
</h1>
</div>
<p className="text-xl md:text-2xl text-muted max-w-2xl mb-8 animate-fade-in-delay-1">
Moments captured from journeys across {categories.length} destinations.
{totalPhotos > 0 && ` ${totalPhotos} photographs and counting.`}
</p>

<div className="flex items-center gap-4 animate-fade-in-delay-2">
<Link
href="/photography/shuffle"
className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
>
Shuffle All Photos
<ArrowRightIcon className="w-4 h-4" />
</Link>
</div>
</div>
</section>

{/* Categories Grid */}
<section className="max-w-6xl mx-auto px-6 pb-20">
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
{categories.map((category, index) => (
<Link
key={category.slug}
href={`/photography/${category.slug}`}
className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500"
style={{ animationDelay: `${index * 100}ms` }}
>
{/* Cover Image */}
<div className="absolute inset-0 bg-foreground/5">
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
<div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
<div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
<div className="flex items-center gap-2 text-white/70 text-sm mb-2">
<MapPinIcon className="w-4 h-4" />
<span>{category.country}</span>
<span className="mx-2">•</span>
<span>{category.photos.length} photos</span>
</div>
<h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">
{category.name}
</h2>
<p className="text-white/80 text-sm md:text-base line-clamp-2">
{category.description}
</p>
</div>

{/* Arrow indicator */}
<div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<ArrowRightIcon className="w-5 h-5 text-white" />
</div>
</div>
</Link>
))}
</div>

{/* Empty State */}
{categories.length === 0 && (
<div className="text-center py-20 border border-dashed border-border rounded-xl animate-fade-in">
<CameraIcon className="w-12 h-12 mx-auto text-muted mb-4" />
<h2 className="font-serif text-2xl font-medium mb-3">
No photos yet
</h2>
<p className="text-muted">
Check back soon for new photography collections!
</p>
</div>
)}
</section>
</div>
);
}
