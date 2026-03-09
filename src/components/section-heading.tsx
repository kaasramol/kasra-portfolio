interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
        {label}
      </p>
      <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
