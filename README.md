# Tayeba Khan - Portfolio

A recruiter-focused personal portfolio designed and built for software engineering, AI, and technology placement applications.

This project turns a traditional CV into a more useful browsing experience: recruiters can scan the essentials quickly, filter projects by technical area, and expand individual case studies to see the engineering decisions behind the final result.

> **Status:** The portfolio is configured for public deployment through GitHub Pages. The Sites version remains private.

## Why I built it

Many student portfolios either repeat a CV word-for-word or prioritize visual effects over useful evidence. I wanted mine to answer three recruiter questions clearly:

- What can I build?
- How do I solve technical problems?
- What would I bring to a placement team?

The result is deliberately dark, editorial, and compact. It uses strong typography, layered surfaces, and purposeful interactions rather than a template-heavy dashboard or an effects-led “AI” aesthetic.

## Key features

- **Flagship project storytelling** - LifeOS receives the deepest case study, with its problem, technical approach, and reliability decisions made visible.
- **Project filtering** - recruiters can switch between AI + cloud, software, and robotics work without leaving the page.
- **Expandable engineering notes** - native accessible disclosure controls reveal challenges, approaches, and solutions on demand.
- **Stacked technical toolkit** - programming languages, including C and C++, development tools such as Eclipse, and wider engineering practice are organised into layered cards.
- **Consistent impact system** - seven matching, expandable cards connect technical problem-solving, research, leadership, teamwork, mentoring, and operations to specific evidence.
- **Verified technical achievement** - first place in Brunel’s Java Intro HackerRank competition is supported by the exact final-challenge completion time.
- **Separated experience** - professional internships and part-time work have distinct recruiter-friendly sections.
- **Personal layer** - an interactive card grid introduces painting, art history, travel, target shooting, Muay Thai, networking, and Tayeba’s art business.
- **Purposeful movement** - project filters animate, the LifeOS board tilts gently, impact cards respond in 3D, personal cards use subtle parallax, and hover states reward exploration.
- **Downloadable CV** - a one-page PDF profile is generated and bundled with the production build.
- **Accessibility details** - semantic HTML, keyboard-visible focus states, reduced-motion support, live filter feedback, and a skip link.

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

## Public deployment

The production website is deployed through GitHub Actions to:

**https://tayebakhan.github.io/tayeba-portfolio/**

Every push to `main` installs the locked dependencies, creates a Vite production build, and publishes the `dist` directory to GitHub Pages. The Vite base path changes only inside GitHub Actions, so local builds and the private Sites deployment continue to use root-relative assets.

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

### Personal without losing focus

The site gives recruiters a clear technical story first, then reveals creative and sporting interests through an interactive card grid. Verified GitHub, LinkedIn, and Instagram links are included; unverified contact information is still omitted.

### Placement interest without dominating the introduction

The hero establishes identity and technical direction first. Placement interest appears later beside the main recruiter action, where it is useful without making the opening feel like a job-board profile.

## Next improvements

- Add a verified email address when ready for recruiter outreach.
- Replace the generated profile PDF with the final ATS-reviewed placement CV.
- Add repository and demo links to each completed project.
- Add real screenshots or short product walkthroughs once project interfaces are final.
- Run and record Lighthouse and screen-reader checks before public launch.

## Author

Designed and built by **Tayeba Khan**, a BSc Computer Science (Artificial Intelligence) student at Brunel University London.
