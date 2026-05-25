"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const qa = [
  {
    q: "You're brand new — why hire you?",
    a: "Because the company is new, not the people. You hire the engineers behind it, on a small fixed-scope pilot where the risk is bounded. If the pilot doesn't earn the next step, we both walk away with a useful artifact.",
  },
  {
    q: "Can I see case studies?",
    a: "Not under Devpill — the company was just registered. We're happy to share references and prior work from previous roles on request, and the pilot exists exactly so you can evaluate the work directly.",
  },
  {
    q: "How do you price?",
    a: "Discovery is fixed-price, usually one to two weeks. Pilots are fixed-price, three to six weeks. Longer engagements are weekly retainers with monthly off-ramps.",
  },
  {
    q: "How big are you?",
    a: "Small on purpose. Two to four senior engineers per engagement, no sales layer, no junior bench. If your problem needs a 50-person delivery team, we'll tell you and point you elsewhere.",
  },
  {
    q: "Where are you based?",
    a: "Copenhagen. We work on-site when it helps and remote when it doesn't. Most clients are EU-based.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Retainers cancel with 30 days' notice. Pilots are fixed-scope and run to the end — but they're short by design.",
  },
];

export default function FAQ({
  sectionNumber = "06",
}: {
  sectionNumber?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {sectionNumber && <span>{sectionNumber} /</span>} Honest answers
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tighter">
                Questions you probably have.
              </h2>
            </div>
          </div>
          <ul className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {qa.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl sm:text-2xl text-white">
                      {item.q}
                    </span>
                    <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-slate-300 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
