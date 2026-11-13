"use client";

import { BellOff, Pause, Square, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { Scene, Layer, Window, Card, Avatar } from "./primitives";

const INDIGO = "#5B57E0";
const INK = "#1C1A2E";

/* ── Today window ────────────────────────────────────────────────────────── */

const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"];
const ROW = 42; // px per hour

const blocks = [
  { label: "Standup", start: 0, dur: 0.5, kind: "meeting" as const },
  { label: "Deep work · Design system audit", start: 0.5, dur: 1.5, kind: "focus" as const, now: true },
  { label: "Design review", start: 2, dur: 0.5, kind: "meeting" as const },
  { label: "Deep work · Onboarding flows", start: 2.5, dur: 1, kind: "focus" as const },
  { label: "Lunch", start: 3.5, dur: 1, kind: "break" as const },
  { label: "Deep work", start: 4.5, dur: 1.5, kind: "focus" as const },
];

function TimerRing({ size = 108, progress = 0.61 }: { size?: number; progress?: number }) {
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E9E8F5" strokeWidth="6" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={INDIGO}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${c * progress} ${c * (1 - progress)}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export function FlowToday() {
  const nowTop = 1.7 * ROW; // 10:42
  return (
    <Window url="focusflow.app/today" tone="light">
      <div className="flex h-[320px]" style={{ background: "#F7F7FB" }}>
        {/* timeline */}
        <div className="flex-1 border-r border-black/[0.06] px-4 pt-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-[#1C1A2E]/40">
                <ChevronLeft size={11} />
                <ChevronRight size={11} />
              </span>
              <p className="text-[12px] font-bold tracking-tight text-[#1C1A2E]">Today <span className="font-medium text-[#1C1A2E]/45">· Wed, Nov 12</span></p>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-black/[0.07] bg-white px-2 py-0.5 text-[8.5px] font-medium text-[#1C1A2E]/70 shadow-sm">
              <BellOff size={9} style={{ color: INDIGO }} /> DND until 11:30
            </span>
          </div>

          <div className="relative overflow-hidden pt-2" style={{ height: 5.6 * ROW + 8 }}>
            {hours.map((h, i) => (
              <div key={h} className="absolute inset-x-0 flex items-start gap-2" style={{ top: i * ROW + 8 }}>
                <span className="w-8 -translate-y-[6px] text-right text-[7.5px] font-medium text-[#1C1A2E]/35">{h}</span>
                <span className="mt-0 h-px flex-1 bg-black/[0.06]" />
              </div>
            ))}
            {blocks.map((b) => (
              <div
                key={b.label + b.start}
                className={`absolute left-10 right-1 rounded-lg px-2 py-1 text-[8.5px] leading-tight ${
                  b.kind === "focus"
                    ? "border border-[#5B57E0]/30 bg-[#5B57E0]/[0.1] text-[#1C1A2E]"
                    : b.kind === "meeting"
                    ? "bg-[#1C1A2E]/[0.06] text-[#1C1A2E]/75"
                    : "border border-dashed border-black/10 text-[#1C1A2E]/45"
                }`}
                style={{ top: b.start * ROW + 10, height: b.dur * ROW - 4 }}
              >
                <span className="font-semibold">{b.label}</span>
                {b.now && (
                  <span className="ml-1.5 inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] text-[7px] font-bold text-white" style={{ background: INDIGO }}>
                    NOW
                  </span>
                )}
                {b.kind === "focus" && b.dur >= 1 && (
                  <p className="mt-0.5 text-[7.5px] text-[#1C1A2E]/50">{b.dur * 60} min · notifications off</p>
                )}
              </div>
            ))}
            {/* now line */}
            <div className="absolute left-8 right-0 flex items-center" style={{ top: nowTop + 8 }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: INDIGO }} />
              <span className="h-px flex-1" style={{ background: INDIGO }} />
            </div>
          </div>
        </div>

        {/* session panel */}
        <div className="flex w-[196px] shrink-0 flex-col items-center px-4 pt-4 text-center">
          <p className="text-[8.5px] font-semibold tracking-wider uppercase" style={{ color: INDIGO }}>Deep work</p>
          <div className="relative mt-2">
            <TimerRing />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[20px] font-extrabold leading-none tracking-tight tabular-nums text-[#1C1A2E]">23:47</span>
              <span className="mt-0.5 text-[7.5px] text-[#1C1A2E]/45">of 90 min left</span>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            <button className="flex items-center gap-1 rounded-lg border border-black/[0.08] bg-white px-2.5 py-1.5 text-[8.5px] font-semibold text-[#1C1A2E]/80">
              <Pause size={9} /> Pause
            </button>
            <button className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[8.5px] font-semibold text-white" style={{ background: INK }}>
              <Square size={8} /> End
            </button>
          </div>
          <div className="mt-4 w-full rounded-xl border border-black/[0.06] bg-white p-2.5 text-left">
            <p className="text-[8px] font-semibold text-[#1C1A2E]/45 uppercase tracking-wider">Blocking</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              {[
                { i: "S", c: "#4A154B" },
                { i: "M", c: "#2F6FE4" },
                { i: "F", c: "#1C1A2E" },
                { i: "X", c: "#111" },
              ].map((a) => (
                <Avatar key={a.i} initials={a.i} color={a.c} size={18} className="!rounded-[5px]" />
              ))}
              <span className="ml-auto text-[8px] text-[#1C1A2E]/50">14 muted</span>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ── Insights window ─────────────────────────────────────────────────────── */

const week = [
  { d: "Mon", h: 3.2 },
  { d: "Tue", h: 4.1 },
  { d: "Wed", h: 2.4 },
  { d: "Thu", h: 4.6 },
  { d: "Fri", h: 4.2 },
];

function WeekBars({ height = 80 }: { height?: number }) {
  const max = 5;
  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {week.map((w, i) => (
        <div key={w.d} className="flex flex-1 flex-col items-center gap-1">
          <span className="w-full rounded-md" style={{ height: `${(w.h / max) * (height - 14)}px`, background: i === 3 ? INDIGO : "rgba(91,87,224,0.25)" }} />
          <span className="text-[7.5px] text-[#1C1A2E]/45">{w.d}</span>
        </div>
      ))}
    </div>
  );
}

export function FlowInsights() {
  return (
    <Window url="focusflow.app/insights" tone="light">
      <div className="h-[320px] p-5" style={{ background: "#F7F7FB" }}>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[8.5px] font-semibold tracking-wider text-[#1C1A2E]/45 uppercase">This week</p>
            <h3 className="mt-0.5 text-[14px] font-bold tracking-tight text-[#1C1A2E]">18.5h of deep work</h3>
          </div>
          <span className="rounded-full bg-[#2F9E5B]/12 px-2 py-0.5 text-[9px] font-bold text-[#2F9E5B]">+3.2h vs last week</span>
        </div>
        <div className="grid grid-cols-[1fr_150px] gap-4">
          <div className="rounded-xl border border-black/[0.06] bg-white p-3">
            <WeekBars height={120} />
          </div>
          <div className="space-y-2">
            {[
              { k: "Sessions", v: "24", s: "avg 46 min" },
              { k: "Focus score", v: "82", s: "top 10% of users" },
              { k: "Streak", v: "5 days", s: "personal best", flame: true },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-black/[0.06] bg-white p-2.5">
                <p className="text-[8px] text-[#1C1A2E]/50">{s.k}</p>
                <p className="flex items-center gap-1 text-[13px] font-bold tracking-tight text-[#1C1A2E]">
                  {s.v} {s.flame && <Flame size={11} className="text-[#f59e0b]" />}
                </p>
                <p className="text-[7.5px] text-[#1C1A2E]/45">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[9px] text-[#1C1A2E]/55">Your best focus window is 9:30–11:00. Meetings after 2 PM cost you the least.</p>
      </div>
    </Window>
  );
}

/* ── Floating cards ──────────────────────────────────────────────────────── */

function NotificationCard() {
  return (
    <Card tone="light" className="flex items-start gap-2.5 p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] text-[13px] font-black text-white shadow-[0_6px_14px_-4px_rgba(91,87,224,0.7)]" style={{ background: INDIGO }}>
        F
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-[#1C1A2E]">FocusFlow</p>
          <span className="text-[8px] text-[#1C1A2E]/40">now</span>
        </div>
        <p className="text-[9px] leading-snug text-[#1C1A2E]/75">
          Slack status set to <span className="font-semibold text-[#1C1A2E]">🎯 Deep work</span>. Notifications paused until 11:30.
        </p>
      </div>
    </Card>
  );
}

function WeekCard() {
  return (
    <Card tone="light" className="p-3.5">
      <div className="flex items-baseline justify-between">
        <p className="text-[8.5px] font-semibold tracking-wider text-[#1C1A2E]/45 uppercase">This week</p>
        <span className="text-[8.5px] font-bold text-[#2F9E5B]">+3.2h</span>
      </div>
      <p className="mt-0.5 text-[20px] font-extrabold leading-none tracking-tight text-[#1C1A2E]">18.5h</p>
      <div className="mt-3">
        <WeekBars height={64} />
      </div>
    </Card>
  );
}

/* ── Scene ───────────────────────────────────────────────────────────────── */

export function FocusFlowScreens() {
  return (
    <Scene
      width={620}
      height={470}
      glows={[
        { color: INDIGO, x: "40%", y: "45%", size: 420, opacity: 0.16 },
        { color: "#2F9E5B", x: "88%", y: "90%", size: 240, opacity: 0.08 },
      ]}
    >
      <Layer x={0} y={38} w={560} z={10} depth={0.15}>
        <FlowToday />
      </Layer>
      <Layer x={330} y={0} w={286} z={20} depth={0.7} float={7.5}>
        <NotificationCard />
      </Layer>
      <Layer x={16} y={312} w={200} z={30} depth={1.05} float={9} delay={0.15}>
        <WeekCard />
      </Layer>
    </Scene>
  );
}
