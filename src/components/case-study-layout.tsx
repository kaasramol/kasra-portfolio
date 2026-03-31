"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface CaseStudyMeta {
  role: string;
  duration: string;
  tools: string;
  type: string;
  context?: string;
  date?: string;
  team?: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  color: string;
  meta: CaseStudyMeta;
  children: ReactNode;
  heroScreens?: ReactNode;
  nextProject?: {
    title: string;
    href: string;
  };
  prevProject?: {
    title: string;
    href: string;
  };
}

/* ── Reveal wrapper for sections ── */
function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Main Layout ── */
export function CaseStudyLayout({
  title,
  subtitle,
  color,
  meta,
  children,
  heroScreens,
  nextProject,
  prevProject,
}: CaseStudyLayoutProps) {
  const metaLabels: Record<string, string> = {
    role: "Role",
    duration: "Duration",
    tools: "Tools",
    type: "Type",
    context: "Context",
    date: "Date",
    team: "Team",
  };

  return (
    <article>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden grain"
        style={{
          background: `linear-gradient(135deg, ${color}18 0%, var(--background) 50%, ${color}10 100%)`,
        }}
      >
        {/* Decorative accent line */}
        <div
          className="absolute top-0 left-0 w-full h-[3px]"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-32 sm:pt-40">
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-px w-8" style={{ background: color }} />
            <p
              className="text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color }}
            >
              {subtitle}
            </p>
          </motion.div>
          <motion.h1
            className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>

          {/* Meta grid with accent borders */}
          <motion.div
            className="mt-10 grid grid-cols-2 gap-0 sm:grid-cols-4 rounded-xl border border-[var(--border)] overflow-hidden"
            style={{ background: "var(--background)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {Object.entries(meta).map(([key, value], i) => (
              <div
                key={key}
                className={`p-5 ${i > 0 ? "border-l border-[var(--border)]" : ""} ${i >= 2 ? "sm:border-l border-t sm:border-t-0 border-[var(--border)]" : ""}`}
              >
                <p className="mb-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                  {metaLabels[key] || key}
                </p>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Hero device showcase */}
          {heroScreens && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroScreens}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Content ── */}
      <section className="relative overflow-hidden">
        {/* Subtle background accents */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.04] rounded-full blur-3xl"
          style={{ background: color }}
        />
        <div
          className="pointer-events-none absolute top-[40%] right-0 w-[500px] h-[500px] opacity-[0.03] rounded-full blur-3xl"
          style={{ background: color }}
        />
        <div
          className="pointer-events-none absolute bottom-[10%] left-0 w-[600px] h-[600px] opacity-[0.03] rounded-full blur-3xl"
          style={{ background: color }}
        />
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 relative z-10">
          <div className="prose-custom max-w-3xl mx-auto">{children}</div>
        </div>
      </section>

      {/* ── Project Navigation ── */}
      {(prevProject || nextProject) && (
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background: `radial-gradient(ellipse at center, ${color}, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-5xl px-6 py-20 flex items-center justify-between">
            {prevProject ? (
              <div className="text-left">
                <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]">
                  Previous Project
                </p>
                <Link
                  href={prevProject.href}
                  className="group inline-flex items-center gap-3 text-2xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-2">
                    &larr;
                  </span>
                  <span>{prevProject.title}</span>
                </Link>
              </div>
            ) : <div />}
            {nextProject ? (
              <div className="text-right">
                <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]">
                  Next Project
                </p>
                <Link
                  href={nextProject.href}
                  className="group inline-flex items-center gap-3 text-2xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  <span>{nextProject.title}</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    &rarr;
                  </span>
                </Link>
              </div>
            ) : <div />}
          </div>
          {/* Bottom accent line */}
          <div
            className="h-[3px] w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          />
        </section>
      )}
    </article>
  );
}

/* ── Case Section ── */
export function CaseSection({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-20 ${accent ? "rounded-2xl bg-[var(--surface)] p-8 sm:p-10 -mx-4 sm:-mx-6" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Section title with accent line */}
      <div className="flex items-center gap-5 mb-8">
        <div className="h-[2px] w-8 bg-[var(--accent)] rounded-full" />
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--foreground)] shrink-0" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>
          {title}
        </h2>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

/* ── Full Bleed Section (for mockups that break out of column) ── */
export function FullBleedSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SectionReveal>
      <div className={`my-12 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 ${className}`}>
        {children}
      </div>
    </SectionReveal>
  );
}

/* ── Pull Quote ── */
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <SectionReveal>
      <blockquote className="my-10 border-l-[3px] border-[var(--accent)] pl-6 py-2">
        <p className="text-xl sm:text-2xl font-serif italic leading-relaxed text-[var(--foreground)]">
          {children}
        </p>
        {attribution && (
          <cite className="mt-3 block text-sm font-normal not-italic text-[var(--text-secondary)]">
            {attribution}
          </cite>
        )}
      </blockquote>
    </SectionReveal>
  );
}

/* ── Figure Caption ── */
export function FigureCaption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 mb-6 text-center text-xs italic text-[var(--text-secondary)]">
      {children}
    </p>
  );
}

/* ── Image Placeholder ── */
export function ImagePlaceholder({
  label,
  path,
  aspectRatio = "16/9",
}: {
  label: string;
  path: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className="my-6 flex items-center justify-center rounded-xl bg-[var(--surface)] text-sm text-[var(--text-secondary)]"
      style={{ aspectRatio }}
    >
      <div className="text-center px-4">
        <p className="mb-1">{label}</p>
        <p className="text-xs opacity-50">Add image: {path}</p>
      </div>
    </div>
  );
}

/* ── Stat Card ── */
export function StatCard({
  label,
  before,
  after,
  change,
}: {
  label: string;
  before: string;
  after: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/30">
      <p className="mb-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-secondary)]">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        {before && (
          <span className="text-sm line-through text-[var(--text-secondary)]/60">
            {before}
          </span>
        )}
        <span className="text-2xl font-bold text-[var(--foreground)]">{after}</span>
      </div>
      <p className="mt-1.5 text-xs font-medium text-[var(--accent)]">{change}</p>
    </div>
  );
}
