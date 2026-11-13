"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Lock } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
   Scene — a fixed-size authored canvas that scales to its container width.
   Children are absolutely positioned Layers that parallax on scroll.
   ──────────────────────────────────────────────────────────────────────────── */

const ProgressCtx = createContext<MotionValue<number> | null>(null);

export interface Glow {
  color: string;
  x: string;
  y: string;
  size?: number;
  opacity?: number;
}

export function Scene({
  width = 620,
  height = 480,
  glows = [],
  className = "",
  children,
}: {
  width?: number;
  height?: number;
  glows?: Glow[];
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setFit(Math.min(1, entry.contentRect.width / width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ height: height * fit }}>
      {glows.length > 0 && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {glows.map((g, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-[110px]"
              style={{
                left: g.x,
                top: g.y,
                width: g.size ?? 360,
                height: g.size ?? 360,
                background: g.color,
                opacity: g.opacity ?? 0.16,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      )}
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: `scale(${fit})` }}
      >
        <ProgressCtx.Provider value={scrollYProgress}>{children}</ProgressCtx.Provider>
      </div>
    </div>
  );
}

export function Layer({
  x,
  y,
  w,
  z = 0,
  depth = 0,
  float = 0,
  delay = 0,
  children,
}: {
  x: number;
  y: number;
  w: number;
  z?: number;
  depth?: number; // positive = moves more with scroll (closer to viewer)
  float?: number; // seconds per idle bob, 0 = none
  delay?: number;
  children: ReactNode;
}) {
  const ctx = useContext(ProgressCtx);
  const fallback = useMotionValue(0.5);
  const progress = ctx ?? fallback;
  const py = useTransform(progress, [0, 1], [depth * 56, -depth * 56]);

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, width: w, zIndex: z, y: py }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {float > 0 ? (
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: float, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Window — app chrome. Dark bar, thin border, soft top highlight.
   ──────────────────────────────────────────────────────────────────────────── */

export function Window({
  url,
  tone = "dark",
  width = 560,
  className = "",
  children,
}: {
  url: string;
  tone?: "dark" | "light";
  width?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border border-white/[0.09] bg-[#0b0c10] shadow-[0_40px_90px_-28px_rgba(0,0,0,0.85),0_12px_30px_-16px_rgba(0,0,0,0.6)] ${className}`}
      style={{ width }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="flex h-9 items-center gap-3 border-b border-white/[0.06] bg-[#121318] px-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/[0.045] px-3 py-1 text-[10px] font-medium tracking-wide text-white/45">
          <Lock size={9} className="text-white/35" />
          {url}
        </div>
        <div className="w-[38px]" />
      </div>
      <div className={tone === "light" ? "bg-[#F6F6F8] text-[#17181C]" : "bg-[#0b0c10] text-[#e9ecf2]"}>
        {children}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Card — floating UI fragment.
   ──────────────────────────────────────────────────────────────────────────── */

export function Card({
  tone = "dark",
  className = "",
  style,
  children,
}: {
  tone?: "dark" | "light";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const base =
    tone === "light"
      ? "border-black/[0.06] bg-white text-[#17181C] shadow-[0_30px_70px_-24px_rgba(15,18,40,0.45),0_8px_20px_-10px_rgba(15,18,40,0.25)]"
      : "border-white/[0.1] bg-[#14161b]/95 text-[#e9ecf2] shadow-[0_30px_70px_-24px_rgba(0,0,0,0.9),0_8px_20px_-10px_rgba(0,0,0,0.7)] backdrop-blur-md";
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${base} ${className}`} style={style}>
      {tone === "dark" && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Small shared atoms
   ──────────────────────────────────────────────────────────────────────────── */

export function Avatar({
  initials,
  color,
  size = 28,
  className = "",
}: {
  initials: string;
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.36),
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.08) inset`,
      }}
    >
      {initials}
    </span>
  );
}

export function LiveDot({ color = "#ef4444", className = "" }: { color?: string; className?: string }) {
  return (
    <span className={`relative inline-flex h-1.5 w-1.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: color }} />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

export function Stars({ value, className = "" }: { value: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="#f5b041">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {value}
    </span>
  );
}
