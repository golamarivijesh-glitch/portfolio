// framer-motion does not honour prefers-reduced-motion on its own. MotionConfig
// with reducedMotion="user" makes every motion component on the page drop
// transform/layout animations when the OS asks for reduced motion, while still
// allowing opacity fades. Pairs with the CSS rules in globals.css (which cover
// the keyframe animations) and Frame in VentureVisual.tsx (which covers SVG SMIL).

"use client";

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
