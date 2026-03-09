import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { techGroups } from "../data/portfolioData";

function TechStackSection() {
  return (
    <section id="stack" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Core technologies across product and platform"
          description="Modern frontend and backend engineering combined with cloud-native DevOps tooling."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="terminal-panel p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="text-cyan-300" size={22} />
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="terminal-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
