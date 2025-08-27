import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export default function Depoimentos() {
  return (
    <main>
      <Section title="Depoimentos de Clientes" subtitle="O que meus clientes falam sobre mim">
        <Testimonials />
        <p className="mt-8 text-center text-zinc-700">
          Sua liberdade e dignidade não podem esperar.
        </p>
      </Section>
      <CTAWhatsApp />
    </main>
  );
}
