"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

export function CaseStudyNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    const updateActive = () => {
      let topId = "";
      let topRatio = 0;
      visible.forEach((ratio, id) => {
        if (ratio > topRatio) {
          topRatio = ratio;
          topId = id;
        }
      });
      if (topId) setActive(topId);
    };

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visible.set(item.id, entry.intersectionRatio);
            } else {
              visible.delete(item.id);
            }
          });
          updateActive();
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Case study sections"
      className="hidden xl:block fixed left-6 top-1/2 z-30 -translate-y-1/2"
    >
      <ul className="space-y-2.5 text-xs">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={`group flex items-center gap-3 transition-colors ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-px transition-all ${
                    isActive
                      ? "w-8 bg-[var(--accent)]"
                      : "w-4 bg-[var(--border)] group-hover:w-6 group-hover:bg-[var(--accent)]"
                  }`}
                />
                <span className="font-medium tracking-wide">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
