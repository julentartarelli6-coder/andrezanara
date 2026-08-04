import { img, whatsappLink } from "@/lib/brand";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={img.hero}
        alt="Andreza Nara segurando sacolas de presente da marca de semijoias"
        className="absolute inset-0 size-full object-cover object-[72%_center]"
        width={1080}
        height={1350}
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.99_0.006_85/0.94)_0%,oklch(0.99_0.006_85/0.8)_34%,oklch(0.98_0.01_85/0.28)_58%,oklch(0.98_0.01_85/0.04)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background),transparent)]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-20 lg:px-10">
        <div className="max-w-xl">
          <p className="eyebrow animate-fade-in">Joias e Semijoias · Alto Padrão</p>
          <div className="hairline mt-5 max-w-24" />
          <h1 className="mt-7 font-display text-[2.35rem] leading-[1.1] text-foreground sm:text-5xl lg:text-[3.6rem]">
            Realce sua beleza com semijoias que unem{" "}
            <em className="text-gold-gradient not-italic font-serif-alt">elegância, brilho</em> e
            personalidade.
          </h1>
          <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
            Peças cuidadosamente selecionadas para mulheres que valorizam sofisticação em todos os
            momentos.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(
                "Olá! Vim pelo site e quero conhecer as semijoias da Andreza Nara.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center rounded-full bg-gold-gradient px-9 py-4 text-xs font-medium tracking-[0.2em] text-gold-foreground uppercase shadow-luxe transition-transform duration-300 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#colecoes"
              className="inline-flex items-center justify-center rounded-full border border-foreground/25 bg-card/60 px-9 py-4 text-xs font-medium tracking-[0.2em] text-foreground uppercase backdrop-blur transition-colors duration-300 hover:border-gold hover:bg-card"
            >
              Conhecer a coleção
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}