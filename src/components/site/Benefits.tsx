import { Sparkles, Gem, Truck, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { Icon: Sparkles, title: "Qualidade Premium", text: "Banho reforçado e matéria-prima nobre." },
  { Icon: Gem, title: "Design Exclusivo", text: "Peças selecionadas uma a uma." },
  { Icon: Truck, title: "Envio para todo Brasil", text: "Embalagem elegante e rastreio." },
  { Icon: Heart, title: "Atendimento Personalizado", text: "Consultoria dedicada no WhatsApp." },
];

export function Benefits() {
  return (
    <section aria-label="Benefícios" className="relative z-10 px-5 py-16 lg:px-10">
      <h2 className="sr-only">Benefícios da Andreza Nara Semijoias</h2>
      <ul className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 90}>
            <div className="group h-full rounded-2xl border border-border bg-card/80 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-champagne/70 text-gold-deep transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-gold-foreground">
                <Icon size={19} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}