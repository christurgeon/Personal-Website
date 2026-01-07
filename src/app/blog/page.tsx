import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on technology, design, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-xl text-muted">
          Thoughts on technology, design, and life.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-delay-1">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-xl animate-fade-in-delay-1">
          <h2 className="font-serif text-2xl font-medium mb-3">No posts yet</h2>
          <p className="text-muted">
            Check back soon for new content!
          </p>
        </div>
      )}
    </div>
  );
}

