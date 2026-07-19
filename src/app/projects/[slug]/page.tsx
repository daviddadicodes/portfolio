import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionLink } from "@/components/action-link";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ProjectDetailSection } from "@/components/project-detail-section";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects, siteLinks } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <section className="px-6 pb-16 pt-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <Link href="/" className="inline-flex text-sm text-cyan-200 transition hover:text-cyan-100">
            &lt;- Back to homepage
          </Link>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-panel">
            <div className="border-b border-white/10 bg-gradient-to-br from-cyan-300/10 via-transparent to-fuchsia-500/10 p-8 lg:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="font-accent text-xs uppercase tracking-[0.32em] text-cyan-200/75">{project.year} Case Study</p>
                  <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    {project.title}
                  </h1>
                  <p className="mt-5 text-lg leading-7 text-slate-300">{project.description}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 font-accent text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  {project.status}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href={project.demo}>Live Demo</ActionLink>
                <ActionLink href={project.repo} variant="secondary">
                  GitHub Repo
                </ActionLink>
                <ActionLink href={siteLinks.resume} variant="ghost">
                  Resume
                </ActionLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 leading-7 text-slate-300">
                  {metric}
                </div>
              ))}
            </div>
          </div>

          <ProjectDetailSection title="Problem" body={project.problem} />
          <ProjectDetailSection title="Solution" body={project.solution} />
          <ProjectDetailSection title="Technologies Used" items={project.stack} />
          <ScreenshotGallery screenshots={project.screenshots} />

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel lg:p-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">Architecture</h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-300">
              This diagram summarizes how the project is organized from interface to systems to persistence or service
              layers.
            </p>
            <div className="mt-8">
              <ArchitectureDiagram lanes={project.architecture} />
            </div>
          </section>

          <ProjectDetailSection title="Challenges Solved" items={project.challenges} />

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel lg:p-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">Demo Walkthrough</h2>
            <div className="mt-6 rounded-[1.75rem] border border-cyan-300/15 bg-slate-950/70 p-6">
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image src={project.screenshots[0].src} alt={project.screenshots[0].alt} fill className="object-cover" />
              </div>
              <p className="font-accent text-xs uppercase tracking-[0.22em] text-cyan-200/75">Walkthrough Status</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.videoNote}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href={project.demo}>Live Demo</ActionLink>
                <ActionLink href={project.repo} variant="secondary">
                  View Source
                </ActionLink>
              </div>
            </div>
          </section>

          <ProjectDetailSection title="AI Development Workflow" items={project.aiWorkflow} />
          <ProjectDetailSection title="Testing Process" items={project.testing} />
          <ProjectDetailSection title="Lessons Learned" items={project.lessons} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
