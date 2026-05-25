"use client";

import { motion } from "framer-motion";

const text =
  "We're a small studio that codes, ships and operates. Most consultancies sell you slides and hand you a binder. We sell working software you actually own — and we stay until it runs in production.";

export default function Manifesto({
  sectionNumber = "01",
}: {
  sectionNumber?: string;
}) {
  const words = text.split(" ");
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/10">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-[0.2em] text-slate-400">
              {sectionNumber && <span>{sectionNumber} /</span>} Manifesto
            </div>
          </div>
          <p className="lg:col-span-9 font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                className="inline-block mr-[0.2em]"
              >
                {w}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
