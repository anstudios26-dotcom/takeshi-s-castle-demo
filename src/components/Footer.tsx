import React from "react";
import { siteConfig } from "../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream pt-14 pb-0 border-t border-ink">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* 96px round logo-badge.png in the footer */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo-badge.png"
            alt="Takashi's Castle Logo Badge"
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="w-24 h-24 object-contain rounded-full shadow-md"
          />
        </div>

        {/* Text is © + name only */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-10 border-b border-cream/15 text-xs text-cream/70 font-normal">
          <p>© {new Date().getFullYear()} Takashi&apos;s Castle — The Fun Valley.</p>
          <p className="text-cream/50 text-[11px] font-mono">
            {siteConfig.brand.locationSummary}
          </p>
        </div>

        {/* Brand Name Huge and Cropped by the Bottom Edge of the Viewport */}
        <div className="overflow-hidden select-none pt-8 pointer-events-none">
          <p className="text-[clamp(3.5rem,14vw,13rem)] font-extrabold uppercase tracking-[-0.035em] text-cream leading-[0.78] -mb-3 sm:-mb-6 md:-mb-10 text-center whitespace-nowrap">
            {siteConfig.brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
