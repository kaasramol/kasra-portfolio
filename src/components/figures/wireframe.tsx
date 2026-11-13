"use client";

import type { CSSProperties, ReactNode } from "react";

/* ────────────────────────────────────────────────────────────────────────────
   Low-fidelity wireframe kit.
   Paper frames pinned to a dark dot-grid board, pencil strokes with a subtle
   displacement filter for hand-drawn wobble, handwritten notes in Caveat.
   ──────────────────────────────────────────────────────────────────────────── */

const INK = "#3a3a3a";
const PENCIL = "#8d8a82";
const PAPER = "#f4f1ea";

export function WfFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <filter id="wf-sketch" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

/* ── Board ─────────────────────────────────────────────────────────────── */

export function WfBoard({
  label,
  meta,
  accent = "#cfc4aa",
  children,
  className = "",
}: {
  label: string;
  meta?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative my-8 overflow-hidden rounded-2xl border border-white/[0.08] ${className}`}
      style={{
        background:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 1.5px) 0 0 / 22px 22px, radial-gradient(ellipse 80% 60% at 50% 40%, #1b1a16 0%, #100f0c 100%)",
      }}
    >
      <WfFilters />
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
          <span className="text-[11px] font-semibold tracking-wide text-white/85">{label}</span>
        </div>
        {meta && <span className="text-[10px] tracking-wide text-white/40">{meta}</span>}
      </div>
      <div className="relative px-5 pb-8 pt-7 sm:px-8">{children}</div>
    </div>
  );
}

/* ── Frame ─────────────────────────────────────────────────────────────── */

export function WfFrame({
  kind = "mobile",
  label,
  width,
  rotate = 0,
  rejected = false,
  tape = true,
  className = "",
  children,
}: {
  kind?: "mobile" | "desktop";
  label?: string;
  width?: number;
  rotate?: number;
  rejected?: boolean;
  tape?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const w = width ?? (kind === "mobile" ? 150 : 300);
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: w, transform: `rotate(${rotate}deg)` }}>
      {tape && (
        <span
          className="absolute left-1/2 top-0 z-10 h-4 w-12 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-[2px] bg-white/30 shadow-[0_1px_2px_rgba(0,0,0,0.25)] backdrop-blur-[1px]"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.28), rgba(255,255,255,0.42), rgba(255,255,255,0.28))" }}
        />
      )}
      <div
        className={`relative overflow-hidden shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9),0_2px_6px_rgba(0,0,0,0.35)] ${
          kind === "mobile" ? "rounded-[16px]" : "rounded-[6px]"
        }`}
        style={{ background: PAPER, color: INK }}
      >
        {/* pencil frame */}
        <div
          className={`pointer-events-none absolute inset-[5px] border-[1.5px] ${kind === "mobile" ? "rounded-[12px]" : "rounded-[3px]"}`}
          style={{ borderColor: INK, filter: "url(#wf-sketch)" }}
        />
        <div className="relative p-3.5" style={{ filter: "url(#wf-sketch)" }}>
          {kind === "mobile" ? (
            <div className="mx-auto mb-2.5 h-[3px] w-10 rounded-full" style={{ background: INK }} />
          ) : (
            <div className="mb-2.5 flex items-center gap-1.5 border-b pb-1.5" style={{ borderColor: PENCIL }}>
              <span className="h-2 w-2 rounded-full border" style={{ borderColor: INK }} />
              <span className="h-2 w-2 rounded-full border" style={{ borderColor: INK }} />
              <span className="h-2 w-2 rounded-full border" style={{ borderColor: INK }} />
              <span className="ml-2 h-[7px] flex-1 rounded-sm border" style={{ borderColor: PENCIL }} />
            </div>
          )}
          {children}
        </div>
        {rejected && (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path d="M6 8 L94 92 M94 8 L6 92" stroke="#e0543f" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
      </div>
      {label && (
        <p className="mt-2.5 text-center text-[15px] leading-tight text-white/75" style={{ fontFamily: "var(--font-hand), cursive" }}>
          {label}
        </p>
      )}
    </div>
  );
}

/* ── Primitives drawn inside a frame ──────────────────────────────────── */

export function WfBox({ h = 40, label, className = "", x = true }: { h?: number; label?: string; className?: string; x?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[3px] border-[1.3px] ${className}`} style={{ height: h, borderColor: INK, background: "rgba(0,0,0,0.03)" }}>
      {x && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <path d="M0 0 L100 100 M100 0 L0 100" stroke={PENCIL} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      )}
      {label && (
        <span className="absolute inset-0 flex items-center justify-center px-1 text-center text-[7.5px] font-semibold uppercase tracking-wider" style={{ color: INK, background: x ? PAPER : "transparent", margin: "auto", height: "fit-content", width: "fit-content" }}>
          {label}
        </span>
      )}
    </div>
  );
}

export function WfLines({ n = 3, widths, className = "", gap = 4, thick = 2 }: { n?: number; widths?: number[]; className?: string; gap?: number; thick?: number }) {
  const ws = widths ?? Array.from({ length: n }, (_, i) => (i === n - 1 ? 55 : 92 - (i % 3) * 12));
  return (
    <div className={`flex flex-col ${className}`} style={{ gap }}>
      {ws.map((w, i) => (
        <span key={i} className="block rounded-full" style={{ width: `${w}%`, height: thick, background: PENCIL }} />
      ))}
    </div>
  );
}

export function WfHeading({ w = 70, className = "" }: { w?: number; className?: string }) {
  return <span className={`block rounded-full ${className}`} style={{ width: `${w}%`, height: 5, background: INK }} />;
}

export function WfBtn({ label, primary = false, className = "", small = false }: { label?: string; primary?: boolean; className?: string; small?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[5px] border-[1.3px] font-semibold uppercase tracking-wider ${small ? "h-5 text-[6.5px]" : "h-7 text-[7.5px]"} ${className}`}
      style={{ borderColor: INK, background: primary ? INK : "transparent", color: primary ? PAPER : INK }}
    >
      {label ?? <span className="h-[3px] w-10 rounded-full" style={{ background: primary ? PAPER : INK }} />}
    </div>
  );
}

export function WfInput({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`flex h-6 items-center rounded-[4px] border-[1.3px] px-2 ${className}`} style={{ borderColor: PENCIL }}>
      {label ? <span className="text-[7px]" style={{ color: PENCIL }}>{label}</span> : <span className="h-[2px] w-1/2 rounded-full" style={{ background: PENCIL }} />}
    </div>
  );
}

export function WfCircle({ size = 22, className = "" }: { size?: number; className?: string }) {
  return <span className={`block shrink-0 rounded-full border-[1.3px] ${className}`} style={{ width: size, height: size, borderColor: INK }} />;
}

export function WfListRow({ avatar = true, lines = 2, action = false, className = "" }: { avatar?: boolean; lines?: number; action?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 border-b py-1.5 ${className}`} style={{ borderColor: "rgba(0,0,0,0.12)" }}>
      {avatar && <WfCircle size={18} />}
      <div className="flex-1">
        <WfLines n={lines} widths={lines === 1 ? [70] : [75, 45]} gap={3} />
      </div>
      {action && <span className="h-4 w-8 rounded-[3px] border-[1.2px]" style={{ borderColor: INK }} />}
    </div>
  );
}

export function WfTabs({ n = 4, active = 0, className = "" }: { n?: number; active?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-around border-t pt-2 ${className}`} style={{ borderColor: INK }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="flex flex-col items-center gap-1">
          <span className={`h-3 w-3 rounded-[3px] border-[1.2px]`} style={{ borderColor: INK, background: i === active ? INK : "transparent" }} />
          <span className="h-[2px] w-4 rounded-full" style={{ background: PENCIL }} />
        </span>
      ))}
    </div>
  );
}

export function WfMap({ h = 120, pins = 4, className = "" }: { h?: number; pins?: number; className?: string }) {
  const spots = [
    [48, 42], [70, 30], [28, 60], [74, 66], [40, 24],
  ];
  return (
    <div className={`relative overflow-hidden rounded-[3px] border-[1.3px] ${className}`} style={{ height: h, borderColor: INK }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <path d="M-5 30 C 20 26, 40 38, 60 32 S 95 24, 108 30" fill="none" stroke={PENCIL} strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
        <path d="M-5 68 C 25 62, 45 76, 70 70 S 95 60, 108 66" fill="none" stroke={PENCIL} strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
        <path d="M34 -5 C 36 25, 30 55, 38 108" fill="none" stroke={PENCIL} strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
        <path d="M68 -5 C 64 30, 72 60, 66 108" fill="none" stroke={PENCIL} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M-5 92 C 30 84, 60 100, 108 88" fill="none" stroke={PENCIL} strokeWidth="2.2" opacity="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
      {spots.slice(0, pins).map(([x, y], i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <svg width="12" height="16" viewBox="0 0 12 16" aria-hidden>
            <path d="M6 15 C 6 15, 1 9, 1 6 a5 5 0 1 1 10 0 c0 3 -5 9 -5 9z" fill={i === 0 ? INK : PAPER} stroke={INK} strokeWidth="1.3" />
            <circle cx="6" cy="6" r="1.6" fill={i === 0 ? PAPER : INK} />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function WfChart({ h = 56, kind = "line", className = "" }: { h?: number; kind?: "line" | "bars"; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[3px] border-[1.3px] p-1.5 ${className}`} style={{ height: h, borderColor: INK }}>
      {kind === "line" ? (
        <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
          <path d="M2 36 L98 36 M2 2 L2 36" stroke={PENCIL} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M4 30 C 15 28, 22 22, 32 24 S 50 12, 62 16 S 82 6, 96 8" fill="none" stroke={INK} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        </svg>
      ) : (
        <div className="flex h-full items-end gap-1">
          {[40, 65, 50, 85, 70, 95].map((v, i) => (
            <span key={i} className="flex-1 rounded-t-[2px] border-[1.2px] border-b-0" style={{ height: `${v}%`, borderColor: INK, background: i === 3 ? INK : "transparent" }} />
          ))}
        </div>
      )}
    </div>
  );
}

export function WfStat({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[3px] border-[1.3px] p-1.5 ${className}`} style={{ borderColor: INK }}>
      <span className="block h-[2px] w-1/2 rounded-full" style={{ background: PENCIL }} />
      <span className="mt-1.5 block h-[5px] w-3/4 rounded-full" style={{ background: INK }} />
    </div>
  );
}

/* ── Annotations on the board ─────────────────────────────────────────── */

export function WfNote({
  children,
  style,
  color = "#f3cf5e",
  rotate = -2,
  className = "",
}: {
  children: ReactNode;
  style?: CSSProperties;
  color?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 hidden w-[118px] px-2.5 py-2 text-[13px] leading-[1.15] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)] sm:block ${className}`}
      style={{ background: color, color: "#2a2410", transform: `rotate(${rotate}deg)`, fontFamily: "var(--font-hand), cursive", ...style }}
    >
      {children}
    </div>
  );
}

export function WfHand({
  children,
  style,
  color = "rgba(255,255,255,0.78)",
  className = "",
}: {
  children: ReactNode;
  style?: CSSProperties;
  color?: string;
  className?: string;
}) {
  return (
    <p className={`absolute z-20 hidden text-[15px] leading-tight sm:block ${className}`} style={{ color, fontFamily: "var(--font-hand), cursive", ...style }}>
      {children}
    </p>
  );
}

/* A curved pen arrow drawn across the board. Coordinates are in % of the board. */
export function WfArrow({
  from,
  to,
  bend = 0.25,
  color = "#f06a5a",
}: {
  from: [number, number];
  to: [number, number];
  bend?: number;
  color?: string;
}) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2 + (y2 - y1) * bend;
  const my = (y1 + y2) / 2 - (x2 - x1) * bend;
  const d = `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
  return (
    <svg className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full sm:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <marker id={`wf-arrow-${color.replace("#", "")}`} markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0.5 L5,3 L0,5.5" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </marker>
      </defs>
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" markerEnd={`url(#wf-arrow-${color.replace("#", "")})`} opacity="0.9" />
    </svg>
  );
}
