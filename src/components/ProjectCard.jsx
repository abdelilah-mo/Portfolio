import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="terminal-panel p-5"
    >
      <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mb-4 text-sm text-slate-300">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="terminal-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
        >
          <ExternalLink size={16} /> Demo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
