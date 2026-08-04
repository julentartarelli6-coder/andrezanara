import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      <div className={`hairline mt-6 max-w-28 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}