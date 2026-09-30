import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export const VenueMap: React.FC = () => {
  const [viewMode, setViewMode] = useState<"interactive" | "stylized">("interactive");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Takashi's Castle The Fun Valley N Lakhimpur Bypass Rd Chaboti Assam 787051"
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full border border-ink/20 bg-cream">
      {/* Map Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 px-4 py-3 bg-cream/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-ink">
            Location Map
          </span>
          <span className="hidden sm:inline text-ink/40">•</span>
          <span className="hidden sm:inline font-mono text-ink/70">
            Chaboti, N Lakhimpur
          </span>
        </div>

        {/* View Switcher & Direct Link */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-ink/20 p-0.5 bg-cream">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                viewMode === "interactive"
                  ? "bg-ink text-cream"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Interactive
            </button>
            <button
              type="button"
              onClick={() => setViewMode("stylized")}
              className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                viewMode === "stylized"
                  ? "bg-ink text-cream"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Stylized Guide
            </button>
          </div>

          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 bg-coral hover:bg-gold px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink transition-colors"
          >
            <span>Open in Maps</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Map View Area */}
      <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-sky/30">
        {viewMode === "interactive" ? (
          <div className="relative h-full w-full">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream text-ink">
                <MapPin className="h-8 w-8 text-coral animate-bounce mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-ink/70">
                  Loading map view...
                </span>
              </div>
            )}
            <iframe
              title="Takashi's Castle Location Map"
              src={embedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Corner Info Overlay */}
            <div className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] sm:max-w-xs bg-ink/90 text-cream p-3 backdrop-blur-xs text-xs shadow-md pointer-events-auto">
              <p className="font-extrabold tracking-wider uppercase text-coral text-[11px]">
                TAKASHI&apos;S CASTLE
              </p>
              <p className="font-medium text-cream/90 text-[11px] mt-0.5 line-clamp-2">
                N Lakhimpur Bypass Rd, near Jila Parishad Office
              </p>
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-gold hover:underline"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        ) : (
          /* Stylized Editorial SVG Map */
          <div className="relative h-full w-full select-none flex items-center justify-center bg-[#FFF6E5] overflow-hidden">
            <svg
              viewBox="0 0 800 450"
              className="w-full h-full object-cover"
              role="img"
              aria-label="Stylized map showing route to Takashi's Castle"
            >
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F2133" strokeWidth="0.5" strokeOpacity="0.06" />
                </pattern>
                <linearGradient id="bypassGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1F2133" />
                  <stop offset="100%" stopColor="#2A2F45" />
                </linearGradient>
              </defs>

              {/* Background Grid */}
              <rect width="800" height="450" fill="#FFF6E5" />
              <rect width="800" height="450" fill="url(#mapGrid)" />

              {/* Landscape color accents */}
              <path d="M 50 40 Q 140 20 220 70 Q 180 160 80 140 Z" fill="#D6E6FF" opacity="0.45" />
              <path d="M 560 280 Q 680 260 740 330 Q 680 420 540 390 Z" fill="#FFC9D6" opacity="0.35" />
              <path d="M 500 50 Q 620 30 700 90 Q 640 180 520 130 Z" fill="#FFE9A6" opacity="0.45" />

              {/* River / Water Channel in Sky Blue */}
              <path
                d="M -20 180 C 140 150, 260 240, 420 200 C 580 160, 720 230, 820 190"
                fill="none"
                stroke="#D6E6FF"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.8"
              />
              <text x="120" y="165" fill="#4C8DF6" fontSize="10" fontWeight="bold" letterSpacing="2" opacity="0.8">Ranganadi Canal / Stream</text>

              {/* Secondary Roads in Ink with border */}
              <path d="M 120 450 L 120 0" stroke="#FFFFFF" strokeWidth="16" />
              <path d="M 120 450 L 120 0" stroke="#1F2133" strokeWidth="8" opacity="0.25" strokeDasharray="6 6" />
              <text x="105" y="400" fill="#1F2133" fontSize="10" fontWeight="bold" transform="rotate(-90 105 400)" opacity="0.6">To Town Center</text>

              {/* Chaboti Local Road */}
              <path d="M 280 450 L 460 0" stroke="#FFFFFF" strokeWidth="18" />
              <path d="M 280 450 L 460 0" stroke="#1F2133" strokeWidth="10" opacity="0.3" />
              <text x="310" y="320" fill="#1F2133" fontSize="10" fontWeight="bold" transform="rotate(-68 310 320)" opacity="0.65">Chaboti Rd</text>

              {/* Major Highway: N Lakhimpur Bypass Rd */}
              <path
                d="M -20 340 Q 300 310 500 220 T 820 100"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="32"
              />
              <path
                d="M -20 340 Q 300 310 500 220 T 820 100"
                fill="none"
                stroke="url(#bypassGrad)"
                strokeWidth="24"
              />
              {/* Yellow center line dashes */}
              <path
                d="M -20 340 Q 300 310 500 220 T 820 100"
                fill="none"
                stroke="#F7BE3E"
                strokeWidth="2.5"
                strokeDasharray="12 10"
              />

              {/* Road Label */}
              <g transform="translate(180, 310) rotate(-7)">
                <rect x="-10" y="-14" width="220" height="22" fill="#1F2133" rx="2" />
                <text x="100" y="1" fill="#FFF6E5" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="1">
                  N LAKHIMPUR BYPASS RD
                </text>
              </g>

              {/* Landmark: Jila Parishad Office */}
              <g transform="translate(370, 240)">
                <rect x="-70" y="-30" width="140" height="28" fill="#FFF6E5" stroke="#1F2133" strokeWidth="2" rx="2" />
                <circle cx="-50" cy="-16" r="4" fill="#4C8DF6" />
                <text x="-40" y="-12" fill="#1F2133" fontSize="9" fontWeight="bold">Jila Parishad Office</text>
                <line x1="0" y1="-2" x2="0" y2="25" stroke="#1F2133" strokeWidth="1.5" strokeDasharray="3 3" />
              </g>

              {/* Landmark: Puta Pukhuri No. 2 */}
              <g transform="translate(630, 260)">
                <rect x="-65" y="-12" width="130" height="22" fill="#D6E6FF" stroke="#4C8DF6" strokeWidth="1.5" rx="3" />
                <text x="0" y="3" fill="#1F2133" fontSize="9" fontWeight="bold" textAnchor="middle">Puta Pukhuri No. 2</text>
              </g>

              {/* Main Destination: TAKASHI'S CASTLE */}
              <g transform="translate(530, 185)">
                {/* Outer pulsing beacon ring */}
                <circle cx="0" cy="0" r="32" fill="#EC5B3E" opacity="0.2" />
                <circle cx="0" cy="0" r="22" fill="#EC5B3E" opacity="0.3" />

                {/* Pin Shadow */}
                <ellipse cx="0" cy="18" rx="14" ry="5" fill="#1F2133" opacity="0.25" />

                {/* Venue Pin Head */}
                <circle cx="0" cy="0" r="15" fill="#EC5B3E" stroke="#FFFFFF" strokeWidth="3" />
                <polygon points="0,-7 6,4 -6,4" fill="#FFFFFF" />

                {/* Callout Card */}
                <g transform="translate(0, -45)">
                  <rect x="-110" y="-38" width="220" height="52" fill="#1F2133" rx="4" />
                  <polygon points="0,18 -8,14 8,14" fill="#1F2133" />
                  <text x="0" y="-18" fill="#FFF6E5" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="1">
                    TAKASHI&apos;S CASTLE
                  </text>
                  <text x="0" y="-4" fill="#F7BE3E" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="1.5">
                    THE FUN VALLEY
                  </text>
                  <text x="0" y="9" fill="#FFF6E5" fontSize="8" opacity="0.8" textAnchor="middle">
                    Chaboti • Open Daily 11AM–11PM
                  </text>
                </g>
              </g>

              {/* Compass Rose in Top-Right */}
              <g transform="translate(730, 60)">
                <circle cx="0" cy="0" r="26" fill="#FFF6E5" stroke="#1F2133" strokeWidth="2" />
                <polygon points="0,-20 5,0 -5,0" fill="#EC5B3E" />
                <polygon points="0,20 5,0 -5,0" fill="#1F2133" opacity="0.4" />
                <polygon points="-20,0 0,5 0,-5" fill="#1F2133" opacity="0.4" />
                <polygon points="20,0 0,5 0,-5" fill="#1F2133" opacity="0.4" />
                <text x="0" y="-8" fill="#FFF6E5" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
              </g>

              {/* Bottom Legend */}
              <g transform="translate(30, 415)">
                <rect x="0" y="-18" width="230" height="26" fill="#FFF6E5" stroke="#1F2133" strokeWidth="1" opacity="0.95" />
                <circle cx="15" cy="-5" r="4" fill="#EC5B3E" />
                <text x="25" y="-2" fill="#1F2133" fontSize="9" fontWeight="bold">Venue Location</text>
                <rect x="110" y="-8" width="16" height="6" fill="#1F2133" />
                <text x="132" y="-2" fill="#1F2133" fontSize="9" fontWeight="bold">Bypass Highway</text>
              </g>
            </svg>

            {/* Direct Directions Action Overlay */}
            <div className="absolute bottom-3 right-3">
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-ink hover:bg-gold hover:text-ink text-cream px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md"
              >
                <Navigation className="h-3.5 w-3.5 text-coral" />
                <span>Get Turn-by-Turn Directions</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Map Footer Bar with Key Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2.5 bg-cream border-t border-ink/15 text-[11px] text-ink/70 font-mono">
        <span>📍 N Lakhimpur Bypass Rd, near Jila Parishad Office, Chaboti</span>
        <a
          href={siteConfig.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue hover:underline font-sans font-bold flex items-center gap-1"
        >
          <span>Open Full Google Map</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};
