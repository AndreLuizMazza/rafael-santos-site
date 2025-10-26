export type Theme = 'light' | 'dark' | 'auto' | 'system';

const KEY = 'rs-theme';

export function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' || v === 'auto' || v === 'system' ? v : null;
  } catch { return null; }
}
export function setStoredTheme(t: Theme) { try { localStorage.setItem(KEY, t); } catch {} }

export function systemPrefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

/** AUTO: claro 07:00–18:59; escuro 19:00–06:59 */
export function autoShouldBeDark(date = new Date()): boolean {
  const h = date.getHours();
  return (h >= 19 || h < 7);
}


export function applyTheme(theme: Theme) {
  const dd = document.documentElement;
  const dark = theme === 'dark' || (theme === 'system' && systemPrefersDark()) || (theme === 'auto' && autoShouldBeDark());
  dd.classList.toggle('dark', !!dark);
}

let sysCleanup: (() => void) | null = null;
let autoInterval: number | null = null;

export function startSystemListener(onChange: () => void) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => onChange();
  try { mql.addEventListener('change', handler); } catch { mql.addListener(handler); }
  sysCleanup = () => { try { mql.removeEventListener('change', handler); } catch { mql.removeListener(handler); } };
}
export function stopSystemListener(){ if(sysCleanup){ sysCleanup(); sysCleanup = null; } }

export function startAutoScheduler(onTick: () => void) {
  autoInterval = window.setInterval(onTick, 5 * 60 * 1000);
}
export function stopAutoScheduler(){ if(autoInterval){ window.clearInterval(autoInterval); autoInterval = null; } }

export function initTheme() { const initial = getStoredTheme() ?? 'system'; applyTheme(initial); return initial; }
