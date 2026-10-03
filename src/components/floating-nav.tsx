import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./magnetic";

const HEADSHOT_PATH = path.join(process.cwd(), "public/images/about/headshot.jpg");

function Avatar() {
  const hasPhoto = fs.existsSync(HEADSHOT_PATH);

  if (!hasPhoto) {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--background)] text-[11px] font-bold text-[var(--accent)]">
        K
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/about/headshot.jpg"
      alt="Kasra Molaei"
      className="h-7 w-7 shrink-0 rounded-full object-cover"
    />
  );
}

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function FloatingNav() {
  return (
    <nav
      className="floating-nav fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full p-1.5 sm:bottom-6 sm:gap-1 sm:p-2"
      aria-label="Primary"
    >
      {links.map((link) => (
        <Magnetic key={link.href} strength={0.5} range={40}>
          <Link href={link.href} className="btn-nav !px-2.5 sm:!px-4">
            {link.label}
          </Link>
        </Magnetic>
      ))}

      <Magnetic strength={0.4} range={60} className="ml-0.5 sm:ml-1">
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-[var(--accent)] py-1.5 pl-1.5 pr-3 text-xs font-semibold text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent-hover)] sm:py-2 sm:pl-2 sm:pr-4"
        >
          <Avatar />
          <span className="hidden sm:inline">Let&apos;s talk</span>
          <ArrowUpRight className="h-3.5 w-3.5 sm:hidden" />
        </Link>
      </Magnetic>
    </nav>
  );
}
