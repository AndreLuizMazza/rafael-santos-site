import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className='' }: { className?: string }) {
  const { toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center justify-center rounded-xl ring-1 ring-zinc-300 px-2.5 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:ring-zinc-700 ${className}`}
      aria-label="Alternar tema"
    >
      <Sun className="hidden dark:block" size={16} />
      <Moon className="block dark:hidden" size={16} />
      <span className="ml-2 hidden sm:inline">Tema</span>
    </button>
  );
}
