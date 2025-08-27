// src/lib/analytics.ts
type ConsentFlags = { analytics: boolean; marketing: boolean };

let loaded = false;

// Carrega script do GA4 quando permitido
export function loadGA(measurementId: string) {
  if (loaded || !measurementId) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function gtag() {
    (window as any).dataLayer.push(arguments);
  };

  (window as any).gtag("js", new Date());
  loaded = true;
}

// Atualiza o Consent Mode v2 do Google
export function setGAConsent(flags: ConsentFlags) {
  const g = (window as any).gtag;
  if (!g) return;
  g("consent", "update", {
    ad_user_data: flags.marketing ? "granted" : "denied",
    ad_personalization: flags.marketing ? "granted" : "denied",
    ad_storage: flags.marketing ? "granted" : "denied",
    analytics_storage: flags.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

// Inicializa GA respeitando o consentimento atual
export function initAnalyticsIfConsented(flags: ConsentFlags) {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string;
  if (!id) return;

  // Carrega GA apenas se analytics permitido
  if (flags.analytics) {
    loadGA(id);
    const g = (window as any).gtag;
    if (g) {
      // Ajustes de privacidade úteis para LGPD
      g("config", id, { anonymize_ip: true });
    }
  }

  // Sempre aplica o consent mode (mesmo sem carregar GA, o Google respeita os sinais)
  setGAConsent(flags);
}

// Dispara pageview manual em SPA
export function sendPageview(path: string) {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string;
  const g = (window as any).gtag;
  if (!id || !g) return;

  g("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}
