import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img, INSTAGRAM_URL } from "@/lib/brand";

const tiles = [
  { src: img.insta01, alt: "Brinco de pérola com cristal e ouro", span: "sm:col-span-2 sm:row-span-2" },
  { src: img.insta02, alt: "Pulseira dourada com pingente de árvore da vida" },
  { src: img.insta03, alt: "Conjunto de colar e brincos com pedras esmeralda" },
  { src: img.insta04, alt: "Pulseira de corrente com pingente dourado" },
  { src: img.insta05, alt: "Conjunto de colar e brincos com pedras em tons verdes" },
  { src: img.extra01, alt: "Conjunto de colar e brincos com pedra esmeralda" },
  { src: img.extra02, alt: "Conjunto de colar e brincos cristal luxe" },
  { src: img.extra03, alt: "Conjunto de anel e brincos com pedra ametista" },
  { src: img.extra04, alt: "Conjunto floral vermelho com anel" },
  { src: img.extra05, alt: "Conjunto de brincos e anel multicolorido" },
  { src: img.extra06, alt: "Rosário dourado com crucifixo cravejado" },
  { src: img.extra07, alt: "Conjunto de brinco e anel com pedras verdes" },
];

export function InstagramFeed() {
  return (
    <section className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="@andrezanara_semijoias"
          title="Acompanhe os lançamentos no Instagram"
          subtitle="Veja os novos looks em destaque, entre no perfil e descubra as peças exclusivas que chegam toda semana."
        />

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.src + i} delay={(i % 4) * 90} className={t.span}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir Instagram da marca — ${t.alt}`}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="aspect-square size-full object-cover transition-transform duration-[900ms] group-hover:scale-108"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-foreground/25 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                >
                  <Instagram className="text-primary-foreground" size={26} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-9 py-4 text-[0.72rem] font-medium tracking-[0.2em] text-foreground uppercase transition-colors duration-300 hover:border-gold hover:text-gold-deep"
          >
            <Instagram size={16} aria-hidden />
            Seguir no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}