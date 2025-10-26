export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <div className="container-resp py-10 text-sm text-zinc-600 dark:text-zinc-300 grid gap-4 md:grid-cols-2">
        <div>
          <p className="font-semibold text-zinc-800 dark:text-zinc-100">Rafael Santos — Advogado Criminalista</p>
          <p>OAB/PR • Atuação no Brasil</p>
          <p className="mt-1">
            Rua Pedro Ramires de Mello • 21 • Sobre loja 02 • Centro • Pato Branco PR • CEP 85501-250
          </p>
        </div>
        <div className="md:text-right">
          <p>
            Instagram:{" "}
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.instagram.com/rafaaell.santos/"
              rel="noreferrer"
            >
              @rafaaell.santos
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              className="hover:underline"
              target="_blank"
              href="https://wa.me/5546991061375"
              rel="noreferrer"
            >
              (46) 99106-1375
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a className="hover:underline" href="mailto:saantosrafael1@gmail.com">
              saantosrafael1@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Links legais */}
      <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 space-x-4 mb-3">
        <a href="/politica-de-privacidade" className="hover:underline">
          Política de Privacidade
        </a>
        <span>•</span>
        <a href="/politica-de-cookies" className="hover:underline">
          Política de Cookies
        </a>
        <span>•</span>
        <a href="/termos-de-uso" className="hover:underline">
          Termos de Uso
        </a>
      </div>

      <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 pb-6">
        © {new Date().getFullYear()} Rafael Santos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
