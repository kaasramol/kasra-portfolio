import { BrowserFrame } from "./project-card";
import { MapPin, Star, Search, MessageSquare, TrendingDown, Minus, Shield, Clock, CheckCircle } from "lucide-react";

/* ── Kaput ── */
export function KaputScreens() {
  return (
    <div className="space-y-4">
      {/* Main — map + sidebar */}
      <BrowserFrame url="kaput.app/explore">
        <div className="flex h-[260px]">
          {/* Map */}
          <div className="relative flex-1 bg-[#e8e3d9]">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.07]">
              {[...Array(8)].map((_, i) => (
                <div key={`h-${i}`} className="absolute h-px w-full bg-[#1B2632]" style={{ top: `${(i + 1) * 12}%` }} />
              ))}
              {[...Array(8)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-[#1B2632]" style={{ left: `${(i + 1) * 12}%` }} />
              ))}
            </div>
            <span className="absolute top-[25%] left-[20%] text-[8px] text-[#8a8275]/30">W Broadway</span>
            <span className="absolute top-[55%] left-[45%] text-[8px] text-[#8a8275]/30">Commercial Dr</span>
            {/* Pins */}
            <div className="absolute top-[35%] left-[45%] flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB162] shadow-lg ring-4 ring-[#FFB162]/20">
              <MapPin size={14} className="text-white" />
            </div>
            <div className="absolute top-[55%] left-[65%] flex h-5 w-5 items-center justify-center rounded-full bg-[#8a8275]/80 shadow">
              <MapPin size={10} className="text-white" />
            </div>
            <div className="absolute top-[25%] left-[70%] flex h-5 w-5 items-center justify-center rounded-full bg-[#8a8275]/80 shadow">
              <MapPin size={10} className="text-white" />
            </div>
            <div className="absolute top-[50%] left-[30%] flex h-5 w-5 items-center justify-center rounded-full bg-[#8a8275]/80 shadow">
              <MapPin size={10} className="text-white" />
            </div>
            {/* You are here */}
            <div className="absolute top-[48%] left-[48%] h-3 w-3 rounded-full bg-[#22c55e] ring-4 ring-[#22c55e]/20" />
            {/* Search bar overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm">
              <Search size={12} className="text-[#8a8275]" />
              <span className="text-[9px] text-[#8a8275]">Search mechanics near Vancouver, BC</span>
            </div>
          </div>
          {/* Sidebar */}
          <div className="hidden w-[140px] border-l border-[#e8e3d9] sm:block">
            <div className="border-b border-[#e8e3d9] px-3 py-2">
              <span className="text-[8px] font-medium text-[#8a8275]">5 nearby</span>
            </div>
            {[
              { name: "Pacific Auto Care", rating: "4.9", reviews: "127", active: true },
              { name: "East Van Motors", rating: "4.7", reviews: "89", active: false },
              { name: "Grandview Garage", rating: "4.8", reviews: "203", active: false },
            ].map((m) => (
              <div key={m.name} className={`border-b border-[#e8e3d9] px-3 py-2.5 ${m.active ? "bg-[#FFB162]/5" : ""}`}>
                <p className="text-[9px] font-medium text-[#1B2632]">{m.name}</p>
                <div className="mt-0.5 flex items-center gap-1">
                  <Star size={8} className="fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="text-[8px] text-[#1B2632]">{m.rating}</span>
                  <span className="text-[8px] text-[#8a8275]">({m.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
      {/* Secondary — quote comparison (smaller, offset) */}
      <div className="ml-8 md:ml-12">
        <BrowserFrame url="kaput.app/quotes">
          <div className="flex gap-3 p-4">
            {[
              { name: "Pacific Auto", price: "$348", time: "2-3 hrs", best: true },
              { name: "East Van Motors", price: "$360", time: "3-4 hrs", best: false },
            ].map((q) => (
              <div key={q.name} className={`flex-1 rounded-lg border p-3 ${q.best ? "border-[#FFB162] bg-[#FFB162]/5" : "border-[#e8e3d9]"}`}>
                <p className="text-[9px] font-medium text-[#1B2632]">{q.name}</p>
                <p className="text-lg font-bold text-[#1B2632]">{q.price}</p>
                <div className="mt-1 flex items-center gap-1">
                  <Clock size={8} className="text-[#8a8275]" />
                  <span className="text-[8px] text-[#8a8275]">{q.time}</span>
                </div>
                {q.best && <span className="mt-1.5 inline-block rounded-full bg-[#FFB162] px-2 py-0.5 text-[7px] font-medium text-white">Best Value</span>}
              </div>
            ))}
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

/* ── Onboard ── */
export function OnboardScreens() {
  return (
    <div className="space-y-4">
      {/* Main — new onboarding */}
      <BrowserFrame url="taskly.app/onboarding">
        <div className="p-6 text-center h-[260px]">
          <div className="mx-auto mb-4 flex items-center gap-2 justify-center">
            <div className="h-1.5 flex-1 max-w-[200px] rounded-full bg-[#e8e3d9]">
              <div className="h-1.5 w-[33%] rounded-full bg-[#1B2632]" />
            </div>
            <span className="text-[9px] text-[#8a8275]">Step 1 of 3</span>
          </div>
          <p className="mb-1 text-sm font-semibold text-[#1B2632]">What brings you to Taskly?</p>
          <p className="mb-5 text-[10px] text-[#8a8275]">We'll customize your workspace</p>
          <div className="mx-auto grid max-w-xs gap-2">
            {[
              { label: "Manage Projects", desc: "Track tasks & deadlines", active: true },
              { label: "Run Sprints", desc: "Agile workflows", active: false },
              { label: "Organize Tasks", desc: "Personal to-dos", active: false },
            ].map((opt) => (
              <div key={opt.label} className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left ${opt.active ? "border-[#1B2632] bg-[#1B2632]/5" : "border-[#e8e3d9]"}`}>
                <div className={`flex h-5 w-5 items-center justify-center rounded-full ${opt.active ? "bg-[#1B2632]" : "border border-[#d5cfc5]"}`}>
                  {opt.active && <CheckCircle size={12} className="text-white" />}
                </div>
                <div>
                  <p className="text-[10px] font-medium text-[#1B2632]">{opt.label}</p>
                  <p className="text-[8px] text-[#8a8275]">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-4 max-w-xs rounded-xl bg-[#1B2632] py-2.5 text-[10px] font-medium text-white">
            Continue
          </div>
        </div>
      </BrowserFrame>
      {/* Secondary — before/after comparison */}
      <div className="ml-8 md:ml-12">
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
      </div>
    </div>
  );
}

/* ── TeamPulse ── */
export function TeamPulseScreens() {
  return (
    <div className="space-y-4">
      {/* Main — dashboard */}
      <BrowserFrame url="teampulse.io/dashboard">
        <div className="h-[260px] bg-[#141B1F] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-[#E5F0EE]">Team<span className="text-[#2EC4B6]">Pulse</span></span>
            <span className="rounded-full bg-[#2EC4B6]/10 px-2 py-0.5 text-[8px] text-[#2EC4B6]">HR Admin</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-3">
            {/* Health score */}
            <div className="rounded-xl bg-[#1E2A2F] p-3 text-center">
              <p className="text-[8px] text-[#7A9A95]">Health Score</p>
              <p className="text-2xl font-bold text-[#E5F0EE]">7.4</p>
              <p className="text-[8px] text-[#22c55e]">+0.3</p>
            </div>
            {/* Response rate */}
            <div className="rounded-xl bg-[#1E2A2F] p-3 text-center">
              <p className="text-[8px] text-[#7A9A95]">Response Rate</p>
              <p className="text-2xl font-bold text-[#E5F0EE]">72%</p>
              <p className="text-[8px] text-[#7A9A95]">187/260</p>
            </div>
            {/* Alert */}
            <div className="rounded-xl bg-[#ef4444]/10 p-3">
              <p className="text-[8px] font-medium text-[#ef4444]">Alert</p>
              <p className="mt-1 text-[9px] text-[#fca5a5]">Eng. workload dropped to 5.2</p>
              <div className="mt-1.5 flex items-center gap-0.5">
                <TrendingDown size={8} className="text-[#ef4444]" />
                <span className="text-[8px] text-[#ef4444]">1.8 pts</span>
              </div>
            </div>
          </div>
          {/* Category bars */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "Workload", score: 6.8, color: "#ef4444" },
              { name: "Growth", score: 7.5, color: "#22c55e" },
              { name: "Culture", score: 8.1, color: "#22c55e" },
              { name: "Mgmt", score: 7.2, color: "#f59e0b" },
            ].map((c) => (
              <div key={c.name} className="rounded-lg bg-[#1E2A2F] p-2">
                <p className="text-[7px] text-[#7A9A95]">{c.name}</p>
                <p className="text-sm font-bold text-[#E5F0EE]">{c.score}</p>
                <div className="mt-1 h-1 rounded-full bg-[#2F4048]">
                  <div className="h-1 rounded-full" style={{ width: `${c.score * 10}%`, backgroundColor: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
      {/* Secondary — manager view */}
      <div className="ml-8 md:ml-12">
        <BrowserFrame url="teampulse.io/team/engineering">
          <div className="flex gap-3 bg-[#141B1F] p-4">
            <div className="flex-1">
              <p className="text-[9px] font-medium text-[#7A9A95]">Engineering Team</p>
              <p className="text-lg font-bold text-[#E5F0EE]">6.2</p>
              <div className="flex items-center gap-0.5">
                <TrendingDown size={10} className="text-[#ef4444]" />
                <span className="text-[8px] text-[#ef4444]">0.8 from last month</span>
              </div>
            </div>
            <div className="flex-1 space-y-1">
              {[
                { action: "Redistribute sprint tasks", status: "In Progress" },
                { action: "Cancel non-essential meetings", status: "Done" },
              ].map((a) => (
                <div key={a.action} className="flex items-center justify-between rounded-md bg-[#1E2A2F] px-2 py-1.5">
                  <span className="text-[8px] text-[#E5F0EE]">{a.action}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[7px] font-medium ${a.status === "Done" ? "bg-[#22c55e]/10 text-[#22c55e]" : "bg-[#2EC4B6]/10 text-[#2EC4B6]"}`}>{a.status}</span>
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

/* ── FocusFlow ── */
export function FocusFlowScreens() {
  return (
    <div className="space-y-4">
      {/* Main — dashboard */}
      <BrowserFrame url="focusflow.app/dashboard">
        <div className="h-[260px] bg-[#FAFBFE] p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#1E1B4B]">Good morning, Kasra</p>
              <p className="text-[9px] text-[#6B7094]">3 focus blocks scheduled today</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#F0F1F8] px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-[#6366F1]" />
              <span className="text-[9px] font-medium text-[#1E1B4B]">Score: 82</span>
            </div>
          </div>
          {/* Schedule */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { time: "9:00", label: "Standup", type: "meeting", dur: "30m" },
              { time: "9:30", label: "Deep Work", type: "focus", dur: "90m" },
              { time: "11:00", label: "Design Review", type: "meeting", dur: "30m" },
            ].map((s) => (
              <div key={s.time} className={`rounded-lg p-2.5 ${s.type === "focus" ? "bg-[#6366F1]/10 border border-[#6366F1]/20" : s.type === "meeting" ? "bg-[#ef4444]/5 border border-[#ef4444]/10" : "bg-[#F0F1F8]"}`}>
                <p className="text-[8px] text-[#6B7094]">{s.time}</p>
                <p className="text-[9px] font-medium text-[#1E1B4B]">{s.label}</p>
                <p className="text-[8px] text-[#6B7094]">{s.dur}</p>
              </div>
            ))}
          </div>
          {/* Active session */}
          <div className="flex items-center gap-4 rounded-xl bg-[#1E1B4B] p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6366F1]">
              <span className="text-sm font-bold text-white">23:47</span>
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-medium text-white">Deep Work — In Progress</p>
              <div className="mt-1 flex items-center gap-1.5">
                <Shield size={10} className="text-[#22c55e]" />
                <span className="text-[8px] text-[#22c55e]">Notifications blocked</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="rounded-lg bg-[#312E81] px-3 py-1.5 text-[8px] text-[#A5B4FC]">Pause</div>
              <div className="rounded-lg bg-[#6366F1] px-3 py-1.5 text-[8px] font-medium text-white">End</div>
            </div>
          </div>
        </div>
      </BrowserFrame>
      {/* Secondary — weekly stats */}
      <div className="ml-8 md:ml-12">
        <BrowserFrame url="focusflow.app/insights">
          <div className="flex gap-4 bg-[#FAFBFE] p-4">
            <div className="flex-1 text-center">
              <p className="text-[8px] text-[#6B7094]">Focus Time</p>
              <p className="text-lg font-bold text-[#1E1B4B]">18.5h</p>
              <p className="text-[8px] text-[#22c55e]">+3.2h vs last week</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-[8px] text-[#6B7094]">Sessions</p>
              <p className="text-lg font-bold text-[#1E1B4B]">24</p>
              <p className="text-[8px] text-[#6B7094]">avg 46 min</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-[8px] text-[#6B7094]">Streak</p>
              <p className="text-lg font-bold text-[#6366F1]">5 days</p>
              <p className="text-[8px] text-[#6B7094]">personal best</p>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
