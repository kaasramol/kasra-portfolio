"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillItem {
  name: string;
  detail: string;
}

const disciplines: SkillItem[] = [
  { name: "UX Design", detail: "End-to-end product experiences" },
  { name: "Product Design", detail: "From concept to shipped features" },
  { name: "User Research", detail: "Interviews, surveys, testing" },
  { name: "Design Systems", detail: "Scalable, consistent components" },
  { name: "Business Strategy", detail: "Design that drives revenue" },
];

const tools: SkillItem[] = [
  { name: "Figma", detail: "Design & prototyping" },
  { name: "Notion", detail: "Documentation & specs" },
  { name: "Miro", detail: "Workshops & mapping" },
  { name: "Maze", detail: "Unmoderated testing" },
  { name: "Google Analytics", detail: "Behavior & metrics" },
];

const canBuild: SkillItem[] = [
  { name: "HTML & CSS", detail: "Responsive front-end" },
  { name: "Webflow", detail: "No-code production sites" },
  { name: "AI-assisted dev", detail: "Prompt-driven development" },
];

function SkillRow({ item, delay }: { item: SkillItem; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-default"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium transition-colors duration-300 group-hover:text-[var(--accent)]">
          {item.name}
        </span>
        <motion.span
          className="text-xs text-[var(--text-secondary)] whitespace-nowrap overflow-hidden"
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            width: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.detail}
        </motion.span>
      </div>
      <div className="mt-2 h-px bg-[var(--border)] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[var(--accent)] origin-left"
          initial={false}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

function SkillColumn({
  label,
  items,
  baseDelay,
}: {
  label: string;
  items: SkillItem[];
  baseDelay: number;
}) {
  return (
    <div className="space-y-3">
      <motion.p
        className="text-[10px] tracking-[0.25em] text-[var(--text-secondary)] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: baseDelay }}
      >
        {label}
      </motion.p>
      {items.map((item, i) => (
        <SkillRow key={item.name} item={item} delay={baseDelay + 0.05 + i * 0.06} />
      ))}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
      <SkillColumn label="WHAT I DO" items={disciplines} baseDelay={0.1} />
      <SkillColumn label="WHAT I USE" items={tools} baseDelay={0.4} />
      <SkillColumn label="WHAT I BUILD WITH" items={canBuild} baseDelay={0.7} />
    </div>
  );
}
