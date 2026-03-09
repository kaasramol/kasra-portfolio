import { BarChart3, ClipboardList, Users, Lightbulb, CheckCircle, Settings, TrendingDown, Minus, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={18} />,
  ClipboardList: <ClipboardList size={18} />,
  Users: <Users size={18} />,
  Lightbulb: <Lightbulb size={18} />,
  CheckCircle: <CheckCircle size={18} />,
  Settings: <Settings size={18} />,
};

export function AffinityMapMockup() {
  const clusters = [
    {
      title: "Time & Speed",
      color: "#FFB162",
      notes: ["Takes 2-3 weeks to compile results", "By the time I see data it's stale", "Need real-time not quarterly", "Results arrive too late to act"],
    },
    {
      title: "Trust & Anonymity",
      color: "#ef4444",
      notes: ["Don't trust responses are anonymous", "Small teams = easy to identify who said what", "People give safe answers, not honest ones", "Need minimum group sizes"],
    },
    {
      title: "Action & Follow-through",
      color: "#22c55e",
      notes: ["Nothing changes after surveys", "Managers don't know what to do", "No accountability for follow-up", "Employees feel unheard"],
    },
    {
      title: "Manager Experience",
      color: "#f59e0b",
      notes: ["Reports are too generic", "Need team-specific insights", "Want suggested actions", "Don't have time for analysis"],
    },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#E5DFD3] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#EEE9DF] px-5 py-3">
        <p className="text-xs font-medium text-[#A35139] uppercase tracking-wider">Research Synthesis</p>
        <p className="text-sm font-semibold text-[#1B2632]">Affinity Map — 8 Interviews + 27 Survey Responses</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
        {clusters.map((cluster) => (
          <div key={cluster.title} className="rounded-xl bg-[#EEE9DF] border border-[#d5cfc5] p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cluster.color }} />
              <span className="text-[10px] font-semibold text-[#1B2632]">{cluster.title}</span>
            </div>
            <div className="space-y-1.5">
              {cluster.notes.map((note, i) => (
                <div
                  key={i}
                  className="rounded-md px-2 py-1.5 text-[9px] text-[#2C3B4D]"
                  style={{ backgroundColor: `${cluster.color}08`, borderLeft: `2px solid ${cluster.color}40` }}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompetitivePositioningMockup() {
  const tools = [
    { name: "Culture Amp", x: 80, y: 25, size: "lg" },
    { name: "Lattice", x: 65, y: 35, size: "md" },
    { name: "15Five", x: 55, y: 55, size: "md" },
    { name: "Officevibe", x: 30, y: 65, size: "sm" },
    { name: "Google Forms", x: 15, y: 85, size: "sm" },
    { name: "TeamPulse", x: 40, y: 40, size: "lg" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#A35139] uppercase tracking-wider">Market Analysis</p>
        <p className="text-sm font-semibold text-[#1B2632]">Competitive Positioning Map</p>
      </div>
      <div className="relative h-[350px] p-5">
        {/* Axes */}
        <div className="absolute left-12 top-5 bottom-10 w-px bg-[#d5cfc5]" />
        <div className="absolute left-12 right-5 bottom-10 h-px bg-[#d5cfc5]" />

        {/* Labels */}
        <span className="absolute left-0 top-5 text-[9px] text-[#8a8275] rotate-[-90deg] origin-right">Enterprise</span>
        <span className="absolute left-0 bottom-14 text-[9px] text-[#8a8275] rotate-[-90deg] origin-right">Simple</span>
        <span className="absolute left-14 bottom-2 text-[9px] text-[#8a8275]">Data Collection</span>
        <span className="absolute right-5 bottom-2 text-[9px] text-[#8a8275]">Action-Driven</span>

        {/* Quadrant labels */}
        <span className="absolute left-16 top-8 text-[8px] text-[#C9C1B1]">Enterprise + Data</span>
        <span className="absolute right-8 top-8 text-[8px] text-[#C9C1B1]">Enterprise + Action</span>
        <span className="absolute left-16 bottom-14 text-[8px] text-[#C9C1B1]">Simple + Data</span>
        <span className="absolute right-8 bottom-14 text-[8px] text-[#C9C1B1]">Simple + Action</span>

        {/* Opportunity zone */}
        <div className="absolute rounded-full bg-[#A35139]/5 border-2 border-dashed border-[#A35139]/30" style={{ left: "30%", top: "30%", width: "25%", height: "30%" }} />

        {/* Dots */}
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="absolute flex flex-col items-center"
            style={{ left: `${tool.x}%`, top: `${tool.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className={`rounded-full ${tool.name === "TeamPulse" ? "bg-[#A35139] ring-4 ring-[#A35139]/20" : "bg-[#8a8275]"} ${tool.size === "lg" ? "h-4 w-4" : tool.size === "md" ? "h-3 w-3" : "h-2.5 w-2.5"}`} />
            <span className={`mt-1 text-[9px] font-medium ${tool.name === "TeamPulse" ? "text-[#A35139]" : "text-[#8a8275]"}`}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-[#A35139]/5 px-5 py-3 border-t border-[#A35139]/20">
        <p className="text-[10px] text-[#A35139] font-medium">Opportunity: Simple + Action-driven tool for mid-size companies. No competitor owns this space.</p>
      </div>
    </div>
  );
}

export function IADiagramMockup() {
  const sections = [
    {
      name: "Dashboard",
      icon: "BarChart3",
      children: ["Health Score", "Trends", "Alerts", "Quick Actions"],
    },
    {
      name: "Surveys",
      icon: "ClipboardList",
      children: ["Active", "Create New", "Templates", "History"],
    },
    {
      name: "Teams",
      icon: "Users",
      children: ["Overview", "Team Detail", "Compare"],
    },
    {
      name: "Insights",
      icon: "Lightbulb",
      children: ["AI Summary", "Themes", "Risk Indicators"],
    },
    {
      name: "Actions",
      icon: "CheckCircle",
      children: ["My Actions", "All Actions", "Impact"],
    },
    {
      name: "Settings",
      icon: "Settings",
      children: ["Frequency", "Anonymity", "Integrations"],
    },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#A35139] uppercase tracking-wider">Information Architecture</p>
        <p className="text-sm font-semibold text-[#1B2632]">TeamPulse — Site Structure</p>
      </div>
      <div className="p-5">
        {/* Root */}
        <div className="mb-4 flex justify-center">
          <div className="rounded-xl bg-[#A35139] px-4 py-2 text-sm font-semibold text-white">
            TeamPulse
          </div>
        </div>
        {/* Connector */}
        <div className="mx-auto mb-4 h-4 w-px bg-[#d5cfc5]" />
        {/* Sections */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {sections.map((section) => (
            <div key={section.name} className="rounded-lg border border-[#d5cfc5] bg-[#E5DFD3] p-3">
              <div className="mb-2 text-center">
                <span className="text-lg">{iconMap[section.icon]}</span>
                <p className="text-[10px] font-semibold text-[#1B2632]">{section.name}</p>
              </div>
              <div className="space-y-1">
                {section.children.map((child) => (
                  <div key={child} className="rounded bg-[#EEE9DF] px-2 py-1 text-[8px] text-[#8a8275] border border-[#d5cfc5]">
                    {child}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#E5DFD3] px-5 py-3 border-t border-[#d5cfc5]">
        <p className="text-[10px] text-[#8a8275]">Validated through card sorting with 8 participants. Three categories emerged: Understand, Act, Configure.</p>
      </div>
    </div>
  );
}

export function TeamPulseManagerViewMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#E5DFD3] shadow-lg">
      <div className="flex items-center justify-between border-b border-[#d5cfc5] bg-[#EEE9DF] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#1B2632]">Team<span className="text-[#A35139]">Pulse</span></span>
          <span className="rounded-full bg-[#FFB162]/10 px-2 py-0.5 text-[10px] text-[#FFB162]">Manager</span>
        </div>
        <span className="text-xs text-[#8a8275]">Engineering Team · 12 members</span>
      </div>
      <div className="p-5">
        {/* Team score */}
        <div className="mb-5 flex items-center gap-5">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
              <path className="stroke-[#d5cfc5]" strokeWidth="3" fill="none" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
              <path className="stroke-[#f59e0b]" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="62, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" />
            </svg>
            <span className="absolute text-xl font-bold text-[#1B2632]">6.2</span>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1B2632]">Team Health</p>
            <p className="flex items-center gap-0.5 text-xs text-[#ef4444]"><TrendingDown size={12} /> 0.8 from last month</p>
            <p className="mt-1 text-[10px] text-[#8a8275]">Below company avg (7.4)</p>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { cat: "Workload", score: 5.2, trend: "down", color: "#ef4444" },
            { cat: "Growth", score: 7.0, trend: "stable", color: "#f59e0b" },
            { cat: "Culture", score: 6.8, trend: "down", color: "#f59e0b" },
            { cat: "Management", score: 5.8, trend: "down", color: "#ef4444" },
          ].map((c) => (
            <div key={c.cat} className="flex items-center justify-between rounded-lg bg-[#EEE9DF] border border-[#d5cfc5] px-3 py-2.5">
              <span className="text-xs text-[#8a8275]">{c.cat}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#1B2632]">{c.score}</span>
                <span style={{ color: c.color }}>{c.trend === "down" ? <TrendingDown size={12} /> : <Minus size={12} />}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Open actions */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Open Action Items</p>
        <div className="space-y-2">
          {[
            { action: "Redistribute sprint tasks across team", due: "Mar 8", status: "In Progress" },
            { action: "Cancel non-essential Friday meetings", due: "Mar 5", status: "Done" },
            { action: "Schedule 1:1s with top 3 overtime reporters", due: "Mar 10", status: "Pending" },
          ].map((a, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-[#EEE9DF] border border-[#d5cfc5] px-3 py-2">
              <span className="text-xs text-[#2C3B4D]">{a.action}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#8a8275]">{a.due}</span>
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${a.status === "Done" ? "bg-[#22c55e]/10 text-[#22c55e]" : a.status === "In Progress" ? "bg-[#FFB162]/10 text-[#FFB162]" : "bg-[#d5cfc5] text-[#8a8275]"}`}>
                  {a.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesignSystemMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-lg">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#A35139] uppercase tracking-wider">Design System</p>
        <p className="text-sm font-semibold text-[#1B2632]">TeamPulse — Component Library</p>
      </div>
      <div className="p-5 space-y-5">
        {/* Colors */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Colors</p>
          <div className="flex gap-2">
            {[
              { name: "Primary", hex: "#A35139" },
              { name: "Info", hex: "#FFB162" },
              { name: "Warning", hex: "#f59e0b" },
              { name: "Danger", hex: "#ef4444" },
              { name: "Text", hex: "#1B2632" },
              { name: "Muted", hex: "#8a8275" },
              { name: "Background", hex: "#E5DFD3" },
              { name: "Border", hex: "#d5cfc5" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className="h-8 w-8 rounded-lg border border-[#d5cfc5]" style={{ backgroundColor: c.hex }} />
                <p className="mt-1 text-[8px] text-[#8a8275]">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Typography — Inter</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-[#1B2632]">Heading — 18px Bold</p>
            <p className="text-sm font-medium text-[#1B2632]">Subheading — 14px Medium</p>
            <p className="text-xs text-[#8a8275]">Body — 12px Regular</p>
            <p className="text-[10px] text-[#C9C1B1]">Caption — 10px Regular</p>
          </div>
        </div>

        {/* Components */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Key Components</p>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-[#A35139] px-3 py-1.5 text-xs font-medium text-white">Primary Button</button>
            <button className="rounded-lg border border-[#d5cfc5] bg-[#EEE9DF] px-3 py-1.5 text-xs text-[#2C3B4D]">Secondary</button>
            <span className="rounded-full bg-[#22c55e]/10 px-2 py-1 text-[10px] font-medium text-[#22c55e]">Success Badge</span>
            <span className="rounded-full bg-[#ef4444]/10 px-2 py-1 text-[10px] font-medium text-[#ef4444]">Alert Badge</span>
            <div className="flex items-center gap-1 rounded-lg bg-[#E5DFD3] border border-[#d5cfc5] px-2 py-1">
              <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
              <span className="text-[10px] text-[#1B2632]">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
