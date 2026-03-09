import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { microservices } from "../data/portfolioData";

function MicroservicesSection() {
  return (
    <section id="architecture" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Microservices Architecture"
          title="Gateway-driven distributed services"
          description="Service boundaries connected through an API gateway and centralized persistence."
        />
        <div className="terminal-panel p-6 md:p-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0.7, 1] }}
              viewport={{ once: true }}
              className="mb-6 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-sm text-cyan-200"
            >
              API Gateway
            </motion.div>
            <div className="mb-4 h-8 w-px bg-cyan-400/40" />
            <div className="grid w-full gap-3 md:grid-cols-4">
              {microservices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="rounded-lg border border-slate-700 bg-slate-900/70 p-4 text-center text-sm text-slate-200"
                >
                  {service}
                </motion.div>
              ))}
            </div>
            <div className="my-4 h-8 w-px bg-cyan-400/40" />
            <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 font-mono text-sm text-emerald-200">
              MongoDB + MySQL Databases
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicroservicesSection;
