
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Mensagem enviada! Em breve entrarei em contato.");
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm">Nome</label>
          <input className="rounded-xl border border-zinc-300 px-3 py-2" required placeholder="Seu nome" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Telefone/WhatsApp</label>
          <input className="rounded-xl border border-zinc-300 px-3 py-2" required placeholder="(DDD) 9 9999-9999" />
        </div>
      </div>
      <div className="grid gap-2">
        <label className="text-sm">E-mail</label>
        <input type="email" className="rounded-xl border border-zinc-300 px-3 py-2" placeholder="seu@email.com" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm">Mensagem</label>
        <textarea className="rounded-xl border border-zinc-300 px-3 py-2 h-32" placeholder="Conte brevemente seu caso" />
      </div>
      <button className="btn-primary w-full md:w-auto" type="submit">Enviar mensagem</button>
      {status && <p className="text-green-700 text-sm">{status}</p>}
    </form>
  );
}
