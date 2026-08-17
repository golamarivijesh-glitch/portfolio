"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { CountUp } from "@/components/CountUp";
import { metrics, profile } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Turning frontier models into products">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Portrait. The source shot is on a white studio backdrop, so this
              uses the background-removed version — a white plate would punch a
              hole in the dark theme. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card relative mx-auto flex w-40 shrink-0 items-end justify-center overflow-hidden sm:mx-0 sm:w-44"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 68%)",
              }}
              aria-hidden="true"
            />
            {/* Plain <img> rather than next/image: this renders at ~176px and the
                -sm asset is already 420px wide, so the optimizer adds nothing —
                and it was resolving to the 3840 variant regardless of `sizes`.
                Matches how CompanyBadge loads its logos. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile-cutout-sm.png"
              alt={`${profile.name}, ${profile.title}`}
              width={420}
              height={369}
              decoding="async"
              className="relative h-auto w-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-lg leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-5"
            >
              <CountUp value={m.value} className="text-3xl font-semibold text-gradient" />
              <div className="mt-2 text-sm leading-snug text-muted">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
