import type { ProjectVisualKind } from "@/lib/content";

// Generated, on-brand animated artwork for each project. Pure SVG + CSS/SMIL,
// so it's lightweight, themeable, and clearly animated (traveling data pulses,
// flowing pipelines, sequenced reveals).

const C = "var(--accent)";
const V = "var(--accent-2)";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border bg-surface-2">
      <div className="glow-radial pointer-events-none absolute inset-0 opacity-40" />
      <svg viewBox="0 0 320 160" className="relative h-full w-full" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

// A dot that travels a path there-and-back (message passing).
function Pulse({ path, begin, dur = 2.4, color = C }: { path: string; begin: number; dur?: number; color?: string }) {
  return (
    <circle r={3} fill={color}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
    </circle>
  );
}

// 1 — Multi-agent orchestrator: a planner coordinating worker agents with
// messages flowing along every edge.
function Orchestrator() {
  const cx = 160;
  const cy = 80;
  const agents = [
    { x: 56, y: 40 },
    { x: 56, y: 120 },
    { x: 264, y: 40 },
    { x: 264, y: 120 },
    { x: 160, y: 22 },
    { x: 160, y: 138 },
  ];
  return (
    <Frame>
      {agents.map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={a.x} y2={a.y} stroke={C} strokeWidth={1.2} opacity={0.35} className="viz-flow" />
      ))}
      {agents.map((a, i) => (
        <Pulse key={i} path={`M${cx},${cy} L${a.x},${a.y}`} begin={i * 0.4} color={i % 2 ? V : C} />
      ))}
      {agents.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r={11} fill={V} opacity={0.9} className={`viz-node viz-node-${(i % 4) + 1}`} />
          <circle cx={a.x} cy={a.y} r={4} fill="#0a0a0f" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={24} fill="none" stroke={C} strokeWidth={1.4} strokeDasharray="4 7" opacity={0.6} className="badge-ring" />
      <circle cx={cx} cy={cy} r={17} fill={C} className="viz-node" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="700" fill="#0a0a0f">
        plan
      </text>
    </Frame>
  );
}

// 2 — Multimodal: image + text features fusing in a CLIP encoder, emitting a
// shared embedding.
function Multimodal() {
  return (
    <Frame>
      {/* image input (top-left) */}
      <g className="viz-float">
        <rect x="26" y="34" width="58" height="42" rx="6" fill="none" stroke={V} strokeWidth={1.4} opacity={0.8} />
        <circle cx="44" cy="50" r="5" fill={V} opacity={0.8} />
        <path d="M30 70 L46 54 L58 64 L74 48 L80 72 Z" fill={C} opacity={0.35} />
      </g>
      {/* text input (bottom-left) */}
      <g className="viz-float" style={{ animationDelay: "0.8s" }}>
        {[96, 106, 116].map((y, i) => (
          <rect key={i} x="30" y={y} width={i === 1 ? 52 : 40} height="6" rx="3" fill={C} opacity={0.7} />
        ))}
      </g>
      {/* edges into the fusion core */}
      <line x1="84" y1="55" x2="150" y2="80" stroke={C} strokeWidth={1.2} opacity={0.4} className="viz-flow" />
      <line x1="84" y1="106" x2="150" y2="80" stroke={C} strokeWidth={1.2} opacity={0.4} className="viz-flow" />
      <Pulse path="M84,55 L160,80" begin={0} color={V} />
      <Pulse path="M84,106 L160,80" begin={0.6} color={C} />
      {/* CLIP fusion core */}
      <circle cx="160" cy="80" r="20" fill="none" stroke={V} strokeWidth={1.4} strokeDasharray="3 5" className="badge-ring" />
      <circle cx="160" cy="80" r="12" fill={V} className="viz-node" />
      {/* output embedding bars */}
      <line x1="180" y1="80" x2="230" y2="80" stroke={C} strokeWidth={1.2} opacity={0.5} className="viz-flow" />
      <Pulse path="M180,80 L236,80" begin={1.2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={244 + i * 12} y={62} width={7} height={36} rx={2} fill={C} className={`viz-node viz-node-${(i % 4) + 1}`} opacity={0.8} />
      ))}
      {/* scan beam over the image */}
      <rect x="26" y="32" width="58" height="2" fill="#fff" opacity={0.7} className="viz-scan" />
    </Frame>
  );
}

// 3 — RAG pipeline: docs → vector store → LLM → answer, with data flowing.
function Rag() {
  return (
    <Frame>
      {/* docs */}
      <g className="viz-float">
        <rect x="20" y="58" width="30" height="40" rx="4" fill="none" stroke={C} strokeWidth={1.3} opacity={0.8} />
        <rect x="28" y="50" width="30" height="40" rx="4" fill="var(--surface)" stroke={C} strokeWidth={1.3} />
        {[60, 68, 76].map((y, i) => (
          <rect key={i} x="33" y={y} width={i === 2 ? 12 : 20} height="3" rx="1.5" fill={C} opacity={0.5} />
        ))}
      </g>
      {/* vector DB */}
      <g>
        <ellipse cx="135" cy="58" rx="20" ry="6" fill="none" stroke={V} strokeWidth={1.3} />
        <path d="M115 58 V100 a20 6 0 0 0 40 0 V58" fill="none" stroke={V} strokeWidth={1.3} opacity={0.85} />
        {[72, 84].map((y, i) => (
          <ellipse key={i} cx="135" cy={y} rx="20" ry="6" fill="none" stroke={V} strokeWidth={1} opacity={0.4} />
        ))}
      </g>
      {/* LLM block */}
      <g className="viz-float" style={{ animationDelay: "0.6s" }}>
        <rect x="196" y="58" width="44" height="44" rx="8" fill="none" stroke={C} strokeWidth={1.4} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="204" y={66 + i * 11} width="28" height="6" rx="3" fill={C} opacity={0.4 + i * 0.18} className={`viz-node viz-node-${i + 1}`} />
        ))}
      </g>
      {/* answer bubble */}
      <g className="viz-float" style={{ animationDelay: "1.2s" }}>
        <rect x="270" y="62" width="40" height="30" rx="8" fill="var(--surface)" stroke={C} strokeWidth={1.3} />
        <path d="M280 92 l0 9 l9 -9 z" fill={C} opacity={0.6} />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={280 + i * 9} cy="77" r="2.5" fill={C} className={`viz-node viz-node-${i + 1}`} />
        ))}
      </g>
      {/* flow + pulses */}
      <line x1="60" y1="79" x2="113" y2="79" stroke={C} strokeWidth={1.2} opacity={0.45} className="viz-flow" />
      <line x1="157" y1="79" x2="194" y2="79" stroke={C} strokeWidth={1.2} opacity={0.45} className="viz-flow" />
      <line x1="240" y1="79" x2="268" y2="78" stroke={C} strokeWidth={1.2} opacity={0.45} className="viz-flow" />
      <Pulse path="M60,79 L113,79" begin={0} dur={1.6} />
      <Pulse path="M157,79 L194,79" begin={0.5} dur={1.6} />
      <Pulse path="M240,79 L268,78" begin={1} dur={1.6} />
    </Frame>
  );
}

// 4 — QA copilot: a Jira ticket parsed into generated, checked test cases, with
// a spinning automation gear.
function Qa() {
  return (
    <Frame>
      {/* Jira ticket */}
      <g className="viz-float">
        <rect x="22" y="44" width="68" height="72" rx="6" fill="none" stroke={V} strokeWidth={1.4} opacity={0.85} />
        <rect x="30" y="52" width="34" height="6" rx="3" fill={V} opacity={0.8} />
        {[66, 78, 90, 102].map((y, i) => (
          <rect key={i} x="30" y={y} width={i % 2 ? 40 : 52} height="4" rx="2" fill={V} opacity={0.45} />
        ))}
      </g>
      {/* flow into generator */}
      <line x1="92" y1="80" x2="150" y2="80" stroke={C} strokeWidth={1.3} opacity={0.5} className="viz-flow" />
      <Pulse path="M92,80 L150,80" begin={0} dur={1.6} />
      <polygon points="146,74 158,80 146,86" fill={C} opacity={0.7} />
      {/* spinning automation gear */}
      <g style={{ transformOrigin: "168px 80px" }} className="viz-orbit">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="166" y="62" width="4" height="7" rx="1" fill={C} transform={`rotate(${i * 45} 168 80)`} />
        ))}
      </g>
      <circle cx="168" cy="80" r="9" fill="none" stroke={C} strokeWidth={2} />
      <circle cx="168" cy="80" r="3" fill={C} />
      {/* generated test cases (appear in sequence) */}
      {[50, 74, 98].map((y, i) => (
        <g key={i} opacity={0}>
          <animate attributeName="opacity" values="0;1;1;0.3" keyTimes="0;0.2;0.85;1" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          <rect x="196" y={y} width="104" height="18" rx="4" fill="var(--surface)" stroke={C} strokeWidth={1.1} />
          <path d={`M204 ${y + 9} l3.5 3.5 l7 -7`} fill="none" stroke={C} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="222" y={y + 6} width={i === 1 ? 64 : 50} height="5" rx="2.5" fill={C} opacity={0.5} />
        </g>
      ))}
    </Frame>
  );
}

const MAP: Record<ProjectVisualKind, () => React.ReactElement> = {
  orchestrator: Orchestrator,
  multimodal: Multimodal,
  rag: Rag,
  qa: Qa,
};

export function ProjectVisual({ kind, image, alt }: { kind: ProjectVisualKind; image?: string; alt: string }) {
  if (image) {
    return (
      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }
  const Visual = MAP[kind];
  return <Visual />;
}
