# ArcadeWorld

ArcadeWorld is a modern, curated discovery platform for independent browser games, game-jam surprises, unusual experiments and AI games. Each listing introduces what a game is, credits its creator, and links to the official place to play at the source.

**Repository:** [https://github.com/ayushcmd/ArcadeWorld](https://github.com/ayushcmd/ArcadeWorld)

---

## Brand System

ArcadeWorld uses a bold three-color visual hierarchy:

- **Lime Green (`#B7F34A`)** — Primary brand accent, active navigation items, main call-to-action buttons, and focus indicators.
- **Light Red (`#FF6B6B`)** — Secondary accent, special badges, notification highlights, and action buttons.
- **Charcoal Black / Grey (`#17191C`)** — Main dark background, surfaces, cards, and overall gaming atmosphere.

Supported by neutral charcoal layers (`#1D2024`, `#252930`, `#303640`) and crisp off-white typography (`#F4F5F7`).

---

## Key Features

- **2,000+ Curated Games:** Comprehensive catalogue across 6 top-level categories:
  - **Puzzle** — Logic, numbers, patterns and spatial reasoning.
  - **Action** — Reflex-driven shooters, fighters and brawlers.
  - **Arcade** — Classic retro, score-attack, and js13k experiments.
  - **Strategy** — Tower defense, tactics, resource and planning games.
  - **Racing & Sports** — High-speed arcade racing and competitive sims.
  - **Simulation** — Sandboxes, idle toys, and system models.
- **AI Playground:** Transparent labelling separating games that feature AI in gameplay from games created with AI assistance, backed by creator disclosures.
- **Hosted Challenge Games:** Owner-authorized standalone challenges playable directly in the browser:
  - *Circle Club* — Draw one continuous loop to score circle accuracy from 0 to 100.
  - *Pulse Lock* — 20-round precision timing challenge with chain multipliers and daily seeds.
  - *Echo Vault* — 12-chamber sequence recall test featuring forward, reverse, and mirror rounds.
  - Pinned CC0 Web build of *Anarch*.
- **Outbound-Link Model:** Clean directory connecting players directly to original game developers. No fabricated ratings, fake play counts, or pirated game embeddings.
- **Privacy First:** No mandatory accounts, no intrusive trackers, local-only storage for hosted game records.
- **Full Accessibility:** Responsive on mobile, tablet, and desktop viewports, with visible keyboard focus rings and semantic HTML.

---

## Tech Stack

- **Static Site Generator:** [Eleventy](https://www.11ty.dev/) (v2) with Nunjucks templates
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3 JIT) + Custom CSS Design Tokens
- **Testing:** [Playwright](https://playwright.dev/) end-to-end smoke and game-challenge suites
- **Deployment:** Cloudflare Pages (deploying `dist/` from `main`)

---

## Quick Start & Local Setup

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/ayushcmd/ArcadeWorld.git
cd ArcadeWorld

# Install dependencies from lockfile
npm ci

# Install Playwright browser dependencies (for testing)
npx playwright install chromium
```

### Development Server

```bash
npm run serve
```

Starts the Tailwind build and Eleventy live-reload server at `http://localhost:8080`.

---

## Commands

| Command | Description |
| --- | --- |
| `npm run serve` | Compiles CSS and starts Eleventy dev server with hot reload. |
| `npm run build:css` | Compiles Tailwind CSS to `dist/css/styles.css`. |
| `npm run validate` | Audits catalogue schema; outputs advisory warnings. |
| `npm run validate:strict` | Enforces strict data integrity (unique URLs, monotonic IDs, licence consistency). |
| `npm run validate:collections` | Validates editorial collection metadata. |
| `npm run build` | Full production build (`validate:strict`, `clean`, `build:css`, `build:catalogue-slugs`, `fetch:screenshots`, `eleventy`). |
| `npm test` | Runs complete Playwright test suite against production build. |
| `npm run test:games` | Runs test suite for hosted challenge games (`tests/challenge-games.spec.js`). |

To preview a completed build locally without Eleventy dev server:

```bash
npx http-server dist -p 4173
```

---

## Project Structure

```text
ArcadeWorld/
├── src/
│   ├── _data/          # Catalogue (games.js, tags.js, site.js, homepage.js)
│   ├── _includes/      # Nunjucks layout fragments (base.njk, brand-mark.njk, game-card.njk)
│   ├── static/         # Public static assets (logos, favicon, robots.txt, llms.txt, play/circle-club/)
│   ├── styles/         # styles.css (Tailwind directives and design tokens)
│   └── *.njk           # Eleventy page templates (index, about, game, category, submit, etc.)
├── games/              # Source code for maintained hosted games (pulse-lock, echo-vault, _shared)
├── scripts/            # Data pipeline, validation and screenshot utilities
├── functions/          # Cloudflare Pages Functions (410 handling)
├── tests/              # Playwright test suites (smoke, challenge-games, directory-discovery, etc.)
├── docs/               # Architecture decisions (docs/adr/) and project documentation
├── dist/               # Production build output directory (gitignored)
├── tailwind.config.js  # Tailwind CSS configuration with ArcadeWorld tokens
└── .eleventy.js        # Eleventy build configuration and template filters
```

---

## Catalogue & Data Pipeline

The authoritative catalogue lives in [`src/_data/games.js`](src/_data/games.js).

Each game record adheres to the following strict schema:

```javascript
{
  id: 1,
  slug: "hextris",
  name: "Hextris",
  category: "puzzle",
  tagline: "Fast-paced hexagonal puzzle game inspired by Tetris.",
  about: "Rotate the outer hexagon to match falling colored bars...",
  howToPlay: "Use the left and right arrow keys to rotate...",
  keyFeatures: ["Addictive hexagonal mechanics", "Clean minimalist visuals"],
  screenshots: ["/screenshots/hextris.jpg"],
  sourceName: "GitHub",
  sourceUrl: "https://hextris.github.io/hextris/",
  sourceKey: "github:hextris/hextris",
  licence: "GPL-3.0",
  licenceStatus: "osi-approved",
  tags: ["open-source", "quick-fix", "classic"],
  addedDate: "2026-01-15",
  releaseDate: "2014-08-01",
  featured: true
}
```

### Adding New Games

1. Ensure the game has a verifiable, public HTTP(S) play URL and author attribution.
2. Add the entry to `src/_data/games.js` with a unique `sourceKey`, monotonic `id`, and valid tags from `src/_data/tags.js`.
3. Verify data with `npm run validate:strict`.
4. Run `npm run build` to generate the new game pages, tag archives, and sitemap entries.

---

## Deployment

ArcadeWorld is designed to deploy to **Cloudflare Pages**:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 20+

Clean URLs resolve naturally (e.g., `/game/<slug>/` serves `/game/<slug>/index.html`). Legacy URLs are mapped via `dist/_redirects` (301) and Pages Functions (410).

---

## License & Attribution

- **Website Code:** MIT License (see [LICENSE](LICENSE))
- **Brand Assets & Copy:** Copyright © 2026 ArcadeWorld. All rights reserved.
- **Third-Party Games & Media:** Games linked from the directory belong to their respective creators. Catalogue listings do not grant permission to reproduce third-party games or artwork. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md).
