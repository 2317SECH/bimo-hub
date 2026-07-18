import { Mascot } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { Founders } from "@/components/Founders";
import { SoundToggle } from "@/components/SoundToggle";
import { EcosystemSection } from "@/components/EcosystemSection";

/** Página principal del ecosistema BIMO -- capa de marca que conecta las
 * 3 divisiones (Shop / Copy / Studios), cada una independiente, sin
 * mezclar código ni lógica entre ellas. BIMO Copy no se toca: esta
 * página solo enlaza a lo que ya existe en el VPS, con SU PROPIA
 * identidad (mascota en su azul real), no la identidad general de BIMO.
 *
 * BIMO Studios vive en EcosystemSection.tsx -- oculto por default, solo
 * aparece al hacer clic en su tarjeta (no se muestra solo con scroll). */
export default function Home() {
  return (
    <main>
      <SoundToggle />

      {/* ============ HERO -- BIMO raíz, dorado ============ */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center gap-7 overflow-hidden px-6 text-center">
        <div className="hero-ambient">
          <div className="hero-grid" />
        </div>

        <div className="relative flex items-center justify-center">
          <span className="orbit-ring r2" />
          <span className="orbit-ring r1" />
          <Mascot size={210} interactive />
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
          <span>Conoce el ecosistema</span>
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
      <section className="relative mx-auto max-w-2xl overflow-hidden px-6 py-24 text-center">
        <div className="section-glow" />
        <Reveal chime={[[392.0, 0], [587.33, 0.1]]}>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Qué es BIMO</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
            Una empresa que construye tecnología
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

      <EcosystemSection />

      <div className="relative overflow-hidden">
        <div className="section-glow" />
        <Founders />
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[var(--rule)] px-6 py-12 text-center">
        <Mascot size={48} className="mx-auto" />
        <p className="mt-4 text-xs text-[var(--ink-faint)]">© {new Date().getFullYear()} BIMO. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
