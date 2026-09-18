---

## CURRENT TASK: Multiple specific content edits across sections

Note: this task DOES include edits to Research and Skills sections — these
are explicit direct instructions from me, not inferred changes, so proceed
with them despite any earlier note marking those sections as "off-limits."

=====================================================================
1. PROJECTS (home page card + project detail page + settings.ts)
=====================================================================

Project p3 (currently titled something like "AI Autonomous Mobile Robot —
Manchester Robotics" or similar):
- Change the title from "Autonomous Mobile Robot" to **"Self-Driving Car"**
  (keep "— Manchester Robotics" or whatever company/context suffix is
  already part of the title format used across other project titles).
- Remove any mention of "1:10" (e.g. "1:10 scale") from the title,
  summary, or description. Wherever a scale reference like "1:10" currently
  appears, replace with just **"scaled autonomous robot"** or **"scaled
  autonomous car"** (pick whichever reads better in context — likely "scaled
  autonomous car" given the new title) with no ratio number at all.
- Update this in `src/settings.ts` (the p3 entry in the `projects` array)
  and in `src/content/projects/p3.mdx` frontmatter/body — check both for the
  "1:10" text and the old title wording.

=====================================================================
2. WORK EXPERIENCE
=====================================================================

AIST (w1) — `src/settings.ts` (bullets array) and `src/content/experience/
w1.mdx`:
- Add a bullet/sentence stating that during the research internship, I wrote
  2 research papers as first author and contributed to a third research
  paper as co-author. Phrase it naturally, e.g.: "Authored 2 research papers
  as first author and contributed to a third as co-author during the
  internship." Place it as an additional bullet point in the existing
  bullets list (both the settings.ts summary bullets and the w1.mdx body,
  wherever a similar list of accomplishments already exists).
- Add **"Intelligent Robotics"** to the `tags` array for w1 in settings.ts
  (and to the tags list in w1.mdx frontmatter if tags are duplicated there).

Freelance Technology Specialist (w4) — `src/settings.ts` and
`src/content/experience/w4.mdx`:
- Update the existing bullet(s) to explicitly mention clients in both
  **Mexico and USA** (the current bullets already reference "Mexico and the
  United States" broadly — make sure "clients" specifically in both
  countries is clearly stated, e.g. "Delivered technology and automation
  solutions for clients in Mexico and the USA." Adjust wording to fit
  naturally with the existing bullet style, don't just duplicate a bullet).

=====================================================================
3. EDUCATION
=====================================================================

University of Seoul (e2) — `src/settings.ts` (tags array) and
`src/content/education/e2.mdx` (Coursework section):
- Add **"Deep Learning"** and **"Machine Learning"** to the coursework/tags
  list for e2. Add them both to the `tags` array in settings.ts and to the
  "Coursework" list in the e2.mdx body content, alongside the existing
  entries (Artificial Intelligence, Advanced Embedded Systems, Solid-State
  Electronics, etc.).

=====================================================================
4. RESEARCH
=====================================================================

Across ALL AIST-affiliated research papers (settings.ts `research` array and
matching MDX files in `src/content/research/`):
- Change the date from just "2026" to **"Sep 2026"** for every research
  entry currently dated "2026" that is AIST-affiliated (CNRS-AIST Joint
  Robotics Laboratory). Do not change the date for the Neuromorphic
  Computing / University of Seoul guest-lecture entry — that one keeps its
  own existing date (Dec 2025).

"A Supervised ROS 2 Architecture for Autonomous Mapping: Modular
Exploration-Management Framework":
- Update the summary/abstract text to lead with "software" before
  "architecture." Replace the current summary with exactly:
  "Presents a modular ROS 2 software architecture for autonomous mapping in
  unknown and dynamic environments. The exploration-management framework
  handles frontier evaluation, navigation-goal supervision, failure
  recovery, progress monitoring, and mission completion while remaining
  configurable for Nav2-compatible robots."
  Apply this to the `summary` field in settings.ts. Leave the full
  `abstract` field (the long original abstract text) unchanged unless
  instructed otherwise — this edit is for the short summary shown on the
  card, not the full abstract behind "Read more."

"A ROS 2 Static–Dynamic Obstacle Filtering Framework for Robust Mapping in
Dynamic Environments":
- Add "first author" to the role/byline shown on this entry, formatted as:
  "First Author · CNRS-AIST Joint Robotics Laboratory"
  Update the `role` field (or wherever "Researcher"/role text currently
  renders on the card, e.g. next to institution) for this specific entry in
  settings.ts to read "First Author" instead of whatever it currently says
  ("Researcher"), and confirm the institution text still shows alongside it
  in the same "[role] · [institution]" format already used elsewhere on
  Research cards.

"An Integrated Perception, Navigation, and Manipulation Pipeline for
Semi-Autonomous Door Opening with a Mobile Manipulator":
- Below the title, the status currently says "Submitted" (or similar) —
  change this to exactly: **"Submitted to IEEE/SICE SII 2027"**
  Update the `status` field (or wherever this status text is sourced from)
  in settings.ts for this entry.
- Add a mention that LiDARs were used on this project. Add this to the
  bullets list and/or the tags array — add "LiDAR" to `tags` if not already
  present, and add a bullet mentioning LiDAR-based perception/sensing was
  part of the system (word it naturally alongside the existing bullets about
  perception, navigation, localization, alignment, etc.).

=====================================================================
5. AWARDS & RECOGNITION
=====================================================================

Award 1 (BIT — currently "Student Representative & Honored Graduate — BIT
International Summer Program" or similar):
- The date/location line "Aug 2025 / Beijing, China" is currently wrapping
  awkwardly because the title above it is too long. Shorten the title to:
  **"Student Representative & Outstanding Performance Recognition"**
  Update this in the `awards` array in settings.ts (the `title` field for
  this entry) and confirm the date/location line no longer wraps oddly once
  the shorter title is in place. If the wrapping issue persists even with
  the shorter title due to a layout/CSS issue rather than title length,
  investigate `src/components/ui/AwardCard.astro` (or wherever award cards
  render) for the actual layout cause and fix it — don't just shorten text
  and hope it's enough; verify visually.

Award 2 ("Top 1% GPA — School of Engineering & Sciences"):
- Remove any mention of the specific academic year "2024–2025" from this
  award's summary/description text. Do not reference which academic year it
  was — just describe the achievement itself without a year attached. Update
  the `description` (or `summary`) field for this entry in settings.ts.

=====================================================================
6. SKILLS
=====================================================================

At the end of every skill category/section (Programming, Tools &
Frameworks, Hardware, Robotics & Control, AI & Machine Learning, Software &
Systems — all categories currently in `skillCategories` in settings.ts),
add a final skill entry that simply reads: **"and others"**
This should be the last item in each category's `skills` array, appended
after all existing skills in that category.

=====================================================================
GENERAL REMINDERS
=====================================================================

- Follow the existing critical Astro gotcha: any `.map()` returning
  multi-line JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site.
- After making all these edits, show me a summary of every file changed,
  organized by the 6 numbered sections above, and remind me to review
  locally with `npm run dev` before pushing — specifically re-check the
  Award 1 card to confirm the date/location no longer wraps badly, and
  re-check all AIST research entries for the corrected "Sep 2026" date.
- If anything above is ambiguous (e.g. exactly where a field lives, or how
  to phrase a bullet naturally), ask me before guessing.
