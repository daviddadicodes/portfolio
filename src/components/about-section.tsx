import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";

const bullets = [
  "Self-taught developer from Ontario who likes shipping complete, playable projects.",
  "Built from HTML and CSS into TypeScript, browser games, interactive UI, and AI-assisted development."
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
      <ScrollReveal className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/8 bg-slate-950/52 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <SectionHeading
          eyebrow="About"
          title="Useful products. Strong interfaces. Steady execution."
          description="I like building work that feels clear, responsive, and finished."
        />

        <div className="grid gap-4">
          {bullets.map((bullet, index) => (
            <ScrollReveal key={bullet} delay={index * 80}>
              <div className="rounded-[1.75rem] bg-black/18 p-6">
                <p className="leading-7 text-slate-300">{bullet}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
