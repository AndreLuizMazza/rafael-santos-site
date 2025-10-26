import hero from "@/assets/hero-justice-statue.webp";
import MotionFadeIn from "./MotionFadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Estátua da Justiça ao fundo"
          className="h-full w-full object-cover object-center opacity-60"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_5%,rgba(199,165,137,.20),rgba(199,165,137,0)),linear-gradient(180deg,rgba(0,0,0,.75),rgba(0,0,0,.65))]" />
      </div>

      {/* Content */}
      <div className="container-resp relative z-10 py-12">
        <MotionFadeIn>
          <span className="kicker">defesa criminal de excelência</span>
        </MotionFadeIn>

        <MotionFadeIn delay={0.08}>
          <h1 className="title mt-3">
            Dr. <span className="headline-emphasis">Rafael Santos</span>
          </h1>
        </MotionFadeIn>

        <MotionFadeIn delay={0.16}>
          <p className="subtitle mt-3">
            Advogado Criminalista. Técnica, estratégia e humanidade a favor da sua liberdade.
            Atuação imediata em flagrantes, audiências de custódia, habeas corpus e recursos.
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5546991061375?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp dark:text-zinc-900"
              aria-label="Falar agora no WhatsApp com o Dr. Rafael Santos"
            >
              Falar no WhatsApp
            </a>
            <a href="#atuacao" className="btn-ghost">Ver áreas de atuação</a>
          </div>
        </MotionFadeIn>

        {/* Trust badges */}
        <MotionFadeIn delay={0.32}>
          <ul className="mt-8 flex flex-wrap gap-2 text-xs text-white/80">
            {["Urgências 24h", "Audiência de custódia", "Atuação em todo o Brasil", "Atendimento humanizado"].map((t) => (
              <li key={t} className="rounded-full/btn">
                {t}
              </li>
            ))}
          </ul>
        </MotionFadeIn>
      </div>
    </section>
  );
}
