# Tayeba Khan — Portfolio

A recruiter-focused personal portfolio designed and built for software engineering, AI, and technology placement applications.

This project turns a traditional CV into a more useful browsing experience: recruiters can scan the essentials quickly, filter projects by technical area, and expand individual case studies to see the engineering decisions behind the final result.

> **Status:** The site is currently deployed privately while personal contact details and final project links are being prepared.

## Why I built it

Many student portfolios either repeat a CV word-for-word or prioritize visual effects over useful evidence. I wanted mine to answer three recruiter questions clearly:

- What can I build?
- How do I solve technical problems?
- What would I bring to a placement team?

The result is deliberately editorial and compact. It uses strong typography, visible structure, and small purposeful interactions rather than a template-heavy dashboard or an effects-led “AI” aesthetic.

## Key features

- **Flagship project storytelling** — LifeOS receives the deepest case study, with its problem, technical approach, and reliability decisions made visible.
- **Project filtering** — recruiters can switch between AI + cloud, software, and robotics work without leaving the page.
- **Expandable engineering notes** — native accessible disclosure controls reveal challenges, approaches, and solutions on demand.
- **Structured profile** — education, technical toolkit, and experience are separated into clear numbered sections.
- **Downloadable CV** — a one-page PDF profile is generated and bundled with the production build.
- **Responsive navigation** — the layout and navigation adapt for desktop, tablet, and mobile screens.
- **Accessibility details** — semantic HTML, keyboard-visible focus states, reduced-motion support, live filter feedback, and a skip link.

## Technology

| Area | Choice | Reason |
|---|---|---|
| Front end | HTML, CSS, vanilla JavaScript | Keeps the site fast, understandable, and intentionally small. |
| Build tool | Vite | Provides a simple development server and optimized production output. |
| Interaction | Native `<details>` plus small JavaScript modules | Preserves accessibility and avoids unnecessary UI dependencies. |
| CV generation | Python + ReportLab | Keeps the downloadable PDF repeatable rather than manually exported. |
| Hosting | ChatGPT Sites | Supports private review before wider publication. |

## Project structure

```text
.
├── index.html                 # Page structure and portfolio content
├── src/
│   ├── main.js                # Filtering, navigation, and reveal behavior
│   └── styles.css             # Design system and responsive layouts
├── public/
│   ├── favicon.svg
│   └── Tayeba-Khan-CV.pdf
├── tools/
│   └── generate_cv.py         # Repeatable one-page CV generator
├── docs/
│   └── BUILD_LOG.md           # Decisions, difficulties, and learning notes
└── .openai/hosting.json       # Sites deployment configuration
```

## Run locally

```bash
npm install
npm run dev
```

Create an optimized production build:

```bash
npm run build
```

Regenerate the CV after editing its source content:

```bash
python tools/generate_cv.py
```

## Validation

The smallest complete version is checked through:

- a successful Vite production build;
- direct HTTP checks for the compiled page and PDF download;
- desktop, tablet, and mobile responsive rules;
- keyboard and reduced-motion behavior;
- an npm dependency audit with no known vulnerabilities at the time of validation.

No performance score is claimed without a repeatable browser audit.

## Design decisions

### Evidence before decoration

Project descriptions focus on what was built, what went wrong, and how the issue was solved. Decorative elements support navigation and hierarchy rather than replacing technical content.

### A small JavaScript surface

Filtering and mobile navigation need JavaScript, but most content remains readable without it. Expandable project notes use the browser’s native `<details>` element.

### Honest placeholders

Personal contact links are not invented. The private version explicitly withholds unverified email, GitHub, and LinkedIn details until they can be added accurately.

### Placement availability without dominating the introduction

The hero establishes identity and technical direction first. Specific 2027–28 placement availability appears later beside the main recruiter action, where it is useful without making the opening feel like a job-board profile.

## Next improvements

- Add verified GitHub, LinkedIn, and email links.
- Replace the generated profile PDF with the final ATS-reviewed placement CV.
- Add repository and demo links to each completed project.
- Add real screenshots or short product walkthroughs once project interfaces are final.
- Run and record Lighthouse and screen-reader checks before public launch.

## Author

Designed and built by **Tayeba Khan**, a BSc Computer Science (Artificial Intelligence) student at Brunel University London.

