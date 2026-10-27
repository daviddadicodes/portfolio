import { ScrollReveal } from "@/components/scroll-reveal";

const workflowSteps = [
  {
    number: "01",
    title: "Game Idea",
    description: "I define the concept, gameplay direction, and experience I want to create."
  },
  {
    number: "02",
    title: "UI Concept",
    description: "I use ChatGPT to explore the visual direction and create a reference screenshot."
  },
  {
    number: "03",
    title: "Codex Build",
    description: "I bring the design and requirements into Codex and guide the implementation into a playable browser game."
  },
  {
    number: "04",
    title: "Test and Ship",
    description: "I playtest, identify issues, refine the interface and gameplay, and prepare the project for deployment."
  }
];

export function AiWorkflowSection() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/8 bg-slate-950/52 p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            AI-Assisted Workflow
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            From UI concept to playable browser game.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I direct each project from the first visual idea through implementation, testing, refinement, and deployment.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 80}>
              <article className="h-full rounded-[1.75rem] border border-white/8 bg-black/18 p-6">
                <p className="font-accent text-xs font-semibold tracking-[0.24em] text-cyan-300/70">{step.number}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
