import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Reveal } from "@/components/Reveal";
import aerial from "@/assets/school-aerial.jpg";
import campus from "@/assets/school-campus.jpg";
import { Trees, Droplets, Toilet, Zap, Volleyball, BookOpen } from "lucide-react";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus — Infrastructure & Facilities | Nihshreyasa Vidyapeeth" },
      { name: "description", content: "Explore the campus of our village school: 4 classrooms, sprawling 3x playground, gardens, sanitation, clean water, and growing infrastructure." },
      { property: "og:title", content: "Campus — Nihshreyasa Vidyapeeth" },
      { property: "og:description", content: "A green, calm, nature-connected campus in rural Jharkhand." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: CampusPage,
});

const FACILITIES = [
  { i: Volleyball, t: "Multi-sport playground", d: "Cricket, football, badminton, volleyball, basketball — 4-in-1 ground." },
  { i: Trees, t: "Gardens & flowers", d: "Trees, grass and seasonal flowers across the campus." },
  { i: Toilet, t: "Sanitation", d: "3 bathrooms — separate for boys & girls + dedicated handwash area." },
  { i: Droplets, t: "Water", d: "Submersible water system with hand pump backup." },
  { i: Zap, t: "Electricity", d: "Available ~80% of the day with rural-realistic backup." },
  { i: BookOpen, t: "Library (revamping)", d: "Currently under construction — opening within 3 months." },
];

function CampusPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Campus"
        title={<>A village campus that breathes <em className="text-primary not-italic">nature</em>.</>}
        sub="A green, calm, and spacious learning environment featuring a sprawling multi-sport playground that is nearly 3× the size of the building itself."
      />

      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Facilities</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Honest infrastructure, growing every term.
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.t} delay={i * 70}>
              <div className="group h-full rounded-3xl p-6 bg-card border border-border shadow-card hover:-translate-y-1 transition-all">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><f.i size={20} /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 grid lg:grid-cols-2 gap-5">
        <Reveal>
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
            <img src={aerial} alt="Aerial view of Nihshreyasa Vidyapeeth" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
            <img src={campus} alt="School building exterior" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
