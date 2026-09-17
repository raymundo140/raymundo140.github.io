---

## CURRENT TASK: 10 small fixes/tweaks across the site

1. Remove the robot emoji/icon watermark that currently shows on project
   cover images (the 🤖 fallback icon overlaid on project card images and/or
   the project detail page hero image). Find wherever this icon is rendered
   in `src/components/ui/ProjectCard.astro` and `src/pages/projects/
   [slug].astro` and remove it entirely — the cover image alone should show,
   with no icon overlay, even as a fallback.

2. Remove the "Contact Me" button that currently appears directly below the
   hero intro paragraph. The Contact Me action already exists lower on the
   page (in the Final Contact CTA section near the bottom) — this hero-level
   button is now redundant. Find it in `src/components/ui/Hero.astro` and
   remove just that button, keeping the "View Projects" and "View CV" CTAs
   (if those are the other two buttons in that row) as they are.

3. Change the cover image for project p1. The correct new cover image will
   be provided by me separately — for now, just tell me the exact file path
   you expect it at (e.g. `public/images/projects/p1.jpg`) so I can drop the
   new file in, or if I've already placed a new file on the Desktop, look in
   `~/Desktop/projects/p1_.../` for an updated cover image file and use that
   instead of the current one, then copy it to the correct path in
   `public/images/projects/` (overwrite the existing file, keep the same
   filename/extension the settings.ts entry expects, or update the extension
   in settings.ts if the new file has a different one).

4. Same as #3 but for project p5 — check `~/Desktop/projects/p5_.../` for an
   updated cover image and replace the current one at its path in
   `public/images/projects/`, updating settings.ts if the extension changed.

5. On individual project detail pages (`src/pages/projects/[slug].astro`), do
   NOT show the cover image at all. Remove the cover/hero image block from
   this page entirely. The cover image should still show on the project
   CARDS (home page grid and /projects list page) — this change applies only
   to the individual project detail page.

6. On every detail page across the site (projects, experience, education,
   research), the "← Back to [Section]" link at the top-left currently may
   point to different places (e.g. some go to the section's list page, one
   may go to home). Standardize this so EVERY detail page's back link always
   goes to the MAIN HOME PAGE ("/"), not to the section's list page. Update
   the back-link `href` and label (e.g. "← Back to Home") consistently across:
   - `src/pages/projects/[slug].astro`
   - `src/pages/experience/[slug].astro`
   - `src/pages/education/[slug].astro`
   - `src/pages/research/[slug].astro`
   (Note: this reverses the earlier instruction to make experience back-links
   say "← Back to Experience" — home page is now the single consistent
   destination for all back links, site-wide.)

7. On project p4 (currently "AI-Enabled XARM6 Object Tracking with ROS 2 and
   3D Deep Learning"), change the associated company/institution from
   "General Motors" to "Tecnológico de Monterrey" in `src/settings.ts` (the
   `projects` array entry for p4) and in the matching frontmatter of
   `src/content/projects/p4.mdx`. Update the `company` field (or move this
   to `institution` if that's the more accurate field per the existing
   Project type — Tecnológico de Monterrey should use the same institution
   value/logo pattern already used for other ITESM-affiliated projects, e.g.
   logo `/images/education/e1.png`). Remove the General Motors logo
   reference if one was set, and remove "General Motors" text from anywhere
   else it appears on that project's card or detail page (title, tags,
   description, etc. — check the full p4 content for any other Genearl
   Motors mentions).

8. Change "Robotics & Digital Systems Engineer" to **"Robotics & AI
   Engineer"** everywhere this exact phrase appears as a title/eyebrow label
   — this includes the hero eyebrow text, the footer, the SEO title, and any
   navbar/sidebar subtitle label. Do NOT change `profile.title` in
   settings.ts if other parts of the site (like profile.title used
   elsewhere, e.g. education/institute references) depend on the longer
   original phrase for different purposes — only change it where it's used
   as this specific display label. If unsure whether a given usage is safe
   to change, ask me before editing it.

9. In the Final Contact CTA section's small text line, currently:
   "Based in Monterrey, Mexico · Open to international opportunities"
   Remove "Based in Monterrey, Mexico · " and leave only:
   "Open to international opportunities"

10. Replace the hero main paragraph. Change FROM:
    "I build autonomous robotic systems that combine perception, navigation,
    manipulation, AI, and embedded control. I'm completing my B.S. in
    Robotics and Digital Systems Engineering at Tecnológico de Monterrey and
    have worked across research and engineering environments in Japan, South
    Korea, China, Canada, and Mexico."

    TO:
    "Intelligent Robotics & Autonomous Systems Engineer focused on building
    robotic systems that integrate perception, navigation, manipulation, AI,
    and embedded control. I am completing my B.S. in Robotics and Digital
    Systems Engineering at Tecnológico de Monterrey, with international
    research and engineering experience across Japan, South Korea, China,
    Canada, and Mexico."

    Update this in `src/components/ui/Hero.astro`.

=====================================================================
GENERAL REMINDERS
=====================================================================

- Follow the existing critical Astro gotcha: any `.map()` returning
  multi-line JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site.
- Do NOT touch anything in src/pages/research*, src/pages/skills.astro, or
  the Skills section — those are unrelated to this task.
- After making these 10 changes, show me a summary of every file changed,
  and remind me to review locally with `npm run dev` before pushing —
  specifically re-check the home page hero, project cards, project detail
  pages, and one detail page from each section (project/experience/
  education/research) to confirm the back-link now goes to "/" everywhere.
- If anything is ambiguous (e.g. exactly which file/element renders the
  robot icon watermark, or which usages of the Robotics & Digital Systems
  Engineer phrase are safe to shorten), ask me before guessing.
