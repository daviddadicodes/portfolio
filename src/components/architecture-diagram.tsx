import { ArchitectureLane } from "@/types/project";

type ArchitectureDiagramProps = {
  lanes: ArchitectureLane[];
};

export function ArchitectureDiagram({ lanes }: ArchitectureDiagramProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {lanes.map((lane, index) => (
        <div key={lane.title} className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
          {index < lanes.length - 1 ? (
            <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyan-300/60 to-transparent lg:block" />
          ) : null}
          <p className="font-accent text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">Layer {index + 1}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">{lane.title}</h3>
          <ul className="mt-4 space-y-3">
            {lane.points.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-300">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
