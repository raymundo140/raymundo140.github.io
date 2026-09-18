---

## CURRENT TASK: Project-by-project edits (10 projects)

Apply the following changes to each project. For any project referencing a
`.txt` file on the Desktop, read that file in full and use it to replace
the existing summary/description/body copy for that project — in both
`src/settings.ts` (the `summary` and `description` fields) AND the matching
`src/content/projects/pX.mdx` body content — unless the file only maps
cleanly to one of the two (in which case use your judgment, but check both
locations since both currently hold copy for each project).

Since project numbering (p1–p10) may not exactly match the "Project N"
numbering used below if any reordering happened in earlier tasks, MATCH
EACH PROJECT BY TITLE first (titles are given below for every project), and
confirm the correct settings.ts slug/entry before editing — do not assume
array position N corresponds to "Project N."

=====================================================================
PROJECT 1 — Autonomous Mapping — CALL-M Mobile Manipulator
=====================================================================

- Read `~/Desktop/project1.txt` and replace the current copy for this
  project (settings.ts `summary`/`description` and `src/content/projects/
  pX.mdx` body) with the content from that file.

- In the "RESEARCH OUTPUT" section of this project's page (find this
  section wherever it's currently rendered on the project detail page — it
  may need to be added if it doesn't already render as a distinct labeled
  section), add links to the RESEARCH PAGE (not the raw PDF, the actual
  `/research/[slug]` detail page on this site) for each paper associated
  with this project. Cross-reference the paper titles mentioned in
  project1.txt against the entries already in the `research` array in
  settings.ts to find the correct slugs to link to. If a referenced paper
  doesn't have a clear match in the research array, ask me before guessing
  which one it refers to.

=====================================================================
PROJECT 2 — Autonomous Door Opening — CALL-M Mobile Manipulator
=====================================================================

- Read `~/Desktop/project2.txt` and replace the current copy for this
  project (settings.ts and matching MDX) with the content from that file.

- Same as Project 1: in the "RESEARCH OUTPUT" section, link to the
  research page(s) for the paper(s) associated with this project (likely
  the door-opening paper already in the `research` array — confirm the
  slug matches before linking).

- Add a GitHub repo link at the top of this project's page (same location/
  styling as the GitHub button already used on other project pages). Use
  the SAME repository URL as Project 1 — find whatever GitHub URL is
  currently set for Project 1's `repoUrl` in settings.ts and use that exact
  same URL for Project 2's `repoUrl` field as well.

=====================================================================
PROJECT 3 — Autonomous Mobile Robot — Manchester Robotics
=====================================================================

Note: this project may currently be titled "Self-Driving Car — Manchester
Robotics" from a previous task — confirm you're editing the correct project
entry (the Manchester Robotics one) regardless of exact current title
wording.

- Remove the "Live Demo" button/link entirely from this project's page and
  card if one currently exists (check `demoUrl` field in settings.ts and
  wherever the Live Demo button renders in `src/pages/projects/
  [slug].astro`).
- In its place, add a GitHub repo button/link using this URL:
  https://github.com/raymundo140/autonomous-car-computer-vision-yolov8-ros2
  Set this as the `repoUrl` field for this project in settings.ts, and clear
  out the `demoUrl` field (set to empty/undefined) so the Live Demo button
  no longer renders (the existing `{demoUrl && (...)}` conditional pattern
  should handle hiding it automatically once cleared).
- In the Overview section of this project's copy, remove any "1:10 scale"
  reference (this may already be partially done from an earlier task —
  double check). Replace with just "scaled robot" or "scaled car" wording,
  with no ratio/number, consistent with the earlier fix applied to this
  project.

=====================================================================
PROJECT 4 — ROS 2 Object Tracking with PointNet and xArm 6
=====================================================================

No changes.

=====================================================================
PROJECT 5 — Autonomous Tractor Navigation — John Deere
=====================================================================

- Change the GitHub repo link (`repoUrl` field in settings.ts for this
  project) to:
  https://github.com/raymundo140/WaypointEstimation

=====================================================================
PROJECT 6 — Autonomous Face-Tracking Drone
=====================================================================

- Read `~/Desktop/project6.txt` and use it to replace the current copy for
  this project (settings.ts `summary`/`description` and the matching MDX
  body).

=====================================================================
PROJECT 7 — Dual-Elevator Embedded Control System
=====================================================================

- Read `~/Desktop/project7.txt` and use it to replace the current copy for
  this project (settings.ts and the matching MDX file — this is the
  STM32 Dual-Elevator project referenced elsewhere on the site, linked from
  the Education e2 page's "Key Projects" section from a previous task. If
  you rename/re-word the title here, make sure that cross-link from
  e2.mdx still points to the correct project and its link text still makes
  sense — update the link text there too if needed).

=====================================================================
PROJECT 8 — IoT Smart Agriculture & Environmental Control
=====================================================================

No changes. (This is the project previously referred to elsewhere on the
site as the "IoT Smart Agriculture & Sustainability Platform" — same
project, confirm title consistency but do not otherwise edit its content.
Note: this project is also cross-linked from the Education e3 page's "Key
Projects" section from a previous task — no changes needed there either
since this project itself isn't changing.)

=====================================================================
PROJECT 9 — Embedded Tractor Telemetry & Control — John Deere
=====================================================================

- Add a GitHub repo link (`repoUrl` field in settings.ts) for this project:
  https://github.com/raymundo140/JohnDeereSTM32RaspPi
- Read `~/Desktop/project9.txt` and use it to replace the current copy for
  this project (settings.ts and matching MDX file).

=====================================================================
PROJECT 10 — FPGA Tractor Simulator with Unity
=====================================================================

- Update the title to explicitly mention it was a John Deere collaboration.
  For example, change the title to something like "FPGA Tractor Simulator
  with Unity — John Deere Collaboration" (adjust exact wording/formatting
  to match the title style/pattern already used on other John Deere
  projects, e.g. how Project 5 and Project 9 titles indicate the John Deere
  association).
- Read `~/Desktop/project10.txt` and use it to replace the current copy for
  this project (settings.ts and matching MDX file).

=====================================================================
GENERAL REMINDERS
=====================================================================

- Follow the existing critical Astro gotcha: any `.map()` returning
  multi-line JSX must use `=> { return (...) }`, never `=> (...)`.
- Follow existing styling conventions already established across the site
  (button styles, card styles, section headings, etc. — match whatever
  pattern is already used for GitHub links, Live Demo links, and any
  existing "Research Output"-style sections elsewhere on the site).
- After making all these edits, show me a summary of every file changed,
  organized project by project (1 through 10), and remind me to review
  locally with `npm run dev` before pushing — specifically re-check every
  GitHub link, the Research Output cross-links on Projects 1 and 2, the
  Live Demo removal on Project 3, and the e2/e3 education cross-links to
  Projects 7 and 8 still working correctly.
- If any `.txt` file referenced above isn't found on the Desktop, or if a
  project title doesn't clearly match what's described here, stop and ask
  me before guessing.
