import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import Link from "next/link";

export const metadata = {
  title: "About | Kasra Molaei",
  description: "UX/UI Designer with a marketing background, designing for SaaS.",
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
            I&apos;m a UX/UI Designer with a background in marketing and business
            strategy. That combination shapes how I approach design. I don&apos;t
            just think about how something looks or feels. I think about why it
            exists, who it serves, and whether it moves the needle.
          </p>
          <p>
            Before transitioning into UX/UI, I worked in marketing where I learned
            to think in funnels, measure what matters, and communicate ideas that
            resonate. When I discovered UX/UI, I realized it was the same
            discipline applied closer to the product.
          </p>
          <p>
            I specialize in <strong className="text-[var(--foreground)]">end-to-end design for SaaS and productivity products</strong>.
            From initial user research through high-fidelity prototypes and
            usability testing. I own the full process.
          </p>
          <p>
            What makes me different: I speak the language of both design and
            business. I believe the best designers don&apos;t just advocate for
            users. They advocate for solutions that work for users AND the business.
          </p>
        </div>

        {/* Values */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Business-minded", desc: "Every design decision connects to a business outcome." },
            { title: "Research-driven", desc: "I start with people, not pixels. Real users shape every decision." },
            { title: "Clear communicator", desc: "I tell the story of the design: why, what tradeoffs, what's next." },
          ].map((value) => (
            <StaggerItem key={value.title}>
              <h3 className="mb-1.5 font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{value.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          <a
            href="/Kasra_Molaei_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Download Resume
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
