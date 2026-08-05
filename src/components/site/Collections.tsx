import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img, whatsappLink } from "@/lib/brand";

const collections = [
  {
    name: "Brincos",
    desc: "Do discreto ao statement, com brilho impecável.",
    image: img.pearl,
    alt: "Brincos dourados com pérolas e cristal central",
  },
  {
    name: "Colares",
    desc: "Pontos de luz que valorizam o colo.",
    image: img.colares,
    alt: "Colar delicado com pingente de coração cravejado",
  },
  {
    name: "Pulseiras",
    desc: "Camadas elegantes para compor o seu estilo.",
    image: img.bracelets,
    alt: "Trio de pulseiras prateadas sobre almofada de linho",
  },
  {
    name: "Anéis",
    desc: "Solitários e aparadores de acabamento nobre.",
    image: img.ring,
    alt: "Anel solitário em prata 950 dentro de estojo de veludo",
  },
  {
    name: "Conjuntos",
    desc: "Harmonia perfeita entre brinco, colar e anel.",
    image: img.crystal,
    alt: "Conjunto dourado com cristais em formato triangular",
  },
  {
    name: "Relógios",
    desc: "Luxo cravejado para momentos especiais.",
    image: img.watches,
    alt: "Três relógios femininos cravejados de zircônias",
  },
  {
    name: "Conjunto Esmeralda",
    desc: "Colar e brincos com pedras verdes em acabamento dourado e elegante.",
    image: img.extra01,
    alt: "Conjunto de colar e brincos com pedra esmeralda",
  },
  {
    name: "Conjunto Cristal Luxe",
    desc: "Par de brincos e colar com pedras transparentes e brilho intenso.",
    image: img.extra02,
    alt: "Conjunto de colar e brincos com cristal transparente",
  },
  {
    name: "Conjunto Ametista",
    desc: "Anel e brincos com pedras roxas, delicados e sofisticados.",
    image: img.extra03,
    alt: "Conjunto de anel e brincos com pedra ametista",
  },
  {
    name: "Conjunto Floral Vermelho",
    desc: "Brincos e anel com acabamento floral em vermelho vibrante.",
    image: img.extra04,
    alt: "Conjunto de brincos e anel em formato floral vermelho",
  },
  {
    name: "Conjunto Multicolorido",
    desc: "Peças com pedras coloridas em mix elegante para compor um look marcante.",
    image: img.extra05,
    alt: "Conjunto de brincos e anel multicolorido com pedras de várias cores",
  },
  {
    name: "Brinco de Pérola",
    desc: "Brinco com pérola clássica e acabamento em dourado com cristais.",
    image: img.extra10,
    alt: "Brinco de pérola com cristais em dourado",
  },
  {
    name: "Rosário Dourado",
    desc: "Rosário com corrente refinada e crucifixo com cristais delicados.",
    image: img.extra06,
    alt: "Rosário dourado com crucifixo cravejado",
  },
  {
    name: "Pulseira Corrente com Pingente",
    desc: "Pulseira em dourado com pingente de árvore da vida e acabamento luxuoso.",
    image: img.extra08,
    alt: "Pulseira dourada com pingente central em metal",
  },
  {
    name: "Conjunto Águas-Marinhas",
    desc: "Colar e brincos com pedras azuis e verdes, ideais para um visual sofisticado.",
    image: img.extra11,
    alt: "Conjunto de colar e brincos com pedras verdes e azuis",
  },
  {
    name: "Conjunto de Colar e Brincos com Esmeralda",
    desc: "Peças com pedras verdes discretas e brilho premium para composição elegante.",
    image: img.extra12,
    alt: "Conjunto de colar e brincos com esmeralda e cristais",
  },
  {
    name: "Conjunto de Brinco e Anel Premium",
    desc: "Estilo sofisticado com pedras verdes e dourado para ocasiões especiais.",
    image: img.extra07,
    alt: "Conjunto de brinco e anel com pedras verdes e dourado",
  },
  {
    name: "Conjunto de Colar e Brincos com Cristais",
    desc: "Modelo com brilho intenso, fecho elegante e acabamento que realça o visual.",
    image: img.extra09,
    alt: "Conjunto de colar e brincos com cristais e acabamento sofisticado",
  },
];

export function Collections() {
  return (
    <section id="colecoes" className="bg-secondary/50 px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coleções"
          title="Uma seleção pensada para cada detalhe seu"
          subtitle="Explore as categorias e receba fotos, valores e disponibilidade diretamente no WhatsApp."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.name} as="article" delay={(i % 3) * 110}>
              <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-107"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.24_0.012_60/0.4),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl text-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <a
                    href={whatsappLink(`Olá! Quero ver as opções de ${c.name} disponíveis.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.2em] text-gold-deep uppercase transition-colors hover:text-foreground"
                  >
                    Ver pelo WhatsApp
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}