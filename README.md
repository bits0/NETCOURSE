# NETCOURSE

A story-driven networking education game built with React, TypeScript, and Vite.

## Current milestone

**Step 2 — Game Entry & BFree.com** is implemented. The application currently provides:

- The reviewed responsive shell and dark-gray technical design system
- A functional Start Chapter 1 entry and freelancer introduction
- An in-game BFree.com freelance marketplace
- A fictional office equipment-inventory assignment with inspectable details
- Idempotent job acceptance stored for the current browser-tab session
- A clear next objective after acceptance

The accepted assignment uses `sessionStorage`; it survives reloads in the same tab but is not long-term progress storage. Location exploration, networking simulation, guided CLI, story scenes beyond the approved opening, and assessments remain outside this milestone.

## Run locally

```bash
npm install
npm run dev
```

Vite serves the application on port `3000` by default.

## Validate

```bash
npm run lint
npm run typecheck
npm run build
```

Run all three sequentially with:

```bash
npm run validate
```

Use `npm run preview` to inspect the production build locally.

## Architecture

```text
src/
├── components/        Reusable shell, identity, and chapter launcher
├── data/              Typed chapter metadata
├── game/
│   ├── components/    Chapter opening and BFree.com interface
│   ├── data/          Fictional jobs and location integration IDs
│   ├── state/         Session-scoped Chapter 1 acceptance state
│   ├── ChapterOneGame.tsx
│   ├── game.css
│   └── types.ts
├── pages/             Top-level application views
├── styles/            Primitive, semantic, and component tokens
└── types/             Shared TypeScript contracts
```

`ChapterOneGame` is the integration boundary for later Chapter 1 modules. The accepted job exposes a stable location ID for the future location and exploration milestone without coupling that gameplay to BFree.com.

## Deployment baseline

Vite uses `base: './'` for portable static assets, including GitHub Pages project-site hosting. This is a static frontend with no backend or live AI dependency.
