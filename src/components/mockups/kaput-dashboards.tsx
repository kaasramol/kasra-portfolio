export function KaputOwnerDashboardMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      <div className="border-b border-[#3a5060] px-5 py-4">
        <p className="text-xs text-[#C9C1B1]">Car Owner Dashboard</p>
        <p className="text-lg font-semibold text-[#EEE9DF]">My Bookings</p>
      </div>
      <div className="p-5 space-y-3">
        {[
          { shop: "Pacific Auto Care", service: "Brake Pad Replacement", status: "In Progress", statusColor: "text-[#f59e0b] bg-[#f59e0b]/10", date: "Today, 2:30 PM", car: "2019 Honda Civic", cost: "$393.24" },
          { shop: "Grandview Garage", service: "Oil Change + Inspection", status: "Scheduled", statusColor: "text-[#FFB162] bg-[#FFB162]/10", date: "Mar 12, 10:00 AM", car: "2019 Honda Civic", cost: "$89.00" },
          { shop: "East Van Motors", service: "Tire Rotation", status: "Completed", statusColor: "text-[#22c55e] bg-[#22c55e]/10", date: "Feb 28", car: "2019 Honda Civic", cost: "$45.00" },
        ].map((b, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-[#3a5060] bg-[#2C3B4D] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#354a5e]">
                <svg className="h-5 w-5 text-[#FFB162]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#EEE9DF]">{b.service}</p>
                <p className="text-xs text-[#8a8275]">{b.shop} · {b.car}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${b.statusColor}`}>
                {b.status}
              </span>
              <p className="mt-1 text-xs text-[#8a8275]">{b.date}</p>
              <p className="text-xs font-medium text-[#EEE9DF]">{b.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KaputMechanicDashboardMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#3a5060] bg-[#1B2632] shadow-2xl">
      <div className="border-b border-[#3a5060] px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#C9C1B1]">Mechanic Dashboard</p>
            <p className="text-lg font-semibold text-[#EEE9DF]">Pacific Auto Care</p>
          </div>
          <span className="rounded-full bg-[#22c55e]/10 px-3 py-1 text-xs font-medium text-[#22c55e]">Open</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 border-b border-[#3a5060]">
        {[
          { label: "New Requests", value: "3", color: "text-[#FFB162]" },
          { label: "Active Jobs", value: "2", color: "text-[#f59e0b]" },
          { label: "This Month", value: "$4,280", color: "text-[#22c55e]" },
          { label: "Rating", value: "4.9", color: "text-[#f59e0b]" },
        ].map((s, i) => (
          <div key={i} className="border-r border-[#3a5060] p-4 last:border-r-0 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[10px] text-[#8a8275]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Incoming requests */}
      <div className="p-5">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#C9C1B1]">Incoming Requests</p>
        <div className="space-y-3">
          {[
            { owner: "Sarah M.", car: "2021 Toyota Corolla", issue: "Engine — Check engine light on", time: "12 min ago", photos: 2 },
            { owner: "James L.", car: "2018 BMW 3 Series", issue: "Electrical — Battery keeps dying", time: "34 min ago", photos: 1 },
            { owner: "Priya K.", car: "2020 Mazda CX-5", issue: "Routine — Oil change + tire rotation", time: "1 hr ago", photos: 0 },
          ].map((r, i) => (
            <div key={i} className="rounded-xl border border-[#3a5060] bg-[#2C3B4D] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#FFB162]/20 flex items-center justify-center text-xs font-medium text-[#FFB162]">
                      {r.owner[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#EEE9DF]">{r.owner}</p>
                      <p className="text-xs text-[#8a8275]">{r.car}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-[#C9C1B1]">{r.issue}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[10px] text-[#8a8275]">{r.time}</span>
                    {r.photos > 0 && (
                      <span className="text-[10px] text-[#8a8275]">{r.photos} photo{r.photos > 1 ? "s" : ""}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-[#354a5e] px-3 py-1.5 text-xs text-[#C9C1B1] hover:bg-[#3a5060]">
                    Decline
                  </button>
                  <button className="rounded-lg bg-[#FFB162] px-3 py-1.5 text-xs font-medium text-[#1B2632] hover:bg-[#E8956A]">
                    Send Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
