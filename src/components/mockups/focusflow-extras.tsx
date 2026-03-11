import { Flame } from "lucide-react";

export function FocusFlowCompetitiveMockup() {
  const tools = [
    { name: "Forest", x: 20, y: 70, size: "sm" },
    { name: "Freedom", x: 30, y: 55, size: "sm" },
    { name: "Clockwise", x: 70, y: 30, size: "md" },
    { name: "Reclaim", x: 75, y: 45, size: "md" },
    { name: "Centered", x: 60, y: 60, size: "md" },
    { name: "FocusFlow", x: 50, y: 42, size: "lg" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#D8DAE8] bg-[#FAFBFE] shadow-lg">
      <div className="border-b border-[#F0F1F8] px-5 py-3">
        <p className="text-xs font-medium text-[#6366F1] uppercase tracking-wider">Competitive Analysis</p>
        <p className="text-sm font-semibold text-[#1E1B4B]">Focus Tool Landscape</p>
      </div>
      <div className="relative h-[300px] p-5">
        {/* Axes */}
        <div className="absolute left-12 top-5 bottom-10 w-px bg-[#F0F1F8]" />
        <div className="absolute left-12 right-5 bottom-10 h-px bg-[#F0F1F8]" />

        {/* Labels */}
        <span className="absolute left-0 top-8 text-[9px] text-[#6B7094] rotate-[-90deg] origin-right">Calendar-Aware</span>
        <span className="absolute left-0 bottom-16 text-[9px] text-[#6B7094] rotate-[-90deg] origin-right">No Calendar</span>
        <span className="absolute left-14 bottom-2 text-[9px] text-[#6B7094]">Block Only</span>
        <span className="absolute right-5 bottom-2 text-[9px] text-[#6B7094]">Full Focus Suite</span>

        {/* Opportunity zone */}
        <div className="absolute rounded-full bg-[#6366F1]/5 border-2 border-dashed border-[#6366F1]/30" style={{ left: "38%", top: "28%", width: "22%", height: "28%" }} />

        {/* Tools */}
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="absolute flex flex-col items-center"
            style={{ left: `${tool.x}%`, top: `${tool.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className={`rounded-full ${tool.name === "FocusFlow" ? "bg-[#6366F1] ring-4 ring-[#6366F1]/20" : "bg-[#6B7094]/60"} ${tool.size === "lg" ? "h-4 w-4" : tool.size === "md" ? "h-3 w-3" : "h-2.5 w-2.5"}`} />
            <span className={`mt-1 text-[9px] font-medium ${tool.name === "FocusFlow" ? "text-[#6366F1]" : "text-[#6B7094]"}`}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-[#6366F1]/5 px-5 py-3 border-t border-[#6366F1]/20">
        <p className="text-[10px] text-[#6366F1] font-medium">Gap: No tool combines calendar awareness + active focus support in a simple package.</p>
      </div>
    </div>
  );
}

export function FocusFlowJourneyMapMockup() {
  const hours = [
    { time: "7:30", event: "Opens laptop, checks Slack", duration: "15 min gone", emotion: "Neutral", score: 50, focus: false },
    { time: "8:00", event: "Starts coding, gets into flow", duration: "10 min to focus", emotion: "Positive", score: 80, focus: true },
    { time: "8:25", event: "Slack ping breaks focus", duration: "10 min to refocus", emotion: "Frustrated", score: 30, focus: false },
    { time: "9:00", event: "Standup meeting", duration: "15 min", emotion: "Neutral", score: 40, focus: false },
    { time: "9:20", event: "Can't remember where she left off", duration: "25 min wasted", emotion: "Low", score: 25, focus: false },
    { time: "9:45", event: "Finally back in flow", duration: "15 min of focus", emotion: "Positive", score: 75, focus: true },
    { time: "10:00", event: "Meeting in 30 min — stops coding", duration: "Not worth starting", emotion: "Low", score: 20, focus: false },
    { time: "10:30", event: "Meeting (could've been email)", duration: "45 min", emotion: "Frustrated", score: 15, focus: false },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#D8DAE8] bg-[#FAFBFE] shadow-lg">
      <div className="border-b border-[#F0F1F8] px-5 py-3">
        <p className="text-xs font-medium text-[#6366F1] uppercase tracking-wider">Journey Map</p>
        <p className="text-sm font-semibold text-[#1E1B4B]">A Day in the Life — Dev Dana</p>
        <p className="text-[10px] text-[#6B7094] mt-0.5">Total focus: ~65 min out of 4 hours</p>
      </div>
      <div className="p-4 space-y-1">
        {hours.map((h, i) => (
          <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${h.focus ? "bg-[#6366F1]/10 border border-[#6366F1]/20" : "bg-[#F0F1F8]/50"}`}>
            <span className="w-10 text-[10px] font-medium text-[#6B7094]">{h.time}</span>
            <span className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${h.emotion === "Positive" ? "bg-[#22c55e]/15 text-[#22c55e]" : h.emotion === "Frustrated" ? "bg-[#ef4444]/15 text-[#ef4444]" : h.emotion === "Low" ? "bg-[#f59e0b]/15 text-[#f59e0b]" : "bg-[#D8DAE8] text-[#6B7094]"}`}>{h.emotion}</span>
            <div className="flex-1">
              <p className="text-xs text-[#1E1B4B]">{h.event}</p>
              <p className="text-[9px] text-[#6B7094]">{h.duration}</p>
            </div>
            <div className="w-16">
              <div className="h-1.5 w-full rounded-full bg-[#F0F1F8]">
                <div
                  className={`h-1.5 rounded-full ${h.focus ? "bg-[#6366F1]" : h.score > 40 ? "bg-[#f59e0b]" : "bg-[#ef4444]"}`}
                  style={{ width: `${h.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#6366F1]/5 px-5 py-3 border-t border-[#6366F1]/20">
        <p className="text-[10px] text-[#6366F1] font-medium">FocusFlow intervention points: auto-DND at 8:00, intercept Slack at 8:25, suggest focus block at 9:20, weekly meeting audit</p>
      </div>
    </div>
  );
}

export function FocusFlowWireframesMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#D8DAE8] bg-[#FAFBFE] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
      <div className="border-b border-[#D8DAE8] bg-[#F0F1F8] px-5 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#D8DAE8]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#D8DAE8]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#D8DAE8]" />
        </div>
        <p className="text-xs font-medium text-[#6366F1] uppercase tracking-wider">Wireframes</p>
        <p className="text-sm font-semibold text-[#1E1B4B]">FocusFlow — Cross-Platform Screens</p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-5">
        {/* Mobile wireframes */}
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#6B7094]">Mobile</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: "Home",
                elements: [
                  { type: "text", label: "Good morning, Kasra" },
                  { type: "block", label: "[Today's schedule — 3 meetings]" },
                  { type: "block", label: "[Focus Score ring — 72]" },
                  { type: "block", label: "[Start Focus btn]" },
                  { type: "block", label: "[Suggested: 2hr gap at 2pm]" },
                ],
              },
              {
                title: "Timer",
                elements: [
                  { type: "block", label: "[Circular progress ring]" },
                  { type: "text", label: "31:24 remaining" },
                  { type: "block", label: "[DND status: Active]" },
                  { type: "block", label: "[Pause / End buttons]" },
                  { type: "block", label: "[Session label: Deep work]" },
                ],
              },
            ].map((screen, i) => (
              <div key={i} className="rounded-xl border border-[#D8DAE8] bg-[#F0F1F8] p-3">
                <p className="mb-2 text-[10px] font-semibold text-[#1E1B4B]">{screen.title}</p>
                <div className="space-y-1.5">
                  {screen.elements.map((el, j) => (
                    <div key={j} className={`rounded-md px-2 py-1.5 text-[8px] ${el.type === "block" ? "bg-[#FAFBFE] text-[#6B7094] border border-dashed border-[#D8DAE8]" : "text-[#6B7094]"}`}>
                      {el.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web wireframe */}
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#6B7094]">Web Dashboard</p>
          <div className="rounded-xl border border-[#D8DAE8] bg-[#F0F1F8] p-3">
            <p className="mb-2 text-[10px] font-semibold text-[#1E1B4B]">Analytics & Planning</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { type: "block", label: "[Weekly focus chart — bar graph]" },
                { type: "block", label: "[Calendar — focus blocks highlighted]" },
                { type: "block", label: "[Session history list]" },
                { type: "block", label: "[Smart suggestions panel]" },
                { type: "block", label: "[Focus Score trend line]" },
                { type: "block", label: "[Meeting audit: 12hrs this week]" },
              ].map((el, j) => (
                <div key={j} className="rounded-md bg-[#FAFBFE] border border-dashed border-[#D8DAE8] px-2 py-2 text-[8px] text-[#6B7094]">
                  {el.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6366F1]/5 px-5 py-3 border-t border-[#6366F1]/20">
        <p className="text-[10px] text-[#6366F1] font-medium">Mobile for doing (starting sessions), web for planning (reviewing analytics). Wireframes validated this split with 5 testers.</p>
      </div>
    </div>
  );
}

export function FocusFlowDesignSystemMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#D8DAE8] bg-[#FAFBFE] shadow-lg">
      <div className="border-b border-[#F0F1F8] px-5 py-3">
        <p className="text-xs font-medium text-[#6366F1] uppercase tracking-wider">Design System</p>
        <p className="text-sm font-semibold text-[#1E1B4B]">FocusFlow — Tokens & Components</p>
      </div>
      <div className="p-5 space-y-5">
        {/* Colors */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#6B7094]">Colors</p>
          <div className="flex gap-2">
            {[
              { name: "Indigo", hex: "#6366F1" },
              { name: "Soft Indigo", hex: "#A5B4FC" },
              { name: "Success", hex: "#22c55e" },
              { name: "Warning", hex: "#f59e0b" },
              { name: "Danger", hex: "#ef4444" },
              { name: "BG", hex: "#FAFBFE" },
              { name: "Surface", hex: "#F0F1F8" },
              { name: "Border", hex: "#D8DAE8" },
              { name: "Text", hex: "#1E1B4B" },
              { name: "Secondary", hex: "#6B7094" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className="h-8 w-8 rounded-lg border border-[#D8DAE8]" style={{ backgroundColor: c.hex }} />
                <p className="mt-1 text-[8px] text-[#6B7094]">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#6B7094]">Typography</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-[#1E1B4B]" style={{ fontFamily: "system-ui" }}>Space Grotesk — Headings</p>
            <p className="text-sm text-[#1E1B4B]">Inter — Body Text 14px</p>
            <p className="text-xs text-[#6B7094]">Inter — Caption 12px</p>
          </div>
        </div>

        {/* Components */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#6B7094]">Components</p>
          <div className="flex flex-wrap gap-2 items-center">
            <button className="rounded-xl bg-[#6366F1] px-4 py-2 text-xs font-medium text-white shadow-lg shadow-[#6366F1]/20">Start Focus</button>
            <button className="rounded-xl bg-[#F0F1F8] px-4 py-2 text-xs text-[#6B7094] border border-[#D8DAE8]">Secondary</button>
            <span className="rounded-full bg-[#6366F1]/10 px-3 py-1 text-[10px] text-[#6366F1]">Focus Block</span>
            <span className="rounded-full bg-[#F0F1F8] px-3 py-1 text-[10px] text-[#6B7094]">Meeting</span>
            <div className="flex items-center gap-1 rounded-full bg-[#F0F1F8] px-3 py-1">
              <Flame size={12} className="text-[#f59e0b]" />
              <span className="text-[10px] text-[#1E1B4B] font-medium">5</span>
            </div>
            {/* Mini timer */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
                <path className="stroke-[#F0F1F8]" strokeWidth="3" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
                <path className="stroke-[#6366F1]" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="65, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              </svg>
              <span className="absolute text-[8px] font-bold text-[#1E1B4B]">31m</span>
            </div>
          </div>
        </div>

        {/* Motion */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#6B7094]">Motion Principles</p>
          <div className="flex gap-3">
            {[
              { label: "Calm", desc: "Slow, breathing animations" },
              { label: "Smooth", desc: "Eased transitions, 300ms" },
              { label: "Rewarding", desc: "Bloom on completion" },
            ].map((m) => (
              <div key={m.label} className="flex-1 rounded-lg bg-[#F0F1F8] p-2.5">
                <p className="text-[10px] font-medium text-[#6366F1]">{m.label}</p>
                <p className="text-[9px] text-[#6B7094]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
