"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Fleet" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Header is transparent throughout the hero section; transitions to solid white as soon as the viewport moves away from the hero
  const isTransparent = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;

      // Always stay transparent whenever at the top or scrolling/bouncing up near the top
      if (window.scrollY <= 10) {
        setIsScrolled(false);
        return;
      }

      if (hero) {
        const heroHeight = hero.offsetHeight;
        // Transparent throughout the entire hero section; switches to white as soon as the viewport scrolls past the hero
        setIsScrolled(window.scrollY >= heroHeight - headerHeight);
      } else {
        setIsScrolled(window.scrollY > 80);
      }
    };

    handleScroll();
    const animId = requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white/95 backdrop-blur-md shadow-xs text-zinc-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Architectural Brand Wordmark */}
        <Link href="/" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 bg-[#FFCC00] text-black flex items-center justify-center font-display font-black text-xl tracking-tight transition-transform duration-200 group-hover:scale-105">
            KMS
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display font-black text-2xl tracking-wider uppercase leading-none transition-colors ${
                isTransparent ? "text-white" : "text-zinc-950"
              }`}
            >
              CRANES
            </span>
            <span
              className={`text-[10px] font-telemetry tracking-wider uppercase mt-0.5 transition-colors ${
                isTransparent ? "text-zinc-300" : "text-zinc-500"
              }`}
            >
              Sri Lanka
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-display text-base uppercase tracking-wider font-bold transition-colors ${
                  isTransparent
                    ? isActive
                      ? "text-white"
                      : "text-zinc-200 hover:text-white hover:bg-white/10"
                    : isActive
                    ? "text-zinc-950"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFCC00]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:+94112915566"
            className={`hidden lg:flex items-center gap-2 text-xs font-telemetry font-bold py-2.5 px-3.5 transition-colors ${
              isTransparent
                ? "bg-white/15 hover:bg-white/25 text-white"
                : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 hover:text-black"
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${isTransparent ? "text-white" : "text-zinc-900"}`} />
            <span>+94 11 291 5566</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFCC00] text-black font-display font-black text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 active:scale-95 shadow-xs"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 focus:outline-none transition-colors ${
              isTransparent ? "text-white hover:text-[#FFCC00]" : "text-zinc-800 hover:text-black"
            }`}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-display text-xl uppercase tracking-wider font-bold transition-colors ${
                    isActive
                      ? "bg-[#FFCC00] text-black"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+94112915566"
              className="flex items-center justify-center gap-2 py-3 bg-zinc-100 hover:bg-zinc-200 font-telemetry text-sm font-bold text-zinc-900"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch: +94 11 291 5566</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
