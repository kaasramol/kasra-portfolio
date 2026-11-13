"use client";

import { ShieldCheck, TrendingDown, TrendingUp, Check, Clock, ChevronRight, Sparkles } from "lucide-react";
import { Avatar, Window } from "@/components/scenes/primitives";
import { Fit, Phone } from "./fit";
import {
  WfBoard, WfFrame, WfBox, WfLines, WfHeading, WfBtn, WfCircle, WfChart, WfStat, WfListRow, WfNote, WfHand, WfArrow,
} from "./wireframe";

const TEAL = "#2EC4B6";
const BG = "#0e1417";
const PANEL = "#141c20";
const LINE = "rgba(255,255,255,0.07)";

/* ── Wireframes ─────────────────────────────────────────────────────────── */

export function TeamPulseWireframes() {
  return (
    <WfBoard label="Mid-fi wireframes · dashboard, insight card, survey" meta="Figma · after card sort" accent={TEAL}>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-12">
        <WfFrame kind="desktop" width={250} rotate={-1.5} rejected label="v1 · everything at once">
          <div className="grid grid-cols-6 gap-1">
            {Array.from({ length: 6 }).map((_, i) => <WfStat key={i} />)}
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-1">
            <WfChart h={34} /><WfChart h={34} kind="bars" /><WfChart h={34} />
          </div>
          <div className="mt-1.5 grid grid-cols-2 gap-1">
            <div><WfListRow lines={1} /><WfListRow lines={1} /><WfListRow lines={1} /></div>
            <div><WfListRow lines={1} /><WfListRow lines={1} /><WfListRow lines={1} /></div>
          </div>
        </WfFrame>

        <WfFrame kind="desktop" width={300} rotate={0.8} label="v2 · 3 numbers, 1 trend, what needs attention">
          <div className="grid grid-cols-[1fr_92px] gap-2">
            <div>
              <div className="grid grid-cols-3 gap-1.5">
                <WfStat /><WfStat /><WfStat />
              </div>
              <WfChart className="mt-1.5" h={58} />
            </div>
            <div className="rounded-[4px] border-[1.3px] border-[#3a3a3a] p-1.5">
              <WfHeading w={70} />
              <div className="mt-1.5 space-y-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i}>
                    <WfLines widths={[60]} gap={0} />
                    <span className="mt-1 block h-1 rounded-full" style={{ width: `${85 - i * 12}%`, background: i === 0 ? "#e0543f" : "#3a3a3a" }} />
                  </div>
                ))}
              </div>
              <WfBtn small className="mt-2" label="Act" />
            </div>
          </div>
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={-1} label="insight card · reusable block">
          <div className="rounded-[5px] border-[1.3px] border-[#3a3a3a] p-2">
            <WfLines widths={[45]} gap={0} />
            <WfHeading className="mt-1.5" w={90} />
            <WfLines className="mt-1.5" widths={[95, 70]} />
            <WfChart className="mt-2" h={36} />
            <div className="mt-2 space-y-1">
              <WfBtn small primary label="Action 1" />
              <WfBtn small label="Action 2" />
            </div>
          </div>
          <WfLines className="mt-2.5" widths={[80, 60]} />
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={1.5} label="survey · one question per screen">
          <div className="flex items-center justify-between">
            <WfLines widths={[100]} gap={0} className="w-10" />
            <span className="text-[7px] text-[#3a3a3a]">3 / 5</span>
          </div>
          <WfHeading className="mt-4" w={90} />
          <WfLines className="mt-1.5" widths={[75]} />
          <div className="mt-4 flex justify-between gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className="flex h-6 flex-1 items-center justify-center rounded-[4px] border-[1.3px] border-[#3a3a3a] text-[8px] font-bold" style={{ background: n === 4 ? "#3a3a3a" : "transparent", color: n === 4 ? "#f4f1ea" : "#3a3a3a" }}>{n}</span>
            ))}
          </div>
          <WfBox className="mt-4" h={34} label="optional comment" x={false} />
          <WfBtn className="mt-4" primary label="Next" />
        </WfFrame>

        <WfFrame kind="desktop" width={250} rotate={-0.4} label="manager view · 5-min check-in">
          <div className="flex items-center gap-2">
            <WfCircle size={26} className="bg-[#3a3a3a]" />
            <div className="flex-1"><WfHeading w={50} /><WfLines className="mt-1" widths={[40]} gap={0} /></div>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1">
            <WfStat /><WfStat /><WfStat /><WfStat />
          </div>
          <WfHeading className="mt-2.5" w={35} />
          <div className="mt-1">
            <WfListRow avatar={false} lines={1} action /><WfListRow avatar={false} lines={1} action /><WfListRow avatar={false} lines={1} action />
          </div>
        </WfFrame>
      </div>

      <WfArrow from={[18, 36]} to={[32, 26]} color="#f06a5a" bend={-0.5} />
      <WfHand style={{ left: "1%", top: "2%" }} color="#f06a5a">6 KPIs + 3 charts = nobody reads it</WfHand>
      <WfNote style={{ right: "3%", top: "3%" }} rotate={2}>every card ends in a button. insight without action is noise.</WfNote>
      <WfNote style={{ right: "4%", bottom: "12%" }} color="#9ad0f5" rotate={-2.5}>one question per screen → under 90 s on mobile</WfNote>
      <WfHand style={{ right: "3%", top: "40%" }}>anonymity badge on every survey screen</WfHand>
    </WfBoard>
  );
}

/* ── Manager view ───────────────────────────────────────────────────────── */

export function TeamPulseManagerView() {
  const cats = [
    { n: "Workload", s: 5.2, d: "−0.8", txt: "Sprint scope grew 22%. 5 of 24 flagged overtime.", risk: true },
    { n: "Management", s: 7.2, d: "+0.1", txt: "1:1s happening. People want clearer priorities." },
    { n: "Growth", s: 7.5, d: "+0.4", txt: "Mentorship pilot is landing well." },
    { n: "Culture", s: 8.1, d: "+0.2", txt: "Highest in the company this quarter." },
  ];
  const actions = [
    { t: "Move 2 sprint tasks to Platform team", s: "Done", c: TEAL, i: Check },
    { t: "Cancel non-essential Friday meetings", s: "Done", c: TEAL, i: Check },
    { t: "Schedule 1:1s with top 3 overtime reporters", s: "Pending", c: "#f5b041", i: Clock },
  ];
  return (
    <Fit>
      <Window url="app.teampulse.io/my-team">
        <div className="h-[360px] p-4" style={{ background: BG }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Avatar initials="JL" color="#6f9bae" size={30} />
              <div>
                <p className="text-[11px] font-bold text-white">Engineering · 24 people</p>
                <p className="text-[8.5px] text-white/45">Your team · survey closed 2 days ago · 19 responses</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border px-3 py-2" style={{ borderColor: LINE, background: PANEL }}>
              <div>
                <p className="text-[7.5px] tracking-wide text-white/40 uppercase">Team health</p>
                <p className="text-[18px] font-bold leading-none text-white">7.4</p>
              </div>
              <span className="flex items-center gap-0.5 text-[8.5px] text-[#2EC4B6]"><TrendingUp size={9} /> +0.3</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            {cats.map((c) => (
              <div key={c.n} className={`rounded-xl border p-2.5 ${c.risk ? "border-[#f08a7e]/30 bg-[#f08a7e]/[0.06]" : ""}`} style={c.risk ? undefined : { borderColor: LINE, background: PANEL }}>
                <div className="flex items-center justify-between">
                  <p className={`text-[8.5px] font-semibold ${c.risk ? "text-[#f08a7e]" : "text-white/80"}`}>{c.n}</p>
                  <span className={`flex items-center gap-0.5 text-[8px] ${c.risk ? "text-[#f08a7e]" : "text-white/45"}`}>
                    {c.risk ? <TrendingDown size={8} /> : <TrendingUp size={8} />} {c.d}
                  </span>
                </div>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">{c.s}</p>
                <p className="mt-1.5 text-[8px] leading-snug text-white/55">{c.txt}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-3">
            <div className="rounded-xl border" style={{ borderColor: LINE, background: PANEL }}>
              <p className="border-b px-3 py-2 text-[9px] font-semibold text-white/85" style={{ borderColor: LINE }}>Open actions · Workload</p>
              <ul>
                {actions.map((a) => (
                  <li key={a.t} className="flex items-center gap-2 border-b px-3 py-2 text-[9px] last:border-0" style={{ borderColor: LINE }}>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ background: `${a.c}22`, color: a.c }}><a.i size={9} /></span>
                    <span className="flex-1 text-white/85">{a.t}</span>
                    <span className="rounded-full px-1.5 py-0.5 text-[7.5px] font-semibold" style={{ background: `${a.c}22`, color: a.c }}>{a.s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: LINE, background: PANEL }}>
              <p className="flex items-center gap-1 text-[8px] font-semibold tracking-wider uppercase" style={{ color: TEAL }}><Sparkles size={9} /> Suggested next</p>
              <p className="mt-1.5 text-[9.5px] font-semibold leading-snug text-white">Share the workload result with the team before Thursday&apos;s retro.</p>
              <p className="mt-1 text-[8px] text-white/50">Teams that close the loop within a week see +11% response rate next cycle.</p>
              <button className="mt-2.5 flex w-full items-center justify-center gap-1 rounded-lg py-1.5 text-[8.5px] font-semibold text-[#0a1210]" style={{ background: TEAL }}>Draft message <ChevronRight size={10} /></button>
            </div>
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Survey on mobile ───────────────────────────────────────────────────── */

export function TeamPulseSurveyMobile() {
  return (
    <Fit>
      <div className="flex items-end justify-center gap-6">
        <Phone width={230}>
          <div className="flex h-[440px] flex-col bg-white px-5 pb-5 pt-10 text-[#17181C]">
            <div className="flex items-center justify-between text-[8.5px] font-semibold text-[#17181C]/45">
              <span className="flex items-center gap-1" style={{ color: TEAL }}><ShieldCheck size={10} /> 100% anonymous</span>
              <span>3 of 5</span>
            </div>
            <div className="mt-2 h-1 rounded-full bg-black/[0.06]"><div className="h-1 w-[60%] rounded-full" style={{ background: TEAL }} /></div>
            <p className="mt-7 text-[8.5px] font-semibold tracking-wider text-[#17181C]/40 uppercase">Workload</p>
            <h3 className="mt-1 text-[16px] font-bold leading-snug tracking-tight">How manageable was your workload this week?</h3>
            <div className="mt-6 flex justify-between gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`flex h-10 flex-1 items-center justify-center rounded-xl text-[13px] font-bold ${n === 2 ? "text-white shadow-[0_8px_18px_-6px_rgba(46,196,182,0.8)]" : "border border-black/10 text-[#17181C]/60"}`}
                  style={n === 2 ? { background: TEAL } : undefined}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[7.5px] text-[#17181C]/40"><span>Overwhelming</span><span>Very manageable</span></div>
            <div className="mt-5 rounded-xl border border-black/10 px-3 py-2.5 text-[9px] text-[#17181C]/40">Anything you want leadership to know? <span className="text-[#17181C]/25">(optional)</span></div>
            <button className="mt-auto w-full rounded-xl py-2.5 text-[11px] font-semibold text-white" style={{ background: "#17181C" }}>Next</button>
          </div>
        </Phone>
        <Phone width={230}>
          <div className="flex h-[440px] flex-col bg-white px-5 pb-5 pt-10 text-[#17181C]">
            <span className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full text-white" style={{ background: TEAL }}><Check size={22} strokeWidth={3} /></span>
            <h3 className="mt-4 text-center text-[16px] font-bold tracking-tight">Thanks. 74 seconds.</h3>
            <p className="mt-1 text-center text-[9.5px] text-[#17181C]/55">Here&apos;s what changed since last time you answered.</p>
            <div className="mt-5 space-y-2">
              {[
                { t: "Friday meetings cancelled", d: "From your team's workload feedback", done: true },
                { t: "2 sprint tasks moved", d: "Platform team picked them up", done: true },
                { t: "1:1s being scheduled", d: "In progress this week", done: false },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-2.5 rounded-xl border border-black/[0.07] px-3 py-2.5">
                  <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${x.done ? "text-white" : "border border-black/15"}`} style={x.done ? { background: TEAL } : undefined}>{x.done && <Check size={10} strokeWidth={3.5} />}</span>
                  <div>
                    <p className="text-[9.5px] font-semibold">{x.t}</p>
                    <p className="text-[8px] text-[#17181C]/50">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-auto text-center text-[8px] text-[#17181C]/40">Your answers are never shown individually.</p>
          </div>
        </Phone>
      </div>
    </Fit>
  );
}
