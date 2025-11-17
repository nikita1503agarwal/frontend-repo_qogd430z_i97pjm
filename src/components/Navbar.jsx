import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
          <span className="font-semibold text-slate-900 tracking-tight">AcmeCloud</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">Get started</button>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-300 text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="py-1">Features</a>
            <a href="#pricing" className="py-1">Pricing</a>
            <a href="#faq" className="py-1">FAQ</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-slate-700 border border-slate-300 rounded-lg">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;