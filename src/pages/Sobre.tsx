import Section from "@/components/Section";
import { ShieldCheck, Gavel, Scale, Clock, MapPin, MessageSquare } from "lucide-react";

import destaque from "@/assets/sobre-destaque.jpg";
import p1 from "@/assets/sobre-1.jpg";
import p2 from "@/assets/sobre-2.jpg";
import p3 from "@/assets/sobre-3.jpg";
import p4 from "@/assets/sobre-4.jpg";
import p5 from "@/assets/sobre-5.jpg";
import p6 from "@/assets/sobre-6.jpg";

export default function Sobre() {
  const cred = [
    { icon: Gavel,       title: "Atuação em plenário",  desc: "Experiência em júri e sustentações orais, com postura firme e técnica." },
    { icon: Clock,       title: "Urgências 24h",        desc: "Disponibilidade para flagrantes, audiências de custódia e medidas urgentes." },
    { icon: Scale,       title: "Estratégia e técnica", desc: "Teses bem fundamentadas e condução precisa do processo penal." },
    { icon: ShieldCheck, title: "Ética e sigilo",       desc: "Atendimento discreto, confidencialidade e respeito às garantias individuais." },
    { icon: MapPin,      title: "Atuação nacional",     desc: "Capilaridade para acompanhar casos em todo o Brasil." },
    { icon: MessageSquare,title: "Comunicação clara",   desc: "Orientação objetiva em cada etapa, com linguagem acessível." },
  ];

  const galeria = [p1, p2, p3, p4, p5, p6];

  return (
    <main>
      <Section title="Sobre o advogado" subtitle="Defesa criminal com foco em estratégia, técnica e humanidade.">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Foto destaque */}
          <figure className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-sm lg:col-span-3">
            <img
              src={destaque}
              alt="Dr. Rafael Santos em atuação no tribunal"
              className="w-full h-[420px] md:h-[520px] object-cover"
              loading="eager"
              decoding="async"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">Dr. Rafael Santos</h3>
              <p className="text-white/85 text-sm">Criminalista • Atuação em plenário do júri e audiências</p>
            </figcaption>
          </figure>

          {/* Bio */}
          <article className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6 md:p-8 lg:col-span-2">
            <h3 className="text-xl font-semibold">Quem sou</h3>
            <p className="mt-3 text-zinc-700 dark:text-zinc-200">
              Advogado criminalista com atuação dedicada à proteção das liberdades individuais e ao devido processo legal.
              Minha prática combina técnica, estratégia e atendimento humanizado — do primeiro contato à última instância.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-200">
              Atendo urgências (flagrantes, audiências de custódia), acompanho inquéritos e ações penais e atuo em plenário do júri,
              com teses sólidas, linguagem clara e foco em resultados.
            </p>

        
          </article>
        </div>

        {/* Credibilidade (cards) */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {cred.map((c, i) => (
            <div key={i} className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6 flex items-start gap-3">
              <c.icon className="text-primary shrink-0" />
              <div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galeria */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Em atuação</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galeria.map((src, i) => (
  <figure
    key={i}
    className="w-full h-64 rounded-xl ring-1 ring-zinc-200 shadow-sm bg-zinc-50 flex items-center justify-center overflow-hidden"
  >
    <img
      src={src}
      alt={`Registro profissional do Dr. Rafael em audiência ${i + 1}`}
      className="max-h-full max-w-full object-contain"
      loading="lazy"
      decoding="async"
    />
  </figure>
))}

          </div>
        </div>
      </Section>
    </main>
  );
}
