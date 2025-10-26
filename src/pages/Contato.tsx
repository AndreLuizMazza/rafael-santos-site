
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function Contato() {
  return (
    <Section title="Contato">
      <div className="grid md:grid-cols-2 gap-6">
        <ContactForm />
        <div className="card dark:bg-zinc-900 dark:border-zinc-800 p-6">
          <h3 className="font-semibold">Endereço</h3>
          <p className="mt-1 text-zinc-600 dark:text-zinc-300 text-sm">
            Rua Pedro Ramires de Mello , 21, Sobre loja 02  — Centro<br/>
            CEP 85501-250 — Pato Branco, PR
          </p>
          <h3 className="font-semibold mt-6">Canais</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
            <li>WhatsApp: <a className="hover:underline" href="https://wa.me/5546991061375" target="_blank" rel="noopener noreferrer">(46) 99106-1375</a></li>
            <li>E-mail: <a className="hover:underline" href="mailto:saantosrafael1@gmail.com">saantosrafael1@gmail.com</a></li>
            <li>Instagram: <a className="hover:underline" href="https://www.instagram.com/rafaaell.santos/" target="_blank" rel="noopener noreferrer">@rafaaell.santos</a></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
