/** Sonido de BIMO -- mismo mecanismo que ya usa la página real de BIMO
 * Copy (Web Audio API, osciladores programados, sin archivos de audio),
 * reutilizado acá, no reinventado. `soundOn` es un flag simple en
 * módulo (mismo patrón que usa Copy, que es vanilla JS) en vez de
 * contexto de React, para no complicar el árbol de componentes. */
let soundOn = true;
let audioCtx: AudioContext | null = null;

export function isSoundOn() {
  return soundOn;
}

export function setSoundOn(value: boolean) {
  soundOn = value;
}

function ctx(): AudioContext {
  if (!audioCtx) audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

/** Los primeros chimes disparan por scroll-into-view (Framer whileInView),
 * que corre en un IntersectionObserver -- no cuenta como gesto de usuario
 * para el navegador, así que el AudioContext queda "suspended" y ese
 * primer sonido se pierde o llega tarde (sobre todo en mobile). Se
 * desbloquea igual que un <audio> autoplay: en el primer toque/click real
 * de toda la página (antes de que cualquier chime lo necesite), se crea
 * el contexto y se reproduce un buffer silencioso de forma SÍNCRONA
 * dentro del gesto -- `resume()` solo no alcanza en iOS Safari, necesita
 * un `start()` real en el mismo tick del gesto para desbloquear de
 * verdad (truco estándar de unlock de Web Audio en iOS). */
if (typeof window !== "undefined") {
  const unlock = () => {
    const c = ctx();
    const buffer = c.createBuffer(1, 1, 22050);
    const source = c.createBufferSource();
    source.buffer = buffer;
    source.connect(c.destination);
    source.start(0);
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("touchstart", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock, { once: true, passive: true });
  window.addEventListener("touchstart", unlock, { once: true, passive: true });
  window.addEventListener("keydown", unlock, { once: true });
}

function note(freq: number, t0: number, dur: number, peak = 0.14) {
  const c = ctx();
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, c.currentTime + t0);
  gain.gain.setValueAtTime(0.0001, c.currentTime + t0);
  gain.gain.linearRampToValueAtTime(peak, c.currentTime + t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(c.currentTime + t0);
  osc.stop(c.currentTime + t0 + dur + 0.03);
}

/** Acorde corto de 2 notas -- mismo patrón que los "panelChimes" de la
 * página de Copy, uno por sección en vez de uno por panel. */
export function playChime(notes: [freq: number, delay: number][]) {
  if (!soundOn) return;
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  notes.forEach(([freq, delay]) => note(freq, delay, 0.18));
}

export function playToggleClick(on: boolean) {
  if (typeof window === "undefined") return;
  if (!on) return;
  note(440, 0, 0.14, 0.14);
  note(659.25, 0.1, 0.16, 0.14);
}
