import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { ToriiIcon } from "./ToriiIcon";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Attractions", href: "#attractions", id: "attractions" },
    { label: "Why Visit", href: "#why-visit", id: "why-visit" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Booking", href: "#booking", id: "booking" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Track scroll position for sticky background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "attractions", "why-visit", "gallery", "booking", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle ESC key and scroll locking for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    toggleBtnRef.current?.focus();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          isScrolled
            ? "bg-cream border-b border-ink/10 shadow-xs shadow-ink/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Zone 1: Single text element wordmark + Torii icon */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 focus-visible:outline-hidden group"
            aria-label="Takashi's Castle Home"
          >
            <ToriiIcon className="w-6 h-6 text-coral transition-transform duration-150 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-ink uppercase">
                {siteConfig.brand.name}
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-ink/60 uppercase">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links with 2px blue underline for active link */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/70"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-ink ${
                    isActive
                      ? "text-ink border-b-2 border-blue font-extrabold"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button ("BOOK NOW": coral fill, ink text) + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#booking"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center rounded-none bg-coral px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Now
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={toggleBtnRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink md:hidden focus-visible:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-cream p-8 md:hidden"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-ink/10 pb-6">
              <div className="flex items-center gap-2.5">
                <ToriiIcon className="w-6 h-6 text-coral" />
                <div>
                  <span className="text-lg font-extrabold tracking-tight text-ink uppercase">
                    {siteConfig.brand.name}
                  </span>
                  <span className="block text-[10px] font-semibold tracking-widest text-ink/60 uppercase">
                    {siteConfig.brand.tagline}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleBtnRef.current?.focus();
                }}
                className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink focus-visible:outline-hidden"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Staggered Large Nav Links */}
            <nav className="flex flex-col justify-center space-y-4 py-8">
              {navLinks.map((link, idx) => (
                <div key={link.id} className="overflow-hidden">
                  <motion.div
                    initial={{ y: shouldReduceMotion ? 0 : "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.4,
                      delay: shouldReduceMotion ? 0 : idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`text-left text-4xl sm:text-5xl font-extrabold uppercase tracking-tight transition-colors ${
                        activeSection === link.id
                          ? "text-coral"
                          : "text-ink hover:text-coral"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Pinned Book Now at Bottom */}
            <div className="pt-6 border-t border-ink/10">
              <a
                href="#booking"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center bg-coral py-4 text-sm font-extrabold uppercase tracking-wider text-ink active:opacity-90"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
