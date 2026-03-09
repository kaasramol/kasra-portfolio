import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import Link from "next/link";

export const metadata = {
  title: "About — Kasra Molaei",
  description: "UX Designer with a marketing background, designing for SaaS.",
};

export default function AboutPage() {
  return (
    <section className="px-6 pt-28 pb-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="About" title="Kasra Molaei" />

        {/* Decorative pattern header */}
        <div className="grain relative mb-10 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[var(--surface)]">
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1.5" fill="var(--foreground)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="relative z-10 text-center">
            <span className="text-6xl font-bold tracking-tight text-[var(--foreground)] opacity-10" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>KM</span>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-[var(--text-secondary)]">
          <p>
            I&apos;m a UX Designer with a background in marketing and business
            strategy. That combination shapes how I approach design — I don&apos;t
            just think about how something looks or feels. I think about why it
            exists, who it serves, and whether it moves the needle.
          </p>
          <p>
            Before transitioning into UX, I worked in marketing where I learned
            to think in funnels, measure what matters, and communicate ideas that
            resonate. When I discovered UX, I realized it was the same
            discipline applied closer to the product.
          </p>
          <p>
            I specialize in <strong className="text-[var(--foreground)]">end-to-end design for SaaS and productivity products</strong>.
            From initial user research through high-fidelity prototypes and
            usability testing — I own the full process.
          </p>
          <p>
            What makes me different: I speak the language of both design and
            business. I believe the best designers don&apos;t just advocate for
            users — they advocate for solutions that work for users AND the business.
          </p>
        </div>

        {/* Values */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Business-minded", desc: "Every design decision connects to a business outcome." },
            { title: "Research-driven", desc: "I start with people, not pixels. Real users shape every decision." },
            { title: "Clear communicator", desc: "I tell the story of the design — why, what tradeoffs, what's next." },
          ].map((value) => (
            <StaggerItem key={value.title}>
              <h3 className="mb-1.5 font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{value.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
