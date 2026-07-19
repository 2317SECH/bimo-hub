"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const CONTACT_PHONE = "+57 313 668 2674";
const CONTACT_PHONE_TEL = "+573136682674";
const INSTAGRAM_URL = "https://www.instagram.com/pagxstudio/";

// Sin backend propio (bimo-hub es frontend puro en Vercel) -- el form
// postea directo a Formspree, sin necesitar servidor. Si no hay ID
// configurado (Sergio todavía no creó la cuenta), el form no se
// muestra y queda el mailto/teléfono como fallback -- nunca se rompe.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "success" | "error";

/** Teléfono e Instagram como links reales (tel:/https:), no texto
 * suelto para copiar y pegar -- mismo criterio que el mailto de
 * arriba. Se usa tanto en el fallback (sin Formspree) como debajo del
 * form real, así el contacto directo siempre está a mano. */
function ContactPills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
      <a
        href={`tel:${CONTACT_PHONE_TEL}`}
        className="rounded-full border border-[var(--rule)] px-4 py-2 text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
      >
        {CONTACT_PHONE}
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener"
        className="rounded-full border border-[var(--rule)] px-4 py-2 text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
      >
        Instagram
      </a>
    </div>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) return;
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative mx-auto max-w-lg overflow-hidden px-6 py-28 text-center">
      <div className="section-glow" />
      <Reveal chime={[[440.0, 0], [659.25, 0.1]]}>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Contacto</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Hablemos</h2>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-[var(--ink-muted)]">
          ¿Un proyecto, una idea, o solo curiosidad? Escribinos.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        {FORMSPREE_ID ? (
          <form onSubmit={handleSubmit} className="card-surface mx-auto mt-10 flex flex-col gap-4 rounded-2xl p-8 text-left" id="contact-form">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-faint)]">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-[var(--rule)] bg-[var(--bg-sunken)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-faint)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-[var(--rule)] bg-[var(--bg-sunken)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-faint)]">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-lg border border-[var(--rule)] bg-[var(--bg-sunken)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0d0e12] transition-opacity disabled:opacity-60"
              style={{ background: "var(--accent)" }}
            >
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p className="text-sm text-[var(--ink-muted)]">Gracias, te respondemos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-[var(--ink-muted)]">Algo falló, probá de nuevo o escribinos por Instagram.</p>
            )}
          </form>
        ) : (
          <div className="card-surface mx-auto mt-10 flex flex-col items-center gap-4 rounded-2xl p-8">
            <ContactPills />
          </div>
        )}
      </Reveal>

      {FORMSPREE_ID && (
        <Reveal delay={0.16}>
          <div className="mt-6 flex justify-center">
            <ContactPills />
          </div>
        </Reveal>
      )}
    </section>
  );
}
