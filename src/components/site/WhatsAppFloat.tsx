import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, whatsappLink } from "@/lib/brand";

export function WhatsAppFloat() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir a Andreza Nara Semijoias no Instagram"
        className="inline-flex size-14 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-luxe transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Instagram size={24} aria-hidden />
      </a>
      <a
        href={whatsappLink("Olá! Vim pelo site da Andreza Nara Semijoias.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Andreza Nara Semijoias"
        className="inline-flex size-14 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-luxe transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <MessageCircle size={24} aria-hidden />
      </a>
    </div>
  );
}