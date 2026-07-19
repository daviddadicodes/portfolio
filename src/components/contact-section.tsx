import { ActionLink } from "@/components/action-link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteLinks } from "@/data/projects";

const channels = [
  {
    label: "Email",
    value: "daviddadicodes@gmail.com",
    href: siteLinks.email
  },
  {
    label: "GitHub",
    value: "github.com/daviddadicodes",
    href: siteLinks.github
  },
  {
    label: "LinkedIn",
    value: "David Dadi",
    href: siteLinks.linkedin
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8 lg:py-24">
      <ScrollReveal className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/8 bg-slate-950/56 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open to junior AI application and full-stack AI opportunities."
          description="If you&apos;re hiring for a 2026 role where product craft, frontend quality, and AI-assisted development matter, I&apos;d love to connect."
        />

        <div className="grid gap-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.5rem] border border-white/10 bg-black/18 p-5 transition hover:border-white/15 hover:bg-black/24"
            >
              <p className="font-accent text-[11px] uppercase tracking-[0.22em] text-slate-500">{channel.label}</p>
              <p className="mt-2 text-lg text-white">{channel.value}</p>
            </a>
          ))}

          <div className="flex flex-wrap gap-3 pt-3">
            <ActionLink href={siteLinks.email}>Email Me</ActionLink>
            <ActionLink href={siteLinks.resume} variant="secondary">
              Download Resume
            </ActionLink>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
