# Build log

This log records the decisions and technical lessons behind the portfolio so the project can be discussed clearly in placement interviews.

## 1. Defining the smallest useful version

**Situation:** The portfolio needed to support upcoming placement applications without looking like a generic template or becoming a large multi-page project.

**Task:** Build one complete page that lets a recruiter understand the candidate, inspect technical work, and download a CV with minimal effort.

**Action:** I limited the information architecture to three strong areas: introduction, selected projects, and profile. LifeOS became the flagship case study, while two smaller projects demonstrate breadth. The main action is a CV download.

**Result:** The page has one clear purpose and a recruiter can move from summary to evidence without navigating across multiple pages.

**Learning point:** Scope is a design tool. A smaller page can communicate more effectively when every section answers a defined user question.

## 2. Designing useful project interaction

**Situation:** A static list made the projects easy to see, but it did not help recruiters find work related to a particular role.

**Task:** Add interaction without increasing complexity or hiding important content behind a custom interface.

**Action:** I implemented category filtering with a small JavaScript module and used native `<details>` elements for deeper engineering notes. Filter buttons update `aria-pressed`, and a live region reports the number of visible projects.

**Result:** Recruiters can narrow the portfolio to AI + cloud, software, or robotics, then inspect technical reasoning only when they want it.

**Learning point:** Native browser controls often provide stronger accessibility and simpler maintenance than recreating the same behavior from scratch.

## 3. Separating evidence from claims

**Situation:** Portfolio writing can become vague or exaggerated, especially when summarizing unfinished or evolving student projects.

**Task:** Present technical ability confidently without inventing metrics, links, responsibilities, or outcomes.

**Action:** I wrote each project around known implementation details, diagnosed problems, and engineering decisions. Missing contact and repository links remain explicitly withheld rather than being replaced with fake placeholders.

**Result:** The content is specific enough to support interview discussion while remaining defensible and easy to update.

**Learning point:** Credibility comes from concrete decisions and constraints, not inflated adjectives or unsupported statistics.

## 4. Refining the profile information architecture

**Situation:** The first profile layout mixed education, tools, jobs, and leadership into a card-and-timeline composition that felt visually busy.

**Task:** Make the section faster to scan and give each type of information a clear home.

**Action:** I replaced the mixed layout with five numbered groups: Education, Technical Toolkit, Leadership & Achievements, Professional Experience, and Part-time Experience. Graded coursework now has a dedicated results grid instead of being buried in a paragraph.

**Result:** The profile now has a visible hierarchy, cleaner alignment, and less competition between unrelated content.

**Learning point:** When a page feels “messy,” the root problem is often information architecture rather than colour or spacing. Separating content types first makes visual refinement much easier.

## 5. Building for different screens and preferences

**Situation:** The editorial desktop layout uses asymmetry, multiple columns, and dense project information that cannot simply be scaled down.

**Task:** Preserve hierarchy and interaction on tablet and mobile without creating separate markup.

**Action:** CSS breakpoints progressively collapse project, profile, and call-to-action grids. The mobile menu exposes its state with `aria-expanded`, Escape closes it, focus remains visible, and motion is removed when the operating system requests reduced motion.

**Result:** The same semantic page adapts across screen sizes and remains usable with keyboard and motion preferences.

**Learning point:** Responsive design is not shrinking the desktop version; it is choosing a new hierarchy for less available space.

## 6. Packaging and private deployment

**Situation:** The site needed a real hosted URL for review but could not be made public before the content was approved.

**Task:** Produce a reproducible build, keep access owner-only, and verify that the exact saved source matched the deployed version.

**Action:** I generated the Vite build, bundled only validated production assets and the hosting manifest, recorded the exact Git commit, and deployed that saved version privately.

**Result:** The hosted site is available to its owner while external viewers and groups remain excluded.

**Learning point:** Deployment is part of software quality: source state, built artifacts, access control, and the live version must all agree.

## 7. Adding motion without losing clarity

**Situation:** The first complete version was clean and usable, but it felt too static beside more expressive developer portfolios.

**Task:** Add a stronger sense of craft without copying a reference site or making the page feel effects-led.

**Action:** I added a progress indicator tied to page scroll, pointer-responsive depth and lighting on the LifeOS panel, animated project-filter transitions, tactile project-card hovers, and a hand-drawn underline reveal. Every effect is disabled or simplified when reduced motion is requested.

**Result:** The portfolio feels more responsive and distinctive while the content hierarchy remains the main focus.

**Learning point:** Good interface motion explains state or rewards interaction. It should be layered onto a clear information architecture, not used to hide a weak one.
