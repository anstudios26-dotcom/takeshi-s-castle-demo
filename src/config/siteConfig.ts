/**
 * Centralized Site Configuration for Takashi's Castle — The Fun Valley
 * North Lakhimpur, Assam, India
 *
 * Rules:
 * - Exactly nine palette colors:
 *   cream (#FFF6E5), ink (#1F2133), coral (#EC5B3E), blue (#4C8DF6), sakura (#FFC9D6),
 *   gold (#F7BE3E), butter (#FFE9A6), sky (#D6E6FF), blush (#FFDCE4).
 * - Single centralized WHATSAPP_NUMBER and buildWhatsAppUrl helper (handles India +91).
 * - Zero invented claims, certifications, or statistics.
 */

export interface AttractionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackColor: "coral" | "blue" | "gold" | "sakura" | "ink";
  iconName: "Gamepad2" | "Activity" | "Glasses" | "Trophy" | "Sparkles";
  objectPosition?: string;
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
    ink: string;
    coral: string;
    blue: string;
    sakura: string;
    gold: string;
    butter: string;
    sky: string;
    blush: string;
  };
  images: {
    hero: string;
    playArea: string;
    kidsPlaying: string;
    birthday: string;
    activities: string;
    entrance: string;
    logoBadge: string;
    attractions: {
      arcade: string;
      vr: string;
      games: string;
      more: string;
    };
    gallery: string[];
  };
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
    cream: "#FFF6E5",
    ink: "#1F2133",
    coral: "#EC5B3E",
    blue: "#4C8DF6",
    sakura: "#FFC9D6",
    gold: "#F7BE3E",
    butter: "#FFE9A6",
    sky: "#D6E6FF",
    blush: "#FFDCE4",
  },
  images: {
    hero: "/images/entrance.jpg",
    playArea: "/images/play-hall.jpg",
    kidsPlaying: "/images/kids-corner.jpg",
    birthday: "/images/birthday.jpg",
    activities: "/images/activities.jpg",
    entrance: "/images/entrance.jpg",
    logoBadge: "/images/logo-badge.png",
    attractions: {
      arcade: "/images/racing-sim.jpg",
      vr: "/images/vr-ride.jpg",
      games: "/images/play-hall.jpg",
      more: "/images/kids-corner.jpg",
    },
    gallery: [
      "/images/vr-ride.jpg",
      "/images/entrance.jpg",
      "/images/kids-corner.jpg",
      "/images/play-hall.jpg",
    ],
  },
  attractions: [
    {
      id: "arcade",
      title: "Arcade Games",
      description: "Classic and modern games.",
      image: "/images/racing-sim.jpg",
      fallbackColor: "coral",
      iconName: "Gamepad2",
      objectPosition: "center 35%",
    },
    {
      id: "vr",
      title: "VR Experiences",
      description: "Step into new worlds.",
      image: "/images/vr-ride.jpg",
      fallbackColor: "blue",
      iconName: "Glasses",
      objectPosition: "center 30%",
    },
    {
      id: "games",
      title: "Fun Games",
      description: "Challenges, skills and endless fun.",
      image: "/images/play-hall.jpg",
      fallbackColor: "gold",
      iconName: "Trophy",
    },
    {
      id: "more",
      title: "And More",
      description: "Rides, simulators and surprises.",
      image: "/images/kids-corner.jpg",
      fallbackColor: "sakura",
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
