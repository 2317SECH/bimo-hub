import { Reveal } from "./Reveal";

/** Equipo real de BIMO -- mismo contenido (nombres, roles, bios) que ya
 * existe en la página de BIMO Copy. Sin fotos: no hay fotos reales
 * provistas, así que se usan iniciales con fondo degradado en vez de
 * inventar una imagen -- mismo criterio que ya usa la página de Copy
 * para este mismo equipo. */
const FOUNDERS = [
  {
    initials: "SQ",
    name: "Sergio Quintero",
    role: "Founder / Product Vision / Trading Systems",
    desc: "Responsable de la visión de BIMO, diseño de la estrategia de trading, evolución del producto y dirección general del proyecto.",
  },
  {
    initials: "AP",
    name: "Alan Patiño",
    role: "Co-Founder / Platform Architecture / Full Stack Development",
    desc: "Responsable de la arquitectura de la plataforma, desarrollo del portal, infraestructura web, integración del sistema y experiencia del usuario.",
  },
  {
    initials: "EM",
    name: "Esteban Muñoz",
    role: "AI & Trading Systems Collaborator",
    desc: "Colaborador en el desarrollo y mejora del bot BIMO, aportando ideas, validaciones y apoyo en la evolución técnica del sistema.",
  },
];

export function Founders() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Quiénes somos</span>
          <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">Un equipo, no un script</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--ink-muted)]">
            BIMO no es solo software — es la visión, el desarrollo y la colaboración de un equipo real.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.initials} delay={0.05 * i}>
            <div className="flex h-full flex-col rounded-2xl border border-[var(--rule)] bg-[var(--bg-elevated)] p-7 text-left transition-transform duration-300 hover:-translate-y-1">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold text-[#0d0e12]"
                style={{ background: "linear-gradient(135deg, var(--accent), #8fb0ff)" }}
              >
                {f.initials}
              </div>
              <h3 className="mt-5 text-base font-bold text-[var(--ink)]">{f.name}</h3>
              <p className="mt-1 text-xs font-semibold text-[var(--accent)]">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
