import Image from "next/image";
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
      <div className="relative aspect-[9/19]">
        <Image
          src="/images/iphone-mockup.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 320px, 360px"
          className="pointer-events-none select-none object-contain"
        />
        {/* Screen content — positioned within the device's screen area */}
        <div
          className="absolute inset-x-[7%] top-[3.5%] bottom-[3.5%] overflow-hidden rounded-[10%/4.5%] bg-[var(--background)]"
        >
          <div className="flex h-full flex-col gap-3 px-5 pt-10 pb-6">
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
