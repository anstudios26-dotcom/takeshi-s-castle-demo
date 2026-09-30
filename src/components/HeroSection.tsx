import React from "react";
import { siteConfig } from "../config/siteConfig";
import { HeroScene } from "./HeroScene";
import { ToriiIcon } from "./ToriiIcon";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Load animation variants
  const maskTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip pt-4 pb-16 md:pt-10 md:pb-24 lg:pt-14 lg:pb-32 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
        {/* Vertical 楽しい in ink at the far right edge of the hero (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex flex-col items-center gap-2 font-kanji text-ink/30 text-sm font-bold tracking-widest select-none absolute right-2 top-8 z-20"
        >
          <span>楽</span>
          <span>し</span>
          <span>い</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Large Headline & Support */}
          <div className="lg:col-span-7 z-20 lg:pr-2">
            {/* Torii icon + wordmark + small line 'PLAY • EXPLORE • CELEBRATE' */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink/70 mb-6">
              <span className="flex items-center gap-1.5 text-coral">
                <ToriiIcon className="w-4 h-4 text-coral" />
                <span className="font-extrabold tracking-wider text-ink">
                  {siteConfig.brand.name}
                </span>
              </span>
              <span aria-hidden="true" className="text-ink/30">
                •
              </span>
              <span className="text-ink/60">
                PLAY • EXPLORE • CELEBRATE
              </span>
            </div>

            {/* Headline with Mask-Rise Reveal */}
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-ink tracking-[-0.035em] leading-[0.92]"
            >
              {/* Line 1: LET THE */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                  animate={{ y: 0 }}
                  transition={maskTransition}
                >
                  LET THE
                </motion.div>
              </div>

              {/* Line 2: FUN BEGIN. (Special display font in coral) */}
              <div className="overflow-hidden mt-1">
                <motion.div
                  initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...maskTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
                >
                  <span className="font-display text-coral">FUN BEGIN.</span>
                </motion.div>
              </div>
            </h1>

            {/* Support Line */}
            <p className="mt-8 max-w-[58ch] text-base sm:text-lg leading-relaxed text-ink/75 font-normal">
              {siteConfig.brand.heroSupport}
            </p>

            {/* CTAs: One coral primary button with arrow + one plain text link */}
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-coral px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-ink transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 rounded-none group"
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              <a
                href="#attractions"
                className="text-sm font-medium text-ink/75 hover:text-ink underline decoration-1 underline-offset-4 transition-colors"
              >
                See what&apos;s inside
              </a>
            </div>
          </div>

          {/* Right: Tall 4:5 Vector Scene bleeding off the right on desktop, full-bleed on mobile */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Mobile full-bleed container vs Desktop bleeding container */}
            <div className="relative -mx-6 sm:mx-0 lg:-mr-12 xl:-mr-20">
              {/* Hard-edged coral rectangle offset behind bottom-left corner */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 bg-coral z-0 pointer-events-none"
              />

              {/* Round coral 'hanko' stamp sticker (circle with 楽 in cream, rotated -8deg, static) */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 z-20 h-11 w-11 sm:h-13 sm:w-13 rounded-full bg-coral border-2 border-cream flex items-center justify-center font-kanji font-bold text-cream text-lg sm:text-xl shadow-xs select-none -rotate-8"
              >
                楽
              </div>

              {/* Scene Reveal: clip-path inset(100% 0 0 0) -> inset(0) */}
              <motion.div
                initial={{ clipPath: shouldReduceMotion ? "inset(0)" : "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0)" }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.9,
                  delay: shouldReduceMotion ? 0 : 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-sakura border-0 rounded-none"
              >
                <HeroScene />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
