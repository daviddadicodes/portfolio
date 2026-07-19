import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: "https://daviddadicodes-portfolio.vercel.app",
      lastModified: new Date()
    }
  ];

  const projectRoutes = projects.map((project) => ({
    url: `https://daviddadicodes-portfolio.vercel.app/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...projectRoutes];
}
