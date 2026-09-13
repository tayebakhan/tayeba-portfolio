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

**Action:** I replaced the mixed layout with three numbered groups: Education, Technical Toolkit, and Experience & Leadership. Each group uses one consistent internal structure and its own visual boundary.

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

## 7. Making soft skills provable

**Situation:** Teamwork, leadership, research, and communication matter to placement recruiters, but listing them without context would feel generic.

**Task:** Show where those skills were used while keeping the profile easy to scan.

**Action:** I reframed the READY finalist experience around research, critical thinking, collaboration, and presentation. I also turned the university group task into a challenge-action-result case study and separated each club committee role.

**Result:** Each soft skill now has a visible proof point, and interactive cards let recruiters scan the headings before reading the supporting evidence.

**Learning point:** A skill becomes more credible when the interface connects it to a specific situation, action, and outcome.

## 8. Adding personality with controlled motion

**Situation:** The polished first version was clear but too restrained to communicate the creative person behind the technical work.

**Task:** Add visual energy and personal detail without copying another portfolio or distracting from recruiter content.

**Action:** I introduced a layered personal collage, hover-responsive skill and club cards, a subtle pointer tilt, a moving interest line, and a page progress indicator. Motion turns off for people who prefer reduced movement and collapses cleanly on smaller screens.

**Result:** The site feels more individual and exploratory while keeping projects and qualifications in the strongest positions.

**Learning point:** Movement works best when it reinforces hierarchy and personality, rather than behaving like a decorative effect applied everywhere.
