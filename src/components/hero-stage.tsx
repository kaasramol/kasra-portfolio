"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { KaputExplore, PulseInsight, TasklySetup } from "./project-screens";

/* Mockups are authored at a natural 560px width. Each tile crops and scales
   one down to its own box, then the whole stage is scaled to fit the column. */
const STAGE_W = 640;
const STAGE_H = 540;
const MOCKUP_W = 560;

interface Tile {
  node: ReactNode;
  label: string;
  href: string;
  glow: string;
  x: number;
  y: number;
  w: number;
  depth: number; // parallax multiplier — bigger moves more
  float: number; // seconds per float cycle
  delay: number;
  z: number;
}

const tiles: Tile[] = [
  {
    node: <KaputExplore />,
    label: "Kaput · Map UX",
    href: "/case-study/kaput",
    glow: "#c98b5e",
    x: 0,
    y: 96,
    w: 440,
    depth: 1,
    float: 7,
    delay: 0.5,
    z: 10,
  },
  {
    node: <PulseInsight />,
    label: "TeamPulse · Insights",
    href: "/case-study/teampulse",
    glow: "#6f9bae",
    x: 320,
    y: 0,
    w: 320,
    depth: 1.8,
    float: 8.5,
    delay: 0.7,
    z: 20,
  },
  {
    node: <TasklySetup />,
    label: "Onboard · Activation",
    href: "/case-study/onboard",
    glow: "#7fae87",
    x: 270,
    y: 318,
    w: 350,
    depth: 1.4,
    float: 9,
    delay: 0.85,
    z: 20,
  },
];

function StageTile({ tile, mx, my }: { tile: Tile; mx: MotionValue<number>; my: MotionValue<number> }) {
  const x = useTransform(mx, (v) => v * 16 * tile.depth);
  const y = useTransform(my, (v) => v * 12 * tile.depth);
  const scale = (tile.w - 2) / MOCKUP_W;

  return (
    <motion.div
      className="absolute"
      style={{ left: tile.x, top: tile.y, width: tile.w, zIndex: tile.z, x, y }}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: tile.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-full"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: tile.float, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href={tile.href}
          aria-label={`Open the ${tile.label} case study`}
          className="group relative block w-full overflow-hidden rounded-[14px] transition-transform duration-500 ease-out hover:-translate-y-1"
        >
          {/* Mockup, zoomed from its natural width so the tile sizes itself to the content */}
          <div className="pointer-events-none" style={{ width: MOCKUP_W, zoom: scale }}>
            {tile.node}
          </div>
          {/* Bottom fade + caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="pointer-events-none absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/85 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: tile.glow }} />
            {tile.label}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function HeroStage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(1);

  // Normalised pointer position across the viewport, -1..1
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });
  const rotateY = useTransform(mx, (v) => v * 5);
  const rotateX = useTransform(my, (v) => v * -4);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setFit(Math.min(1, entry.contentRect.width / STAGE_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    function onMove(e: MouseEvent) {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div ref={wrapRef} className="relative w-full" style={{ height: STAGE_H * fit }}>
      {/* Ambient project glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[10%] top-[15%] h-[55%] w-[55%] rounded-full bg-[#3b82f6] opacity-[0.12] blur-[120px]" />
        <div className="absolute right-[0%] top-[0%] h-[45%] w-[45%] rounded-full bg-[#2EC4B6] opacity-[0.1] blur-[110px]" />
        <div className="absolute bottom-[0%] left-[20%] h-[45%] w-[45%] rounded-full bg-[#7fae87] opacity-[0.08] blur-[110px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[40%] w-[40%] rounded-full bg-[#6366F1] opacity-[0.12] blur-[110px]" />
      </div>

      <motion.div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: STAGE_W,
          height: STAGE_H,
          scale: fit,
          rotateX,
          rotateY,
          transformPerspective: 1400,
        }}
      >
        {tiles.map((tile) => (
          <StageTile key={tile.href} tile={tile} mx={mx} my={my} />
        ))}
      </motion.div>
    </div>
  );
}
