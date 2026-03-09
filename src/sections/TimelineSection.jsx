import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/portfolioData";

function TimelineSection() {
  return (
    <section id="timeline" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience Timeline"
          title="Engineering Learning Journey"
          description="Professional growth through training, hands-on projects, and DevOps practice."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-2 h-[92%] w-px bg-slate-700 md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const contentPosition =
                index % 2 === 0 ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10 md:text-left";
              return (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative grid gap-4 md:grid-cols-2"
                >
                  <div className={contentPosition}>
                    <span className="font-mono text-cyan-300">{item.year}</span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.detail}</p>
                  </div>
                  {index % 2 === 0 ? <div className="hidden md:block" /> : null}
                  <div className="absolute left-2.5 top-2 z-10 rounded-full border border-cyan-400/40 bg-slate-900 p-2 md:left-1/2 md:-translate-x-1/2">
                    <Icon size={16} className="text-cyan-300" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
