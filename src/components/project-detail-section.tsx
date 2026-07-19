type ProjectDetailSectionProps = {
  title: string;
  items?: string[];
  body?: string;
};

export function ProjectDetailSection({ title, items, body }: ProjectDetailSectionProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel lg:p-8">
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">{title}</h2>
      {body ? <p className="mt-4 max-w-4xl leading-7 text-slate-300">{body}</p> : null}
      {items ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
