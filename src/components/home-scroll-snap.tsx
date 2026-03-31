"use client";

import { useEffect } from "react";

export function HomeScrollSnap({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("snap-home");
    return () => document.documentElement.classList.remove("snap-home");
  }, []);

  return <>{children}</>;
}
