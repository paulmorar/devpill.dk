import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import Services from "@/components/services";
import Process from "@/components/process";
import Pilot from "@/components/pilot";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud & platform, AI & ML, data platforms, product engineering, security and fractional CTO. Six practices we blend to fit your team and risk profile.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Devpill",
    description:
      "Cloud, data, AI, product engineering, security and fractional CTO work — sized to your team.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Devpill",
    description:
      "Cloud, data, AI, product engineering, security and fractional CTO work — sized to your team.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Engineering practices,{" "}
            <span className="text-gradient-brand">tailored to outcomes.</span>
          </>
        }
        description="We organise our work around six practices. Most engagements blend two or three — always sized to your team and risk profile."
      />
      <Services sectionNumber="" />
      <Process sectionNumber="" />
      <Pilot sectionNumber="" />
      <CTA sectionNumber="" />
    </>
  );
}
