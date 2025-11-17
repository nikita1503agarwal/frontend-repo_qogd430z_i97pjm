function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      description: "Perfect to explore the product.",
      features: ["Up to 3 projects", "Basic analytics", "Community support"],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "Everything you need to launch.",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$99",
      period: "/mo",
      description: "For growing teams and startups.",
      features: ["SAML SSO", "Team billing", "Audit logs", "Dedicated manager"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Pricing that scales with you</h2>
        <p className="mt-3 text-slate-600">Choose a plan that fits your stage. Upgrade anytime.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-blue-400 ring-4 ring-blue-100' : 'border-slate-200'} bg-white p-6 shadow-sm flex flex-col`}>
            {t.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">Most popular</span>
            )}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-1 text-slate-600">{t.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.period}</span>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className={`w-full px-4 py-2 rounded-lg ${t.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'}`}>{t.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;