import { siteLinks } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>David Dadi portfolio, built with Next.js, TypeScript, and Tailwind CSS.</p>
        <div className="flex flex-wrap gap-5">
          <a href={siteLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href={siteLinks.email} className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
