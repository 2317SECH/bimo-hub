"use client";

import { useId, useRef, useEffect, type CSSProperties } from "react";

/** Mascota BIMO -- misma figura base que ya existe en la página de BIMO
 * Copy (mismo cuerpo, mismos ojos/pupilas), pero acepta un color de
 * acento distinto por división -- "mismo concepto, evolucionado" (regla
 * de Sergio: sin mascota nueva desde cero, sin repetir exactamente la
 * misma identidad de Copy para todo el ecosistema). El acento define el
 * punto de la cabeza y las pupilas vía custom properties, así cada
 * división se distingue sin duplicar el SVG.
 *
 * `interactive`: las pupilas siguen el mouse -- mismo truco que ya usa
 * la página real de BIMO Copy en su hero (getBoundingClientRect + clamp
 * del desplazamiento), reutilizado acá, no reinventado. */
export function Mascot({
  size = 200,
  className = "",
  accent,
  glow,
  interactive = false,
}: {
  size?: number;
  className?: string;
  accent?: string;
  glow?: string;
  interactive?: boolean;
}) {
  const gradientId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilLRef = useRef<SVGCircleElement>(null);
  const pupilRRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!interactive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMouseMove(e: MouseEvent) {
      const svg = svgRef.current;
      const pl = pupilLRef.current;
      const pr = pupilRRef.current;
      if (!svg || !pl || !pr) return;
      const rect = svg.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 300));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 300));
      pl.setAttribute("cx", String(80 + dx * 4));
      pl.setAttribute("cy", String(95 + dy * 2.5));
      pr.setAttribute("cx", String(120 + dx * 4));
      pr.setAttribute("cy", String(95 + dy * 2.5));
    }

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [interactive]);

  // sin accent/glow explícitos, no se fija ningún --accent local -- así
  // hereda el del ancestro más cercano (raíz dorada por default, o el
  // escopeado por una sección/tarjeta puntual) en vez de auto-referenciar
  // la variable (lo que la invalida y cae a negro).
  const style: CSSProperties | undefined =
    accent || glow
      ? ({
          ...(accent ? { "--accent": accent } : {}),
          ...(glow ? { "--accent-glow": glow } : {}),
        } as CSSProperties)
      : undefined;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`bimo-fig ${className}`}
      style={style}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4e7ec" />
          <stop offset="100%" stopColor="#aeb3bd" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="182" rx="50" ry="9" opacity="0.3" fill="var(--bimo-shadow)" />
      <rect className="bimo-foot" x="68" y="152" width="20" height="24" rx="10" />
      <rect className="bimo-foot" x="112" y="152" width="20" height="24" rx="10" />
      <rect fill={`url(#${gradientId})`} x="36" y="28" width="128" height="144" rx="48" />
      <ellipse className="bimo-recess" cx="100" cy="98" rx="48" ry="40" />
      <ellipse className="bimo-eye" cx="80" cy="98" rx="10" ry="13" />
      <ellipse className="bimo-eye" cx="120" cy="98" rx="10" ry="13" />
      <circle
        ref={pupilLRef}
        className={`bimo-pupil ${interactive ? "" : "bimo-pupil-idle"}`}
        cx="80"
        cy="95"
        r="3"
      />
      <circle
        ref={pupilRRef}
        className={`bimo-pupil ${interactive ? "" : "bimo-pupil-idle"}`}
        cx="120"
        cy="95"
        r="3"
      />
      <circle className="bimo-accent" cx="100" cy="44" r="7" />
    </svg>
  );
}
