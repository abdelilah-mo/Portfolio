import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { devopsProjects } from "../data/portfolioData";

function DevopsProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="DevOps Projects"
          title="Automation-first delivery initiatives"
          description="Production-minded DevOps implementations for deployment speed, reliability, and control."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {devopsProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevopsProjectsSection;
