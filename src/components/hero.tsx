"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroReveal } from "@/components/motion";
import { Logo } from "@/components/logo";
import { Magnetic } from "@/components/magnetic";
import { HeroStage } from "@/components/hero-stage";

const EMAIL = "kasra_molaei@sfu.ca";

function EmailChip() {
  return (
    <Magnetic strength={0.3} range={70}>
      <a
        href={`mailto:${EMAIL}`}
        className="group hidden items-center gap-1.5 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)] sm:inline-flex"
      >
        <span className="relative">
          {EMAIL}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        <ArrowUpRight size={13} className="shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </Magnetic>
  );
}

const stats = [
  { value: "4", label: "Case studies" },
  { value: "2026", label: "Open to co-op" },
  { value: "YVR", label: "Vancouver, BC" },
];

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Background — sunset portrait, muted and faded into the dark, plus a faint grid */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 75% 40%, rgba(207,196,170,0.07), transparent 65%), linear-gradient(180deg, #14130e 0%, #0f0e0b 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 55%, transparent 100%), linear-gradient(90deg, black 0%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 55%, transparent 100%), linear-gradient(90deg, black 0%, black 45%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <Image
            src="/images/hero-sunset.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[28%_25%] opacity-[0.34] saturate-[0.6] contrast-[1.05]"
          />
        </div>
        <div className="absolute inset-0 bg-[var(--background)]/35" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(207,196,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(207,196,170,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-10 pb-28 sm:pt-12">
        {/* Top row */}
        <HeroReveal delay={0.1}>
          <div className="flex items-start justify-between">
            <Logo className="text-lg sm:text-xl" />
            <EmailChip />
          </div>
        </HeroReveal>

        {/* Main */}
        <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-6">
          {/* Copy */}
          <div className="max-w-xl">
            <HeroReveal delay={0.2}>
              <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-[var(--text-secondary)] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7fae87] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7fae87]" />
                </span>
                UX/UI &amp; Product Designer
              </p>
            </HeroReveal>

            <HeroReveal delay={0.3}>
              <h1 className="text-[clamp(2.4rem,4.1vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--foreground)]">
                I design SaaS products that{" "}
                <span className="text-[var(--accent)]">convert</span>,{" "}
                <span className="text-[var(--accent)]">simplify</span>, and{" "}
                <span className="text-[var(--accent)]">scale</span>.
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.45}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                Hey, I&apos;m Kasra. I pair interaction design with a business mindset,
                turning research into onboarding flows, dashboards, and marketplaces people
                actually finish using.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.55}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.3} range={60}>
                  <Link href="/#work" className="btn-primary">
                    See the work
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3} range={60}>
                  <Link href="/contact" className="btn-outline inline-flex items-center gap-1.5 whitespace-nowrap">
                    Let&apos;s talk <ArrowUpRight size={15} className="inline-block" />
                  </Link>
                </Magnetic>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.7}>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-x-6 border-t border-[var(--border)] pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <dt className="order-2 text-[11px] tracking-wide text-[var(--text-secondary)]">{s.label}</dt>
                    <dd className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </HeroReveal>
          </div>

          {/* Work stage */}
          <div className="relative lg:pl-6">
            <HeroStage />
          </div>
        </div>

        {/* Scroll cue */}
        <HeroReveal delay={1.1} className="absolute bottom-10 right-6 hidden sm:block">
          <span className="inline-flex animate-bounce text-[var(--text-secondary)]">
            <ArrowDown className="h-5 w-5" />
          </span>
        </HeroReveal>
      </div>
    </section>
  );
}
