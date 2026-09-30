import React from "react";
import { siteConfig } from "../config/siteConfig";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { motion, useReducedMotion } from "motion/react";

export const GallerySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const clipTransition = (delay = 0) => ({
    duration: shouldReduceMotion ? 0.01 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-cream border-t border-ink/15"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Headline with Mask-Rise Reveal */}
        <div className="mb-14 sm:mb-20">
          <h2
            id="gallery-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-ink tracking-[-0.03em] leading-[0.95]"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                A LOOK
              </motion.div>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-coral">INSIDE.</span>
              </motion.div>
            </div>
          </h2>
        </div>

        {/* 12-Column Asymmetric Grid on Desktop / Alternating Widths on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* (a) Large photo: cols 1–7, 4:5 on desktop | 90% left-aligned on mobile */}
          <div className="w-[90%] sm:w-full lg:col-span-7">
            <motion.div
              initial={{ clipPath: shouldReduceMotion ? "inset(0)" : "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={clipTransition(0)}
            >
              <PhotoPlaceholder
                src={siteConfig.images.gallery[0] || "/images/gallery-01.jpg"}
                label="REAL PHOTO — GALLERY 01"
                aspectRatio="4/5"
                enableHoverEffect={true}
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Staggered Right Pair: (b) and (c) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-8 lg:gap-16">
            {/* (b) Small photo: cols 9–12, 1:1, aligned to the top | 75% right-aligned on mobile */}
            <div className="w-[75%] sm:w-[65%] lg:w-full ml-auto">
              <motion.div
                initial={{ clipPath: shouldReduceMotion ? "inset(0)" : "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={clipTransition(0.15)}
              >
                <PhotoPlaceholder
                  src={siteConfig.images.gallery[1] || "/images/gallery-02.jpg"}
                  label="REAL PHOTO — GALLERY 02"
                  aspectRatio="1/1"
                  enableHoverEffect={true}
                  className="w-full"
                />
              </motion.div>
            </div>

            {/* (c) Second small photo: cols 8–11, 4:3, staggered down | full width on mobile */}
            <div className="w-full sm:w-[85%] lg:w-full mr-auto lg:ml-0">
              <motion.div
                initial={{ clipPath: shouldReduceMotion ? "inset(0)" : "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={clipTransition(0.25)}
              >
                <PhotoPlaceholder
                  src={siteConfig.images.gallery[2] || "/images/gallery-03.jpg"}
                  label="REAL PHOTO — GALLERY 03"
                  aspectRatio="4/3"
                  enableHoverEffect={true}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>

          {/* (d) Wide horizontal photo: full width (cols 1–12), 21:9 */}
          <div className="w-full col-span-1 lg:col-span-12 mt-4 lg:mt-8">
            <motion.div
              initial={{ clipPath: shouldReduceMotion ? "inset(0)" : "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={clipTransition(0.2)}
            >
              <PhotoPlaceholder
                src={siteConfig.images.gallery[3] || "/images/gallery-04.jpg"}
                label="REAL PHOTO — GALLERY 04"
                aspectRatio="21/9"
                enableHoverEffect={true}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
