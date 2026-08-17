"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28 ${className ?? ""}`}
    >
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
