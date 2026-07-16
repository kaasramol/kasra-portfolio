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
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
      {/* Device frame */}
      <div className="relative aspect-[9/19] rounded-[13%/6.2%] bg-[#17171a] p-[3%] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
        {/* Side buttons */}
        <div className="absolute -left-[1.5px] top-[22%] h-[7%] w-[3px] rounded-l-sm bg-[#17171a]" />
        <div className="absolute -left-[1.5px] top-[31%] h-[7%] w-[3px] rounded-l-sm bg-[#17171a]" />
        <div className="absolute -right-[1.5px] top-[25%] h-[10%] w-[3px] rounded-r-sm bg-[#17171a]" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[11%/5.2%] bg-[var(--background)]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[2.2%] z-10 h-[3%] w-[28%] -translate-x-1/2 rounded-full bg-[#17171a]" />

          <div className="flex h-full flex-col gap-3 px-5 pt-14 pb-6">
            <p
              className="text-[9px] font-semibold tracking-[0.25em] uppercase"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
            <h3
              className="text-lg font-bold leading-tight tracking-tight text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {title}
            </h3>
            <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
              {summary}
            </p>
            <div className="mt-auto space-y-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
                >
                  <p
                    className="text-[8px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]"
                  >
                    {item.label}
                  </p>
                  <p className="text-[11px] font-medium text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {footer && (
              <div className="pt-1 text-center text-[10px] font-medium" style={{ color: accent }}>
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
