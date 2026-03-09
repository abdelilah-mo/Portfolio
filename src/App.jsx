import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import PipelineSection from "./sections/PipelineSection";
import MicroservicesSection from "./sections/MicroservicesSection";
import DevopsProjectsSection from "./sections/DevopsProjectsSection";
import FullStackProjectsSection from "./sections/FullStackProjectsSection";
import DashboardSection from "./sections/DashboardSection";
import TimelineSection from "./sections/TimelineSection";
import CVSection from "./sections/CVSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <PipelineSection />
        <DevopsProjectsSection />
        <FullStackProjectsSection />
        <DashboardSection />
        <TimelineSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
