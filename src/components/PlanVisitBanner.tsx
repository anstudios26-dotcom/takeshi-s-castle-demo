import React from "react";
import { ToriiIcon } from "./ToriiIcon";

export const PlanVisitBanner: React.FC = () => {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-coral text-ink py-14 sm:py-18 px-6 lg:px-12 border-y border-ink">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Torii Silhouette */}
        <div className="hidden lg:block select-none opacity-40">
          <ToriiIcon className="w-16 h-16 text-ink" />
        </div>

        {/* Center Text Block */}
        <div className="text-center md:text-left flex-1 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-ink leading-[0.95]">
            PLAN YOUR VISIT{" "}
            <span className="font-display text-ink inline-block">TODAY</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium tracking-wide text-ink/80">
            Games. Adventures. Memories.
          </p>
        </div>

        {/* CTA Button: Ink button that scrolls to form */}
        <div className="flex items-center gap-6">
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
        </div>
      </div>
    </div>
  );
};
