"use client";

import { Play, Pause, Square, BellOff, Calendar, BarChart3, Home, Settings, Flame, ChevronRight } from "lucide-react";
import { Avatar } from "@/components/scenes/primitives";
import { Fit, Phone } from "./fit";
import {
  WfBoard, WfFrame, WfBox, WfLines, WfHeading, WfBtn, WfCircle, WfChart, WfStat, WfTabs, WfNote, WfHand, WfArrow,
} from "./wireframe";

const INDIGO = "#5B57E0";
const INK = "#1C1A2E";

/* ── Wireframes ─────────────────────────────────────────────────────────── */

export function FocusFlowWireframes() {
  return (
    <WfBoard label="Lo-fi wireframes · mobile + web" meta="Paper → Figma · 3 timer styles tested" accent={INDIGO}>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-12">
        <WfFrame kind="mobile" width={136} rotate={-2} rejected label="v1 · stats first">
          <WfHeading w={50} />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <WfStat /><WfStat /><WfStat /><WfStat />
          </div>
          <WfChart className="mt-2" h={48} kind="bars" />
          <WfBtn className="mt-3" label="Start session" />
          <WfTabs className="mt-3" />
        </WfFrame>

        <WfFrame kind="mobile" width={148} rotate={1} label="v2 · home = next block">
          <WfLines widths={[40]} gap={0} />
          <WfHeading className="mt-1" w={70} />
          <div className="mt-2.5 rounded-[5px] border-[1.3px] border-[#3a3a3a] p-2" style={{ background: "rgba(0,0,0,0.05)" }}>
            <WfLines widths={[55]} gap={0} />
            <WfHeading className="mt-1.5" w={85} />
            <WfBtn small primary className="mt-2" label="Start now" />
          </div>
          <WfLines className="mt-3" widths={[35]} gap={0} />
          <div className="mt-1 space-y-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-5 text-[6.5px] text-[#8d8a82]">{9 + i}:00</span>
                <span className="h-4 flex-1 rounded-[3px] border-[1.2px] border-[#3a3a3a]" style={{ background: i === 1 ? "rgba(0,0,0,0.08)" : "transparent" }} />
              </div>
            ))}
          </div>
          <WfTabs className="mt-3" />
        </WfFrame>

        <WfFrame kind="mobile" width={148} rotate={-0.7} label="session · ring timer">
          <WfLines className="items-center" widths={[40]} gap={0} />
          <div className="relative mx-auto mt-4 h-[88px] w-[88px]">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#d6d2c8" strokeWidth="7" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#3a3a3a" strokeWidth="7" strokeLinecap="round" strokeDasharray="165 264" transform="rotate(-90 50 50)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center"><WfHeading w={40} /></div>
          </div>
          <WfLines className="mt-4 items-center" widths={[70]} />
          <div className="mt-3 flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => <WfCircle key={i} size={14} />)}
          </div>
          <div className="mt-3 flex gap-1.5">
            <WfBtn small className="flex-1" label="Pause" /><WfBtn small primary className="flex-1" label="End" />
          </div>
        </WfFrame>

        <WfFrame kind="mobile" width={120} rotate={2} rejected label="digits only">
          <div className="mt-8 text-center text-[22px] font-bold tracking-tight text-[#3a3a3a]">23:47</div>
          <WfLines className="mt-2 items-center" widths={[60]} />
          <div className="mt-8 flex gap-1.5">
            <WfBtn small className="flex-1" /><WfBtn small primary className="flex-1" />
          </div>
        </WfFrame>

        <WfFrame kind="desktop" width={320} rotate={0.6} label="web · today timeline + session + insights">
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-2.5">
            <div>
              <div className="flex items-center justify-between"><WfHeading w={30} /><span className="h-3 w-10 rounded-full border-[1.2px] border-[#3a3a3a]" /></div>
              <div className="mt-2 space-y-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-6 text-[6.5px] text-[#8d8a82]">{9 + i}:00</span>
                    <span className="h-[14px] flex-1 rounded-[3px] border-[1.2px] border-[#3a3a3a]" style={{ background: i % 2 === 1 ? "rgba(0,0,0,0.08)" : "transparent", width: i === 2 ? "60%" : undefined }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <WfBox h={60} label="ring timer" x={false} />
              <div className="mt-1.5 grid grid-cols-2 gap-1"><WfStat /><WfStat /></div>
              <WfChart className="mt-1.5" h={34} kind="bars" />
            </div>
          </div>
        </WfFrame>
      </div>

      <WfArrow from={[19, 40]} to={[31, 30]} color="#f06a5a" bend={-0.5} />
      <WfHand style={{ left: "1%", top: "2%" }} color="#f06a5a">stats first = guilt trip ✗</WfHand>
      <WfNote style={{ right: "3%", top: "4%" }} rotate={2.5}>lead with the NEXT block, not the score</WfNote>
      <WfNote style={{ left: "52%", bottom: "6%" }} color="#9ad0f5" rotate={-2}>ring won 3/3 tests. digits felt like a stopwatch.</WfNote>
      <WfHand style={{ right: "5%", bottom: "30%" }}>Slack DND + calendar sync, no setup each time</WfHand>
    </WfBoard>
  );
}

/* ── Mobile home + active session ───────────────────────────────────────── */

function Ring({ size = 150, progress = 0.61 }: { size?: number; progress?: number }) {
  const r = size / 2 - 9;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="9" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#A5A3FF" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${c * progress} ${c * (1 - progress)}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
    </svg>
  );
}

export function FocusFlowPhones() {
  return (
    <Fit>
      <div className="flex items-end justify-center gap-8">
        {/* Home */}
        <Phone width={236}>
          <div className="flex h-[470px] flex-col px-4 pb-3 pt-10 text-[#1C1A2E]" style={{ background: "#F7F7FB" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-[#1C1A2E]/50">Wednesday, Nov 12</p>
                <h3 className="text-[16px] font-bold tracking-tight">Morning, Kasra.</h3>
              </div>
              <Avatar initials="KM" color="#5B57E0" size={28} />
            </div>
            <div className="mt-3 rounded-2xl p-3.5 text-white shadow-[0_14px_30px_-12px_rgba(91,87,224,0.7)]" style={{ background: "linear-gradient(135deg, #5B57E0, #3F3BB8)" }}>
              <p className="text-[8px] font-semibold tracking-wider text-white/70 uppercase">Next focus block · in 12 min</p>
              <p className="mt-1 text-[12px] font-bold">Design system audit</p>
              <p className="text-[8.5px] text-white/70">9:30 – 11:00 · Slack & Mail muted</p>
              <button className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[9px] font-semibold text-[#3F3BB8]"><Play size={9} fill="currentColor" /> Start now</button>
            </div>
            <div className="mt-3.5 flex items-center justify-between">
              <p className="text-[8.5px] font-semibold tracking-wider text-[#1C1A2E]/45 uppercase">Today</p>
              <span className="text-[8px] text-[#1C1A2E]/40">3 blocks · 4h</span>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[["9:00", "Standup", "meeting"], ["9:30", "Deep work · Design audit", "focus"], ["11:00", "Design review", "meeting"], ["11:30", "Deep work · Onboarding", "focus"], ["2:00", "Deep work", "focus"]].map(([t, l, k]) => (
                <div key={t} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[9px] ${k === "focus" ? "border border-[#5B57E0]/25 bg-[#5B57E0]/[0.08] font-medium" : "bg-[#1C1A2E]/[0.05] text-[#1C1A2E]/70"}`}>
                  <span className="w-7 text-[8px] tabular-nums text-[#1C1A2E]/45">{t}</span>{l}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-around border-t border-black/[0.06] pt-2.5">
              {[{ i: Home, on: true }, { i: Calendar }, { i: BarChart3 }, { i: Settings }].map((t, i) => (
                <t.i key={i} size={15} className={t.on ? "text-[#5B57E0]" : "text-[#1C1A2E]/35"} />
              ))}
            </div>
          </div>
        </Phone>

        {/* Session */}
        <Phone width={236}>
          <div className="flex h-[470px] flex-col items-center px-5 pb-5 pt-12 text-center text-white" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #2d2a7a 0%, #16153a 55%, #0e0d24 100%)" }}>
            <p className="text-[8.5px] font-semibold tracking-[0.2em] text-[#A5A3FF] uppercase">Deep work</p>
            <p className="mt-1 text-[11px] font-semibold text-white/90">Design system audit</p>
            <div className="relative mt-6">
              <Ring />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[30px] font-extrabold leading-none tracking-tight tabular-nums">23:47</span>
                <span className="mt-1 text-[8px] text-white/50">of 90 min left</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[8px] text-white/70">
              <BellOff size={9} className="text-[#A5A3FF]" /> 14 notifications held
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {[["S", "#4A154B"], ["M", "#2F6FE4"], ["F", "#1C1A2E"], ["X", "#111"]].map(([i, c]) => (
                <Avatar key={i} initials={i} color={c} size={22} className="!rounded-[6px] opacity-60" />
              ))}
            </div>
            <div className="mt-auto flex w-full gap-2">
              <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 py-2.5 text-[9.5px] font-semibold text-white/85"><Pause size={10} /> Pause</button>
              <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-[9.5px] font-semibold text-[#16153a]"><Square size={9} fill="currentColor" /> End</button>
            </div>
          </div>
        </Phone>
      </div>
    </Fit>
  );
}

/* ── Week recap used by the insights figure ─────────────────────────────── */

export function FocusFlowWeekRecap() {
  const days = [["Mon", 3.2], ["Tue", 4.1], ["Wed", 2.4], ["Thu", 4.6], ["Fri", 4.2]] as const;
  return (
    <Fit>
      <div className="rounded-2xl border border-black/[0.06] p-6 text-[#1C1A2E]" style={{ background: "#F7F7FB" }}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] font-semibold tracking-wider text-[#1C1A2E]/45 uppercase">Week 46 recap</p>
            <h3 className="mt-1 text-[22px] font-extrabold tracking-tight">18.5h of deep work</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#2F9E5B]/12 px-2.5 py-1 text-[10px] font-bold text-[#2F9E5B]"><Flame size={11} /> 5-day streak</span>
        </div>
        <div className="mt-5 flex h-28 items-end gap-3">
          {days.map(([d, h], i) => (
            <div key={d} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="text-[9px] font-semibold text-[#1C1A2E]/60">{h}h</span>
              <span className="w-full rounded-lg" style={{ height: `${(h / 5) * 80}px`, background: i === 3 ? INDIGO : "rgba(91,87,224,0.25)" }} />
              <span className="text-[9px] text-[#1C1A2E]/45">{d}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-black/[0.06] bg-white px-4 py-3">
          <p className="text-[10px] text-[#1C1A2E]/70">Your best window is <span className="font-semibold text-[#1C1A2E]">9:30–11:00</span>. Want me to protect it next week too?</p>
          <button className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[9.5px] font-semibold text-white" style={{ background: INK }}>Protect it <ChevronRight size={10} /></button>
        </div>
      </div>
    </Fit>
  );
}
