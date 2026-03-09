"use client";

import { motion } from "framer-motion";

export function HeroLetter() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 hidden md:block select-none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="block text-[clamp(20rem,40vw,50rem)] font-bold leading-none text-[var(--foreground)]"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          opacity: 0.04,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      >
        K
      </motion.span>
    </motion.div>
  );
}
