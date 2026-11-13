"use client";

import { Sparkles, ChevronDown, TrendingUp, TrendingDown, ShieldCheck, ArrowRight, Users } from "lucide-react";
import { Scene, Layer, Window, Card, Avatar } from "./primitives";

const TEAL = "#2EC4B6";
const BG = "#0e1417";
const PANEL = "#141c20";
const LINE = "rgba(255,255,255,0.07)";

/* ── Chart ───────────────────────────────────────────────────────────────── */

function TrendChart({ id, height = 92 }: { id: string; height?: number }) {
  // weekly health score, 8 weeks
  const pts: [number, number][] = [
    [0, 62], [40, 58], [80, 60], [120, 50], [160, 44], [200, 38], [240, 30], [280, 22],
  ];
  const line = pts.reduce((d, [x, y], i) => (i === 0 ? `M${x},${y}` : `${d} C${x - 20},${pts[i - 1][1]} ${x - 20},${y} ${x},${y}`), "");
  const area = `${line} L280,${height} L0,${height} Z`;
  return (
    <svg viewBox={`0 0 280 ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.32" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2="280" y1={height * f} y2={height * f} stroke={LINE} strokeDasharray="2 4" />
      ))}
      <path d={area} fill={`url(#${id}-fill)`} />
      <path d={line} fill="none" stroke={TEAL} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <circle cx="280" cy="22" r="3.5" fill={BG} stroke={TEAL} strokeWidth="2" />
    </svg>
  );
}

/* ── Dashboard window ────────────────────────────────────────────────────── */

const categories = [
  { name: "Workload", score: 5.2, delta: "−0.8", risk: true },
  { name: "Management", score: 7.2, delta: "+0.1" },
  { name: "Growth", score: 7.5, delta: "+0.4" },
  { name: "Culture", score: 8.1, delta: "+0.2" },
];

export function PulseDashboard() {
  return (
    <Window url="app.teampulse.io/teams/engineering">
      <div className="h-[320px]" style={{ background: BG }}>
        {/* top bar */}
        <div className="flex items-center gap-3 border-b px-4 py-2" style={{ borderColor: LINE }}>
          <span className="text-[11px] font-extrabold tracking-tight text-white">
            Team<span style={{ color: TEAL }}>Pulse</span>
          </span>
          <span className="flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[9px] font-medium text-white/80" style={{ borderColor: LINE }}>
            <Users size={9} className="text-white/45" /> Engineering · 24 <ChevronDown size={9} className="text-white/40" />
          </span>
          <span className="ml-auto rounded-md px-2 py-0.5 text-[9px] text-white/55" style={{ background: PANEL }}>Last 30 days</span>
          <div className="flex -space-x-1.5">
            <Avatar initials="JL" color="#6f9bae" size={18} />
            <Avatar initials="RK" color="#c98b5e" size={18} />
            <Avatar initials="+3" color="#2a3a40" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_168px] gap-3 p-3.5">
          {/* left */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[
                { k: "Health score", v: "7.4", d: "+0.3", up: true },
                { k: "Response rate", v: "72%", d: "187 of 260", up: null },
                { k: "eNPS", v: "+18", d: "+6 vs Q2", up: true },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border p-2.5" style={{ background: PANEL, borderColor: LINE }}>
                  <p className="text-[8px] font-medium tracking-wide text-white/45 uppercase">{s.k}</p>
                  <p className="mt-1 text-[18px] font-bold leading-none tracking-tight text-white">{s.v}</p>
                  <p className={`mt-1 flex items-center gap-0.5 text-[8.5px] ${s.up ? "text-[#2EC4B6]" : "text-white/40"}`}>
                    {s.up && <TrendingUp size={8} />} {s.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border p-3" style={{ background: PANEL, borderColor: LINE }}>
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[9.5px] font-semibold text-white/90">Team health · weekly</p>
                <div className="flex gap-2 text-[8px] text-white/45">
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} /> Engineering</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/25" /> Company</span>
                </div>
              </div>
              <TrendChart id="pulseDash" height={86} />
              <div className="mt-1 flex justify-between text-[7.5px] text-white/35">
                {["Sep 15", "Sep 29", "Oct 13", "Oct 27", "Nov 10"].map((d) => <span key={d}>{d}</span>)}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col rounded-xl border" style={{ background: PANEL, borderColor: LINE }}>
            <p className="border-b px-3 py-2 text-[9.5px] font-semibold text-white/90" style={{ borderColor: LINE }}>By category</p>
            <ul className="flex-1 space-y-2.5 px-3 py-2.5">
              {categories.map((c) => (
                <li key={c.name}>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className={c.risk ? "font-semibold text-[#f08a7e]" : "text-white/80"}>{c.name}</span>
                    <span className="flex items-center gap-1 tabular-nums">
                      <span className="font-bold text-white">{c.score}</span>
                      <span className={c.risk ? "text-[#f08a7e]" : "text-white/40"}>{c.delta}</span>
                    </span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-white/[0.07]">
                    <div className="h-1 rounded-full" style={{ width: `${c.score * 10}%`, background: c.risk ? "#f08a7e" : TEAL }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="m-2 rounded-lg border border-[#f08a7e]/25 bg-[#f08a7e]/[0.08] px-2.5 py-2">
              <p className="flex items-center gap-1 text-[8.5px] font-semibold text-[#f08a7e]">
                <TrendingDown size={9} /> Needs attention
              </p>
              <p className="mt-0.5 text-[8.5px] leading-snug text-white/70">Workload fell for 3 straight weeks.</p>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ── Insight ─────────────────────────────────────────────────────────────── */

function InsightBody({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <p className="flex items-center gap-1.5 text-[8.5px] font-semibold tracking-wider uppercase" style={{ color: TEAL }}>
        <Sparkles size={10} /> Insight · 94% confidence
      </p>
      <p className={`mt-1.5 font-bold leading-snug text-white ${compact ? "text-[12px]" : "text-[14px]"}`}>
        Engineering workload is trending into burnout range
      </p>
      <p className="mt-1 text-[9px] leading-snug text-white/55">
        Workload score dropped 0.8 in 3 weeks while sprint scope grew 22%. 5 of 24 flagged overtime.
      </p>
      <div className="my-3 rounded-lg border p-2" style={{ background: "rgba(255,255,255,0.025)", borderColor: LINE }}>
        <TrendChart id={compact ? "pulseCardC" : "pulseCard"} height={compact ? 48 : 64} />
      </div>
      <div className="space-y-1.5">
        {[
          { t: "Move 2 sprint tasks to Platform team", primary: true },
          { t: "Schedule a 15-min workload check-in" },
        ].map((a) => (
          <div
            key={a.t}
            className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[9px] ${
              a.primary ? "font-semibold text-[#0a1210]" : "border text-white/80"
            }`}
            style={a.primary ? { background: TEAL } : { borderColor: LINE }}
          >
            {a.t}
            <ArrowRight size={10} className={a.primary ? "" : "text-white/40"} />
          </div>
        ))}
      </div>
    </>
  );
}

export function PulseInsight() {
  return (
    <Window url="app.teampulse.io/insights/1042">
      <div className="grid h-[320px] grid-cols-[1fr_190px]" style={{ background: BG }}>
        <div className="p-4">
          <InsightBody />
        </div>
        <div className="border-l p-3.5" style={{ borderColor: LINE, background: PANEL }}>
          <p className="mb-2 text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">What people said</p>
          <div className="space-y-2">
            {[
              "Sprint scope keeps growing mid-sprint.",
              "Two on-call weeks in a row was rough.",
              "Love the team, just need breathing room.",
            ].map((q) => (
              <p key={q} className="rounded-lg border px-2.5 py-2 text-[8.5px] leading-snug text-white/70" style={{ borderColor: LINE }}>
                “{q}”
              </p>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1 text-[8px] text-white/40">
            <ShieldCheck size={9} style={{ color: TEAL }} /> Responses are anonymised at n ≥ 5
          </p>
        </div>
      </div>
    </Window>
  );
}

/* ── Floating cards ──────────────────────────────────────────────────────── */

function InsightCard() {
  return (
    <Card className="p-3.5" style={{ background: "rgba(14,20,23,0.96)" }}>
      <InsightBody compact />
    </Card>
  );
}

function SurveyCard() {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#0b0f11] p-[6px] shadow-[0_30px_70px_-24px_rgba(0,0,0,0.9)]">
      <div className="overflow-hidden rounded-[21px] bg-white px-3.5 pb-4 pt-3 text-[#17181C]">
        <div className="mx-auto mb-3 h-[5px] w-12 rounded-full bg-black/80" />
        <div className="mb-3 flex items-center justify-between text-[8px] font-semibold text-[#17181C]/45">
          <span className="flex items-center gap-1" style={{ color: TEAL }}>
            <ShieldCheck size={9} /> Anonymous
          </span>
          <span>3 of 5</span>
        </div>
        <p className="text-[11px] font-bold leading-snug tracking-tight">How manageable was your workload this week?</p>
        <div className="mt-3 flex justify-between gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`flex h-7 flex-1 items-center justify-center rounded-lg text-[10px] font-bold ${
                n === 2 ? "text-white shadow-[0_6px_14px_-4px_rgba(46,196,182,0.7)]" : "border border-black/10 text-[#17181C]/55"
              }`}
              style={n === 2 ? { background: TEAL } : undefined}
            >
              {n}
            </span>
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[7px] text-[#17181C]/40">
          <span>Not at all</span>
          <span>Very</span>
        </div>
        <div className="mt-3 h-1 rounded-full bg-black/[0.06]">
          <div className="h-1 w-[60%] rounded-full" style={{ background: TEAL }} />
        </div>
      </div>
    </div>
  );
}

/* ── Scene ───────────────────────────────────────────────────────────────── */

export function TeamPulseScreens() {
  return (
    <Scene
      width={620}
      height={480}
      glows={[
        { color: TEAL, x: "36%", y: "42%", size: 400, opacity: 0.14 },
        { color: "#f08a7e", x: "90%", y: "20%", size: 220, opacity: 0.1 },
      ]}
    >
      <Layer x={0} y={30} w={560} z={10} depth={0.15}>
        <PulseDashboard />
      </Layer>
      <Layer x={372} y={240} w={248} z={20} depth={0.75} float={7.5}>
        <InsightCard />
      </Layer>
      <Layer x={16} y={212} w={150} z={30} depth={1.05} float={9} delay={0.15}>
        <SurveyCard />
      </Layer>
    </Scene>
  );
}
