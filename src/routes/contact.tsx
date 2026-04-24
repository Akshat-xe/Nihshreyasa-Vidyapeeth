import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "./about";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visit & Reach Us | Nihshreyasa Vidyapeeth" },
      { name: "description", content: "Reach Nihshreyasa Vidyapeeth in Manihari Tola, Jharkhand. Book a visit, ask about admissions, or simply say hello." },
      { property: "og:title", content: "Contact Nihshreyasa Vidyapeeth" },
      { property: "og:description", content: "Visit our village campus or get in touch — we'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  { i: MapPin, t: "Address", d: "Manihari Tola, Udhua–Radhanagar Rd, Jharkhand, India", link: "https://maps.app.goo.gl/q6jt8Q7iYEpYKoXT8" },
  { i: Phone, t: "Phone", d: "+91 98765 43210", link: "tel:+919876543210" },
  { i: Mail, t: "Email", d: "hello@nihshreyasa.edu.in", link: "mailto:hello@nihshreyasa.edu.in" },
  { i: Clock, t: "Office Hours", d: "Mon – Sat · 8:30 AM – 2:30 PM" },
];

function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title={<>Come <em className="text-primary not-italic">say hello</em>.</>}
        sub="Walk our campus, meet our teachers, see the playground. We love guests."
      />

      <section className="container mx-auto px-4 py-12 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {INFO.map((it, i) => {
            const Inner = (
              <div className="rounded-3xl p-6 bg-card border border-border shadow-card hover:border-primary/40 transition-colors h-full">
                <span className="grid place-items-center h-11 w-11 rounded-2xl bg-primary/15 text-primary"><it.i size={18} /></span>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{it.t}</p>
                <p className="mt-1 font-semibold">{it.d}</p>
              </div>
            );
            return (
              <Reveal key={it.t} delay={i * 70}>
                {it.link ? <a href={it.link} target={it.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : Inner}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="lg:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl p-8 lg:p-10 bg-gradient-soft border border-border shadow-card">
            <h2 className="font-display text-3xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within a day.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <input placeholder="Your name" className="rounded-2xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <input placeholder="Phone number" className="rounded-2xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            </div>
            <input placeholder="Email address" className="mt-4 w-full rounded-2xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <textarea placeholder="How can we help?" rows={5} className="mt-4 w-full rounded-2xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
            <button className="mt-5 group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-soft">
              Send message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <Reveal>
          <a href="https://maps.app.goo.gl/q6jt8Q7iYEpYKoXT8" target="_blank" rel="noreferrer" className="block rounded-3xl overflow-hidden border border-border shadow-card group">
            <iframe
              title="Nihshreyasa Vidyapeeth location"
              src="https://www.google.com/maps?q=Manihari+Tola+Udhua+Radhanagar+Road+Jharkhand&output=embed"
              className="w-full h-[420px] grayscale-[20%] group-hover:grayscale-0 transition-all"
              loading="lazy"
            />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
