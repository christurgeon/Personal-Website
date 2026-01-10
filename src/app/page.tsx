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
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-32">
        <div className="animate-fade-in">
          <p className="text-accent mb-4 font-medium">Hello, I&apos;m</p>
          <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight md:text-7xl">{siteConfig.name}</h1>
        </div>

        <p className="text-muted animate-fade-in-delay-1 mb-8 max-w-2xl text-xl md:text-2xl">{siteConfig.description}</p>

        <div className="animate-fade-in-delay-2 flex items-center gap-6">
          <Link
            href="/blog"
            className="bg-accent hover:bg-accent-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
          >
            Read the Blog
            <ArrowRightIcon className="h-4 w-4" />
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
                <GitHubIcon className="h-6 w-6" />
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
                <LinkedInIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </section>

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
