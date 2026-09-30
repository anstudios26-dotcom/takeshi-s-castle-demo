import React, { useState } from "react";
import { siteConfig, buildWhatsAppUrl, isWhatsAppConfigured } from "../config/siteConfig";
import { ArrowRight, Copy, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export const BookingSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    children: "1",
    adults: "1",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM – 12:30 PM)",
    occasion: "Casual Play",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [unconfiguredWarning, setUnconfiguredWarning] = useState(false);

  const timeSlots = [
    "Morning (10:00 AM – 12:30 PM)",
    "Early Afternoon (1:00 PM – 3:30 PM)",
    "Late Afternoon (4:00 PM – 6:30 PM)",
    "Twilight / Weekend (7:00 PM – 9:00 PM)",
  ];

  const occasions = [
    "Casual Play",
    "Birthday Celebration",
    "Family Gathering",
    "School / Playgroup Outing",
    "Private Venue Hire",
    "Other",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (formData.phone.trim().length < 6) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.preferredDate) errs.preferredDate = "Please choose a preferred date";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hello Takashi's Castle,

I would like to enquire about a booking.

Name: ${formData.name.trim()}

Phone: ${formData.phone.trim()}

Children: ${formData.children}

Adults: ${formData.adults}

Preferred Date: ${formData.preferredDate}

Preferred Time: ${formData.preferredTime}

Occasion: ${formData.occasion}

Additional Message:
${formData.message.trim() ? formData.message.trim() : "None"}

Please let me know about availability and booking details.

Thank you.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    setSubmittedMessage(message);

    if (!isWhatsAppConfigured()) {
      setUnconfiguredWarning(true);
      return;
    }

    setUnconfiguredWarning(false);
    const url = buildWhatsAppUrl(message);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopy = () => {
    if (!submittedMessage) return;
    navigator.clipboard.writeText(submittedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative py-20 md:py-28 lg:py-36 bg-blush border-t border-ink/15"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Headline: READY TO PLAY? with mask-rise reveal */}
        <div className="mb-14 sm:mb-20">
          <h2
            id="booking-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-ink tracking-[-0.035em] leading-[0.92]"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                READY TO
              </motion.div>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.div
                initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-coral">PLAY?</span>
              </motion.div>
            </div>
          </h2>
          <p className="mt-6 max-w-[60ch] text-base sm:text-lg text-ink/70">
            Submit your booking enquiry directly to our WhatsApp concierge.
          </p>
        </div>

        {/* Clean Underline Form (No cards, only 1px ink/30 underline fields, focus = blue 2px underline) */}
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="booking-name"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Your Name *
              </label>
              <input
                id="booking-name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink placeholder:text-ink/30 focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none transition-colors"
              />
              {errors.name && (
                <span className="mt-1 text-xs text-coral font-medium">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="booking-phone"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Phone Number *
              </label>
              <input
                id="booking-phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink placeholder:text-ink/30 focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none transition-colors"
              />
              {errors.phone && (
                <span className="mt-1 text-xs text-coral font-medium">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Children & Adults (Paired naturally) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="booking-children"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Number of Children
              </label>
              <select
                id="booking-children"
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={n} className="bg-cream text-ink">
                    {n} {n === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="booking-adults"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Number of Adults
              </label>
              <select
                id="booking-adults"
                value={formData.adults}
                onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                  <option key={n} value={n} className="bg-cream text-ink">
                    {n} {n === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Date & Time (Paired naturally) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="booking-date"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Preferred Date *
              </label>
              <input
                id="booking-date"
                type="date"
                min={today}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none"
              />
              {errors.preferredDate && (
                <span className="mt-1 text-xs text-coral font-medium">
                  {errors.preferredDate}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="booking-time"
                className="text-xs font-bold uppercase tracking-wider text-ink/70"
              >
                Preferred Time
              </label>
              <select
                id="booking-time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none cursor-pointer"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-cream text-ink">
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Occasion */}
          <div className="flex flex-col">
            <label
              htmlFor="booking-occasion"
              className="text-xs font-bold uppercase tracking-wider text-ink/70"
            >
              Occasion / Purpose
            </label>
            <select
              id="booking-occasion"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="mt-2 h-12 w-full bg-transparent border-b border-ink/30 px-0 text-base text-ink focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none cursor-pointer"
            >
              {occasions.map((occ) => (
                <option key={occ} value={occ} className="bg-cream text-ink">
                  {occ}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Additional Message */}
          <div className="flex flex-col">
            <label
              htmlFor="booking-message"
              className="text-xs font-bold uppercase tracking-wider text-ink/70"
            >
              Additional Message (Optional)
            </label>
            <textarea
              id="booking-message"
              rows={3}
              placeholder="Any specific requests or requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-ink/30 px-0 py-2 text-base text-ink placeholder:text-ink/30 focus:border-b-2 focus:border-blue focus:outline-hidden rounded-none"
            />
          </div>

          {/* Submit Row: Coral background, ink text, no arrow */}
          <div className="pt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-coral hover:bg-gold px-10 py-4 text-xs font-extrabold uppercase tracking-wider text-ink transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 rounded-none cursor-pointer"
            >
              <span>Check Availability</span>
            </button>

            {/* Note if WhatsApp number is unconfigured */}
            {unconfiguredWarning && (
              <p className="mt-3 text-xs font-medium text-coral">
                WhatsApp number not set yet
              </p>
            )}
          </div>
        </form>

        {/* Structured WhatsApp Message Output & Copy Fallback */}
        {submittedMessage && (
          <div className="mt-12 border border-ink/15 p-6 sm:p-8 bg-cream">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-ink">
                Generated WhatsApp Enquiry
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink hover:text-coral transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy Message"}</span>
              </button>
            </div>

            <pre className="mt-4 font-mono text-xs text-ink/80 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
              {submittedMessage}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};
