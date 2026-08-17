"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { VentureVisual } from "@/components/VentureVisual";
import { ventures } from "@/lib/content";

export function Ventures() {
  return (
    <Section id="ventures" eyebrow="04 / Ventures" title="What I'm building">
      <p className="-mt-6 mb-10 max-w-2xl text-muted">
        Beyond client work, I found and build products end-to-end — from AI for farmers
        to a consumer marketplace to threat detection for security teams.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {ventures.map((v, i) => {
          const live = v.status === "Live";
          return (
            <motion.article
              key={v.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card group flex flex-col p-6"
            >
              {/* visual header */}
              <div className="mb-5 h-48 shrink-0">
                <VentureVisual kind={v.visual} accent={v.accent} />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold" style={{ color: v.accent }}>
                    {v.name}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px]"
                    style={{
                      color: live ? "#34d399" : "#f59e0b",
                      background: `${live ? "#34d399" : "#f59e0b"}1a`,
                      border: `1px solid ${live ? "#34d399" : "#f59e0b"}55`,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full"
                      style={{ background: live ? "#34d399" : "#f59e0b" }}
                    />
                    {live ? "Live" : "In development"}
                  </span>
                </div>

                {v.company && (
                  <p className="mb-1 font-mono text-xs tracking-wide text-muted uppercase">
                    {v.company}
                  </p>
                )}
                <p className="font-medium">{v.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>

                <ul className="mt-4 grid gap-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={15} className="mt-0.5 shrink-0" style={{ color: v.accent }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {v.link && (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${v.name} (opens in a new tab)`}
                      className="ml-auto inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
                      style={{ background: v.accent }}
                    >
                      <ExternalLink size={15} /> Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
