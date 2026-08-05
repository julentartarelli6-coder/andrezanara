import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { img, whatsappLink } from "@/lib/brand";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Andreza Nara Semijoias — início">
          <img
            src={img.logo}
            alt="Monograma AN da Andreza Nara Semijoias"
            className="h-11 w-11 rounded-full object-cover"
            width={44}
            height={44}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-base tracking-[0.18em] text-foreground">
              ANDREZA NARA
            </span>
            <span className="block text-[0.6rem] tracking-[0.34em] text-muted-foreground">
              JOIAS E SEMIJOIAS
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.78rem] tracking-[0.16em] text-foreground/75 uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full focus-visible:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Olá! Vi o site da Andreza Nara Semijoias e gostaria de comprar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden rounded-full bg-gold-gradient px-6 py-3 text-[0.72rem] font-medium tracking-[0.18em] text-gold-foreground uppercase shadow-soft transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Comprar pelo WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Navegação mobile"
          className="animate-fade-in border-t border-border bg-background/97 px-6 pb-7 pt-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-border/60 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm tracking-[0.16em] text-foreground/85 uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink("Olá! Vi o site da Andreza Nara Semijoias e gostaria de comprar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-6 block rounded-full bg-gold-gradient px-6 py-4 text-center text-xs font-medium tracking-[0.18em] text-gold-foreground uppercase"
          >
            Comprar pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}