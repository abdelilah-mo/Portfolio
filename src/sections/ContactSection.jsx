import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-20 pt-16 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build reliable systems together"
          description="For collaboration, internships, and engineering roles, send a message directly."
        />
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="terminal-panel space-y-4 p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
