import Link from "next/link";

import { ActionLink } from "@/components/action-link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-panel">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white">Project not found</h1>
        <p className="mt-4 leading-8 text-slate-300">
          The case study you requested is missing or the link has changed.
        </p>
        <div className="mt-8 flex justify-center">
          <ActionLink href="/">Return Home</ActionLink>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          You can also go back to the <Link href="/" className="text-cyan-200">homepage</Link>.
        </p>
      </div>
    </main>
  );
}
