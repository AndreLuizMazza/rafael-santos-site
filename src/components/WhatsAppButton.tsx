import { MessageCircle } from "lucide-react";

type Props = {
  label?: string;
  phone?: string; // formato E.164 sem "+"
  message?: string; // texto já URL-encoded
  className?: string;
  full?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function WhatsAppButton({
  label = "Falar no WhatsApp",
  phone = "5546991061375",
  message = "Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Rafael%20Santos.",
  className = "",
  full,
  size = "md",
}: Props) {
  const sizes =
    size === "sm"
      ? "px-3 py-2 text-sm"
      : size === "lg"
      ? "px-5 py-3.5 text-base"
      : "px-4 py-2.5 text-sm";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Iniciar conversa no WhatsApp"
      className={`
        ${full ? "w-full" : ""}
        inline-flex items-center justify-center gap-2 rounded-2xl
        font-semibold transition-all duration-150 ease-out
        ring-1 ring-emerald-700/20 shadow-sm
        bg-[#25D366] text-zinc-900 hover:brightness-[1.05] active:scale-[0.99]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60
        dark:text-zinc-950
        ${sizes} ${className}
      `}
    >
      <MessageCircle size={18} strokeWidth={2} />
      {label}
    </a>
  );
}
