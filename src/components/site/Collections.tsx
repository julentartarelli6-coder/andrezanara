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
    name: "Produto extra 01",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra01,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 02",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra02,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 03",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra03,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 04",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra04,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 05",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra05,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 06",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra06,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 07",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra07,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 08",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra08,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 09",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra09,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 10",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra10,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 11",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra11,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
  },
  {
    name: "Produto extra 12",
    desc: "Mais uma peça para completar a coleção com brilho e sofisticação.",
    image: img.extra12,
    alt: "Peça extra da coleção em semijoia com acabamento refinado",
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