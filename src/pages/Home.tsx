
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import HeroTestimonials from "@/components/HeroTestimonials";
import UrgencyChecklist from "@/components/UrgencyChecklist";
import { Shield, Gavel, Scale, Handshake } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />



      <Section id="atuacao" title="Áreas de atuação" subtitle="Atendimento ágil, técnico e estratégico.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Defesa em flagrante", desc: "Atuação imediata, audiências de custódia e medidas urgentes." },
            { icon: Gavel, title: "Processos e recursos", desc: "Atuação em inquéritos, ações penais, sustentações e recursos." },
            { icon: Scale, title: "Habeas corpus", desc: "Medida constitucional para garantir a liberdade de locomoção." },
            { icon: Handshake, title: "Acordos e estratégias", desc: "Negociações, acordos e estratégias defensivas personalizadas." },
          ].map((it, i) => (
            <div key={i} className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6">
              <it.icon className="text-primary" />
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </Section>
 <UrgencyChecklist />
      <Section title="Depoimentos reais" subtitle="Profissionalismo reconhecido por quem já foi defendido.">
        <Testimonials />
      </Section>
     
      <CTAWhatsApp />
    </main>
  );
}
