import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import owner from "@/assets/owner.jpg.asset.json";
import ring from "@/assets/ring-solitaire.jpg.asset.json";
import pearl from "@/assets/pearl-set.jpg.asset.json";
import heart from "@/assets/heart-necklace.jpg.asset.json";
import goldHeart from "@/assets/gold-heart.jpg.asset.json";
import bracelets from "@/assets/bracelets.jpg.asset.json";
import watches from "@/assets/watches.jpg.asset.json";
import crystal from "@/assets/crystal-set.jpg.asset.json";
import colares from "@/assets/colares.jpg";
import extra01 from "@/assets/WhatsApp-Image-2026-08-04-at-18.00.06.jpg";
import extra02 from "@/assets/WhatsApp-Image-2026-08-04-at-18.00.06-_1_.jpg";
import extra03 from "@/assets/WhatsApp-Image-2026-08-05-at-08.23.12.jpg";
import extra04 from "@/assets/WhatsApp-Image-2026-08-05-at-08.33.18.jpg";
import extra05 from "@/assets/WhatsApp-Image-2026-08-05-at-08.49.15.jpg";
import extra06 from "@/assets/WhatsApp-Image-2026-08-05-at-09.01.49.jpg";
import extra07 from "@/assets/WhatsApp-Image-2026-08-05-at-09.01.49-_1_.jpg";
import extra08 from "@/assets/WhatsApp-Image-2026-08-05-at-09.01.51.jpg";
import extra09 from "@/assets/WhatsApp-Image-2026-08-05-at-09.01.55.jpg";
import extra10 from "@/assets/instagram_DWBpUoIDoi4_1785952352588.jpg";
import extra11 from "@/assets/instagram_DWPcOfajnN2_1785952280096.jpg";
import extra12 from "@/assets/instagram_DWTqIMHDmPc_1785952306346.jpg";

export const img = {
  logo: logo.url,
  hero: hero.url,
  owner: owner.url,
  ring: ring.url,
  pearl: pearl.url,
  heart: heart.url,
  colares,
  goldHeart: goldHeart.url,
  bracelets: bracelets.url,
  watches: watches.url,
  crystal: crystal.url,
  extra01,
  extra02,
  extra03,
  extra04,
  extra05,
  extra06,
  extra07,
  extra08,
  extra09,
  extra10,
  extra11,
  extra12,
};

export const WHATSAPP_NUMBER = "553196828245";
export const INSTAGRAM_URL =
  "https://www.instagram.com/andrezanara_semijoias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}