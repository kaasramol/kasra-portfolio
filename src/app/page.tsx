import { ProjectCard } from "@/components/project-card";
import { KaputScreens, OnboardScreens, TeamPulseScreens, FocusFlowScreens } from "@/components/project-screens";
import { ScrollReveal, HeroReveal, StaggerContainer, StaggerItem, AnimatedDivider } from "@/components/motion";
import { HeroVisual } from "@/components/hero-visual";
import { ToolsStrip } from "@/components/tools-strip";
import { HomeScrollSnap } from "@/components/home-scroll-snap";
import Link from "next/link";

const projects = [
  {
    title: "Kaput",
    subtitle: "B2C Marketplace",
    description:
      "Map-based marketplace connecting car owners with trusted mechanics. Real-time maps, guided quoting, Stripe payments, in-app chat.",
    tags: ["Product Design", "Map UX", "Two-Sided Platform"],
    href: "/case-study/kaput",
    bg: "#DDD5C7",
    year: "2025",
    screens: <KaputScreens />,
  },
  {
    title: "Onboard",
    subtitle: "SaaS Onboarding Redesign",
    description:
      "Redesigned the onboarding flow for a PM tool, reducing drop-off by 40% and cutting time-to-value from 12 min to under 4.",
    tags: ["User Research", "Interaction Design", "SaaS"],
    href: "/case-study/onboard",
    bg: "#D4DDD5",
    year: "2025",
    screens: <OnboardScreens />,
  },
  {
    title: "TeamPulse",
    subtitle: "Employee Feedback Dashboard",
    description:
      "Pulse survey platform that turns employee feedback into manager action in under 24 hours.",
    tags: ["0-to-1 Design", "Data Visualization", "B2B SaaS"],
    href: "/case-study/teampulse",
    bg: "#D4DDDB",
    year: "2025",
    screens: <TeamPulseScreens />,
  },
  {
    title: "FocusFlow",
    subtitle: "Productivity App Concept",
    description:
      "Cross-platform focus management app integrating with calendars and Slack to protect deep work time.",
    tags: ["Mobile + Web", "Product Strategy", "Cross-Platform"],
    href: "/case-study/focusflow",
    bg: "#DDDAE8",
    year: "2025",
    screens: <FocusFlowScreens />,
  },
];

export default function Home() {
  return (
    <HomeScrollSnap>
      {/* Hero */}
      <section className="snap-home-section grain relative flex min-h-[100dvh] flex-col overflow-hidden px-6 pt-28 pb-10">
        <div className="relative z-[1] mx-auto flex w-full max-w-5xl flex-1 flex-col justify-between gap-10">
          <div>
            <HeroReveal delay={0.1}>
              <p className="mb-6 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
                UX/UI Designer
              </p>
            </HeroReveal>
            <HeroReveal delay={0.25}>
              <h1 className="mb-6 text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                Kasra
                <br />
                Molaei<span className="text-[var(--accent)]">.</span>
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.45}>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-[var(--text-secondary)]">
                Designing end-to-end experiences for SaaS products
                that users love and companies profit from.
              </p>
            </HeroReveal>
            <HeroReveal delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <Link href="#work" className="btn-primary">
                  View my work
                </Link>
                <Link href="/about" className="btn-outline">
                  About me
                </Link>
              </div>
            </HeroReveal>
          </div>

          <div className="min-h-0 shrink-0">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Tools Strip */}
      <section className="snap-home-section flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-5xl">
          <ScrollReveal>
            <ToolsStrip />
          </ScrollReveal>

          {/* Quick bio + education */}
          <ScrollReveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-0.5 hover:shadow-md">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">Background</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Marketing &amp; business strategy turned UX/UI. I bring a conversion-minded approach to every design decision.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-0.5 hover:shadow-md">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">Education</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Simon Fraser University — Interactive Arts &amp; Technology. Focused on user-centered design and research methods.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-0.5 hover:shadow-md">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">Focus</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  SaaS &amp; productivity products. End-to-end ownership from research through high-fidelity prototypes and testing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* One section per project */}
      {projects.map((project, index) => (
        <section
          key={project.title}
          id={index === 0 ? "work" : undefined}
          className="snap-home-section flex flex-col justify-center px-6 py-10 md:py-14"
        >
          <div className="mx-auto w-full max-w-5xl">
            {index === 0 && (
              <ScrollReveal>
                <p className="mb-10 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
                  Selected Work
                </p>
              </ScrollReveal>
            )}
            <ScrollReveal>
              <ProjectCard {...project} />
            </ScrollReveal>
          </div>
        </section>
      ))}

      <AnimatedDivider />

      {/* Design Principles */}
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <ScrollReveal>
            <p className="mb-12 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              How I Design
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Users first, always",
                desc: "Every decision starts with understanding real people. Research isn\u2019t a phase \u2014 it\u2019s the foundation.",
              },
              {
                number: "02",
                title: "Data over opinions",
                desc: "I validate with metrics, not assumptions. Testing reveals what interviews can\u2019t.",
              },
              {
                number: "03",
                title: "Simple beats clever",
                desc: "The best interface is the one users don\u2019t have to think about. Clarity always wins.",
              },
              {
                number: "04",
                title: "Design for outcomes",
                desc: "Beautiful UI means nothing if it doesn\u2019t move the business. I design for impact.",
              },
            ].map((principle) => (
              <StaggerItem key={principle.number} className="h-full">
                <div className="group h-full rounded-xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="mb-3 block text-2xl font-bold text-[var(--accent)] opacity-40">
                    {principle.number}
                  </span>
                  <h3 className="mb-2 text-base font-semibold">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {principle.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedDivider />

      {/* CTA */}
      <section className="px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 sm:p-14 text-center">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
                Let&apos;s Collaborate
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-[var(--text-secondary)] leading-relaxed">
                I&apos;m open to UX/UI roles, freelance projects, and conversations about
                design that drives real business outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in touch
                </Link>
                <a
                  href="/Kasra_Molaei_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </HomeScrollSnap>
  );
}
