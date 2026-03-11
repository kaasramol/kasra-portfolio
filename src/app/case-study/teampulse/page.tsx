import {
  CaseStudyLayout,
  CaseSection,
  StatCard,
  PullQuote,
} from "@/components/case-study-layout";
import { GestaltTag, GestaltMockup } from "@/components/gestalt-tag";
import { TeamPulseDashboardMockup, TeamPulseInsightCardMockup, TeamPulseSurveyMobileMockup } from "@/components/mockups/teampulse-screens";
import { AffinityMapMockup, CompetitivePositioningMockup, IADiagramMockup, TeamPulseManagerViewMockup, TeamPulseWireframesMockup, DesignSystemMockup } from "@/components/mockups/teampulse-extras";

export const metadata = {
  title: "TeamPulse | Case Study",
  description:
    "Designing an employee feedback dashboard from scratch. 0-to-1 product design.",
};

export default function TeamPulseCaseStudy() {
  return (
    <CaseStudyLayout
      title="TeamPulse"
      subtitle="0-to-1, Employee Feedback Dashboard"
      color="#A35139"
      meta={{
        role: "UX/UI Designer (E2E)",
        duration: "5 Weeks",
        tools: "Figma, Notion, Optimal Workshop",
        type: "0-to-1 Product",
        context: "Personal Project",
        date: "2024",
        team: "Solo",
      }}
      prevProject={{ title: "Onboard", href: "/case-study/onboard" }}
      nextProject={{ title: "FocusFlow", href: "/case-study/focusflow" }}
    >
      <CaseSection title="Overview">
        <p>
          HR teams at growing companies run engagement surveys, but the results
          take weeks to process, managers rarely see actionable insights, and
          employees feel unheard. I designed TeamPulse, a pulse survey and
          feedback dashboard that{" "}
          <strong className="text-[var(--foreground)]">
            closes the loop between employee voice and manager action.
          </strong>
        </p>
      </CaseSection>

      <TeamPulseDashboardMockup />

      <CaseSection title="The Problem">
        <p>
          Through desk research and early conversations, three systemic problems
          emerged:
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)]">The data bottleneck</p>
            <p className="text-sm mt-1">HR teams manually export survey data, build charts in slides, and email reports. This takes 2-3 weeks. By then, the data feels stale.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)]">The manager disconnect</p>
            <p className="text-sm mt-1">Managers receive company-wide reports too generic to act on.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)]">The trust deficit</p>
            <p className="text-sm mt-1">Employees fill out surveys and see no change. Participation and honesty drop over time.</p>
          </div>
        </div>

        <PullQuote>
          The problem isn&apos;t collecting feedback. It&apos;s turning it into
          action fast enough for people to feel heard.
        </PullQuote>
      </CaseSection>

      <CaseSection title="Discovery">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          User Research, 8 Participants
        </h3>
        <p>
          I interviewed people across all three roles in the feedback ecosystem:
        </p>
        <div className="mt-4 space-y-3">
          {[
            { role: "HR Director", quote: "I spend two weeks turning survey data into a deck that gets 10 minutes of attention." },
            { role: "Engineering Manager", quote: "I know something's off with my team, but the yearly survey tells me six months too late." },
            { role: "Employee", quote: "I stopped being honest because nothing changes. I just rate everything 4/5 and move on." },
          ].map((item) => (
            <div key={item.role} className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-1">{item.role}</p>
              <p className="text-sm italic text-[var(--foreground)]">&quot;{item.quote}&quot;</p>
            </div>
          ))}
        </div>

        <AffinityMapMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Survey, 27 Professionals
        </h3>
        <div className="grid grid-cols-2 gap-3 my-4">
          <StatCard label="Survey quarterly or less" before="" after="68%" change="Infrequent" />
          <StatCard label="Never saw action from survey" before="" after="74%" change="Broken loop" />
          <StatCard label="Trust anonymity" before="" after="33%" change="Low trust" />
          <StatCard label="Would engage more with action" before="" after="89%" change="Opportunity" />
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Competitive Analysis
        </h3>
        <p>
          I mapped competitors on two axes: complexity and action-orientation.
          Most tools clustered in the &quot;enterprise + data collection&quot;
          quadrant. The opportunity was a simple, action-driven tool for
          mid-size companies.
        </p>

        <CompetitivePositioningMockup />
      </CaseSection>

      <CaseSection title="Define">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Information Architecture
        </h3>
        <p>
          I ran a card sorting exercise with 8 participants. Three categories
          emerged:
        </p>
        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          <span className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white">Understand</span>
          <span className="text-xs text-[var(--text-secondary)] self-center">Dashboards, insights</span>
          <span className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white">Act</span>
          <span className="text-xs text-[var(--text-secondary)] self-center">Action items, recommendations</span>
          <span className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white">Configure</span>
          <span className="text-xs text-[var(--text-secondary)] self-center">Surveys, settings</span>
        </div>
        <p>This shaped the entire navigation.</p>

        <IADiagramMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Design Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { num: "01", title: "Insight over data", desc: "Show what the numbers mean, not just the numbers." },
            { num: "02", title: "Action over analysis", desc: "Every screen should make it clear what to do next." },
            { num: "03", title: "Trust by default", desc: "Anonymity isn't a feature. It's a foundation." },
            { num: "04", title: "Respect people's time", desc: "Short surveys. Scannable dashboards. Auto-generated reports." },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <span className="text-2xl font-bold text-[var(--accent)]/30 font-serif">{item.num}</span>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Design">
        <TeamPulseWireframesMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          The Insight Card, Core Component
        </h3>
        <p>
          The most important component: a reusable block showing category, score
          with trend, AI-generated summary, anonymous quotes, and a &quot;Create
          Action&quot; button. This card appears everywhere: dashboards, email
          reports, Slack notifications.
        </p>

        <GestaltMockup>
          <TeamPulseInsightCardMockup />
          <GestaltTag
            principle="Similarity"
            description="Every insight card follows the same structure: score, trend, summary, quotes. Consistent patterns let managers scan faster."
            top="8%" right="3%"
          />
          <GestaltTag
            principle="Common Region"
            description="Each insight is contained in its own card boundary, grouping related data (score + trend + quotes) as one unit."
            top="55%" left="3%"
          />
        </GestaltMockup>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Manager Team View
        </h3>
        <p>
          Designed for 5 minutes between meetings. Team health score, four
          category cards with one-sentence summaries, and open action items.
          No scrolling for critical info.
        </p>

        <GestaltMockup>
          <TeamPulseManagerViewMockup />
          <GestaltTag
            principle="Hierarchy"
            description="Health score dominates visually, category cards are secondary, action items are tertiary. This guides managers from overview to action."
            top="10%" left="3%"
          />
          <GestaltTag
            principle="Proximity"
            description="Action items are grouped directly below their related insight category, connecting problems to solutions spatially."
            top="60%" right="3%"
          />
        </GestaltMockup>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Employee Survey (Mobile)
        </h3>
        <p>
          Five questions, one at a time. 1-to-5 scale ratings, one open text
          field. Under 90 seconds. The completion screen shows actions taken
          since the last survey, closing the loop.
        </p>

        <TeamPulseSurveyMobileMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Anonymity by Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {[
            "Minimum group size of 5 to prevent identification",
            "No timestamps on responses",
            "Comments shuffled in random order",
            "Shield icon and trust copy on every survey screen",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-[var(--surface)] p-4">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>

        <DesignSystemMockup />
      </CaseSection>

      <CaseSection title="Testing & Iteration">
        <p>
          Tested with 5 participants across all three roles.
        </p>
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-6">
          Key Iterations
        </h3>
        <div className="space-y-3">
          {[
            { title: "Health score needed context", desc: "Added benchmarks like \"7.2, Above company average (6.8)\" with color zones." },
            { title: "Action items needed templates", desc: "Added suggested actions per category. Adoption jumped from 40% to 85%." },
            { title: "Slack notifications redesigned", desc: "Rich Block Kit messages with team score and \"last time your feedback led to...\"" },
            { title: "Added leadership export", desc: "One-click PDF report generator for executive summaries." },
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

      <CaseSection title="Outcome & Learnings">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 my-4">
          <StatCard label="Response rate" before="50-60%" after="80%+" change="Target" />
          <StatCard label="Survey to insight" before="2-3 weeks" after="< 24 hrs" change="-95%" />
          <StatCard label="Manager action rate" before="15-20%" after="60%+" change="+3x" />
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          What I Learned
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Designing for three users is hard, and valuable.",
              desc: "The same data serves HR, managers, and employees differently. The Insight Card pattern solved this.",
            },
            {
              title: "Anonymity is a UX problem.",
              desc: "Trust is designed through visual cues, copy, and structural choices, not just encryption.",
            },
            {
              title: "Marketing background as an asset.",
              desc: "The feedback loop is a conversion funnel: survey → response → insight → action → trust → better responses.",
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
              title: "Co-design with HR professionals from day one.",
              desc: "I validated with interviews, but embedding an HR practitioner as a design partner would have caught edge cases earlier, like compliance requirements and data sensitivity concerns I discovered late.",
            },
            {
              title: "Prototype the Slack integration earlier.",
              desc: "The Slack notification redesign was one of the most impactful iterations. If I had prototyped the integration flow earlier, it would have shaped the core product design differently.",
            },
            {
              title: "Test with larger team sizes.",
              desc: "My testing was with small teams (5-15 people). The anonymity thresholds and aggregation patterns behave differently at 50+ employees. I would validate the design at scale before finalizing the IA.",
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
