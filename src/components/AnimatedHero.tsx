"use client";

import Link from "next/link";
import { TextReveal } from "./TextReveal";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "./Icons";

interface AnimatedHeroProps {
  name: string;
  description: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
}

export function AnimatedHero({ name, description, socials }: AnimatedHeroProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <div className="mb-6">
        <p className="text-accent animate-fade-in mb-4 font-medium">Hello, I&apos;m</p>
        <h1 className="font-serif text-5xl font-medium tracking-tight md:text-7xl">
          <TextReveal text={name} delay={100} staggerMs={35} />
        </h1>
      </div>

      <p className="text-muted animate-fade-in-delay-1 mb-8 max-w-2xl text-xl md:text-2xl">{description}</p>

      <div className="animate-fade-in-delay-2 flex items-center gap-6">
        <Link
          href="/blog"
          className="bg-accent hover:bg-accent-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
        >
          Read the Blog
          <ArrowRightIcon className="h-4 w-4" />
        </Link>

        <div className="flex items-center gap-4">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
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
  );
}
