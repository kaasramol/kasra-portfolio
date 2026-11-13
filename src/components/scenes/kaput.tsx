"use client";

import { Search, SlidersHorizontal, Navigation, Clock, ChevronDown, Check, Lock, ArrowDown, Camera, MessageCircle } from "lucide-react";
import { Scene, Layer, Window, Card, Avatar, LiveDot, Stars } from "./primitives";

const BLUE = "#3b82f6";

const mechanics = [
  { initials: "PA", color: "#3b82f6", name: "Pacific Auto Care", rating: "4.9", reviews: 127, dist: "0.8 km", eta: "25 min", price: "$312", dropped: true },
  { initials: "EV", color: "#2EC4B6", name: "East Van Motors", rating: "4.7", reviews: 89, dist: "1.2 km", eta: "40 min", price: "$340", dropped: false },
  { initials: "GG", color: "#f5b041", name: "Grandview Garage", rating: "4.8", reviews: 203, dist: "1.5 km", eta: "1 hr", price: "$355", dropped: false },
  { initials: "MS", color: "#a78bfa", name: "Main St. Repairs", rating: "4.6", reviews: 64, dist: "2.1 km", eta: "1.5 hr", price: "$298", dropped: false },
];

/* ── Map ─────────────────────────────────────────────────────────────────── */

function MapArt() {
  const cols = 9;
  const rows = 8;
  const blocks: { x: number; y: number; w: number; h: number }[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      // vary block sizes a little so it doesn't read as a perfect grid
      const w = 40 + ((i * 7 + j * 3) % 3) * 4;
      const h = 34 + ((i * 5 + j * 11) % 3) * 3;
      blocks.push({ x: i * 52 - 30, y: j * 46 - 20, w, h });
    }
  }
  return (
    <svg viewBox="0 0 370 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="kpWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10243a" />
          <stop offset="100%" stopColor="#0c1b2c" />
        </linearGradient>
        <radialGradient id="kpVignette" cx="50%" cy="45%" r="70%">
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.45" />
        </radialGradient>
      </defs>
      <rect width="370" height="320" fill="#0f131a" />
      {/* city blocks */}
      <g transform="rotate(-9 185 160)">
        {blocks.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="2.5" fill="#161b25" />
        ))}
        {/* arterials */}
        <rect x="-60" y="112" width="500" height="5" fill="#222938" />
        <rect x="-60" y="204" width="500" height="4" fill="#1f2635" />
        <rect x="178" y="-60" width="5" height="440" fill="#222938" />
        <rect x="334" y="-60" width="4" height="440" fill="#1f2635" />
      </g>
      {/* parks */}
      <rect x="44" y="38" width="72" height="54" rx="8" fill="#15291f" opacity="0.9" />
      <rect x="262" y="70" width="58" height="46" rx="8" fill="#15291f" opacity="0.8" />
      {/* water */}
      <path d="M0 236 C 70 220, 130 258, 200 246 C 262 236, 300 268, 370 252 L370 320 L0 320 Z" fill="url(#kpWater)" />
      <path d="M0 236 C 70 220, 130 258, 200 246 C 262 236, 300 268, 370 252" fill="none" stroke="#1e3a56" strokeWidth="1.5" />
      {/* labels */}
      <g fill="#5d6878" fontSize="7" fontWeight="600" letterSpacing="1.2" fontFamily="inherit">
        <text x="28" y="137" transform="rotate(-9 28 137)">W BROADWAY</text>
        <text x="214" y="98" transform="rotate(81 214 98)">MAIN ST</text>
        <text x="96" y="214" transform="rotate(-9 96 214)">E HASTINGS</text>
        <text x="300" y="196" transform="rotate(-9 300 196)">COMMERCIAL</text>
        <text x="150" y="296" fill="#2f5273">FALSE CREEK</text>
      </g>
      <rect width="370" height="320" fill="url(#kpVignette)" />
    </svg>
  );
}

function PricePin({ price, left, top, selected = false }: { price: string; left: string; top: string; selected?: boolean }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-full" style={{ left, top }}>
      {selected && <span className="absolute left-1/2 top-full h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#3b82f6]/30" />}
      <div
        className={`relative flex items-center gap-1 rounded-full px-2 py-[3px] text-[10px] font-bold shadow-[0_6px_16px_rgba(0,0,0,0.45)] ${
          selected ? "bg-[#3b82f6] text-white ring-2 ring-[#3b82f6]/40" : "border border-white/10 bg-[#171c26] text-[#e6e9ef]"
        }`}
      >
        {price}
      </div>
      <span className={`mx-auto block h-1.5 w-1.5 -translate-y-[1px] rotate-45 ${selected ? "bg-[#3b82f6]" : "bg-[#171c26]"}`} />
    </div>
  );
}

/* ── Explore window ──────────────────────────────────────────────────────── */

export function KaputExplore() {
  return (
    <Window url="kaput.app/explore">
      <div className="flex h-[320px]">
        <div className="relative flex-1 overflow-hidden">
          <MapArt />

          {/* pins */}
          <PricePin price="$312" left="46%" top="46%" selected />
          <PricePin price="$340" left="70%" top="62%" />
          <PricePin price="$355" left="74%" top="30%" />
          <PricePin price="$298" left="24%" top="64%" />
          <PricePin price="$379" left="30%" top="31%" />
          {/* you */}
          <span className="absolute left-[52%] top-[53%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#22c55e] shadow-[0_0_0_6px_rgba(34,197,94,0.18)]" />

          {/* search */}
          <div className="absolute inset-x-3 top-3 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#12161e]/92 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur">
            <Search size={12} className="shrink-0 text-white/45" />
            <span className="truncate text-[10.5px] font-medium text-white/90">Brake pads · 2019 Honda Civic</span>
            <span className="mx-1 h-3 w-px bg-white/10" />
            <Navigation size={10} className="shrink-0 text-[#3b82f6]" />
            <span className="text-[10px] text-white/55">Vancouver, BC</span>
            <SlidersHorizontal size={12} className="ml-auto shrink-0 text-white/45" />
          </div>
          <div className="absolute left-3 top-[52px] flex gap-1.5">
            {["Open now", "Top rated", "Under $350"].map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-2.5 py-1 text-[9px] font-semibold backdrop-blur ${
                  i === 2 ? "bg-[#3b82f6] text-white" : "border border-white/10 bg-[#12161e]/85 text-white/70"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* zoom */}
          <div className="absolute bottom-3 right-3 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#12161e]/90 text-[11px] font-bold text-white/70">
            <span className="px-2 py-0.5">+</span>
            <span className="border-t border-white/10 px-2 py-0.5">−</span>
          </div>
        </div>

        {/* sidebar */}
        <div className="flex w-[190px] shrink-0 flex-col border-l border-white/[0.07] bg-[#0d1016]">
          <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-[10px] font-semibold text-white/90">5 nearby</span>
            <span className="flex items-center gap-1 text-[9px] text-white/45">
              Best match <ChevronDown size={9} />
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            {mechanics.map((m, i) => (
              <div
                key={m.name}
                className={`border-t border-white/[0.06] px-3 py-2.5 ${i === 0 ? "bg-[#3b82f6]/[0.09] shadow-[inset_2px_0_0_#3b82f6]" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <Avatar initials={m.initials} color={m.color} size={24} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-white/95">{m.name}</p>
                    <p className="flex items-center gap-1.5 text-[8.5px] text-white/50">
                      <Stars value={m.rating} /> ({m.reviews}) · {m.dist}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-white/95">{m.price}</p>
                    <p className="text-[8px] text-white/40">{m.eta}</p>
                  </div>
                </div>
                {i === 0 && (
                  <button className="mt-2 w-full rounded-lg bg-[#3b82f6] py-1.5 text-[9.5px] font-semibold text-white">
                    Request quote
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ── Quotes ──────────────────────────────────────────────────────────────── */

function QuoteList({ compact = false }: { compact?: boolean }) {
  const rows = mechanics.slice(0, 3);
  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      {rows.map((q, i) => (
        <div
          key={q.name}
          className={`flex items-center gap-2.5 rounded-xl border px-2.5 ${compact ? "py-2" : "py-2.5"} ${
            i === 0 ? "border-[#3b82f6]/50 bg-[#3b82f6]/[0.1]" : "border-white/[0.07] bg-white/[0.025]"
          }`}
        >
          <span
            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[8.5px] font-bold ${
              i === 0 ? "bg-[#3b82f6] text-white" : "border border-white/15 text-white/50"
            }`}
          >
            {i + 1}
          </span>
          <Avatar initials={q.initials} color={q.color} size={compact ? 24 : 28} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-white/95">{q.name}</p>
            <p className="flex items-center gap-1.5 whitespace-nowrap text-[8.5px] text-white/50">
              <Stars value={q.rating} /> · <Clock size={8} /> {q.eta}
            </p>
          </div>
          <div className="text-right">
            <p className={`${compact ? "text-[13px]" : "text-[15px]"} font-bold leading-none text-white`}>{q.price}</p>
            {q.dropped && (
              <p className="mt-0.5 flex items-center justify-end gap-0.5 text-[8px] font-semibold text-[#4ade80]">
                <ArrowDown size={8} /> just dropped
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function KaputQuotes() {
  return (
    <Window url="kaput.app/requests/8f2a/quotes">
      <div className="flex h-[320px]">
        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[12px] font-bold text-white">Brake pads · front</p>
              <p className="text-[9px] text-white/50">2019 Honda Civic · 3 of 5 shops responded</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-[#ef4444]/12 px-2 py-0.5 text-[8.5px] font-bold text-[#f87171]">
                <LiveDot /> LIVE
              </span>
              <span className="flex items-center gap-1 text-[9px] font-medium tabular-nums text-white/55">
                <Clock size={9} /> 00:42
              </span>
            </div>
          </div>
          <QuoteList />
          <button className="mt-3 w-full rounded-xl bg-[#3b82f6] py-2 text-[10.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(59,130,246,0.6)]">
            Accept best quote · $312
          </button>
        </div>
        <div className="w-[176px] shrink-0 border-l border-white/[0.07] bg-[#0d1016] p-3.5">
          <p className="mb-2 text-[8.5px] font-semibold tracking-wider text-white/40 uppercase">Your request</p>
          <div className="mb-2.5 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-[#1b2130] to-[#12161e]">
                <Camera size={11} className="text-white/30" />
              </div>
            ))}
          </div>
          <dl className="space-y-1.5 text-[9px]">
            <div className="flex justify-between"><dt className="text-white/45">Symptoms</dt><dd className="text-white/85">Squeal, soft pedal</dd></div>
            <div className="flex justify-between"><dt className="text-white/45">Needed by</dt><dd className="text-white/85">Fri, Nov 14</dd></div>
            <div className="flex justify-between"><dt className="text-white/45">Budget</dt><dd className="text-white/85">Under $350</dd></div>
          </dl>
          <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.03] p-2">
            <p className="flex items-center gap-1.5 text-[9px] font-semibold text-white/85">
              <MessageCircle size={10} className="text-[#3b82f6]" /> Pacific Auto Care
            </p>
            <p className="mt-1 text-[8.5px] leading-snug text-white/55">Can do it tomorrow morning if that works?</p>
          </div>
        </div>
      </div>
    </Window>
  );
}

/* ── Floating cards ──────────────────────────────────────────────────────── */

function QuoteCard() {
  return (
    <Card className="p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/90">
          <LiveDot /> Live quotes
        </span>
        <span className="text-[9px] font-medium tabular-nums text-white/45">00:42</span>
      </div>
      <QuoteList compact />
      <button className="mt-2.5 w-full rounded-lg bg-[#3b82f6] py-1.5 text-[9.5px] font-semibold text-white">Accept $312</button>
    </Card>
  );
}

function BookingCard() {
  return (
    <Card className="p-3.5">
      <div className="flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#4ade80]">
          <Check size={14} strokeWidth={3} />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-white">Booking confirmed</p>
          <p className="text-[9px] text-white/55">Pacific Auto Care · Tomorrow, 10:00 AM</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-2">
        <div className="flex items-center gap-2">
          <span className="rounded-[3px] bg-[#1a1f71] px-1 py-[1px] text-[7px] font-black italic text-white">VISA</span>
          <span className="text-[9px] text-white/70">···· 4242</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-bold text-white">
          <Lock size={9} className="text-white/40" /> Paid $312
        </span>
      </div>
    </Card>
  );
}

/* ── Scene ───────────────────────────────────────────────────────────────── */

export function KaputScreens() {
  return (
    <Scene
      width={620}
      height={470}
      glows={[
        { color: BLUE, x: "32%", y: "42%", size: 420, opacity: 0.18 },
        { color: "#c98b5e", x: "88%", y: "90%", size: 300, opacity: 0.12 },
      ]}
    >
      <Layer x={0} y={0} w={560} z={10} depth={0.15}>
        <KaputExplore />
      </Layer>
      <Layer x={364} y={248} w={256} z={20} depth={0.7} float={7}>
        <QuoteCard />
      </Layer>
      <Layer x={14} y={282} w={250} z={30} depth={1.05} float={8.5} delay={0.15}>
        <BookingCard />
      </Layer>
    </Scene>
  );
}
