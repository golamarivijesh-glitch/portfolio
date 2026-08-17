"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { CompanyBadge } from "@/components/CompanyBadge";
import { AIShowcase } from "@/components/AIShowcase";
import { experience } from "@/lib/content";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const bullet = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 / Experience" title="Where I've built">
      <AIShowcase />
      <div className="relative">
        {/* animated vertical timeline line that draws in on scroll */}
        <motion.div
          className="absolute left-[31px] top-6 bottom-6 w-px origin-top bg-gradient-to-b from-accent/60 via-border to-accent-2/40"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        <div className="flex flex-col gap-6">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ x: 4 }}
              className="group relative rounded-2xl border border-transparent p-4 pl-16 transition-colors duration-300 hover:border-border hover:bg-surface/40"
            >
              {/* per-company brand glow that blooms on hover */}
              <div
                className="pointer-events-none absolute -left-6 top-2 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: `radial-gradient(circle, ${job.accent}, transparent 70%)` }}
                aria-hidden="true"
              />

              <div className="absolute left-2 top-4">
                <CompanyBadge company={job.company} accent={job.accent} logo={job.logo} />
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">
                  {job.role}{" "}
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-80"
                      style={{ color: job.accent }}
                    >
                      @ {job.company}
                    </a>
                  ) : (
                    <span style={{ color: job.accent }}>@ {job.company}</span>
                  )}
                </h3>
                <span className="font-mono text-sm text-muted">{job.period}</span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-sm text-muted">
                <MapPin size={14} /> {job.location}
              </div>
              {job.blurb && <p className="mt-3 text-muted">{job.blurb}</p>}

              <motion.ul
                className="mt-4 space-y-2"
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                {job.highlights.map((h) => (
                  <motion.li
                    key={h}
                    variants={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: job.accent }}
                    />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
