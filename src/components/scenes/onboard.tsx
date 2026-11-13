"use client";

import { Check, FolderKanban, Zap, ListChecks, Calendar, Users, Upload, Bell, LayoutDashboard, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import { Scene, Layer, Window, Card } from "./primitives";

const GREEN = "#10B981";
const INK = "#17181C";

const steps = [
  { label: "Welcome", done: true },
  { label: "Your use case", active: true },
  { label: "Invite team", done: false },
  { label: "Import tasks", done: false },
  { label: "Done", done: false },
];

const options = [
  { icon: FolderKanban, title: "Manage projects", desc: "Timelines, owners and deadlines in one place.", selected: true },
  { icon: Zap, title: "Run sprints", desc: "Backlogs, points and burndown charts." },
  { icon: ListChecks, title: "Personal tasks", desc: "A simple list that stays out of your way." },
];

/* ── Setup window ────────────────────────────────────────────────────────── */

export function TasklySetup() {
  return (
    <Window url="taskly.app/setup/use-case" tone="light">
      <div className="flex h-[320px]">
        {/* stepper rail */}
        <div className="flex w-[156px] shrink-0 flex-col border-r border-black/[0.06] bg-white px-4 py-4">
          <p className="mb-5 flex items-center gap-1.5 text-[12px] font-extrabold tracking-tight text-[#17181C]">
            <span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-[#10B981] text-white">
              <Check size={10} strokeWidth={3.5} />
            </span>
            Taskly
          </p>
          <ol className="relative space-y-3.5">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-black/[0.08]" />
            {steps.map((s) => (
              <li key={s.label} className="relative flex items-center gap-2.5">
                <span
                  className={`relative z-[1] flex h-[15px] w-[15px] items-center justify-center rounded-full text-[8px] ${
                    s.done
                      ? "bg-[#10B981] text-white"
                      : s.active
                      ? "border-[2px] border-[#10B981] bg-white"
                      : "border border-black/15 bg-white"
                  }`}
                >
                  {s.done && <Check size={9} strokeWidth={3.5} />}
                  {s.active && <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />}
                </span>
                <span className={`text-[9.5px] ${s.active ? "font-semibold text-[#17181C]" : s.done ? "text-[#17181C]/70" : "text-[#17181C]/40"}`}>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-auto text-[8.5px] leading-snug text-[#17181C]/40">You can change any of this later from Settings.</p>
        </div>

        {/* main */}
        <div className="flex flex-1 flex-col px-6 py-4">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-[8.5px] font-semibold tracking-wider text-[#10B981] uppercase">Step 2 of 5</p>
              <h3 className="mt-0.5 text-[15px] font-bold tracking-tight text-[#17181C]">What brings you to Taskly?</h3>
              <p className="mt-0.5 text-[9.5px] text-[#17181C]/55">We&apos;ll set up your first workspace around it.</p>
            </div>
            <span className="rounded-full bg-[#17181C]/[0.05] px-2 py-0.5 text-[8.5px] font-medium tabular-nums text-[#17181C]/60">2:14 elapsed</span>
          </div>

          <div className="space-y-2">
            {options.map((o) => (
              <div
                key={o.title}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors ${
                  o.selected ? "border-[#10B981] bg-[#10B981]/[0.06] shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" : "border-black/[0.08] bg-white"
                }`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${o.selected ? "bg-[#10B981] text-white" : "bg-[#17181C]/[0.05] text-[#17181C]/60"}`}>
                  <o.icon size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-semibold text-[#17181C]">{o.title}</p>
                  <p className="text-[9px] text-[#17181C]/50">{o.desc}</p>
                </div>
                <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${o.selected ? "border-[#10B981] bg-[#10B981] text-white" : "border-black/15"}`}>
                  {o.selected && <Check size={10} strokeWidth={3.5} />}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="text-[9px] font-medium text-[#17181C]/45">Skip for now</span>
            <button className="flex items-center gap-1.5 rounded-lg bg-[#17181C] px-3.5 py-2 text-[10px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(23,24,28,0.6)]">
              Continue <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ── Compare window ──────────────────────────────────────────────────────── */

function Bar({ label, value, max, color, caption }: { label: string; value: number; max: number; color: string; caption: string }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[9.5px] font-semibold text-[#17181C]">{label}</span>
        <span className="text-[9px] text-[#17181C]/50">{caption}</span>
      </div>
      <div className="h-2.5 rounded-full bg-[#17181C]/[0.06]">
        <div className="h-2.5 rounded-full" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
    </div>
  );
}

export function TasklyCompare() {
  return (
    <Window url="taskly.app/research/usability-round-2" tone="light">
      <div className="h-[320px] p-5">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[8.5px] font-semibold tracking-wider text-[#17181C]/45 uppercase">Usability test · 8 participants</p>
            <h3 className="mt-0.5 text-[14px] font-bold tracking-tight text-[#17181C]">Time to first task created</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#10B981]/12 px-2 py-0.5 text-[9px] font-bold text-[#059669]">
            <TrendingDown size={10} /> −68%
          </span>
        </div>
        <div className="space-y-3.5">
          <Bar label="Before · 11-field form" value={12} max={12} color="#C9CBD3" caption="12:06 avg" />
          <Bar label="After · 3-step guided setup" value={3.8} max={12} color={GREEN} caption="3:48 avg" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { k: "Drop-off", v: "41% → 17%" },
            { k: "Completed setup", v: "6 of 8" },
            { k: "SUS score", v: "82" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-black/[0.06] bg-white p-3">
              <p className="text-[8.5px] text-[#17181C]/50">{s.k}</p>
              <p className="mt-0.5 text-[13px] font-bold tracking-tight text-[#17181C]">{s.v}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-[9px] text-[#17181C]/55">
          <Sparkles size={10} className="text-[#10B981]" /> Biggest win: asking for the use case before the form, not after.
        </p>
      </div>
    </Window>
  );
}

/* ── Floating cards ──────────────────────────────────────────────────────── */

function MetricCard() {
  return (
    <Card tone="light" className="p-3.5">
      <p className="text-[8.5px] font-semibold tracking-wider text-[#17181C]/45 uppercase">Time to value</p>
      <div className="mt-1 flex items-end gap-2">
        <span className="text-[26px] font-extrabold leading-none tracking-tight text-[#17181C]">3:48</span>
        <span className="mb-[3px] text-[10px] text-[#17181C]/40 line-through">12:06</span>
        <span className="mb-[2px] ml-auto rounded-full bg-[#10B981]/12 px-1.5 py-0.5 text-[8.5px] font-bold text-[#059669]">−68%</span>
      </div>
      <div className="mt-3 flex h-8 items-end gap-1">
        {[12, 11.2, 9.8, 7.5, 5.1, 4.2, 3.8].map((v, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{ height: `${(v / 12) * 100}%`, background: i === 6 ? GREEN : "rgba(23,24,28,0.1)" }}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[8px] text-[#17181C]/45">Across 7 test sessions</p>
    </Card>
  );
}

const checklist = [
  { icon: Calendar, label: "Connect calendar", done: true },
  { icon: Users, label: "Invite 3 teammates", done: true },
  { icon: Upload, label: "Import from Jira", done: true, active: false },
  { icon: Bell, label: "Notification rules", done: false },
  { icon: LayoutDashboard, label: "First dashboard", done: false },
];

function ChecklistCard() {
  const done = checklist.filter((c) => c.done).length;
  return (
    <Card tone="light" className="p-3.5">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[10.5px] font-bold text-[#17181C]">Workspace ready</p>
        <span className="text-[9px] font-semibold text-[#17181C]/50">{done}/5</span>
      </div>
      <div className="mb-3 flex gap-1">
        {checklist.map((c, i) => (
          <span key={i} className="h-1 flex-1 rounded-full" style={{ background: c.done ? GREEN : "rgba(23,24,28,0.08)" }} />
        ))}
      </div>
      <ul className="space-y-2">
        {checklist.map((c) => (
          <li key={c.label} className="flex items-center gap-2">
            <span className={`flex h-[15px] w-[15px] items-center justify-center rounded-full ${c.done ? "bg-[#10B981] text-white" : "border border-black/15"}`}>
              {c.done && <Check size={9} strokeWidth={3.5} />}
            </span>
            <c.icon size={10} className="text-[#17181C]/40" />
            <span className={`text-[9.5px] ${c.done ? "text-[#17181C]/45 line-through" : "font-medium text-[#17181C]"}`}>{c.label}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ── Scene ───────────────────────────────────────────────────────────────── */

export function OnboardScreens() {
  return (
    <Scene
      width={620}
      height={470}
      glows={[
        { color: GREEN, x: "38%", y: "40%", size: 400, opacity: 0.14 },
        { color: INK, x: "80%", y: "80%", size: 300, opacity: 0.3 },
      ]}
    >
      <Layer x={0} y={40} w={560} z={10} depth={0.15}>
        <TasklySetup />
      </Layer>
      <Layer x={400} y={0} w={216} z={20} depth={0.7} float={7.5}>
        <MetricCard />
      </Layer>
      <Layer x={18} y={300} w={222} z={30} depth={1.05} float={9} delay={0.15}>
        <ChecklistCard />
      </Layer>
    </Scene>
  );
}
