import React from "react";
import { ToriiIcon } from "./ToriiIcon";
import { motion, useReducedMotion } from "motion/react";

export const PlanVisitBanner: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-coral text-ink py-14 sm:py-18 px-6 lg:px-12 border-y border-ink overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.15,
            },
          },
        }}
        className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left Torii Silhouette */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 0.4, scale: 1, transition: { duration: 0.6 } },
          }}
          className="hidden lg:block select-none"
        >
          <ToriiIcon className="w-16 h-16 text-ink" />
        </motion.div>

        {/* Center Text Block */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="text-center md:text-left flex-1 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-ink leading-[0.95]">
            PLAN YOUR VISIT{" "}
            <span className="font-display text-ink inline-block">TODAY</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium tracking-wide text-ink/80">
            Games. Adventures. Memories.
          </p>
        </motion.div>

        {/* CTA Button: Ink button that scrolls to form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="flex items-center gap-6"
        >
          <button
            type="button"
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center bg-ink hover:bg-gold hover:text-ink px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-cream transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 rounded-none cursor-pointer"
          >
            Check Availability
          </button>

          {/* Right Torii Silhouette */}
          <div className="hidden lg:block select-none opacity-40">
            <ToriiIcon className="w-16 h-16 text-ink" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
