"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { RotatingTitle } from "@/components/RotatingTitle";
import { profile } from "@/lib/content";

// When the AI intro video is ready, drop it at /public/hero.mp4 and a poster at
// /public/hero-poster.jpg — set HAS_VIDEO to true to swap the placeholder out.
const HAS_VIDEO = true;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      <div className="glow-radial pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {profile.availability}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium sm:text-2xl">
            <RotatingTitle />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
            <span className="cursor-blink ml-1 h-5 translate-y-1 rounded-sm bg-accent align-middle" />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-background transition-transform hover:scale-[1.03]"
            >
              View Work
            </a>
            <a
              href={profile.links.resume}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
            >
              <FileText size={16} /> Résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
            >
              <Mail size={16} /> Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted">
            <a href={profile.links.github} aria-label="GitHub" className="transition-colors hover:text-accent">
              <GithubIcon size={20} />
            </a>
            <a href={profile.links.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-accent">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
        >
          {HAS_VIDEO ? (
            <video
              className="h-full w-full object-cover"
              src="/hero.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-surface-2">
              <div className="glow-radial absolute inset-0 opacity-60" />
              <span className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                <Play size={26} className="ml-1" />
              </span>
              <p className="z-10 font-mono text-xs tracking-widest text-muted uppercase">
                Intro video coming soon
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
