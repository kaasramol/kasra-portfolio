import { ProjectCard } from "@/components/project-card";
import { KaputScreens, OnboardScreens, TeamPulseScreens, FocusFlowScreens } from "@/components/project-screens";
import { ScrollReveal, HeroReveal, StaggerContainer, StaggerItem, AnimatedDivider } from "@/components/motion";
import { SkillsMarquee } from "@/components/skills-marquee";
import { HeroVisual } from "@/components/hero-visual";
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
    <>
      {/* Hero */}
      <section className="grain relative px-6 pt-28 pb-16 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto">
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
            <div className="flex gap-4">
              <Link href="#work" className="btn-primary">
                View my work
              </Link>
              <Link href="/about" className="btn-outline">
                About me
              </Link>
            </div>
          </HeroReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Disciplines & Tools */}
      <section className="px-6 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <HeroVisual />
        </div>
      </section>

      <AnimatedDivider />

      {/* Projects */}
      <section id="work" className="px-6 pt-8 pb-16">
        <div className="w-full max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="mb-12 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              Selected Work
            </p>
          </ScrollReveal>
          <div className="space-y-8">
            {projects.map((project) => (
              <ScrollReveal key={project.title}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Design Principles */}
      <section className="px-6 py-20">
        <div className="w-full max-w-5xl mx-auto">
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

      {/* Skills */}
      <section className="py-20 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="mb-8 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              Skills & Tools
            </p>
          </ScrollReveal>
        </div>
        <SkillsMarquee />
      </section>

      <AnimatedDivider />

      {/* CTA */}
      <section className="px-6 py-20">
        <ScrollReveal>
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-[var(--text-secondary)]">
              Open to UX/UI roles where design drives business outcomes.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
