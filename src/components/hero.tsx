"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroReveal } from "@/components/motion";
import { Logo } from "@/components/logo";
import { Magnetic } from "@/components/magnetic";

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

export function Hero() {
  const [photoBroken, setPhotoBroken] = useState(false);

  return (
    <section className="grain relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {!photoBroken ? (
          <Image
            src="/images/about/headshot.jpg"
            alt=""
            fill
            priority
            onError={() => setPhotoBroken(true)}
            className="object-cover object-top grayscale"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(207,196,170,0.12), transparent 60%), linear-gradient(180deg, #17160f 0%, #0f0e0b 100%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-[var(--background)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/40" />
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 pt-10 pb-28 sm:pt-12">
        {/* Top row */}
        <HeroReveal delay={0.1}>
          <div className="flex items-start justify-between">
            <Logo className="text-lg sm:text-xl" />
            <EmailChip />
          </div>
        </HeroReveal>

        {/* Floating stat chips */}
        <div className="pointer-events-none absolute right-4 top-[30%] hidden flex-col gap-24 sm:right-10 sm:flex">
          <HeroReveal delay={0.5}>
            <div className="floating-nav rounded-2xl px-5 py-4">
              <p className="text-base font-bold tracking-tight text-[var(--foreground)]">4+</p>
              <p className="text-xs text-[var(--text-secondary)]">Projects Shipped</p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.7}>
            <div className="floating-nav rounded-2xl px-5 py-4">
              <p className="text-base font-bold tracking-tight text-[var(--foreground)]">2026</p>
              <p className="text-xs text-[var(--text-secondary)]">Open to Co-op</p>
            </div>
          </HeroReveal>
        </div>

        {/* Bottom — intro + scroll cue */}
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <HeroReveal delay={0.3}>
            <p className="max-w-md text-xl leading-snug text-[var(--foreground)] sm:text-2xl">
              Hey, I&apos;m Kasra. I design SaaS products that convert, simplify, and scale.
            </p>
          </HeroReveal>

          <HeroReveal delay={0.9}>
            <div className="flex flex-col items-center gap-2 text-[var(--text-secondary)]">
              <ScrollArrow />
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}

function ScrollArrow() {
  return (
    <span className="inline-flex animate-bounce">
      <ArrowDown className="h-5 w-5" />
    </span>
  );
}
