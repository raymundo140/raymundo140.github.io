---

## CURRENT TASK: 6 more fixes

1. Change my email everywhere it appears across the entire site from
   "robertogomez101010@gmail.com" to "raymundo.gomez.rv@gmail.com". This
   includes (search the whole codebase, don't rely on this list being
   exhaustive):
   - `social.email` in `src/settings.ts`
   - Any `mailto:` links in Hero.astro, Footer.astro, the Final Contact CTA
     section on the home page, and SocialIcons.astro
   - Any hardcoded occurrences elsewhere (grep the whole `src/` folder for
     the old email string to be sure nothing is missed)

2. Replace the CV PDF. Find the current CV PDF file referenced by
   `src/pages/cv.astro` (likely at something like
   `public/cv/Raymundo_CV.pdf` or similar — check the actual path used in
   cv.astro). Replace it with the new file from my Desktop:
   `~/Desktop/Roberto_Raymundo_Gomez_Vargas_Resume.pdf`
   Either rename the new file to match the existing expected filename/path
   exactly (simplest — just overwrite in place), or if you rename/change the
   path, update the reference in `src/pages/cv.astro` (and any Download/Open
   Full Screen button hrefs) to match. Confirm both the "Open in new tab /
   Open Full Screen" and "Download PDF" buttons point to the new file.

3. AIST experience page copy replacement. Read
   `~/Desktop/AIST_Work_Experience_Website_Copy.txt` and use its content to
   replace the current body copy on the AIST (w1) experience detail page
   (`src/content/experience/w1.mdx`). Keep the existing frontmatter (title,
   company, location, dateRange, tags, logo, companyUrl) as-is unless the new
   file's content clearly implies one of those fields should change too — if
   so, ask me before changing frontmatter, just update the body content
   directly from the file.

4. Education / UOS (e2) copy replacement. Read
   `~/Desktop/UOS_Education_Website_Copy.txt` and use its content to replace
   the relevant section(s) of `src/content/education/e2.mdx`. Specifically,
   remove the current line that says "Authored and presented faculty-reviewed
   research paper..." (or equivalent achievement bullet referencing this) and
   replace the body copy with content drawn from this file. Keep the existing
   frontmatter as-is unless the new file clearly implies a change — ask me
   first if so.

5. On each education detail page's "Key Projects" section, currently the
   text just says "Link to the existing [project name]..." as a plain text
   placeholder instruction rather than an actual clickable element. Replace
   this with the SAME project card component/box already used on the home
   page project grid (the one rendered by `src/components/ui/
   ProjectCard.astro`), reused here to show the actual linked project as a
   real clickable card — not plain text, not a different smaller link style.
   Apply this to:
   - e2.mdx (University of Seoul) → link to the "STM32 Dual-Elevator
     Embedded System with Greedy Scheduling" project card
   - e3.mdx (Beijing Institute of Technology) → link to the "IoT Smart
     Agriculture & Sustainability Platform" project card
   - e1.mdx (Tecnológico de Monterrey) → link to project cards for
     Manchester Robotics AMR, XARM6 AI object tracking, John Deere
     autonomous tractor, and one more strong ITESM-affiliated project (pick
     an appropriate one from the existing 10 projects)
   Since MDX content can render Astro/React components, import
   `ProjectCard.astro` into these education detail page templates (likely
   `src/pages/education/[slug].astro` needs to pass the matching project
   objects from `src/settings.ts` into the MDX render, OR render the
   ProjectCard components directly in `[slug].astro` below the MDX content
   in a dedicated "Key Projects" section rather than inside the MDX body
   itself — whichever approach fits the existing Astro/MDX content
   collection setup cleanly. Use your judgment on the cleanest
   implementation given the current architecture, and tell me which
   approach you used.

6. Site-wide consistency check: make sure "Robotics & AI Engineer" is used
   everywhere the site displays this kind of title/eyebrow label — hero
   eyebrow, footer, SEO title/meta, navbar/sidebar subtitle — and that no
   stray instance of "Robotics & Digital Systems Engineer" remains anywhere
   as this display label (grep the whole `src/` folder to confirm). As
   before, do not change `profile.title` in settings.ts if it's used
   elsewhere for a different purpose (e.g. describing the degree program
   itself, not as a personal title label) — only fix instances used as the
   short personal title/eyebrow. Ask me if any specific instance is unclear.

=====================================================================
GENERAL REMINDERS
=====================================================================

- Follow the existing critical Astro gotcha: any `.map()` returning
  multi-line JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site.
- Do NOT touch anything in src/pages/research*, src/pages/skills.astro, or
  the Skills/Research sections — unrelated to this task.
- After finishing, show me a summary of every file changed, and remind me to
  review locally with `npm run dev` before pushing — specifically re-check
  the email everywhere, the CV page download/open buttons, the AIST and UOS
  page copy, and the new project-card links on the education detail pages.
