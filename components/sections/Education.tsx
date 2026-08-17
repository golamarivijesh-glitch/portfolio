"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" eyebrow="07 / Education" title="Education & certifications">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-6"
            >
              <GraduationCap className="mb-4 text-accent" size={28} />
              <h3 className="text-lg font-semibold">{e.school}</h3>
              <p className="mt-1 text-muted">{e.degree}</p>
              <p className="mt-2 font-mono text-sm text-muted">
                {e.period} · {e.location}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="card p-6"
        >
          <Award className="mb-4 text-accent" size={28} />
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
