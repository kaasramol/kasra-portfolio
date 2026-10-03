import { Star, Car, Wrench, CircleDot, Battery } from "lucide-react";

export function KaputQuoteFlowMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#2d2d44] bg-[#0a0a0f] shadow-2xl">
      <div className="border-b border-[#2d2d44] px-5 py-3">
        <p className="text-xs text-[#94a3b8]">Quote Request</p>
        <p className="text-sm font-semibold text-[#f1f5f9]">Step 2 of 4 — Select Symptoms</p>
      </div>

      {/* Progress */}
      <div className="flex border-b border-[#2d2d44]">
        {["Vehicle", "Symptoms", "Details", "Submit"].map((step, i) => (
          <div key={step} className={`flex-1 py-2 text-center text-[10px] border-b-2 ${i <= 1 ? "border-[#3b82f6] text-[#3b82f6] font-medium" : "border-transparent text-[#64748b]"}`}>
            {step}
          </div>
        ))}
      </div>

      <div className="p-5">
        {/* Selected vehicle */}
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#1a1a2e] p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]/20 text-sm"><Car size={16} className="text-[#3b82f6]" /></div>
          <div>
            <p className="text-xs font-medium text-[#f1f5f9]">2019 Honda Civic</p>
            <p className="text-[10px] text-[#64748b]">Silver · ABC 1234</p>
          </div>
          <span className="ml-auto text-[10px] text-[#3b82f6]">Change</span>
        </div>

        {/* Category selected */}
        <p className="mb-2 text-[10px] text-[#94a3b8]">Category: <span className="text-[#f1f5f9] font-medium">Brakes</span></p>

        {/* Symptom selection */}
        <p className="mb-3 text-xs font-medium text-[#f1f5f9]">What are you experiencing?</p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { label: "Squealing when braking", selected: true },
            { label: "Grinding noise", selected: false },
            { label: "Car pulls to one side", selected: true },
            { label: "Vibration in steering", selected: false },
            { label: "Soft brake pedal", selected: false },
            { label: "Brake warning light", selected: false },
          ].map((s, i) => (
            <div
              key={i}
              className={`rounded-lg px-3 py-2.5 text-xs cursor-pointer ${s.selected ? "bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/40" : "bg-[#1a1a2e] text-[#94a3b8] border border-[#2d2d44]"}`}
            >
              <div className="flex items-center gap-2">
                {s.selected && (
                  <svg className="h-3.5 w-3.5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                )}
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full rounded-lg bg-[#3b82f6] py-2.5 text-sm font-medium text-white">
          Continue to Details
        </button>
      </div>
    </div>
  );
}

export function KaputMechanicProfileMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#2d2d44] bg-[#0a0a0f] shadow-2xl">
      {/* Header */}
      <div className="relative h-28 bg-gradient-to-r from-[#3b82f6]/20 to-[#3b82f6]/5">
        <div className="absolute -bottom-8 left-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#1a1a2e] border-2 border-[#3b82f6] shadow-lg">
            <Wrench size={28} className="text-[#3b82f6]" />
          </div>
        </div>
      </div>

      <div className="px-5 pt-12 pb-5">
        {/* Name & badges */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[#f1f5f9]">Pacific Auto Care</h3>
              <svg className="h-4 w-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>
            <p className="text-xs text-[#94a3b8]">1234 Commercial Dr, Vancouver, BC</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-xs text-[#f59e0b]"><Star size={12} className="fill-[#f59e0b]" /> 4.9</span>
              <span className="text-xs text-[#64748b]">(127 reviews)</span>
              <span className="text-xs text-[#64748b]">· 0.8 km away</span>
            </div>
          </div>
          <span className="rounded-full bg-[#22c55e]/10 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">Open Now</span>
        </div>

        {/* Badges */}
        <div className="mb-4 flex gap-2">
          {["ASE Certified", "10+ Years", "EV Specialist"].map((badge) => (
            <span key={badge} className="rounded-full bg-[#3b82f6]/10 px-2.5 py-1 text-[10px] font-medium text-[#3b82f6] border border-[#3b82f6]/20">
              {badge}
            </span>
          ))}
        </div>

        {/* Services */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#64748b]">Services</p>
        <div className="mb-4 grid grid-cols-2 gap-2">
          {[
            { service: "Brake Service", price: "$150-400" },
            { service: "Oil Change", price: "$45-80" },
            { service: "Engine Diagnostic", price: "$100-200" },
            { service: "Tire Service", price: "$60-120" },
          ].map((s) => (
            <div key={s.service} className="flex items-center justify-between rounded-lg bg-[#1a1a2e] px-3 py-2">
              <span className="text-xs text-[#f1f5f9]">{s.service}</span>
              <span className="text-[10px] text-[#94a3b8]">{s.price}</span>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#64748b]">Portfolio</p>
        <div className="mb-4 grid grid-cols-4 gap-2">
          {[Wrench, CircleDot, Battery, Car].map((Icon, i) => (
            <div key={i} className="flex h-16 items-center justify-center rounded-lg bg-[#1a1a2e]">
              <Icon size={24} className="text-[#94a3b8]" />
            </div>
          ))}
        </div>

        {/* Reviews preview */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#64748b]">Recent Reviews</p>
        <div className="mb-4 rounded-lg bg-[#1a1a2e] p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-5 w-5 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[9px] text-[#3b82f6]">S</div>
            <span className="text-[10px] font-medium text-[#f1f5f9]">Sarah M.</span>
            <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} className="fill-[#f59e0b] text-[#f59e0b]" />)}</span>
          </div>
          <p className="text-[10px] text-[#94a3b8]">&ldquo;Honest pricing, great work on my brakes. Showed me exactly what was wrong.&rdquo;</p>
        </div>

        {/* CTA */}
        <button className="w-full rounded-lg bg-[#3b82f6] py-3 text-sm font-semibold text-white">
          Request a Quote
        </button>
      </div>
    </div>
  );
}

export function KaputWireframesMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#2d2d44] bg-[#0a0a0f] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
      <div className="border-b border-[#2d2d44] bg-[#1a1a2e] px-5 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#2d2d44]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2d2d44]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2d2d44]" />
        </div>
        <p className="text-xs font-medium text-[#3b82f6] uppercase tracking-wider">Wireframes</p>
        <p className="text-sm font-semibold text-[#f1f5f9]">Kaput — Core User Flows</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-5">
        {[
          {
            step: "1",
            title: "Map Discovery",
            elements: [
              { type: "block", label: "[Full-screen map]" },
              { type: "text", label: "Search: \"Brake repair near me\"" },
              { type: "block", label: "[Pin clusters]" },
              { type: "block", label: "[Bottom sheet — mechanic cards]" },
            ],
          },
          {
            step: "2",
            title: "Mechanic Profile",
            elements: [
              { type: "block", label: "[Header + photo]" },
              { type: "text", label: "Pacific Auto Care ★ 4.9" },
              { type: "block", label: "[Badges: ASE, 10yr]" },
              { type: "block", label: "[Services + prices]" },
              { type: "block", label: "[Request Quote btn]" },
            ],
          },
          {
            step: "3",
            title: "Quote Request",
            elements: [
              { type: "text", label: "Step 2 of 4" },
              { type: "block", label: "[Vehicle: 2019 Civic]" },
              { type: "block", label: "[Category: Brakes]" },
              { type: "block", label: "[Symptom checkboxes]" },
              { type: "block", label: "[Continue btn]" },
            ],
          },
          {
            step: "4",
            title: "Quote Compare",
            elements: [
              { type: "text", label: "2 quotes received" },
              { type: "block", label: "[Quote card A — $348]" },
              { type: "block", label: "[Quote card B — $410]" },
              { type: "block", label: "[Parts / Labor / Tax]" },
              { type: "block", label: "[Accept & Book btn]" },
            ],
          },
        ].map((screen, i) => (
          <div key={i} className="rounded-xl border border-[#2d2d44] bg-[#1a1a2e] p-3">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3b82f6] text-[9px] font-bold text-white">{screen.step}</span>
              <span className="text-[10px] font-semibold text-[#f1f5f9]">{screen.title}</span>
            </div>
            <div className="space-y-2">
              {screen.elements.map((el, j) => (
                <div
                  key={j}
                  className={`rounded-md px-2 py-1.5 text-[8px] ${el.type === "block" ? "bg-[#0a0a0f] text-[#64748b] border border-dashed border-[#2d2d44]" : "text-[#94a3b8]"}`}
                >
                  {el.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#3b82f6]/5 px-5 py-3 border-t border-[#3b82f6]/20">
        <p className="text-[10px] text-[#3b82f6] font-medium">Low-fidelity wireframes validated the map-first architecture and 4-step quote flow before visual design.</p>
      </div>
    </div>
  );
}

export function KaputChatBookingMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#2d2d44] bg-[#0a0a0f] shadow-2xl">
      <div className="border-b border-[#2d2d44] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-xs text-[#3b82f6]">P</div>
          <div>
            <p className="text-sm font-medium text-[#f1f5f9]">Pacific Auto Care</p>
            <p className="text-[10px] text-[#22c55e]">Online</p>
          </div>
        </div>
        <span className="rounded-full bg-[#f59e0b]/10 px-2 py-0.5 text-[10px] text-[#f59e0b]">In Progress</span>
      </div>

      <div className="p-4 space-y-3 h-[280px]">
        {/* Messages */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[#3b82f6] px-3 py-2">
            <p className="text-xs text-white">Hi! I submitted a quote request for brake service on my Civic.</p>
            <p className="mt-1 text-[9px] text-white/60">10:32 AM</p>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-[#1a1a2e] px-3 py-2">
            <p className="text-xs text-[#f1f5f9]">Hi Kasra! I reviewed the photos you sent. Looks like the front pads are worn down. I can also check the rotors when you come in.</p>
            <p className="mt-1 text-[9px] text-[#64748b]">10:35 AM</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[#3b82f6] px-3 py-2">
            <p className="text-xs text-white">Sounds good. When&apos;s the earliest I can come in?</p>
            <p className="mt-1 text-[9px] text-white/60">10:36 AM</p>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-[#1a1a2e] px-3 py-2">
            <p className="text-xs text-[#f1f5f9]">I have a slot today at 2:30 PM. Should take about 2 hours. Want me to book it?</p>
            <p className="mt-1 text-[9px] text-[#64748b]">10:37 AM</p>
          </div>
        </div>

        {/* Booking card inline */}
        <div className="flex">
          <div className="rounded-xl border border-[#2d2d44] bg-[#1a1a2e] p-3 max-w-[80%]">
            <p className="text-[10px] text-[#64748b] mb-1">Booking Confirmation</p>
            <p className="text-xs font-medium text-[#f1f5f9]">Brake Pad Replacement</p>
            <p className="text-[10px] text-[#94a3b8]">Today, 2:30 PM · Est. 2 hours</p>
            <p className="text-xs font-medium text-[#3b82f6] mt-1">$348.00 + tax</p>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-lg bg-[#3b82f6] py-1.5 text-[10px] font-medium text-white">Confirm</button>
              <button className="flex-1 rounded-lg bg-[#222238] py-1.5 text-[10px] text-[#94a3b8] border border-[#2d2d44]">Reschedule</button>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#2d2d44] px-4 py-3 flex items-center gap-2">
        <div className="flex-1 rounded-lg bg-[#1a1a2e] px-3 py-2">
          <span className="text-xs text-[#64748b]">Type a message...</span>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );
}
