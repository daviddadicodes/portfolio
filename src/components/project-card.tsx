import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-white/15">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
        <Image
          src={project.screenshots[0].src}
          alt={project.screenshots[0].alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      </div>
      <div className="border-b border-white/10 bg-gradient-to-br from-cyan-300/10 via-transparent to-fuchsia-500/10 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-cyan-200/75">{project.year}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{project.tagline}</p>
      </div>

      <div className="grid gap-5 p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
              {metric}
            </div>
          ))}
        </div>

        <p className="max-w-2xl leading-7 text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-3">
          <ActionLink href={`/projects/${project.slug}`}>View Project</ActionLink>
          <ActionLink href={project.demo} variant="secondary">
            Live Demo
          </ActionLink>
          <ActionLink href={project.repo} variant="ghost">
            GitHub
          </ActionLink>
        </div>

        <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100">
          Full case study -&gt;
        </Link>
      </div>
    </article>
  );
}
