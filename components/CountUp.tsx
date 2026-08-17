"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Animates the numeric part of a value (e.g. "40%", "5TB+") from 0 → target when
// it scrolls into view, preserving any prefix/suffix (%, TB+, etc.).
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2]?.includes(".") ? 1 : 0;

  const [display, setDisplay] = useState(0);

  const hasMatch = match !== null;
  useEffect(() => {
    if (!inView || !hasMatch) return;
    const controls = animate(0, target, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
    // `match` is intentionally excluded: it's a fresh array each render, which
    // would otherwise restart the animation every frame and pin it near 0.
  }, [inView, target, hasMatch]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
