import React, { useState } from "react";
import { siteConfig, AttractionItem } from "../config/siteConfig";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Gamepad2, Activity, Glasses, Trophy, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export const AttractionsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: AttractionItem["iconName"], colorClass: string) => {
    const props = { className: `w-6 h-6 stroke-[1.5] ${colorClass}` };
    switch (iconName) {
      case "Gamepad2":
        return <Gamepad2 {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "Glasses":
        return <Glasses {...props} />;
      case "Trophy":
        return <Trophy {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const getFallbackClasses = (color: AttractionItem["fallbackColor"]) => {
    switch (color) {
      case "coral":
        return { bg: "bg-coral", text: "text-ink", icon: "text-ink" };
      case "blue":
        return { bg: "bg-blue", text: "text-cream", icon: "text-cream" };
      case "gold":
        return { bg: "bg-gold", text: "text-ink", icon: "text-ink" };
      case "sakura":
        return { bg: "bg-sakura", text: "text-ink", icon: "text-ink" };
      case "ink":
        return { bg: "bg-ink", text: "text-cream", icon: "text-cream" };
      default:
        return { bg: "bg-coral", text: "text-ink", icon: "text-ink" };
    }
  };

  return (
    <section
      id="attractions"
      aria-labelledby="attractions-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-butter border-t border-ink/15 overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Headline with Mask-Rise */}
        <div className="mb-12 sm:mb-16">
          <h2
            id="attractions-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-ink tracking-[-0.035em] leading-[0.92]"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                PICK YOUR
              </motion.div>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="font-display text-blue">PLAYGROUND.</span>
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Desktop Accordion: One row of 5 tall panels (~520px height) */}
        <div className="hidden lg:flex h-[520px] gap-3 w-full">
          {siteConfig.attractions.map((attraction, idx) => {
            const isOpen = activeIdx === idx;
            const fallback = getFallbackClasses(attraction.fallbackColor);

            return (
              <button
                key={attraction.id}
                type="button"
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                aria-expanded={isOpen}
                aria-label={attraction.title}
                className={`relative h-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-2 transition-[flex-grow] duration-600 rounded-none cursor-pointer ${
                  isOpen ? "flex-[3.2]" : "flex-[1]"
                } ${fallback.bg}`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Fallback Intentional Graphic Fill Behind Image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between select-none pointer-events-none">
                  <div className="flex items-center justify-between">
                    {getIcon(attraction.iconName, fallback.icon)}
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider opacity-60 ${fallback.text}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <div className={`text-4xl font-extrabold uppercase leading-none opacity-25 select-none ${fallback.text}`}>
                    {attraction.title.split(" ")[0]}
                  </div>
                </div>

                {/* Real Photo Slot */}
                {attraction.image && (
                  <div className="absolute inset-0">
                    <PhotoPlaceholder
                      src={attraction.image}
                      label={`VENUE PHOTO — ${attraction.title.toUpperCase()}`}
                      alt={`${attraction.title} at Takashi's Castle The Fun Valley`}
                      objectPosition={attraction.objectPosition}
                      width={800}
                      height={600}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Bottom Scrim (Ink 55% flat fill) & Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-ink/55 p-6 text-cream">
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-cream">
                    {attraction.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-cream/90 font-normal max-w-sm">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile: Horizontal Scroll-Snap Carousel (78vw wide panels, 4:5, next peeking) */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 no-scrollbar">
          {siteConfig.attractions.map((attraction, idx) => {
            const fallback = getFallbackClasses(attraction.fallbackColor);

            return (
              <div
                key={attraction.id}
                className={`w-[78vw] max-w-[340px] shrink-0 snap-start aspect-[4/5] relative overflow-hidden rounded-none ${fallback.bg}`}
              >
                {/* Fallback Graphic */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between select-none pointer-events-none">
                  <div className="flex items-center justify-between">
                    {getIcon(attraction.iconName, fallback.icon)}
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider opacity-60 ${fallback.text}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <div className={`text-3xl font-extrabold uppercase leading-none opacity-25 ${fallback.text}`}>
                    {attraction.title.split(" ")[0]}
                  </div>
                </div>

                {/* Photo Slot */}
                {attraction.image && (
                  <div className="absolute inset-0">
                    <PhotoPlaceholder
                      src={attraction.image}
                      label={`VENUE PHOTO — ${attraction.title.toUpperCase()}`}
                      alt={`${attraction.title} at Takashi's Castle The Fun Valley`}
                      objectPosition={attraction.objectPosition}
                      width={600}
                      height={750}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Bottom Scrim */}
                <div className="absolute bottom-0 left-0 right-0 bg-ink/55 p-5 text-cream">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-cream">
                    {attraction.title}
                  </h3>
                  <p className="text-xs text-cream/90 font-normal mt-1">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
