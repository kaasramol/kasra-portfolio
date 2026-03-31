import { Users, FolderOpen, Settings, ClipboardList, Zap, ListChecks, Hand } from "lucide-react";

export function OnboardBeforeMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] shadow-[0_8px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="border-b border-[#E2E8F0] bg-gradient-to-r from-[#F1F5F9] to-[#F8FAFC] px-5 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        </div>
        <p className="text-xs font-medium text-red-500 uppercase tracking-wider">Before — Old Onboarding</p>
      </div>
      <div className="p-8">
        <h3 className="mb-1 text-xl font-semibold text-[#0F172A]">Welcome to Taskly</h3>
        <p className="mb-6 text-sm text-[#94A3B8]">Complete your profile to get started</p>

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
              <label className="mb-1 block text-xs font-medium text-[#334155]">{field.label}</label>
              <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2">
                <span className="text-sm text-[#94A3B8]">{field.placeholder}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar showing step 2 of 7 */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]">
            <div className="h-1.5 w-[28%] rounded-full bg-[#94A3B8]" />
          </div>
          <span className="text-xs text-[#94A3B8]">Step 2 of 7</span>
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
    <div className="my-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] shadow-[0_8px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="border-b border-[#E2E8F0] bg-gradient-to-r from-[#F1F5F9] to-[#F8FAFC] px-5 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        </div>
        <p className="text-xs font-medium text-[#10B981] uppercase tracking-wider">After — Redesigned Onboarding</p>
      </div>

      {/* Step 1: Welcome */}
      <div className="border-b border-[#E2E8F0] p-8 text-center">
        <Hand size={40} className="mb-4 inline-block text-[#94A3B8]" />
        <h3 className="mb-2 text-2xl font-semibold text-[#0F172A]">Welcome to Taskly!</h3>
        <p className="mb-6 text-[#64748B]">What should we call you?</p>
        <div className="mx-auto max-w-xs">
          <div className="rounded-xl border-2 border-[#10B981] bg-white px-4 py-3 text-center">
            <span className="text-lg text-[#0F172A]">Kasra</span>
            <span className="ml-0.5 animate-pulse text-[#10B981]">|</span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-[#10B981] py-3 font-medium text-white">
            Continue
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#10B981]" />
          <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
          <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
        </div>
      </div>

      {/* Step 2: Use case */}
      <div className="p-8">
        <h3 className="mb-2 text-center text-xl font-semibold text-[#0F172A]">
          What brings you here, Kasra?
        </h3>
        <p className="mb-6 text-center text-sm text-[#64748B]">
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
              className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${opt.selected ? "border-[#10B981] bg-[#10B981]/5 ring-2 ring-[#10B981]/20" : "border-[#E2E8F0] hover:border-[#CBD5E1]"}`}
            >
              <span className="text-[#94A3B8]">{opt.icon}</span>
              <div>
                <p className="font-medium text-[#0F172A]">{opt.label}</p>
                <p className="text-xs text-[#64748B]">{opt.desc}</p>
              </div>
              {opt.selected && (
                <svg className="ml-auto h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#10B981]" />
          <div className="h-2 w-2 rounded-full bg-[#10B981]" />
          <div className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
        </div>

        {/* Annotation */}
        <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3">
          <p className="text-xs text-emerald-700 font-medium">One tap replaces 5 form fields — personalizes the experience without friction</p>
        </div>
      </div>
    </div>
  );
}

export function OnboardCelebrationMockup() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] shadow-[0_8px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="p-8 text-center">
        <div className="mb-4 text-5xl">🎉</div>
        <h3 className="mb-2 text-2xl font-bold text-[#0F172A]">
          You&apos;re all set, Kasra!
        </h3>
        <p className="mb-8 text-[#64748B]">
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
              className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] p-3 text-left transition-colors hover:bg-[#F1F5F9]"
            >
              <span className="text-xl text-[#94A3B8]">{action.icon}</span>
              <div>
                <p className="text-sm font-medium text-[#0F172A]">{action.label}</p>
                <p className="text-xs text-[#64748B]">{action.desc}</p>
              </div>
              <svg className="ml-auto h-4 w-4 text-[#CBD5E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          ))}
        </div>
        <button className="mt-6 rounded-xl bg-[#10B981] px-8 py-3 font-medium text-white">
          Go to my dashboard
        </button>

        {/* Annotation */}
        <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-left">
          <p className="text-xs text-emerald-700 font-medium">No forced actions — team invite is optional. Completion rate went from 60% to 92%</p>
        </div>
      </div>
    </div>
  );
}
