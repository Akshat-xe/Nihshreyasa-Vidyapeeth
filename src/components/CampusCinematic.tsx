import { useEffect, useRef, useState } from "react";

const FRAMES = [
  "/frames/frame-001.jpg",
  "/frames/frame-015.jpg",
  "/frames/frame-030.jpg",
  "/frames/frame-045.jpg",
  "/frames/frame-060.jpg",
  "/frames/frame-075.jpg",
  "/frames/frame-090.jpg",
  "/frames/frame-105.jpg",
  "/frames/frame-120.jpg",
];

/**
 * Cinematic scroll-driven sequence of the school flythrough.
 * The component pins itself for ~2x viewport while the user scrolls,
 * stepping through frames to feel like a 3D camera dolly.
 */
export function CampusCinematic() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload frames
    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      const i = Math.min(FRAMES.length - 1, Math.floor(p * (FRAMES.length - 0.01)));
      setIdx(i);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels = [
    { p: 0.05, title: "Main Building", note: "2-floor, 4 classrooms" },
    { p: 0.35, title: "Playground", note: "3× the building · multi-sport" },
    { p: 0.65, title: "Garden & Flowers", note: "Learning in nature" },
    { p: 0.9, title: "Front Entrance", note: "Where the day begins" },
  ];
  const activeLabel = [...labels].reverse().find((l) => progress >= l.p) ?? labels[0];

  return (
    <section ref={wrapRef} className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-foreground">
        {/* Frame stack */}
        {FRAMES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `scale(${1 + progress * 0.05})` }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-sun pointer-events-none" />

        {/* UI overlay */}
        <div className="absolute inset-0 flex flex-col">
          <div className="container mx-auto px-4 pt-28 lg:pt-36">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-background/90">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Cinematic Campus Tour
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-background text-balance">
                A village campus that breathes <em className="not-italic text-primary">nature</em>.
              </h2>
              <p className="mt-4 text-background/80 max-w-xl">
                Scroll to glide above our school — from the bright orange roofs to the wide-open playground that's nearly 3× the building itself.
              </p>
            </div>
          </div>

          {/* Floating label cards */}
          <div className="mt-auto pb-12 lg:pb-20">
            <div className="container mx-auto px-4">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div className="glass rounded-3xl p-5 max-w-xs shadow-soft">
                  <p className="text-xs uppercase tracking-widest text-background/70">Now Viewing</p>
                  <p className="mt-1 font-display text-2xl font-bold text-background">{activeLabel.title}</p>
                  <p className="text-sm text-background/80">{activeLabel.note}</p>
                </div>

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 min-w-64">
                  <span className="text-xs text-background/70">Tour</span>
                  <div className="flex-1 h-1.5 rounded-full bg-background/20 overflow-hidden">
                    <div
                      className="h-full bg-gradient-warm transition-[width] duration-200"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-background/90">{Math.round(progress * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
