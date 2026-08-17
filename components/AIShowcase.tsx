"use client";

import { motion } from "framer-motion";

// On-brand animated illustrations of the AI work — agentic systems, generative
// AI, and autonomous agents — rendered as pure SVG (CSS + SMIL motion).

const C = "var(--accent)";
const V = "var(--accent-2)";

function Tile({
  title,
  subtitle,
  children,
  delay,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="card group overflow-hidden p-0"
    >
      <div className="relative h-44 w-full overflow-hidden border-b border-border bg-surface-2">
        <div className="glow-radial pointer-events-none absolute inset-0 opacity-50" />
        <svg viewBox="0 0 320 176" className="relative h-full w-full" aria-hidden="true">
          {children}
        </svg>
      </div>
      <div className="p-5">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
    </motion.div>
  );
}

// 1 — Agentic AI: an orchestrator coordinating worker agents, with messages
// pulsing along the edges.
function AgenticArt() {
  const cx = 160;
  const cy = 88;
  const agents = [
    { x: 64, y: 44 },
    { x: 256, y: 44 },
    { x: 64, y: 132 },
    { x: 256, y: 132 },
  ];
  return (
    <>
      {agents.map((a, i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={a.x} y2={a.y} stroke={C} strokeWidth={1.2} opacity={0.35} />
          {/* message pulse traveling orchestrator → agent and back */}
          <circle r={3.2} fill={i % 2 ? V : C}>
            <animateMotion
              dur="2.4s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
              path={`M${cx},${cy} L${a.x},${a.y}`}
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              calcMode="linear"
            />
          </circle>
          <circle cx={a.x} cy={a.y} r={12} fill={V} opacity={0.85} className={`viz-node viz-node-${i + 1}`} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={22} fill="none" stroke={C} strokeWidth={1.3} opacity={0.5} className="viz-orbit" strokeDasharray="4 7" />
      <circle cx={cx} cy={cy} r={16} fill={C} className="viz-node" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#0a0a0f" fontWeight="700">
        AI
      </text>
    </>
  );
}

// 2 — Generative AI: a prompt feeding an LLM core that streams output tokens.
function GenerativeArt() {
  const tokens = [200, 224, 248, 272];
  return (
    <>
      {/* prompt */}
      <g>
        <rect x="22" y="66" width="56" height="44" rx="6" fill="none" stroke={C} strokeWidth={1.3} opacity={0.7} />
        {[78, 88, 98].map((y, i) => (
          <rect key={i} x="30" y={y} width={i === 1 ? 30 : 40} height="4" rx="2" fill={C} opacity={0.5} />
        ))}
      </g>
      <line x1="78" y1="88" x2="120" y2="88" stroke={C} strokeWidth={1.3} className="viz-flow" />
      {/* LLM core — stacked transformer layers, gently floating */}
      <g className="viz-float">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={130}
            y={58 + i * 16}
            width={48}
            height={11}
            rx={3}
            fill={i % 2 ? V : C}
            opacity={0.45 + i * 0.12}
          />
        ))}
        <rect x="130" y="56" width="48" height="60" rx="6" fill="none" stroke={V} strokeWidth={1.3} />
      </g>
      <line x1="178" y1="88" x2="196" y2="88" stroke={C} strokeWidth={1.3} className="viz-flow" />
      {/* streaming output tokens */}
      {tokens.map((x, i) => (
        <rect key={x} x={x} y="80" width="18" height="16" rx="3" fill={C} opacity={0}>
          <animate
            attributeName="opacity"
            values="0;1;1;0.2"
            keyTimes="0;0.2;0.8;1"
            dur="2.6s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      <circle cx="154" cy="88" r="5" fill="#fff" className="viz-node" />
    </>
  );
}

// 3 — Autonomous agent calling tools that orbit a reasoning core.
function AgentToolsArt() {
  const cx = 160;
  const cy = 88;
  const tools = [
    { dx: 0, dy: -58, label: "🔍" },
    { dx: 58, dy: 0, label: "</>" },
    { dx: 0, dy: 58, label: "DB" },
    { dx: -58, dy: 0, label: "API" },
  ];
  return (
    <>
      <g style={{ transformOrigin: "160px 88px" }} className="viz-orbit">
        {tools.map((t, i) => (
          <g key={i} transform={`translate(${cx + t.dx}, ${cy + t.dy})`}>
            <rect x={-16} y={-13} width={32} height={26} rx={6} fill="var(--surface)" stroke={C} strokeWidth={1.2} />
            <text textAnchor="middle" y={4} fontSize="11" fontFamily="monospace" fill={C}>
              {t.label}
            </text>
          </g>
        ))}
      </g>
      {/* spokes */}
      {tools.map((t, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={cx + t.dx}
          y2={cy + t.dy}
          stroke={V}
          strokeWidth={1}
          opacity={0.3}
          className="viz-flow"
        />
      ))}
      <circle cx={cx} cy={cy} r={26} fill="none" stroke={V} strokeWidth={1.3} strokeDasharray="3 6" opacity={0.5} className="badge-ring" />
      <circle cx={cx} cy={cy} r={18} fill={V} className="viz-node" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#0a0a0f" fontWeight="700">
        agent
      </text>
    </>
  );
}

// A friendly robot mascot — blinking eyes, pulsing antenna, spinning chest gear.
function Robot({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* glow */}
      <circle cx="0" cy="6" r="52" fill={C} opacity={0.12} className="exp-glow" />
      {/* antenna */}
      <line x1="0" y1="-34" x2="0" y2="-50" stroke={C} strokeWidth="2.5" />
      <circle cx="0" cy="-53" r="5" fill={C} className="viz-node" />
      {/* head */}
      <rect x="-38" y="-34" width="76" height="60" rx="16" fill="var(--surface)" stroke={C} strokeWidth="2" />
      {/* eyes (blink) */}
      {[-16, 16].map((ex) => (
        <ellipse key={ex} cx={ex} cy="-8" rx="8" ry="8" fill={C}>
          <animate attributeName="ry" values="8;8;1;8;8" keyTimes="0;0.45;0.5;0.55;1" dur="3.2s" repeatCount="indefinite" />
        </ellipse>
      ))}
      {/* smile */}
      <path d="M-14,12 Q0,22 14,12" fill="none" stroke={C} strokeWidth="2.5" strokeLinecap="round" />
      {/* neck */}
      <rect x="-6" y="26" width="12" height="8" fill={C} opacity={0.6} />
      {/* body with spinning gear */}
      <rect x="-30" y="34" width="60" height="40" rx="10" fill="var(--surface)" stroke={V} strokeWidth="2" />
      <g style={{ transformOrigin: `0px 54px` }} className="viz-orbit">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="-2" y="42" width="4" height="6" rx="1" fill={V} transform={`rotate(${i * 45} 0 54)`} />
        ))}
      </g>
      <circle cx="0" cy="54" r="6" fill="none" stroke={V} strokeWidth="2" />
      <circle cx="0" cy="54" r="2.5" fill={V} className="viz-node" />
    </g>
  );
}

// Clear left-to-right robot agent flow: Prompt → 🤖 Agent → Tools → Result,
// with data pulses flowing along each arrow and tools lighting up in sequence.
function AgentLoopArt() {
  // arrow helper: dashed flowing line + arrowhead + a traveling pulse dot
  const Arrow = ({ x1, x2, delay }: { x1: number; x2: number; delay: number }) => (
    <g>
      <line x1={x1} y1={130} x2={x2 - 8} y2={130} stroke={C} strokeWidth={2} strokeDasharray="6 6" opacity={0.6} className="viz-flow" />
      <polygon points={`${x2 - 8},124 ${x2 + 2},130 ${x2 - 8},136`} fill={C} />
      <circle r="4.5" fill={C}>
        <animate attributeName="cx" values={`${x1};${x2}`} dur="1.4s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="cy" values="130;130" dur="1.4s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
    </g>
  );
  const tools = [
    { y: 86, label: "🔍 search" },
    { y: 120, label: "</> code" },
    { y: 154, label: "DB query" },
  ];
  return (
    <svg viewBox="0 0 760 240" className="h-full w-full" aria-hidden="true">
      {/* 1 — Prompt */}
      <g>
        <rect x="20" y="98" width="110" height="64" rx="10" fill="var(--surface)" stroke={C} strokeWidth="1.5" opacity={0.95} />
        {[112, 124, 136].map((y, i) => (
          <rect key={i} x="34" y={y} width={i === 2 ? 50 : 82} height="6" rx="3" fill={C} opacity={0.5} />
        ))}
        <text x="75" y="184" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="var(--muted)">Prompt</text>
      </g>

      <Arrow x1={132} x2={232} delay={0} />

      {/* 2 — Robot agent + reasoning loop badge */}
      <Robot x={300} y={120} />
      <g transform="translate(300, 56)">
        <circle r="16" fill="none" stroke={C} strokeWidth="1.5" strokeDasharray="3 5" opacity={0.7} className="badge-ring" />
        <text textAnchor="middle" y="4" fontSize="9" fontFamily="monospace" fill={C}>↻</text>
      </g>
      <text x="300" y="212" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="700" fill="var(--foreground)">Agent · reasons</text>

      <Arrow x1={370} x2={452} delay={0.5} />

      {/* 3 — Tools (light up in sequence) */}
      {tools.map((t, i) => (
        <g key={t.label}>
          <rect x="456" y={t.y - 16} width="118" height="30" rx="8" fill="var(--surface)" stroke={C} strokeWidth="1.2">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
            <animate attributeName="stroke" values={`${"var(--border)"};${C};${"var(--border)"}`} dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
          </rect>
          <text x="515" y={t.y + 4} textAnchor="middle" fontSize="12" fontFamily="monospace" fill={C}>{t.label}</text>
        </g>
      ))}
      <text x="515" y="212" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="var(--muted)">Tools</text>

      <Arrow x1={578} x2={640} delay={1} />

      {/* 4 — Result */}
      <g className="viz-float">
        <rect x="644" y="100" width="96" height="60" rx="10" fill="var(--surface)" stroke={V} strokeWidth="1.5" />
        <circle cx="666" cy="124" r="11" fill="none" stroke={V} strokeWidth="2" />
        <path d="M661,124 l3.5,4 l7,-8" fill="none" stroke={V} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="684" y="118" width="44" height="5" rx="2.5" fill={V} opacity={0.6} />
        <rect x="684" y="130" width="32" height="5" rx="2.5" fill={V} opacity={0.4} />
      </g>
      <text x="692" y="184" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="var(--muted)">Result</text>
    </svg>
  );
}

export function AIShowcase() {
  return (
    <div className="mb-12">
      <p className="mb-5 font-mono text-xs tracking-widest text-accent uppercase">
        Focus areas
      </p>
      <div className="grid gap-5 sm:grid-cols-3">
        <Tile title="Agentic AI Systems" subtitle="Multi-agent orchestration & planning" delay={0}>
          <AgenticArt />
        </Tile>
        <Tile title="Generative AI" subtitle="LLMs, RAG & token generation" delay={0.08}>
          <GenerativeArt />
        </Tile>
        <Tile title="Autonomous Agents" subtitle="Tool-calling & reasoning loops" delay={0.16}>
          <AgentToolsArt />
        </Tile>
      </div>

      {/* wide agent reasoning-loop banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card mt-5 overflow-hidden"
      >
        <div className="grid items-center gap-4 p-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="text-lg font-semibold">How my agents think</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A continuous reasoning loop — the agent <span className="text-accent">perceives</span> context,{" "}
              <span className="text-accent">plans</span> a step, <span className="text-accent">acts</span> by calling
              tools and APIs, then <span className="text-accent">reflects</span> on the result and iterates until the
              task is done.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["ReAct", "Tool Calling", "Memory", "Multi-Agent", "Planning"].map((t) => (
                <span key={t} className="chip rounded-full px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-56 w-full">
            <div className="glow-radial pointer-events-none absolute inset-0 opacity-40" />
            <AgentLoopArt />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
