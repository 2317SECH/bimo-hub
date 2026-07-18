import { useId } from "react";

/** Mascota BIMO -- misma figura que ya existe en la página de BIMO Copy
 * (`dashboard/frontend/index.html` en el VPS): cuerpo redondeado, ojos
 * ovalados, pupilas, acento en la cabeza. Portada tal cual (mismo SVG,
 * mismas clases CSS), no es una mascota nueva -- regla explícita de
 * Sergio: "no crear otra mascota, usar la misma". `useId` evita ids de
 * gradiente duplicados cuando hay varias mascotas en la misma página. */
export function Mascot({ size = 200, className = "" }: { size?: number; className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={`bimo-fig ${className}`}>
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
      <circle className="bimo-pupil bimo-pupil-idle" cx="80" cy="95" r="3" />
      <circle className="bimo-pupil bimo-pupil-idle" cx="120" cy="95" r="3" />
      <circle className="bimo-accent" cx="100" cy="44" r="7" />
    </svg>
  );
}
