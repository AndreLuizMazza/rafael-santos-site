// src/components/ThemeDock.tsx
import ThemeMenu from './ThemeMenu';

/**
 * Pequeno dock flutuante para seleção de tema.
 * Sempre visível, ocupa pouco espaço e posiciona-se com perfeição
 * no canto inferior direito (acima da dock do WhatsApp no mobile).
 */
export default function ThemeDock(){
  return (
    <div
      className="fixed z-[60] right-3 bottom-16 md:right-6 md:bottom-6
                 select-none pointer-events-auto"
      aria-label="Seleção de tema"
      role="region"
    >
      {/* Reuso do ThemeMenu com classes mais compactas (o label já some no mobile) */}
      <ThemeMenu />
    </div>
  );
}
