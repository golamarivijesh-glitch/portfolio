"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { ProjectVisual } from "@/components/ProjectVisual";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" eyebrow="05 / Projects" title="Selected work">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            className="card group flex flex-col p-6"
          >
            <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.02]">
              <ProjectVisual kind={project.visual} image={project.image} alt={project.name} />
            </div>
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <ul className="mb-5 flex-1 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            {(project.demo || project.repo) && (
              <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.04]"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent/50"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
