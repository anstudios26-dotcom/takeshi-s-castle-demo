import React, { useState, useEffect } from "react";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "../config/siteConfig";

export const FloatingWhatsAppCTA: React.FC = () => {
  const [isBookingInView, setIsBookingInView] = useState(false);
  const [showUnconfigured, setShowUnconfigured] = useState(false);

  useEffect(() => {
    const bookingEl = document.getElementById("booking");
    if (!bookingEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBookingInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(bookingEl);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setShowUnconfigured(true);
      setTimeout(() => setShowUnconfigured(false), 3000);
      return;
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    "Hello Takashi's Castle, I'd like to know more about visiting."
  );

  // Hidden while booking section is in view
  if (isBookingInView) return null;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
      {showUnconfigured && (
        <span className="bg-cream border border-coral text-coral px-3 py-1.5 text-xs font-semibold shadow-xs">
          WhatsApp number not set yet
        </span>
      )}
      <a
        href={whatsappUrl || "#booking"}
        target={whatsappUrl ? "_blank" : undefined}
        rel={whatsappUrl ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className="group flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream shadow-md shadow-ink/20 transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
      >
        <svg
          className="h-4 w-4 fill-cream"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.905.534 3.684 1.458 5.205L2.054 22l4.908-1.378a10.007 10.007 0 0 0 5.069 1.409h.004c5.534 0 10.029-4.495 10.029-10.031C22.064 6.495 17.568 2 12.031 2zm0 18.256a8.212 8.212 0 0 1-4.2-1.151l-.301-.179-3.118.876.883-3.037-.196-.312a8.204 8.204 0 0 1-1.26-4.422c0-4.542 3.695-8.238 8.238-8.238 4.542 0 8.238 3.696 8.238 8.238 0 4.542-3.696 8.238-8.238 8.238zm4.516-6.177c-.247-.124-1.464-.723-1.691-.806-.227-.082-.392-.124-.557.124-.165.247-.64 1.133-.784 1.298-.144.165-.289.186-.536.062a6.762 6.762 0 0 1-1.99-1.226 7.458 7.458 0 0 1-1.377-1.716c-.144-.247-.015-.381.109-.504.111-.112.247-.289.371-.433.124-.144.165-.247.247-.412.082-.165.041-.309-.021-.433-.062-.124-.557-1.34-.763-1.835-.201-.482-.405-.417-.557-.425l-.474-.008c-.165 0-.433.062-.66.309-.227.247-.866.846-.866 2.063 0 1.217.887 2.393 1.01 2.558.124.165 1.744 2.663 4.225 3.734.59.255 1.052.408 1.411.522.593.188 1.133.162 1.56.098.476-.071 1.464-.598 1.67-1.176.206-.577.206-1.072.144-1.176-.062-.103-.227-.165-.474-.289z" />
        </svg>
        <span className="whitespace-nowrap">Ask on WhatsApp</span>
      </a>
    </aside>
  );
};
