import { Reveal } from "./Reveal";
import { UserCog, Sparkles, Trophy, HeartHandshake, Languages, Leaf } from "lucide-react";

const POINTS = [
  { icon: UserCog, t: "Personalized Learning", d: "Small classes mean every child is seen, heard and helped." },
  { icon: Sparkles, t: "Smart Tools", d: "Modern teaching aids and curated digital content from class 4." },
  { icon: Trophy, t: "Skill Development", d: "Sports, art and leadership through Head Boy / Head Girl programs." },
  { icon: HeartHandshake, t: "Strong Values", d: "Discipline, kindness and respect woven into every day." },
  { icon: Languages, t: "Bilingual Confidence", d: "Hindi-rooted with growing English fluency from Class 1." },
  { icon: Leaf, t: "Nature Connected", d: "Trees, flowers, fresh air — the campus is our biggest classroom." },
];

export function WhyUs() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Why Nihshreyasa</Reveal>
        <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
          Reasons families choose us, again and again.
        </Reveal>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {POINTS.map((p, i) => (
          <Reveal key={p.t} delay={i * 70}>
            <div className="group h-full relative rounded-3xl p-6 bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all shadow-card">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all">
                <p.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <span className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
