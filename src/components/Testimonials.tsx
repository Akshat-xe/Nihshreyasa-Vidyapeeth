import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    n: "Anita Devi",
    r: "Parent of Class 3 student",
    q: "My daughter looks forward to school every morning. The teachers actually know her — that personal care is rare.",
  },
  {
    n: "Rajesh Kumar",
    r: "Parent of Class 5 student",
    q: "It's clean, it's safe and the playground is huge. My son comes home talking about kabaddi and English equally.",
  },
  {
    n: "Sunita Sharma",
    r: "Parent of Class 1 student",
    q: "We loved that the school feels like a home — open, green, calm. He learnt to read in just one term.",
  },
];

const COLORS = ["bg-gradient-warm", "bg-gradient-teal", "bg-[linear-gradient(135deg,#FFD79A,#FF9F5A)]"];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Parent Voices</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Loved by the families we serve.
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} delay={i * 100}>
              <article className="h-full rounded-3xl p-7 bg-card shadow-card border border-border relative">
                <Quote size={28} className="text-primary/70" />
                <p className="mt-4 text-base leading-relaxed text-foreground/90">"{r.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className={`h-11 w-11 rounded-full ${COLORS[i]} ring-4 ring-background`} />
                  <div>
                    <p className="font-semibold text-sm">{r.n}</p>
                    <p className="text-xs text-muted-foreground">{r.r}</p>
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
