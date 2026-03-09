"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      <div className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <Link href="/" className={`font-semibold tracking-tight transition-all duration-300 ${scrolled ? "text-base" : "text-lg"}`}>
          Kasra<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#work"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link href="/contact" className="btn-nav">
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[var(--border)] px-6 py-6 md:hidden bg-[var(--background)]">
          <div className="flex flex-col gap-4">
            <Link href="/#work" onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)]">
              Work
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)]">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="font-medium text-[var(--accent)]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
