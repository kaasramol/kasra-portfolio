"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Magnetic } from "./magnetic";

interface StickyCaseStudyProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  glow: string;
  screens: ReactNode;
}

export function StickyCaseStudy({
  index,
  title,
  subtitle,
  description,
  tags,
  year,
  href,
  glow,
  screens,
}: StickyCaseStudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <div ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 flex min-h-screen items-center px-6 py-16">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: glow, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />

        <motion.div
          style={{ opacity, y }}
          className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14"
        >
          {/* Text */}
          <div>
            <span className="mb-4 block text-[clamp(4rem,10vw,6rem)] font-bold leading-none text-[var(--accent)] opacity-25">
              {String(index).padStart(2, "0")}
            </span>
            <p className="mb-2 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              {subtitle} · {year}
            </p>
            <h3 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h3>
            <p className="mb-6 max-w-md leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Magnetic strength={0.3} range={70}>
              <Link
                href={href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
              >
                View case study
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Magnetic>
          </div>

          {/* Screens */}
          <motion.div style={{ y: imgY }} className="min-w-0">
            {screens}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
