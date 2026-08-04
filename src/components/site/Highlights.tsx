import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img, whatsappLink } from "@/lib/brand";

const products = [
  {
    name: "Solitário Prata 950",
    desc: "Um solitário que traduz elegância, brilho e momentos inesquecíveis.",
    price: "Sob consulta",
    image: img.ring,
    alt: "Anel solitário em prata 950 com zircônia central em estojo de veludo",
  },
  {
    name: "Conjunto Pérolas Dourado",
    desc: "Brincos e anel com pérolas e cristal oval, acabamento premium.",
    price: "Sob consulta",
    image: img.pearl,
    alt: "Conjunto de brincos e anel dourados com pérolas e cristal oval",
  },
  {
    name: "Colar Coração Cravejado",
    desc: "Duplo coração em micro zircônias sobre corrente veneziana.",
    price: "Sob consulta",
    image: img.heart,
    alt: "Colar prateado com duplo coração cravejado de zircônias",
  },
  {
    name: "Choker Pérolas & Elo",
    desc: "Mix de corrente dourada e pérolas com pingente coração.",
    price: "Sob consulta",
    image: img.goldHeart,
    alt: "Colar dourado com pérolas e pingente de coração com Nossa Senhora",
  },
  {
    name: "Relógios Cravejados",
    desc: "Brilho total no pulso, para noites e ocasiões marcantes.",
    price: "Sob consulta",
    image: img.watches,
    alt: "Três relógios femininos cravejados de cristais na palma da mão",
  },
  {
    name: "Conjunto Cristal Triangular",
    desc: "Brincos, colar e anel banhados a ouro com cristais lapidados.",
    price: "Sob consulta",
    image: img.crystal,
    alt: "Conjunto banhado a ouro com cristais triangulares",
  },
];

export function Highlights() {
  return (
    <section id="destaques" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Destaques"
          title="As peças mais desejadas do momento"
          subtitle="Seleção atual do ateliê. Peça a sua antes que o modelo esgote."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} as="article" delay={(i % 3) * 110}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl text-foreground">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <p className="mt-4 text-[0.7rem] tracking-[0.22em] text-gold-deep uppercase">
                    {p.price}
                  </p>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse na peça "${p.name}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine mt-6 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-[0.7rem] font-medium tracking-[0.2em] text-gold-foreground uppercase"
                  >
                    Tenho Interesse
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