import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering reliable delivery at scale"
          description="I build robust full-stack products and production-grade DevOps pipelines with a strong focus on automation, observability, and scalability."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="terminal-panel p-7 leading-relaxed text-slate-300 md:p-10"
        >
          Passionate DevOps and Full Stack engineer specializing in automation-first delivery.
          I design scalable architectures, containerized platforms, and CI/CD systems that reduce
          release risk and increase engineering speed. My workflow combines backend engineering,
          cloud-native tooling, and DevOps culture principles to ship secure, resilient products.
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
