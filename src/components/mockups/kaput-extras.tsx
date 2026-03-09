import { Star, Car, Wrench, CircleDot, Battery } from "lucide-react";

export function KaputQuoteFlowMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      <div className="border-b border-[#3a5060] px-5 py-3">
        <p className="text-xs text-[#C9C1B1]">Quote Request</p>
        <p className="text-sm font-semibold text-[#EEE9DF]">Step 2 of 4 — Select Symptoms</p>
      </div>

      {/* Progress */}
      <div className="flex border-b border-[#3a5060]">
        {["Vehicle", "Symptoms", "Details", "Submit"].map((step, i) => (
          <div key={step} className={`flex-1 py-2 text-center text-[10px] border-b-2 ${i <= 1 ? "border-[#FFB162] text-[#FFB162] font-medium" : "border-transparent text-[#8a8275]"}`}>
            {step}
          </div>
        ))}
      </div>

      <div className="p-5">
        {/* Selected vehicle */}
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#2C3B4D] p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFB162]/20 text-sm"><Car size={16} className="text-[#FFB162]" /></div>
          <div>
            <p className="text-xs font-medium text-[#EEE9DF]">2019 Honda Civic</p>
            <p className="text-[10px] text-[#8a8275]">Silver · ABC 1234</p>
          </div>
          <span className="ml-auto text-[10px] text-[#FFB162]">Change</span>
        </div>

        {/* Category selected */}
        <p className="mb-2 text-[10px] text-[#C9C1B1]">Category: <span className="text-[#EEE9DF] font-medium">Brakes</span></p>

        {/* Symptom selection */}
        <p className="mb-3 text-xs font-medium text-[#EEE9DF]">What are you experiencing?</p>
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
              className={`rounded-lg px-3 py-2.5 text-xs cursor-pointer ${s.selected ? "bg-[#FFB162]/15 text-[#FFB162] border border-[#FFB162]/40" : "bg-[#2C3B4D] text-[#C9C1B1] border border-[#3a5060]"}`}
            >
              <div className="flex items-center gap-2">
                {s.selected && (
                  <svg className="h-3.5 w-3.5 text-[#FFB162]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                )}
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full rounded-lg bg-[#FFB162] py-2.5 text-sm font-medium text-[#1B2632]">
          Continue to Details
        </button>
      </div>
    </div>
  );
}

export function KaputMechanicProfileMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      {/* Header */}
      <div className="relative h-28 bg-gradient-to-r from-[#FFB162]/20 to-[#FFB162]/5">
        <div className="absolute -bottom-8 left-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#2C3B4D] border-2 border-[#FFB162] shadow-lg">
            <Wrench size={28} className="text-[#FFB162]" />
          </div>
        </div>
      </div>

      <div className="px-5 pt-12 pb-5">
        {/* Name & badges */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[#EEE9DF]">Pacific Auto Care</h3>
              <svg className="h-4 w-4 text-[#FFB162]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>
            <p className="text-xs text-[#C9C1B1]">1234 Commercial Dr, Vancouver, BC</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-xs text-[#f59e0b]"><Star size={12} className="fill-[#f59e0b]" /> 4.9</span>
              <span className="text-xs text-[#8a8275]">(127 reviews)</span>
              <span className="text-xs text-[#8a8275]">· 0.8 km away</span>
            </div>
          </div>
          <span className="rounded-full bg-[#22c55e]/10 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">Open Now</span>
        </div>

        {/* Badges */}
        <div className="mb-4 flex gap-2">
          {["ASE Certified", "10+ Years", "EV Specialist"].map((badge) => (
            <span key={badge} className="rounded-full bg-[#FFB162]/10 px-2.5 py-1 text-[10px] font-medium text-[#FFB162] border border-[#FFB162]/20">
              {badge}
            </span>
          ))}
        </div>

        {/* Services */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Services</p>
        <div className="mb-4 grid grid-cols-2 gap-2">
          {[
            { service: "Brake Service", price: "$150-400" },
            { service: "Oil Change", price: "$45-80" },
            { service: "Engine Diagnostic", price: "$100-200" },
            { service: "Tire Service", price: "$60-120" },
          ].map((s) => (
            <div key={s.service} className="flex items-center justify-between rounded-lg bg-[#2C3B4D] px-3 py-2">
              <span className="text-xs text-[#EEE9DF]">{s.service}</span>
              <span className="text-[10px] text-[#C9C1B1]">{s.price}</span>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Portfolio</p>
        <div className="mb-4 grid grid-cols-4 gap-2">
          {[Wrench, CircleDot, Battery, Car].map((Icon, i) => (
            <div key={i} className="flex h-16 items-center justify-center rounded-lg bg-[#2C3B4D]">
              <Icon size={24} className="text-[#C9C1B1]" />
            </div>
          ))}
        </div>

        {/* Reviews preview */}
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8a8275]">Recent Reviews</p>
        <div className="mb-4 rounded-lg bg-[#2C3B4D] p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-5 w-5 rounded-full bg-[#FFB162]/20 flex items-center justify-center text-[9px] text-[#FFB162]">S</div>
            <span className="text-[10px] font-medium text-[#EEE9DF]">Sarah M.</span>
            <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} className="fill-[#f59e0b] text-[#f59e0b]" />)}</span>
          </div>
          <p className="text-[10px] text-[#C9C1B1]">&ldquo;Honest pricing, great work on my brakes. Showed me exactly what was wrong.&rdquo;</p>
        </div>

        {/* CTA */}
        <button className="w-full rounded-lg bg-[#FFB162] py-3 text-sm font-semibold text-[#1B2632]">
          Request a Quote
        </button>
      </div>
    </div>
  );
}

export function KaputChatBookingMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      <div className="border-b border-[#3a5060] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#FFB162]/20 flex items-center justify-center text-xs text-[#FFB162]">P</div>
          <div>
            <p className="text-sm font-medium text-[#EEE9DF]">Pacific Auto Care</p>
            <p className="text-[10px] text-[#22c55e]">Online</p>
          </div>
        </div>
        <span className="rounded-full bg-[#f59e0b]/10 px-2 py-0.5 text-[10px] text-[#f59e0b]">In Progress</span>
      </div>

      <div className="p-4 space-y-3 h-[280px]">
        {/* Messages */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[#FFB162] px-3 py-2">
            <p className="text-xs text-[#1B2632]">Hi! I submitted a quote request for brake service on my Civic.</p>
            <p className="mt-1 text-[9px] text-[#1B2632]/50">10:32 AM</p>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-[#2C3B4D] px-3 py-2">
            <p className="text-xs text-[#EEE9DF]">Hi Kasra! I reviewed the photos you sent. Looks like the front pads are worn down. I can also check the rotors when you come in.</p>
            <p className="mt-1 text-[9px] text-[#8a8275]">10:35 AM</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[#FFB162] px-3 py-2">
            <p className="text-xs text-[#1B2632]">Sounds good. When&apos;s the earliest I can come in?</p>
            <p className="mt-1 text-[9px] text-[#1B2632]/50">10:36 AM</p>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-[#2C3B4D] px-3 py-2">
            <p className="text-xs text-[#EEE9DF]">I have a slot today at 2:30 PM. Should take about 2 hours. Want me to book it?</p>
            <p className="mt-1 text-[9px] text-[#8a8275]">10:37 AM</p>
          </div>
        </div>

        {/* Booking card inline */}
        <div className="flex">
          <div className="rounded-xl border border-[#3a5060] bg-[#2C3B4D] p-3 max-w-[80%]">
            <p className="text-[10px] text-[#8a8275] mb-1">Booking Confirmation</p>
            <p className="text-xs font-medium text-[#EEE9DF]">Brake Pad Replacement</p>
            <p className="text-[10px] text-[#C9C1B1]">Today, 2:30 PM · Est. 2 hours</p>
            <p className="text-xs font-medium text-[#FFB162] mt-1">$348.00 + tax</p>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-lg bg-[#FFB162] py-1.5 text-[10px] font-medium text-[#1B2632]">Confirm</button>
              <button className="flex-1 rounded-lg bg-[#354a5e] py-1.5 text-[10px] text-[#C9C1B1] border border-[#3a5060]">Reschedule</button>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#3a5060] px-4 py-3 flex items-center gap-2">
        <div className="flex-1 rounded-lg bg-[#2C3B4D] px-3 py-2">
          <span className="text-xs text-[#8a8275]">Type a message...</span>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFB162]">
          <svg className="h-4 w-4 text-[#1B2632]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );
}
