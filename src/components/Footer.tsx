import React from "react";
import { siteConfig } from "../config/siteConfig";
import { motion, useReducedMotion } from "motion/react";

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer id="footer" className="relative overflow-hidden bg-ink text-cream pt-14 pb-0 border-t border-ink">
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

        {/* Brand Name Huge SVG Wordmark, Fitted Edge-to-Edge and Cropped by the Bottom Edge of the Footer */}
        <div className="overflow-hidden select-none pt-8 pointer-events-none">
          <motion.div
            initial={{ y: shouldReduceMotion ? 0 : "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full flex flex-col items-center -mb-2 sm:-mb-3 md:-mb-4 lg:-mb-5"
          >
            {/* Narrow screens (< 640px): Split into two lines, each its own full-width SVG */}
            <div className="sm:hidden w-full flex flex-col space-y-1">
              <svg
                viewBox="0 0 1000 160"
                width="100%"
                role="img"
                aria-label="Takashi's"
                className="w-full block"
              >
                <text
                  x="0"
                  y="145"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  fill="#FFF6E5"
                  fontFamily="var(--font-sans, 'Bricolage Grotesque', system-ui, sans-serif)"
                  fontWeight="800"
                  fontSize="175"
                  className="uppercase tracking-[-0.035em]"
                >
                  TAKASHI&apos;S
                </text>
              </svg>
              <svg
                viewBox="0 0 1000 230"
                width="100%"
                role="img"
                aria-label="Castle"
                className="w-full block"
              >
                <text
                  x="0"
                  y="210"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  fill="#FFF6E5"
                  fontFamily="var(--font-sans, 'Bricolage Grotesque', system-ui, sans-serif)"
                  fontWeight="800"
                  fontSize="255"
                  className="uppercase tracking-[-0.035em]"
                >
                  CASTLE
                </text>
              </svg>
            </div>

            {/* Desktop & Tablet (>= 640px): Single line full-width SVG */}
            <div className="hidden sm:block w-full">
              <svg
                viewBox="0 0 1000 115"
                width="100%"
                role="img"
                aria-label="Takashi's Castle"
                className="w-full block"
              >
                <text
                  x="0"
                  y="102"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  fill="#FFF6E5"
                  fontFamily="var(--font-sans, 'Bricolage Grotesque', system-ui, sans-serif)"
                  fontWeight="800"
                  fontSize="112"
                  className="uppercase tracking-[-0.035em]"
                >
                  TAKASHI&apos;S CASTLE
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
