"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.4,
  range = 80,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.15 });

  useEffect(() => {
    function handleMouseMove(e: globalThis.MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = e.clientX - centerX;
      const relY = e.clientY - centerY;
      const distance = Math.hypot(relX, relY);

      if (distance < range) {
        const pull = 1 - distance / range;
        x.set(relX * strength * pull);
        y.set(relY * strength * pull);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [range, strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}
