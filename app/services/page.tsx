import PageHeader from "@/components/ui/page-header";
import Services from "@/components/services";
import Process from "@/components/process";
import Pilot from "@/components/pilot";
import CTA from "@/components/cta";

export const metadata = { title: "Services — Devpill" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Engineering practices,{" "}
            <span className="text-gradient-brand animate-gradient-x">
              tailored to outcomes.
            </span>
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
