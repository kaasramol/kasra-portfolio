import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import Link from "next/link";

export const metadata = {
  title: "Contact — Kasra Molaei",
  description: "Get in touch for UX design opportunities.",
};

export default function ContactPage() {
  return (
    <section className="flex min-h-[80vh] items-center px-6 pt-28 pb-12">
      <div className="mx-auto max-w-3xl w-full">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to UX roles, freelance projects, and conversations about design."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Email", value: "hello@kasramolaei.com", href: "mailto:hello@kasramolaei.com" },
            { label: "LinkedIn", value: "linkedin.com/in/kasramolaei", href: "https://linkedin.com/in/" },
            { label: "Dribbble", value: "dribbble.com/kasramolaei", href: "https://dribbble.com/" },
            { label: "Resume", value: "Download PDF", href: "https://read.cv/" },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group block rounded-xl border border-[var(--border)] p-5 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/5"
              >
                <p className="mb-1 text-sm text-[var(--text-secondary)]">{item.label}</p>
                <p className="font-medium transition-colors group-hover:text-[var(--accent)]">
                  {item.value}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
