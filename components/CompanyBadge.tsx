// Experience timeline node. Shows the real company logo on a clean light tile
// (so multicolor/wordmark logos read against the dark theme), wrapped in a subtle
// rotating accent ring for motion. Falls back to an animated monogram if no logo.

function initials(company: string) {
  const words = company.replace(/[^a-zA-Z ]/g, "").split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function CompanyBadge({
  company,
  accent,
  logo,
}: {
  company: string;
  accent: string;
  logo?: string;
}) {
  return (
    <div
      className="viz-float relative h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      style={{ filter: `drop-shadow(0 0 16px ${accent}66)` }}
    >
      {/* pulsing brand-colored glow */}
      <div
        className="exp-glow absolute -inset-2 rounded-full"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
        aria-hidden="true"
      />
      {/* rotating accent ring (motion) */}
      <svg viewBox="0 0 48 48" className="absolute -inset-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)]" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeDasharray="3 6"
          opacity="0.8"
          className="badge-ring"
        />
      </svg>

      {logo ? (
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl border bg-white/95 p-1.5"
          style={{ borderColor: `${accent}55` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={`${company} logo`} className="max-h-full max-w-full object-contain" />
        </div>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full bg-surface"
          style={{ border: `1px solid ${accent}55` }}
        >
          <span className="font-mono text-xs font-semibold" style={{ color: accent }}>
            {initials(company)}
          </span>
        </div>
      )}
    </div>
  );
}
