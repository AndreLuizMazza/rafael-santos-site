
export default function CTAWhatsApp() {
  return (
    <div className="section">
      <div className="card p-8 md:p-12 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Converse diretamente comigo agora</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mt-1">Atendimento rápido e humanizado. Urgências 24h.</p>
        </div>
        <a
          href="https://wa.me/5546991061375?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
          target="_blank"
          rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp"
          className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow ring-1 ring-emerald-700/25 bg-[#25D366] text-black hover:brightness-105 active:scale-[0.99]"
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  );
}
