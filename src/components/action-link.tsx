import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href?: string | null;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-cyan-300/30 bg-cyan-300/8 text-cyan-50 hover:border-cyan-200/50 hover:bg-cyan-300/14",
  secondary:
    "border-white/10 bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.08]",
  ghost:
    "border-white/0 bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
};

export function ActionLink({ href, children, variant = "primary", className }: ActionLinkProps) {
  const baseClassName = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition duration-300",
    variants[variant],
    className
  );

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(baseClassName, "cursor-not-allowed border-white/10 bg-white/[0.03] text-slate-500")}
      >
        {children}
      </span>
    );
  }

  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a className={baseClassName} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={baseClassName} href={href}>
      {children}
    </Link>
  );
}
