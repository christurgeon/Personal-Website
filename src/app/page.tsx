import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { AnimatedHero } from "@/components/AnimatedHero";
import { PostCard } from "@/components/PostCard";
import { ArrowRightIcon } from "@/components/Icons";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <AnimatedHero name={siteConfig.name} description={siteConfig.description} socials={siteConfig.socials} />

      {/* Recent Posts Section */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <div className="animate-fade-in-delay-3 mb-8 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-medium tracking-tight">Recent Posts</h2>
            <Link href="/blog" className="text-accent hover:text-accent-hover link-underline flex items-center gap-1 transition-colors">
              View all
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="animate-fade-in-delay-3 grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state when no posts */}
      {posts.length === 0 && (
        <section className="animate-fade-in-delay-3 mx-auto max-w-4xl px-6 pb-20">
          <div className="border-border rounded-xl border border-dashed py-16 text-center">
            <h2 className="mb-3 font-serif text-2xl font-medium">No posts yet</h2>
            <p className="text-muted">Check back soon for new content!</p>
          </div>
        </section>
      )}
    </div>
  );
}
