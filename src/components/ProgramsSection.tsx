import { Reveal } from "./Reveal";
import { Baby, BookOpen, Palette, Laptop, ArrowUpRight } from "lucide-react";

const PROGRAMS = [
  {
    icon: Baby,
    title: "Foundation (Class 1–2)",
    text: "Joyful early literacy, numbers and play-based discovery — the warm start every child deserves.",
    bg: "bg-gradient-warm",
  },
  {
    icon: BookOpen,
    title: "Primary (Class 3–5)",
    text: "Strong NCERT foundation in language, math and EVS, taught by certified, caring teachers.",
    bg: "bg-gradient-teal",
  },
  {
    icon: Palette,
    title: "Activity-based Learning",
    text: "Hands-on art, storytelling, kabaddi, table-tennis and outdoor projects across the campus.",
    bg: "bg-[linear-gradient(135deg,#FFD79A,#FF9F5A)]",
  },
  {
    icon: Laptop,
    title: "Digital Learning (6–7)",
    text: "Introduction to computers, English fluency and JAC board readiness with modern teaching tools.",
    bg: "bg-[linear-gradient(135deg,#A6D8FF,#5BC0BE)]",
  },
];

export function ProgramsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Programs</Reveal>
            <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
              Joyful learning, grounded in the curriculum.
            </Reveal>
          </div>
          <Reveal>
            <p className="text-sm text-muted-foreground max-w-sm">
              Every classroom blends NCERT rigor with creative play, sport and time spent in the open air.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group h-full rounded-3xl bg-card p-1.5 shadow-card hover:-translate-y-1 transition-all duration-500">
                <div className={`relative aspect-[5/3] rounded-[20px] ${p.bg} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.45),transparent_60%)]" />
                  <p.icon size={56} className="absolute right-5 bottom-4 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/30 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
