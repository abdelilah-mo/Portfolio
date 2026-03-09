import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const initialMetrics = [
  { label: "Pipelines Running", value: 14, suffix: "" },
  { label: "Containers Deployed", value: 84, suffix: "" },
  { label: "Cluster Nodes", value: 12, suffix: "" },
  { label: "Uptime Monitoring", value: 99.94, suffix: "%" },
];

function DashboardSection() {
  const [metrics, setMetrics] = useState(initialMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          if (metric.label === "Uptime Monitoring") {
            const next = 99.9 + Math.random() * 0.09;
            return { ...metric, value: Number(next.toFixed(2)) };
          }

          const variance = Math.floor(Math.random() * 4) - 1;
          return { ...metric, value: Math.max(1, Number(metric.value) + variance) };
        })
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="DevOps Dashboard"
          title="Live-style platform metrics simulation"
          description="A terminal-inspired metrics board representing pipeline and infrastructure health."
        />
        <div className="grid gap-5 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="terminal-panel p-5"
            >
              <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">{metric.label}</p>
              <p className="font-mono text-3xl font-bold text-cyan-300">
                {metric.value}
                {metric.suffix}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
