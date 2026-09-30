/**
 * Centralized Site Configuration for Takashi's Castle — The Fun Valley
 * North Lakhimpur, Assam, India
 *
 * Rules:
 * - Exactly five palette colors: cream (#FFF8ED), sakura (#FFD9E0), ink (#17182A), coral (#FF5A3C), blue (#3B82F6).
 * - Single centralized WHATSAPP_NUMBER and buildWhatsAppUrl helper (handles India +91).
 * - Zero invented claims, certifications, or statistics.
 */

export interface AttractionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackColor: "ink" | "blue" | "coral" | "sakura";
  iconName: "Gamepad2" | "Activity" | "Glasses" | "Trophy" | "Sparkles";
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    heroSupport: string;
    locationSummary: string;
  };
  contact: {
    whatsappNumber: string;
    phonePlaceholder: string;
    addressPlaceholder: string;
    hoursPlaceholder: string;
    whatsappDisplayPlaceholder: string;
    mapsUrl: string;
  };
  palette: {
    cream: string;
    sakura: string;
    ink: string;
    coral: string;
    blue: string;
  };
  images: {
    hero: string;
    playArea: string;
    kidsPlaying: string;
    birthday: string;
    activities: string;
    entrance: string;
    attractions: {
      arcade: string;
      trampolines: string;
      vr: string;
      games: string;
      more: string;
    };
    gallery: string[];
  };
  /* CONFIRM THESE WITH THE CLIENT BEFORE SHARING THE DEMO */
  attractions: AttractionItem[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "TAKASHI'S CASTLE",
    tagline: "THE FUN VALLEY",
    heroSupport:
      "Play, explore, celebrate and make memories at Takashi's Castle — The Fun Valley.",
    locationSummary: "North Lakhimpur, Assam",
  },
  contact: {
    // Single centralized WhatsApp number definition:
    whatsappNumber: "REPLACE_WITH_VERIFIED_NUMBER",
    phonePlaceholder: "[INSERT VERIFIED PHONE]",
    addressPlaceholder: "[INSERT VERIFIED ADDRESS]",
    hoursPlaceholder: "[INSERT VERIFIED HOURS]",
    whatsappDisplayPlaceholder: "[INSERT VERIFIED WHATSAPP]",
    mapsUrl:
      "https://maps.google.com/?q=Takashi%27s+Castle+The+Fun+Valley+North+Lakhimpur+Assam",
  },
  palette: {
    cream: "#FFF8ED",
    sakura: "#FFD9E0",
    ink: "#17182A",
    coral: "#FF5A3C",
    blue: "#3B82F6",
  },
  images: {
    hero: "/images/hero.jpg",
    playArea: "/images/play-area.jpg",
    kidsPlaying: "/images/kids-playing.jpg",
    birthday: "/images/birthday.jpg",
    activities: "/images/activities.jpg",
    entrance: "/images/entrance.jpg",
    attractions: {
      arcade: "/images/attraction-arcade.jpg",
      trampolines: "/images/attraction-trampolines.jpg",
      vr: "/images/attraction-vr.jpg",
      games: "/images/attraction-games.jpg",
      more: "/images/attraction-more.jpg",
    },
    gallery: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
  },
  /* CONFIRM THESE WITH THE CLIENT BEFORE SHARING THE DEMO */
  attractions: [
    {
      id: "arcade",
      title: "Arcade Games",
      description: "Classic and modern games.",
      image: "/images/attraction-arcade.jpg",
      fallbackColor: "ink",
      iconName: "Gamepad2",
    },
    {
      id: "trampolines",
      title: "Trampolines",
      description: "Jump, flip and feel the freedom.",
      image: "/images/attraction-trampolines.jpg",
      fallbackColor: "blue",
      iconName: "Activity",
    },
    {
      id: "vr",
      title: "VR Experiences",
      description: "Step into new worlds.",
      image: "/images/attraction-vr.jpg",
      fallbackColor: "coral",
      iconName: "Glasses",
    },
    {
      id: "games",
      title: "Fun Games",
      description: "Challenges, skills and endless fun.",
      image: "/images/attraction-games.jpg",
      fallbackColor: "sakura",
      iconName: "Trophy",
    },
    {
      id: "more",
      title: "And More",
      description: "Rides, simulators and surprises.",
      image: "/images/attraction-more.jpg",
      fallbackColor: "ink",
      iconName: "Sparkles",
    },
  ],
};

/**
 * Checks if the centralized WhatsApp number has been verified / populated with digits.
 */
export function isWhatsAppConfigured(): boolean {
  if (
    !siteConfig.contact.whatsappNumber ||
    siteConfig.contact.whatsappNumber === "REPLACE_WITH_VERIFIED_NUMBER"
  ) {
    return false;
  }
  const digits = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  return digits.length > 0;
}

/**
 * Builds the canonical wa.me URL using the single WHATSAPP_NUMBER.
 * Handles India 10-digit mobile numbers by prepending country code 91.
 * Returns null if the number is unconfigured ("REPLACE_WITH_VERIFIED_NUMBER").
 */
export function buildWhatsAppUrl(message?: string): string | null {
  if (!isWhatsAppConfigured()) {
    return null;
  }
  let digits = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  // Default country code for India: if 10 digits provided, prepend 91
  if (digits.length === 10) {
    digits = `91${digits}`;
  }
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
