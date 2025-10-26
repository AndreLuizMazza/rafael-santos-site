// src/components/HeroTestimonials.tsx
const ITEMS = [
  { q: "Profissional dedicado e estratégico. Me deu segurança em um dos momentos mais difíceis da minha vida.", a: "— J.M." },
  { q: "Atendimento humano, mas com firmeza impressionante. Recomendo de olhos fechados.", a: "— L.F." },
  { q: "No Tribunal do Júri, a postura e os argumentos do Dr. Rafael foram decisivos para o resultado.", a: "— G.R.F." },
  { q: "A atuação foi impecável. Firme, segura e convincente do início ao fim.", a: "— R.T." },
];

export default function HeroTestimonials() {
  return (
    <section aria-label="Depoimentos de Clientes" className="relative">
      <div className="container-resp">
        <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-3 sm:p-4">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {ITEMS.map((t, i) => (
              <figure key={i}
                className="shrink-0 w-[85%] sm:w-[46%] lg:w-[32%] snap-start rounded-xl
                           bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/70 dark:ring-zinc-800 p-4">
                <blockquote className="text-sm sm:text-[15px] leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{t.a}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Profissionais reconhecidos por quem já foi defendido.
            </span>
            <a href="#depoimentos" className="text-xs sm:text-sm font-medium text-primary hover:underline">
              Ver mais depoimentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
