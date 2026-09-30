import React from "react";
import { motion, useReducedMotion } from "motion/react";

export const SignatureTypoSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = (delay = 0) => ({
    duration: shouldReduceMotion ? 0.01 : 0.7,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  return (
    <section
      aria-label="Brand Manifesto"
      className="relative overflow-hidden bg-ink text-cream py-24 sm:py-32 lg:py-44 border-y border-ink"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-left">
        <div className="text-[clamp(4rem,14vw,12rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] flex flex-col items-start">
          {/* Word 1: PLAY. */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: shouldReduceMotion ? 0 : "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={maskTransition(0)}
            >
              PLAY.
            </motion.div>
          </div>

          {/* Word 2: EXPLORE. */}
          <div className="overflow-hidden mt-1 sm:mt-2">
            <motion.div
              initial={{ y: shouldReduceMotion ? 0 : "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={maskTransition(0.15)}
            >
              EXPLORE.
            </motion.div>
          </div>

          {/* Word 3: REPEAT. in Caveat Brush coral */}
          <div className="overflow-hidden mt-1 sm:mt-2">
            <motion.div
              initial={{
                clipPath: shouldReduceMotion ? "inset(0)" : "inset(0 100% 0 0)",
                rotate: shouldReduceMotion ? -2 : -4,
              }}
              whileInView={{
                clipPath: "inset(0)",
                rotate: -2,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="origin-left"
            >
              <span className="font-display text-coral text-[1.2em] inline-block">
                REPEAT.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

