import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="container-wide py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="max-w-sm text-sm text-slate-400">
              Devpill is a new boutique IT consultancy out of Copenhagen.
              Senior, hands-on engineering for cloud, data and AI work.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Github, label: "GitHub" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link className="hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link className="hover:text-white" href="/services">
                  Cloud &amp; Platform
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services">
                  Data &amp; AI
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services">
                  Security &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Devpill ApS. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Copenhagen · Remote across EU
          </p>
        </div>
      </div>
    </footer>
  );
}
