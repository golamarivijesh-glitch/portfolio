"use client";

import { useEffect, useRef } from "react";

// Animated neural-network constellation: drifting nodes connected by lines when
// close. Sits site-wide behind content. Pauses when tab hidden and disables for
// users who prefer reduced motion.
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Read brand colors from CSS vars (fallback to known hex).
    const styles = getComputedStyle(document.documentElement);
    const accent = (styles.getPropertyValue("--accent").trim() || "#2ee6ff");
    const accent2 = (styles.getPropertyValue("--accent-2").trim() || "#a78bfa");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Node = { x: number; y: number; vx: number; vy: number; c: string };
    let nodes: Node[] = [];
    let raf = 0;

    const LINK_DIST = 140;

    function build() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.round((width * height) / 22000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        c: i % 3 === 0 ? accent2 : accent,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx!.globalAlpha = (1 - dist / LINK_DIST) * 0.22;
            ctx!.strokeStyle = accent;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx!.globalAlpha = 0.65;
        ctx!.fillStyle = n.c;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (!reduce) raf = requestAnimationFrame(draw);
      else draw(); // single static frame
    }

    function onResize() {
      build();
      if (reduce) {
        cancelAnimationFrame(raf);
        // redraw one static frame
        ctx!.clearRect(0, 0, width, height);
        raf = requestAnimationFrame(() => {
          draw();
          cancelAnimationFrame(raf);
        });
      }
    }

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) start();
    }

    build();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}
