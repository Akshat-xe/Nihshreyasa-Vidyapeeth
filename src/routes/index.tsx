import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturesStrip } from "@/components/FeaturesStrip";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Faculty } from "@/components/Faculty";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nihshreyasa Vidyapeeth — Shaping Future Minds | Village School, Jharkhand" },
      { name: "description", content: "Where creativity meets technology and confidence grows. NCERT/JAC village school for classes 1–7 with 200+ students, big playground & nature-connected campus." },
      { property: "og:title", content: "Nihshreyasa Vidyapeeth — Shaping Future Minds" },
      { property: "og:description", content: "A growing village school with 200+ students, joyful learning, NCERT curriculum and a sprawling playground." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <AboutSection />
      <ProgramsSection />
      <WhyUs />
      <Testimonials />
      <Faculty />
      <CtaBanner />
    </>
  );
}
