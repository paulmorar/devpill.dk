"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/ui/page-header";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="text-gradient-brand">what&apos;s next.</span>
          </>
        }
        description="Tell us about the problem you're solving. We'll come back within one business day with thoughts — and either propose a path or point you somewhere better."
      />
      <section className="relative pb-24">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl border border-white/10 bg-ink-900/60 p-6 sm:p-10 space-y-5"
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                      Thanks — message received.
                    </h3>
                    <p className="mt-2 text-slate-400">
                      We&apos;ll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" name="name" />
                      <Field label="Work email" name="email" type="email" />
                    </div>
                    <Field label="Company" name="company" />
                    <div>
                      <label
                        htmlFor="project"
                        className="block text-xs uppercase tracking-widest text-slate-400"
                      >
                        Project
                      </label>
                      <textarea
                        id="project"
                        name="project"
                        rows={5}
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-500 focus:ring-0"
                        placeholder="A few sentences about what you're building."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-900 hover:scale-[1.02] transition-transform"
                    >
                      Send message
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </>
                )}
              </motion.form>
            </div>
            <aside className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "paul@devpill.dk",
                  href: "mailto:paul@devpill.dk",
                },
                {
                  icon: MapPin,
                  label: "Studio",
                  value: "Vesterbrogade 12, Copenhagen",
                  href: undefined,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-violet-400 text-ink-950">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-1 block text-white hover:text-brand-200 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest text-slate-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-500 focus:ring-0"
      />
    </div>
  );
}
