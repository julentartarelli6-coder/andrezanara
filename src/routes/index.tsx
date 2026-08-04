import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Collections } from "@/components/site/Collections";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { img, INSTAGRAM_URL } from "@/lib/brand";

const TITLE = "Andreza Nara Semijoias | Elegância e Brilho Exclusivos";
const DESCRIPTION =
  "Semijoias premium selecionadas para mulheres que valorizam sofisticação. Atendimento personalizado no WhatsApp e envio para todo o Brasil.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Andreza Nara Semijoias",
          description: DESCRIPTION,
          image: img.logo,
          logo: img.logo,
          telephone: "+5531968288245",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          areaServed: "Brasil",
          sameAs: [INSTAGRAM_URL],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Collections />
        <WhyUs />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
