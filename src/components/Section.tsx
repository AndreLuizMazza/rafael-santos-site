
export default function Section({ id, title, subtitle, children }:{ id?: string, title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
