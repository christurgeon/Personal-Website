import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { GitHubIcon, LinkedInIcon, GoodreadsIcon, SoundCloudIcon, EmailIcon, ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">About</h1>
      </header>

      <div className="prose prose-lg animate-fade-in-delay-1 mb-12 max-w-none">
        <p>Howdy! I&apos;m {siteConfig.name}. Thanks for stopping by.</p>

        <p>
          This is a place where I share my thoughts, ideas, knowledge, and projects. Feel free to explore the <Link href="/blog">blog</Link> or
          connect with me through the links below.
        </p>

        <h2>What I Do</h2>
        <p>
          I write about a wide range of topics shaped by curiosity and lived experience. I&apos;ve traveled to 26 countries, many of them solo,
          including a 3.5‑month journey across South America. By day, I&apos;m a software engineer at{" "}
          <Link href="https://point72.com/" target="_blank" rel="noopener noreferrer">
            Point72
          </Link>
          , and in my free time I enjoy photography and producing electronic music.
        </p>

        <h2>Get in Touch</h2>
        <p>
          I&apos;m always interested in hearing from new people. Whether you have a question, want to collaborate, or just want to say hi, feel free
          to reach out.
        </p>
      </div>

      <div className="animate-fade-in-delay-2 flex flex-wrap gap-4">
        {siteConfig.socials.github && (
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        )}
        {siteConfig.socials.linkedin && (
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
        )}
        {siteConfig.socials.goodreads && (
          <a
            href={siteConfig.socials.goodreads}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          >
            <GoodreadsIcon className="h-5 w-5" />
            Goodreads
          </a>
        )}
        {siteConfig.socials.soundcloud && (
          <a
            href={siteConfig.socials.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          >
            <SoundCloudIcon className="h-5 w-5" />
            SoundCloud
          </a>
        )}
      </div>

      <div className="bg-card border-border animate-fade-in-delay-3 mt-16 rounded-xl border p-8">
        <h3 className="mb-3 font-serif text-2xl font-medium">Care to read my thoughts?</h3>
        <p className="text-muted mb-4">Checkout out my blog for personal essays and occasional musings.</p>
        <Link href="/blog" className="text-accent hover:text-accent-hover inline-flex items-center gap-2 transition-colors">
          View the Blog
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
