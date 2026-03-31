"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GestaltTagProps {
  principle: string;
  description: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export function GestaltTag({
  principle,
  description,
  top,
  left,
  right,
  bottom,
}: GestaltTagProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute z-20"
      style={{ top, left, right, bottom }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Dot + label */}
      <div className="flex cursor-default items-center gap-1.5 rounded-full bg-[var(--accent)] px-2.5 py-1 shadow-md transition-transform duration-300 hover:scale-105">
        <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        <span className="text-[10px] font-medium text-white whitespace-nowrap">
          {principle}
        </span>
      </div>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full mt-2 w-52 rounded-lg bg-[var(--foreground)] p-3 shadow-xl"
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-1 text-xs font-semibold text-white">{principle}</p>
            <p className="text-[11px] leading-relaxed text-white/70">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Wrapper to make a mockup container position:relative for tags */
export function GestaltMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`relative ${className}`}>{children}</div>;
}
