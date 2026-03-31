import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left — branding */}
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Kasra<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-1 max-w-xs text-sm text-[var(--text-secondary)]">
              UX/UI Designer crafting end-to-end experiences for SaaS products.
            </p>
          </div>

          {/* Right — links */}
          <div className="flex gap-12">
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Pages
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/#work" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
                  Work
                </Link>
                <Link href="/about" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Connect
              </p>
              <div className="flex flex-col gap-2">
                <Link href="https://www.linkedin.com/in/kasra-molaei" target="_blank" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-6">
          <p className="text-xs text-[var(--text-secondary)]">
            Designed &amp; built by Kasra Molaei
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            2025
          </p>
        </div>
      </div>
    </footer>
  );
}
