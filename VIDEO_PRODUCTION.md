# Hero Intro Video — Production Guide

This refines your original "Portfolio Video Production Flow" into an execution-ready plan, **re-branded to match your GenAI résumé** (the original script said "Full-Stack Developer / learning platforms" — off-message for an AI Engineer portfolio).

The output is a single ~15s clip: you roll into frame and type (Scene 1), then turn to camera and speak (Scene 2). Drop the final `hero.mp4` into `public/` and flip `HAS_VIDEO = true` in `components/sections/Hero.tsx`.

---

## 0. Assets you must provide

The avatar reference images named in your PDF (`image_84d91e.jpg`, `image_84d561.jpg`, `image_84d0a7.jpg`) are **not in Downloads**. Gather your 3D-avatar reference image(s) — same face, hairstyle, glasses, suit — before generating. These drive character consistency across both clips.

**Visual language (keep consistent):** dark premium office at night, blue/cyan ambient lighting, curved ultrawide monitor with code, clean high-contrast framing. **No** ed-tech logos (no PhysicsWallah/PW), no text overlays, no watermarks.

---

## 1. Revised spoken script (Scene 2, ~8s)

> "Hi, I'm Vijesh — a Generative AI Engineer. I build LLM systems, agentic AI, and RAG platforms that turn frontier models into reliable, real-world products."

(Tweak to taste; keep it ~8 seconds at a natural pace. This matches the tagline on the site.)

---

## 2. Tool recommendation

The two clips have different needs — use the right tool for each:

| Clip | What it needs | Best tools |
|------|---------------|-----------|
| **Scene 1 — Hero motion** | Image-to-video: chair rolls in, typing, turn to camera. No speech. | **Runway Gen-3**, **Kling**, or **Google Veo** (image-to-video with your avatar as the reference frame) |
| **Scene 2 — Talking head** | Clean lip-sync of the script. | **HeyGen** or **Synthesia** (avatar + script → lip-synced); or Runway/Kling act-one if you prefer one tool |

---

## 3. Generation prompts

### Scene 1 — Hero Sequence (image-to-video, no audio)

> **Reference character:** the provided 3D avatar — same face, hairstyle, glasses, suit.
> **Scene:** modern premium web-developer workspace at night; dark office with blue ambient lighting; curved ultrawide monitor displaying code.
> **Action:** the developer enters from the left seated on a sleek ergonomic rolling chair; the chair smoothly slides toward center; he places hands on the keyboard and types; stops, rotates the chair toward camera, and smiles.
> **Camera:** static cinematic camera, medium-wide shot, no cuts.
> **Negative:** no text, no speaking, no waving, no ed-tech logos on clothing (e.g. PhysicsWallah, PW), no watermark.

### Scene 2 — Portfolio Introduction (talking head, lip-synced)

> **Reference image:** your front-facing avatar still.
> **Action:** 8-second introduction; character stays seated facing camera; natural blinking, accurate lip-sync, professional smile.
> **Speech:** *(the revised script above)*
> **Camera:** static medium shot, no scene changes.
> **Negative:** no hand gestures, no chair movement, no text overlays, no watermark.

---

## 4. Canva assembly (from your original flow)

1. **Setup:** new Canva **Video** project, 16:9, 1920×1080. Upload both clips + a background music track.
2. **Sequence:** Scene 1 on the first block; add a page/block; Scene 2 on the second.
3. **Trim for continuity:** trim Scene 1's tail to the frame where he settles into the smile; trim Scene 2's head so dialogue starts without an awkward pause.
4. **Transition:** between the blocks add **Dissolve** or **Match & Move**, duration **0.3–0.5s** — makes it feel like one continuous take.
5. **Audio ducking:** drop music into the audio track → right-click → Audio Effects → **Audio Ducking**, so music dips under the spoken line in Scene 2.

## 5. Export & integrate

- **Export:** Share → Download → **MP4**, 1080p (or 4K), all pages.
- Save as `public/hero.mp4`; grab a clean still as `public/hero-poster.jpg`.
- Set `HAS_VIDEO = true` in `components/sections/Hero.tsx`.

---

> Want help expanding these into tool-specific settings (Runway/Kling/HeyGen parameters, seconds, seeds)? Ask and I'll run the `video` skill once you've confirmed the avatar images and final script line.
