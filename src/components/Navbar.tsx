import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const shouldReduceMotion = useReducedMotion();
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Attractions", href: "#attractions", id: "attractions" },
    { label: "Why Visit", href: "#why-visit", id: "why-visit" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Booking", href: "#booking", id: "booking" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll threshold detection for background color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
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
          {/* Zone 1: Single text element wordmark + 36px round logo badge */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 focus-visible:outline-hidden group"
            aria-label="Takashi's Castle Home"
          >
            <img
              src="/images/logo-badge.png"
              alt="Takashi's Castle Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain rounded-full transition-transform duration-150 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-ink uppercase">
                {siteConfig.brand.name}
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-ink/60 uppercase">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links with 2px coral underline for active link */}
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
                      ? "text-ink border-b-2 border-coral font-extrabold"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button ("BOOK NOW": coral fill, ink text, hover gold) + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#booking"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center rounded-none bg-coral hover:bg-gold px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Now
            </a>

            {/* Accessible Hamburger Toggle */}
            <button
              ref={toggleBtnRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink md:hidden focus-visible:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
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
                <img
                  src="/images/logo-badge.png"
                  alt="Takashi's Castle Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain rounded-full"
                />
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
                className="flex w-full items-center justify-center bg-coral hover:bg-gold py-4 text-sm font-extrabold uppercase tracking-wider text-ink active:opacity-90 transition-colors"
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
