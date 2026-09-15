

```bash
cd ~/dev/raymundo140.github.io
nano CLAUDE.md
```

Paste this in:

```markdown
# Raymundo's Portfolio Website — Project Context

## Who I am
Roberto Raymundo Gomez Vargas ("Raymundo"), Robotics and Digital Systems Engineer
from Tecnológico de Monterrey (ITESM), Top 1% GPA. International experience across
Japan, South Korea, China, Canada, and Mexico. Currently Robotics Research Intern
at AIST in Tsukuba, Japan.

## The Website
- Repo: github.com/raymundo140/raymundo140.github.io
- Live: raymundo140.github.io
- Local dev: `npm run dev` → http://localhost:4321
- Deployment: GitHub Pages via GitHub Actions (push to `main` auto-deploys)
- Framework: Astro 5 + TailwindCSS + DaisyUI + MDX
- Template base: maiobarbero/astro_academia (heavily customized)
- Theme: forced dark mode — `data-theme="lofi"` hardcoded in src/layouts/Layout.astro,
  no theme toggle exists
- template.base = '' (user/org GitHub Pages, no sub-path)

## Tech Stack
Astro 5, TailwindCSS 3, DaisyUI 4, @astrojs/mdx v4 (NOT v5+ — Astro 5 compatible only),
@astrojs/react, @astrojs/sitemap, TypeScript

## File Structure
```
src/
├── assets/profile_pictures.jpg
├── components/
│   ├── Head.astro
│   └── ui/
│       ├── AllProjectsCard.astro
│       ├── AwardCard.astro
│       ├── EducationCard.astro
│       ├── ExperienceCard.astro
│       ├── Footer.astro
│       ├── Hero.astro
│       ├── Navbar.astro
│       ├── ProjectCard.astro
│       ├── ResearchCard.astro
│       └── SocialIcons.astro
├── content/
│   ├── experience/  w1.mdx–w5.mdx
│   ├── projects/    p1.mdx–p6.mdx (p7–p11 planned)
│   ├── research/    slugs match research[] in settings.ts
│   └── education/   e1.mdx–e4.mdx
├── content.config.ts   ← Astro 5 glob-loader content collections
├── layouts/Layout.astro
├── pages/
│   ├── index.astro, projects.astro, experience.astro, education.astro,
│   │   research.astro, awards.astro, skills.astro, cv.astro
│   ├── projects/[slug].astro
│   ├── experience/[slug].astro
│   ├── research/[slug].astro
│   └── education/[slug].astro
└── settings.ts   ← ALL site data lives here
```

## settings.ts — the master data file
Everything is driven from here. Types: Project[], WorkExperience[], Research[],
Education[], Award[], SkillCategory[], Language[], social, template, seo.

**Pattern to add any new entry (project/experience/research/education):**
1. Add object to the array in settings.ts
2. Create matching `src/content/<type>/<slug>.mdx` with matching frontmatter
3. Card + detail page render automatically — no other files need touching

Awards have NO detail pages — they link directly to external LinkedIn URLs.

## Slugs currently in use
- Projects: p1–p6 (p7–p11 planned, not yet added)
- Experience: w1 (AIST), w2 (Smart Factory MTY), w3 (ITESM), w4 (Freelance), w5 (CIBRUC)
- Research: currently being reorganized — see "Current task" below
- Education: e1 (ITESM), e2 (UOS), e3 (BIT), e4 (Waterloo)

## Image paths
```
public/images/
├── experience/   w1.png–w5.png
├── education/    e1.png–e3.png, e4.svg
├── research/     r1.png
├── awards/       expo.png
├── companies/    jd.png, manchester.png
├── projects/     (real images still needed)
└── pfp.jpg
```

## Critical Astro gotcha
In .astro files, any `.map()` callback returning multi-line JSX MUST use:
```astro
{items.map(item => {
  return ( <div>...</div> )
})}
```
NOT `=> ( <div>...</div> )`. The arrow-with-parens form causes Astro's parser to
render raw HTML attribute text on the page instead of the actual element. This has
bitten us repeatedly — always use the `=> { return (...) }` form.

## Styling conventions
- No purple/primary DaisyUI color anywhere — replaced globally with base-content/gray
- Card hover: `hover:border-base-content/80` + `group-hover:font-bold` or
  `group-hover:font-extrabold` (never color change, never text-primary)
- Card background: `bg-base-200` for cards with a plain content, `bg-base-100` for
  cards with an image (project cards)
- Bullet arrows: unicode `▸` with `items-baseline` on the flex container to align
  with the first line of wrapped text (NOT `items-start` with manual margin — this
  was fixed after several iterations)
- Image fallback pattern: `onerror="this.style.display='none'"` or
  `onerror="this.parentElement.style.display='none'"` to hide broken logos gracefully

## Standard workflow
```bash
cd ~/dev/raymundo140.github.io
npm run dev              # local preview at localhost:4321
git add .
git commit -m "message"
git push origin main      # auto-deploys via GitHub Actions
```

---

## CURRENT TASK: Rebuild the Research section

Replace the current `research` array in settings.ts (which has a Neuromorphic
Computing guest-lecture entry and 2 placeholder research papers) with:

1. **KEEP** the Neuromorphic Computing / Guest Lecturer entry at University of Seoul
   (Dec 2025) — this was a real invited talk, don't delete it. Give it status:
   "Invited Talk" and slug `guest-lecture-uos`.

2. **ADD 3 real research papers**, all done at CNRS-AIST Joint Robotics Laboratory,
   Tsukuba, Japan, 2026. PDFs for the finished papers are in ~/Desktop.

   **Paper 1 — slug: supervised-ros2-mapping**
   Title: "A Supervised ROS 2 Architecture for Autonomous Mapping: Modular
   Exploration-Management Framework"
   Status: Published (PDF available — find it in ~/Desktop and copy it to
   public/papers/supervised-ros2-mapping.pdf)
   Abstract: [I will paste the full abstract text separately — ask me for it if
   not already in this file]

   **Paper 2 — slug: static-dynamic-obstacle-filtering**
   Title: "A ROS 2 Static–Dynamic Obstacle Filtering Framework for Robust Mapping
   in Dynamic Environments"
   Status: In Preparation (no PDF yet — show "In Preparation" badge instead of a
   PDF link/button)

   **Paper 3 — slug: door-opening-mobile-manipulator**
   Title: "An Integrated Perception, Navigation, and Manipulation Pipeline for
   Semi-Autonomous Door Opening with a Mobile Manipulator"
   Status: Published (PDF available in ~/Desktop, copy to
   public/papers/door-opening-mobile-manipulator.pdf)

3. **Update the Research type** in settings.ts to add these optional fields:
   `summary` (2-3 sentence version), `abstract` (full abstract text),
   `pdfUrl` (optional), `status` (e.g. "Published" / "In Preparation" / "Invited Talk")

4. **Update ResearchCard.astro AND src/pages/research.astro** (both list views)
   to show: title, institution/role, date, a short `summary` by default, with the
   full `abstract` hidden behind a "Read more" toggle/button. Show a small status
   badge (Published / In Preparation / Invited Talk). If `pdfUrl` exists, show a
   "Read Paper" button linking to it; if not, show "In Preparation" as plain text
   instead of a button.

5. **Update src/pages/research/[slug].astro** (detail page) similarly — full
   abstract always visible there (no need for read-more on the detail page), PDF
   embedded via iframe if pdfUrl exists (see existing pattern from old
   research_paper.mdx), otherwise show an "In Preparation" message.

6. **Create/rename the MDX files** in src/content/research/ to match the new
   slugs: guest-lecture-uos.mdx (rename from research_paper.mdx, keep its body
   content), supervised-ros2-mapping.mdx, static-dynamic-obstacle-filtering.mdx,
   door-opening-mobile-manipulator.mdx. Delete the old r2.mdx placeholder.

Ask me for the full abstract text for each paper if you don't have it — I have it
ready to paste. Also ask me which files on my Desktop are the two paper PDFs before
copying them.
```
