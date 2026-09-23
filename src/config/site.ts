export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Heart of Artemisa Wiki",
  shortName: "Heart of Artemisa",
  logoText: "HA",
  tagline: "Builds, Guides, Rhythm Mechanics & Gameplay",
  description: "Heart of Artemisa Wiki provides gameplay guides, combat tips, dungeon strategies, character builds, rhythm mechanics, and latest updates for this pixel fantasy roguelite adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heartofartemisawiki.top",
  supportEmail: "support@heartofartemisawiki.top",
  gameUrl: "https://store.steampowered.com/app/3200950/Heart_of_Artemisa/",
  heroVideoId: "Cmk81RwmQEc",
  social: {
    discord: "https://discord.gg/6MEwKQwn9n",
    youtube: "https://www.youtube.com/@CamacebraGames",
    twitter: "https://x.com/CamacebraGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
