import { Reveal } from "./Reveal";

const FACULTY = [
  { n: "Mr. Suresh Mahato", r: "Principal", bg: "linear-gradient(135deg,#FF9F5A,#FFB37A)" },
  { n: "Mrs. Kavita Singh", r: "Vice Principal", bg: "linear-gradient(135deg,#5BC0BE,#8AD9D7)" },
  { n: "Mr. Anil Roy", r: "Senior Teacher · +2 experienced", bg: "linear-gradient(135deg,#FFD79A,#FF9F5A)" },
  { n: "Ms. Pooja Verma", r: "Primary Teacher", bg: "linear-gradient(135deg,#A6D8FF,#5BC0BE)" },
  { n: "Mr. Manoj Das", r: "Activity Coordinator", bg: "linear-gradient(135deg,#FFB37A,#FF9F5A)" },
];

export function Faculty() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <Reveal as="p" className="text-xs font-bold tracking-[0.22em] uppercase text-primary">Faculty</Reveal>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Five educators. <br />One mission: every child thrives.
          </Reveal>
        </div>
        <Reveal>
          <p className="max-w-sm text-sm text-muted-foreground">
            A small, supportive team — 1 Principal, 1 Vice Principal and 3 teachers, including a senior +2 educator.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {FACULTY.map((f, i) => (
          <Reveal key={f.n} delay={i * 70}>
            <div className="group text-center">
              <div className="relative mx-auto h-32 w-32 lg:h-36 lg:w-36">
                <div
                  className="absolute inset-0 organic-blob shadow-soft group-hover:rotate-12 transition-transform duration-500"
                  style={{ background: f.bg }}
                />
                <div className="absolute inset-2 rounded-full bg-card grid place-items-center font-display text-3xl font-bold text-foreground/80 shadow-soft">
                  {f.n.split(" ")[1]?.[0] ?? f.n[0]}{f.n.split(" ")[2]?.[0] ?? ""}
                </div>
              </div>
              <p className="mt-4 font-semibold text-sm">{f.n}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{f.r}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
