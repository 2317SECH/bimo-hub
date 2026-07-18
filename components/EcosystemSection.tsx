"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mascot } from "./Mascot";
import { Reveal } from "./Reveal";
import { DivisionCard } from "./DivisionCard";
import { playChime } from "@/lib/sound";

const BIMO_COPY_URL = "http://200.234.228.59/";
// Directo a /tienda (catálogo completo, 49 productos), no a la Home del
// storefront -- la Home muestra solo 5 destacados a propósito, pero acá
// la gente entra buscando ver todo el catálogo de una.
const BIMO_SHOP_URL = "https://bimoshop-storefront.vercel.app/tienda";

const SHOP_ACCENT = { accent: "#d4a017", glow: "rgba(212, 160, 23, 0.5)" };
const COPY_ACCENT = { accent: "#4d7dff", glow: "rgba(77, 125, 255, 0.5)" };
const STUDIOS_ACCENT = { accent: "#b07fff", glow: "rgba(176, 127, 255, 0.5)" };

/** Grilla de las 3 divisiones + panel de BIMO Studios -- Studios está
 * OCULTO por default (regla de Sergio: "no quiero que me salga BIMO
 * Studios si no le doy ahí"), solo aparece al hacer clic en su tarjeta,
 * con toda la info (pilares, proyectos creados, contacto) de una. Shop y
 * Copy siguen siendo links reales a otro proyecto -- no se tocan. */
export function EcosystemSection() {
  const [studiosOpen, setStudiosOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  function openStudios() {
    const next = !studiosOpen;
    setStudiosOpen(next);
    if (next) {
      playChime([
        [440.0, 0],
        [659.25, 0.1],
      ]);
      requestAnimationFrame(() => {
        document.getElementById("studios-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  return (
    <>
      {/* ============ ECOSISTEMA ============ */}
      <section id="ecosistema" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-16">
        <div className="section-glow" />
        <Reveal chime={[[523.25, 0], [783.99, 0.12]]}>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">El ecosistema</span>
            <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">Tres divisiones, una raíz</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0.05}>
            <DivisionCard
              title="BIMO Shop"
              tagline="Productos inteligentes diseñados para mejorar tu experiencia diaria. Catálogo elegante, compra premium."
              note="Catálogo en rotación — nuevas piezas cada 1 a 2 semanas"
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
              onClick={openStudios}
              actionLabel={studiosOpen ? "Ocultar ←" : "Ver más →"}
              {...STUDIOS_ACCENT}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ BIMO STUDIOS -- oculto hasta que le dan clic ============ */}
      <AnimatePresence initial={false}>
        {studiosOpen && (
          <motion.section
            id="studios-panel"
            key="studios-panel"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative overflow-hidden"
            style={{ "--accent": STUDIOS_ACCENT.accent, "--accent-glow": STUDIOS_ACCENT.glow } as CSSProperties}
          >
            <div className="mx-auto max-w-2xl px-6 py-20 text-center">
              <div className="section-glow" />
              <Mascot size={130} className="mx-auto" {...STUDIOS_ACCENT} />
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                BIMO Studios
              </span>
              <h2 className="display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
                BIMO crea tecnología inteligente para el futuro
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]">
                La misma disciplina de ingeniería que ya construyó BIMO Shop y BIMO Copy, ahora disponible para
                empresas y proyectos que necesitan bots, inteligencia artificial y automatización a medida.
              </p>

              <p className="mt-8 text-xs uppercase tracking-wide text-[var(--ink-faint)]">Lo que hacemos</p>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                {["Creación de bots", "Automatizaciones empresariales", "Sistemas personalizados", "Inteligencia artificial"].map(
                  (p) => (
                    <span
                      key={p}
                      className="rounded-full border border-[var(--rule)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--ink-muted)]"
                    >
                      {p}
                    </span>
                  )
                )}
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-wide text-[var(--ink-faint)]">Proyectos creados</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: COPY_ACCENT.accent, color: COPY_ACCENT.accent }}
                  >
                    BIMO Copy
                  </span>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: SHOP_ACCENT.accent, color: SHOP_ACCENT.accent }}
                  >
                    BIMO Shop
                  </span>
                  <span className="rounded-full border border-[var(--rule)] px-3 py-1 text-xs font-semibold text-[var(--ink-faint)]">
                    BIMO Cash · Próximamente
                  </span>
                </div>
              </div>

              <a
                href="mailto:hola@bimo.ai"
                className="mt-10 inline-block rounded-full border px-7 py-3 text-sm font-semibold text-[var(--ink)] transition-colors"
                style={{ borderColor: "var(--accent)", background: "rgba(176, 127, 255, 0.12)" }}
              >
                ¿Querés crear una solución tecnológica para tu empresa?
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
