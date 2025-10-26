const depo = [
  {
    name: "J.M.",
    text:
      "Profissional dedicado e estratégico. Me deu segurança em um dos momentos mais difíceis da minha vida.",
  },
  {
    name: "L.F.",
    text:
      "Atendimento humano, mas com firmeza impressionante. Recomendo de olhos fechados.",
  },
  {
    name: "E.C.S.",
    text:
      "A postura e a competência do Dr. Rafael mudaram completamente o rumo do meu processo.",
  },
  {
    name: "G.R.F.",
    text:
      "No Tribunal do Júri, o Dr. Rafael foi simplesmente impecável. Sua postura firme, o domínio dos argumentos e a forma como conduziu a defesa foram determinantes para o resultado. Foi a primeira vez que me senti verdadeiramente protegido e representado diante da Justiça.",
  },
  {
    name: "R.T.",
    text:
      "A atuação do Dr. Rafael no tribunal foi impecável. Firme, seguro e convincente do início ao fim.",
  },
  {
    name: "A.L.M.",
    text:
      "No momento mais difícil da minha vida, o Dr. Rafael me defendeu com maestria no Tribunal. Seu preparo e firmeza impressionaram a todos. Graças a ele, consegui provar minha inocência.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {depo.map((d, i) => (
        <figure key={i} className="card p-6 dark:bg-zinc-900 dark:border-zinc-800">
          <blockquote className="text-zinc-700 dark:text-zinc-200">“{d.text}”</blockquote>
          <figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">— {d.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
