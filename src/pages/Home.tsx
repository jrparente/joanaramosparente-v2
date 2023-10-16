import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillBar from "../components/SkillBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillBar />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
