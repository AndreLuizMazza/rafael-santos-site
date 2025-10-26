
import Section from "@/components/Section";

export default function Atuacao() {
  return (
    <Section title="Atuação criminal" subtitle="Defesa técnica, discreta e humanizada.">
      <div className="grid md:grid-cols-2 gap-6">
        <article className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6">
          <h3 className="font-semibold">Atendimento de urgência</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
            Flagrantes, audiências de custódia, diligências policiais e medidas protetivas. Atendimento 24h.
          </p>
        </article>
        <article className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6">
          <h3 className="font-semibold">Inquérito e ação penal</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
            Acompanhamento completo, elaboração de teses defensivas e atuação estratégica em todas as fases.
          </p>
        </article>
        <article className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6">
          <h3 className="font-semibold">Habeas Corpus e recursos</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
            Análise célere e fundamentada para garantir direitos e liberdades individuais.
          </p>
        </article>
        <article className="card transition-transform hover:-translate-y-[2px] dark:bg-zinc-900 dark:border-zinc-800 p-6">
          <h3 className="font-semibold">Acordos e negociações</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
            Acordos de não persecução, colaborações, transações e estratégias extrajudiciais.
          </p>
        </article>
      </div>

    </Section>
  );
}
