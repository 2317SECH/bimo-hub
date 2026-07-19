import { Mascot } from "@/components/Mascot";
import { Reveal } from "@/components/Reveal";
import { Founders } from "@/components/Founders";
import { SoundToggle } from "@/components/SoundToggle";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ContactSection } from "@/components/ContactSection";

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
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-9 overflow-hidden px-6 text-center">
        <div className="hero-ambient">
          <div className="hero-grid" />
          <div className="bg-particles">
            <span /><span /><span /><span />
          </div>
        </div>

        <Reveal delay={0}>
          <div className="relative flex items-center justify-center">
            <span className="orbit-ring r2" />
            <span className="orbit-ring r1" />
            <Mascot size={240} interactive />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="wordmark display flex text-6xl leading-none sm:text-7xl">
            B
            <span className="i">
              <span className="dot" />
              <span className="stem" />
            </span>
            MO
          </h1>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              IA · Automatización · Comercio · Software
            </span>
            <p className="max-w-md text-lg text-[var(--ink)]">Tecnología con intención.</p>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
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
        </Reveal>
      </section>

      {/* ============ QUE ES BIMO ============ */}
      <section className="relative mx-auto max-w-2xl overflow-hidden px-6 py-28 text-center">
        <div className="section-glow" />
        <Reveal chime={[[392.0, 0], [587.33, 0.1]]}>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Qué es BIMO</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Una empresa que construye tecnología
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]">
            Creamos productos, sistemas inteligentes y automatizaciones con IA. Comercio, trading, bots — cada
            división resuelve algo distinto, todas comparten la misma disciplina.
          </p>
        </Reveal>
      </section>

      <EcosystemSection />

      <div className="relative overflow-hidden">
        <div className="section-glow" />
        <Founders />
      </div>

      <ContactSection />

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[var(--rule)] px-6 py-16 text-center">
        <Mascot size={48} className="mx-auto" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          Tecnología con intención.
        </p>
        <p className="mt-2 text-xs text-[var(--ink-faint)]">© {new Date().getFullYear()} BIMO. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
