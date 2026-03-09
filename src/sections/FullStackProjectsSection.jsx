import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { fullStackProjects } from "../data/portfolioData";

function FullStackProjectsSection() {
  return (
    <section id="fullstack-projects" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Full Stack Projects"
          title="Application engineering with scalable backends"
          description="Business-focused software projects spanning UI, APIs, and data architecture."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {fullStackProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FullStackProjectsSection;
