import BottomDockCTA from '@/components/BottomDockCTA';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { sendPageview } from "@/lib/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ⬅️ versão correta para Vite/React

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ThemeDock from "./components/ThemeDock";

// Páginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaCookies from "./pages/PoliticaCookies";
import TermosUso from "./pages/TermosUso";
import Contato from "./pages/Contato";
import Atuacao from "./pages/Atuacao";
import Depoimentos from "./pages/Depoimentos";
import NotFound from "./pages/NotFound";

/** Dispara pageviews no GA4 quando a rota muda */
function TrackPageViews() {
  const location = useLocation();
  useEffect(() => {
    sendPageview(location.pathname + location.search);
  }, [location]);
  return null;
}

/** Opcional: rolar para o topo a cada troca de rota */
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <TrackPageViews />
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/atuacao" element={<Atuacao />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/termos-de-uso" element={<TermosUso />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>

      <Footer />
      <CookieBanner />
      <ThemeDock />
      <BottomDockCTA />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
