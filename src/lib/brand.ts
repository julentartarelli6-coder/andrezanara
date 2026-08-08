import logo from "@/assets/logomarca.jpg";
import hero from "@/assets/hero.jpg.asset.json";
import owner from "@/assets/owner.jpg.asset.json";
import ring from "@/assets/ring-solitaire.jpg.asset.json";
import solitarias from "@/assets/solitarias.jpg";
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
import collection01 from "@/assets/WhatsApp Image 2026-08-05 at 17.35.21.jpg";
import collection02 from "@/assets/WhatsApp Image 2026-08-05 at 17.38.21.jpg";
import collection03 from "@/assets/instagram_DaJOHMzOOBE_1785962515778.jpg";
import collection04 from "@/assets/instagram_DQ89jIfjq5__1785962524232.jpg";
import insta01 from "@/assets/DUg9JyQDp3k.jpg";
import insta02 from "@/assets/DUVWIr7Duy6.jpg";
import insta03 from "@/assets/instagram_DReyUjmjqOa_1785954389744.jpg";
import insta04 from "@/assets/instagram_DUB1dnXjuj8_1785954625752.jpg";
import insta05 from "@/assets/instagram_DUB1dnXjuj8_1785954628960.jpg";
import perola from "@/assets/perola.jpg";
import pandora from "@/assets/pandora.jpg";
import conjunto from "@/assets/conjunto.jpg";
import cravejado from "@/assets/cravejado.jpg";
import nazare from "@/assets/nazare.jpg";
import cv from "@/assets/cv.jpg";
import heromobile from "@/assets/heromobile.jpg";
import prata from "@/assets/prata.jpg";
import cristal from "@/assets/cristal.jpg";
import multicolorido from "@/assets/multicolorido.jpg";
import esmeralda from "@/assets/esmeralda.jpg";
import abelha from "@/assets/abelha.jpg";
import ciano from "@/assets/ciano.jpg";
import garganta from "@/assets/garganta.jpg";


export const img = {
  logo,
  hero: hero.url,
  owner: owner.url,
  ring: ring.url,
  solitarias,
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
  collection01,
  collection02,
  collection03,
  collection04,
  insta01,
  insta02,
  insta03,
  insta04,
  insta05,
  perola,
  pandora,
  conjunto,
  cravejado,
  nazare,
  cv,
  heromobile,
  prata,
  cristal,
  multicolorido,
  esmeralda,
  abelha,
  ciano,
  garganta,
};

export const WHATSAPP_NUMBER = "553196828245";
export const INSTAGRAM_URL =
  "https://www.instagram.com/andrezanara_semijoias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}