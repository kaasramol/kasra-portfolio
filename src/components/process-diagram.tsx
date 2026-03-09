"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Research", desc: "Understand the problem" },
  { label: "Define", desc: "Frame the opportunity" },
  { label: "Design", desc: "Explore & prototype" },
  { label: "Test", desc: "Validate with users" },
  { label: "Ship", desc: "Deliver & measure" },
];

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function ProcessDiagram() {
  return (
    <motion.div
      className="hidden md:flex flex-col items-start gap-0"
      animate={floatAnimation}
    >
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8 + i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Dot + line */}
          <div className="flex flex-col items-center">
            <div
              className={`h-3 w-3 rounded-full border-2 ${
                i === 0
                  ? "border-[var(--accent)] bg-[var(--accent)]"
                  : "border-[var(--border)] bg-transparent"
              }`}
            />
            {i < steps.length - 1 && (
              <motion.div
                className="w-px bg-[var(--border)]"
                initial={{ height: 0 }}
                animate={{ height: 32 }}
                transition={{
                  duration: 0.4,
                  delay: 1.0 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            )}
          </div>

          {/* Text */}
          <div className="-mt-0.5">
            <p className="text-sm font-medium leading-none">{step.label}</p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
