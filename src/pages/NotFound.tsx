import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-zinc-600">Página não encontrada.</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Voltar ao início</Link>
    </div>
  );
}