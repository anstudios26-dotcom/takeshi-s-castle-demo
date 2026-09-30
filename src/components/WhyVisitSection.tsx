import React from "react";
import { Users, Calendar, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export const WhyVisitSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      icon: Users,
      title: "Bring everyone",
      copy: "Kids, parents and friends all have a place.",
    },
    {
      icon: Calendar,
      title: "Make it an occasion",
      copy: "Birthdays, weekends, school-break plans.",
    },
    {
      icon: Sparkles,
      title: "Make memories",
      copy: "Because fun is better together.",
    },
  ];

  return (
    <section
      id="why-visit"
      aria-labelledby="why-visit-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-sky border-t border-ink/15 overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and 3 invitation columns */}
          <div className="lg:col-span-8">
            <h2
              id="why-visit-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-ink tracking-[-0.035em] leading-[0.92] mb-12 sm:mb-16"
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
                  WHY COME
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
                  <span className="font-display text-coral">TO TAKESHI&apos;S CASTLE?</span>
                </motion.div>
              </div>
            </h2>

            {/* Three columns separated by hairlines (no cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/15 border-y border-ink/15">
              {reasons.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="py-8 sm:py-10 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-start"
                  >
                    <IconComponent className="w-6 h-6 text-coral stroke-[1.75] mb-4" />
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-ink leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sakura Panel holding coral sun disc, ink torii silhouette & 楽しい時間 */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div className="w-full max-w-[340px] aspect-[4/5] bg-sakura p-6 flex flex-col items-center justify-between relative overflow-hidden select-none">
              {/* SVG Graphic with Coral Sun Disc and Torii Silhouette */}
              <svg
                viewBox="0 0 300 360"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Large Coral Sun Disc */}
                <circle cx="150" cy="180" r="100" fill="#EC5B3E" />

                {/* Torii Gate Silhouette in Ink */}
                <g fill="#1F2133">
                  {/* Top curved lintel */}
                  <path d="M40 185 C80 180, 220 180, 260 185 C266 186, 266 174, 256 171 C220 166, 80 166, 44 171 C34 174, 34 186, 40 185 Z" />
                  {/* Lower horizontal bar */}
                  <rect x="58" y="196" width="184" height="9" rx="1" />
                  {/* Center vertical tie */}
                  <rect x="146" y="176" width="8" height="20" />
                  {/* Left pillar */}
                  <polygon points="80,310 94,310 91,180 82,180" />
                  {/* Right pillar */}
                  <polygon points="206,310 220,310 218,180 209,180" />
                  {/* Base blocks */}
                  <rect x="75" y="300" width="24" height="12" rx="1" />
                  <rect x="201" y="300" width="24" height="12" rx="1" />
                </g>
              </svg>

              {/* Vertical Japanese text: 楽しい時間 set vertically */}
              <div
                aria-hidden="true"
                className="absolute right-4 top-6 bottom-6 flex flex-col items-center justify-center gap-1.5 font-kanji text-ink text-sm sm:text-base font-bold tracking-widest select-none opacity-85"
              >
                <span>楽</span>
                <span>し</span>
                <span>い</span>
                <span>時</span>
                <span>間</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
