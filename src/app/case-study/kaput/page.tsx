import {
  CaseStudyLayout,
  CaseSection,
  PullQuote,
} from "@/components/case-study-layout";
import { GestaltTag, GestaltMockup } from "@/components/gestalt-tag";
import { KaputMapMockup } from "@/components/mockups/kaput-map";
import { KaputQuoteComparisonMockup } from "@/components/mockups/kaput-quote";
import { KaputOwnerDashboardMockup, KaputMechanicDashboardMockup } from "@/components/mockups/kaput-dashboards";
import { KaputQuoteFlowMockup, KaputMechanicProfileMockup, KaputChatBookingMockup } from "@/components/mockups/kaput-extras";

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
      }}
      nextProject={{ title: "Onboard", href: "/case-study/onboard" }}
    >
      <CaseSection title="Overview">
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

      <CaseSection title="The Problem">
        <p>
          Finding a trustworthy mechanic is universally dreaded. The problems
          are systemic on both sides:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 my-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h4 className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)]">
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
            <h4 className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)]">
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

      <CaseSection title="Discovery">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
          Market Research
        </h3>
        <p>
          RepairSmith and YourMechanic employ their own mechanics. Different
          model, expensive, limited. AutoGuru (Australia) proved the marketplace
          model works but hasn&apos;t expanded to North America. Yelp and Google
          Reviews have no quoting, booking, or payment.
        </p>

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
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

      <CaseSection title="Design">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
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

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
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

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
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

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
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
        <KaputMechanicDashboardMockup />

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
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

        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] mb-3 mt-10">
          Premium Dark Theme
        </h3>
        <p>
          Every auto marketplace uses light themes. Kaput&apos;s dark theme
          signals premium and trust.
          Users looking for mechanics are often stressed, and dark is calmer.
        </p>

        <KaputMechanicProfileMockup />
        <KaputChatBookingMockup />
      </CaseSection>

      <CaseSection title="Technical Implementation" accent>
        <p className="text-lg text-[var(--foreground)] font-medium">
          This project is unique in my portfolio because I didn&apos;t just design it. I built it.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Next.js 14", "Tailwind CSS", "Firebase", "Google Maps API", "Stripe Connect", "Vercel"].map((tech) => (
            <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4">
          This technical involvement shaped better design decisions: I
          understood feasibility constraints, prototyped real interactions, and
          designed with actual data structures in mind.
        </p>
      </CaseSection>

      <CaseSection title="Business Model">
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

      <CaseSection title="What I Learned">
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
    </CaseStudyLayout>
  );
}
