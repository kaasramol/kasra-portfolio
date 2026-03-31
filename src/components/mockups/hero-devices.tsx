import { PhoneFrame } from "@/components/project-card";
import { MapPin, Star, Clock, CheckCircle, Shield, TrendingUp, MessageSquare, BarChart3 } from "lucide-react";

/* ── Kaput Hero ── */
export function KaputHeroScreens() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {/* Phone 1 — Map */}
      <PhoneFrame>
        <div className="relative h-[280px] bg-[#e8e3d9]">
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.06]">
            {[...Array(6)].map((_, i) => (
              <div key={`h-${i}`} className="absolute h-px w-full bg-[#1B2632]" style={{ top: `${(i + 1) * 15}%` }} />
            ))}
          </div>
          {/* Search */}
          <div className="absolute top-2 left-2 right-2 flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-2 shadow-sm">
            <MapPin size={10} className="text-[#FFB162]" />
            <span className="text-[8px] text-[#8a8275]">Vancouver, BC</span>
          </div>
          {/* Pins */}
          <div className="absolute top-[35%] left-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB162] shadow-lg ring-3 ring-[#FFB162]/20">
            <MapPin size={12} className="text-white" />
          </div>
          <div className="absolute top-[50%] left-[65%] flex h-5 w-5 items-center justify-center rounded-full bg-[#8a8275]/70 shadow">
            <MapPin size={8} className="text-white" />
          </div>
          <div className="absolute top-[25%] left-[60%] flex h-5 w-5 items-center justify-center rounded-full bg-[#8a8275]/70 shadow">
            <MapPin size={8} className="text-white" />
          </div>
          {/* Bottom card */}
          <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold text-[#1B2632]">Pacific Auto Care</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star size={8} className="fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="text-[8px] text-[#1B2632]">4.9</span>
                  <span className="text-[7px] text-[#8a8275]">(127)</span>
                </div>
              </div>
              <span className="rounded-full bg-[#FFB162] px-2 py-1 text-[7px] font-medium text-white">Get Quote</span>
            </div>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 — Quote */}
      <PhoneFrame className="hidden sm:block">
        <div className="h-[280px] bg-white p-3">
          <p className="text-[8px] font-semibold text-[#8a8275] uppercase tracking-wider mb-2">Quote Comparison</p>
          {[
            { name: "Pacific Auto", price: "$348", time: "2-3 hrs", best: true },
            { name: "East Van Motors", price: "$410", time: "3-4 hrs", best: false },
          ].map((q) => (
            <div key={q.name} className={`mb-2 rounded-xl border p-3 ${q.best ? "border-[#FFB162] bg-[#FFB162]/5" : "border-[#e8e3d9]"}`}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[9px] font-medium text-[#1B2632]">{q.name}</p>
                {q.best && <span className="rounded-full bg-[#FFB162] px-1.5 py-0.5 text-[6px] font-bold text-white">BEST</span>}
              </div>
              <p className="text-xl font-bold text-[#1B2632]">{q.price}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock size={8} className="text-[#8a8275]" />
                <span className="text-[7px] text-[#8a8275]">{q.time}</span>
              </div>
            </div>
          ))}
          <div className="rounded-xl bg-[#FFB162] py-2.5 text-center text-[9px] font-semibold text-white mt-2">
            Accept Quote
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 — Chat */}
      <PhoneFrame className="hidden md:block">
        <div className="h-[280px] bg-white p-3">
          <div className="flex items-center gap-2 border-b border-[#e8e3d9] pb-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-[#FFB162]/20 flex items-center justify-center">
              <MessageSquare size={10} className="text-[#FFB162]" />
            </div>
            <div>
              <p className="text-[9px] font-medium text-[#1B2632]">Pacific Auto Care</p>
              <p className="text-[7px] text-[#22c55e]">Online</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl rounded-bl-none bg-[#f1f5f9] px-3 py-2 max-w-[85%]">
              <p className="text-[8px] text-[#1B2632]">Your brake inspection is confirmed for tomorrow at 10 AM.</p>
            </div>
            <div className="rounded-xl rounded-br-none bg-[#FFB162] px-3 py-2 max-w-[85%] ml-auto">
              <p className="text-[8px] text-white">Sounds good, thanks!</p>
            </div>
            <div className="rounded-xl rounded-bl-none bg-[#f1f5f9] px-3 py-2 max-w-[85%]">
              <p className="text-[8px] text-[#1B2632]">We'll send you updates as we work on your car.</p>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ── Onboard Hero ── */
export function OnboardHeroScreens() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {/* Phone 1 — Welcome */}
      <PhoneFrame>
        <div className="h-[280px] bg-white p-4 text-center">
          <div className="mb-6 mt-4 text-3xl">👋</div>
          <h3 className="mb-1 text-sm font-bold text-[#0F172A]">Welcome to Taskly!</h3>
          <p className="mb-4 text-[9px] text-[#64748B]">What should we call you?</p>
          <div className="mx-auto rounded-xl border-2 border-[#10B981] bg-white px-3 py-2.5 text-center">
            <span className="text-sm text-[#0F172A]">Kasra</span>
            <span className="ml-0.5 text-[#10B981]">|</span>
          </div>
          <div className="mt-4 rounded-xl bg-[#10B981] py-2.5 text-[10px] font-medium text-white">
            Continue
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#10B981]" />
            <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
            <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 — Use Case */}
      <PhoneFrame className="hidden sm:block">
        <div className="h-[280px] bg-white p-4 text-center">
          <h3 className="mb-1 text-[11px] font-bold text-[#0F172A]">What brings you here?</h3>
          <p className="mb-4 text-[8px] text-[#64748B]">We&apos;ll customize your experience</p>
          <div className="space-y-2">
            {[
              { label: "Manage Projects", desc: "Track tasks & deadlines", active: true },
              { label: "Run Sprints", desc: "Agile workflows", active: false },
              { label: "Organize Tasks", desc: "Personal to-dos", active: false },
            ].map((opt) => (
              <div key={opt.label} className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-left ${opt.active ? "border-[#10B981] bg-[#10B981]/5" : "border-[#E2E8F0]"}`}>
                <div className={`flex h-4 w-4 items-center justify-center rounded-full ${opt.active ? "bg-[#10B981]" : "border border-[#d5cfc5]"}`}>
                  {opt.active && <CheckCircle size={10} className="text-white" />}
                </div>
                <div>
                  <p className="text-[9px] font-medium text-[#0F172A]">{opt.label}</p>
                  <p className="text-[7px] text-[#64748B]">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#10B981]" />
            <div className="h-2 w-2 rounded-full bg-[#10B981]" />
            <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 — Celebration */}
      <PhoneFrame className="hidden md:block">
        <div className="h-[280px] bg-white p-4 text-center">
          <div className="mb-3 mt-4 text-3xl">🎉</div>
          <h3 className="mb-1 text-sm font-bold text-[#0F172A]">You&apos;re all set!</h3>
          <p className="mb-4 text-[8px] text-[#64748B]">Your workspace is ready</p>
          <div className="space-y-2">
            {["Invite team", "Browse templates", "Go to dashboard"].map((action) => (
              <div key={action} className="flex items-center justify-between rounded-xl border border-[#E2E8F0] px-3 py-2">
                <span className="text-[8px] text-[#0F172A]">{action}</span>
                <svg className="h-3 w-3 text-[#CBD5E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-[#10B981] py-2.5 text-[9px] font-medium text-white">
            Go to dashboard
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ── TeamPulse Hero ── */
export function TeamPulseHeroScreens() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {/* Phone 1 — Dashboard */}
      <PhoneFrame>
        <div className="h-[280px] bg-[#141B1F] p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-[#E5F0EE]">Team<span className="text-[#2EC4B6]">Pulse</span></span>
            <span className="rounded-full bg-[#2EC4B6]/10 px-1.5 py-0.5 text-[7px] text-[#2EC4B6]">Manager</span>
          </div>
          <div className="rounded-xl bg-[#1E2A2F] p-3 text-center mb-3">
            <p className="text-[7px] text-[#7A9A95]">Team Health</p>
            <p className="text-2xl font-bold text-[#E5F0EE]">7.4</p>
            <div className="flex items-center justify-center gap-1">
              <TrendingUp size={8} className="text-[#22c55e]" />
              <span className="text-[7px] text-[#22c55e]">+0.3</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Culture", score: "8.1", color: "#22c55e" },
              { name: "Growth", score: "7.5", color: "#22c55e" },
              { name: "Mgmt", score: "7.2", color: "#f59e0b" },
              { name: "Workload", score: "5.2", color: "#ef4444" },
            ].map((c) => (
              <div key={c.name} className="rounded-lg bg-[#1E2A2F] p-2">
                <p className="text-[7px] text-[#7A9A95]">{c.name}</p>
                <p className="text-sm font-bold" style={{ color: c.color }}>{c.score}</p>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 — Survey */}
      <PhoneFrame className="hidden sm:block">
        <div className="h-[280px] bg-white p-4 text-center">
          <div className="flex items-center gap-1.5 mb-4">
            <Shield size={10} className="text-[#2EC4B6]" />
            <span className="text-[7px] text-[#2EC4B6] font-medium">100% Anonymous</span>
          </div>
          <p className="text-[10px] font-medium text-[#1B2632] mb-1">How supported do you feel?</p>
          <p className="text-[8px] text-[#8a8275] mb-4">Question 3 of 5</p>
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${n === 4 ? "bg-[#2EC4B6] text-white" : "border border-[#e8e3d9] text-[#8a8275]"}`}>
                {n}
              </div>
            ))}
          </div>
          <div className="h-1.5 rounded-full bg-[#e8e3d9]">
            <div className="h-1.5 w-[60%] rounded-full bg-[#2EC4B6]" />
          </div>
          <p className="mt-2 text-[7px] text-[#8a8275]">3 of 5 complete</p>
        </div>
      </PhoneFrame>

      {/* Phone 3 — Insight Card */}
      <PhoneFrame className="hidden md:block">
        <div className="h-[280px] bg-[#141B1F] p-3">
          <p className="text-[8px] text-[#7A9A95] mb-2 uppercase tracking-wider">Insight</p>
          <div className="rounded-xl bg-[#1E2A2F] p-3 mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-medium text-[#E5F0EE]">Workload</span>
              <span className="text-[8px] text-[#ef4444]">5.2 / 10</span>
            </div>
            <p className="text-[8px] text-[#7A9A95] leading-relaxed">Team reports feeling overwhelmed with sprint scope. 3 members flagged overtime.</p>
          </div>
          <div className="rounded-xl bg-[#1E2A2F] p-3">
            <p className="text-[8px] text-[#7A9A95] mb-2">Suggested Actions</p>
            {["Reduce sprint scope by 20%", "Cancel non-critical meetings"].map((a) => (
              <div key={a} className="flex items-center gap-2 mb-1.5">
                <div className="h-3 w-3 rounded border border-[#2EC4B6]" />
                <span className="text-[8px] text-[#E5F0EE]">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-xl bg-[#2EC4B6] py-2 text-center text-[8px] font-medium text-white">
            Create Action
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ── FocusFlow Hero ── */
export function FocusFlowHeroScreens() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {/* Phone 1 — Timer */}
      <PhoneFrame>
        <div className="h-[280px] bg-[#0F0E1A] p-4 text-center flex flex-col items-center justify-center">
          <p className="text-[8px] text-[#6B7094] mb-3">DEEP WORK SESSION</p>
          {/* Timer ring */}
          <div className="relative mb-4">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#1E1B4B" strokeWidth="4" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52 * 0.65} ${2 * Math.PI * 52 * 0.35}`}
                transform="rotate(-90 60 60)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-white">23:47</span>
              <span className="text-[7px] text-[#6B7094]">remaining</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mb-3">
            <Shield size={10} className="text-[#22c55e]" />
            <span className="text-[7px] text-[#22c55e]">Notifications blocked</span>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex-1 rounded-xl bg-[#1E1B4B] py-2 text-[8px] text-[#A5B4FC]">Pause</div>
            <div className="flex-1 rounded-xl bg-[#6366F1] py-2 text-[8px] font-medium text-white">End</div>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 — Schedule */}
      <PhoneFrame className="hidden sm:block">
        <div className="h-[280px] bg-[#FAFBFE] p-3">
          <p className="text-[9px] font-semibold text-[#1E1B4B] mb-0.5">Today</p>
          <p className="text-[7px] text-[#6B7094] mb-3">3 focus blocks</p>
          <div className="space-y-2">
            {[
              { time: "9:00", label: "Standup", type: "meeting", dur: "30m" },
              { time: "9:30", label: "Deep Work", type: "focus", dur: "90m" },
              { time: "11:00", label: "Review", type: "meeting", dur: "30m" },
              { time: "11:30", label: "Deep Work", type: "focus", dur: "60m" },
              { time: "1:00", label: "Lunch", type: "break", dur: "60m" },
              { time: "2:00", label: "Deep Work", type: "focus", dur: "90m" },
            ].map((s) => (
              <div key={s.time + s.label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${s.type === "focus" ? "bg-[#6366F1]/10 border border-[#6366F1]/20" : s.type === "meeting" ? "bg-[#ef4444]/5" : "bg-[#F0F1F8]"}`}>
                <span className="text-[7px] text-[#6B7094] w-6">{s.time}</span>
                <span className="text-[8px] font-medium text-[#1E1B4B]">{s.label}</span>
                <span className="text-[7px] text-[#6B7094] ml-auto">{s.dur}</span>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 — Stats */}
      <PhoneFrame className="hidden md:block">
        <div className="h-[280px] bg-[#FAFBFE] p-3">
          <p className="text-[9px] font-semibold text-[#1E1B4B] mb-3">Weekly Insights</p>
          <div className="rounded-xl bg-[#1E1B4B] p-3 text-center mb-3">
            <p className="text-[7px] text-[#A5B4FC]">Focus Score</p>
            <p className="text-2xl font-bold text-white">82</p>
            <p className="text-[7px] text-[#22c55e]">+12 from last week</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-lg bg-white border border-[#E8E9F0] p-2.5 text-center">
              <p className="text-[7px] text-[#6B7094]">Focus Time</p>
              <p className="text-sm font-bold text-[#1E1B4B]">18.5h</p>
            </div>
            <div className="rounded-lg bg-white border border-[#E8E9F0] p-2.5 text-center">
              <p className="text-[7px] text-[#6B7094]">Sessions</p>
              <p className="text-sm font-bold text-[#1E1B4B]">24</p>
            </div>
          </div>
          <div className="rounded-lg bg-white border border-[#E8E9F0] p-2.5 text-center">
            <p className="text-[7px] text-[#6B7094]">Streak</p>
            <p className="text-lg font-bold text-[#6366F1]">5 days</p>
            <p className="text-[7px] text-[#6B7094]">personal best</p>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
