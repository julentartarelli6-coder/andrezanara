import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img } from "@/lib/brand";

const reasons = [
  "Semijoias de alta qualidade",
  "Acabamento impecável",
  "Modelos modernos",
  "Elegância para qualquer ocasião",
  "Excelente durabilidade",
  "Atendimento humanizado",
];

export function WhyUs() {
  return (
    <section className="bg-[image:var(--gradient-soft)] px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={img.peito}
              alt="Colar dourado com pérolas e pingente de coração usado por cliente"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Diferenciais"
            title="Por que escolher a Andreza Nara Semijoias?"
            subtitle="Cada peça passa por curadoria criteriosa para garantir brilho duradouro e caimento perfeito."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r} direction="right" delay={i * 80}>
                <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-5 py-4 shadow-soft transition-colors duration-400 hover:border-gold/60">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground">
                    <Check size={14} aria-hidden />
                  </span>
                  <span className="text-sm text-foreground">{r}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}