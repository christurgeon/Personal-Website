import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getAllCategories } from "@/lib/photography";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MapPinIcon, ChevronLeftIcon, CameraIcon } from "@/components/Icons";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Photography`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const allCategories = getAllCategories();
  const currentIndex = allCategories.findIndex((c) => c.slug === categorySlug);
  const nextCategory = allCategories[(currentIndex + 1) % allCategories.length];
  const prevCategory = allCategories[(currentIndex - 1 + allCategories.length) % allCategories.length];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-border relative overflow-hidden border-b">
        <div className="from-accent/5 absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          {/* Back Link */}
          <Link href="/photography" className="text-muted hover:text-accent group mb-8 inline-flex items-center gap-2 transition-colors">
            <ChevronLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>All Collections</span>
          </Link>

          <div className="animate-fade-in">
            <div className="text-muted mb-3 flex items-center gap-3 text-sm">
              <MapPinIcon className="h-4 w-4" />
              <span>{category.country}</span>
              <span>•</span>
              <span>{category.photos.length} photographs</span>
            </div>

            <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">{category.name}</h1>

            <p className="text-muted max-w-2xl text-xl">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {category.photos.length > 0 ? (
          <PhotoGallery photos={category.photos} />
        ) : (
          <div className="border-border rounded-xl border border-dashed py-20 text-center">
            <CameraIcon className="text-muted mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-3 font-serif text-2xl font-medium">Coming Soon</h2>
            <p className="text-muted">Photos from {category.name} will be added soon.</p>
          </div>
        )}
      </section>

      {/* Navigation to other categories */}
      <section className="border-border border-t">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Previous Category */}
            <Link
              href={`/photography/${prevCategory.slug}`}
              className="group bg-card border-border hover:border-accent/50 rounded-xl border p-6 transition-all"
            >
              <div className="text-muted items-counter mb-2 flex gap-2 text-sm">
                <ChevronLeftIcon className="h-4 w-4" />
                <span>Previous</span>
              </div>
              <h3 className="group-hover:text-accent font-serif text-xl font-medium transition-colors">{prevCategory.name}</h3>
              <p className="text-muted mt-1 text-sm">{prevCategory.country}</p>
            </Link>

            {/* Next Cateogory */}
            <Link
              href={`/photography/${nextCategory.slug}`}
              className="group bg-card border-border hover:border-accent/50 rounded-xl border p-6 text-right transition-all"
            >
              <div className="text-muted mb-2 flex items-center justify-end gap-2 text-sm">
                <span>Next</span>
                <ChevronLeftIcon className="h-4 w-4 rotate-180" />
              </div>
              <h3 className="group-hover:text-accent font-serif text-xl font-medium transition-colors">{nextCategory.name}</h3>
              <p className="text-muted mt-1 text-sm">{nextCategory.country}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
