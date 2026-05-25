const steps = [
  {
    n: "01",
    title: "Discover",
    body: "One or two paid weeks where we read the code, talk to the team and write a short brief. You keep it whether or not we continue.",
  },
  {
    n: "02",
    title: "Design",
    body: "We turn the brief into a concrete plan: scope, risks, milestones and a budget you can defend. Decisions go in writing.",
  },
  {
    n: "03",
    title: "Build",
    body: "Senior engineers ship the work in short iterations behind feature flags. You see progress every week, not every quarter.",
  },
  {
    n: "04",
    title: "Operate",
    body: "We run it with you, write the runbooks, train the team and hand over cleanly. The exit is part of the plan.",
  },
];

export default function Process({
  sectionNumber = "04",
}: {
  sectionNumber?: string;
}) {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} How we work
            </div>
          </div>
          <h2 className="lg:col-span-9 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            From brief to handover, in four phases.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-ink-950 p-8 lg:p-10 min-h-[280px] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-slate-500">
                  {s.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_14px_rgba(89,193,255,0.9)]" />
              </div>
              <h3 className="mt-8 font-display text-2xl sm:text-3xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
