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

export const img = {
  logo: logo.url,
  hero: hero.url,
  owner: owner.url,
  ring: ring.url,
  pearl: pearl.url,
  heart: heart.url,
  goldHeart: goldHeart.url,
  bracelets: bracelets.url,
  watches: watches.url,
  crystal: crystal.url,
};

export const WHATSAPP_NUMBER = "553196828245";
export const INSTAGRAM_URL =
  "https://www.instagram.com/andrezanara_semijoias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}