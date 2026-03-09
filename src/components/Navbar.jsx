import { motion } from "framer-motion";
import { navLinks } from "../data/portfolioData";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-widest text-cyan-300">
          M.ABDELILAH
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
