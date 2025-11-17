function FAQ() {
  const faqs = [
    { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade at any time from your account settings." },
    { q: "Do you offer discounts?", a: "We offer annual billing with two months free." },
    { q: "Is there a free trial?", a: "Every paid plan comes with a 14-day free trial, no credit card required." },
    { q: "What is your refund policy?", a: "If you're not satisfied, contact us within 30 days for a full refund." },
  ];

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h3 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h3>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((item, i) => (
          <details key={i} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-slate-800">
              <span className="font-medium">{item.q}</span>
              <svg className="h-5 w-5 text-slate-500 transition group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p className="mt-3 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;