"use client";

import { motion } from "framer-motion";

export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-white/10 py-8 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap gap-12 font-display text-3xl sm:text-5xl text-slate-200"
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(89,193,255,0.8)]" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
