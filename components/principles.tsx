const items = [
  {
    n: "i",
    title: "Code, not slides",
    body: "We deliver running software. Diagrams and docs serve the code, not the other way around.",
  },
  {
    n: "ii",
    title: "Small by design",
    body: "Two to four seniors per engagement. No layers between you and the people writing the code.",
  },
  {
    n: "iii",
    title: "Write things down",
    body: "Decisions, trade-offs and runbooks live in the repo. Nothing important survives in heads only.",
  },
  {
    n: "iv",
    title: "Plan our exit early",
    body: "Day one we plan how your team takes over. Every engagement ends with a clean handover.",
  },
];

export default function Principles({
  sectionNumber = "03",
}: {
  sectionNumber?: string;
}) {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} How we operate
            </div>
          </div>
          <h2 className="lg:col-span-9 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            Four principles we don&rsquo;t compromise on.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 border-y border-white/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <div
              key={p.n}
              className="bg-ink-950 p-8 lg:p-10 min-h-[260px] flex flex-col"
            >
              <span className="font-display italic text-xl text-brand-400">
                {p.n}.
              </span>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
