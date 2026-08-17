"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GithubIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/content";

// Brand colors (hex without #) for theming the stats service images.
const ACCENT = "2ee6ff";
const ACCENT2 = "a78bfa";
const TEXT = "aeb4c9";

export function GithubStats() {
  const user = profile.githubUsername;
  const isPlaceholder = !user || user === "your-github-username";

  const statsUrl =
    `https://github-readme-stats.vercel.app/api?username=${user}` +
    `&show_icons=true&hide_border=true&count_private=true&bg_color=00000000` +
    `&title_color=${ACCENT}&icon_color=${ACCENT2}&text_color=${TEXT}&hide_title=true`;
  const langsUrl =
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}` +
    `&layout=compact&hide_border=true&bg_color=00000000` +
    `&title_color=${ACCENT}&text_color=${TEXT}`;
  const graphUrl =
    `https://github-readme-activity-graph.vercel.app/graph?username=${user}` +
    `&bg_color=00000000&color=${ACCENT}&line=${ACCENT2}&point=ffffff&hide_border=true&area=true`;

  return (
    <Section id="github" eyebrow="06 / Activity" title="GitHub activity">
      {isPlaceholder ? (
        <div className="card flex flex-col items-center gap-3 p-10 text-center">
          <GithubIcon className="text-accent" size={32} />
          <p className="text-muted">
            Add your GitHub username in{" "}
            <code className="font-mono text-accent">lib/content.ts</code> (
            <code className="font-mono">profile.githubUsername</code>) to show live
            repos, stars, top languages, and a contribution graph here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-5 md:grid-cols-2"
          >
            <div className="card p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={statsUrl} alt={`${user} GitHub stats`} className="w-full" loading="lazy" />
            </div>
            <div className="card p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={langsUrl} alt="Most used languages" className="mx-auto w-full max-w-sm" loading="lazy" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={graphUrl} alt="Contribution graph" className="w-full" loading="lazy" />
          </motion.div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
          >
            <GithubIcon size={18} /> View full profile
          </a>
        </div>
      )}
    </Section>
  );
}
