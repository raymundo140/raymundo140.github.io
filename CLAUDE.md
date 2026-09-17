---

## CURRENT TASK: Finish Home, Experience, Education, Awards, CV, Footer, SEO
## (Projects, Research, and Skills sections are DONE — do not touch them,
## except shared global components like Head.astro/SEO defaults if instructed
## below.)

RULES
- Never invent achievements, metrics, dates, tools, employers, responsibilities,
  or awards. If a fact isn't already present in settings.ts, existing MDX, or
  this file, ask me before guessing.
- Keep home/index copy concise; full detail belongs on detail pages.
- Use consistent spelling: ROS 2, MoveIt 2, Nav2, RGB-D.
- Preserve the current visual language/styling conventions already established
  (no purple/primary colors, gray hover states, bg-base-200/bg-base-100
  pattern) — this is a content and bug-fix pass, not a redesign.
- Follow the existing critical Astro gotcha: any `.map()` returning multi-line
  JSX must use `=> { return (...) }`, never `=> (...)`.

=====================================================================
ASK ME BEFORE PROCEEDING — two facts need confirmation
=====================================================================

1. AIST internship status: is it ongoing or has it concluded? The hero and W1
   experience text need the correct tense (present vs. past) and correct end
   date. Do not guess — ask me directly and wait for my answer before writing
   the hero status line or editing the W1 tense.

2. ITESM (e1) start date: settings.ts / the education index card says
   "Aug 2022 – Dec 2026" but e1's detail page currently shows "Aug 2021 –
   Dec 2026." Confirm the correct start year with me before fixing — do not
   assume either value is right.

=====================================================================
BUG 1 — CRITICAL: Experience detail pages w3, w4, w5 render w1's data
=====================================================================

/experience/w3, /experience/w4, /experience/w5 currently render the AIST
(w1) title, company, logo, and tags instead of their own data, even though
w3/w4/w5 bullets and tags show correctly on the HOME PAGE cards. This means
`src/pages/experience/[slug].astro` has a routing/matching bug — likely in
how `entries.find(e => e.id === slug)` resolves, or stale/incorrect
frontmatter in the w3/w4/w5 MDX files. Investigate and fix so each slug
renders its own correct data. Also remove any duplicated headings (e.g. two
"What I Learned" headings appearing on the same page) caused by this bug.

Once fixed, the "← Back to Home" link on experience detail pages should say
**"← Back to Experience"** instead (linking to /experience, not /).

=====================================================================
BUG 2 — CRITICAL: Education detail pages e2, e3, e4 render e1's data
=====================================================================

Same bug, education side. /education/e2 currently shows "2Tecnológico de
Monterrey (ITESM)" — e1's data with a stray "2" character, instead of
"University of Seoul (UOS)." Likely e2.mdx/e3.mdx/e4.mdx were duplicated from
e1.mdx and not fully edited. Fix the frontmatter in each so it matches its
own entry in the `education` array in settings.ts, and fix the same
routing/matching bug in `src/pages/education/[slug].astro`. Remove any
malformed "2Tecnológico/3Tecnológico/4Tecnológico" text and any empty/
duplicate section headings.

=====================================================================
1. HERO (src/components/ui/Hero.astro)
=====================================================================

Replace hero copy with (adjust the STATUS line per my answer to the AIST
question above — do not paste the "Currently completing" wording verbatim
until I confirm it's still accurate):

Eyebrow: Robotics & Digital Systems Engineer
H1: Hi, I'm Raymundo.
Body:
I build autonomous robotic systems that combine perception, navigation,
manipulation, AI, and embedded control. I'm completing my B.S. in Robotics
and Digital Systems Engineering at Tecnológico de Monterrey and have worked
across research and engineering environments in Japan, South Korea, China,
Canada, and Mexico.

Status (pending my confirmation on tense/end date):
[AIST internship status — ask me, then insert here]. Open to full-time
robotics and AI opportunities starting in 2027.

CTAs (buttons): View Projects · View CV · Contact Me
Keep the existing contact icons (email, GitHub, LinkedIn) below the CTAs as
already implemented.

Recommended homepage section order (verify this matches current order, adjust
if needed): Hero → Featured Projects → Work Experience → Research & Invited
Talks → Education → Awards → Contact CTA → Footer.

=====================================================================
2. FINAL CONTACT CTA — new section, add near bottom of home page
=====================================================================

Add a new section on `src/pages/index.astro`, positioned after Awards and
before the closing Footer (Skills section, if present above Awards, stays
where it is — place this CTA as the very last content section before
Footer):

Heading: Let's Build the Next Generation of Robotics
Body:
I'm graduating in December 2026 and am interested in full-time opportunities
starting in 2027 across robotics, autonomy, perception, mobile manipulation,
AI for robotics, and embedded systems. I'm especially interested in teams
building intelligent systems that move from research and simulation into
reliable real-world hardware.
Buttons: Email Me (mailto:robertogomez101010@gmail.com) / LinkedIn
(https://www.linkedin.com/in/roberto-raymundo/)
Small text below: Based in Monterrey, Mexico · Open to international
opportunities

Style this section consistent with existing bg-base-200 card patterns used
elsewhere on the site — a simple centered block, not a new visual system.

=====================================================================
3. FOOTER (src/components/ui/Footer.astro)
=====================================================================

Update footer content to:

Roberto Raymundo Gómez Vargas
Robotics & Digital Systems Engineer
Building autonomous robotic systems across perception, navigation,
manipulation, AI, and embedded systems.
[Email icon] [GitHub icon] [LinkedIn icon]
© 2026 Roberto Raymundo Gómez Vargas. Built with Astro and GitHub Pages.

(Keep existing icon components/links already wired up — just update the
surrounding text content.)

=====================================================================
4. EXPERIENCE INDEX (src/pages/experience.astro)
=====================================================================

Replace the page intro paragraph with:
Hands-on experience across robotics research, industrial automation,
embedded systems, and engineering software — from autonomous mobile
manipulation at AIST to commissioning and building industrial robot systems.

Update each card's summary/bullets on this index page (and matching entries
in `experiences` array in settings.ts if they currently differ) to:

W1 — AIST:
Developed autonomous mapping, navigation, perception, and mobile-manipulation
systems for CALL-M at the CNRS-AIST Joint Robotics Laboratory, with work
spanning ROS 2 architecture, SLAM, Nav2, RGB-D perception, exploration, and
real-robot validation.

W2 — Smart Factory MTY:
Commissioned, repaired, calibrated, and integrated industrial robot platforms
including UR, xArm, Baxter, and ABB YuMi. Designed and fabricated a custom
pick-and-place gripper that increased production throughput by 30% and
helped reduce robot downtime by 20%.

W3 — Tecnológico de Monterrey:
Managed multi-campus compliance data operations covering $5.3M in projects
and contracts while developing automation workflows that supported 100+
employees and improved processing time by 21%.

W4 — Freelance:
Worked with small and medium-sized businesses in Mexico and the United
States to automate operational workflows and integrate practical technology
solutions tailored to business needs.

W5 — CIBRUC:
Designed and programmed an interactive simulation/video game for online
hosting and licensing using Godot, while leading UI/UX design and production
optimization.

--- W1 detail page (src/content/experience/w1.mdx) ---
Keep the existing detailed content as-is (it's already strong). Just:
- Proofread for any formatting artifacts
- Update any "in development"/"in progress" language to past/completed tense
  ONLY once I confirm the internship's actual current status (see question
  at top of this file)
- Add "View Project" / "View Research" cross-link CTAs where relevant (e.g.
  linking to the door-opening research paper or mapping paper already on the
  Research page, and to any matching Project entries) — do not duplicate
  full content from those pages, just link out
- Preserve the existing Technical Contributions Summary section as-is

--- W2 detail page (src/content/experience/w2.mdx) ---
Keep the current detailed content. Replace/insert this as the opening
paragraph under Overview:
At Smart Factory MTY, I worked directly with industrial and collaborative
robots in a manufacturing-focused lab, covering commissioning, electrical
integration, mechanical fabrication, calibration, end-effector development,
and production-cell validation. The role gave me hands-on experience across
the practical engineering layers required to take a robot from hardware
setup to reliable operation.

Optionally add a small "impact stat strip" near the top (3 short stats in a
row, matching any existing stat-strip pattern on the site, or a simple
inline badge/text row if no such pattern exists yet):
20% downtime reduction · 30% throughput increase · 6 robot platforms

--- W3 detail page (src/content/experience/w3.mdx) — full replace ---
Title: Systems & Data Automation Engineer
Organization: Tecnológico de Monterrey (ITESM)
Dates: Feb 2023 – Mar 2026
Location: Monterrey, Mexico
Tags: Automation, Data, Python, Process Improvement, Operations, Systems

## Overview
Alongside my robotics degree, I worked at Tecnológico de Monterrey on
systems and data automation supporting multi-campus administrative and
compliance operations. The role gave me experience applying software and
automation to high-volume real operational workflows, where reliability,
traceability, and usability were as important as the code itself.

## What I Did
- Managed data operations associated with $5.3M in projects and contracts
  across multiple campus workflows.
- Developed automation solutions that reduced repetitive manual work for
  more than 100 employees.
- Improved processing time by 21% through workflow automation and process
  redesign.
- Supported data organization, operational reporting, and process
  consistency across institutional workflows.
- Worked directly with users and stakeholders to translate repetitive
  operational tasks into practical automated solutions.

## Results
- $5.3M in projects/contracts supported.
- 100+ employees affected by automation/process improvements.
- 21% improvement in processing time.

## What I Learned
This role strengthened a different side of my engineering profile: building
software that must work reliably for real users and real organizational
processes. It taught me to look beyond whether a system technically works
and consider maintainability, usability, data quality, and measurable
operational impact.

--- W4 detail page (src/content/experience/w4.mdx) — full replace ---
Title: Freelance Technology Specialist
Organization: Self-Employed
Dates: 2022 – Present
Location: Monterrey, Mexico & USA
Tags: Automation, Technology Integration, Consulting, Business Systems,
Workflow Improvement

## Overview
Since 2022, I have worked independently with small and medium-sized
businesses in Mexico and the United States, helping them identify where
technology can simplify operations and implementing practical solutions
around their real constraints.

## What I Did
- Worked directly with business owners and teams to identify repetitive,
  inefficient, or technology-limited workflows.
- Designed and delivered tailored automation and technology-integration
  solutions.
- Translated business requirements into practical technical
  implementations.
- Supported adoption and iteration so solutions fit existing day-to-day
  operations rather than remaining isolated prototypes.

## Impact
The work gave me experience owning projects from problem definition through
delivery while communicating directly with non-technical stakeholders. It
also strengthened my ability to choose technology based on the actual
problem rather than forcing a predetermined stack.

## What I Learned
Freelance work taught me to operate with ambiguity, communicate clearly,
prioritize high-impact improvements, and take responsibility for the
complete outcome of a technical solution.

Do NOT invent client names, revenue, project counts, stacks, or confidential
details.

--- W5 detail page (src/content/experience/w5.mdx) — full replace ---
Title: Computer Programmer (Part-time)
Organization: CIBRUC
Dates: Feb 2023 – Jul 2023
Location: Monterrey, Mexico (already correct in settings.ts — do not change)
Tags: Godot, Game Development, Simulation, UI/UX, Software Development

## Overview
At CIBRUC, I worked part-time as a computer programmer developing an
interactive simulation and video game intended for online hosting and
licensing. The role combined programming with interface design and
production-focused iteration.

## What I Did
- Designed and programmed the interactive application using Godot.
- Developed gameplay/simulation behavior and user-facing interactions.
- Led UI/UX design to create a coherent and intuitive user experience.
- Iterated on the application with attention to production readiness and
  online distribution.

## What I Learned
Although this role was outside robotics, it strengthened core
software-engineering skills that continue to transfer into my robotics
work: structuring interactive systems, debugging stateful behavior,
designing interfaces for users, and carrying a software product from
implementation toward deployment.

Do not invent the application topic, customer, programming language, sales,
or metrics.

=====================================================================
5. EDUCATION INDEX (src/pages/education.astro)
=====================================================================

Replace the page intro paragraph with:
Robotics engineering at Tecnológico de Monterrey, complemented by
international study in AI, embedded systems, electronics, and technical
communication across South Korea, China, and Canada.

--- E1 detail page (src/content/education/e1.mdx) — enhance, keep dates
    pending my confirmation above ---
Program: B.S. in Robotics and Digital Systems Engineering
Location: Monterrey, Mexico
GPA: 4.0/4.0 · Average: 98/100 · Top 1%

## About
My undergraduate degree combines robotics, electronics, embedded systems,
control, software, and artificial intelligence. The program has given me
the opportunity to move repeatedly between theory and physical
implementation — from control and kinematics to computer vision, autonomous
navigation, embedded firmware, and full robotic-system integration.

## Relevant Coursework
Intelligent Robotics, Computer Vision, Control Systems, Kinematics &
Dynamics (use only these verified names already on the site — do not add
unverified course titles).

## Key Projects
Link to (do not duplicate content, just link out to) these existing Project
pages: the Manchester Robotics AMR project, the XARM6 AI object-tracking
project (General Motors), the John Deere autonomous tractor project, plus
one more strong ITESM-affiliated project of your choosing from the existing
10 projects.

## Achievements
- Top 1% GPA recognition, School of Engineering & Sciences.
- Full scholarship recipient for international academic opportunities where
  supported (BIT program).
- 3rd Place, Expo Ingenierías 2023 — SafeSpace.

## Skills Gained
Robotics systems integration, autonomous navigation, computer vision,
embedded systems, feedback control, robot kinematics, AI/ML, engineering
prototyping, multidisciplinary teamwork.

--- E2 detail page (src/content/education/e2.mdx) — full replace ---
Program: Exchange Program — AI, Embedded Systems & Solid-State Electronics
Location: Seoul, South Korea
Dates: Aug 2025 – Dec 2025
Grade: A+

## About
I spent a semester at the University of Seoul expanding my robotics
background into artificial intelligence, advanced embedded systems, and
solid-state electronics. The exchange combined technical coursework with
hands-on embedded development and research into computing hardware for
intelligent systems.

## Coursework
Artificial Intelligence, Advanced Embedded Systems, Solid-State Electronics

## Key Project
Link to the existing "STM32 Dual-Elevator Embedded System with Greedy
Scheduling" project already on the Projects page.

## Achievements
- Earned an A+ during the exchange.
- Conducted research on neuromorphic computing and memristor-based devices
  for intelligent robotics.
- Invited to present the work to an international engineering cohort at
  UOS.

## Skills
STM32 development, embedded C, real-time control, finite-state machines,
hardware/software integration, AI fundamentals, semiconductor-device
concepts, technical research, international technical communication.

Add a CTA link at the bottom: "View Research / Invited Talk" → link to the
matching Research page entry for the Neuromorphic Computing guest lecture.

--- E3 detail page (src/content/education/e3.mdx) — full replace ---
Program: Summer Program — Advanced Electronics & Computer Science
Location: Beijing, China
Dates: Jul 2025 – Aug 2025
Grade: A+

## About
I attended the Beijing Institute of Technology through an international
summer program focused on advanced electronics, embedded systems, and
computer science. The program combined technical coursework, international
collaboration, and hands-on engineering in a multicultural academic
environment.

## Coursework
Advanced Electronics, Embedded Systems, Computer Science

## Key Project
Link to the existing "IoT Smart Agriculture & Sustainability Platform"
project already on the Projects page. Short teaser: Developed a Raspberry
Pi-based smart-agriculture prototype integrating environmental sensing,
automated actuation, and real-time web monitoring.

## Achievements
- Earned an A+.
- Recognized as an honored student of the Electronics Engineering program.
- Selected to deliver the closing ceremony speech representing the
  international cohort.
- Received a full scholarship from Tecnológico de Monterrey to attend.

## Skills
IoT systems, environmental sensing, embedded/edge computing, actuator
integration, automation, web-based monitoring, international teamwork,
public speaking.

--- E4 detail page (src/content/education/e4.mdx) — full replace ---
Program: Summer Program — Advanced Academic Communication & Cross-Cultural
Studies
Location: Waterloo, Canada
Dates: Jul 2024 – Aug 2024
Grade: A+

## About
I attended an international summer program at the University of Waterloo
focused on advanced academic communication and cross-cultural collaboration.
The experience strengthened the communication skills needed to present
technical ideas clearly, work across cultures, and contribute effectively
in international engineering environments.

## Relevant Areas
Academic Communication, Public Speaking, Leadership, Global Collaboration

## Key Experience
Focus on presentations, international teamwork, and communication (do not
invent specific presentation topics).

## Achievements
- Earned an A+.
- Completed an international academic experience centered on communication,
  leadership, and cross-cultural collaboration.

## Skills
Technical communication, academic presentation, public speaking,
cross-cultural teamwork, leadership, professional communication.

=====================================================================
6. AWARDS (src/pages/awards.astro and home page awards section)
=====================================================================

Update the page/section intro to:
Selected academic honors, international recognition, and engineering
competition results.

Keep existing order (already correct):
1. BIT Student Representative & Honored Graduate
2. Top 1% GPA — School of Engineering & Sciences
3. 3rd Place — Expo Ingenierías 2023

Update copy for each (minor polish, same facts):

Award 1
Title: Student Representative & Honored Graduate — BIT International Summer
Program
Summary: Recognized for outstanding performance in the Electronics
Engineering program and selected to deliver the closing ceremony speech
representing the international cohort at Beijing Institute of Technology.
Bullets:
- Awarded diploma for outstanding performance.
- Selected to deliver closing ceremony speech as student representative.
- Attended through a full scholarship from Tecnológico de Monterrey.

Award 2
Title: Top 1% GPA — School of Engineering & Sciences
Summary: Recognized by Tecnológico de Monterrey for ranking among the top 1%
of engineering students by GPA during the 2024–2025 academic year.
Bullets:
- Academic average: 98/100.
- Honored through Mejores Promedios while studying abroad at UOS.

Award 3
Title: 3rd Place — Expo Ingenierías 2023
Summary: Awarded third place for SafeSpace, an AI-enabled home-safety system
for older adults, in a competition with more than 100 participants.
Bullets:
- AI facial recognition using Python.
- Multi-sensor automation and remote web monitoring using NodeMCU/ESP32 and
  Arduino.
- Combined software, electronics, mechanical design, and rapid prototyping.

=====================================================================
7. CV PAGE (src/pages/cv.astro)
=====================================================================

H1: Curriculum Vitae
Intro paragraph: A concise overview of my education, robotics research,
engineering experience, projects, technical skills, and international
academic background.

Rename/confirm buttons: "Download CV (PDF)" and "Open Full Screen" (keep
existing functionality, this is a label change only if current labels
differ).

Add a small note below the buttons: "Last updated: [ask me for this date —
do not invent it]"

Mobile behavior: on small screens, prioritize showing the Download/Open Full
Screen buttons prominently rather than a hard-to-read embedded PDF viewer —
if the current implementation already forces a tiny embedded PDF on mobile,
adjust so the buttons are clearly usable first, embed is secondary/below.

Add a closing line: "Looking for a project deep dive? Explore my Projects
and Research pages." with links to /projects and /research.

=====================================================================
8. SEO / METADATA (src/settings.ts seo object, src/components/Head.astro)
=====================================================================

Update `seo.default_title` to: "Raymundo Gómez Vargas | Robotics & AI
Engineer"

Update `seo.default_description` to: "Robotics and Digital Systems Engineer
specializing in autonomous systems, ROS 2, mobile manipulation, perception,
AI, and embedded robotics, with engineering and research experience across
Japan, South Korea, China, Canada, and Mexico."

Confirm every page already has (fix any gaps found):
- unique title/meta description per page (via existing Head.astro props
  pattern — check that project/experience/education/research detail pages
  pass a page-specific title/description rather than always falling back to
  the site default)
- correct canonical URL per page
- Open Graph metadata (already implemented per earlier work — just verify
  it's still correct)
- exactly one H1 per page
- descriptive alt text on all images (logos, profile picture, project
  images)
- no horizontal overflow on mobile widths
- all internal links, external links, and PDF links actually resolve (spot
  check a sample after your changes)

=====================================================================
9. FINAL QA CHECKLIST — verify all of these before telling me you're done
=====================================================================

[ ] Hero updated (pending my answer on AIST status)
[ ] Final Contact CTA section added near bottom of home page
[ ] GitHub/LinkedIn visible and correct in hero, footer, and contact CTA
[ ] /experience/w3, /w4, /w5 no longer show AIST data — each shows its own
[ ] /education/e2, /e3, /e4 no longer show ITESM data — each shows its own
[ ] No malformed "2Tecnológico/3Tecnológico/4Tecnológico" text anywhere
[ ] No empty or duplicate section headings on any detail page
[ ] ITESM (e1) start date fixed to whichever value I confirm
[ ] AIST tense/end date fixed to whichever status I confirm
[ ] Experience detail "back" links say "← Back to Experience"
[ ] Awards copy polished per section 6
[ ] CV page: buttons labeled correctly, mobile-friendly, "last updated" note
    added only if I provide a date, cross-link to Projects/Research added
[ ] Footer content updated per section 3
[ ] SEO defaults updated in settings.ts per section 8
[ ] No console errors in dev mode
[ ] `npm run build` succeeds with no errors
[ ] Site reviewed locally with `npm run dev` — specifically re-check every
    page touched in this task before I push

Do NOT modify Projects, Research, or Skills pages/components/content except
where explicitly instructed above (e.g. adding cross-link CTAs from
Education/Experience pages TO existing Project/Research pages — that's
allowed, editing the Project/Research pages themselves is not).

If any required fact isn't already in settings.ts, existing MDX content, or
this file, ask me — do not guess or invent it.
