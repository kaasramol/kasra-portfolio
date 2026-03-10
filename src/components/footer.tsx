import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-[var(--text-secondary)]">
          Kasra Molaei
        </p>
        <div className="flex gap-6">
          <Link href="https://linkedin.com" target="_blank" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
            LinkedIn
          </Link>
          <Link href="https://github.com/kaasramol" target="_blank" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
            GitHub
          </Link>
          <Link href="mailto:kasra_molaei@sfu.ca" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
