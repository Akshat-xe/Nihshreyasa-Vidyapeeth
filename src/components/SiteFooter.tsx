import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-foreground text-background">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-warm">
                <GraduationCap size={20} />
              </span>
              <span className="font-display text-lg font-bold">Nihshreyasa Vidyapeeth</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              A growing village school nurturing classes 1–7 with values, curiosity and a strong NCERT foundation, aligned with JAC / JCERT.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase text-background/90">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                ["About", "/about"],
                ["Programs", "/programs"],
                ["Admissions", "/admissions"],
                ["Campus", "/campus"],
                ["Contact", "/contact"],
              ].map(([l, t]) => (
                <li key={t}>
                  <Link to={t as string} className="hover:text-primary transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase text-background/90">Reach Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /><span>Manihari Tola, Udhua–Radhanagar Rd, Jharkhand, India</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-primary shrink-0" /><span>+91 98765 43210</span></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-primary shrink-0" /><span>hello@nihshreyasa.edu.in</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase text-background/90">Visit Us</h4>
            <a
              href="https://maps.app.goo.gl/q6jt8Q7iYEpYKoXT8"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-background/10 hover:border-primary/60 transition-colors"
            >
              <div className="aspect-[4/3] bg-background/5 grid place-items-center text-background/60 text-xs font-medium hover:text-primary transition-colors">
                Open on Google Maps →
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Nihshreyasa Vidyapeeth. All rights reserved.</p>
          <p>Estd. 2022 · Curriculum: NCERT · Board: JAC / JCERT</p>
        </div>
      </div>
    </footer>
  );
}
