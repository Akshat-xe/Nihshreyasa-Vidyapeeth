import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "./about";
import { CheckCircle2, FileText, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026 — Apply Now | Nihshreyasa Vidyapeeth" },
      { name: "description", content: "Admissions open for 2026 intake. Simple application, quick visit, warm welcome. Limited seats for classes 1 to 7 at Nihshreyasa Vidyapeeth." },
      { property: "og:title", content: "Admissions at Nihshreyasa Vidyapeeth — 2026 Intake" },
      { property: "og:description", content: "Apply for classes 1–7. Limited seats. Visit our village campus." },
    ],
  }),
  component: AdmissionsPage,
});

const STEPS = [
  { n: "01", t: "Enquire", d: "Call us or fill the short form. We'll respond within a day." },
  { n: "02", t: "Visit the campus", d: "Meet teachers, walk the grounds, ask anything." },
  { n: "03", t: "Submit documents", d: "Birth certificate, previous TC if any, address proof." },
  { n: "04", t: "Welcome!", d: "Confirm your seat and start the journey." },
];

function AdmissionsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Admissions"
        title={<>Welcome your child to a school that <em className="text-primary not-italic">truly listens</em>.</>}
        sub="Admissions are open for the 2026 academic year. Limited seats per class."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl p-8 bg-gradient-warm text-primary-foreground shadow-glow">
              <p className="text-xs font-bold tracking-[0.22em] uppercase opacity-80">Quick Apply</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Start the application</h2>
              <p className="mt-3 text-primary-foreground/85 max-w-md">
                Tell us a little about your child — we'll guide you through the rest with care.
              </p>
              <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-2xl bg-background/20 backdrop-blur border border-background/30 px-4 py-3 text-sm placeholder:text-primary-foreground/70 focus:outline-none focus:bg-background/30" placeholder="Parent's full name" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input className="rounded-2xl bg-background/20 backdrop-blur border border-background/30 px-4 py-3 text-sm placeholder:text-primary-foreground/70 focus:outline-none focus:bg-background/30" placeholder="Child's name" />
                  <select className="rounded-2xl bg-background/20 backdrop-blur border border-background/30 px-4 py-3 text-sm focus:outline-none focus:bg-background/30">
                    <option className="text-foreground">Class applying for</option>
                    {Array.from({ length: 7 }).map((_, i) => <option key={i} className="text-foreground">Class {i + 1}</option>)}
                  </select>
                </div>
                <input className="rounded-2xl bg-background/20 backdrop-blur border border-background/30 px-4 py-3 text-sm placeholder:text-primary-foreground/70 focus:outline-none focus:bg-background/30" placeholder="Phone number" />
                <button className="mt-2 group inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground text-background px-5 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all">
                  Submit Application <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="rounded-3xl p-6 bg-card border border-border shadow-card flex gap-5 items-start">
                  <span className="font-display font-bold text-3xl text-primary">{s.n}</span>
                  <div>
                    <p className="font-display text-xl font-bold">{s.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Reveal>
          <div className="rounded-3xl p-8 lg:p-10 bg-secondary/60 grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold">What you'll need</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {["Birth certificate", "Address proof", "Previous TC (if any)", "Two passport photos", "Aadhaar (parent + child)", "Last report card (if applicable)"].map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-primary shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <Link to="/contact" className="flex items-center justify-between gap-3 rounded-2xl p-4 bg-card border border-border hover:border-primary/40 transition-colors">
                <span className="flex items-center gap-3 text-sm font-semibold"><Phone size={16} className="text-primary" /> Speak with us</span>
                <ArrowRight size={14} />
              </Link>
              <a href="#" className="flex items-center justify-between gap-3 rounded-2xl p-4 bg-card border border-border hover:border-primary/40 transition-colors">
                <span className="flex items-center gap-3 text-sm font-semibold"><FileText size={16} className="text-primary" /> Download brochure</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
