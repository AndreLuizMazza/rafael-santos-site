// src/components/CookieBanner.tsx
import { useEffect, useState } from "react";
import { initAnalyticsIfConsented, setGAConsent } from "@/lib/analytics";

type Consents = {
  essential: boolean; // sempre true
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie-consent-v1";

function readConsent(): Consents | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consents) : null;
  } catch {
    return null;
  }
}

function saveConsent(c: Consents) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consents | null>(null);
  const [openPrefs, setOpenPrefs] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);

    // Se já existe preferência salva, inicializa GA de acordo
    if (saved) {
      initAnalyticsIfConsented({ analytics: saved.analytics, marketing: saved.marketing });
    }
  }, []);

  if (consent) return null;

  const acceptAll = () => {
    const c: Consents = { essential: true, analytics: true, marketing: true };
    saveConsent(c);
    setConsent(c);
    initAnalyticsIfConsented({ analytics: c.analytics, marketing: c.marketing });
  };

  const rejectOptional = () => {
    const c: Consents = { essential: true, analytics: false, marketing: false };
    saveConsent(c);
    setConsent(c);
    initAnalyticsIfConsented({ analytics: c.analytics, marketing: c.marketing });
  };

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto max-w-5xl m-4 p-4 rounded-2xl shadow-lg ring-1 ring-zinc-200 bg-white">
          <p className="text-sm text-zinc-700">
            Usamos cookies para melhorar sua experiência, medir o uso e personalizar conteúdo.
            Você pode aceitar todos, rejeitar os opcionais ou escolher suas preferências.
            Leia nossa{" "}
            <a href="/politica-de-cookies" className="underline">Política de Cookies</a>.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="btn" onClick={acceptAll}>Ok, Entendi!</button>
            <button className="btn-secondary" onClick={rejectOptional}>Rejeitar opcionais</button>
            <button className="btn-ghost" onClick={() => setOpenPrefs(true)}>Preferências</button>
          </div>
        </div>
      </div>

      {openPrefs && (
        <PreferencesModal
          onClose={() => setOpenPrefs(false)}
          onSave={(prefs) => {
            const c: Consents = { essential: true, ...prefs };
            saveConsent(c);
            setConsent(c);
            // Aplica imediatamente no GA
            initAnalyticsIfConsented({ analytics: c.analytics, marketing: c.marketing });
            setOpenPrefs(false);
          }}
        />
      )}
    </>
  );
}

function PreferencesModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (prefs: { analytics: boolean; marketing: boolean }) => void;
}) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 ring-1 ring-zinc-200 shadow-xl">
        <h3 className="text-lg font-semibold">Preferências de Cookies</h3>
        <p className="text-sm text-zinc-600 mt-1">
          Selecione como deseja que seus dados de navegação sejam utilizados.
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-lg p-3 ring-1 ring-zinc-200">
            <div className="flex items-center justify-between">
              <p className="font-medium">Essenciais</p>
              <span className="text-xs text-zinc-500">Sempre ativos</span>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Necessários para o funcionamento do site (ex.: segurança, sessão).
            </p>
          </div>

          <label className="flex items-start gap-3 rounded-lg p-3 ring-1 ring-zinc-200 cursor-pointer">
            <input type="checkbox" className="mt-1" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <div>
              <p className="font-medium">Analíticos</p>
              <p className="text-sm text-zinc-600">Medem tráfego e desempenho para melhorar o site.</p>
            </div>
          </label>

          <label className="flex items-start gap-3 rounded-lg p-3 ring-1 ring-zinc-200 cursor-pointer">
            <input type="checkbox" className="mt-1" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            <div>
              <p className="font-medium">Marketing</p>
              <p className="text-sm text-zinc-600">Personalizam conteúdo e mensuram campanhas.</p>
            </div>
          </label>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button className="btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn" onClick={() => onSave({ analytics, marketing })}>Salvar preferências</button>
        </div>
      </div>
    </div>
  );
}
