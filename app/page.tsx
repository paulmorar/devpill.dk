import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Manifesto from "@/components/manifesto";
import Services from "@/components/services";
import Principles from "@/components/principles";
import Process from "@/components/process";
import Pilot from "@/components/pilot";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Cloud",
          "Data",
          "AI",
          "Platform",
          "Product engineering",
          "Security",
          "Fractional CTO",
        ]}
      />
      <Manifesto />
      <Services />
      <Principles />
      <Process />
      <Pilot />
      <FAQ />
      <CTA />
    </>
  );
}
