import { AlertTriangle, TrendingUp, TrendingDown, Minus } from "lucide-react";

export function TeamPulseDashboardMockup() {
  const categories = [
    { name: "Workload", score: 6.8, trend: "down", color: "#ef4444" },
    { name: "Growth", score: 7.5, trend: "up", color: "#22c55e" },
    { name: "Culture", score: 8.1, trend: "up", color: "#22c55e" },
    { name: "Management", score: 7.2, trend: "stable", color: "#f59e0b" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#2F4048] bg-[#1E2A2F] shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2F4048] bg-[#141B1F] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#E5F0EE]">Team<span className="text-[#2EC4B6]">Pulse</span></span>
          <span className="rounded-full bg-[#2EC4B6]/10 px-2 py-0.5 text-[10px] text-[#2EC4B6]">HR Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#7A9A95]">March 2026</span>
          <div className="h-7 w-7 rounded-full bg-[#2EC4B6]/20 flex items-center justify-center text-xs font-medium text-[#2EC4B6]">K</div>
        </div>
      </div>

      <div className="p-5">
        {/* Top row: Health score + Alert */}
        <div className="mb-5 grid gap-4 md:grid-cols-3">
          {/* Health score */}
          <div className="rounded-xl border border-[#2F4048] bg-[#141B1F] p-5 text-center">
            <p className="text-xs text-[#7A9A95]">Overall Health Score</p>
            <div className="my-3 flex items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
                  <path className="stroke-[#2F4048]" strokeWidth="3" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
                  <path className="stroke-[#2EC4B6]" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="74, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
                </svg>
                <span className="absolute text-2xl font-bold text-[#E5F0EE]">7.4</span>
              </div>
            </div>
            <p className="text-xs text-[#22c55e]">+0.3 from last month</p>
          </div>

          {/* Survey status */}
          <div className="rounded-xl border border-[#2F4048] bg-[#141B1F] p-5">
            <p className="mb-3 text-xs text-[#7A9A95]">Active Survey</p>
            <p className="text-sm font-medium text-[#E5F0EE]">Weekly Pulse — Week 9</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-[#2F4048]">
                <div className="h-2 w-[72%] rounded-full bg-[#2EC4B6]" />
              </div>
              <span className="text-xs font-medium text-[#2EC4B6]">72%</span>
            </div>
            <p className="mt-1 text-xs text-[#7A9A95]">187 of 260 responded</p>
            <p className="mt-3 text-xs text-[#7A9A95]">Closes in 2 days</p>
          </div>

          {/* Alert */}
          <div className="rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle size={14} className="text-[#ef4444]" />
              <p className="text-xs font-medium text-[#ef4444]">Attention Needed</p>
            </div>
            <p className="mt-2 text-sm text-[#fca5a5]">Engineering team workload score dropped to 5.2</p>
            <p className="mt-1 text-xs text-[#ef4444]/70">Down 1.8 points in 2 weeks</p>
            <button className="mt-3 rounded-lg bg-[#ef4444] px-3 py-1.5 text-xs font-medium text-white">
              View Team
            </button>
          </div>
        </div>

        {/* Category cards */}
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#7A9A95]">Categories</p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-[#2F4048] bg-[#141B1F] p-4">
              <p className="text-xs text-[#7A9A95]">{cat.name}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#E5F0EE]">{cat.score}</span>
                <span className="text-xs" style={{ color: cat.color }}>
                  {cat.trend === "up" ? <TrendingUp size={12} /> : cat.trend === "down" ? <TrendingDown size={12} /> : <Minus size={12} />}
                </span>
              </div>
              {/* Mini sparkline */}
              <div className="mt-2 flex items-end gap-0.5 h-6">
                {[40, 55, 50, 65, 60, 70, cat.score * 10].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 6 ? cat.color : "#2F4048",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TeamPulseInsightCardMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#2F4048] bg-[#141B1F] p-5 shadow-2xl">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="rounded-full bg-[#ef4444]/10 px-2 py-0.5 text-[10px] font-medium text-[#ef4444]">
            Workload
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#E5F0EE]">5.2</span>
            <span className="flex items-center gap-0.5 text-sm text-[#ef4444]"><TrendingDown size={14} /> 1.8</span>
            <span className="text-xs text-[#7A9A95]">vs last month</span>
          </div>
        </div>
        <span className="rounded-full bg-[#ef4444]/10 px-2 py-0.5 text-[10px] font-medium text-[#ef4444]">
          Below Average (6.8)
        </span>
      </div>

      {/* AI Summary */}
      <div className="rounded-lg bg-[#1E2A2F] border border-[#2F4048] p-3 mb-4">
        <p className="text-xs font-medium text-[#7A9A95] mb-1">AI Summary</p>
        <p className="text-sm text-[#E5F0EE]">
          Engineering team is experiencing burnout signals. Overtime mentions increased 3x.
          Primary concerns: unrealistic deadlines and too many concurrent projects.
        </p>
      </div>

      {/* Anonymous quotes */}
      <div className="space-y-2 mb-4">
        {[
          "I'm working 60-hour weeks and it's not sustainable. We need more headcount or fewer projects.",
          "Every sprint has more tickets than the last but the team size hasn't changed in a year.",
        ].map((quote, i) => (
          <div key={i} className="flex gap-2 rounded-lg bg-[#1E2A2F] p-3">
            <span className="text-[#7A9A95] text-sm">&ldquo;</span>
            <p className="text-xs text-[#E5F0EE] italic">{quote}</p>
          </div>
        ))}
      </div>

      {/* Action button */}
      <button className="w-full rounded-lg bg-[#2EC4B6] py-2.5 text-sm font-medium text-white">
        Create Action Item
      </button>
      <p className="mt-2 text-[10px] text-center text-[#7A9A95]">
        Suggested: Redistribute tasks, extend sprint deadline, cancel non-essential meetings
      </p>
    </div>
  );
}

export function TeamPulseSurveyMobileMockup() {
  return (
    <div className="my-8 mx-auto max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-[#2F4048] bg-[#141B1F] shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#141B1F] px-5 pt-3 pb-1">
          <span className="text-[10px] font-medium text-[#E5F0EE]">9:41</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-[#E5F0EE]" />
            <div className="h-2 w-2 rounded-full bg-[#E5F0EE]" />
            <div className="h-2 w-3 rounded-full bg-[#E5F0EE]" />
          </div>
        </div>

        {/* Survey content */}
        <div className="p-5">
          {/* Progress */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-[#2F4048]">
              <div className="h-1.5 w-[60%] rounded-full bg-[#2EC4B6]" />
            </div>
            <span className="text-[10px] text-[#7A9A95]">3/5</span>
          </div>

          <p className="mb-6 text-sm font-medium text-[#E5F0EE]">
            How manageable is your workload this week?
          </p>

          {/* Rating scale */}
          <div className="flex justify-between mb-8">
            {[
              { value: 1, label: "Overwhelming" },
              { value: 2, label: "Heavy" },
              { value: 3, label: "Okay" },
              { value: 4, label: "Good" },
              { value: 5, label: "Great" },
            ].map((opt, i) => (
              <button
                key={i}
                className={`flex flex-col items-center gap-1 rounded-xl p-2 ${i === 3 ? "bg-[#2EC4B6]/10 ring-2 ring-[#2EC4B6]" : ""}`}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${i === 3 ? "bg-[#2EC4B6] text-white" : "bg-[#1E2A2F] text-[#E5F0EE]"}`}>{opt.value}</span>
                <span className="text-[9px] text-[#7A9A95]">{opt.label}</span>
              </button>
            ))}
          </div>

          <button className="w-full rounded-xl bg-[#2EC4B6] py-3 text-sm font-medium text-white">
            Next
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-center pb-2">
          <div className="h-1 w-24 rounded-full bg-[#7A9A95]" />
        </div>
      </div>
    </div>
  );
}
