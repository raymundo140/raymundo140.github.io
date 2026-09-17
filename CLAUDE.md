---

## CURRENT TASK: Apply full text/copy refresh from website_texts.txt

Read `~/Desktop/website_texts.txt` in full. This file contains updated copy
for sections across the site. Your job is to map each piece of text in that
file to the correct location in the codebase and replace the existing copy
there, following the rules below.

=====================================================================
HOW TO MAP THE FILE TO THE CODEBASE
=====================================================================

The file will likely be organized with headers or labels indicating which
section/page each block of text belongs to (e.g. "HERO", "FOOTER",
"EXPERIENCE INDEX", "W1", "EDUCATION INDEX", "E2", "AWARDS", "CV PAGE", etc.
— similar to how previous copy briefs for this site have been structured).
Use these section labels, in combination with your knowledge of the existing
site structure, to determine exactly which file(s) each block of text
belongs in. The known site structure is:

- Hero copy → `src/components/ui/Hero.astro`
- Footer copy → `src/components/ui/Footer.astro`
- Final Contact CTA (bottom of home page) → `src/pages/index.astro`
- Experience index intro/summaries → `src/pages/experience.astro` and the
  matching `bullets`/summary fields in the `experiences` array in
  `src/settings.ts`
- Experience detail page bodies → `src/content/experience/w1.mdx` through
  `w5.mdx`
- Education index intro → `src/pages/education.astro`
- Education detail page bodies → `src/content/education/e1.mdx` through
  `e4.mdx`
- Awards copy → `src/pages/awards.astro`, home page awards section in
  `src/pages/index.astro`, and the `awards` array in `src/settings.ts`
- CV page copy → `src/pages/cv.astro`
- SEO/meta defaults → `seo` object in `src/settings.ts`

If any block of text in website_texts.txt doesn't clearly map to one of
these known locations, or if it's ambiguous which file it belongs to, STOP
and ask me rather than guessing where to place it.

=====================================================================
RULES WHILE APPLYING THE NEW COPY
=====================================================================

- Do NOT touch Projects, Research, or Skills pages/content unless
  website_texts.txt explicitly contains a section labeled for one of those
  areas — if it does, flag this to me before proceeding, since those
  sections were previously marked as finished/off-limits, and confirm I
  actually want them touched now.
- Do NOT change any frontmatter fields (title, company, institution,
  location, dateRange, tags, logo, grade, etc.) based on this pass — this
  task is about body/paragraph copy and section text only. If
  website_texts.txt seems to imply a factual/frontmatter change (e.g. a
  different date, a different company name), stop and ask me to confirm
  before changing it.
- Preserve all existing links, buttons, and interactive elements currently
  in place (mailto links, LinkedIn/GitHub links, PDF buttons, "Read More"
  toggles, project-card cross-links added in the previous task, etc.) —
  only replace the surrounding text, not the functional elements themselves,
  unless website_texts.txt explicitly includes new button labels or new
  links to swap in.
- Preserve existing styling conventions and layout structure — this is a
  copy-only pass, not a redesign.
- If website_texts.txt contains a full paragraph replacement for a section,
  replace the entire existing paragraph with the new one exactly as written
  in the file (don't merge old and new text together).
- If a section in website_texts.txt is shorter/different in scope than the
  current content on the site (e.g. removes a bullet point that currently
  exists), follow the file — assume it's an intentional edit — but ask me if
  removing something seems like it might be accidental (e.g. if it deletes a
  named achievement or metric outright).

=====================================================================
AFTER APPLYING THE CHANGES
=====================================================================

Show me a full list of every file you changed, organized by section, so I
can review each one against website_texts.txt. Remind me to run
`npm run dev` and manually check every page that was touched before pushing.

=====================================================================
GENERAL REMINDERS (carry over from all previous tasks on this project)
=====================================================================

- Follow the existing critical Astro gotcha: any `.map()` returning
  multi-line JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site
  (no purple/primary colors, gray hover states, bg-base-200/bg-base-100
  pattern).
- If anything in website_texts.txt is unclear, incomplete, or seems to
  conflict with what's currently on the live site, ask me before guessing.
