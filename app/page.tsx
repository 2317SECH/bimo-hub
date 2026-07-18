import { Mascot } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { DivisionCard } from "@/components/DivisionCard";

/** Página principal del ecosistema BIMO -- capa de marca que conecta las
 * 3 divisiones (Shop / Copy / Studios), cada una independiente, sin
 * mezclar código ni lógica entre ellas. BIMO Copy no se toca: esta página
 * solo enlaza a lo que ya existe en el VPS. */

// TODO: actualizar cuando el dominio real quede conectado -- hoy apunta
// directo a la IP del VPS porque todavía no hay DNS armado (ver Fase 5).
const BIMO_COPY_URL = "http://200.234.228.59/";
const BIMO_SHOP_URL = "https://bimoshop-storefront.vercel.app";

export default function Home() {
  return (
    <main>
      <div className="bg-ambient" />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center gap-7 px-6 text-center">
        <Mascot size={200} />
        <h1 className="wordmark display flex text-6xl leading-none sm:text-7xl">
          B
          <span className="i">
            <span className="dot" />
            <span className="stem" />
          </span>
          MO
        </h1>
        <p className="max-w-md text-lg text-[var(--ink-muted)]">
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
            BIMO agrupa productos, sistemas inteligentes y automatización bajo una misma disciplina de ingeniería.
            Cada división resuelve un problema distinto — comercio, análisis, desarrollo a medida — pero todas
            comparten la misma forma de pensar: observar, construir, medir y mejorar.
          </p>
        </Reveal>
      </section>

      {/* ============ ECOSISTEMA ============ */}
      <section id="ecosistema" className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">El ecosistema</span>
            <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">Tres divisiones, una marca</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.05}>
            <DivisionCard
              title="BIMO Shop"
              tagline="Productos inteligentes para mejorar tu día a día."
              href={BIMO_SHOP_URL}
              external
            />
          </Reveal>
          <Reveal delay={0.1}>
            <DivisionCard
              title="BIMO Copy"
              tagline="Un sistema inteligente diseñado para automatización y análisis."
              href={BIMO_COPY_URL}
              external
            />
          </Reveal>
          <Reveal delay={0.15}>
            <DivisionCard
              title="BIMO Studios"
              tagline="Construimos bots, IA y automatizaciones para empresas."
              href="#studios"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <DivisionCard title="BIMO Cash" tagline="Próximo proyecto del ecosistema." soon />
          </Reveal>
        </div>
      </section>

      {/* ============ BIMO STUDIOS ============ */}
      <section id="studios" className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <Mascot size={130} className="mx-auto" />
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
          <a
            href="mailto:hola@bimo.ai"
            className="mt-10 inline-block rounded-full border border-[var(--accent)] bg-[rgba(77,125,255,0.12)] px-7 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[rgba(77,125,255,0.2)]"
          >
            ¿Querés crear una solución tecnológica para tu empresa?
          </a>
        </Reveal>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[var(--rule)] px-6 py-12 text-center">
        <Mascot size={48} className="mx-auto" />
        <p className="mt-4 text-xs text-[var(--ink-faint)]">© {new Date().getFullYear()} BIMO. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
