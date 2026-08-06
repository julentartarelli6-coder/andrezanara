import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img, whatsappLink } from "@/lib/brand";

export function About() {
  return (
    <section id="sobre" className="px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Sobre a marca"
            title="Paixão pela beleza feminina em cada detalhe"
          />
          <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              A Andreza Nara Semijoias nasceu do desejo de tornar o luxo acessível, sem abrir mão da
              qualidade. Cada peça é escolhida a dedo, avaliando banho, brilho, caimento e
              durabilidade — porque a joia certa é aquela que acompanha a mulher em todos os
              momentos.
            </p>
            <p>
              Do primeiro contato à entrega, o atendimento é conduzido de forma próxima e
              personalizada. Entendemos o seu estilo, sugerimos combinações e cuidamos de cada
              detalhe da embalagem para que a experiência seja tão especial quanto a peça.
            </p>
            <p>
              É esse compromisso com cada cliente que transforma uma compra em relacionamento — e uma
              semijoia em memória.
            </p>
          </div>
          <a
            href={whatsappLink("Olá, Andreza! Gostaria de um atendimento personalizado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-10 inline-flex rounded-full bg-gold-gradient px-9 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-gold-foreground uppercase shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            Falar com a Andreza
          </a>
        </div>

        <Reveal direction="right" className="order-1 lg:order-2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.2rem] bg-gold-gradient opacity-25 blur-xl"
            />
            <img
              src={img.cv}
              alt="Andreza Nara usando colares, pulseiras e anéis da própria marca"
              loading="lazy"
              className="relative aspect-4/5 w-full rounded-[2rem] object-cover shadow-luxe"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}