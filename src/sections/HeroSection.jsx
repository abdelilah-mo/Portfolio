import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-20 md:px-6 md:pt-28">
      <div className="grid-overlay absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="terminal-panel p-8 md:p-12"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 px-4 py-1 font-mono text-xs tracking-widest text-cyan-300">
            DEVOPS | FULL STACK | CLOUD AUTOMATION
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            Moulatay Abdelilah
            <span className="block text-cyan-300">DevOps & Full Stack Engineer</span>
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Building scalable microservices and automated CI/CD pipelines
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md border border-cyan-400/40 bg-cyan-500/15 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25"
            >
              View Projects
            </a>
            <a
              href="/Moulatay-Abdelilah-CV.pdf"
              download
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
