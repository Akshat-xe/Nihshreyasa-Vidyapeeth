import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 lg:p-16 bg-gradient-warm shadow-glow text-primary-foreground">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 organic-blob bg-white/10 animate-blob" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-primary-foreground/80">Admissions Open · 2026 Intake</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
                Give your child the best start.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Limited seats. Visit the campus, meet our teachers and see learning that's grounded in nature, NCERT and joy.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-3">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-soft"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-background/30 px-6 py-3.5 text-sm font-semibold hover:bg-background/25 transition-all"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
