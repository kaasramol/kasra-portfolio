import { Users, FolderOpen, Settings, ClipboardList, Zap, ListChecks, Hand } from "lucide-react";

export function OnboardBeforeMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-2xl">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-red-500 uppercase tracking-wider">Before — Old Onboarding</p>
      </div>
      <div className="p-8">
        <h3 className="mb-1 text-xl font-semibold text-[#1B2632]">Welcome to Taskly</h3>
        <p className="mb-6 text-sm text-[#8a8275]">Complete your profile to get started</p>

        {/* Long boring form */}
        <div className="space-y-4">
          {[
            { label: "Company Name", placeholder: "Enter your company name" },
            { label: "Team Size", placeholder: "Select team size" },
            { label: "Your Role", placeholder: "Select your role" },
            { label: "Department", placeholder: "Select department" },
            { label: "How did you hear about us?", placeholder: "Select..." },
          ].map((field, i) => (
            <div key={i}>
              <label className="mb-1 block text-xs font-medium text-[#2C3B4D]">{field.label}</label>
              <div className="rounded-lg border border-[#C9C1B1] bg-[#E5DFD3] px-3 py-2">
                <span className="text-sm text-[#8a8275]">{field.placeholder}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar showing step 2 of 7 */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#d5cfc5]">
            <div className="h-1.5 w-[28%] rounded-full bg-[#8a8275]" />
          </div>
          <span className="text-xs text-[#8a8275]">Step 2 of 7</span>
        </div>

        {/* Annotation */}
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
          <p className="text-xs text-red-600 font-medium">28% drop-off at this step — too many fields before seeing any value</p>
        </div>
      </div>
    </div>
  );
}

export function OnboardAfterMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-2xl">
      <div className="border-b border-[#d5cfc5] bg-[#E5DFD3] px-5 py-3">
        <p className="text-xs font-medium text-[#22c55e] uppercase tracking-wider">After — Redesigned Onboarding</p>
      </div>

      {/* Step 1: Welcome */}
      <div className="border-b border-[#d5cfc5] p-8 text-center">
        <Hand size={40} className="mb-4 inline-block text-[#C9C1B1]" />
        <h3 className="mb-2 text-2xl font-semibold text-[#1B2632]">Welcome to Taskly!</h3>
        <p className="mb-6 text-[#8a8275]">What should we call you?</p>
        <div className="mx-auto max-w-xs">
          <div className="rounded-xl border-2 border-[#FFB162] bg-[#EEE9DF] px-4 py-3 text-center">
            <span className="text-lg text-[#1B2632]">Kasra</span>
            <span className="ml-0.5 animate-pulse text-[#FFB162]">|</span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-[#FFB162] py-3 font-medium text-[#1B2632]">
            Continue
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#FFB162]" />
          <div className="h-2 w-2 rounded-full bg-[#d5cfc5]" />
          <div className="h-2 w-2 rounded-full bg-[#d5cfc5]" />
        </div>
      </div>

      {/* Step 2: Use case */}
      <div className="p-8">
        <h3 className="mb-2 text-center text-xl font-semibold text-[#1B2632]">
          What brings you here, Kasra?
        </h3>
        <p className="mb-6 text-center text-sm text-[#8a8275]">
          We&apos;ll customize your experience
        </p>
        <div className="mx-auto grid max-w-md gap-3">
          {[
            { icon: <ClipboardList size={24} />, label: "Manage Projects", desc: "Track tasks, deadlines & progress", selected: true },
            { icon: <Zap size={24} />, label: "Run Sprints", desc: "Agile workflows for dev teams", selected: false },
            { icon: <ListChecks size={24} />, label: "Organize Tasks", desc: "Personal to-dos & checklists", selected: false },
          ].map((opt, i) => (
            <div
              key={i}
              className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${opt.selected ? "border-[#FFB162] bg-[#FFB162]/5 ring-2 ring-[#FFB162]/20" : "border-[#d5cfc5] hover:border-[#C9C1B1]"}`}
            >
              <span className="text-[#8a8275]">{opt.icon}</span>
              <div>
                <p className="font-medium text-[#1B2632]">{opt.label}</p>
                <p className="text-xs text-[#8a8275]">{opt.desc}</p>
              </div>
              {opt.selected && (
                <svg className="ml-auto h-5 w-5 text-[#FFB162]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#FFB162]" />
          <div className="h-2 w-2 rounded-full bg-[#FFB162]" />
          <div className="h-2 w-2 rounded-full bg-[#d5cfc5]" />
        </div>

        {/* Annotation */}
        <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3">
          <p className="text-xs text-green-700 font-medium">One tap replaces 5 form fields — personalizes the experience without friction</p>
        </div>
      </div>
    </div>
  );
}

export function OnboardCelebrationMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#d5cfc5] bg-[#EEE9DF] shadow-2xl">
      <div className="p-8 text-center">
        <div className="mb-4 text-5xl">🎉</div>
        <h3 className="mb-2 text-2xl font-bold text-[#1B2632]">
          You&apos;re all set, Kasra!
        </h3>
        <p className="mb-8 text-[#8a8275]">
          Your first project is ready. Here&apos;s what you can do next:
        </p>
        <div className="mx-auto grid max-w-sm gap-3">
          {[
            { icon: <Users size={20} />, label: "Invite your team", desc: "Share your workspace" },
            { icon: <FolderOpen size={20} />, label: "Browse templates", desc: "Explore more layouts" },
            { icon: <Settings size={20} />, label: "Customize workspace", desc: "Make it yours" },
          ].map((action, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-[#d5cfc5] p-3 text-left transition-colors hover:bg-[#E5DFD3]"
            >
              <span className="text-xl text-[#8a8275]">{action.icon}</span>
              <div>
                <p className="text-sm font-medium text-[#1B2632]">{action.label}</p>
                <p className="text-xs text-[#8a8275]">{action.desc}</p>
              </div>
              <svg className="ml-auto h-4 w-4 text-[#C9C1B1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          ))}
        </div>
        <button className="mt-6 rounded-xl bg-[#FFB162] px-8 py-3 font-medium text-[#1B2632]">
          Go to my dashboard
        </button>

        {/* Annotation */}
        <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-3 text-left">
          <p className="text-xs text-green-700 font-medium">No forced actions — team invite is optional. Completion rate went from 60% to 92%</p>
        </div>
      </div>
    </div>
  );
}
