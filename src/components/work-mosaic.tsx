"use client";

import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  KaputExplore,
  KaputQuotes,
  TasklySetup,
  TasklyCompare,
  PulseDashboard,
  PulseInsight,
} from "./project-screens";

interface Cell {
  node: ReactNode;
  vivid: boolean;
  lift: string;
}

const cells: Cell[] = [
  { node: <PulseDashboard />, vivid: false, lift: "sm:translate-y-6" },
  { node: <KaputQuotes />, vivid: true, lift: "" },
  { node: <TasklyCompare />, vivid: false, lift: "sm:translate-y-10" },
  { node: <PulseInsight />, vivid: true, lift: "sm:translate-y-2" },
  { node: <KaputExplore />, vivid: false, lift: "sm:translate-y-8" },
  { node: <TasklySetup />, vivid: true, lift: "sm:-translate-y-6" },
];

/* Mockups are authored at a natural ~560px width; scale them down uniformly
   and crop to the tile's aspect box rather than fighting fixed-px internals. */
function MosaicTile({ node, vivid }: { node: ReactNode; vivid: boolean }) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border transition-all duration-500 ${
        vivid
          ? "border-white/10 shadow-[0_30px_70px_-16px_rgba(0,0,0,0.65)]"
          : "border-white/5 opacity-40 grayscale-[0.3] hover:opacity-70"
      }`}
    >
      <div
        className="absolute top-1/2 left-1/2"
        style={{ width: 560, transform: `translate(-50%, -50%) scale(${vivid ? 0.46 : 0.38})` }}
      >
        {node}
      </div>
    </div>
  );
}

export function WorkMosaic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-28">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#3b82f6] opacity-[0.1] blur-[140px]" />
        <div className="absolute right-[10%] top-[30%] h-[340px] w-[340px] rounded-full bg-[#2EC4B6] opacity-[0.08] blur-[140px]" />
        <div className="absolute bottom-[5%] left-[35%] h-[360px] w-[360px] rounded-full bg-[#5B57E0] opacity-[0.1] blur-[140px]" />
      </div>

      <div className="mx-auto mb-14 max-w-5xl text-center">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--text-secondary)]">[ A CLOSER LOOK ]</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Products across the stack</h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {cells.map((cell, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`${cell.lift} ${cell.vivid ? "z-10" : "z-0"}`}
          >
            <MosaicTile node={cell.node} vivid={cell.vivid} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
