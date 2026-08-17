"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { jobTitles, profile } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" eyebrow="08 / Contact" title="Let's build something intelligent">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card relative overflow-hidden p-8"
        >
          <div className="glow-radial pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="text-lg leading-relaxed text-muted">
              Open to GenAI / LLM engineering roles and collaborations. Drop a note
              with the form — or reach me directly.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-background transition-transform hover:scale-[1.03]"
              >
                <Mail size={18} /> {profile.email}
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.links.linkedin}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
                >
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
                <a
                  href={profile.links.github}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
                >
                  <GithubIcon size={18} /> GitHub
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Phone size={15} /> {profile.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> {profile.location}
              </span>
            </div>

            {/* availability status + roles open to */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="inline-flex items-center gap-2 font-mono text-sm text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </p>
              <p className="mt-4 mb-2 text-xs font-medium tracking-wide text-muted uppercase">
                Roles I&apos;m open to
              </p>
              <div className="flex flex-wrap gap-2">
                {jobTitles.map((t) => (
                  <span key={t} className="chip rounded-full px-3 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <p className="mt-12 text-center font-mono text-xs text-muted">
        © {profile.name} · Built with Next.js &amp; Tailwind CSS
      </p>
    </Section>
  );
}
