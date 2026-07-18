import Link from "next/link";
import { Mascot } from "./Mascot";

/** Tarjeta de división del ecosistema (BIMO Shop / BIMO Copy / BIMO
 * Studios) -- mascota presentando con el acento de color propio de cada
 * división (dorado=Shop, azul=Copy, violeta=Studios -- tokens ya
 * existentes en el sistema de diseño real de BIMO Copy, no inventados).
 * `soon` la deja deshabilitada visualmente para "Próximamente" (ej. BIMO
 * Cash) sin inventar un link ni una fecha que no existen. */
export function DivisionCard({
  title,
  tagline,
  href,
  external = false,
  soon = false,
  accent,
  glow,
  onClick,
  actionLabel = "Entrar →",
}: {
  title: string;
  tagline: string;
  href?: string;
  external?: boolean;
  soon?: boolean;
  accent?: string;
  glow?: string;
  /** Si se pasa, la tarjeta es un botón (no navega) -- ej. Studios, que
   * abre/cierra su panel en la misma página en vez de ir a otra URL. */
  onClick?: () => void;
  actionLabel?: string;
}) {
  const content = (
    <div
      className={`group relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-2xl border p-8 text-center transition-all duration-300 ${
        soon
          ? "border-[var(--rule)] bg-[var(--bg-elevated)]/40 opacity-55"
          : "border-[var(--rule)] bg-[var(--bg-elevated)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      }`}
      style={!soon ? ({ "--hover-accent": accent } as React.CSSProperties) : undefined}
    >
      {!soon && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 0%, ${glow ?? "var(--accent-glow)"}, transparent 70%)` }}
        />
      )}
      <Mascot
        size={92}
        accent={soon ? "#565c68" : accent}
        glow={soon ? "transparent" : glow}
        className={soon ? "" : "relative transition-transform duration-300 group-hover:scale-105"}
      />
      <div className="relative">
        <h3 className="display text-xl text-[var(--ink)]">{title}</h3>
        <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-[var(--ink-muted)]">{tagline}</p>
      </div>
      {soon ? (
        <span className="rounded-full border border-[var(--rule)] bg-[var(--bg-sunken)] px-3 py-1 text-[11px] uppercase tracking-wide text-[var(--ink-faint)]">
          Próximamente
        </span>
      ) : (
        <span
          className="relative text-xs font-semibold uppercase tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: accent ?? "var(--accent)" }}
        >
          {actionLabel}
        </span>
      )}
    </div>
  );

  if (soon) return content;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="block h-full w-full text-left">
        {content}
      </button>
    );
  }

  if (!href) return content;

  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} className="block h-full">
      {content}
    </Link>
  );
}
