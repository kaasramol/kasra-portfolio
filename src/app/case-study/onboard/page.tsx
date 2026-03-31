import {
  CaseStudyLayout,
  CaseSection,
  StatCard,
  PullQuote,
  FigureCaption,
} from "@/components/case-study-layout";
import { GestaltTag, GestaltMockup } from "@/components/gestalt-tag";
import { OnboardBeforeMockup, OnboardAfterMockup, OnboardCelebrationMockup } from "@/components/mockups/onboard-screens";
import { CompetitiveAuditMockup, FunnelAnalysisMockup, JourneyMapMockup, WireframesMockup, UsabilityResultsMockup } from "@/components/mockups/onboard-extras";

export const metadata = {
  title: "Onboard | Case Study",
  description:
    "Redesigning SaaS onboarding to cut drop-off by 40% and reduce time-to-value.",
};

export default function OnboardCaseStudy() {
  return (
    <CaseStudyLayout
      title="Onboard"
      subtitle="Redesign, SaaS Onboarding"
      color="#E8956A"
      meta={{
        role: "UX/UI Designer (E2E)",
        duration: "4 Weeks",
        tools: "Figma, Notion, Maze",
        type: "Redesign",
        context: "Personal Project",
        date: "2024",
        team: "Solo",
      }}
      prevProject={{ title: "Kaput", href: "/case-study/kaput" }}
      nextProject={{ title: "TeamPulse", href: "/case-study/teampulse" }}
    >
      <CaseSection title="Overview">
        <p>
          Taskly is a project management tool for mid-size teams. Despite strong
          acquisition, <strong className="text-[var(--foreground)]">40% of new users dropped off during
          onboarding</strong>. Never creating a project, never inviting a teammate,
          never experiencing the product&apos;s value.
        </p>
        <p>
          I was tasked with redesigning the onboarding experience to get users
          to their &quot;aha moment&quot; faster.
        </p>
      </CaseSection>

      <OnboardBeforeMockup />
      <FigureCaption>Fig 1 — Original onboarding flow with lengthy form fields and 7-step process</FigureCaption>

      <CaseSection title="The Problem">
        <p>
          Taskly&apos;s onboarding was built by engineers during the company&apos;s
          early days. It asked for too much information upfront, showed too many
          features at once, and dropped users into an empty dashboard with no
          guidance.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 my-6">
          <StatCard label="Drop-off rate" before="—" after="40%" change="Critical" />
          <StatCard label="Time to first project" before="—" after="12 min" change="Too slow" />
          <StatCard label="Team invite (week 1)" before="—" after="22%" change="Low activation" />
          <StatCard label="Support tickets/mo" before="—" after="340" change="High burden" />
        </div>

        <PullQuote>
          For a company spending heavily on acquisition, losing nearly half of
          signups before they even tried the product was a critical business problem.
        </PullQuote>
      </CaseSection>

      <CaseSection title="Discovery">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Competitive Audit
        </h3>
        <p>
          I analyzed onboarding flows from five competitors: Asana, Monday.com,
          ClickUp, Notion, and Linear. The best flows shared three traits: they
          personalized early, showed value within 3 clicks, and used the real
          product as the learning environment, not a separate tutorial.
        </p>

        <CompetitiveAuditMockup />
        <FigureCaption>Fig 2 — Competitive audit comparing onboarding flows across 5 SaaS tools</FigureCaption>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          User Interviews
        </h3>
        <p>
          I interviewed 5 participants, 3 who recently adopted a new SaaS tool
          and 2 who abandoned one mid-trial. Three key themes emerged:
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;Don&apos;t make me think before I&apos;ve decided to care.&quot;</p>
            <p className="text-sm mt-1">Users didn&apos;t want to configure settings before seeing the product.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;Show me what good looks like.&quot;</p>
            <p className="text-sm mt-1">Empty states were demoralizing. Pre-populated examples helped 3x faster.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;I&apos;ll invite my team when I&apos;m confident.&quot;</p>
            <p className="text-sm mt-1">Forcing team invitations during onboarding felt premature.</p>
          </div>
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Funnel Analysis
        </h3>
        <p>
          I mapped the existing funnel and identified three critical drop-off
          points: the profile setup form (28%), the empty dashboard (35%),
          and the forced team invitation modal (41%).
        </p>

        <FunnelAnalysisMockup />
        <FigureCaption>Fig 3 — Funnel analysis showing critical drop-off points in the existing onboarding</FigureCaption>
      </CaseSection>

      <CaseSection title="Define">
        <p>
          I created a journey map tracking a new user&apos;s emotional state.
          The key finding: the emotional peak was at signup, and every
          subsequent step reduced it. The redesign needed to sustain that
          initial excitement.
        </p>

        <JourneyMapMockup />
        <FigureCaption>Fig 4 — User emotional journey map showing declining engagement through each step</FigureCaption>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          How Might We
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Help users see value within the first 3 minutes?",
            "Reduce setup decisions without limiting personalization?",
            "Make the real product the tutorial?",
            "Let users invite teammates naturally, not forcefully?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-[var(--surface)] p-4">
              <span className="text-sm font-bold text-[var(--accent)]">HMW</span>
              <p className="text-sm">{q}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Design">
        <p>
          I replaced the linear, form-heavy onboarding with an interactive,
          value-first experience in 5 steps:
        </p>

        <WireframesMockup />
        <FigureCaption>Fig 5 — Low-fidelity wireframes mapping the redesigned 5-step onboarding flow</FigureCaption>

        <GestaltMockup>
          <OnboardAfterMockup />
          <GestaltTag
            principle="Closure"
            description="Progress indicators and pre-populated templates let users feel completion momentum. The brain fills in 'I'm almost done.'"
            top="8%" right="3%"
          />
          <GestaltTag
            principle="Figure/Ground"
            description="Active step is highlighted while remaining steps recede, creating clear focus on the current task."
            top="50%" left="3%"
          />
        </GestaltMockup>
        <FigureCaption>Fig 6 — High-fidelity redesigned onboarding with personalized use-case selection</FigureCaption>
        <GestaltMockup className="mt-4">
          <OnboardCelebrationMockup />
          <GestaltTag
            principle="Hierarchy"
            description="The celebration moment uses scale and color weight to make the success state unmissable. A visual reward for completion."
            top="15%" right="4%"
          />
        </GestaltMockup>
        <FigureCaption>Fig 7 — Celebration screen with optional next actions replacing forced team invite</FigureCaption>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Key Design Decisions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Templates over blank slate", desc: "Pre-populated examples reduced time-to-value by 60%." },
            { title: "3 actions, not 10", desc: "The goal was the \"aha moment,\" not comprehensive training." },
            { title: "Celebration matters", desc: "Micro-moments of delight sustained the emotional high from signup." },
            { title: "Invitation is optional", desc: "Moving it from mandatory to optional increased completion of other steps." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg bg-[var(--surface)] p-4">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Testing & Iteration">
        <p>
          I ran unmoderated usability tests with 5 participants using Maze.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 my-6">
          <StatCard label="Completion rate" before="60%" after="92%" change="+32%" />
          <StatCard label="Time to first project" before="12 min" after="3.5 min" change="-71%" />
          <StatCard label="Task completion" before="—" after="96%" change="Excellent" />
          <StatCard label="SUS Score" before="—" after="82" change="Above avg" />
        </div>

        <UsabilityResultsMockup />
        <FigureCaption>Fig 8 — Usability test results across 5 participants showing 96% task completion</FigureCaption>
      </CaseSection>

      <CaseSection title="Outcome & Learnings">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 my-4">
          <StatCard label="Completion" before="60%" after="85%+" change="Projected" />
          <StatCard label="Time to value" before="12 min" after="4 min" change="-67%" />
          <StatCard label="Team invite" before="22%" after="40%+" change="+82%" />
          <StatCard label="Support tickets" before="340/mo" after="~150/mo" change="-56%" />
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          What I Learned
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Start with value, not configuration.",
              desc: "Every question before showing value is a tax on patience.",
            },
            {
              title: "The product IS the tutorial.",
              desc: "Teaching inside the real product builds muscle memory and confidence.",
            },
            {
              title: "Marketing thinking helps UX.",
              desc: "My background helped me treat onboarding as a conversion funnel where each step must justify its existence.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="What I'd Do Differently">
        <div className="space-y-4">
          {[
            {
              title: "Run a longer longitudinal study.",
              desc: "Usability tests showed strong first-session results, but real onboarding success is measured over 7-14 days. I would track retention and feature adoption over time, not just initial completion.",
            },
            {
              title: "A/B test individual steps, not the whole flow.",
              desc: "I tested the redesigned flow against the old one as a whole. Isolating individual changes (templates vs blank slate, 3 steps vs 5 steps) would have given clearer data on what actually moved the needle.",
            },
            {
              title: "Include accessibility testing from the start.",
              desc: "The celebration animations and progress indicators look great but I should have tested with screen readers and keyboard-only users earlier in the process, not as a final check.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-xs font-bold text-[var(--accent)]">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
