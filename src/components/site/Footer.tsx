import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import { img, INSTAGRAM_URL, whatsappLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-primary px-5 py-16 text-primary-foreground lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={img.logo}
            alt="Logotipo Andreza Nara Semijoias"
            loading="lazy"
            className="size-16 rounded-full object-cover"
          />
          <p className="mt-5 font-display text-lg tracking-[0.16em]">ANDREZA NARA</p>
          <p className="text-[0.6rem] tracking-[0.32em] text-primary-foreground/60">
            JOIAS E SEMIJOIAS
          </p>
        </div>

        <div>
          <h2 className="text-sm tracking-[0.2em] uppercase">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li>
              <a
                href={whatsappLink("Olá! Vim pelo site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone size={15} aria-hidden /> +55 31 9682-8245
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram size={15} aria-hidden /> @andrezanara_semijoias
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm tracking-[0.2em] uppercase">Atendimento</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2">
              <Clock size={15} aria-hidden /> Seg a Sáb · 9h às 19h
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} aria-hidden /> Minas Gerais · Envios para todo o Brasil
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm tracking-[0.2em] uppercase">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {[
              ["Início", "#inicio"],
              ["Coleções", "#colecoes"],
              ["Depoimentos", "#depoimentos"],
              ["Sobre", "#sobre"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-primary-foreground/15 pt-7 text-center text-[0.7rem] tracking-[0.14em] text-primary-foreground/55 uppercase">
        © {new Date().getFullYear()} Andreza Nara Semijoias · Todos os direitos reservados
      </div>
    </footer>
  );
}