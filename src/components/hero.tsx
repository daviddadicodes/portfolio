import { ActionLink } from "@/components/action-link";
import { DotGrid } from "@/components/dot-grid";
import { TextType } from "@/components/text-type";
import { siteLinks } from "@/data/projects";

const stats = [
  { label: "2026 Shipped Projects", value: "5+" },
  { label: "Deployment Ready", value: "Vercel" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0">
        <DotGrid
          dotSize={4}
          gap={30}
          baseColor="#67e8f9"
          activeColor="#a5f3fc"
          proximity={150}
          className="opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.12),transparent_30%),linear-gradient(180deg,rgba(5,8,22,0.14),rgba(5,8,22,0.78))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="space-y-10">
          <div className="space-y-7">
            <TextType
              as="h1"
              text="Building Web Games With Clean UI."
              typingSpeed={48}
              initialDelay={180}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-cyan-200"
              className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
            />
            <p className="mx-auto max-w-2xl text-lg leading-7 text-slate-300 sm:text-xl">
              I&apos;m David Dadi, a self-taught developer from Ontario building responsive interfaces, interactive
              frontends, and AI-assisted product work.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ActionLink href="#projects">View Work</ActionLink>
            <ActionLink href={siteLinks.resume} variant="secondary">
              Resume
            </ActionLink>
            <ActionLink href={siteLinks.github} variant="ghost">
              GitHub
            </ActionLink>
          </div>

          <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-panel">
                <p className="font-accent text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
