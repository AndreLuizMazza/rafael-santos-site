// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import WhatsAppButton from "./WhatsAppButton";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "transition",
    isActive
      ? "text-zinc-900 dark:text-zinc-100 font-medium"
      : "text-zinc-700 dark:text-zinc-300 hover:text-primary",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-800 shadow-sm">
      <div className="container-resp h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="shrink-0"><Logo /></Link>

        {/* LINKS (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass} end>Início</NavLink>
          <NavLink to="/atuacao" className={linkClass}>Atuação</NavLink>
          <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
          <NavLink to="/depoimentos" className={linkClass}>Depoimentos</NavLink>
          <NavLink to="/contato" className={linkClass}>Contato</NavLink>
        </nav>

        {/* AÇÕES à direita */}
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <div className="hidden md:block">
            <WhatsAppButton size="sm" label="WhatsApp" />
          </div>
          {/* Hambúrguer só no mobile */}
          <button
            className="md:hidden inline-flex items-center p-2 rounded-lg ring-1 ring-zinc-300 dark:ring-zinc-700"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800">
          <div className="container-resp py-3 grid gap-3">
            {/* sem ThemeMenu aqui para não duplicar */}
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass} end>Início</NavLink>
            <NavLink to="/atuacao" onClick={() => setOpen(false)} className={linkClass}>Atuação</NavLink>
            <NavLink to="/sobre" onClick={() => setOpen(false)} className={linkClass}>Sobre</NavLink>
            <NavLink to="/depoimentos" onClick={() => setOpen(false)} className={linkClass}>Depoimentos</NavLink>
            <NavLink to="/contato" onClick={() => setOpen(false)} className={linkClass}>Contato</NavLink>

            <WhatsAppButton full />
          </div>
        </div>
      )}
    </header>
  );
}
