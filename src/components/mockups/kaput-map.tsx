import { Star } from "lucide-react";

export function KaputMapMockup() {
  const mechanics = [
    { name: "Pacific Auto Care", rating: 4.9, reviews: 127, distance: "0.8 km", top: "30%", left: "45%", price: "$85/hr" },
    { name: "East Van Motors", rating: 4.7, reviews: 89, distance: "1.2 km", top: "55%", left: "65%", price: "$75/hr" },
    { name: "Grandview Garage", rating: 4.8, reviews: 203, distance: "1.5 km", top: "25%", left: "70%", price: "$90/hr" },
    { name: "Main St. Repairs", rating: 4.6, reviews: 64, distance: "2.1 km", top: "65%", left: "30%", price: "$70/hr" },
    { name: "Kits Auto Works", rating: 4.5, reviews: 156, distance: "3.0 km", top: "40%", left: "20%", price: "$95/hr" },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#3a5060] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#EEE9DF]">
            kaput<span className="text-[#FFB162]">.</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-[#2C3B4D] px-3 py-2">
          <svg className="h-4 w-4 text-[#C9C1B1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-sm text-[#C9C1B1]">Search mechanics near Vancouver, BC</span>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-[#2C3B4D] px-3 py-1 text-xs text-[#C9C1B1]">Brakes</span>
          <span className="rounded-full bg-[#FFB162]/20 px-3 py-1 text-xs text-[#FFB162]">All Services</span>
        </div>
      </div>

      <div className="flex">
        {/* Map area */}
        <div className="relative h-[420px] flex-1 bg-[#2C3B4D]">
          {/* Grid lines to simulate map */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <div key={`h-${i}`} className="absolute h-px w-full bg-[#FFB162]" style={{ top: `${(i + 1) * 8}%` }} />
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-px bg-[#FFB162]" style={{ left: `${(i + 1) * 8}%` }} />
            ))}
          </div>

          {/* Street labels */}
          <span className="absolute top-[20%] left-[15%] text-[10px] text-[#8a8275]/40 rotate-[-5deg]">W Broadway</span>
          <span className="absolute top-[50%] left-[40%] text-[10px] text-[#8a8275]/40 rotate-[0deg]">E Hastings St</span>
          <span className="absolute top-[70%] left-[55%] text-[10px] text-[#8a8275]/40 rotate-[-3deg]">Commercial Dr</span>

          {/* Mechanic pins */}
          {mechanics.map((m, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ top: m.top, left: m.left, transform: "translate(-50%, -50%)" }}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${i === 0 ? "bg-[#FFB162] ring-4 ring-[#FFB162]/30" : "bg-[#354a5e] border border-[#FFB162]"} shadow-lg`}>
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              </div>
              {i === 0 && (
                <div className="mt-1 rounded-md bg-[#2C3B4D] px-2 py-1 text-[10px] font-medium text-[#EEE9DF] shadow-lg border border-[#3a5060]">
                  {m.name}
                </div>
              )}
            </div>
          ))}

          {/* You are here */}
          <div className="absolute top-[48%] left-[48%]">
            <div className="h-4 w-4 rounded-full bg-[#22c55e] ring-4 ring-[#22c55e]/20" />
          </div>
        </div>

        {/* Side panel */}
        <div className="hidden w-[280px] border-l border-[#3a5060] bg-[#1B2632] md:block">
          <div className="border-b border-[#3a5060] p-3">
            <span className="text-xs font-medium text-[#C9C1B1]">5 mechanics nearby</span>
          </div>
          <div className="space-y-0 overflow-y-auto">
            {mechanics.map((m, i) => (
              <div
                key={i}
                className={`border-b border-[#3a5060] p-3 transition-colors ${i === 0 ? "bg-[#FFB162]/10" : "hover:bg-[#2C3B4D]"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#EEE9DF]">{m.name}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="text-xs text-[#EEE9DF]">{m.rating}</span>
                      <span className="text-xs text-[#8a8275]">({m.reviews})</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#8a8275]">{m.distance}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-[#C9C1B1]">From {m.price}</span>
                  {i === 0 && (
                    <span className="rounded-full bg-[#FFB162] px-2 py-0.5 text-[10px] font-medium text-[#1B2632]">
                      View
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
