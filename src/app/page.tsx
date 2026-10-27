import { AboutSection } from "@/components/about-section";
import { AiWorkflowSection } from "@/components/ai-workflow-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <AiWorkflowSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
