import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the problem you're solving. We'll come back within one business day — and either propose a path or point you somewhere better.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Devpill",
    description:
      "Talk to a senior engineer about your project. One-business-day reply.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Devpill",
    description: "Talk to a senior engineer about your project.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
