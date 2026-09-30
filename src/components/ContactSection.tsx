import React from "react";
import { siteConfig, buildWhatsAppUrl } from "../config/siteConfig";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { VenueMap } from "./VenueMap";
import { motion, useReducedMotion } from "motion/react";

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-cream border-t border-ink/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Name Large + Entrance Photo */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-ink tracking-[-0.035em] leading-[0.92]"
            >
              TAKASHI&apos;S CASTLE
              <span className="block text-2xl sm:text-3xl font-extrabold tracking-normal text-ink/60 mt-3">
                THE FUN VALLEY
              </span>
            </h2>

            <div className="mt-6 mb-8">
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-extrabold uppercase tracking-wider text-blue underline decoration-2 underline-offset-4 hover:text-blue/80 transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Real Venue Entrance Photo beside location details */}
            <div className="w-full max-w-md">
              <PhotoPlaceholder
                src={siteConfig.images.entrance}
                label="VENUE ENTRANCE — THE FUN VALLEY"
                alt="Arched entrance of Takashi's Castle — The Fun Valley"
                aspectRatio="16/10"
                width={800}
                height={500}
                enableHoverEffect={true}
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Right Column: Simple Definition List with Staggered Items */}
          <div className="lg:col-span-7">
            <motion.dl
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.1,
                  },
                },
              }}
              className="space-y-6 sm:space-y-8 divide-y divide-ink/10"
            >
              {/* Address */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="pt-6 first:pt-0"
              >
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Address
                </dt>
                <dd className="mt-1 font-mono text-base text-ink leading-relaxed">
                  {siteConfig.contact.addressPlaceholder}
                </dd>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="pt-6"
              >
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Phone
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  <a
                    href="tel:+917099715941"
                    className="hover:text-blue transition-colors focus-visible:outline-hidden"
                  >
                    {siteConfig.contact.phonePlaceholder}
                  </a>
                </dd>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="pt-6"
              >
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  WhatsApp
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  <a
                    href={buildWhatsAppUrl("Hello Takashi's Castle, I'd like to make an enquiry.") || "https://wa.me/917099715941"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue transition-colors focus-visible:outline-hidden"
                  >
                    {siteConfig.contact.whatsappDisplayPlaceholder}
                  </a>
                </dd>
              </motion.div>

              {/* Opening Hours */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="pt-6"
              >
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Opening Hours
                </dt>
                <dd className="mt-1 font-mono text-base text-ink leading-relaxed">
                  {siteConfig.contact.hoursPlaceholder}
                </dd>
              </motion.div>
            </motion.dl>

            {/* Visual Map Container */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 pt-8 border-t border-ink/10"
            >
              <VenueMap />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
