import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/brand";

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[image:var(--gradient-soft)] px-5 py-24 lg:px-10"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gold-gradient opacity-18"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">Atendimento imediato</p>
        <h2 className="mt-5 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[3rem]">
          Descubra a semijoia perfeita para você.
        </h2>
        <div className="hairline mx-auto mt-7 max-w-32" />
        <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-relaxed text-foreground/75">
          Fale agora conosco e encontre peças que valorizam ainda mais sua beleza.
        </p>
        <a
          href={whatsappLink("Olá! Quero encontrar a semijoia perfeita para mim.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine mt-11 inline-flex items-center justify-center rounded-full bg-primary px-12 py-5 text-xs font-medium tracking-[0.24em] text-primary-foreground uppercase shadow-luxe transition-transform duration-300 hover:-translate-y-0.5"
        >
          Conversar pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}