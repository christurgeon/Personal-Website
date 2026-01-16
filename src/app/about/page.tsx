import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowRightIcon, GitHubIcon, GoodreadsIcon, LinkedInIcon, SoundCloudIcon, ResumeIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a software engineer at Point72 sharing blog posts and photography alongside personal coding projects.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">About</h1>
      </header>

      <div className="prose prose-lg animate-fade-in-delay-1 mb-12 max-w-none">
        <p>
          Howdy! I&apos;m {siteConfig.name}. Thanks for stopping by. This site is equal parts notebook, gallery, and experiment — a place where I
          collect and share the things I care deeply about.
        </p>

        <h2>What I Do</h2>
        <p>
          By day, I&apos;m a software engineer at{" "}
          <Link href="https://point72.com/" target="_blank" rel="noopener noreferrer">
            Point72
          </Link>
          . Outside of work, I spend my time <Link href="/blog">writing</Link>, taking <Link href="/photography">photos</Link> of places and moments I
          don&apos;t want to forget, and producing{" "}
          <Link href={siteConfig.socials.soundcloud} target="_blank" rel="noopener noreferrer">
            electronic music
          </Link>{" "}
          that ranges from barely listenable to occasionally decent. You can also{" "}
          <a
            href="/chris_turgeon_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            view my resume
          </a>{" "}
          if you want to see my professional background.
        </p>

        <h2>Get in Touch</h2>
        <p>
          I&apos;m always interested in hearing from new people. Whether you have a question, want to collaborate, or just want to say hi, feel free
          to reach out. Some of my favorite conversations have started that way.
        </p>
      </div>

      <div className="animate-fade-in-delay-2 flex flex-wrap justify-center gap-4">
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
        <p className="text-muted mb-4">Checkout out my blog for personal essays and the occasional rabbit hole.</p>
        <Link href="/blog" className="text-accent hover:text-accent-hover inline-flex items-center gap-2 transition-colors">
          View the Blog
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
