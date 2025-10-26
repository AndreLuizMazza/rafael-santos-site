// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch"; // ⬅️ novo

// ...

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-800 shadow-sm">
      <div className="container-resp h-16 flex items-center justify-between gap-3">
        <Link to="/" className="shrink-0"><Logo /></Link>

        {/* cluster à direita: seletor de tema + hambúrguer */}
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <button
            className="md:hidden inline-flex items-center p-2 rounded-lg ring-1 ring-zinc-300 dark:ring-zinc-700"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800">
          <div className="container-resp py-3 grid gap-3">
            {/* ⚠️ Removido o ThemeMenu aqui para não duplicar */}
            <NavLink to="/" onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary">Início</NavLink>
            <NavLink to="/atuacao" onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary">Atuação</NavLink>
            <NavLink to="/sobre" onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary">Sobre</NavLink>
            <NavLink to="/depoimentos" onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary">Depoimentos</NavLink>
            <NavLink to="/contato" onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-200 hover:text-primary">Contato</NavLink>

            <a
              href="https://wa.me/5546991061375?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow ring-1 ring-emerald-700/25 bg-[#25D366] text-black hover:brightness-105 active:scale-[0.99]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
