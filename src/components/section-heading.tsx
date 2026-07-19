type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="font-accent text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}
