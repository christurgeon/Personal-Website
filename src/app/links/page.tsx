import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { BeliIcon, GitHubIcon, LinkedInIcon, GoodreadsIcon, SoundCloudIcon, EmailIcon, ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: `Connect with ${siteConfig.name}`,
};

const links = [
  {
    name: "Blog",
    href: "/blog",
    description: "Read the blog",
    external: false,
  },
  {
    name: "Photography",
    href: "/photography",
    description: "View my photo gallery",
    external: false,
  },
  {
    name: "Referrals",
    href: "/referrals",
    description: "Services I use and recommend",
    external: false,
  },
  {
    name: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    name: "GitHub",
    href: siteConfig.socials.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    name: "What I'm Reading",
    href: siteConfig.socials.goodreads,
    icon: GoodreadsIcon,
    external: true,
  },
  {
    name: "SoundCloud",
    href: siteConfig.socials.soundcloud,
    icon: SoundCloudIcon,
    external: true,
  },
  {
    name: "Beli",
    href: siteConfig.socials.beli,
    icon: BeliIcon,
    external: true,
  },
].filter((link) => link.href);

export default function LinksPage() {
  return (
    <div className="gradient-bg flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="animate-fade-in mb-8 text-center">
          <div className="border-accent/30 relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 shadow-lg">
            <Image src="/images/profile.jpg" alt={siteConfig.name} fill className="object-cover" priority />
          </div>

          <h1 className="mb-1 font-serif text-2xl font-medium tracking-tight">{siteConfig.name}</h1>
          <p className="text-muted text-sm">{siteConfig.description}</p>
        </div>

        {/* All Link*/}
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="bg-card border-border hover:border-accent/50 hover:shadow-accent/5 group animate-fade-in flex w-full items-center gap-4 rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${(index + 1) * 80}ms`, opacity: 0 }}
            >
              {link.icon && (
                <span className="text-muted group-hover:text-accent transition-colors">
                  <link.icon className="h-5 w-5" />
                </span>
              )}
              <div className="flex-1">
                <span className="group-hover:text-accent font-medium transition-colors">{link.name}</span>
                {link.description && <p className="text-muted mt-0.5 text-sm">{link.description}</p>}
              </div>
              <ArrowRightIcon className="text-muted group-hover:text-accent h-4 w-4 transition-all group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-muted animate-fade-in mt-12 text-center text-xs" style={{ animationDelay: `${(links.length + 1) * 80}ms`, opacity: 0 }}>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </div>
  );
}
