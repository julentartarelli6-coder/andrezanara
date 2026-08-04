import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Juliana M.",
    initials: "JM",
    text: "As peças são lindas e de excelente qualidade. Atendimento maravilhoso.",
  },
  {
    name: "Camila R.",
    initials: "CR",
    text: "Comprei um conjunto para o casamento da minha irmã e recebi elogios a noite toda. Chegou rápido e muito bem embalado.",
  },
  {
    name: "Patrícia L.",
    initials: "PL",
    text: "Uso todos os dias, não escurece e continua com o mesmo brilho. Já virei cliente fiel.",
  },
  {
    name: "Renata S.",
    initials: "RS",
    text: "A Andreza me ajudou a escolher pelo WhatsApp com toda a paciência. Um atendimento realmente personalizado.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="bg-secondary/50 px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Clientes que se sentem ainda mais bonitas"
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-9 shadow-luxe sm:p-14">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure key={t.name} className="w-full shrink-0 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold-gradient font-display text-lg text-gold-foreground">
                    {t.initials}
                  </div>
                  <div className="mt-5 flex justify-center gap-1" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} className="fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mx-auto mt-6 max-w-xl font-serif-alt text-xl leading-relaxed text-foreground italic sm:text-2xl">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-[0.72rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Depoimento anterior"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold-deep"
              >
                <ChevronLeft size={17} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === index ? "w-7 bg-gold-gradient" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo depoimento"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold-deep"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}