import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img, whatsappLink } from "@/lib/brand";

const collections = [
  {
    name: "Brincos com Pérolas",
    desc: "Do discreto ao statement, com brilho impecável.",
    image: img.perola,
    alt: "Brincos dourados com pérolas e cristal central",
  },
  {
    name: "Conjunto pulseira e colar",
    desc: "o clássico das pérolas com correntes de elos metálicos robustos..",
    image: img.colares,
    alt: "pulseira com pérolas e coração com corrente em T dourada.",
  },
  {
    name: "Pulseiras",
    desc: "Camadas elegantes para compor o seu estilo.",
    image: img.pandora,
    alt: "pulseira Pandora prateadas ",
  },
  {
    name: "Anéis solitários",
    desc: "Solitários com brilho intenso em uma composição elegante e sofisticada.",
    image: img.solitarias,
    alt: "Anéis solitários com pedras",
  },
  {
    name: "Conjuntos em zircônias transparentes",
    desc: "Harmonia perfeita entre brinco, colar e anel.",
    image: img.conjunto,
    alt: "Conjunto dourado com cristais em formato triangular",
  },
  {
    name: "Relógios Cravejados",
    desc: "Luxo cravejado para momentos especiais.",
    image: img.cravejado,
    alt: "relógios femininos cravejados de zircônias",
  },
  {
    name: "Conjunto Esmeralda",
    desc: "Colar e brincos com pedras verdes em acabamento dourado e elegante.",
    image: img.extra01,
    alt: "Conjunto de colar e brincos com pedra esmeralda",
  },
  {
    name: "Conjunto Cristal",
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
    name: "Conjunto Pedras verdes",
    desc: "Brinco e colar com pérola clássica e com cristais.",
    image: img.extra10,
    alt: "Conjunto de Pedras verdes",
  },
  {
    name: "Brinco com Pérola",
    desc: "Brinco com Pérola com um acabamento sofisticado.",
    image: img.extra06,
    alt: "Sofisticado brinco com pérola central,elegantes pedras baguetes douradas.",
  },
  {
    name: "Corrente com Pingente",
    desc: "Pulseira em dourado com pingente da cruz e acabamento luxuoso.",
    image: img.extra08,
    alt: "Pulseira em dourado com pingente da cruz e acabamento luxuoso",
  },
  {
    name: "Colar Riviera de Corações",
    desc: "conjunto em formato de coração com uma borda cravejada de mini cristais.",
    image: img.extra11,
    alt: "conjunto em formato de coração com uma borda cravejada de mini cristais.",
  },
  {
    name: "Conjunto de Brincos com Esmeralda",
    desc: "Peças com pedras verdes discretas e brilho premium para composição elegante.",
    image: img.extra12,
    alt: "Conjunto brincos com esmeralda e cristais",
  },
  {
    name: "Conjunto de Pedras verdes",
    desc: "Estilo sofisticado com pedras verdes para ocasiões especiais.",
    image: img.extra07,
    alt: "Conjunto de brinco , anel e colar com pedras verdes.",
  },
  {
    name: "Pulseira da Árvore da Vida",
    desc: "pulseira dourada com o pingente da Árvore da Vida.",
    image: img.extra09,
    alt: "Pulseira da Árvore da Vida com acabamento sofisticado",
  },
  {
    name: "Colar de Nossa Senhora de Nazaré",
    desc: "Composição dourada com brilho e detalhes delicados, ideal para uma peça de presença marcante.",
    image: img.collection02,
    alt: "Colar com pingente de Nossa Senhora de Nazaré em acabamento premium",
  },
  {
    name: "Colar floral",
    desc: "Peça com acabamento em ouro e detalhes em pedras coloridas, inspirada na devoção da Nazaré.",
    image: img.collection01,
    alt: "Colar dourado com pingente floral.",
  },
  {
    name: "Colar de cristais moissanite",
    desc: "Colar com fileira de zircônias em dourado, com efeito glamouroso e sofisticado.",
    image: img.collection04,
    alt: "Colar de zircônias em dourado com brilho intenso e acabamento luxuoso",
  },
  {
    name: "conjunto floral ",
    desc: "anel , brinco e pulseira floral com desenho delicado para um visual elegante e marcante.",
    image: img.collection03,
    alt: "conjunto floral com pedra vermelha e pulseira dourada com V centralizado",
  },
  {
    name: "Brincos Moissanite",
    desc: "Brincos em prata com Moissanite.",
    image: img.prata,
    alt: "brinco em prata com Moissanite",
  },
  {
    name: "Brincos Cristal Pink e Esmeralda",
    desc: "brincos para marcar a presença por onde passa.",
    image: img.cristal,
    alt: "brincos Cristal Pink e Esmeralda",
  },
  {
    name: "Brincos Multicolorido",
    desc: "brincos com pedras de cristal multicolorido Com micro zircônios.",
    image: img.multicolorido,
    alt: "brincos Cristal Pink e Esmeralda",
  },
  {
    name: "conjunto esmeralda",
    desc: "Anel e Brincos elegantes com pedras esmeralda.",
    image: img.esmeralda,
    alt: "conjunto de brincos e anel com pedras esmeralda e acabamento em dourado.",
  },
  {
    name: "conjunto abelhas cravejadas",
    desc: " conjunto de abelhas cravejadas com delicadeza e o brilho luxuoso do nosso banho em ouro.",
    image: img.abelha,
    alt: "conjunto de abelhas cravejadas.",
  },
  {
    name: "Conjunto Cruzeiro",
    desc: " conjunto composto por pedras maravilhosas.",
    image: img.ciano,
    alt: "conjunto cruzeiro esmeralda.",
  },
  {
    name: "Colares circular e cravejado",
    desc: "Mix de colares com a textura dos elos circulares e o brilho incomparável da cravação premium.",
    image: img.garganta,
    alt: "Colar circular e colar cravejado.",
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