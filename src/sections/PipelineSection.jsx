import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { pipelineStages } from "../data/portfolioData";

function PipelineSection() {
  return (
    <section id="pipeline" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CI/CD Pipeline"
          title="Automated software delivery flow"
          description="Developer to production deployment with integrated quality, packaging, and orchestration."
        />
        <div className="terminal-panel overflow-hidden p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-7">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="relative rounded-lg border border-cyan-500/25 bg-slate-900/70 p-4 text-center font-mono text-xs text-cyan-200"
              >
                {stage}
                {index < pipelineStages.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-cyan-300 md:block">
                    {"->"}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PipelineSection;
