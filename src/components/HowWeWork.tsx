const steps = [
  { title: "Understand", text: "Align on the business goal and audience." },
  { title: "Curate", text: "Select the right inventory, audience, and campaign approach." },
  { title: "Activate", text: "Launch through the appropriate platform or managed workflow." },
  { title: "Measure", text: "Review delivery, engagement, leads, and campaign outcomes." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-16 md:py-24 surface-ink">
    <div className="container-padding max-w-7xl mx-auto">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="eyebrow mb-3">Process</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3">How we work</h2>
        <p className="text-base sm:text-lg text-muted-foreground">A simple process, whichever platform or service fits your goal.</p>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-border pt-6 pb-2">
            <span className="font-serif italic text-5xl text-primary">0{i + 1}</span>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowWeWork;
