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
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
          About
        </h1>
      </header>

      <div className="prose prose-lg max-w-none mb-12 animate-fade-in-delay-1">
        <p>
          Howdy! I&apos;m {siteConfig.name}. Thanks for stopping by.
        </p>
        
        <p>
          This is a place where I share my thoughts, ideas, knowledge, and projects. Feel free to 
          explore the <Link href="/blog">blog</Link> or connect with me through 
          the links below.
        </p>

        <h2>What I Do</h2>
        <p>
          I write about a wide range of topics shaped by curiosity and lived experience.
          I&apos;ve traveled to 26 countries, many of them solo, including a 3.5‑month journey across South America.
          By day, I&apos;m a software engineer at Point72, and in my free time I enjoy photography and producing electronic music.
        </p>

        <h2>Get in Touch</h2>
        <p>
          I&apos;m always interested in hearing from new people. Whether you have a 
          question, want to collaborate, or just want to say hi, feel free to 
          reach out.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
        {siteConfig.socials.github && (
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <GitHubIcon className="w-5 h-5" />
            GitHub
          </a>
        )}
        {siteConfig.socials.linkedin && (
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
            LinkedIn
          </a>
        )}
        {siteConfig.socials.goodreads && (
          <a
            href={siteConfig.socials.goodreads}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <GoodreadsIcon className="w-5 h-5" />
            Goodreads
          </a>
        )}
        {siteConfig.socials.soundcloud && (
          <a
            href={siteConfig.socials.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <SoundCloudIcon className="w-5 h-5" />
            SoundCloud
          </a>
        )}
        {siteConfig.socials.email && (
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <EmailIcon className="w-5 h-5" />
            Email
          </a>
        )}
      </div>

      <div className="mt-16 p-8 bg-card border border-border rounded-xl animate-fade-in-delay-3">
        <h3 className="font-serif text-2xl font-medium mb-3">
          Want to read my thoughts?
        </h3>
        <p className="text-muted mb-4">
          Check out my blog for articles on technology, design, and more.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
        >
          View the Blog
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

