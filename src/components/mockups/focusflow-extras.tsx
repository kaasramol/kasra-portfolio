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
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-lg">
      <div className="border-b border-[#2C3B4D] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Competitive Analysis</p>
        <p className="text-sm font-semibold text-[#EEE9DF]">Focus Tool Landscape</p>
      </div>
      <div className="relative h-[300px] p-5">
        {/* Axes */}
        <div className="absolute left-12 top-5 bottom-10 w-px bg-[#2C3B4D]" />
        <div className="absolute left-12 right-5 bottom-10 h-px bg-[#2C3B4D]" />

        {/* Labels */}
        <span className="absolute left-0 top-8 text-[9px] text-[#8a8275] rotate-[-90deg] origin-right">Calendar-Aware</span>
        <span className="absolute left-0 bottom-16 text-[9px] text-[#8a8275] rotate-[-90deg] origin-right">No Calendar</span>
        <span className="absolute left-14 bottom-2 text-[9px] text-[#8a8275]">Block Only</span>
        <span className="absolute right-5 bottom-2 text-[9px] text-[#8a8275]">Full Focus Suite</span>

        {/* Opportunity zone */}
        <div className="absolute rounded-full bg-[#FFB162]/5 border-2 border-dashed border-[#FFB162]/30" style={{ left: "38%", top: "28%", width: "22%", height: "28%" }} />

        {/* Tools */}
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="absolute flex flex-col items-center"
            style={{ left: `${tool.x}%`, top: `${tool.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className={`rounded-full ${tool.name === "FocusFlow" ? "bg-[#FFB162] ring-4 ring-[#FFB162]/20" : "bg-[#8a8275]/60"} ${tool.size === "lg" ? "h-4 w-4" : tool.size === "md" ? "h-3 w-3" : "h-2.5 w-2.5"}`} />
            <span className={`mt-1 text-[9px] font-medium ${tool.name === "FocusFlow" ? "text-[#FFB162]" : "text-[#8a8275]"}`}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-[#FFB162]/5 px-5 py-3 border-t border-[#FFB162]/20">
        <p className="text-[10px] text-[#FFB162] font-medium">Gap: No tool combines calendar awareness + active focus support in a simple package.</p>
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
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-lg">
      <div className="border-b border-[#2C3B4D] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Journey Map</p>
        <p className="text-sm font-semibold text-[#EEE9DF]">A Day in the Life — Dev Dana</p>
        <p className="text-[10px] text-[#8a8275] mt-0.5">Total focus: ~65 min out of 4 hours</p>
      </div>
      <div className="p-4 space-y-1">
        {hours.map((h, i) => (
          <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${h.focus ? "bg-[#FFB162]/10 border border-[#FFB162]/20" : "bg-[#2C3B4D]/50"}`}>
            <span className="w-10 text-[10px] font-medium text-[#C9C1B1]">{h.time}</span>
            <span className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${h.emotion === "Positive" ? "bg-[#22c55e]/15 text-[#22c55e]" : h.emotion === "Frustrated" ? "bg-[#ef4444]/15 text-[#ef4444]" : h.emotion === "Low" ? "bg-[#f59e0b]/15 text-[#f59e0b]" : "bg-[#3a5060] text-[#C9C1B1]"}`}>{h.emotion}</span>
            <div className="flex-1">
              <p className="text-xs text-[#EEE9DF]">{h.event}</p>
              <p className="text-[9px] text-[#8a8275]">{h.duration}</p>
            </div>
            <div className="w-16">
              <div className="h-1.5 w-full rounded-full bg-[#2C3B4D]">
                <div
                  className={`h-1.5 rounded-full ${h.focus ? "bg-[#FFB162]" : h.score > 40 ? "bg-[#f59e0b]" : "bg-[#ef4444]"}`}
                  style={{ width: `${h.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#FFB162]/5 px-5 py-3 border-t border-[#FFB162]/20">
        <p className="text-[10px] text-[#FFB162] font-medium">FocusFlow intervention points: auto-DND at 8:00, intercept Slack at 8:25, suggest focus block at 9:20, weekly meeting audit</p>
      </div>
    </div>
  );
}

export function FocusFlowDesignSystemMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-lg">
      <div className="border-b border-[#2C3B4D] px-5 py-3">
        <p className="text-xs font-medium text-[#FFB162] uppercase tracking-wider">Design System</p>
        <p className="text-sm font-semibold text-[#EEE9DF]">FocusFlow — Tokens & Components</p>
      </div>
      <div className="p-5 space-y-5">
        {/* Colors */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Colors</p>
          <div className="flex gap-2">
            {[
              { name: "Primary", hex: "#FFB162" },
              { name: "Success", hex: "#22c55e" },
              { name: "Warning", hex: "#f59e0b" },
              { name: "Danger", hex: "#ef4444" },
              { name: "BG", hex: "#1B2632" },
              { name: "Surface", hex: "#2C3B4D" },
              { name: "Text", hex: "#EEE9DF" },
              { name: "Muted", hex: "#8a8275" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className="h-8 w-8 rounded-lg border border-[#3a5060]" style={{ backgroundColor: c.hex }} />
                <p className="mt-1 text-[8px] text-[#8a8275]">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Typography</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-[#EEE9DF]" style={{ fontFamily: "system-ui" }}>Space Grotesk — Headings</p>
            <p className="text-sm text-[#EEE9DF]">Inter — Body Text 14px</p>
            <p className="text-xs text-[#C9C1B1]">Inter — Caption 12px</p>
          </div>
        </div>

        {/* Components */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Components</p>
          <div className="flex flex-wrap gap-2 items-center">
            <button className="rounded-xl bg-[#FFB162] px-4 py-2 text-xs font-medium text-[#1B2632] shadow-lg shadow-[#FFB162]/20">Start Focus</button>
            <button className="rounded-xl bg-[#2C3B4D] px-4 py-2 text-xs text-[#C9C1B1] border border-[#3a5060]">Secondary</button>
            <span className="rounded-full bg-[#FFB162]/10 px-3 py-1 text-[10px] text-[#FFB162]">Focus Block</span>
            <span className="rounded-full bg-[#2C3B4D] px-3 py-1 text-[10px] text-[#C9C1B1]">Meeting</span>
            <div className="flex items-center gap-1 rounded-full bg-[#2C3B4D] px-3 py-1">
              <Flame size={12} className="text-[#f59e0b]" />
              <span className="text-[10px] text-[#EEE9DF] font-medium">5</span>
            </div>
            {/* Mini timer */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
                <path className="stroke-[#2C3B4D]" strokeWidth="3" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
                <path className="stroke-[#FFB162]" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="65, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              </svg>
              <span className="absolute text-[8px] font-bold text-[#EEE9DF]">31m</span>
            </div>
          </div>
        </div>

        {/* Motion */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Motion Principles</p>
          <div className="flex gap-3">
            {[
              { label: "Calm", desc: "Slow, breathing animations" },
              { label: "Smooth", desc: "Eased transitions, 300ms" },
              { label: "Rewarding", desc: "Bloom on completion" },
            ].map((m) => (
              <div key={m.label} className="flex-1 rounded-lg bg-[#2C3B4D] p-2.5">
                <p className="text-[10px] font-medium text-[#FFB162]">{m.label}</p>
                <p className="text-[9px] text-[#8a8275]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
