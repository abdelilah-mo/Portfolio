import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function CVSection() {
  return (
    <section id="cv" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Download professional CV"
          description="Access a PDF copy detailing skills, projects, and DevOps engineering experience."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="terminal-panel flex flex-col items-center justify-between gap-4 p-8 text-center md:flex-row md:text-left"
        >
          <p className="text-slate-300">
            CV file: <span className="font-mono text-cyan-300">Moulatay-Abdelilah-CV.pdf</span>
          </p>
          <a
            href="/Moulatay-Abdelilah-CV.pdf"
            download
            className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Download CV (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CVSection;
