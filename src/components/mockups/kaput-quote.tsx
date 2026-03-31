import { Star } from "lucide-react";

export function KaputQuoteComparisonMockup() {
  const quotes = [
    {
      name: "Pacific Auto Care",
      rating: 4.9,
      reviews: 127,
      distance: "0.8 km",
      time: "2-3 hours",
      items: [
        { desc: "Brake pads (front)", type: "Parts", cost: 89 },
        { desc: "Brake pads (rear)", type: "Parts", cost: 79 },
        { desc: "Brake rotor inspection", type: "Labor", cost: 45 },
        { desc: "Pad installation", type: "Labor", cost: 120 },
        { desc: "Brake fluid top-up", type: "Parts", cost: 15 },
      ],
      total: 348,
      tax: 45.24,
      selected: true,
    },
    {
      name: "East Van Motors",
      rating: 4.7,
      reviews: 89,
      distance: "1.2 km",
      time: "3-4 hours",
      items: [
        { desc: "Brake pads (front + rear)", type: "Parts", cost: 145 },
        { desc: "Labor — brake service", type: "Labor", cost: 180 },
        { desc: "Brake fluid flush", type: "Parts", cost: 35 },
      ],
      total: 360,
      tax: 46.80,
      selected: false,
    },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      {/* Header */}
      <div className="border-b border-[#3a5060] px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#C9C1B1]">Quote comparison</p>
            <p className="text-lg font-semibold text-[#EEE9DF]">
              Brake Service — 2019 Honda Civic
            </p>
          </div>
          <span className="rounded-full bg-[#22c55e]/10 px-3 py-1 text-xs font-medium text-[#22c55e]">
            2 quotes received
          </span>
        </div>
      </div>

      {/* Quote cards */}
      <div className="grid gap-4 p-5 md:grid-cols-2">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 ${q.selected ? "border-[#FFB162] bg-[#FFB162]/5" : "border-[#3a5060] bg-[#2C3B4D]"}`}
          >
            {/* Mechanic info */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="font-medium text-[#EEE9DF]">{q.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-xs text-[#f59e0b]"><Star size={12} className="fill-[#f59e0b]" /> {q.rating}</span>
                  <span className="text-xs text-[#8a8275]">({q.reviews} reviews)</span>
                  <span className="text-xs text-[#8a8275]">· {q.distance}</span>
                </div>
              </div>
              {q.selected && (
                <span className="rounded-full bg-[#FFB162] px-2 py-0.5 text-[10px] font-medium text-[#1B2632]">
                  Best Value
                </span>
              )}
            </div>

            {/* Line items */}
            <div className="mb-4 space-y-2">
              {q.items.map((item, j) => (
                <div key={j} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] ${item.type === "Parts" ? "bg-[#FFB162]/20 text-[#FFB162]" : "bg-[#f59e0b]/20 text-[#f59e0b]"}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-[#C9C1B1]">{item.desc}</span>
                  </div>
                  <span className="text-xs font-medium text-[#EEE9DF]">
                    ${item.cost}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-3 border-t border-[#3a5060]" />

            {/* Totals */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-xs text-[#8a8275]">Subtotal</span>
                <span className="text-xs text-[#C9C1B1]">${q.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#8a8275]">Tax (GST + PST)</span>
                <span className="text-xs text-[#C9C1B1]">${q.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-sm font-semibold text-[#EEE9DF]">Total</span>
                <span className="text-sm font-semibold text-[#EEE9DF]">
                  ${(q.total + q.tax).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Estimated time */}
            <div className="mt-3 flex items-center gap-1">
              <svg className="h-3 w-3 text-[#8a8275]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-xs text-[#8a8275]">Est. {q.time}</span>
            </div>

            {/* Action */}
            <button
              className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition-colors ${q.selected ? "bg-[#FFB162] text-[#1B2632] hover:bg-[#E8956A]" : "bg-[#354a5e] text-[#C9C1B1] hover:bg-[#3a5060]"}`}
            >
              {q.selected ? "Accept & Book" : "Accept Quote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
