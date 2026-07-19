import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real 2026 work with live demos and full case studies."
          description="Each project links to the problem, solution, architecture, testing, and lessons learned."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">Additional shipped project</h3>
              <p className="mt-2 leading-7 text-slate-300">Neon Snake Reactor is included as an extra compact case study.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
                  <ProjectCardLink key={project.slug} slug={project.slug} title={project.title} />
                ))}
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCardLink({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"
    >
      {title}
    </Link>
  );
}
