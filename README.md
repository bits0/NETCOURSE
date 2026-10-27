# NETCOURSE

A story-driven networking education game built with React, TypeScript, and Vite.

## Current milestone

**Step 1 — Project Foundation** is implemented. The application currently provides:

- A responsive application shell and NETCOURSE project identity
- Reusable dark-gray technical design tokens
- A functional Chapter 1 briefing entry point
- Local font assets, keyboard focus states, and reduced-motion support
- ESLint, strict TypeScript checking, and production build validation

Gameplay, story scenes, networking simulation, guided CLI, progress storage, and assessment logic are intentionally excluded until their assigned milestones.

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
├── components/
│   ├── chapter/       Chapter entry and briefing UI
│   ├── layout/        Reusable application shell
│   ├── BrandMark.tsx
│   └── NetworkSchematic.tsx
├── data/              Typed chapter metadata
├── pages/             Top-level application views
├── styles/            Primitive, semantic, and component tokens
├── types/             Shared TypeScript contracts
├── App.css            Shell and page presentation
├── App.tsx            Route composition
├── index.css          Global browser and accessibility defaults
└── main.tsx           React entry point and local fonts
```

The shell and chapter metadata are separated so later milestones can add exploration, simulation, and assessment modules without restructuring the foundation.

## Deployment baseline

Vite uses `base: './'` for portable static assets, including GitHub Pages project-site hosting. This is a static frontend with no backend or live AI dependency.
