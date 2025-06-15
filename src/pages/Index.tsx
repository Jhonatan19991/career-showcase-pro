
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <ProjectsSection />
      <AboutSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
