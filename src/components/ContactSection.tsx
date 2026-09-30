import React from "react";
import { siteConfig } from "../config/siteConfig";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-cream border-t border-ink/15"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Name Large + Entrance Photo */}
          <div className="lg:col-span-5">
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
          </div>

          {/* Right Column: Simple Definition List (No cards) */}
          <div className="lg:col-span-7">
            <dl className="space-y-6 sm:space-y-8 divide-y divide-ink/10">
              {/* Address */}
              <div className="pt-6 first:pt-0">
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Address
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  North Lakhimpur, Assam {siteConfig.contact.addressPlaceholder}
                </dd>
              </div>

              {/* Phone */}
              <div className="pt-6">
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Phone
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  {siteConfig.contact.phonePlaceholder}
                </dd>
              </div>

              {/* WhatsApp */}
              <div className="pt-6">
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  WhatsApp
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  {siteConfig.contact.whatsappDisplayPlaceholder}
                </dd>
              </div>

              {/* Opening Hours */}
              <div className="pt-6">
                <dt className="text-xs font-extrabold uppercase tracking-wider text-ink/60">
                  Opening Hours
                </dt>
                <dd className="mt-1 font-mono text-base text-ink">
                  {siteConfig.contact.hoursPlaceholder}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
