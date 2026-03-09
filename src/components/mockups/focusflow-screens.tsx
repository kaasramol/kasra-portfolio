import { Flame } from "lucide-react";

export function FocusFlowMobileHomeMockup() {
  const hours = [
    { time: "9:00", label: "Standup", type: "meeting" },
    { time: "9:30", label: "Focus Available", type: "focus" },
    { time: "10:30", label: "Design Review", type: "meeting" },
    { time: "11:00", label: "Focus Available", type: "focus" },
    { time: "12:00", label: "Lunch", type: "break" },
    { time: "1:00", label: "Sprint Planning", type: "meeting" },
    { time: "2:00", label: "Focus Available", type: "focus" },
  ];

  return (
    <div className="my-8 mx-auto max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-[#3a5060] bg-[#1B2632] shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] font-medium text-[#EEE9DF]">9:41</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-[#EEE9DF]" />
            <div className="h-2 w-2 rounded-full bg-[#EEE9DF]" />
            <div className="h-2 w-3 rounded-full bg-[#EEE9DF]" />
          </div>
        </div>

        <div className="p-5">
          {/* Greeting */}
          <p className="text-xs text-[#C9C1B1]">Good morning, Kasra</p>
          <p className="text-lg font-semibold text-[#EEE9DF]">Tuesday, Mar 4</p>

          {/* Focus goal ring */}
          <div className="my-5 flex flex-col items-center">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <svg className="h-28 w-28 -rotate-90" viewBox="0 0 36 36">
                <path className="stroke-[#2C3B4D]" strokeWidth="3" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
                <path className="stroke-[#FFB162]" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="50, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              </svg>
              <div className="absolute text-center">
                <span className="text-xl font-bold text-[#EEE9DF]">1.5h</span>
                <p className="text-[9px] text-[#C9C1B1]">of 3h goal</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Flame size={14} className="text-[#f59e0b]" />
                <span className="text-xs font-medium text-[#EEE9DF]">5 day streak</span>
              </div>
              <span className="text-xs text-[#8a8275]">·</span>
              <span className="text-xs text-[#C9C1B1]">Score: 82</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {hours.map((h, i) => (
              <div key={i} className="flex items-center gap-3 py-1.5">
                <span className="w-10 text-[10px] text-[#8a8275]">{h.time}</span>
                <div
                  className={`flex-1 rounded-lg px-3 py-1.5 text-xs ${
                    h.type === "focus"
                      ? "bg-[#FFB162]/15 text-[#FFB162] border border-[#FFB162]/30 border-dashed"
                      : h.type === "meeting"
                        ? "bg-[#2C3B4D] text-[#C9C1B1]"
                        : "bg-transparent text-[#8a8275]"
                  }`}
                >
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          {/* Start Focus CTA */}
          <button className="mt-4 w-full rounded-2xl bg-[#FFB162] py-3.5 text-sm font-semibold text-[#1B2632] shadow-lg shadow-[#FFB162]/30">
            Start Focus Session
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-center pb-2">
          <div className="h-1 w-24 rounded-full bg-[#3a5060]" />
        </div>
      </div>
    </div>
  );
}

export function FocusFlowTimerMockup() {
  return (
    <div className="my-8 mx-auto max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-[#3a5060] bg-[#1B2632] shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] font-medium text-[#FFB162]">Focusing...</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-[#EEE9DF]" />
            <div className="h-2 w-2 rounded-full bg-[#EEE9DF]" />
            <div className="h-2 w-3 rounded-full bg-[#EEE9DF]" />
          </div>
        </div>

        <div className="flex flex-col items-center px-5 py-10">
          {/* Task label */}
          <span className="mb-6 rounded-full bg-[#2C3B4D] px-4 py-1.5 text-xs text-[#C9C1B1]">
            Design sprint review deck
          </span>

          {/* Timer ring */}
          <div className="relative flex h-48 w-48 items-center justify-center">
            <svg className="h-48 w-48 -rotate-90" viewBox="0 0 36 36">
              <path className="stroke-[#2C3B4D]" strokeWidth="2" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              <path className="stroke-[#FFB162]" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="62, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831">
              </path>
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-bold text-[#EEE9DF] tracking-tight">31:22</span>
              <p className="mt-1 text-xs text-[#8a8275]">of 50 minutes</p>
            </div>
          </div>

          {/* Ambient sound */}
          <div className="mt-8 flex items-center gap-2 rounded-full bg-[#2C3B4D] px-4 py-2">
            <span className="text-xs">🎵</span>
            <span className="text-xs text-[#C9C1B1]">Lo-fi beats</span>
            <div className="flex gap-0.5 ml-2">
              {[3, 5, 2, 4, 3, 5, 2].map((h, i) => (
                <div key={i} className="w-0.5 rounded-full bg-[#FFB162]" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex gap-6">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3B4D]">
              <span className="text-xs text-[#C9C1B1]">⏸</span>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ef4444]/20">
              <span className="text-xs text-[#ef4444]">⏹</span>
            </button>
          </div>

          {/* Slack status indicator */}
          <div className="mt-6 flex items-center gap-2 text-xs text-[#8a8275]">
            <div className="h-2 w-2 rounded-full bg-[#FFB162]" />
            Slack: &quot;Focusing until 10:30 AM&quot;
          </div>
        </div>

        <div className="flex justify-center pb-2">
          <div className="h-1 w-24 rounded-full bg-[#3a5060]" />
        </div>
      </div>
    </div>
  );
}

export function FocusFlowWebDashboardMockup() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const focusHours = [2.5, 3.2, 1.8, 4.0, 2.0];
  const maxHours = 4;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#2C3B4D] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#EEE9DF]">Focus<span className="text-[#FFB162]">Flow</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#8a8275]">Week of Mar 3, 2026</span>
          <div className="h-7 w-7 rounded-full bg-[#FFB162]/20 flex items-center justify-center text-xs font-medium text-[#FFB162]">K</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {/* Left: Calendar */}
        <div className="border-r border-[#2C3B4D] p-5">
          <p className="mb-3 text-xs font-medium text-[#8a8275] uppercase tracking-wider">Today&apos;s Schedule</p>
          <div className="space-y-2">
            {[
              { time: "9:00", label: "Standup", dur: "15m", type: "meeting" },
              { time: "9:30", label: "Focus Block", dur: "90m", type: "focus" },
              { time: "11:00", label: "Design Review", dur: "30m", type: "meeting" },
              { time: "11:30", label: "Focus Block", dur: "60m", type: "focus" },
              { time: "1:00", label: "Sprint Planning", dur: "60m", type: "meeting" },
              { time: "2:00", label: "Focus Block", dur: "120m", type: "focus" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-10 text-[10px] text-[#8a8275]">{item.time}</span>
                <div className={`flex-1 flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs ${
                  item.type === "focus"
                    ? "bg-[#FFB162]/10 text-[#FFB162] border border-[#FFB162]/20"
                    : "bg-[#2C3B4D] text-[#C9C1B1]"
                }`}>
                  <span>{item.label}</span>
                  <span className="text-[10px] opacity-60">{item.dur}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Active session / start */}
        <div className="border-r border-[#2C3B4D] p-5 flex flex-col items-center justify-center">
          <p className="mb-4 text-xs text-[#8a8275]">Next focus block in 12 minutes</p>
          <div className="relative flex h-32 w-32 items-center justify-center mb-4">
            <svg className="h-32 w-32 -rotate-90" viewBox="0 0 36 36">
              <path className="stroke-[#2C3B4D]" strokeWidth="2" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              <path className="stroke-[#FFB162]" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="50, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
            </svg>
            <div className="absolute text-center">
              <span className="text-2xl font-bold text-[#EEE9DF]">1.5h</span>
              <p className="text-[9px] text-[#8a8275]">of 3h goal</p>
            </div>
          </div>
          <button className="rounded-xl bg-[#FFB162] px-6 py-2.5 text-sm font-medium text-[#1B2632] shadow-lg shadow-[#FFB162]/20">
            Start Focus Now
          </button>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-xs text-[#f59e0b]"><Flame size={14} /> 5</span>
            <span className="text-xs text-[#8a8275]">·</span>
            <span className="text-xs text-[#C9C1B1]">Score: 82</span>
          </div>
        </div>

        {/* Right: Weekly stats */}
        <div className="p-5">
          <p className="mb-3 text-xs font-medium text-[#8a8275] uppercase tracking-wider">This Week</p>

          {/* Bar chart */}
          <div className="mb-5 flex items-end justify-between gap-2 h-28">
            {days.map((day, i) => (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center justify-end h-20">
                  <div
                    className={`w-full max-w-[24px] rounded-t-md ${i === 3 ? "bg-[#FFB162]" : "bg-[#FFB162]/40"}`}
                    style={{ height: `${(focusHours[i] / maxHours) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#8a8275]">{day}</span>
                <span className="text-[10px] text-[#C9C1B1]">{focusHours[i]}h</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-[#2C3B4D] px-3 py-2">
              <span className="text-xs text-[#C9C1B1]">Total focus</span>
              <span className="text-xs font-medium text-[#EEE9DF]">13.5h</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#2C3B4D] px-3 py-2">
              <span className="text-xs text-[#C9C1B1]">Meetings</span>
              <span className="text-xs font-medium text-[#EEE9DF]">8.5h</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#2C3B4D] px-3 py-2">
              <span className="text-xs text-[#C9C1B1]">Focus ratio</span>
              <span className="text-xs font-medium text-[#FFB162]">61%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#2C3B4D] px-3 py-2">
              <span className="text-xs text-[#C9C1B1]">Best day</span>
              <span className="text-xs font-medium text-[#EEE9DF]">Thursday (4h)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
