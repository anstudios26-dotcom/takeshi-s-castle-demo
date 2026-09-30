import React from "react";

export const MarqueeStrip: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden bg-coral text-ink py-3 border-y border-ink select-none"
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mx-6"
          >
            PLAY • EXPLORE • CELEBRATE
          </span>
        ))}
      </div>
    </div>
  );
};
