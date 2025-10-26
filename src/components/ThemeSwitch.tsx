import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Moon, Sun, Monitor, Clock3, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { autoShouldBeDark } from '@/lib/theme';
import type { Theme } from '@/lib/theme';

type Opt = { key: Theme; label: string; Icon: React.ComponentType<{ size?: number }> };

export default function ThemeSwitch({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const autoIsDark = useMemo(() => autoShouldBeDark(new Date()), []);
  const BtnIcon = useMemo(() => {
    if (theme === 'light') return Sun;
    if (theme === 'dark') return Moon;
    if (theme === 'auto') return autoIsDark ? Moon : Sun;
    return Monitor;
  }, [theme, autoIsDark]);

  const options: Opt[] = useMemo(
    () => [
      { key: 'light',  label: 'Claro',                                    Icon: Sun },
      { key: 'auto',   label: `Automático ${autoIsDark ? '(escuro)' : '(claro)'}`, Icon: Clock3 },
      { key: 'dark',   label: 'Escuro',                                   Icon: Moon },
      { key: 'system', label: 'Sistema',                                  Icon: Monitor },
    ],
    [autoIsDark]
  );

  function toggle() {
    if (!open) {
      const r = btnRef.current?.getBoundingClientRect();
      if (r) setPos({ top: r.bottom + 8, left: r.right });
    }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    const recalc = () => {
      const r = btnRef.current?.getBoundingClientRect();
      if (r) setPos({ top: r.bottom + 8, left: r.right });
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t)) return;
      const pop = document.getElementById('theme-popover');
      if (pop?.contains(t)) return;
      setOpen(false);
    };
    window.addEventListener('resize', recalc);
    window.addEventListener('scroll', recalc, true);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDoc);
    return () => {
      window.removeEventListener('resize', recalc);
      window.removeEventListener('scroll', recalc, true);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDoc);
    };
  }, [open]);

  return (
    <div className={`relative ${className}`}>
      {/* Botão único mostrando o tema ativo */}
      <button
        ref={btnRef}
        onClick={toggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                   ring-1 ring-zinc-300 bg-white/90 backdrop-blur shadow-sm
                   hover:bg-zinc-100 active:scale-[0.98]
                   dark:bg-zinc-900/70 dark:ring-zinc-700 dark:hover:bg-zinc-800
                   text-zinc-700 dark:text-zinc-200"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Trocar tema"
      >
        <BtnIcon size={18} />
      </button>

      {/* Dropdown via portal */}
      {open && pos && createPortal(
        <div
          id="theme-popover"
          role="menu"
          className="z-[9999] fixed w-56 rounded-2xl border border-zinc-200 bg-white/95 p-1.5 shadow-xl backdrop-blur
                     dark:border-zinc-800 dark:bg-zinc-900/95"
          style={{ top: pos.top, left: pos.left, transform: 'translateX(-100%)' }}
        >
          {options.map(({ key, label, Icon }) => {
            const active = theme === key;
            return (
              <button
                key={key}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => { setTheme(key); setOpen(false); }}
                className={`group flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition
                            hover:bg-zinc-100 dark:hover:bg-zinc-800/70
                            ${active
                              ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800/70 dark:text-zinc-100'
                              : 'text-zinc-700 dark:text-zinc-200'}`}
              >
                <Icon size={16} className="shrink-0" />
                <span>{label}</span>
                {active && <Check size={16} className="ml-auto" />}
              </button>
            );
          })}
        </div>,
        document.body
      )}
    </div>
  );
}
