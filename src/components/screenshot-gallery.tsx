import Image from "next/image";

import { ProjectScreenshot } from "@/types/project";

type ScreenshotGalleryProps = {
  screenshots: ProjectScreenshot[];
  title?: string;
};

export function ScreenshotGallery({ screenshots, title = "Screenshots" }: ScreenshotGalleryProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel lg:p-8">
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">{title}</h2>
      <p className="mt-4 max-w-4xl leading-7 text-slate-300">
        Captured from the running build to show the real interface and moment-to-moment presentation of the project.
      </p>
      <div className="mt-8 grid gap-6">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
            <div className="relative aspect-[16/10]">
              <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-300">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
