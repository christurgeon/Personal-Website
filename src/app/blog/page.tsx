import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: `Where ${siteConfig.name} writes about whatever is on his mind - blog posts about life, technology, science, travel, and things he's learned along the way.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">Blog</h1>
        <p className="text-muted text-xl">Stories, essays, advice, and the occasional rabbit hole.</p>
      </header>

      {posts.length > 0 ? (
        <div className="animate-fade-in-delay-1 grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>
      ) : (
        <div className="border-border animate-fade-in-delay-1 rounded-xl border border-dashed py-16 text-center">
          <h2 className="mb-3 font-serif text-2xl font-medium">No posts yet</h2>
          <p className="text-muted">Check back soon for new content!</p>
        </div>
      )}
    </div>
  );
}
