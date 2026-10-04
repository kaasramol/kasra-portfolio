interface LogoLineProps {
  word: string;
  replaceIndex?: number;
}

function LogoLine({ word, replaceIndex }: LogoLineProps) {
  return (
    <span className="inline-flex items-center">
      {[...word].map((char, i) =>
        i === replaceIndex ? (
          <span
            key={i}
            className="relative top-[0.03em] mx-[0.04em] inline-block h-[0.7em] w-[0.7em] shrink-0 rounded-[0.16em] bg-[var(--accent)]"
          />
        ) : (
          <span key={i}>{char}</span>
        )
      )}
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-extrabold uppercase leading-[0.95] tracking-[0.08em] text-[var(--foreground)] ${className}`}
    >
      <span aria-hidden className="contents">
        <LogoLine word="KASRA" />
        <br />
        <LogoLine word="MOLAEI" replaceIndex={1} />
      </span>
      <span className="sr-only">Kasra Molaei</span>
    </p>
  );
}
