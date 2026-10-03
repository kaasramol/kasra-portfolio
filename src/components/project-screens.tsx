import { BrowserFrame } from "./project-card";
import {
  MapPin,
  Star,
  Search,
  TrendingDown,
  Clock,
  Car,
  ArrowDown,
  CheckCircle,
  Loader2,
  Circle,
  Sparkles,
  BellOff,
} from "lucide-react";

/* ── Kaput ── */
export function KaputQuoteBattle() {
  const quotes = [
    { rank: 1, name: "Pacific Auto Care", initials: "PA", color: "#3b82f6", rating: "4.9", price: "$312", eta: "25 min", dropped: true },
    { rank: 2, name: "East Van Motors", initials: "EV", color: "#2EC4B6", rating: "4.7", price: "$340", eta: "40 min", dropped: false },
    { rank: 3, name: "Grandview Garage", initials: "GG", color: "#f5b041", rating: "4.8", price: "$355", eta: "1 hr", dropped: false },
  ];

  return (
    <BrowserFrame url="kaput.app/live-quotes">
      <div className="h-[260px] bg-[#0a0c11] p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car size={13} className="text-[#6b7688]" />
            <span className="text-[10px] font-semibold text-[#e8ecf2]">Brake Repair · Live Quotes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-full bg-[#ef4444]/10 px-2 py-0.5 text-[7px] font-semibold text-[#f87171]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f87171]" /> LIVE
            </span>
            <span className="flex items-center gap-1 text-[8px] font-medium text-[#8c96a8]">
              <Clock size={9} /> 00:42
            </span>
          </div>
        </div>
        <div className="space-y-2">
          {quotes.map((q) => (
            <div
              key={q.rank}
              className={`flex items-center gap-3 rounded-xl border p-2.5 ${q.rank === 1 ? "border-[#3b82f6]/50 bg-[#3b82f6]/[0.08]" : "border-[#1d2330] bg-[#11151e]"}`}
            >
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${q.rank === 1 ? "bg-[#3b82f6] text-white" : "border border-[#2a3242] text-[#6b7688]"}`}>
                {q.rank}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
                style={{ backgroundColor: q.color }}
              >
                {q.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-medium text-[#e8ecf2]">{q.name}</p>
                <div className="flex items-center gap-1">
                  <Star size={7} className="fill-[#f5b041] text-[#f5b041]" />
                  <span className="text-[7px] text-[#8c96a8]">{q.rating} · {q.eta}</span>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm font-bold text-[#f3f5f8]">{q.price}</p>
                {q.dropped && (
                  <span className="flex items-center justify-end gap-0.5 text-[7px] font-medium text-[#4ade80]">
                    <ArrowDown size={7} /> just dropped
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function KaputMap() {
  return (
    <BrowserFrame url="kaput.app/explore">
      <div className="flex h-[260px]">
        {/* Map */}
        <div className="relative flex-1 overflow-hidden bg-[#0b0f17]">
          {/* Aerial color texture — parks, water, built-up areas */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 42% at 16% 18%, rgba(76,124,69,0.3), transparent 70%)," +
                "radial-gradient(ellipse 48% 58% at 85% 78%, rgba(55,95,122,0.26), transparent 72%)," +
                "radial-gradient(ellipse 62% 46% at 58% 10%, rgba(42,48,66,0.4), transparent 75%)," +
                "radial-gradient(ellipse 50% 60% at 10% 85%, rgba(38,43,58,0.35), transparent 70%)," +
                "radial-gradient(ellipse 40% 36% at 92% 15%, rgba(76,124,69,0.16), transparent 70%)",
            }}
          />
          {/* Roads — gently angled, not a perfect grid */}
          <div className="absolute h-[2px] w-[150%] bg-[#2c3650]/70" style={{ top: "40%", left: "-25%", transform: "rotate(-7deg)" }} />
          <div className="absolute h-[2px] w-[140%] bg-[#2c3650]/45" style={{ top: "16%", left: "-15%", transform: "rotate(9deg)" }} />
          <div className="absolute w-[2px] h-[150%] bg-[#2c3650]/60" style={{ left: "44%", top: "-25%", transform: "rotate(6deg)" }} />
          <div className="absolute w-[2px] h-[130%] bg-[#2c3650]/35" style={{ left: "72%", top: "-15%", transform: "rotate(-8deg)" }} />
          <div className="absolute h-px w-[120%] bg-[#2c3650]/30" style={{ top: "68%", left: "-10%", transform: "rotate(4deg)" }} />

          <span className="absolute top-[29%] left-[7%] text-[7px] tracking-wide text-[#6b7793]">W BROADWAY</span>
          <span className="absolute top-[46%] left-[38%] text-[7px] tracking-wide text-[#6b7793]">COMMERCIAL DR</span>

          {/* Pins */}
          <div className="absolute top-[35%] left-[45%] flex h-7 w-7 items-center justify-center rounded-full bg-[#3b82f6] shadow-[0_4px_14px_rgba(59,130,246,0.5)] ring-[5px] ring-[#3b82f6]/20">
            <MapPin size={14} className="text-white" strokeWidth={2.5} />
          </div>
          {[
            { top: "55%", left: "65%" },
            { top: "25%", left: "72%" },
            { top: "50%", left: "28%" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-[#2a3242] bg-[#191e2a] shadow-sm"
              style={{ top: p.top, left: p.left }}
            >
              <MapPin size={8} className="text-[#6b7688]" />
            </div>
          ))}
          {/* You are here */}
          <div className="absolute top-[48%] left-[48%] h-2.5 w-2.5 rounded-full bg-[#22c55e] ring-[3px] ring-[#22c55e]/25" />

          {/* Search bar overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center gap-2 rounded-full border border-[#242b38] bg-[#11151e]/90 px-3.5 py-2 shadow-lg backdrop-blur-sm">
            <Search size={12} className="text-[#6b7688]" />
            <span className="text-[9px] text-[#8c96a8]">Search mechanics near Vancouver, BC</span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden w-[150px] border-l border-[#1d2330] bg-[#0a0c11] sm:block">
          <div className="border-b border-[#1d2330] px-3 py-2.5">
            <span className="text-[8px] font-semibold tracking-wide text-[#6b7688]">5 NEARBY</span>
          </div>
          {[
            { name: "Pacific Auto Care", rating: "4.9", reviews: "127", active: true },
            { name: "East Van Motors", rating: "4.7", reviews: "89", active: false },
            { name: "Grandview Garage", rating: "4.8", reviews: "203", active: false },
          ].map((m) => (
            <div
              key={m.name}
              className={`border-b border-[#1d2330] px-3 py-2.5 ${m.active ? "border-l-2 border-l-[#3b82f6] bg-[#3b82f6]/[0.06]" : "border-l-2 border-l-transparent"}`}
            >
              <p className="text-[9px] font-medium text-[#e8ecf2]">{m.name}</p>
              <div className="mt-1 flex items-center gap-1">
                <Star size={8} className="fill-[#f5b041] text-[#f5b041]" />
                <span className="text-[8px] font-medium text-[#e8ecf2]">{m.rating}</span>
                <span className="text-[8px] text-[#5b6577]">({m.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function KaputScreens() {
  return (
    <div className="space-y-4">
      <KaputQuoteBattle />
      <div className="ml-10 md:ml-20">
        <KaputMap />
      </div>
    </div>
  );
}

/* ── Onboard ── */
export function OnboardChecklist() {
  const steps: { label: string; status: "done" | "active" | "pending" }[] = [
    { label: "Connect your calendar", status: "done" },
    { label: "Invite your team", status: "done" },
    { label: "Import existing tasks", status: "active" },
    { label: "Set notification preferences", status: "pending" },
    { label: "Customize your dashboard", status: "pending" },
  ];

  return (
    <BrowserFrame url="taskly.app/setup">
      <div className="h-[260px] bg-white p-5">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#1B2632]">Setting up your workspace</p>
          <span className="rounded-full bg-[#1B2632]/5 px-2 py-0.5 text-[8px] font-medium text-[#1B2632]">2:14 elapsed</span>
        </div>
        <p className="mb-4 text-[9px] text-[#8a8275]">
          avg. setup time: <span className="line-through">12 min</span>{" "}
          <span className="font-medium text-[#22c55e]">· you&apos;re 4x faster</span>
        </p>

        <div className="mb-4 flex gap-1">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                s.status === "done" ? "bg-[#22c55e]" : s.status === "active" ? "animate-pulse bg-[#1B2632]" : "bg-[#e8e3d9]"
              }`}
            />
          ))}
        </div>

        <div className="space-y-2.5">
          {steps.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              {s.status === "done" && <CheckCircle size={14} className="shrink-0 text-[#22c55e]" />}
              {s.status === "active" && <Loader2 size={14} className="shrink-0 animate-spin text-[#1B2632]" />}
              {s.status === "pending" && <Circle size={14} className="shrink-0 text-[#d5cfc5]" />}
              <span
                className={`text-[10px] ${
                  s.status === "done"
                    ? "text-[#8a8275] line-through"
                    : s.status === "active"
                    ? "font-medium text-[#1B2632]"
                    : "text-[#8a8275]"
                }`}
              >
                {s.label}
              </span>
              {s.status === "active" && <span className="text-[8px] text-[#8a8275]">in progress…</span>}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function OnboardCompare() {
  return (
    <BrowserFrame url="taskly.app/dashboard">
      <div className="grid grid-cols-2 divide-x divide-[#e8e3d9]">
        <div className="p-4">
          <p className="mb-2 text-[9px] font-medium text-[#ef4444]">Before — 12 min</p>
          {["Name", "Email", "Role", "Company", "Size"].map((f) => (
            <div key={f} className="mb-1 rounded border border-[#e8e3d9] px-2 py-1 text-[8px] text-[#C9C1B1]">{f}</div>
          ))}
        </div>
        <div className="p-4">
          <p className="mb-2 text-[9px] font-medium text-[#22c55e]">After — Under 4 min</p>
          <div className="mb-1.5 rounded-lg border-2 border-[#1B2632] bg-[#1B2632]/5 px-2 py-1.5 text-[8px] text-[#1B2632] font-medium">Manage Projects</div>
          <div className="mb-1.5 rounded-lg border border-[#e8e3d9] px-2 py-1.5 text-[8px] text-[#8a8275]">Run Sprints</div>
          <p className="mt-2 text-[8px] text-[#22c55e] font-medium">40% less drop-off</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function OnboardScreens() {
  return (
    <div className="space-y-4">
      <OnboardChecklist />
      <div className="ml-10 md:ml-20">
        <OnboardCompare />
      </div>
    </div>
  );
}

/* ── TeamPulse ── */
export function TeamPulseInsight() {
  const points: [number, number][] = [
    [0, 50],
    [56, 45],
    [112, 40],
    [168, 28],
    [224, 18],
    [280, 8],
  ];
  const linePath =
    "M0,50 C28,48 28,45 56,45 C84,45 84,40 112,40 C140,40 140,30 168,28 C196,26 196,20 224,18 C252,16 252,10 280,8";
  const areaPath = `${linePath} L280,64 L0,64 Z`;

  return (
    <BrowserFrame url="teampulse.io/insights">
      <div className="h-[260px] bg-[#10171a] p-4">
        <div className="mb-2 flex items-center gap-1.5">
          <Sparkles size={11} className="text-[#2EC4B6]" />
          <span className="text-[8px] font-semibold tracking-wide text-[#2EC4B6] uppercase">AI Insight · 94% confidence</span>
        </div>
        <p className="mb-1 text-[11px] font-semibold leading-snug text-[#EAF3F1]">Engineering workload trending up</p>
        <p className="mb-3 text-[8px] text-[#6b8a85]">+18% over the last 3 weeks</p>

        <svg viewBox="0 0 280 64" className="mb-1 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tpInsightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2EC4B6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#tpInsightGrad)" />
          <path d={linePath} fill="none" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" />
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#2EC4B6" />
          ))}
        </svg>
        <div className="mb-3 flex justify-between text-[7px] text-[#6b8a85]">
          <span>W1</span>
          <span>W2</span>
          <span>W3</span>
          <span>W4</span>
          <span>W5</span>
          <span>W6</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-[#1c282b] bg-[#161f22] p-2.5">
          <p className="flex-1 text-[8px] font-medium text-[#d4ddda]">Redistribute 2 sprint tasks to Design team</p>
          <span className="shrink-0 rounded-full bg-[#2EC4B6] px-2.5 py-1 text-[7px] font-semibold text-[#0a1210]">Apply</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TeamPulseDashboard() {
  return (
    <BrowserFrame url="teampulse.io/dashboard">
      <div className="h-[260px] bg-[#10171a] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-[#EAF3F1]">Team<span className="text-[#2EC4B6]">Pulse</span></span>
          <span className="rounded-full border border-[#223034] px-2 py-0.5 text-[8px] font-medium text-[#7A9A95]">HR Admin</span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2.5">
          {/* Health score */}
          <div className="rounded-xl border border-[#1c282b] bg-[#161f22] p-3">
            <p className="text-[7px] font-medium tracking-wide text-[#6b8a85] uppercase">Health Score</p>
            <p className="mt-1 text-2xl font-bold text-[#EAF3F1]">7.4</p>
            <p className="text-[8px] font-medium text-[#2EC4B6]">+0.3 this month</p>
          </div>
          {/* Response rate */}
          <div className="rounded-xl border border-[#1c282b] bg-[#161f22] p-3">
            <p className="text-[7px] font-medium tracking-wide text-[#6b8a85] uppercase">Response Rate</p>
            <p className="mt-1 text-2xl font-bold text-[#EAF3F1]">72%</p>
            <p className="text-[8px] text-[#6b8a85]">187 of 260</p>
          </div>
          {/* Alert */}
          <div className="rounded-xl border border-[#3a2222] bg-[#1f1517] p-3">
            <div className="flex items-center gap-1">
              <TrendingDown size={9} className="text-[#e5796b]" />
              <p className="text-[7px] font-semibold tracking-wide text-[#e5796b] uppercase">Needs Attention</p>
            </div>
            <p className="mt-1.5 text-[9px] leading-snug text-[#d4bcb8]">Eng. workload dropped to 5.2</p>
          </div>
        </div>
        {/* Category bars */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: "Workload", score: 6.8, risk: true },
            { name: "Growth", score: 7.5 },
            { name: "Culture", score: 8.1 },
            { name: "Mgmt", score: 7.2 },
          ].map((c) => (
            <div key={c.name} className="rounded-lg border border-[#1c282b] bg-[#161f22] p-2">
              <p className="text-[7px] text-[#6b8a85]">{c.name}</p>
              <p className="text-sm font-bold text-[#EAF3F1]">{c.score}</p>
              <div className="mt-1.5 h-1 rounded-full bg-[#223034]">
                <div
                  className={`h-1 rounded-full ${c.risk ? "bg-[#e5796b]" : "bg-[#2EC4B6]"}`}
                  style={{ width: `${c.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TeamPulseScreens() {
  return (
    <div className="space-y-4">
      <TeamPulseInsight />
      <div className="ml-10 md:ml-20">
        <TeamPulseDashboard />
      </div>
    </div>
  );
}

/* ── FocusFlow ── */
export function FocusFlowTimeline() {
  const blocks = [
    { time: "9:00", label: "Standup", dur: "30m", type: "meeting" as const },
    { time: "9:30", label: "Deep Work", dur: "90m", type: "focus" as const, now: true },
    { time: "11:00", label: "Design Review", dur: "30m", type: "meeting" as const },
    { time: "11:30", label: "Deep Work", dur: "60m", type: "focus" as const },
  ];

  return (
    <BrowserFrame url="focusflow.app/today">
      <div className="h-[260px] bg-[#FAFBFC] p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-[#1C1A2E]">Today</p>
          <span className="rounded-full bg-[#1C1A2E] px-2 py-0.5 text-[8px] font-medium text-white">10:42 AM</span>
        </div>
        <div className="mb-3 flex w-fit items-center gap-1.5 rounded-full border border-[#E7E6F0] bg-white px-2.5 py-1 shadow-sm">
          <BellOff size={10} className="text-[#5B57E0]" />
          <span className="text-[8px] text-[#6B7094]">Synced with Slack — DND until 11:30</span>
        </div>
        <div className="relative pl-4">
          <div className="absolute top-1 bottom-1 left-[5px] w-px bg-[#E7E6F0]" />
          <div className="space-y-2">
            {blocks.map((b, i) => (
              <div key={i} className="relative flex items-center gap-2.5">
                <span
                  className={`absolute -left-4 h-2.5 w-2.5 rounded-full ${b.type === "focus" ? "bg-[#5B57E0]" : "bg-[#C7C6E8]"}`}
                />
                <div
                  className={`flex-1 rounded-lg p-2 ${
                    b.type === "focus" ? "border border-[#5B57E0]/25 bg-[#5B57E0]/[0.07]" : "bg-[#F6F6FA]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-medium text-[#1C1A2E]">{b.label}</span>
                    <span className="text-[7px] text-[#9496AA]">{b.time} · {b.dur}</span>
                  </div>
                  {b.now && (
                    <div className="mt-1 flex items-center gap-1">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-[#5B57E0]" />
                      <span className="text-[7px] font-medium text-[#5B57E0]">NOW · notifications blocked</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FocusFlowInsights() {
  return (
    <BrowserFrame url="focusflow.app/insights">
      <div className="flex gap-4 bg-[#FAFBFC] p-4">
        <div className="flex-1 text-center">
          <p className="text-[8px] text-[#9496AA]">Focus Time</p>
          <p className="mt-0.5 text-lg font-bold text-[#1C1A2E]">18.5h</p>
          <p className="text-[8px] font-medium text-[#2F9E5B]">+3.2h vs last week</p>
        </div>
        <div className="flex-1 border-x border-[#EDECF4] text-center">
          <p className="text-[8px] text-[#9496AA]">Sessions</p>
          <p className="mt-0.5 text-lg font-bold text-[#1C1A2E]">24</p>
          <p className="text-[8px] text-[#9496AA]">avg 46 min</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-[8px] text-[#9496AA]">Streak</p>
          <p className="mt-0.5 text-lg font-bold text-[#5B57E0]">5 days</p>
          <p className="text-[8px] text-[#9496AA]">personal best</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FocusFlowScreens() {
  return (
    <div className="space-y-4">
      <FocusFlowTimeline />
      <div className="ml-10 md:ml-20">
        <FocusFlowInsights />
      </div>
    </div>
  );
}
