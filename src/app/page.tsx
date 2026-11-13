import { StickyCaseStudy } from "@/components/sticky-case-study";
import { KaputScreens, OnboardScreens, TeamPulseScreens } from "@/components/project-screens";
import { ScrollReveal, AnimatedDivider } from "@/components/motion";
import { WordReveal } from "@/components/word-reveal";
import { WorkMosaic } from "@/components/work-mosaic";
import { Hero } from "@/components/hero";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Magnetic } from "@/components/magnetic";
import Link from "next/link";

const projects = [
  {
    title: "Kaput",
    subtitle: "B2C Marketplace",
    description:
      "Map-based marketplace connecting car owners with trusted mechanics. Real-time maps, guided quoting, Stripe payments, in-app chat.",
    tags: ["Product Design", "Map UX", "Two-Sided Platform"],
    href: "/case-study/kaput",
    glow: "#c98b5e",
    year: "2024–Present",
    screens: <KaputScreens />,
  },
  {
    title: "Onboard",
    subtitle: "SaaS Onboarding Redesign",
    description:
      "Self-initiated redesign of a SaaS onboarding flow. In usability tests, time-to-value dropped from 12 minutes to under 4.",
    tags: ["User Research", "Interaction Design", "SaaS"],
    href: "/case-study/onboard",
    glow: "#7fae87",
    year: "2024",
    screens: <OnboardScreens />,
  },
  {
    title: "TeamPulse",
    subtitle: "Employee Feedback Dashboard",
    description:
      "Pulse survey platform that turns employee feedback into manager action in under 24 hours.",
    tags: ["0-to-1 Design", "Data Visualization", "B2B SaaS"],
    href: "/case-study/teampulse",
    glow: "#6f9bae",
    year: "2024",
    screens: <TeamPulseScreens />,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <WordReveal
        label="[ WHAT I DO ]"
        text="**Thoughtful websites and SaaS products,** crafted for companies that care about every detail."
        className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight"
        height="h-[130vh]"
      />

      <WorkMosaic />

      {/* One pinned section per project */}
      <div id="work" className="relative">
        <ScrollReveal>
          <p className="mx-auto max-w-5xl px-6 pt-10 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
            [ SELECTED WORK ]
          </p>
        </ScrollReveal>
        {projects.map((project, index) => (
          <StickyCaseStudy key={project.title} index={index + 1} {...project} />
        ))}
      </div>

      <AnimatedDivider />

      {/* Skills marquee */}
      <section className="px-6 py-20">
        <ScrollReveal>
          <p className="mb-8 text-center text-sm tracking-[0.2em] text-[var(--text-secondary)]">
            [ WHAT I BRING ]
          </p>
        </ScrollReveal>
        <SkillsMarquee />
      </section>

      <AnimatedDivider />

      {/* About teaser */}
      <WordReveal
        label="[ ABOUT ]"
        text="**I'm Kasra,** a product designer with a business mindset, designing SaaS experiences **that convert, simplify, and scale.**"
        className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.15] tracking-tight"
        height="h-[120vh]"
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-3 text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              [ WHAT I DO BEST ]
            </p>
            <p className="mb-10 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
              UI/UX, Product Design, Design Systems, User Research, Prototyping,
              SaaS Onboarding, Dashboards, Visual Design.
            </p>
            <Magnetic strength={0.3} range={60}>
              <Link href="/about" className="btn-outline">
                More about me
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* CTA */}
      <section className="px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center sm:p-14">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
                Open to Co-op Opportunities
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
                Looking for my next co-op.
              </h2>
              <p className="mx-auto mb-8 max-w-md leading-relaxed text-[var(--text-secondary)]">
                Seeking a UX/UI co-op where I can contribute to product teams shipping
                design that drives real business outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Magnetic strength={0.3} range={60}>
                  <Link href="/contact" className="btn-primary">
                    Get in touch
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3} range={60}>
                  <a
                    href="/Kasra_Molaei_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Download Resume
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
