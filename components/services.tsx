"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    n: "01",
    title: "Cloud & Platform",
    tag: "AWS · Azure · GCP",
    description:
      "Production-grade platforms on Kubernetes, ECS or serverless. Reproducible infra, sane CI/CD, observability that actually fires alerts.",
  },
  {
    n: "02",
    title: "AI & ML Engineering",
    tag: "LLMs · RAG · Evaluation",
    description:
      "From a useful prototype to an evaluated, observable system in production. We work with both classical ML and modern LLM stacks.",
  },
  {
    n: "03",
    title: "Data Platforms",
    tag: "Warehouses · Streaming",
    description:
      "Lakehouse, dbt, streaming, governance. Pipelines that don't silently break and a model layer your analysts can actually use.",
  },
  {
    n: "04",
    title: "Product Engineering",
    tag: "Web · Mobile · API",
    description:
      "Senior fullstack work on TypeScript, Next.js, Go and Python. We take features from sketch to production behind a feature flag.",
  },
  {
    n: "05",
    title: "Security & Compliance",
    tag: "SOC 2 · ISO 27001 · GDPR",
    description:
      "Threat modelling, SDLC, identity, secrets, audits. We help you pass the audit and keep the system worth auditing in between.",
  },
  {
    n: "06",
    title: "Fractional CTO",
    tag: "Strategy · Hiring",
    description:
      "Part-time technical leadership for funded startups and scale-ups. Architecture reviews, hiring loops, vendor selection, exec sparring.",
  },
];

export default function Services({
  sectionNumber = "02",
}: {
  sectionNumber?: string;
}) {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-40 border-t border-white/10"
    >
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} What we do
            </div>
          </div>
          <h2 className="lg:col-span-9 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            Six practices, blended to fit your team.
          </h2>
        </div>

        <ul className="border-t border-white/10">
          {items.map((it) => (
            <li
              key={it.n}
              className="group border-b border-white/10 relative overflow-hidden"
            >
              <Link href="/services" className="relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative grid grid-cols-12 items-center gap-6 py-8 sm:py-10 px-2 sm:px-4 transition-transform duration-500 group-hover:translate-x-3">
                  <span className="col-span-2 sm:col-span-1 font-display text-sm text-slate-500">
                    {it.n}
                  </span>
                  <div className="col-span-10 sm:col-span-5">
                    <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
                      {it.title}
                    </h3>
                  </div>
                  <div className="hidden lg:block col-span-5 text-slate-400 max-w-prose opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
                      {it.tag}
                    </p>
                    <p>{it.description}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-6 lg:col-span-1 flex justify-end">
                    <ArrowUpRight className="h-8 w-8 text-slate-500 transition-all duration-500 group-hover:text-white group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
