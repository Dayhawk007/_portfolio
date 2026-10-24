# Ayush Chandwani — Portfolio

A single-page developer portfolio for Ayush Chandwani. The site presents professional experience, selected projects, automatically derived skills, and contact channels in a focused monochrome interface.

**Live site:** [dayhawk007.github.io/_portfolio](https://dayhawk007.github.io/_portfolio)

## Overview

This is a Create React App project styled with Tailwind CSS and animated with Framer Motion. The experience is intentionally content-led: a fixed navigation bar guides readers through five sections, while small reveal and hover transitions provide feedback without competing with the work.

| Area | Source of truth |
| --- | --- |
| App composition and mobile-menu state | `src/App.js` |
| Global behavior and reveal utility | `src/index.css` |
| Navigation and page sections | `src/components/` |
| Portfolio content | `src/data/projects.json`, `src/data/experiences.json`, `src/data/skills.json` |
| Visual conventions and contributor guidance | [DESIGN_STYLE_GUIDE.md](DESIGN_STYLE_GUIDE.md) |

## Stack

- React 19 and Create React App
- Tailwind CSS 3
- Framer Motion
- Static JSON content files
- GitHub Pages deployment via `gh-pages`

## Local development

### Prerequisites

- Node.js 18 or newer
- npm

### Run the site

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Changes to source files reload automatically.

### Useful commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server. |
| `npm test` | Run the React test suite in watch mode. |
| `npm run build` | Create an optimized production build in `build/`. |
| `npm run deploy` | Build and publish the site to GitHub Pages. |

## Content updates

Portfolio content is deliberately separated from presentational components.

- Add, remove, or edit project cards in `src/data/projects.json`.
- Update timeline entries in `src/data/experiences.json`.
- Update the current, profile-backed skill set in `src/data/skills.json`.
- Update contact destinations in `src/components/Contact.js`.

Keep descriptions concise, outcome-oriented, and plain-text. Project links are opened in a new tab with `noopener noreferrer` protection.

## Project structure

```text
src/
├── components/       # Navbar and the five portfolio sections
├── data/             # Projects and experience content
├── App.js            # Section order, menu state, intersection observer
├── index.css         # Tailwind layers and global reveal/scroll behavior
└── App.css           # Legacy Create React App stylesheet (not imported)
public/               # HTML shell, metadata, icons, manifest
tailwind.config.js    # Font and animation extensions
```

## Design and contribution conventions

The visual language is a high-contrast, editorial monochrome system with sparse blue/purple accent atmosphere. Before changing layout, typography, animation, or components, follow the [design and style guide](DESIGN_STYLE_GUIDE.md). It records the existing tokens, responsive patterns, motion rules, accessibility guardrails, and component recipes so new work remains cohesive.

## Deployment

The `homepage` field points to the GitHub Pages location. To publish from an appropriately configured repository:

```bash
npm run deploy
```

This runs the production build and publishes `build/` with `gh-pages`.

## Notes for maintainers

- Preserve the section IDs (`about`, `experience`, `projects`, `skills`, `contact`), since navigation and the primary call to action rely on them.
- The app uses both the global `.section-fade` observer and Framer Motion. Avoid layering multiple entrance effects on the same element unless the resulting motion is deliberately tested.
- `App.css` contains untouched Create React App starter styles and is currently not imported; avoid treating it as part of the active design system.
