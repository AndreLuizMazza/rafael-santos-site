import Section from "@/components/Section";

export default function PoliticaPrivacidade() {
  return (
    <main>
      <Section title="Política de Privacidade" subtitle="Como coletamos, usamos e protegemos seus dados.">
        <article className="prose max-w-none prose-zinc">
          <p><strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <h3>1. Quem somos</h3>
          <p>
            Este site é mantido por <strong>Dr. Rafael Santos – Advogado</strong>, com atuação no Brasil.
            Contato: <a href="mailto:saantosrafael1@gmail.com">saantosrafael1@gmail.com</a>.
          </p>

          <h3>2. Dados que coletamos</h3>
          <ul>
            <li><strong>Dados fornecidos</strong>: nome, e-mail, telefone e mensagens enviadas via formulários.</li>
            <li><strong>Dados de navegação</strong>: IP, dispositivo, páginas acessadas, cookies e identificadores.</li>
            <li><strong>Cookies</strong>: funcionais, analíticos e de marketing (ver Política de Cookies).</li>
          </ul>

          <h3>3. Bases legais (LGPD)</h3>
          <ul>
            <li><strong>Execução de contrato</strong> e diligências preliminares.</li>
            <li><strong>Legítimo interesse</strong> (segurança, melhoria do serviço, métricas).</li>
            <li><strong>Consentimento</strong> (cookies não essenciais e comunicações opcionais).</li>
            <li><strong>Cumprimento de obrigação legal</strong> quando aplicável.</li>
          </ul>

          <h3>4. Finalidades do tratamento</h3>
          <ul>
            <li>Responder contatos e prestar atendimento jurídico;</li>
            <li>Melhorar o site e analisar métricas de uso;</li>
            <li>Prevenir fraudes e manter a segurança;</li>
            <li>Divulgação institucional quando autorizado.</li>
          </ul>

          <h3>5. Compartilhamento</h3>
          <p>
            Podemos compartilhar dados com provedores de serviço (hospedagem, e-mail, analytics) que atuam como operadores,
            seguindo instruções e medidas de segurança. Não vendemos seus dados.
          </p>

          <h3>6. Retenção</h3>
          <p>
            Mantemos os dados pelo tempo necessário às finalidades e para cumprimento de obrigações legais.
          </p>

          <h3>7. Seus direitos (LGPD)</h3>
          <ul>
            <li>Confirmação e acesso; correção; anonimização; portabilidade; informação sobre uso e compartilhamento;</li>
            <li>Revogação do consentimento e oposição ao tratamento nos casos cabíveis;</li>
            <li>Reclamação à ANPD e aos órgãos de defesa do consumidor.</li>
          </ul>

          <h3>8. Segurança</h3>
          <p>Adotamos controles técnicos e organizacionais razoáveis para proteger as informações.</p>

          <h3>9. Contato do Encarregado (DPO)</h3>
          <p>E-mail: <a href="mailto:saantosrafael1@gmail.com">saantosrafael1@gmail.com</a></p>

          <h3>10. Alterações</h3>
          <p>Podemos atualizar esta política a qualquer tempo; a versão vigente será sempre publicada nesta página.</p>
        </article>
      </Section>
    </main>
  );
}
