import { Moon, Sun, Monitor, Clock3 } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import type { Theme } from '@/lib/theme';

const options: { key: Theme; label: string; Icon: any }[] = [
  { key: 'light',  label: 'Claro',     Icon: Sun },
  { key: 'dark',   label: 'Escuro',    Icon: Moon },
  { key: 'auto',   label: 'Automático',Icon: Clock3 },
  { key: 'system', label: 'Sistema',   Icon: Monitor },
];

export default function ThemeMenu({ className = '' }: { className?: string }){
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`flex items-center rounded-xl ring-1 ring-zinc-300 bg-white/90 backdrop-blur
                  dark:bg-zinc-900/70 dark:ring-zinc-700 shadow-sm ${className}`}
      role="radiogroup" aria-label="Seleção de tema"
    >
      {options.map(({ key, label, Icon }) => {
        const active = theme === key;
        return (
          <button
            key={key}
            role="radio" aria-checked={active} title={label}
            onClick={()=>setTheme(key)}
            className={`px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm inline-flex items-center gap-1 rounded-lg
                        transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
                        ${active
                          ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800/70 dark:text-zinc-100'
                          : 'text-zinc-700 hover:text-primary dark:text-zinc-300'}`}
          >
            <Icon size={14} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
