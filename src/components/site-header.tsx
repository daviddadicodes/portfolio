import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { siteLinks } from "@/data/projects";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-accent text-lg font-bold text-cyan-200 shadow-glow">
            DD
          </span>
          <span>
            <span className="block font-display text-lg font-semibold tracking-[-0.02em]">David Dadi</span>
            <span className="block font-accent text-[11px] uppercase tracking-[0.22em] text-slate-400">AI-Assisted Builder</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ActionLink href={siteLinks.resume} variant="secondary">
            Download Resume
          </ActionLink>
        </div>
      </div>
    </header>
  );
}
