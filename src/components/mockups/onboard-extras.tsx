export function CompetitiveAuditMockup() {
  const competitors = [
    { name: "Asana", steps: 5, personalization: "Role + team size", template: true, progress: true, score: 7.5 },
    { name: "Monday.com", steps: 4, personalization: "Use case", template: true, progress: true, score: 8.0 },
    { name: "ClickUp", steps: 7, personalization: "Features", template: true, progress: false, score: 5.5 },
    { name: "Notion", steps: 2, personalization: "Minimal", template: false, progress: false, score: 6.0 },
    { name: "Linear", steps: 3, personalization: "Role-based", template: false, progress: true, score: 7.0 },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Competitive Audit</p>
        <p className="text-sm font-semibold text-[#1B2632]">Onboarding Flow Comparison</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#d5cfc5] bg-[#E5DFD3]">
              <th className="px-4 py-2.5 text-left font-medium text-[#8a8275]">Tool</th>
              <th className="px-4 py-2.5 text-center font-medium text-[#8a8275]">Steps</th>
              <th className="px-4 py-2.5 text-left font-medium text-[#8a8275]">Personalization</th>
              <th className="px-4 py-2.5 text-center font-medium text-[#8a8275]">Templates</th>
              <th className="px-4 py-2.5 text-center font-medium text-[#8a8275]">Progress</th>
              <th className="px-4 py-2.5 text-center font-medium text-[#8a8275]">Score</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr key={i} className="border-b border-[#E5DFD3]">
                <td className="px-4 py-2.5 font-medium text-[#1B2632]">{c.name}</td>
                <td className="px-4 py-2.5 text-center text-[#8a8275]">{c.steps}</td>
                <td className="px-4 py-2.5 text-[#8a8275]">{c.personalization}</td>
                <td className="px-4 py-2.5 text-center">{c.template ? <span className="text-[#22c55e]">Yes</span> : <span className="text-[#ef4444]">No</span>}</td>
                <td className="px-4 py-2.5 text-center">{c.progress ? <span className="text-[#22c55e]">Yes</span> : <span className="text-[#ef4444]">No</span>}</td>
                <td className="px-4 py-2.5 text-center">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${c.score >= 7.5 ? "bg-[#22c55e]/10 text-[#22c55e]" : c.score >= 6.5 ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#ef4444]/10 text-[#ef4444]"}`}>
                    {c.score}/10
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#E5DFD3] px-5 py-3">
        <p className="text-[10px] text-[#8a8275]">Key insight: Best onboarding flows personalize early, show value in 3 clicks, and teach inside the real product.</p>
      </div>
    </div>
  );
}

export function FunnelAnalysisMockup() {
  const steps = [
    { name: "Signup", users: "10,000", pct: 100, dropoff: null },
    { name: "Profile Setup", users: "7,200", pct: 72, dropoff: "28%" },
    { name: "Feature Tour", users: "5,400", pct: 54, dropoff: "18%" },
    { name: "Empty Dashboard", users: "3,510", pct: 35, dropoff: "35%" },
    { name: "Invite Team", users: "2,070", pct: 21, dropoff: "41%" },
    { name: "First Project", users: "1,600", pct: 16, dropoff: "23%" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#ef4444] uppercase tracking-wider">Analytics</p>
        <p className="text-sm font-semibold text-[#1B2632]">Current Onboarding Funnel — Drop-off Analysis</p>
      </div>
      <div className="p-5 space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-28 text-xs text-[#8a8275] truncate">{step.name}</span>
            <div className="flex-1 h-7 bg-[#d5cfc5] rounded-md overflow-hidden relative">
              <div
                className={`h-full rounded-md ${i <= 1 ? "bg-[#FFB162]" : i <= 3 ? "bg-[#f59e0b]" : "bg-[#ef4444]"}`}
                style={{ width: `${step.pct}%` }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-[#2C3B4D]">
                {step.users}
              </span>
            </div>
            <span className="w-10 text-xs text-right text-[#8a8275]">{step.pct}%</span>
            {step.dropoff && (
              <span className="w-12 rounded-full bg-[#fef2f2] px-1.5 py-0.5 text-center text-[10px] font-medium text-[#ef4444]">
                -{step.dropoff}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="bg-[#fef2f2] px-5 py-3 border-t border-[#fecaca]">
        <p className="text-[10px] text-[#dc2626] font-medium">Critical drop-offs: Profile Setup (28%), Empty Dashboard (35%), Forced Team Invite (41%)</p>
      </div>
    </div>
  );
}

export function JourneyMapMockup() {
  const stages = [
    { stage: "Signup", emotion: 90, thought: "This looks promising!", pain: null, label: "High" },
    { stage: "Profile Form", emotion: 55, thought: "Why do they need all this?", pain: "Too many fields", label: "Mixed" },
    { stage: "Feature Tour", emotion: 40, thought: "This is overwhelming", pain: "Info overload", label: "Low" },
    { stage: "Empty Dashboard", emotion: 25, thought: "Now what?", pain: "No guidance", label: "Low" },
    { stage: "Invite Modal", emotion: 15, thought: "I haven't even tried it", pain: "Forced action", label: "Poor" },
    { stage: "Abandonment", emotion: 5, thought: "I'll come back later", pain: "They don't", label: "Drop" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Journey Map</p>
        <p className="text-sm font-semibold text-[#1B2632]">Current Onboarding — Emotional Journey</p>
      </div>
      <div className="p-5">
        {/* Emotion curve */}
        <div className="relative mb-4 h-32">
          <svg viewBox="0 0 600 120" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="emotionGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <path
              d={`M 0,${120 - stages[0].emotion * 1.1} ${stages.map((s, i) => `L ${i * 120},${120 - s.emotion * 1.1}`).join(" ")}`}
              fill="none"
              stroke="url(#emotionGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {stages.map((s, i) => (
              <circle
                key={i}
                cx={i * 120}
                cy={120 - s.emotion * 1.1}
                r="5"
                fill="#EEE9DF"
                stroke={s.emotion > 60 ? "#22c55e" : s.emotion > 30 ? "#f59e0b" : "#ef4444"}
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>

        {/* Stage cards */}
        <div className="grid grid-cols-6 gap-2">
          {stages.map((s, i) => (
            <div key={i} className="text-center">
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${s.emotion >= 70 ? "bg-[#22c55e]/15 text-[#22c55e]" : s.emotion >= 40 ? "bg-[#f59e0b]/15 text-[#f59e0b]" : "bg-[#ef4444]/15 text-[#ef4444]"}`}>{s.label}</span>
              <p className="mt-1 text-[10px] font-medium text-[#1B2632]">{s.stage}</p>
              <p className="mt-0.5 text-[9px] text-[#8a8275] italic">&ldquo;{s.thought}&rdquo;</p>
              {s.pain && (
                <span className="mt-1 inline-block rounded-full bg-[#fef2f2] px-1.5 py-0.5 text-[8px] text-[#ef4444]">
                  {s.pain}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WireframesMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#E5DFD3] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#EEE9DF] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Wireframes</p>
        <p className="text-sm font-semibold text-[#1B2632]">New Onboarding Flow — 5 Steps</p>
      </div>
      <div className="grid grid-cols-5 gap-3 p-5">
        {[
          { step: "1", title: "Welcome", elements: ["Logo", "\"Hi! What's your name?\"", "[Name input]", "[Continue btn]"] },
          { step: "2", title: "Use Case", elements: ["\"What brings you here?\"", "[Card: Projects]", "[Card: Sprints]", "[Card: Tasks]"] },
          { step: "3", title: "Template", elements: ["\"Pick a template\"", "[Preview 1]", "[Preview 2]", "[Preview 3]"] },
          { step: "4", title: "Tutorial", elements: ["[Real project view]", "[Tooltip: Create task]", "[Highlight area]", "[Progress 1/3]"] },
          { step: "5", title: "Done!", elements: ["[Confetti]", "\"You're ready!\"", "[Invite team]", "[Go to dashboard]"] },
        ].map((screen, i) => (
          <div key={i} className="rounded-lg border border-[#C9C1B1] bg-[#EEE9DF] p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFB162] text-[9px] font-bold text-[#1B2632]">{screen.step}</span>
              <span className="text-[10px] font-medium text-[#1B2632]">{screen.title}</span>
            </div>
            <div className="space-y-1.5">
              {screen.elements.map((el, j) => (
                <div key={j} className={`rounded px-1.5 py-1 text-[8px] ${el.startsWith("[") ? "bg-[#d5cfc5] text-[#8a8275] border border-dashed border-[#C9C1B1]" : "text-[#8a8275]"}`}>
                  {el}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UsabilityResultsMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#22c55e] uppercase tracking-wider">Usability Testing</p>
        <p className="text-sm font-semibold text-[#1B2632]">Test Results — 5 Participants</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Task Completion", value: "96%", color: "#22c55e" },
            { label: "Avg. Time", value: "3.5 min", color: "#FFB162" },
            { label: "SUS Score", value: "82/100", color: "#A35139" },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-[#d5cfc5] p-4 text-center">
              <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-[10px] text-[#8a8275] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { task: "Complete onboarding", success: 5, total: 5, avgTime: "2:12" },
            { task: "Create first project", success: 5, total: 5, avgTime: "0:38" },
            { task: "Invite a teammate", success: 4, total: 5, avgTime: "0:45" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-[#E5DFD3] px-4 py-2.5">
              <span className="text-xs text-[#2C3B4D]">{t.task}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#8a8275]">{t.avgTime}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${t.success === t.total ? "bg-[#22c55e]/10 text-[#22c55e]" : "bg-[#f59e0b]/10 text-[#f59e0b]"}`}>
                  {t.success}/{t.total} passed
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-[#FFB162]/10 border border-[#FFB162]/30 p-3">
          <p className="text-[10px] text-[#A35139] font-medium">3 iterations made based on findings: animated template previews, cursor-following tooltips, &quot;I&apos;ll do this later&quot; replacing &quot;Skip&quot;</p>
        </div>
      </div>
    </div>
  );
}
