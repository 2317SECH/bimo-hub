import { useId, type CSSProperties } from "react";

/** Mascota BIMO -- misma figura base que ya existe en la página de BIMO
 * Copy (mismo cuerpo, mismos ojos/pupilas), pero acepta un color de
 * acento distinto por división -- "mismo concepto, evolucionado" (regla
 * de Sergio: sin mascota nueva desde cero, sin repetir exactamente la
 * misma identidad de Copy para todo el ecosistema). El acento define el
 * punto de la cabeza y las pupilas vía custom properties, así cada
 * división se distingue sin duplicar el SVG. */
export function Mascot({
  size = 200,
  className = "",
  accent,
  glow,
}: {
  size?: number;
  className?: string;
  accent?: string;
  glow?: string;
}) {
  const gradientId = useId();
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
      <circle className="bimo-pupil bimo-pupil-idle" cx="80" cy="95" r="3" />
      <circle className="bimo-pupil bimo-pupil-idle" cx="120" cy="95" r="3" />
      <circle className="bimo-accent" cx="100" cy="44" r="7" />
    </svg>
  );
}
