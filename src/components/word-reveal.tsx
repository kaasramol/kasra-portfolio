"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({
  children,
  bold,
  progress,
  range,
}: {
  children: string;
  bold: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(
    progress,
    range,
    ["rgba(217, 208, 186, 0.2)", "rgba(217, 208, 186, 1)"]
  );

  return (
    <motion.span
      style={{ color }}
      className={`mr-[0.28em] inline-block ${bold ? "font-bold" : "font-normal"}`}
    >
      {children}
    </motion.span>
  );
}

/**
 * Scroll-pinned, word-by-word text reveal. Wrap a word in **double asterisks**
 * to render it bold throughout (the rest stays regular weight).
 * `height` sizes the scroll runway — longer text needs more room to reveal
 * fully before the sticky inner content releases.
 */
export function WordReveal({
  text,
  className = "",
  height = "h-[140vh]",
  label,
}: {
  text: string;
  className?: string;
  height?: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  let insideBold = false;
  const tokens = text.split(" ").map((raw) => {
    let word = raw;
    let bold = insideBold;
    if (!insideBold && word.startsWith("**")) {
      bold = true;
      word = word.slice(2);
      insideBold = true;
    }
    if (insideBold && word.endsWith("**")) {
      word = word.slice(0, -2);
      insideBold = false;
    }
    return { word, bold };
  });

  return (
    <div ref={ref} className={`relative ${height}`}>
      <div className="sticky top-0 flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-5xl">
          {label && (
            <p className="mb-6 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              {label}
            </p>
          )}
          <p className={className}>
            {tokens.map(({ word, bold }, i) => {
              const start = i / tokens.length;
              const end = start + 1 / tokens.length;
              return (
                <Word key={i} bold={bold} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
