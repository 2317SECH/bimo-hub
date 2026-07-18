import { Mascot } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { DivisionCard } from "@/components/DivisionCard";
import { Founders } from "@/components/Founders";

/** Página principal del ecosistema BIMO -- capa de marca que conecta las
 * 3 divisiones (Shop / Copy / Studios), cada una independiente, sin
 * mezclar código ni lógica entre ellas. BIMO Copy no se toca: esta
 * página solo enlaza a lo que ya existe en el VPS, con SU PROPIA
 * identidad (mascota en su azul real), no la identidad general de BIMO. */

// TODO: actualizar cuando el dominio real quede conectado -- hoy apunta
// directo a la IP del VPS porque todavía no hay DNS armado (ver Fase 5).
const BIMO_COPY_URL = "http://200.234.228.59/";
const BIMO_SHOP_URL = "https://bimoshop-storefront.vercel.app";

// Paleta por división -- tokens ya existentes en design-tokens.css de
// BIMO Copy (--warning: orange, --ai: purple), no inventados de cero.
const SHOP_ACCENT = { accent: "#ff9500", glow: "rgba(255, 149, 0, 0.5)" };
const COPY_ACCENT = { accent: "#4d7dff", glow: "rgba(77, 125, 255, 0.5)" };
const STUDIOS_ACCENT = { accent: "#b07fff", glow: "rgba(176, 127, 255, 0.5)" };

export default function Home() {
  return (
    <main>
      {/* ============ HERO -- BIMO raíz, dorado ============ */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center gap-7 overflow-hidden px-6 text-center">
        <div className="hero-ambient">
          <div className="hero-grid" />
        </div>

        <div className="relative flex items-center justify-center">
          <span className="orbit-ring r2" />
          <span className="orbit-ring r1" />
          <Mascot size={210} />
        </div>

        <h1 className="wordmark display flex text-6xl leading-none sm:text-7xl">
          B
          <span className="i">
            <span className="dot" />
            <span className="stem" />
          </span>
          MO
        </h1>
        <p className="max-w-lg text-lg text-[var(--ink-muted)]">
          Un ecosistema de tecnología inteligente — comercio, automatización e inteligencia artificial, construidos
          con el mismo criterio.
        </p>
        <a
          href="#ecosistema"
          className="mt-2 flex flex-col items-center gap-2 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          <span>Conocé el ecosistema</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
            <path
              d="M3 6L8 11L13 6"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* ============ QUE ES BIMO ============ */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Qué es BIMO</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
            Una empresa que construye tecnología, no una sola cosa
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]">
            BIMO es un ecosistema tecnológico que crea productos, sistemas inteligentes y automatizaciones mediante
            inteligencia artificial. Desarrolla comercio digital, automatización, bots inteligentes, sistemas de
            análisis y herramientas tecnológicas — cada división resuelve un problema distinto, pero todas comparten
            la misma disciplina: observar, construir, medir y mejorar.
          </p>
        </Reveal>
      </section>

      {/* ============ ECOSISTEMA ============ */}
      <section id="ecosistema" className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">El ecosistema</span>
            <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">Tres divisiones, una raíz</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.05}>
            <DivisionCard
              title="BIMO Shop"
              tagline="Productos inteligentes diseñados para mejorar tu experiencia diaria. Catálogo elegante, compra premium."
              href={BIMO_SHOP_URL}
              external
              {...SHOP_ACCENT}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <DivisionCard
              title="BIMO Copy"
              tagline="Un sistema inteligente de automatización y análisis para trading y ejecución basada en datos."
              href={BIMO_COPY_URL}
              external
              {...COPY_ACCENT}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <DivisionCard
              title="BIMO Studios"
              tagline="Construimos bots, inteligencia artificial y automatizaciones para empresas."
              href="#studios"
              {...STUDIOS_ACCENT}
            />
          </Reveal>
          <Reveal delay={0.2}>
            <DivisionCard title="BIMO Cash" tagline="Próximo proyecto del ecosistema." soon />
          </Reveal>
        </div>
      </section>

      {/* ============ BIMO STUDIOS -- violeta, identidad propia ============ */}
      <section
        id="studios"
        className="mx-auto max-w-2xl px-6 py-24 text-center"
        style={{ "--accent": STUDIOS_ACCENT.accent, "--accent-glow": STUDIOS_ACCENT.glow } as React.CSSProperties}
      >
        <Reveal>
          <Mascot size={130} className="mx-auto" {...STUDIOS_ACCENT} />
        </Reveal>
        <Reveal delay={0.08}>
          <span className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
            BIMO Studios
          </span>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
            BIMO crea tecnología inteligente para el futuro
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]">
            La misma disciplina de ingeniería que ya construyó BIMO Shop y BIMO Copy, ahora disponible para empresas
            y proyectos que necesitan bots, inteligencia artificial y automatización a medida.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Bots", "Inteligencia artificial", "Automatizaciones", "Soluciones personalizadas"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-[var(--rule)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--ink-muted)]"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-wide text-[var(--ink-faint)]">Ya construimos</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: SHOP_ACCENT.accent, color: SHOP_ACCENT.accent }}>
                BIMO Shop
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: COPY_ACCENT.accent, color: COPY_ACCENT.accent }}>
                BIMO Copy
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.38}>
          <a
            href="mailto:hola@bimo.ai"
            className="mt-10 inline-block rounded-full border px-7 py-3 text-sm font-semibold text-[var(--ink)] transition-colors"
            style={{ borderColor: "var(--accent)", background: "rgba(176, 127, 255, 0.12)" }}
          >
            ¿Querés crear una solución tecnológica para tu empresa?
          </a>
        </Reveal>
      </section>

      <Founders />

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[var(--rule)] px-6 py-12 text-center">
        <Mascot size={48} className="mx-auto" />
        <p className="mt-4 text-xs text-[var(--ink-faint)]">© {new Date().getFullYear()} BIMO. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
