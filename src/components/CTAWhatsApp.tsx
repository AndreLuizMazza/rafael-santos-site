
export default function CTAWhatsApp() {
  return (
    <div className="section">
      <div className="card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Converse diretamente comigo agora</h3>
          <p className="text-zinc-600 mt-1">Atendimento rápido e humanizado. Urgências 24h.</p>
        </div>
        <a
          href="https://wa.me/5546991061375?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  );
}
