import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
