"use client";

import { Check, Users, Upload, FolderPlus, ArrowRight, Sparkles, Clock } from "lucide-react";
import { Window } from "@/components/scenes/primitives";
import { Fit } from "./fit";
import {
  WfBoard, WfFrame, WfBox, WfLines, WfHeading, WfBtn, WfInput, WfCircle, WfListRow, WfNote, WfHand, WfArrow,
} from "./wireframe";

const GREEN = "#10B981";

/* ── Wireframes ─────────────────────────────────────────────────────────── */

export function OnboardWireframes() {
  return (
    <WfBoard label="Lo-fi wireframes · 5-step onboarding" meta="Paper → Figma · 3 rounds" accent={GREEN}>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-12">
        <WfFrame kind="mobile" width={134} rotate={-2} rejected label="current · 11 fields">
          <WfHeading w={70} />
          <div className="mt-2 space-y-1.5">
            {["Name", "Email", "Company", "Role", "Team size", "Industry", "Phone"].map((f) => <WfInput key={f} label={f} />)}
          </div>
          <WfBtn className="mt-2" label="Create account" />
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={1.2} label="1 · welcome">
          <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full border-[1.3px] border-[#3a3a3a] text-[14px]">👋</div>
          <WfHeading className="mx-auto mt-3" w={75} />
          <WfLines className="mt-1.5 items-center" widths={[80, 55]} />
          <WfInput className="mt-4" label="What should we call you?" />
          <WfBtn className="mt-3" primary label="Continue" />
          <div className="mt-3 flex justify-center gap-1">
            {[1, 0, 0, 0, 0].map((f, i) => <span key={i} className="h-1.5 w-1.5 rounded-full border-[1.2px] border-[#3a3a3a]" style={{ background: f ? "#3a3a3a" : "transparent" }} />)}
          </div>
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={-0.6} label="2 · why are you here?">
          <WfHeading w={85} />
          <WfLines className="mt-1.5" widths={[70]} />
          <div className="mt-2.5 space-y-1.5">
            {["Manage projects", "Run sprints", "Personal tasks"].map((o, i) => (
              <div key={o} className="flex items-center gap-2 rounded-[4px] border-[1.3px] px-1.5 py-1.5" style={{ borderColor: "#3a3a3a", background: i === 0 ? "rgba(0,0,0,0.06)" : "transparent" }}>
                <span className="h-4 w-4 rounded-[3px] border-[1.2px] border-[#3a3a3a]" />
                <span className="text-[8px] font-medium text-[#3a3a3a]">{o}</span>
                {i === 0 && <span className="ml-auto h-3 w-3 rounded-full bg-[#3a3a3a]" />}
              </div>
            ))}
          </div>
          <WfBtn className="mt-3" primary label="Continue" />
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={1.8} label="3 · invite (optional)">
          <WfHeading w={60} />
          <WfLines className="mt-1.5" widths={[85]} />
          <WfInput className="mt-2.5" label="teammate@company.com" />
          <WfInput className="mt-1.5" label="+ add another" />
          <div className="mt-2 space-y-0.5">
            <WfListRow lines={1} /><WfListRow lines={1} />
          </div>
          <WfBtn className="mt-3" primary label="Send invites" />
          <p className="mt-1.5 text-center text-[7.5px] underline" style={{ color: "#8d8a82" }}>skip for now</p>
        </WfFrame>

        <WfFrame kind="mobile" width={140} rotate={-1.2} label="5 · done + next actions">
          <div className="mx-auto mt-2 h-9 w-9 rounded-full border-[1.3px] border-[#3a3a3a] bg-[#3a3a3a]" />
          <WfHeading className="mx-auto mt-3" w={70} />
          <WfLines className="mt-1.5" widths={[90, 50]} />
          <div className="mt-2.5 space-y-1.5">
            {["Invite team", "Import tasks", "Open dashboard"].map((a) => (
              <div key={a} className="flex items-center justify-between rounded-[4px] border-[1.3px] border-[#3a3a3a] px-1.5 py-1.5 text-[8px] text-[#3a3a3a]">{a} <span>→</span></div>
            ))}
          </div>
        </WfFrame>

        <WfFrame kind="desktop" width={300} rotate={0.5} label="desktop · stepper rail + one task per screen">
          <div className="flex gap-3">
            <div className="w-16 space-y-2 border-r pr-2" style={{ borderColor: "#d6d2c8" }}>
              {[1, 1, 0, 0, 0].map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <WfCircle size={10} className={f ? "bg-[#3a3a3a]" : ""} />
                  <span className="h-[3px] flex-1 rounded-full bg-[#8d8a82]" />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <WfHeading w={55} />
              <WfLines className="mt-1.5" widths={[80]} />
              <div className="mt-2.5 space-y-1.5">
                <WfBox h={22} x={false} /><WfBox h={22} x={false} /><WfBox h={22} x={false} />
              </div>
              <div className="mt-2.5 flex justify-end"><WfBtn small primary label="Continue" className="w-16" /></div>
            </div>
          </div>
        </WfFrame>
      </div>

      <WfArrow from={[19, 30]} to={[36, 22]} color="#f06a5a" bend={-0.45} />
      <WfHand style={{ left: "1%", top: "2%" }} color="#f06a5a">12 min · 41% drop-off ✗</WfHand>
      <WfNote style={{ right: "3%", top: "4%" }} rotate={2.5}>ask the WHY before any form field</WfNote>
      <WfNote style={{ left: "54%", bottom: "6%" }} color="#9ad0f5" rotate={-2}>forced invite was the #1 exit. make it skippable.</WfNote>
      <WfHand style={{ right: "4%", bottom: "28%" }}>target: first task in &lt; 4 min</WfHand>
    </WfBoard>
  );
}

/* ── Before: the original 11-field form ─────────────────────────────────── */

export function OnboardBefore() {
  const fields = [
    ["Full name", "Work email"],
    ["Company", "Job title"],
    ["Team size", "Industry"],
    ["Phone number", "Country"],
    ["Password", "Confirm password"],
  ];
  return (
    <Fit>
      <Window url="app.taskly.com/signup" tone="light">
        <div className="relative h-[360px] p-6" style={{ background: "#F2F3F5" }}>
          <div className="mx-auto max-w-[400px] rounded-lg border border-[#D9DBE0] bg-white p-5 shadow-sm">
            <p className="text-[8.5px] font-medium text-[#8A8F99]">Step 1 of 7</p>
            <h3 className="mt-0.5 text-[14px] font-bold text-[#1F2328]">Create your account</h3>
            <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
              {fields.flat().map((f) => (
                <label key={f} className="block">
                  <span className="text-[8px] font-medium text-[#5B6069]">{f} <span className="text-[#D64545]">*</span></span>
                  <span className="mt-0.5 block h-6 rounded-[4px] border border-[#CBD0D8] bg-white" />
                </label>
              ))}
              <label className="col-span-2 block">
                <span className="text-[8px] font-medium text-[#5B6069]">How did you hear about us? <span className="text-[#D64545]">*</span></span>
                <span className="mt-0.5 flex h-6 items-center justify-between rounded-[4px] border border-[#CBD0D8] bg-white px-2 text-[8px] text-[#9AA0AA]">Select one… <span>▾</span></span>
              </label>
            </div>
            <label className="mt-3 flex items-center gap-1.5 text-[8px] text-[#5B6069]">
              <span className="h-3 w-3 rounded-[2px] border border-[#CBD0D8]" /> I agree to the Terms of Service and Privacy Policy
            </label>
            <button className="mt-3 w-full rounded-[4px] bg-[#9AA0AA] py-2 text-[9.5px] font-semibold text-white">Create account</button>
            <p className="mt-2 text-center text-[7.5px] text-[#9AA0AA]">Already have an account? Sign in</p>
          </div>

          {/* annotation overlay */}
          <div className="absolute right-4 top-4 rounded-lg border border-[#D64545]/40 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
            <p className="text-[8px] font-semibold tracking-wider text-[#D64545] uppercase">Observed</p>
            <ul className="mt-1 space-y-0.5 text-[8.5px] text-[#1F2328]">
              <li>11 required fields before any value</li>
              <li>7 steps · 12:06 median</li>
              <li>41% abandon on this screen</li>
            </ul>
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Celebration ────────────────────────────────────────────────────────── */

export function OnboardCelebration() {
  const next = [
    { i: Users, t: "Invite your team", d: "3 seats free on your plan" },
    { i: Upload, t: "Import from Jira", d: "Bring over open issues in one click" },
    { i: FolderPlus, t: "Create your first project", d: "We'll start you with a template" },
  ];
  return (
    <Fit>
      <Window url="taskly.app/setup/done" tone="light">
        <div className="relative h-[340px] overflow-hidden px-6 py-6">
          {/* soft confetti */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {[
              [12, 14, "#10B981"], [22, 38, "#F59E0B"], [36, 10, "#3B82F6"], [58, 18, "#10B981"], [74, 9, "#EC4899"],
              [86, 30, "#F59E0B"], [92, 58, "#10B981"], [8, 70, "#3B82F6"], [48, 6, "#EC4899"], [66, 40, "#10B981"],
            ].map(([x, y, c], i) => (
              <span
                key={i}
                className="absolute h-2 w-1 rounded-sm opacity-70"
                style={{ left: `${x}%`, top: `${y}%`, background: c as string, transform: `rotate(${(i * 37) % 90}deg)` }}
              />
            ))}
          </div>
          <div className="relative mx-auto max-w-[420px] text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981] text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.8)]">
              <Check size={22} strokeWidth={3} />
            </span>
            <h3 className="mt-3 text-[18px] font-extrabold tracking-tight text-[#17181C]">You&apos;re all set, Kasra.</h3>
            <p className="mt-1 text-[10px] text-[#17181C]/55">
              Your <span className="font-semibold text-[#17181C]">Projects</span> workspace is ready.
              <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-[#10B981]/12 px-1.5 py-0.5 text-[8px] font-bold text-[#059669]"><Clock size={8} /> 3:48</span>
            </p>
            <div className="mt-4 space-y-2 text-left">
              {next.map((n) => (
                <div key={n.t} className="flex items-center gap-3 rounded-xl border border-black/[0.07] bg-white px-3 py-2.5 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#17181C]/[0.05] text-[#17181C]/70"><n.i size={13} /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold text-[#17181C]">{n.t}</p>
                    <p className="text-[8.5px] text-[#17181C]/50">{n.d}</p>
                  </div>
                  <ArrowRight size={11} className="text-[#17181C]/35" />
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#17181C] px-4 py-2 text-[10px] font-semibold text-white">
              <Sparkles size={11} /> Go to my dashboard
            </button>
            <p className="mt-1.5 text-[8px] text-[#17181C]/40">All of the above is optional. You can do it later from Settings.</p>
          </div>
        </div>
      </Window>
    </Fit>
  );
}
