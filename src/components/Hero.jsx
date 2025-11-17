function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-sm text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          Now with AI automations
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
          The cleanest way to launch your SaaS
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Beautifully crafted landing page with pricing, built with modern design principles. Convert visitors with clarity and speed.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">View pricing</a>
          <button className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50">Book a demo</button>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {['Stripe','Vercel','Notion','Slack','Figma','GitHub'].map((logo) => (
            <div key={logo} className="text-sm text-slate-600">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;