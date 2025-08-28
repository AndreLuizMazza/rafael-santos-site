
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/atuacao", label: "Atuação" },
  { to: "/sobre", label: "Sobre" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="container-resp h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({isActive}) => `hover:text-primary transition ${isActive ? "text-primary font-semibold" : "text-zinc-700"}`}
            >
              {it.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/5546991061375?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
            target="_blank"
            className="ml-2 inline-flex items-center rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-zinc-900 hover:brightness-95 shadow"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center p-2 rounded-lg ring-1 ring-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="container-resp py-3 grid gap-2">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-zinc-700 hover:text-primary"
              >
                {it.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/5546991061375?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-zinc-900 hover:brightness-95 shadow"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
