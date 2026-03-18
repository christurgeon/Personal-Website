import { siteConfig } from "@/lib/config";
import { projects, getLanguageColor } from "@/lib/projects";
import { GitHubIcon, ArrowRightIcon, ExternalLinkIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `A selection of open-source and personal projects by ${siteConfig.name}.`,
  alternates: { canonical: "/projects" },
};

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  const link = project.website ?? project.github;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-card border-border hover:border-accent/30 hover:shadow-accent/5 relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: getLanguageColor(project.language) }}
          />
          <span className="text-muted text-sm">{project.language}</span>
        </div>

        <h3
          className={`group-hover:text-accent mb-3 font-serif font-medium tracking-tight transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>

        <p className="text-muted mb-4 line-clamp-2">{project.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-accent/10 text-accent rounded-full px-2.5 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-muted ml-4 flex shrink-0 items-center gap-1.5">
            {project.github && <GitHubIcon className="h-5 w-5" />}
            {project.website && <ExternalLinkIcon className="h-5 w-5" />}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="animate-fade-in mb-12">
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">Projects</h1>
        <p className="text-muted text-xl">Things I&apos;ve built, mostly for fun.</p>
      </header>

      <div className="animate-fade-in-delay-1 grid gap-6 md:grid-cols-2">
        {featured && <ProjectCard project={featured} featured />}
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
