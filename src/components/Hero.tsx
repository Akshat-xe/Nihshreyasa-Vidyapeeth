import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/school-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 organic-blob bg-gradient-warm opacity-30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 organic-blob-2 bg-gradient-teal opacity-25 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-sun" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/80 shadow-soft">
              <Sparkles size={14} className="text-primary" />
              Estd. 2022 · NCERT · JAC / JCERT aligned
            </div>

            <h1 className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Shaping <span className="relative inline-block">
                <span className="relative z-10">future minds</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-primary/40 -z-0 rounded-full" />
              </span>
              <br /> with <em className="text-primary not-italic">smart learning</em>.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              At Nihshreyasa Vidyapeeth, creativity meets technology and confidence grows — a village school for classes 1–7, surrounded by green grass, flowers and a playground 3× the building itself.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Explore Programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full glass border-foreground/10 px-6 py-3.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all"
              >
                <Calendar size={16} />
                Book a Visit
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  "linear-gradient(135deg,#FF9F5A,#FFB37A)",
                  "linear-gradient(135deg,#5BC0BE,#8AD9D7)",
                  "linear-gradient(135deg,#FFD79A,#FF9F5A)",
                  "linear-gradient(135deg,#A6D8FF,#5BC0BE)",
                ].map((bg, i) => (
                  <span
                    key={i}
                    className="h-10 w-10 rounded-full ring-4 ring-background shadow-soft"
                    style={{ background: bg }}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Trusted by <strong className="text-foreground">200+ families</strong> in our village
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Big organic frame */}
              <div className="absolute inset-0 organic-blob overflow-hidden shadow-glow animate-blob">
                <img
                  src={heroImg}
                  alt="Children of Nihshreyasa Vidyapeeth in front of the school building surrounded by flowers and grass"
                  className="h-full w-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating glass cards */}
              <div className="absolute -left-4 lg:-left-12 top-10 glass rounded-2xl p-3 pr-4 shadow-soft animate-float-slow">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Today</p>
                    <p className="text-sm font-semibold">Activity-based class</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 lg:-right-10 bottom-12 glass rounded-2xl p-4 shadow-soft animate-float-slow" style={{ animationDelay: "-2.5s" }}>
                <p className="text-xs text-muted-foreground">Live count</p>
                <p className="font-display text-2xl font-bold text-foreground">200<span className="text-primary">+</span></p>
                <p className="text-xs text-muted-foreground">happy students</p>
              </div>

              <div className="absolute right-6 -top-3 rounded-full glass px-3 py-1.5 text-[11px] font-semibold shadow-soft animate-float-slow" style={{ animationDelay: "-1s" }}>
                🌿 Learning in nature
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="mt-20 border-y border-border/60 bg-secondary/40 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4 text-foreground/60 font-display italic">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["Curiosity", "Confidence", "Character", "Creativity", "Community", "Curiosity", "Confidence", "Character"].map((w, i) => (
                <span key={i} className="text-2xl flex items-center gap-12">
                  {w}
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
