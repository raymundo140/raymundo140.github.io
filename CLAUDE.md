---

## CURRENT TASK: Add cover images, inline PDF viewer, resize cover image

The site already has all 10 projects (p1–p10) built out with settings.ts entries,
MDX files, and PDF reports linked. This task makes three refinements:

### 1. Add cover images for all 10 projects

On the Desktop there is a `projects` folder, with one subfolder per project
(matching the p1_ ... p10_ naming used previously). Inside each project's
subfolder is a cover image file (find it whatever its filename/extension is —
jpg, png, etc.).

For each project p1–p10:
- Copy its cover image into `public/images/projects/` as `p1.jpg` through
  `p10.jpg` (convert/rename to match whatever extension the source file has if
  it's not jpg — keep it consistent, e.g. if source is .png, save as pX.png and
  update the `image` field in settings.ts to match that extension).
- Confirm the `image` field for each project in the `projects` array in
  `src/settings.ts` points to the correct copied file.
- These images are used both on the project cards (home page + /projects page,
  via ProjectCard.astro) and on the project detail page — no component changes
  should be needed here, just make sure the files exist at the paths already
  referenced.

### 2. Replace the small "View Full Report (PDF)" button with an inline PDF viewer

On the project detail page (`src/pages/projects/[slug].astro`), currently there
is a small button/link labeled "View Full Report (PDF)" that opens the PDF in a
new tab. Change this as follows, keeping everything else on the page (title,
skills/tags, GitHub link, description text, etc.) exactly as it is now, in the
same order:

- Rename the button from "View Full Report (PDF)" to **"View Documentation"**.
  Keep its current behavior: clicking it still opens the PDF in a new tab
  (`target="_blank"`), same styling/position as the current button.

- In ADDITION to that button, add a medium-sized embedded PDF viewer directly
  on the page, positioned right after the button (before the "same texts we
  have" — i.e. before the rest of the existing description/content that
  currently follows the PDF button). Use an `<iframe>` or `<embed>` pointing to
  the project's `pdfUrl`, sized to a "medium" height — something like
  `height: 500px` (or `h-[500px]` if using Tailwind classes) with `w-full` and
  rounded corners / a border consistent with other bordered elements already
  used on the site (e.g. `border border-base-300 rounded-2xl overflow-hidden`,
  matching the styling conventions already established elsewhere on the site).
  This lets the user scroll and read the PDF inline without leaving the page or
  downloading it.

- If a project has no `pdfUrl` set (i.e. still "in preparation" or missing),
  do not render the button or the embedded viewer for that project — follow the
  same conditional pattern already used elsewhere on the site
  (`{pdfUrl && (...)}`).

- Everything else on the page — title, skill/tool tags, company/university
  info, GitHub link (if present), and the full description/body content below —
  must remain exactly as it currently is, just with the PDF button relabeled
  and the inline viewer inserted in the position described above.

### 3. Make the cover image on the project detail page smaller

Currently the cover image shown at the top of each project detail page
(`src/pages/projects/[slug].astro`) is too large. Reduce its size — target
something like a max height of around 300–350px (e.g. `max-h-[320px]` or
similar) while keeping it responsive and centered, and preserving its existing
`object-cover`/`object-contain` behavior, border, and rounded corners as already
styled. Do not change its size or aspect ratio on the project CARDS (home page
grid, /projects page) — this change applies ONLY to the larger detail page.

### General reminders

- Follow the existing critical Astro gotcha: any `.map()` returning multi-line
  JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site (no
  purple/primary colors, gray hover states, bg-base-200/bg-base-100 pattern,
  consistent border/rounded styling).
- After making these changes, show me a short summary of what was changed and
  remind me to review the site locally with `npm run dev` before pushing.
