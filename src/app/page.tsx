import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { PostCard } from "@/components/PostCard";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="animate-fade-in">
          <p className="text-accent font-medium mb-4">Hello, I&apos;m</p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
            {siteConfig.name}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted max-w-2xl mb-8 animate-fade-in-delay-1">
          {siteConfig.description}
        </p>

        <div className="flex items-center gap-6 animate-fade-in-delay-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            Read the Blog
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          
          <div className="flex items-center gap-4">
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      {posts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-8 animate-fade-in-delay-3">
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-accent hover:text-accent-hover transition-colors link-underline"
            >
              View all
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-delay-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state when no posts */}
      {posts.length === 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-20 animate-fade-in-delay-3">
          <div className="text-center py-16 border border-dashed border-border rounded-xl">
            <h2 className="font-serif text-2xl font-medium mb-3">
              No posts yet
            </h2>
            <p className="text-muted">
              Check back soon for new content!
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
