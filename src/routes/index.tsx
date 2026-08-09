import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Collections } from "@/components/site/Collections";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { INSTAGRAM_URL } from "@/lib/brand";

const TITLE = "Andreza Nara Semijoias";
const DESCRIPTION =
  "Semijoias premium selecionadas para mulheres que valorizam sofisticação. Atendimento personalizado no WhatsApp e envio para todo o Brasil.";
const SITE_URL = "https://www.andrezanarasemijoias.com.br/";
const LOGO_URL =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e47bb628-269f-4275-b66e-ee7b60a5a9c5";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Andreza Nara Semijoias",
          alternateName: "Andreza Nara",
          url: SITE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "Andreza Nara Semijoias",
          alternateName: "Andreza Nara",
          url: SITE_URL,
          logo: LOGO_URL,
          image: LOGO_URL,
          description: DESCRIPTION,
          telephone: "+5531968288245",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          areaServed: "Brasil",
          sameAs: [INSTAGRAM_URL],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Andreza Nara Semijoias",
          description: DESCRIPTION,
          url: SITE_URL,
          image: LOGO_URL,
          logo: LOGO_URL,
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
        <InstagramFeed />
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
