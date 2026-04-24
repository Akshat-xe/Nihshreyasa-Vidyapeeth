import { Brain, Users, ShieldCheck, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: Brain, label: "Smart Learning", note: "Activity + digital first" },
  { icon: Users, label: "Expert Teachers", note: "Caring & certified" },
  { icon: ShieldCheck, label: "Safe Environment", note: "Hygienic & secure" },
  { icon: Building2, label: "Modern Campus", note: "Nature-connected" },
];

export function FeaturesStrip() {
  return (
    <section className="container mx-auto px-4 -mt-8">
      <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 glass rounded-3xl p-5 lg:p-6 shadow-soft">
        {ITEMS.map(({ icon: Icon, label, note }, i) => (
          <div
            key={label}
            className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary/60 transition-all"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-warm text-primary-foreground shadow-glow group-hover:rotate-6 transition-transform">
              <Icon size={20} />
            </span>
            <div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
