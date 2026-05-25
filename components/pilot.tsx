import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const checks = [
  "Two paid discovery weeks, fixed price",
  "A written brief, plan and risk log you keep",
  "Optional pilot build, three to six weeks",
  "No long-term commitment to continue",
];

export default function Pilot({
  sectionNumber = "05",
}: {
  sectionNumber?: string;
}) {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} Founding-client
              pilot
            </div>
          </div>
          <h2 className="lg:col-span-9 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            Try us first. Decide later.
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-ink-900/60 p-8 sm:p-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-300 max-w-prose">
              Because Devpill is newly registered, our first engagements are
              structured to be low-risk for you: a short, fixed-price discovery
              that produces something useful on its own, and only then a
              decision about a bigger build.
            </p>
            <ul className="space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-white text-ink-900 px-5 py-2.5 text-sm font-medium hover:bg-brand-200 transition-colors"
              >
                Book a discovery call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="mailto:paul@devpill.dk"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                paul@devpill.dk
              </a>
            </div>
          </div>
          <aside className="lg:col-span-5 rounded-2xl border border-white/10 bg-ink-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Honest disclosure
            </p>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Devpill ApS is newly registered. We don&rsquo;t have client case
              studies under this name yet — the pilot exists exactly so you can
              evaluate us on real work, not on a portfolio that doesn&rsquo;t
              exist. References from previous roles are available on request.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
