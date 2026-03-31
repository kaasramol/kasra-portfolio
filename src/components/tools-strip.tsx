"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Figma", icon: "F" },
  { name: "Notion", icon: "N" },
  { name: "Maze", icon: "M" },
  { name: "Miro", icon: "Mi" },
  { name: "Next.js", icon: "N" },
  { name: "Firebase", icon: "Fi" },
  { name: "Tailwind", icon: "T" },
  { name: "Stripe", icon: "S" },
  { name: "Google Analytics", icon: "GA" },
  { name: "Optimal Workshop", icon: "OW" },
];

export function ToolsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-5 text-[10px] tracking-[0.25em] uppercase text-[var(--text-secondary)]">
        Tools I Work With
      </p>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="group flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-[var(--surface-hover)]"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent)]/10 text-[10px] font-bold text-[var(--accent)]">
              {tool.icon}
            </span>
            <span className="text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--foreground)]">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
