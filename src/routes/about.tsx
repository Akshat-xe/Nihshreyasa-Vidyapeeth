import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/school-about.jpg";
import aerial from "@/assets/school-aerial.jpg";
import { ArrowRight, Sparkles, Sprout, Users2, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nihshreyasa Vidyapeeth | Our Story Since 2022" },
      { name: "description", content: "From a quiet beginning in 2022 to a thriving village school for classes 1–7. Discover our values, NCERT curriculum, JAC alignment and growth journey." },
      { property: "og:title", content: "About Nihshreyasa Vidyapeeth — Our Story" },
      { property: "og:description", content: "A village school grounded in NCERT, JAC and nature. Honest, growing, value-driven." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About" title={<>A small school with a <em className="text-primary not-italic">big heart</em>.</>} sub="Honest. Growing. Rooted in our village. Reaching for the future." />

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[5/6] organic-blob overflow-hidden shadow-glow animate-blob">
            <img src={aboutImg} alt="School courtyard with flowers" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Our Story</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Started in 2022. Still rising in 2026.
          </Reveal>
          <Reveal as="p" className="mt-5 text-muted-foreground leading-relaxed">
            Nihshreyasa Vidyapeeth was born from a simple belief: every child in our village deserves a school that respects them — calm classrooms, clean facilities, real teachers, and a campus where the playground is bigger than the building.
          </Reveal>
          <Reveal as="p" className="mt-3 text-muted-foreground leading-relaxed">
            We follow the NCERT curriculum aligned with the Jharkhand Academic Council (JAC / JCERT). Our atmosphere is disciplined, value-driven and connected to nature. We're not over-polished — we're honest, growing, and intentional.
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              { i: Sprout, t: "Founded 2022", d: "Steady growth till today" },
              { i: Users2, t: "200+ students", d: "Classes 1 to 7" },
              { i: Sparkles, t: "NCERT + JAC", d: "Curriculum & board alignment" },
              { i: Calendar, t: "Annual function", d: "Held every Oct–Dec" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="rounded-2xl p-4 bg-secondary/60 flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary"><b.i size={18} /></span>
                  <div>
                    <p className="font-semibold text-sm">{b.t}</p>
                    <p className="text-xs text-muted-foreground">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-[2rem] overflow-hidden shadow-card border border-border">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 aspect-video lg:aspect-auto relative">
              <img src={aerial} alt="Aerial view of school" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 bg-card">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Our Promise</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-balance">A growing village school with space, values & vision.</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We may be simple today — but we're building a strong foundation for tomorrow. Our library is being revamped within 3 months. Our playground hosts cricket, football, badminton, kabaddi and more. Our teachers know every child by name.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all">
                Visit our campus <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <div className="absolute -top-32 -right-20 h-96 w-96 organic-blob bg-gradient-warm opacity-25 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 organic-blob-2 bg-gradient-teal opacity-20 blur-3xl animate-blob" />
      <div className="container mx-auto px-4 relative">
        <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">{eyebrow}</Reveal>
        <Reveal as="h1" className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-balance max-w-4xl">
          {title}
        </Reveal>
        <Reveal as="p" className="mt-6 text-lg text-muted-foreground max-w-2xl">{sub}</Reveal>
      </div>
    </section>
  );
}
