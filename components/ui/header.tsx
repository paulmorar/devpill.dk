"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./logo";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-wide">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 flex items-start justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-ink-900/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1 mr-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="hidden md:inline-flex group items-center gap-1.5 rounded-full bg-white text-ink-900 px-4 py-2 text-sm font-medium hover:bg-brand-200 transition-colors"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 sm:mx-8 mt-2 rounded-2xl border border-white/10 bg-ink-900/90 backdrop-blur-xl p-4"
          >
            <div className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base text-slate-200 border-b border-white/5 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-ink-900 px-4 py-2.5 text-sm font-medium"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
