function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-4 py-6 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Moulatay Abdelilah. All rights reserved.</p>
        <p className="font-mono text-cyan-300">DevOps | Full Stack | Microservices</p>
      </div>
    </footer>
  );
}

export default Footer;
