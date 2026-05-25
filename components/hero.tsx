"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Line = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <span className="block overflow-hidden">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 sm:pt-40 pb-20">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-[120px] animate-aurora" />
        <div
          className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[120px] animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="container-wide">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open for clients · 2026
          </span>
          <span className="hidden sm:inline">Copenhagen · Remote EU</span>
        </motion.div>

        {/* Split layout: headline left, body+bullets+link right */}
        <div className="mt-12 sm:mt-16 grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
          <h1 className="lg:col-span-7 font-display font-medium tracking-tighter leading-[0.95] text-[clamp(3rem,8.5vw,9rem)]">
            <Line>The IT consultancy</Line>
            <Line delay={0.1}>
              that delivers more{" "}
              <span className="italic font-light text-slate-300">for</span>
            </Line>
            <Line delay={0.2}>
              <span className="text-gradient-brand animate-gradient-x">
                less.
              </span>
            </Line>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 lg:pt-6 space-y-6 text-slate-300"
          >
            <p className="text-lg leading-relaxed text-balance">
              IT budgets are under pressure. You need to deliver more for the
              same budget — or less. We rethink the engagement model so a small,
              senior team can ship the work of a much bigger one.
            </p>

            <div>
              <p className="text-white">A Devpill engagement gives you:</p>
              <ul className="mt-3 space-y-2 text-slate-300">
                {[
                  "Senior engineers, no juniors parachuted in",
                  "Fixed-scope pilots before any long commitment",
                  "Code and infrastructure you own from day one",
                  "Honest trade-offs in writing, not slideware",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-accent text-[15px] font-medium text-brand-300 hover:text-brand-200 transition-colors"
              >
                Read more about how we work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-white text-ink-900 px-5 py-2.5 text-sm font-medium hover:bg-brand-200 transition-colors"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
