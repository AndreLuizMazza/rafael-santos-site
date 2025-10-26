import WhatsAppButton from "./WhatsAppButton";
import { ShieldAlert, Phone, FileText, PhoneCall } from "lucide-react";

export default function UrgencyChecklist() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-resp">
        <div className="grid gap-4 sm:gap-6">
          {/* TÍTULO padronizado (igual Depoimentos) */}
 <h2 className="text-xl sm:text-2xl font-semibold">
            Foi preso agora? O que fazer em 3 passos
          </h2>

          

          {/* 3 cartões */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Card
              icon={<Phone size={18} />}
              title="Acione um advogado imediatamente"
              text="Tempo é decisivo em flagrantes e audiências de custódia."
            />
            <Card
              icon={<ShieldAlert size={18} />}
              title="Não preste declarações sem orientação"
              text="Você tem direito ao silêncio e à assistência técnica."
            />
            <Card
              icon={<FileText size={18} />}
              title="Reúna informações básicas"
              text="Local da prisão, nomes de agentes/testemunhas, documentos e horários."
            />
          </div>

          {/* CTAs — responsivo com proporção 8/4 no desktop */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-12">
            {/* Primário: WhatsApp (ocupa 8–9 colunas) */}
            <div className="md:col-span-8 lg:col-span-9">
              <WhatsAppButton
                size="lg"
                full
                label="Falar no WhatsApp"
                className="btn-whatsapp min-h-[52px]"
                ariaLabel="Abrir conversa no WhatsApp"
              />
            </div>

            {/* Secundário: Ligar (ocupa 3–4 colunas) */}
            <div className="md:col-span-4 lg:col-span-3">
              <a
                href="tel:+5546991061375"
                className="
                  inline-flex w-full items-center justify-center gap-2 rounded-2xl
                  px-5 py-3.5 text-base font-semibold
                  ring-1 ring-zinc-300 dark:ring-zinc-700
                  bg-white dark:bg-zinc-900
                  hover:bg-zinc-50 dark:hover:bg-zinc-800
                  transition-all duration-150
                  min-h-[52px]
                "
                aria-label="Ligar agora para o escritório"
              >
                <PhoneCall size={18} />
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- UI bits ---- */
function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800 p-4 bg-white dark:bg-zinc-900">
      <div className="flex items-center gap-2 font-medium mb-2">
        {icon} {title}
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{text}</p>
    </div>
  );
}
