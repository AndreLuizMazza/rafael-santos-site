import Section from "@/components/Section";

export default function TermosUso() {
  return (
    <main>
      <Section title="Termos de Uso" subtitle="Condições para uso do site e de seus conteúdos.">
        <article className="prose max-w-none prose-zinc">
          <p><strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <h3>1. Aceite</h3>
          <p>Ao acessar este site você concorda com estes Termos. Se não concordar, não utilize o site.</p>

          <h3>2. Conteúdo informativo</h3>
          <p>
            O conteúdo possui caráter informativo e não constitui consultoria jurídica individualizada.
            Cada caso exige análise específica.
          </p>

          <h3>3. Propriedade intelectual</h3>
          <p>
            Textos, marcas, layout e imagens são protegidos. É vedada a reprodução sem autorização.
          </p>

          <h3>4. Uso adequado</h3>
          <ul>
            <li>Não enviar conteúdo ilegal, ofensivo ou que infrinja direitos de terceiros;</li>
            <li>Não tentar acessar áreas restritas ou interferir na operação do site;</li>
            <li>Não utilizar dados obtidos para fins ilícitos.</li>
          </ul>

          <h3>5. Limitação de responsabilidade</h3>
          <p>
            Envidamos esforços de disponibilidade e segurança, mas não garantimos funcionamento ininterrupto.
            Não nos responsabilizamos por danos indiretos decorrentes do uso.
          </p>

          <h3>6. Links de terceiros</h3>
          <p>Podemos conter links externos. Não controlamos seus conteúdos e políticas.</p>

          <h3>7. Privacidade e cookies</h3>
          <p>O uso do site também é regido pela Política de Privacidade e pela Política de Cookies.</p>

          <h3>8. Alterações</h3>
          <p>Podemos alterar os Termos a qualquer momento, com vigência após a publicação.</p>

          <h3>9. Foro</h3>
          <p>Fica eleito o foro de Pato Branco/PR, Brasil, para dirimir controvérsias, salvo regras de competência.</p>
        </article>
      </Section>
    </main>
  );
}
