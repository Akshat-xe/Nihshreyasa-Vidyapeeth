import { Reveal } from "./Reveal";
import aboutImg from "@/assets/school-about.jpg";
import { CheckCircle2 } from "lucide-react";

const STATS = [
  { v: "200+", l: "Students" },
  { v: "5", l: "Dedicated Staff" },
  { v: "4", l: "Classrooms" },
  { v: "2022", l: "Founded" },
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] max-w-lg organic-blob overflow-hidden shadow-glow animate-blob">
            <img src={aboutImg} alt="Nihshreyasa Vidyapeeth campus building with flower beds" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:right-8 glass rounded-3xl p-5 shadow-soft max-w-xs animate-float-slow">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Since 2022</p>
            <p className="font-display text-xl font-bold mt-1">From a quiet beginning to a growing village school.</p>
          </div>
        </Reveal>

        <div>
          <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">About the school</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            A simple campus today,<br />a strong foundation for tomorrow.
          </Reveal>
          <Reveal as="p" className="mt-5 text-muted-foreground leading-relaxed">
            Nihshreyasa Vidyapeeth is a village-based school in rural Jharkhand, focused on foundational education for classes 1 to 7. We follow the NCERT curriculum aligned with the Jharkhand Academic Council (JAC / JCERT), and we believe a child's first years deserve space, calm and care.
          </Reveal>

          <ul className="mt-6 space-y-2.5">
            {[
              "Discipline, values & nature-connected learning",
              "Clean sanitation, separate facilities for boys & girls",
              "Submersible water, hand pump backup, dedicated handwash area",
              "Library under revamp — opening within 3 months",
            ].map((t, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="flex items-start gap-3 text-sm">
                <CheckCircle2 size={18} className="mt-0.5 text-primary shrink-0" />
                <span>{t}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="rounded-2xl p-4 bg-secondary/60 hover:bg-secondary transition-colors">
                  <p className="font-display text-3xl font-bold text-foreground">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
