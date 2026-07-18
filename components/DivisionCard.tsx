import Link from "next/link";
import { Mascot } from "./Mascot";

/** Tarjeta de división del ecosistema (BIMO Shop / BIMO Copy / BIMO
 * Studios) -- mascota presentando, título, tagline, link real. `soon`
 * la deja deshabilitada visualmente para "Próximamente" (ej. BIMO Cash)
 * sin inventar un link ni una fecha que no existen. */
export function DivisionCard({
  title,
  tagline,
  href,
  external = false,
  soon = false,
}: {
  title: string;
  tagline: string;
  href?: string;
  external?: boolean;
  soon?: boolean;
}) {
  const content = (
    <div
      className={`group flex flex-col items-center gap-5 rounded-2xl border p-8 text-center transition-all duration-300 ${
        soon
          ? "border-[var(--rule)] bg-[var(--bg-elevated)]/40 opacity-60"
          : "border-[var(--rule)] bg-[var(--bg-elevated)] hover:-translate-y-1.5 hover:border-[var(--accent-dim)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
      }`}
    >
      <Mascot size={92} className={soon ? "" : "transition-transform duration-300 group-hover:scale-105"} />
      <div>
        <h3 className="display text-xl text-[var(--ink)]">{title}</h3>
        <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-[var(--ink-muted)]">{tagline}</p>
      </div>
      {soon ? (
        <span className="rounded-full border border-[var(--rule)] bg-[var(--bg-sunken)] px-3 py-1 text-[11px] uppercase tracking-wide text-[var(--ink-faint)]">
          Próximamente
        </span>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Entrar →
        </span>
      )}
    </div>
  );

  if (soon || !href) return content;

  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>
      {content}
    </Link>
  );
}
