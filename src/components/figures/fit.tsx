"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Scales a fixed-width composition to the width of its container.
   Uses CSS zoom so the element keeps its layout height. */
export function Fit({
  width = 560,
  max = 1.3,
  className = "",
  children,
}: {
  width?: number;
  max?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setZoom(Math.min(max, entry.contentRect.width / width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, max]);

  return (
    <div ref={ref} className={`my-8 w-full ${className}`}>
      <div className="mx-auto" style={{ width, zoom }}>
        {children}
      </div>
    </div>
  );
}

/* Dark phone shell for mobile screens, 240px wide by default. */
export function Phone({
  width = 240,
  className = "",
  children,
}: {
  width?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[34px] border border-white/10 bg-[#0b0c10] p-[7px] shadow-[0_40px_90px_-28px_rgba(0,0,0,0.9),0_12px_30px_-16px_rgba(0,0,0,0.6)] ${className}`}
      style={{ width }}
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative overflow-hidden rounded-[27px] bg-[#0b0c10]">
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}
