import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus", label: "Campus" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto flex items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "glass shadow-soft max-w-5xl"
              : "bg-transparent max-w-6xl"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2 group">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-warm shadow-glow text-primary-foreground">
              <GraduationCap size={18} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-base text-foreground">Nihshreyasa</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Vidyapeeth</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active
                      ? "text-foreground bg-secondary/70"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 transition-all hover:shadow-soft"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full glass"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 mx-auto max-w-6xl glass rounded-3xl p-4 shadow-soft animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-secondary/70"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
