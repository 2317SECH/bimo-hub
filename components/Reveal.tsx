"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { playChime } from "@/lib/sound";

/** Aparición al hacer scroll -- mismo patrón que ya usa BIMO Shop
 * (storefront/components/motion/Reveal.tsx), reutilizado acá para que la
 * identidad de movimiento sea consistente en todo el ecosistema.
 *
 * `chime`: acorde corto al entrar en pantalla (una sola vez) -- mismo
 * concepto que los "panelChimes" de BIMO Copy, adaptado a scroll en vez
 * de navegación por paneles. Solo se pasa en el primer Reveal de cada
 * sección grande, no en cada elemento chico (sería ruido, no marca). */
export function Reveal({
  children,
  delay = 0,
  chime,
}: {
  children: ReactNode;
  delay?: number;
  chime?: [freq: number, delay: number][];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      onViewportEnter={chime ? () => playChime(chime) : undefined}
    >
      {children}
    </motion.div>
  );
}
