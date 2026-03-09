import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="section-title">{eyebrow}</p>
      <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">{description}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
