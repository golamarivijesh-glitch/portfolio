# Vijesh Reddy Golamari — Portfolio

A dark/neon single-page portfolio for a Generative AI Engineer, built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. The design echoes the visual language of the hero intro video (see `VIDEO_PRODUCTION.md`).

## Editing content

All copy lives in **one file**: [`lib/content.ts`](lib/content.ts). Update your profile, skills, experience, projects, education, certifications, and social links there — every section renders from it.

> **Before deploying, update these placeholders in `lib/content.ts`:**
> - `profile.links.linkedin` — your real LinkedIn URL
> - `profile.links.github` — your real GitHub URL

The résumé download is served from `public/resume.pdf`.

## Project structure

```
app/
  layout.tsx              # fonts, SEO/OpenGraph metadata
  page.tsx                # composes all sections
  globals.css             # design tokens (dark/neon) + Tailwind
components/
  Nav.tsx                 # sticky nav + mobile menu
  Section.tsx             # animated section wrapper + Reveal helper
  BrandIcons.tsx          # inline GitHub/LinkedIn SVGs
  sections/               # Hero, About, Skills, Experience, Projects, Education, Contact
lib/content.ts            # single source of truth for all copy
public/resume.pdf         # downloadable résumé
```

## Run locally

> Node is installed via anaconda3 on this machine. If `node`/`npm` aren't found, prepend it to PATH:
> `export PATH="/Users/golamarivijeshreddy/anaconda3/bin:$PATH"`

```bash
npm install        # first time only
npm run dev        # http://localhost:3000
npm run build      # production build (type-checks)
npm run start      # serve the production build
```

## Adding the hero intro video

1. Produce the video (see `VIDEO_PRODUCTION.md`).
2. Drop the file at `public/hero.mp4` and a still frame at `public/hero-poster.jpg`.
3. In [`components/sections/Hero.tsx`](components/sections/Hero.tsx), set `const HAS_VIDEO = true;`.

## Deploy to Vercel

```bash
# 1. Initialize git (if not already a repo) and commit
git init && git add -A && git commit -m "Initial portfolio"

# 2. Create a GitHub repo and push (requires the gh CLI, or do it via the web UI)
gh repo create vijesh-portfolio --public --source=. --push

# 3. Import the repo at https://vercel.com/new — Vercel auto-detects Next.js.
#    No build config needed. Click Deploy.
```

Then add a custom domain under the Vercel project's **Settings → Domains** if desired.
