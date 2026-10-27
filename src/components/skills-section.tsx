import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";

const skillGroups = [
  {
    title: "Portfolio Stack",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Game Project Technologies",
    items: ["HTML", "CSS", "JavaScript", "Three.js", "Canvas 2D", "Firebase"]
  },
  {
    title: "How I Work With AI",
    items: ["UI concepts with ChatGPT", "Build direction in Codex", "Gameplay iteration", "Debugging and testing", "Code review", "Deployment"]
  },
  {
    title: "Product and Delivery Practices",
    items: ["Responsive UI", "Accessibility", "SEO", "Gameplay loops", "HUD systems", "Animation polish", "GitHub", "Vercel deployment"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-16 lg:px-8 lg:py-24">
      <ScrollReveal className="mx-auto max-w-7xl space-y-10 rounded-[2rem] border border-white/8 bg-slate-950/44 p-8 lg:p-10">
        <SectionHeading
          eyebrow="Project Technologies"
          title="Technologies used across my 2026 projects."
          description="These technologies and practices appear in the portfolio and browser games I built with AI assistance."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 80}>
              <article className="rounded-[1.75rem] border border-white/8 bg-black/16 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
