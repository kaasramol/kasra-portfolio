"use client";

import {
  Check, ChevronRight, Camera, Car, Calendar, Clock, MessageCircle, Wrench, ShieldCheck, Award,
  Star, MapPin, Send, Paperclip, Bell, Wallet, Inbox, LayoutDashboard, Settings, BadgeCheck, Lock,
} from "lucide-react";
import { Window, Card, Avatar, Stars } from "@/components/scenes/primitives";
import { Fit, Phone } from "./fit";
import {
  WfBoard, WfFrame, WfBox, WfLines, WfHeading, WfBtn, WfInput, WfCircle, WfListRow, WfTabs, WfMap, WfStat, WfNote, WfHand, WfArrow,
} from "./wireframe";

const BLUE = "#3b82f6";
const LINE = "rgba(255,255,255,0.07)";

/* ── Wireframes ─────────────────────────────────────────────────────────── */

export function KaputWireframes() {
  return (
    <WfBoard label="Lo-fi wireframes · core flows" meta="Paper → Figma · 2 rounds" accent={BLUE}>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-12">
        <WfFrame kind="mobile" width={128} rotate={-2.5} rejected label="v1 · list first">
          <WfInput label="Search" />
          <div className="mt-2 space-y-0.5">
            {[0, 1, 2, 3, 4].map((i) => <WfListRow key={i} />)}
          </div>
          <WfTabs className="mt-2" />
        </WfFrame>

        <WfFrame kind="mobile" width={150} rotate={1} label="v2 · map + bottom sheet">
          <WfInput label="Brake repair near me" />
          <WfMap className="mt-2" h={132} pins={4} />
          <div className="-mx-1 mt-2 rounded-t-[8px] border-[1.3px] border-b-0 px-2 pt-1.5" style={{ borderColor: "#3a3a3a" }}>
            <span className="mx-auto mb-1 block h-[3px] w-6 rounded-full bg-[#8d8a82]" />
            <WfListRow action />
            <WfListRow action />
          </div>
        </WfFrame>

        <WfFrame kind="mobile" width={150} rotate={-0.8} label="quote request · step 3/5">
          <div className="mb-2 flex gap-1">
            {[1, 1, 1, 0, 0].map((f, i) => <span key={i} className="h-1 flex-1 rounded-full" style={{ background: f ? "#3a3a3a" : "#d6d2c8" }} />)}
          </div>
          <WfHeading w={80} />
          <WfLines className="mt-1.5" widths={[90, 60]} />
          <div className="mt-2.5 space-y-1.5">
            {["Squealing", "Grinding", "Soft pedal", "Pulling"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-[3px] border-[1.3px] border-[#3a3a3a]" style={{ background: i % 2 === 0 ? "#3a3a3a" : "transparent" }} />
                <span className="text-[8px] text-[#3a3a3a]">{s}</span>
              </div>
            ))}
          </div>
          <WfBox className="mt-2.5" h={28} label="photos" x={false} />
          <WfBtn className="mt-2.5" primary label="Continue" />
        </WfFrame>

        <WfFrame kind="mobile" width={150} rotate={1.6} label="compare quotes">
          <WfHeading w={60} />
          <WfLines className="mt-1.5" widths={[50]} />
          {[0, 1].map((i) => (
            <div key={i} className="mt-2 rounded-[4px] border-[1.3px] p-1.5" style={{ borderColor: "#3a3a3a", background: i === 0 ? "rgba(0,0,0,0.05)" : "transparent" }}>
              <div className="flex items-center gap-1.5">
                <WfCircle size={14} />
                <WfLines widths={[70]} className="flex-1" />
                <span className="h-2 w-6 rounded-full bg-[#3a3a3a]" />
              </div>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                <WfStat /><WfStat /><WfStat />
              </div>
            </div>
          ))}
          <WfBtn className="mt-2.5" primary label="Accept & book" />
        </WfFrame>

        <WfFrame kind="desktop" width={320} rotate={-0.6} label="mechanic dashboard · desktop">
          <div className="flex gap-2.5">
            <div className="w-12 space-y-1.5 border-r pr-2" style={{ borderColor: "#d6d2c8" }}>
              {[0, 1, 2, 3, 4].map((i) => <span key={i} className="block h-[5px] rounded-full" style={{ width: `${60 + (i % 2) * 25}%`, background: i === 1 ? "#3a3a3a" : "#8d8a82" }} />)}
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-1.5">
                <WfStat /><WfStat /><WfStat /><WfStat />
              </div>
              <div className="mt-2 grid grid-cols-[1.4fr_1fr] gap-2">
                <div>
                  <WfHeading w={50} />
                  <WfListRow action /><WfListRow action /><WfListRow action />
                </div>
                <div>
                  <WfHeading w={60} />
                  <WfBox className="mt-1.5" h={64} label="calendar" x={false} />
                </div>
              </div>
            </div>
          </div>
        </WfFrame>
      </div>

      <WfArrow from={[17, 38]} to={[26, 32]} color="#f06a5a" bend={-0.6} />
      <WfHand style={{ left: "2%", top: "4%" }} color="#f06a5a">list hides proximity ✗</WfHand>
      <WfNote style={{ right: "4%", top: "6%" }} rotate={3}>bottom sheet, not a modal. keep the map in view.</WfNote>
      <WfNote style={{ left: "56%", bottom: "30%" }} color="#9ad0f5" rotate={-3}>itemize parts / labor / tax → &ldquo;am I getting ripped off?&rdquo;</WfNote>
      <WfHand style={{ right: "6%", bottom: "6%" }}>analytics → own tab (too busy)</WfHand>
    </WfBoard>
  );
}

/* ── Quote request flow ─────────────────────────────────────────────────── */

const symptoms = [
  { l: "Squealing when braking", on: true },
  { l: "Grinding noise", on: false },
  { l: "Soft or spongy pedal", on: true },
  { l: "Pulling to one side", on: false },
  { l: "Vibration at speed", on: false },
  { l: "Brake warning light", on: false },
];

export function KaputQuoteFlow() {
  const steps = ["Vehicle", "Category", "Symptoms", "Photos", "Review"];
  return (
    <Fit>
      <Window url="kaput.app/request/new">
        <div className="grid h-[340px] grid-cols-[150px_1fr]">
          <div className="border-r p-4" style={{ borderColor: LINE }}>
            <p className="mb-3 text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">New request</p>
            <ol className="relative space-y-3">
              <span className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
              {steps.map((s, i) => (
                <li key={s} className="relative flex items-center gap-2.5">
                  <span
                    className={`relative z-[1] flex h-[15px] w-[15px] items-center justify-center rounded-full text-[8px] font-bold ${
                      i < 2 ? "bg-[#3b82f6] text-white" : i === 2 ? "border-2 border-[#3b82f6] bg-[#0b0c10]" : "border border-white/15 bg-[#0b0c10]"
                    }`}
                  >
                    {i < 2 ? <Check size={9} strokeWidth={3.5} /> : i === 2 ? <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" /> : null}
                  </span>
                  <span className={`text-[9.5px] ${i === 2 ? "font-semibold text-white" : i < 2 ? "text-white/70" : "text-white/35"}`}>{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg border p-2.5" style={{ borderColor: LINE }}>
              <p className="flex items-center gap-1.5 text-[9px] font-semibold text-white/85"><Car size={10} className="text-[#3b82f6]" /> 2019 Honda Civic</p>
              <p className="mt-1 flex items-center gap-1.5 text-[9px] text-white/55"><Wrench size={10} className="text-[#3b82f6]" /> Brakes</p>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <p className="text-[8.5px] font-semibold tracking-wider text-[#3b82f6] uppercase">Step 3 of 5</p>
            <h3 className="mt-1 text-[15px] font-bold tracking-tight text-white">What are you noticing?</h3>
            <p className="mt-0.5 text-[9.5px] text-white/50">Pick everything that applies. No wrong answers, mechanics will ask if they need more.</p>
            <div className="mt-3.5 grid grid-cols-2 gap-2">
              {symptoms.map((s) => (
                <div
                  key={s.l}
                  className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-[9.5px] ${
                    s.on ? "border-[#3b82f6]/60 bg-[#3b82f6]/[0.12] font-medium text-white" : "border-white/[0.08] text-white/70"
                  }`}
                >
                  <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-[4px] border ${s.on ? "border-[#3b82f6] bg-[#3b82f6] text-white" : "border-white/20"}`}>
                    {s.on && <Check size={9} strokeWidth={3.5} />}
                  </span>
                  {s.l}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border px-3 py-2 text-[9px] text-white/40" style={{ borderColor: LINE }}>
              Anything else? <span className="text-white/25">Started last week, worse in the rain…</span>
            </div>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="text-[9px] text-white/45">Back</span>
              <button className="flex items-center gap-1.5 rounded-lg bg-[#3b82f6] px-3.5 py-2 text-[10px] font-semibold text-white">
                Continue <ChevronRight size={11} />
              </button>
            </div>
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Quote comparison ───────────────────────────────────────────────────── */

const quotes = [
  { initials: "PA", color: "#3b82f6", name: "Pacific Auto Care", rating: "4.9", reviews: 127, dist: "0.8 km", parts: 168, labor: 120, tax: 24, time: "2–3 hrs", when: "Tomorrow 10:00", best: true, warranty: "12 mo" },
  { initials: "EV", color: "#2EC4B6", name: "East Van Motors", rating: "4.7", reviews: 89, dist: "1.2 km", parts: 182, labor: 135, tax: 23, time: "3–4 hrs", when: "Fri 9:00", best: false, warranty: "6 mo" },
];

export function KaputQuoteComparison() {
  return (
    <Fit>
      <Window url="kaput.app/requests/8f2a/compare">
        <div className="p-5">
          <div className="mb-3.5 flex items-end justify-between">
            <div>
              <p className="text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">Brake pads · front · 2019 Civic</p>
              <h3 className="mt-0.5 text-[14px] font-bold tracking-tight text-white">Compare 2 of 3 quotes</h3>
            </div>
            <span className="text-[9px] text-white/45">Itemized · taxes included</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quotes.map((q) => {
              const total = q.parts + q.labor + q.tax;
              return (
                <div key={q.name} className={`relative rounded-xl border p-3.5 ${q.best ? "border-[#3b82f6]/60 bg-[#3b82f6]/[0.07]" : "border-white/[0.08]"}`}>
                  {q.best && (
                    <span className="absolute -top-2.5 left-3.5 rounded-full bg-[#3b82f6] px-2 py-0.5 text-[7.5px] font-bold tracking-wider text-white uppercase">Best value</span>
                  )}
                  <div className="flex items-center gap-2">
                    <Avatar initials={q.initials} color={q.color} size={26} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-semibold text-white">{q.name}</p>
                      <p className="flex items-center gap-1 text-[8.5px] text-white/50"><Stars value={q.rating} /> ({q.reviews}) · {q.dist}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[22px] font-extrabold leading-none tracking-tight text-white">${total}</p>
                  <dl className="mt-2.5 space-y-1 text-[9px]">
                    {[["Parts · OEM pads", q.parts], ["Labor · 1.5 hrs", q.labor], ["Tax", q.tax]].map(([k, v]) => (
                      <div key={k as string} className="flex justify-between"><dt className="text-white/50">{k}</dt><dd className="text-white/85">${v}</dd></div>
                    ))}
                  </dl>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] text-white/70" style={{ borderColor: LINE }}><Clock size={8} /> {q.time}</span>
                    <span className="flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] text-white/70" style={{ borderColor: LINE }}><Calendar size={8} /> {q.when}</span>
                    <span className="flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] text-white/70" style={{ borderColor: LINE }}><ShieldCheck size={8} /> {q.warranty} warranty</span>
                  </div>
                  <button className={`mt-3.5 w-full rounded-lg py-2 text-[9.5px] font-semibold ${q.best ? "bg-[#3b82f6] text-white" : "border border-white/15 text-white/85"}`}>
                    {q.best ? "Accept & book" : "Accept"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Owner dashboard ────────────────────────────────────────────────────── */

export function KaputOwnerDashboard() {
  const stages = ["Requested", "Quoted", "Booked", "In progress", "Done"];
  return (
    <Fit>
      <Window url="kaput.app/dashboard">
        <div className="p-5">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-[15px] font-bold tracking-tight text-white">Hi Kasra 👋</h3>
              <p className="text-[9.5px] text-white/50">Your Civic is in the shop right now.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border" style={{ borderColor: LINE }}><Bell size={11} className="text-white/60" /></span>
              <Avatar initials="KM" color="#c98b5e" size={28} />
            </div>
          </div>

          <div className="grid grid-cols-[1.5fr_1fr] gap-3">
            <div className="rounded-xl border border-[#3b82f6]/40 bg-[#3b82f6]/[0.06] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[10.5px] font-semibold text-white">Brake pads · front</p>
                <span className="flex items-center gap-1 rounded-full bg-[#3b82f6]/20 px-2 py-0.5 text-[8px] font-semibold text-[#8fb8ff]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3b82f6]" /> In progress</span>
              </div>
              <p className="mt-0.5 text-[9px] text-white/55">Pacific Auto Care · Today 10:00 · $312 paid</p>
              <div className="mt-3.5 flex items-center">
                {stages.map((s, i) => (
                  <div key={s} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <span className={`flex h-4 w-4 items-center justify-center rounded-full ${i < 3 ? "bg-[#3b82f6] text-white" : i === 3 ? "border-2 border-[#3b82f6] bg-[#0b0c10]" : "border border-white/15"}`}>
                        {i < 3 && <Check size={9} strokeWidth={3.5} />}
                        {i === 3 && <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />}
                      </span>
                      <span className={`mt-1 text-[7px] ${i <= 3 ? "text-white/80" : "text-white/35"}`}>{s}</span>
                    </div>
                    {i < stages.length - 1 && <span className={`mx-1 mb-3 h-px flex-1 ${i < 3 ? "bg-[#3b82f6]" : "bg-white/10"}`} />}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg border px-2.5 py-2" style={{ borderColor: LINE }}>
                <Avatar initials="PA" color="#3b82f6" size={20} />
                <p className="flex-1 text-[8.5px] text-white/75">Rotors look fine, no extra work needed. Done by 12:30.</p>
                <MessageCircle size={11} className="text-[#3b82f6]" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border p-3" style={{ borderColor: LINE }}>
                <p className="text-[8px] font-semibold tracking-wider text-white/40 uppercase">Your car</p>
                <p className="mt-1 text-[10.5px] font-semibold text-white">2019 Honda Civic</p>
                <p className="text-[8.5px] text-white/50">48,200 km · Next service in 1,800 km</p>
              </div>
              <div className="rounded-xl border p-3" style={{ borderColor: LINE }}>
                <p className="text-[8px] font-semibold tracking-wider text-white/40 uppercase">Upcoming</p>
                <p className="mt-1 text-[9.5px] font-medium text-white/90">Oil change · Grandview Garage</p>
                <p className="text-[8.5px] text-white/50">Mar 12 · 10:00 · $89</p>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[{ i: Wrench, l: "New request" }, { i: Calendar, l: "Reschedule" }, { i: Wallet, l: "Receipts" }].map((a) => (
              <div key={a.l} className="flex items-center gap-2 rounded-lg border px-2.5 py-2 text-[9px] text-white/80" style={{ borderColor: LINE }}>
                <a.i size={11} className="text-[#3b82f6]" /> {a.l}
              </div>
            ))}
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Mechanic dashboard ─────────────────────────────────────────────────── */

export function KaputMechanicDashboard() {
  const nav = [
    { i: LayoutDashboard, l: "Today", on: true },
    { i: Inbox, l: "Requests", badge: 3 },
    { i: Calendar, l: "Calendar" },
    { i: Wallet, l: "Earnings" },
    { i: Star, l: "Reviews" },
    { i: Settings, l: "Settings" },
  ];
  const requests = [
    { n: "Sarah M.", car: "2021 Toyota Corolla", job: "Engine · check engine light", t: "12 min ago", photos: 2 },
    { n: "Daniel K.", car: "2017 Mazda 3", job: "Brakes · grinding noise", t: "48 min ago", photos: 3 },
    { n: "Priya R.", car: "2020 Tesla Model 3", job: "Tires · rotation + balance", t: "2 hrs ago", photos: 0 },
  ];
  return (
    <Fit>
      <Window url="pro.kaput.app/today">
        <div className="grid h-[360px] grid-cols-[132px_1fr]">
          <div className="border-r p-3" style={{ borderColor: LINE, background: "#0d1016" }}>
            <div className="mb-4 flex items-center gap-2 px-1">
              <Avatar initials="PA" color="#3b82f6" size={22} />
              <div className="min-w-0">
                <p className="truncate text-[9.5px] font-semibold text-white">Pacific Auto Care</p>
                <p className="flex items-center gap-1 text-[7.5px] text-[#4ade80]"><span className="h-1 w-1 rounded-full bg-[#4ade80]" /> Open · closes 6 PM</p>
              </div>
            </div>
            <ul className="space-y-0.5">
              {nav.map((n) => (
                <li key={n.l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[9px] ${n.on ? "bg-white/[0.06] font-semibold text-white" : "text-white/55"}`}>
                  <n.i size={11} className={n.on ? "text-[#3b82f6]" : ""} /> {n.l}
                  {n.badge && <span className="ml-auto rounded-full bg-[#3b82f6] px-1.5 text-[7px] font-bold text-white">{n.badge}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-2">
              {[["New requests", "3", "+2 today"], ["Active jobs", "2", "1 due today"], ["This month", "$4,280", "+18%"], ["Rating", "4.9", "127 reviews"]].map(([k, v, s]) => (
                <div key={k} className="rounded-lg border p-2.5" style={{ borderColor: LINE }}>
                  <p className="text-[7.5px] tracking-wide text-white/40 uppercase">{k}</p>
                  <p className="mt-0.5 text-[15px] font-bold leading-none tracking-tight text-white">{v}</p>
                  <p className="mt-1 text-[8px] text-white/45">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-[1.35fr_1fr] gap-3">
              <div>
                <p className="mb-1.5 text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">Incoming requests</p>
                <div className="space-y-1.5">
                  {requests.map((r) => (
                    <div key={r.n} className="rounded-lg border p-2.5" style={{ borderColor: LINE }}>
                      <div className="flex items-center gap-2">
                        <Avatar initials={r.n.split(" ").map((x) => x[0]).join("")} color="#6f9bae" size={20} />
                        <div className="min-w-0 flex-1">
                          <p className="text-[9.5px] font-semibold text-white">{r.n} <span className="font-normal text-white/45">· {r.car}</span></p>
                          <p className="text-[8.5px] text-white/60">{r.job}</p>
                        </div>
                        <span className="text-[7.5px] text-white/35">{r.t}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1.5">
                        {r.photos > 0 && <span className="flex items-center gap-1 text-[7.5px] text-white/45"><Camera size={8} /> {r.photos} photos</span>}
                        <span className="ml-auto rounded-md border px-2 py-1 text-[8px] text-white/70" style={{ borderColor: LINE }}>Decline</span>
                        <span className="rounded-md bg-[#3b82f6] px-2 py-1 text-[8px] font-semibold text-white">Send quote</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1.5 text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">Today</p>
                <div className="relative space-y-1.5">
                  {[["9:00", "Oil change · M. Chen", false], ["10:00", "Brake pads · K. Molaei", true], ["13:30", "Diagnostic · A. Patel", false], ["15:00", "Open slot", null]].map(([t, l, now]) => (
                    <div key={t as string} className={`flex gap-2 rounded-lg border px-2 py-1.5 ${now ? "border-[#3b82f6]/50 bg-[#3b82f6]/[0.08]" : now === null ? "border-dashed" : ""}`} style={now ? undefined : { borderColor: LINE }}>
                      <span className="w-7 text-[8px] tabular-nums text-white/45">{t}</span>
                      <span className={`text-[8.5px] ${now === null ? "text-white/35" : "text-white/85"}`}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Mechanic profile ───────────────────────────────────────────────────── */

export function KaputMechanicProfile() {
  return (
    <Fit>
      <Window url="kaput.app/m/pacific-auto-care">
        <div
          className="h-[72px] w-full"
          style={{ background: "linear-gradient(120deg, #1a2740 0%, #0f1a2e 45%, #22304a 100%)" }}
        />
        <div className="px-5 pb-5">
          <div className="-mt-5 flex items-end gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#0b0c10] bg-[#3b82f6] text-[13px] font-extrabold text-white">PA</span>
            <div className="flex-1 pb-0.5">
              <p className="flex items-center gap-1.5 text-[14px] font-bold tracking-tight text-white">Pacific Auto Care <BadgeCheck size={13} className="text-[#3b82f6]" /></p>
              <p className="flex items-center gap-2 text-[9px] text-white/55"><span className="flex items-center gap-1"><Stars value="4.9" /> (127 reviews)</span> · <span className="flex items-center gap-1"><MapPin size={9} /> 0.8 km · Mount Pleasant</span></p>
            </div>
            <button className="rounded-lg bg-[#3b82f6] px-3 py-2 text-[9.5px] font-semibold text-white">Request quote</button>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[{ i: Award, l: "ASE certified" }, { i: ShieldCheck, l: "Verified business" }, { i: Clock, l: "12 yrs in business" }, { i: Check, l: "98% on-time" }].map((b) => (
              <span key={b.l} className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-[8px] font-medium text-white/80" style={{ borderColor: LINE }}><b.i size={9} className="text-[#3b82f6]" /> {b.l}</span>
            ))}
          </div>
          <div className="mt-3.5 flex gap-4 border-b text-[9px]" style={{ borderColor: LINE }}>
            {["Services", "Portfolio", "Reviews", "About"].map((t, i) => (
              <span key={t} className={`pb-1.5 ${i === 0 ? "border-b-2 border-[#3b82f6] font-semibold text-white" : "text-white/45"}`}>{t}</span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-[1.2fr_1fr] gap-4">
            <div className="space-y-1">
              {[["Brake pads · front", "from $280"], ["Oil change · synthetic", "from $89"], ["Diagnostic", "$60 · waived if repaired"], ["Tire rotation", "from $45"]].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-md px-2 py-1.5 text-[9px] hover:bg-white/[0.03]">
                  <span className="text-white/85">{k}</span><span className="text-white/55">{v}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-1.5 text-[8px] font-semibold tracking-wider text-white/40 uppercase">Recent work</p>
              <div className="grid grid-cols-3 gap-1.5">
                {["#263447", "#1f2b3a", "#2d3a4e", "#1a2330", "#33415a", "#222e40"].map((c, i) => (
                  <div key={i} className="aspect-square rounded-md" style={{ background: `linear-gradient(135deg, ${c}, #0f1420)` }} />
                ))}
              </div>
              <div className="mt-2.5 rounded-lg border p-2" style={{ borderColor: LINE }}>
                <p className="flex items-center gap-1 text-[8px] text-white/85"><Stars value="5.0" /> Daniel K. · verified booking</p>
                <p className="mt-0.5 text-[8px] leading-snug text-white/55">Quote matched the final bill to the dollar. Rare.</p>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </Fit>
  );
}

/* ── Chat + booking ─────────────────────────────────────────────────────── */

export function KaputChatBooking() {
  const msgs = [
    { me: true, t: "Hi! I submitted a request for brake pads on my Civic.", at: "10:32" },
    { me: false, t: "Thanks Kasra, I checked the photos. Front pads are worn, rotors look fine. $312 all in.", at: "10:35" },
    { me: true, t: "Great. Earliest you can take it?", at: "10:36" },
    { me: false, t: "Tomorrow 10 AM, about 2 hours. Want me to lock it in?", at: "10:37" },
  ];
  return (
    <Fit>
      <div className="flex items-center justify-center gap-8">
        <Phone width={236}>
          <div className="flex h-[440px] flex-col bg-[#0b0c10] pt-8">
            <div className="flex items-center gap-2 border-b px-3.5 pb-2.5" style={{ borderColor: LINE }}>
              <Avatar initials="PA" color="#3b82f6" size={26} />
              <div>
                <p className="text-[10px] font-semibold text-white">Pacific Auto Care</p>
                <p className="flex items-center gap-1 text-[7.5px] text-[#4ade80]"><span className="h-1 w-1 rounded-full bg-[#4ade80]" /> Usually replies in 5 min</p>
              </div>
            </div>
            <div className="flex-1 space-y-2 px-3 py-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[82%] rounded-2xl px-2.5 py-1.5 ${m.me ? "rounded-br-sm bg-[#3b82f6] text-white" : "rounded-bl-sm bg-white/[0.07] text-white/90"}`}>
                    <p className="text-[9px] leading-snug">{m.t}</p>
                    <p className={`mt-0.5 text-right text-[6.5px] ${m.me ? "text-white/60" : "text-white/35"}`}>{m.at}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-[#3b82f6]/40 bg-[#3b82f6]/[0.08] p-2.5">
                <p className="text-[8px] font-semibold tracking-wider text-[#8fb8ff] uppercase">Proposed booking</p>
                <p className="mt-1 text-[9.5px] font-semibold text-white">Tomorrow · 10:00 AM · $312</p>
                <div className="mt-2 flex gap-1.5">
                  <span className="flex-1 rounded-md border py-1 text-center text-[8px] text-white/70" style={{ borderColor: LINE }}>Suggest time</span>
                  <span className="flex-1 rounded-md bg-[#3b82f6] py-1 text-center text-[8px] font-semibold text-white">Confirm & pay</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t px-3 py-2.5" style={{ borderColor: LINE }}>
              <Paperclip size={12} className="text-white/40" />
              <span className="flex-1 rounded-full border px-3 py-1.5 text-[8.5px] text-white/35" style={{ borderColor: LINE }}>Message…</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3b82f6]"><Send size={10} className="text-white" /></span>
            </div>
          </div>
        </Phone>

        <Card className="w-[250px] p-4">
          <p className="text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">Confirm booking</p>
          <div className="mt-2.5 flex items-center gap-2">
            <Avatar initials="PA" color="#3b82f6" size={28} />
            <div>
              <p className="text-[10.5px] font-semibold text-white">Pacific Auto Care</p>
              <p className="text-[8.5px] text-white/50">Brake pads · front · 2019 Civic</p>
            </div>
          </div>
          <dl className="mt-3 space-y-1.5 text-[9px]">
            <div className="flex justify-between"><dt className="text-white/50">When</dt><dd className="text-white/90">Tomorrow, 10:00 AM</dd></div>
            <div className="flex justify-between"><dt className="text-white/50">Duration</dt><dd className="text-white/90">~2 hrs</dd></div>
            <div className="flex justify-between"><dt className="text-white/50">Quote</dt><dd className="text-white/90">$312 · itemized</dd></div>
            <div className="flex justify-between"><dt className="text-white/50">Extra work</dt><dd className="text-[#4ade80]">Needs your approval</dd></div>
          </dl>
          <div className="mt-3 flex items-center justify-between rounded-lg border px-2.5 py-2" style={{ borderColor: LINE }}>
            <span className="flex items-center gap-2 text-[9px] text-white/70"><span className="rounded-[3px] bg-[#1a1f71] px-1 py-[1px] text-[7px] font-black italic text-white">VISA</span> ···· 4242</span>
            <span className="text-[8px] text-white/40">Change</span>
          </div>
          <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#3b82f6] py-2 text-[10px] font-semibold text-white"><Lock size={10} /> Pay $312 securely</button>
          <p className="mt-2 text-center text-[7.5px] text-white/35">Held by Stripe until the job is marked done.</p>
        </Card>
      </div>
    </Fit>
  );
}
