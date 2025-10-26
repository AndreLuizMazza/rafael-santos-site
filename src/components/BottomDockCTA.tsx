import { MessageCircle } from 'lucide-react';

export default function BottomDockCTA(){
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <a
          href="https://wa.me/5546991061375?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos."
          target="_blank"
          rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp"
          className="btn-whatsapp flex inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow ring-1 ring-emerald-700/25 bg-[#25D366] text-black hover:brightness-105 active:scale-[0.99] w-full"
        >
          <MessageCircle size={18} /> Falar no WhatsApp
        </a>
      </div>
    </div>
  )
}
