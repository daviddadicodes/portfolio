export type ArchitectureLane = {
  title: string;
  points: string[];
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  summary: string;
  description: string;
  repo: string;
  demo: string | null;
  stack: string[];
  role: string;
  status: string;
  featured: boolean;
  screenshots: ProjectScreenshot[];
  highlights: string[];
  metrics: string[];
  problem: string;
  solution: string;
  architecture: ArchitectureLane[];
  challenges: string[];
  aiWorkflow: string[];
  testing: string[];
  lessons: string[];
  videoNote: string;
};
