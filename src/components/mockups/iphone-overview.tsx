import type { ReactNode } from "react";

interface OverviewItem {
  label: string;
  value: string;
}

interface IPhoneOverviewProps {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: OverviewItem[];
  accent?: string;
  footer?: ReactNode;
}

export function IPhoneOverview({
  eyebrow,
  title,
  summary,
  highlights,
  accent = "#FFB162",
  footer,
}: IPhoneOverviewProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grain relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)]">
        {/* Accent top bar */}
        <div
          className="h-[3px] w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />

        <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          {/* Left — narrative */}
          <div>
            <p
              className="mb-3 text-[10px] font-semibold tracking-[0.25em] uppercase"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
            <h3
              className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {summary}
            </p>
            {footer && (
              <div className="mt-5 text-sm font-medium" style={{ color: accent }}>
                {footer}
              </div>
            )}
          </div>

          {/* Right — key facts */}
          <div className="space-y-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
              >
                <p className="mb-0.5 text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
