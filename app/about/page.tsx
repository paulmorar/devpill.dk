import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import Principles from "@/components/principles";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devpill is a newly registered, founder-led IT consultancy out of Copenhagen. The company is new — the engineering behind it isn't.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Devpill",
    description:
      "A small, founder-led IT consultancy out of Copenhagen — just getting started.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Devpill",
    description:
      "A small, founder-led IT consultancy out of Copenhagen — just getting started.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A small studio,{" "}
            <span className="text-gradient-brand animate-gradient-x">
              just getting started.
            </span>
          </>
        }
        description="Devpill is a newly registered consultancy out of Copenhagen. The company is new — the engineering behind it isn't. We started Devpill to do the kind of senior, hands-on work that's hard to find inside bigger consultancies."
      />
      <section className="relative py-12 sm:py-20">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                We&apos;re a founder-led studio. The person who writes your
                proposal also writes your code. No account manager, no junior
                being parachuted in once the contract is signed.
              </p>
              <p>
                We&apos;re not going to claim a long client list we don&apos;t
                have. Instead, what we offer is a small, fixed-scope pilot — so
                you can see the work before committing to anything bigger.
              </p>
              <p>
                If you&apos;d like references from previous roles before we
                start, ask. We&apos;re happy to share them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Founded", v: "2026" },
                { k: "Status", v: "Open for clients" },
                { k: "Base", v: "Copenhagen" },
                { k: "Working", v: "Remote, EU" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/10 bg-ink-900/40 backdrop-blur p-6"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {s.k}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Principles sectionNumber="" />
      <FAQ sectionNumber="" />
      <CTA sectionNumber="" />
    </>
  );
}
