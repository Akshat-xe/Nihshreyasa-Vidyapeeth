import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "./about";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Clock, BookMarked, Palette, Trophy } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — NCERT Curriculum, Class 1 to 7 | Nihshreyasa Vidyapeeth" },
      { name: "description", content: "Explore our programs: Foundation, Primary, Activity-based learning and Digital learning. NCERT curriculum aligned with JAC for classes 1–7." },
      { property: "og:title", content: "Programs at Nihshreyasa Vidyapeeth" },
      { property: "og:description", content: "Joyful learning grounded in NCERT, with sport, art and digital tools." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Programs"
        title={<>Curriculum that's <em className="text-primary not-italic">joyful</em>, grounded & growing.</>}
        sub="NCERT-aligned with JAC / JCERT — designed for the unique pace of every child from class 1 to 7."
      />

      <ProgramsSection />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Clock, t: "School hours", d: "8:30 AM – 2:30 PM, Mon–Sat" },
            { i: BookMarked, t: "Curriculum", d: "NCERT · JAC / JCERT board" },
            { i: Palette, t: "Activities", d: "Art, music, kabaddi, T-T" },
            { i: Trophy, t: "Annual function", d: "Held Oct – Dec each year" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="rounded-3xl p-6 bg-card border border-border shadow-card">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-warm text-primary-foreground shadow-glow"><c.i size={20} /></span>
                <p className="mt-4 font-display text-xl font-bold">{c.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
