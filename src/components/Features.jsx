function Features() {
  const items = [
    {
      title: "Launch-ready",
      desc: "Start with a polished template that looks and feels premium.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
      )
    },
    {
      title: "Built for speed",
      desc: "Fast-loading, responsive, and accessible by default.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      )
    },
    {
      title: "Easy to customize",
      desc: "Change colors, content, and layout in minutes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"/></svg>
      )
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;