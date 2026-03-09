"use client";

const skills = [
  "User Interviews",
  "Surveys & Analysis",
  "Competitive Audits",
  "Journey Mapping",
  "Personas",
  "Information Architecture",
  "Wireframing",
  "Hi-Fi UI Design",
  "Design Systems",
  "Interactive Prototypes",
  "Responsive Design",
  "Cross-Platform",
  "Usability Testing",
  "A/B Testing",
  "Card Sorting",
  "Heuristic Evaluation",
  "Figma",
  "Notion",
  "Maze",
  "Google Analytics",
  "Miro",
];

export function SkillsMarquee() {
  const content = skills.join("  ·  ") + "  ·  ";

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        <span className="text-base text-[var(--text-secondary)] tracking-wider">
          {content}
        </span>
        <span className="text-base text-[var(--text-secondary)] tracking-wider">
          {content}
        </span>
      </div>
    </div>
  );
}
