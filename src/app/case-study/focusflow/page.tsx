import {
  CaseStudyLayout,
  CaseSection,
  StatCard,
  PullQuote,
} from "@/components/case-study-layout";
import { GestaltTag, GestaltMockup } from "@/components/gestalt-tag";
import { FocusFlowMobileHomeMockup, FocusFlowTimerMockup, FocusFlowWebDashboardMockup } from "@/components/mockups/focusflow-screens";
import { FocusFlowCompetitiveMockup, FocusFlowJourneyMapMockup, FocusFlowDesignSystemMockup } from "@/components/mockups/focusflow-extras";

export const metadata = {
  title: "FocusFlow | Case Study",
  description:
    "Designing a cross-platform productivity app from concept to prototype.",
};

export default function FocusFlowCaseStudy() {
  return (
    <CaseStudyLayout
      title="FocusFlow"
      subtitle="Product Concept, Productivity App"
      color="#C97B4B"
      meta={{
        role: "UX/UI Designer (E2E)",
        duration: "4 Weeks",
        tools: "Figma, Notion, Loom",
        type: "Concept (Mobile + Web)",
      }}
      nextProject={{ title: "Kaput", href: "/case-study/kaput" }}
    >
      <CaseSection title="Overview">
        <p>
          Remote workers lose an average of 2.5 hours per day to context
          switching, unnecessary meetings, and digital distractions. I designed
          FocusFlow, a productivity app that combines{" "}
          <strong className="text-[var(--foreground)]">
            focus session management, calendar integration, and habit tracking
          </strong>{" "}
          to help people reclaim their deep work time.
        </p>
        <p>
          This project showcases cross-platform design thinking, product
          strategy, and the ability to take an idea from zero to testable
          prototype.
        </p>
      </CaseSection>

      <div className="my-8 grid gap-6 md:grid-cols-2 items-start">
        <FocusFlowMobileHomeMockup />
        <GestaltMockup>
          <FocusFlowTimerMockup />
          <GestaltTag
            principle="Figure/Ground"
            description="The circular timer ring commands attention as the figure, while surrounding UI elements recede. One clear focal point."
            top="10%" right="3%"
          />
          <GestaltTag
            principle="Closure"
            description="The progress ring completing its circle creates a powerful sense of accomplishment. Users feel the session 'closing.'"
            top="55%" left="3%"
          />
        </GestaltMockup>
      </div>

      <CaseSection title="The Problem">
        <p>
          The shift to remote work created a paradox: more flexibility but less
          focus. I started with a hypothesis:
        </p>

        <PullQuote>
          The problem isn&apos;t willpower. It&apos;s infrastructure. People
          don&apos;t need another motivation app. They need a tool that works with
          their calendar, protects their time, and makes deep work the default.
        </PullQuote>
      </CaseSection>

      <CaseSection title="Discovery">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Survey, 27 Remote Workers
        </h3>
        <div className="grid grid-cols-2 gap-3 my-4">
          <StatCard label="< 2hrs focus/day" before="" after="81%" change="Widespread" />
          <StatCard label="Meetings = #1 killer" before="" after="63%" change="Not social media" />
          <StatCard label="Tried & quit focus tools" before="" after="44%" change="Retention problem" />
          <StatCard label="Would pay for 2+ hrs" before="" after="70%" change="Market exists" />
        </div>

        <PullQuote>
          The surprising insight: meetings, not social media, were the biggest
          enemy. Any solution needed to work with the calendar, not just block apps.
        </PullQuote>

        <p>
          The retention data was critical. 44% had tried and quit. Top reasons:
          &quot;felt like one more thing to manage&quot; (38%), &quot;didn&apos;t
          integrate with my workflow&quot; (29%).
        </p>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Competitive Analysis
        </h3>
        <p>
          I found a clear gap: distraction blockers (Forest, Freedom) don&apos;t
          know your schedule. Calendar tools (Clockwise, Reclaim) don&apos;t
          help you actually focus. Full suites (Centered) are too complex.
          FocusFlow sits at the intersection of calendar awareness and active
          focus support.
        </p>

        <FocusFlowCompetitiveMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          User Interviews, 5 Remote Workers
        </h3>
        <p>Three patterns emerged:</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;I have focus time on my calendar but I don&apos;t use it.&quot;</p>
            <p className="text-sm mt-1">No accountability, meetings override it.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;My best focus happens by accident.&quot;</p>
            <p className="text-sm mt-1">Cancelled meetings, early mornings. The common thread: absence of interruption.</p>
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium text-[var(--foreground)] italic">&quot;I want permission to focus.&quot;</p>
            <p className="text-sm mt-1">Guilt about going &quot;offline.&quot; A visible status would give social permission.</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--surface)] p-5">
          <p className="font-medium text-[var(--foreground)]">
            FocusFlow needed to: <strong>find</strong> focus time (calendar), <strong>protect</strong> it (DND + status),
            and <strong>prove</strong> it (tracking + reporting).
          </p>
        </div>
      </CaseSection>

      <CaseSection title="Define">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Journey Map, A Day in the Life
        </h3>
        <p>
          I mapped a developer&apos;s typical workday. Out of 4 morning hours,
          only 65 minutes were actual focus time, and most of that was
          low-quality with interruption anxiety.
        </p>

        <FocusFlowJourneyMapMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Feature Prioritization (MoSCoW)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { priority: "Must", color: "bg-[var(--accent)]", items: "Focus timer, calendar integration, session history, DND mode, mobile + web" },
            { priority: "Should", color: "bg-[var(--accent)]/70", items: "Slack status sync, smart suggestions, daily goals, streaks" },
            { priority: "Could", color: "bg-[var(--accent)]/40", items: "Ambient sounds, team dashboard, meeting audit" },
            { priority: "Won't (v1)", color: "bg-[var(--border)]", items: "App blocking, video integration, project tracking" },
          ].map((item) => (
            <div key={item.priority} className="flex items-start gap-3 rounded-lg bg-[var(--surface)] p-4">
              <span className={`mt-1 h-3 w-3 rounded-sm ${item.color} shrink-0`} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">{item.priority}</p>
                <p className="text-sm mt-1">{item.items}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-lg bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--foreground)]">
          Key constraint: v1 should take under 30 seconds to start a focus session.
        </p>
      </CaseSection>

      <CaseSection title="Design">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Cross-Platform Strategy
        </h3>
        <p>
          I designed <strong className="text-[var(--foreground)]">context-first</strong>, not
          platform-first.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mt-4 mb-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.1em] uppercase text-[var(--foreground)]">Mobile</h4>
            <p className="text-sm">Starting and tracking. A focus companion at your desk.</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.1em] uppercase text-[var(--foreground)]">Web</h4>
            <p className="text-sm">Planning and reviewing. The full picture with analytics and calendar management.</p>
          </div>
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          The Timer Ring
        </h3>
        <p>
          The centerpiece component. A circular progress ring that fills
          clockwise, pulses gently, changes color at milestones, and celebrates
          completion with a bloom animation. I tested three timer styles:
          numbers only, linear bar, circular ring. The ring won every time.
        </p>

        <GestaltMockup>
          <FocusFlowWebDashboardMockup />
          <GestaltTag
            principle="Hierarchy"
            description="Analytics and calendar use size, weight, and position to guide the eye from daily schedule to weekly insights to suggestions."
            top="8%" left="3%"
          />
          <GestaltTag
            principle="Proximity"
            description="Related controls (timer + session info) and related data (charts + stats) are spatially grouped to reduce scanning effort."
            top="45%" right="3%"
          />
        </GestaltMockup>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Smart Suggestions
        </h3>
        <p>
          When you connect your calendar, FocusFlow highlights gaps: &quot;You
          have a 2-hour gap Wednesday. Block for focus?&quot; One tap creates a
          focus block and calendar event.
        </p>

        <FocusFlowDesignSystemMockup />
      </CaseSection>

      <CaseSection title="Testing & Iteration">
        <p>Tested with 5 remote workers on both mobile and web.</p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 my-6">
          <StatCard label="Session start time" before="—" after="< 10 sec" change="5/5 testers" />
          <StatCard label="Session completion" before="—" after="80%" change="4/5 testers" />
          <StatCard label="Would use both platforms" before="—" after="60%" change="3/5 testers" />
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-6">
          Key Iterations
        </h3>
        <div className="space-y-3">
          {[
            { title: "Added iOS widget", desc: "Quick-start buttons on the home screen. Most sessions would start without opening the app." },
            { title: "Redesigned streaks to \"Focus Score\"", desc: "Rolling weekly score that rewards consistency without punishing single missed days." },
            { title: "Added \"Allow urgent contacts\"", desc: "Designate 2-3 people whose messages break through DND." },
            { title: "Weekly email summary", desc: "Shareable focus data to justify protecting focus time with managers." },
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

      <CaseSection title="Go-to-Market Thinking" accent>
        <p>
          To demonstrate product awareness, I outlined a launch strategy:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { label: "Positioning", value: "\"The first focus tool that works with your calendar, not against it.\"" },
            { label: "Pricing", value: "Free (3 sessions/day) → Pro $6/mo (unlimited) → Team $4/user/mo" },
            { label: "Integration play", value: "/focus command in Slack, widget in Notion, ticket linking in Linear" },
            { label: "Launch", value: "Product Hunt + developer communities + productivity newsletters" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {item.label}
              </p>
              <p className="text-sm font-medium text-[var(--foreground)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Outcome & Learnings">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Deliverables
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {["29 screens", "2 prototypes", "3-min Loom demo", "Full design system"].map((d) => (
            <span key={d} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
              {d}
            </span>
          ))}
        </div>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          What I Learned
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Context-first beats platform-first.",
              desc: "Designing for \"how will this be used?\" leads to better decisions than \"what device is this for?\"",
            },
            {
              title: "Productivity tools must disappear.",
              desc: "Every second in the app is a second not working. Simplicity is the product.",
            },
            {
              title: "Product thinking elevates UX.",
              desc: "Including GTM strategy and pricing shows I think beyond screens.",
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
    </CaseStudyLayout>
  );
}
