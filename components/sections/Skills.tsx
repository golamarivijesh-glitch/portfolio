"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { TechMarquee } from "@/components/TechMarquee";
import { skillGroups } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const item = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="Technical toolkit">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <TechMarquee />
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            className="card p-6"
          >
            <h3 className="mb-4 font-mono text-sm tracking-wide text-accent">
              {group.category}
            </h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {group.skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={item}
                  className="chip rounded-full px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
