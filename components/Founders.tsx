import { Reveal } from "./Reveal";

/** "Quiénes somos" -- a propósito sin nombres, cargos ni fotos (decisión
 * de Sergio): la marca es BIMO, no las personas detrás. Antes tenía
 * tarjetas individuales por fundador; se reemplaza por un párrafo
 * genérico de equipo. El contacto vive en ContactSection, no acá. */
export function Founders() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-28 text-center">
      <Reveal chime={[[349.23, 0]]}>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Quiénes somos</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Un equipo, no un script</h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[var(--ink-muted)]">
          Somos un equipo pequeño construyendo tecnología, inteligencia artificial y productos digitales con
          impacto real.
        </p>
      </Reveal>
    </section>
  );
}
