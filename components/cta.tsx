import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA({
  sectionNumber = "07",
}: {
  sectionNumber?: string;
}) {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} Get in touch
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 p-10 sm:p-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[120px]" />
          <h2 className="relative font-display text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.95]">
            Let&rsquo;s build something
            <br />
            <span className="text-gradient-brand animate-gradient-x">
              worth shipping.
            </span>
          </h2>
          <div className="relative mt-10 flex flex-wrap items-center gap-5">
            <a
              href="mailto:hello@devpill.dk"
              className="group inline-flex items-center gap-2 text-xl sm:text-2xl text-white hover:text-brand-200 transition-colors"
            >
              hello@devpill.dk
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white text-ink-900 px-5 py-2.5 text-sm font-medium hover:bg-brand-200 transition-colors"
            >
              Book a discovery call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
