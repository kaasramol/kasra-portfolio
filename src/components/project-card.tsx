import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  bg: string;
  year: string;
  screens: React.ReactNode;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  href,
  bg,
  year,
  screens,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <article
        className="overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
        style={{ background: bg }}
      >
        {/* Browser preview — large, dominant */}
        <div className="relative px-8 pt-8 md:px-10 md:pt-10">
          {screens}
        </div>

        {/* Text */}
        <div className="p-8 md:p-10">
          <div className="mb-2 flex items-baseline gap-3">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
            <span className="text-sm text-[var(--text-secondary)]">{year}</span>
          </div>
          <p className="mb-3 text-sm text-[var(--text-secondary)]">
            {subtitle}
          </p>
          <p className="mb-5 max-w-lg leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--foreground)]/10 bg-white/50 px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--accent)] transition-all duration-300 group-hover:gap-3">
              View case study
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* Reusable phone frame — realistic device */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[200px] sm:w-[220px] ${className}`}>
      <div className="overflow-hidden rounded-[36px] border-[6px] border-[#1c1c1e] bg-[#1c1c1e] shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
        {/* Dynamic Island */}
        <div className="relative z-10 flex justify-center bg-[#1c1c1e] pt-2.5 pb-1">
          <div className="h-[7px] w-[72px] rounded-full bg-[#0a0a0a]" />
        </div>
        {/* Screen */}
        <div className="overflow-hidden rounded-b-[2px]">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center bg-[#1c1c1e] pt-1.5 pb-2.5">
          <div className="h-[5px] w-[100px] rounded-full bg-[#3a3a3c]" />
        </div>
      </div>
      {/* Side button (power) */}
      <div className="absolute right-[-2px] top-[25%] h-[40px] w-[3px] rounded-r-sm bg-[#2c2c2e]" />
      {/* Volume buttons */}
      <div className="absolute left-[-2px] top-[20%] h-[24px] w-[3px] rounded-l-sm bg-[#2c2c2e]" />
      <div className="absolute left-[-2px] top-[28%] h-[24px] w-[3px] rounded-l-sm bg-[#2c2c2e]" />
    </div>
  );
}

/* Reusable browser frame */
export function BrowserFrame({
  children,
  url = "app.example.com",
  className = "",
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/20 bg-white shadow-lg transition-transform duration-500 group-hover:scale-[1.01] ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
        </div>
        <div className="flex-1 rounded-md bg-[var(--background)] px-3 py-1 text-center">
          <span className="text-[10px] text-[var(--text-secondary)]">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="bg-white">{children}</div>
    </div>
  );
}
