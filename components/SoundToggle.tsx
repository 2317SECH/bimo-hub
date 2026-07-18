"use client";

import { useState } from "react";
import { isSoundOn, setSoundOn, playToggleClick } from "@/lib/sound";

/** Toggle de sonido -- mismo patrón visual y de comportamiento que ya
 * usa BIMO Copy en su topbar (punto + etiqueta "sonido activado/
 * apagado"). Reutilizado acá para que la identidad sea consistente. */
export function SoundToggle() {
  const [on, setOn] = useState(true);

  function toggle() {
    const next = !on;
    setOn(next);
    setSoundOn(next);
    playToggleClick(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed right-5 top-5 z-40 flex items-center gap-2 rounded-full border border-[var(--rule)] bg-[rgba(20,22,27,0.6)] px-3.5 py-2 text-xs text-[var(--ink-faint)] backdrop-blur-md transition-colors hover:text-[var(--ink)] hover:border-[var(--accent)]"
    >
      <span
        className="h-1.5 w-1.5 rounded-full transition-colors"
        style={{
          background: on ? "var(--accent)" : "var(--ink-faint)",
          boxShadow: on ? "0 0 6px var(--accent-glow)" : "none",
        }}
      />
      <span className="hidden sm:inline">{on ? "sonido activado" : "sonido apagado"}</span>
    </button>
  );
}
