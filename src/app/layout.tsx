import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";

const oxanium = localFont({
  src: "../../public/fonts/Oxanium-VariableFont_wght.ttf",
  variable: "--font-oxanium"
});

const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daviddadicodes-portfolio.vercel.app"),
  title: {
    default: "David Dadi | AI-Assisted Game and Web Developer",
    template: "%s | David Dadi"
  },
  description:
    "Premium developer portfolio for David Dadi, a 2026 junior AI application developer and full-stack AI developer candidate building browser games, responsive web products, and polished interactive interfaces.",
  keywords: [
    "David Dadi",
    "AI-assisted developer",
    "junior AI application developer",
    "full-stack AI developer",
    "Next.js portfolio",
    "game developer portfolio",
    "Three.js developer"
  ],
  openGraph: {
    title: "David Dadi | AI-Assisted Game and Web Developer",
    description:
      "Browser games, interactive frontend work, and AI-assisted development workflows presented in a premium portfolio experience.",
    url: "https://daviddadicodes-portfolio.vercel.app",
    siteName: "David Dadi Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "David Dadi | AI-Assisted Game and Web Developer",
    description:
      "Portfolio featuring 2026 browser games, TypeScript work, case studies, and AI-assisted development workflows."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-noise font-body text-white antialiased">{children}</body>
    </html>
  );
}
