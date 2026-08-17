import { techStack } from "@/lib/content";

// Infinite-scrolling row of colorful tech logos (devicon SVGs in /public/tech).
// Items are duplicated once so the -50% translate loops seamlessly.
export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="marquee-track gap-4">
        {items.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            title={t.label}
            className="group flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/tech/${t.name}.svg`}
              alt={t.label}
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-[10px] text-muted">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
