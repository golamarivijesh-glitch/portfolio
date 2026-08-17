// Animated illustrations for the Ventures section — one per product. Pure SVG +
// SMIL/CSS.
//
// Note on reduced motion: the CSS rules in globals.css can't stop SMIL <animate>
// elements, so Frame pauses the whole SVG timeline instead. Every animated shape
// therefore carries its *finished* state as its static attribute, so a paused
// visual reads as complete artwork rather than a half-built one.

"use client";

import { useEffect, useRef } from "react";

const C = "var(--accent)";

function Frame({ children }: { children: React.ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const svg = ref.current;
      if (!svg) return;
      if (mq.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className="relative h-52 w-full overflow-hidden rounded-xl border border-border bg-surface-2 sm:h-full">
      <div className="glow-radial pointer-events-none absolute inset-0 opacity-40" />
      <svg ref={ref} viewBox="0 0 360 220" className="relative h-full w-full" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

// one-way data pulse traveling a path, repeating
function Flow({ path, begin, color, dur = 2 }: { path: string; begin: number; color: string; dur?: number }) {
  return (
    <circle r={3.2} fill={color}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;1;1;0" dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
    </circle>
  );
}

// YieldAI Global — sun, swaying crops sending data up to an AI core, a rising
// yield chart, and an AI scan beam over the field.
function Farming({ accent }: { accent: string }) {
  const plants = [60, 120, 180, 240, 300];
  const ai = { x: 92, y: 46 };
  return (
    <Frame>
      {/* sun with rotating rays */}
      <g>
        <g className="viz-orbit" style={{ transformOrigin: "312px 40px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={312} y1={18} x2={312} y2={10} stroke={accent} strokeWidth={2} opacity={0.7} transform={`rotate(${i * 45} 312 40)`} />
          ))}
        </g>
        <circle cx={312} cy={40} r={13} fill={accent} opacity={0.9} className="viz-node" />
      </g>

      {/* AI core that crops feed into */}
      <g>
        <circle cx={ai.x} cy={ai.y} r={20} fill="none" stroke={C} strokeWidth={1.4} strokeDasharray="3 5" opacity={0.7} className="badge-ring" />
        <circle cx={ai.x} cy={ai.y} r={13} fill={C} className="viz-node" />
        <text x={ai.x} y={ai.y + 4} textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="700" fill="#0a0a0f">AI</text>
      </g>

      {/* rising yield chart badge */}
      <g className="viz-float">
        <rect x="176" y="30" width="120" height="40" rx="8" fill="var(--surface)" stroke={accent} strokeWidth={1} opacity={0.95} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={186 + i * 14} width={8} rx={2} fill={accent} opacity={0.55 + i * 0.09}>
            <animate attributeName="height" values={`${6 + i * 3};${10 + i * 5};${6 + i * 3}`} dur="2.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${58 - i * 3};${54 - i * 5};${58 - i * 3}`} dur="2.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <text x="262" y="46" fontSize="11" fontFamily="monospace" fill={accent}>+18%</text>
      </g>

      {/* rolling field */}
      <path d="M0,176 Q90,154 180,174 T360,170 L360,220 L0,220 Z" fill={accent} opacity={0.12} />
      <path d="M0,176 Q90,154 180,174 T360,170" fill="none" stroke={accent} strokeWidth={1.5} opacity={0.4} />
      {[192, 204].map((y, i) => (
        <path key={i} d={`M10,${y} Q180,${y - 8} 350,${y}`} stroke={accent} strokeWidth={1} opacity={0.22} fill="none" />
      ))}

      {/* swaying plants */}
      {plants.map((x, i) => (
        <g key={x}>
          <animateTransform attributeName="transform" type="rotate" values={`-3 ${x} 176;3 ${x} 176;-3 ${x} 176`} dur="3.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          <line x1={x} y1={176} x2={x} y2={144} stroke={accent} strokeWidth={2} opacity={0.8} />
          <ellipse cx={x - 7} cy={152} rx={8} ry={4} fill={accent} opacity={0.7} transform={`rotate(-30 ${x - 7} 152)`} />
          <ellipse cx={x + 7} cy={148} rx={8} ry={4} fill={accent} opacity={0.7} transform={`rotate(30 ${x + 7} 148)`} />
          <circle cx={x} cy={140} r={4} fill={accent} />
        </g>
      ))}

      {/* data pulses: crops → AI core */}
      {[60, 180, 300].map((x, i) => (
        <Flow key={x} path={`M${x},140 L${ai.x},${ai.y + 14}`} begin={i * 0.7} color={accent} dur={2.2} />
      ))}

      {/* AI scan beam sweeping the field */}
      <rect y={128} width={2.5} height={90} fill="#fff" opacity={0.8}>
        <animate attributeName="x" values="20;340;20" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4.5s" repeatCount="indefinite" />
      </rect>
    </Frame>
  );
}

// Hundo Deals — product cards popping in with sub-$100 tags, a live price drop,
// items flying into the cart, and a pulsing deal badge.
function Ecommerce({ accent }: { accent: string }) {
  const cards = [
    { x: 30, price: "$29" },
    { x: 134, price: "$79", drop: true },
    { x: 238, price: "$99" },
  ];
  return (
    <Frame>
      {/* UNDER $100 ribbon */}
      <g className="viz-float">
        <rect x="116" y="18" width="128" height="28" rx="14" fill={accent} opacity={0.15} stroke={accent} strokeWidth={1} />
        <text x="180" y="36" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="700" fill={accent}>UNDER $100</text>
      </g>

      {cards.map((c, i) => (
        <g key={c.x} opacity={1}>
          <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.15;0.9;1" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          <rect x={c.x} y={68} width={92} height={100} rx={10} fill="var(--surface)" stroke={accent} strokeWidth={1.2} opacity={0.95} />
          <rect x={c.x + 12} y={80} width={68} height={44} rx={6} fill={accent} opacity={0.22} />
          <circle cx={c.x + 32} cy={102} r={8} fill={accent} opacity={0.6} />
          <path d={`M${c.x + 44},120 l14,-16 l18,20 Z`} fill={accent} opacity={0.4} />
          <rect x={c.x + 12} y={132} width={50} height={5} rx={2.5} fill="var(--muted)" opacity={0.5} />
          {/* price tag (+ live price drop on the middle card) */}
          {c.drop ? (
            <>
              <text x={c.x + 14} y={152} fontSize="10" fontFamily="monospace" fill="var(--muted)" textDecoration="line-through">$129</text>
              <rect x={c.x + 12} y={146} width={42} height={16} rx={8} fill={accent}>
                <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.4;0.5;1" dur="3.5s" repeatCount="indefinite" />
              </rect>
              <text x={c.x + 33} y={158} textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#0a0a0f">
                {c.price}
                <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.4;0.5;1" dur="3.5s" repeatCount="indefinite" />
              </text>
            </>
          ) : (
            <>
              <rect x={c.x + 12} y={146} width={42} height={16} rx={8} fill={accent} />
              <text x={c.x + 33} y={158} textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#0a0a0f">{c.price}</text>
            </>
          )}
        </g>
      ))}

      {/* cart */}
      <g transform="translate(300, 178)" className="viz-float">
        <path d="M0,0 l6,0 l4,22 l26,0 l5,-16 l-30,0" fill="none" stroke={accent} strokeWidth={2} strokeLinejoin="round" />
        <circle cx="14" cy="28" r="3.2" fill={accent} />
        <circle cx="34" cy="28" r="3.2" fill={accent} />
      </g>
      {/* items flying into cart */}
      <Flow path="M160,150 Q260,118 318,184" begin={0} color={accent} dur={2.2} />
      <Flow path="M70,150 Q220,108 318,184" begin={1.1} color={accent} dur={2.2} />

      {/* pulsing % deal badge */}
      <g transform="translate(40, 58)" className="viz-node" style={{ transformOrigin: "40px 58px" }}>
        <circle r="14" fill={accent} opacity={0.9} />
        <text textAnchor="middle" y="4" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#0a0a0f">%</text>
      </g>
    </Frame>
  );
}

// Sentinel AI — telemetry sources streaming into a shielded correlation core,
// a rotating radar sweep, threat blips getting caught, and a scored incident card.
function Security({ accent }: { accent: string }) {
  const threat = "#f87171";
  const core = { x: 176, y: 116 };
  const sources = [
    { y: 42, label: "NET" },
    { y: 84, label: "EDR" },
    { y: 126, label: "LOG" },
    { y: 168, label: "IAM" },
  ];
  return (
    <Frame>
      {/* radar rings + rotating sweep behind the shield */}
      <g style={{ transformOrigin: `${core.x}px ${core.y}px` }}>
        <circle cx={core.x} cy={core.y} r={62} fill="none" stroke={accent} strokeWidth={1} opacity={0.16} />
        <circle cx={core.x} cy={core.y} r={46} fill="none" stroke={accent} strokeWidth={1} strokeDasharray="3 6" opacity={0.4} className="badge-ring" />
        <g className="viz-orbit" style={{ transformOrigin: `${core.x}px ${core.y}px` }}>
          <path d={`M${core.x},${core.y} L${core.x + 62},${core.y} A62,62 0 0,1 ${core.x + 44},${core.y + 44} Z`} fill={accent} opacity={0.14} />
          <line x1={core.x} y1={core.y} x2={core.x + 62} y2={core.y} stroke={accent} strokeWidth={1.5} opacity={0.55} />
        </g>
      </g>

      {/* telemetry sources feeding the core */}
      {sources.map((s, i) => (
        <g key={s.label}>
          <rect x={12} y={s.y - 11} width={52} height={22} rx={6} fill="var(--surface)" stroke={accent} strokeWidth={1} opacity={0.9} />
          <text x={38} y={s.y + 4} textAnchor="middle" fontSize="9" fontFamily="monospace" fill={accent}>{s.label}</text>
          <Flow path={`M64,${s.y} Q120,${s.y} ${core.x - 34},${core.y}`} begin={i * 0.55} color={accent} dur={2.4} />
        </g>
      ))}

      {/* shield */}
      <g className="viz-float">
        <path
          d={`M${core.x},${core.y - 42} L${core.x + 30},${core.y - 28} L${core.x + 30},${core.y + 2} Q${core.x + 30},${core.y + 26} ${core.x},${core.y + 38} Q${core.x - 30},${core.y + 26} ${core.x - 30},${core.y + 2} L${core.x - 30},${core.y - 28} Z`}
          fill={accent}
          opacity={0.18}
          stroke={accent}
          strokeWidth={1.6}
        />
        {/* checkmark inside the shield */}
        <path d={`M${core.x - 13},${core.y - 2} l9,10 l18,-19`} fill="none" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="3s" repeatCount="indefinite" />
        </path>
        {/* scan line sweeping down the shield face */}
        <rect x={core.x - 30} width={60} height={2} fill="#fff" opacity={0.5}>
          <animate attributeName="y" values={`${core.y - 40};${core.y + 34};${core.y - 40}`} dur="3.4s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* threat blips caught at the perimeter */}
      {[
        { x: 246, y: 62, begin: 0.4 },
        { x: 258, y: 150, begin: 1.9 },
      ].map((t) => (
        <g key={`${t.x}-${t.y}`}>
          <path d={`M${t.x},${t.y - 7} l7,12 l-14,0 Z`} fill={threat} opacity={0.9}>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.6;1" dur="3.6s" begin={`${t.begin}s`} repeatCount="indefinite" />
          </path>
          <circle cx={t.x} cy={t.y} r={4} fill="none" stroke={threat} strokeWidth={1.5} opacity={0}>
            <animate attributeName="r" values="4;16" dur="3.6s" begin={`${t.begin}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0" dur="3.6s" begin={`${t.begin}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* scored incident card */}
      <g className="viz-float">
        <rect x="234" y="88" width="112" height="44" rx="8" fill="var(--surface)" stroke={accent} strokeWidth={1} opacity={0.95} />
        <circle cx="248" cy="102" r="3.5" fill={threat}>
          <animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="258" y="106" fontSize="9" fontFamily="monospace" fill="var(--muted)">INCIDENT</text>
        <text x="330" y="106" textAnchor="end" fontSize="11" fontFamily="monospace" fontWeight="700" fill={accent}>87</text>
        <rect x="246" y="116" width="88" height="5" rx="2.5" fill={accent} opacity={0.18} />
        <rect x="246" y="116" width="76" height="5" rx="2.5" fill={accent}>
          <animate attributeName="width" values="0;76;76" keyTimes="0;0.6;1" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>
    </Frame>
  );
}

// BuildVaillant — a site assembling itself block by block inside a browser
// chrome, then a 365-day uptime heartbeat that keeps running after launch.
function Agency({ accent }: { accent: string }) {
  const blocks = [
    { x: 42, y: 78, w: 118, h: 34 },
    { x: 42, y: 120, w: 54, h: 46 },
    { x: 106, y: 120, w: 54, h: 46 },
    { x: 172, y: 78, w: 74, h: 20 },
    { x: 172, y: 106, w: 74, h: 12 },
    { x: 172, y: 126, w: 48, h: 12 },
  ];
  return (
    <Frame>
      {/* browser chrome */}
      <rect x="28" y="34" width="232" height="150" rx="10" fill="var(--surface)" stroke={accent} strokeWidth={1.2} opacity={0.95} />
      <line x1="28" y1="58" x2="260" y2="58" stroke={accent} strokeWidth={1} opacity={0.35} />
      {[42, 54, 66].map((cx, i) => (
        <circle key={cx} cx={cx} cy={46} r={3.5} fill={accent} opacity={0.4 + i * 0.15} />
      ))}
      <rect x="84" y="41" width="164" height="10" rx="5" fill={accent} opacity={0.14} />

      {/* blocks assembling into a page */}
      {blocks.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={4} fill={accent} opacity={0.55}>
          <animate
            attributeName="opacity"
            values="0;0.55;0.55;0.55"
            keyTimes="0;0.12;0.9;1"
            dur="5s"
            begin={`${i * 0.35}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${b.y + 8};${b.y};${b.y};${b.y}`}
            keyTimes="0;0.12;0.9;1"
            dur="5s"
            begin={`${i * 0.35}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      {/* 365 watch badge */}
      <g className="viz-float">
        <circle cx={286} cy={70} r={26} fill="var(--surface)" stroke={accent} strokeWidth={1.2} />
        <circle cx={286} cy={70} r={21} fill="none" stroke={accent} strokeWidth={2} strokeDasharray="132" strokeDashoffset="0" transform="rotate(-90 286 70)">
          <animate attributeName="stroke-dashoffset" values="132;0" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x={286} y={68} textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="700" fill={accent}>365</text>
        <text x={286} y={80} textAnchor="middle" fontSize="7" fontFamily="monospace" fill="var(--muted)">WATCH</text>
      </g>

      {/* uptime heartbeat — the "keep watch" promise */}
      <g>
        <path
          d="M272,150 l10,0 l5,-14 l7,26 l6,-12 l24,0"
          fill="none"
          stroke={accent}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="90"
          strokeDashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" values="90;-90" dur="2.6s" repeatCount="indefinite" />
        </path>
        <text x={272} y={170} fontSize="8" fontFamily="monospace" fill="var(--muted)">UPTIME</text>
      </g>

      {/* deploy pulse from the build into the live badge */}
      <Flow path="M246,96 Q272,86 286,96" begin={0.6} color={accent} dur={2.4} />
    </Frame>
  );
}

export function VentureVisual({
  kind,
  accent,
}: {
  kind: "farming" | "ecommerce" | "security" | "agency";
  accent: string;
}) {
  if (kind === "farming") return <Farming accent={accent} />;
  if (kind === "security") return <Security accent={accent} />;
  if (kind === "agency") return <Agency accent={accent} />;
  return <Ecommerce accent={accent} />;
}
