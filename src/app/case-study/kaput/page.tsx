import {
  CaseStudyLayout,
  CaseSection,
  PullQuote,
  FigureCaption,
} from "@/components/case-study-layout";
import { GestaltTag, GestaltMockup } from "@/components/gestalt-tag";
import { KaputMapMockup } from "@/components/mockups/kaput-map";
import { IPhoneOverview } from "@/components/mockups/iphone-overview";
import { CaseStudyNav } from "@/components/case-study-nav";

const kaputSections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "discovery", label: "Discovery" },
  { id: "design", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "tools", label: "Tools" },
  { id: "business", label: "Business" },
  { id: "learnings", label: "Learnings" },
  { id: "reflection", label: "Reflection" },
];
import { KaputQuoteComparisonMockup } from "@/components/mockups/kaput-quote";
import { KaputOwnerDashboardMockup, KaputMechanicDashboardMockup } from "@/components/mockups/kaput-dashboards";
import { KaputQuoteFlowMockup, KaputMechanicProfileMockup, KaputChatBookingMockup, KaputWireframesMockup } from "@/components/mockups/kaput-extras";

export const metadata = {
  title: "Kaput | Case Study",
  description:
    "Designing and building a B2C auto service marketplace from scratch.",
};

export default function KaputCaseStudy() {
  return (
    <CaseStudyLayout
      title="Kaput"
      subtitle="B2C Marketplace, Auto Services"
      color="#FFB162"
      meta={{
        role: "UX/UI Designer & Product Owner",
        duration: "Ongoing (MVP)",
        tools: "Figma, Next.js, Firebase, Stripe",
        type: "Live Product",
        context: "Personal Project",
        date: "2024 - Present",
        team: "Kasra Molaei, Pooria Arab, Sara Dehghani",
      }}
      heroScreens={
        <IPhoneOverview
          eyebrow="Project Overview"
          title="A map-first marketplace for car repair."
          summary="Kaput connects Vancouver car owners with trusted local mechanics through real-time maps, guided quoting, Stripe payments, and in-app chat — designed and built end-to-end."
          highlights={[
            { label: "Role", value: "UX/UI Designer & Product Owner" },
            { label: "Type", value: "Live B2C marketplace MVP" },
            { label: "Stack", value: "Figma · Next.js · Firebase · Stripe" },
          ]}
          accent="#FFB162"
          footer="Live product →"
        />
      }
      nextProject={{ title: "Onboard", href: "/case-study/onboard" }}
      prevProject={{ title: "FocusFlow", href: "/case-study/focusflow" }}
    >
      <CaseStudyNav items={kaputSections} />
      <CaseSection id="overview" title="Overview">
        <p>
          Kaput is a map-based marketplace connecting car owners with trusted
          mechanics in Vancouver.{" "}
          <strong className="text-[var(--foreground)]">
            I designed and built the entire product
          </strong>{" "}
          , from initial concept and user flows to a working MVP with real-time
          maps, guided quoting, Stripe payments, and in-app chat.
        </p>
        <p>This isn&apos;t a concept project. It&apos;s a live product.</p>
      </CaseSection>

      <KaputMapMockup />
      <FigureCaption>Fig 1 — Map-first interface showing nearby mechanics with ratings and availability</FigureCaption>

      <CaseSection id="problem" title="The Problem">
        <p>
          Finding a trustworthy mechanic is universally dreaded. The problems
          are systemic on both sides:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 my-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h4 className="mb-3 text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)]">
              Car Owners
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                No pricing transparency
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                No easy way to compare shops
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                Unreliable online reviews
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                Everything requires phone calls
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h4 className="mb-3 text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)]">
              Mechanics
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                Expensive customer acquisition
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                No way to showcase quality work
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                Manual scheduling and invoicing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                Losing to chains with better marketing
              </li>
            </ul>
          </div>
        </div>

        <PullQuote>
          Auto repair is a $300B+ industry that still runs on phone calls and
          hope. Nobody owns the car repair marketplace in Canada.
        </PullQuote>
      </CaseSection>

      <CaseSection id="discovery" title="Discovery">
        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3">
          Market Research
        </h3>
        <p>
          RepairSmith and YourMechanic employ their own mechanics. Different
          model, expensive, limited. AutoGuru (Australia) proved the marketplace
          model works but hasn&apos;t expanded to North America. Yelp and Google
          Reviews have no quoting, booking, or payment.
        </p>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          User Insights
        </h3>
        <p>
          Through conversations with car owners and mechanics in Vancouver:
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <strong className="text-[var(--foreground)]">Car owners want three things:</strong>{" "}
            know the price upfront, compare without phone calls, trust the mechanic is legit.
          </div>
          <div className="rounded-lg border-l-[3px] border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
            <strong className="text-[var(--foreground)]">Mechanics want two things:</strong>{" "}
            steady customer flow and a professional online presence.
          </div>
        </div>
      </CaseSection>

      <CaseSection id="design" title="Design">
        <KaputWireframesMockup />
        <FigureCaption>Fig 2 — Early wireframes exploring map layout, quote flow, and dashboard structures</FigureCaption>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3">
          Map-First Architecture
        </h3>
        <p>
          The most critical design decision: Kaput&apos;s core experience is a
          full-screen map, not a search results list. Car repair is hyper-local.
          A map communicates proximity instantly. &quot;There&apos;s a 4.8-star
          shop three blocks away&quot; is more compelling than a list sorted by
          rating.
        </p>
        <p className="mt-2">
          On mobile, a bottom sheet slides up showing mechanic cards. Users
          browse the list or tap pins. This feels native and fast.
        </p>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          Guided Quote Request
        </h3>
        <p>
          Instead of &quot;describe your problem&quot; (which leads to &quot;my
          car makes a weird noise&quot;), I designed a guided flow:
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {["Select vehicle", "Choose category", "Pick symptoms", "Upload media", "Submit"].map((step, i) => (
            <div key={step} className="text-center">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                {i + 1}
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-tight">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          This gives mechanics structured info for accurate quoting and reduces
          anxiety for car owners who don&apos;t know technical terms.
        </p>

        <GestaltMockup>
          <KaputQuoteFlowMockup />
          <GestaltTag
            principle="Continuity"
            description="The guided 5-step flow creates a clear visual path, leading users naturally from vehicle selection to submission."
            top="12%" right="4%"
          />
          <GestaltTag
            principle="Common Region"
            description="Each step is contained in its own visual region, making it clear where one task ends and the next begins."
            top="55%" left="3%"
          />
        </GestaltMockup>
        <FigureCaption>Fig 3 — Guided 5-step quote request flow replacing free-text problem descriptions</FigureCaption>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          Quote Comparison
        </h3>
        <p>
          When mechanics respond, car owners see side-by-side comparisons:
          itemized breakdown (parts, labor, tax separately), estimated time,
          mechanic rating and distance.
        </p>

        <PullQuote>
          Itemized quotes feel honest. Comparison feels empowering. Together,
          they solve the biggest anxiety: &ldquo;Am I getting ripped off?&rdquo;
        </PullQuote>

        <GestaltMockup>
          <KaputQuoteComparisonMockup />
          <GestaltTag
            principle="Proximity"
            description="Related quote details (parts, labor, tax) are grouped together, making each mechanic's offer scannable at a glance."
            top="10%" left="3%"
          />
          <GestaltTag
            principle="Similarity"
            description="Both quotes use identical card structures so users compare content, not layout. Consistent patterns reduce cognitive load."
            top="10%" right="3%"
          />
        </GestaltMockup>
        <FigureCaption>Fig 4 — Side-by-side quote comparison with itemized breakdown for transparency</FigureCaption>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          Two-Sided Dashboards
        </h3>
        <p>
          Same platform, radically different experiences:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mt-4 mb-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.1em] uppercase text-[var(--foreground)]">Car Owner</h4>
            <p className="text-sm">
              Clean and simple. Active bookings, upcoming appointments, quick
              actions. Priority: &quot;What&apos;s happening with my car?&quot;
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.1em] uppercase text-[var(--foreground)]">Mechanic</h4>
            <p className="text-sm">
              Full command center. Incoming requests, calendar, earnings,
              customer history, reviews. Priority: process requests fast.
            </p>
          </div>
        </div>

        <KaputOwnerDashboardMockup />
        <FigureCaption>Fig 5 — Car owner dashboard with active bookings and upcoming appointments</FigureCaption>
        <KaputMechanicDashboardMockup />
        <FigureCaption>Fig 6 — Mechanic command center with incoming requests, calendar, and earnings</FigureCaption>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          Trust by Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { title: "Verified reviews", desc: "Can only review after a completed booking" },
            { title: "Mechanic portfolios", desc: "Photos of past work as visual proof" },
            { title: "Certification badges", desc: "Verified credentials displayed prominently" },
            { title: "Itemized quotes", desc: "Transparency kills suspicion" },
            { title: "Work approval", desc: "Updated quote required for extra issues. No surprise charges" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg bg-[var(--surface)] p-4">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-3 mt-10">
          Premium Dark Theme
        </h3>
        <p>
          Every auto marketplace uses light themes. Kaput&apos;s dark theme
          signals premium and trust.
          Users looking for mechanics are often stressed, and dark is calmer.
        </p>

        <KaputMechanicProfileMockup />
        <FigureCaption>Fig 7 — Mechanic profile with verified credentials, portfolio, and review history</FigureCaption>
        <KaputChatBookingMockup />
        <FigureCaption>Fig 8 — In-app chat and booking confirmation flow</FigureCaption>
      </CaseSection>

      <CaseSection id="testing" title="Testing & Iteration">
        <p>
          I tested the core flows with 5 car owners and 3 mechanics in Vancouver,
          focusing on quote request completion, quote comparison clarity, and
          mechanic onboarding.
        </p>

        <h3 className="text-base sm:text-lg font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-4 mt-8">
          Key Iterations
        </h3>
        <div className="space-y-4">
          {[
            { title: "Simplified quote request from 7 to 5 steps", desc: "Users abandoned at vehicle details. I merged two steps and added photo upload earlier, reducing completion time by 40%." },
            { title: "Redesigned quote comparison cards", desc: "Users struggled to compare quotes side-by-side. I added itemized breakdowns (parts, labor, tax) and a \"Best Value\" badge. 4/5 testers said they felt confident choosing." },
            { title: "Added real-time mechanic availability", desc: "Car owners wanted to know wait times before requesting quotes. I added availability indicators to map pins and profile cards." },
            { title: "Streamlined mechanic dashboard", desc: "Mechanics found the original dashboard overwhelming. I reduced the default view to incoming requests and today's schedule, moving analytics to a separate tab." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-lg bg-[var(--surface)] p-5">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shrink-0" />
              <div>
                <p className="text-base sm:text-lg font-semibold text-[var(--foreground)]">{item.title}</p>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] mt-1.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="tools" title="Tools & How I Used Them" accent>
        <p className="text-lg text-[var(--foreground)] font-medium">
          This project is unique in my portfolio because I didn&apos;t just design it. I built it.
        </p>
        <p className="mt-3">
          Each tool below played a specific role across research, design, and engineering — here&apos;s how:
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              tool: "Figma",
              stage: "Design",
              use: "Wireframed all flows, built the component library and dark-theme design system, ran clickable prototypes in usability sessions with 5 owners and 3 mechanics.",
            },
            {
              tool: "Miro",
              stage: "Research",
              use: "Mapped user journeys, affinity-grouped interview quotes, and ran competitive teardowns of RepairSmith, AutoGuru, and YourMechanic.",
            },
            {
              tool: "Next.js 14",
              stage: "Build",
              use: "Implemented the production app from my own designs — App Router pages, server components for the map, and shared layouts across the two-sided dashboard.",
            },
            {
              tool: "Tailwind CSS",
              stage: "Build",
              use: "Translated the Figma tokens (color, type, spacing) into a single source of truth so design and code stayed in sync.",
            },
            {
              tool: "Firebase",
              stage: "Build",
              use: "Auth, Firestore for quotes/bookings, and real-time chat. Designing against a real schema kept flows realistic, not aspirational.",
            },
            {
              tool: "Google Maps API",
              stage: "Build",
              use: "Powered the map-first interface — pin clustering, distance calculations, and the bottom-sheet card pattern.",
            },
            {
              tool: "Stripe Connect",
              stage: "Build",
              use: "Two-sided payments: car owners pay through the app, mechanics receive payouts. Shaped the checkout and earnings dashboard UX.",
            },
            {
              tool: "Vercel",
              stage: "Ship",
              use: "Continuous deploys with preview URLs let me share working flows with testers instead of static prototypes.",
            },
          ].map((item) => (
            <div
              key={item.tool}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-[var(--foreground)]">{item.tool}</p>
                <span className="rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                  {item.stage}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {item.use}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          Building what I designed shaped better decisions: I understood
          feasibility constraints, prototyped real interactions, and designed
          with actual data structures in mind.
        </p>
      </CaseSection>

      <CaseSection id="business" title="Business Model">
        <div className="grid gap-3 sm:grid-cols-2 my-4">
          {[
            { label: "Revenue", value: "Mechanic monthly subscription" },
            { label: "Payments", value: "Stripe processing fee" },
            { label: "First Market", value: "Vancouver, BC" },
            { label: "Growth", value: "City by city across Canada" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {item.label}
              </p>
              <p className="font-medium text-[var(--foreground)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="learnings" title="What I Learned">
        <div className="space-y-4">
          {[
            {
              title: "Two-sided marketplaces are exponentially harder.",
              desc: "Every feature must work for both sides. The quote flow needs to be simple for owners but informative for mechanics, and those goals often conflict.",
            },
            {
              title: "Trust is the product, not the features.",
              desc: "A marketplace with better features but less trust loses to one with fewer features but more trust.",
            },
            {
              title: "Map-based UX requires spatial thinking.",
              desc: "Unlike lists, maps communicate density, proximity, and coverage. The bottom sheet pattern provides detail without losing spatial context.",
            },
            {
              title: "Building what you design makes you better.",
              desc: "Understanding Firebase limits, API response times, and Stripe flows made my designs realistic and implementable.",
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

      <CaseSection id="reflection" title="What I'd Do Differently">
        <div className="space-y-4">
          {[
            {
              title: "Start with one side of the marketplace.",
              desc: "Building for both car owners and mechanics simultaneously stretched resources. I would onboard mechanics first with a simple profile tool, then launch the consumer side once supply was established.",
            },
            {
              title: "Test the quoting flow with real mechanics earlier.",
              desc: "I designed the guided quote request based on car owner needs. Getting mechanic feedback sooner would have revealed that some fields were unnecessary and others were missing.",
            },
            {
              title: "Simplify the MVP scope further.",
              desc: "Stripe payments and in-app chat added weeks of work. A first version with just quoting and booking confirmation would have validated the core value faster.",
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
