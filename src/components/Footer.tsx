import { siteConfig } from "@/lib/config";
import { GitHubIcon, LinkedInIcon, GoodreadsIcon, SoundCloudIcon, EmailIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
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
                <LinkedInIcon className="w-5 h-5" />
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
                <GoodreadsIcon className="w-5 h-5" />
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
                <SoundCloudIcon className="w-5 h-5" />
              </a>
            )}
            {siteConfig.socials.email && (
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            )}
          </div>

          <p className="text-sm text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

