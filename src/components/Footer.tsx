import { siteConfig } from "@/lib/config";
import { GitHubIcon, LinkedInIcon, GoodreadsIcon, SoundCloudIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border mt-auto border-t">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-6">
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
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
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
            {siteConfig.socials.goodreads && (
              <a
                href={siteConfig.socials.goodreads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Goodreads"
              >
                <GoodreadsIcon className="h-5 w-5" />
              </a>
            )}
            {siteConfig.socials.soundcloud && (
              <a
                href={siteConfig.socials.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="SoundCloud"
              >
                <SoundCloudIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          <p className="text-muted text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
