import Section from "@/components/Section";

export default function PoliticaCookies() {
  return (
    <main>
      <Section title="Política de Cookies" subtitle="Entenda como e por que usamos cookies.">
        <article className="prose max-w-none prose-zinc">
          <p><strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <h3>1. O que são cookies?</h3>
          <p>Arquivos salvos no seu navegador que lembram preferências e ajudam a melhorar sua experiência.</p>

          <h3>2. Tipos que podemos usar</h3>
          <ul>
            <li><strong>Essenciais</strong>: necessários para o funcionamento do site;</li>
            <li><strong>Analíticos</strong>: medem audiência e desempenho (ex.: páginas mais visitadas);</li>
            <li><strong>Marketing</strong>: personalizam conteúdo/ads e mensuram campanhas.</li>
          </ul>

          <h3>3. Gestão de consentimento</h3>
          <p>
            Usamos um banner para captar seu consentimento para cookies não essenciais.
            Você pode alterá-lo a qualquer momento em “Preferências de Cookies”.
          </p>

          <h3>4. Como gerenciar</h3>
          <p>
            Pelo nosso painel de preferências e também nas configurações do seu navegador (bloquear, apagar, etc.).
            Bloquear pode afetar certas funcionalidades.
          </p>

          <h3>5. Contato</h3>
          <p>Dúvidas? <a href="mailto:saantosrafael1@gmail.com">saantosrafael1@gmail.com</a></p>
        </article>
      </Section>
    </main>
  );
}
