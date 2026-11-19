# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server (Astro, default http://localhost:4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built site

No test runner or linter is configured.

## Architecture

Single-page Spanish-language personal portfolio built with Astro 5 (static output), Tailwind CSS v4 (via `@tailwindcss/vite`, no tailwind config file; styles in `src/styles/global.css`), and React 19 for the few interactive islands.

- `src/pages/index.astro` is the only page. It composes sections (`MainSection`, `Experience`, `GoToAction`, `Projects`, `ProjectSecondary`, `AboutMe`), each wrapped in `SectionContainerBase`, with titles via `TitleSection`.
- `src/layouts/Layout.astro` provides the shell: page background gradients, `Header`/`Footer`, and loads Flowbite JS from a CDN script tag (the `flowbite` npm package is also installed).
- Dark mode is class-based (`dark:` variants) and toggled by `ThemeToggle.astro`.
- React islands: `ProfileCard.tsx` (+ `ProfileCard.css`, tilt effect) used in `AboutMe.astro` with `client:visible`, and `ElectricBorder.tsx`. Everything else is `.astro`.
- Content is data-driven: `src/util/ProjectsMain.ts` exports `PROJECTS` (featured, rendered by `Projects.astro`) and `OTHER_PROJECTS` (rendered by `ProjectSecondary.astro`). Each project's `tags` come from `src/util/TagsIcons.ts` (`TAGS`), which maps a tech to its name, class, and an icon component in `src/components/icons/`. To add a technology: create an icon component, then register it in `TAGS`.
- Experience entries are rendered via `ExperienceItem.astro` from `Experience.astro`.

## Conventions

- Path aliases: `@components/*`, `@layouts/*`, `@icons/*` (→ `src/components/icons/*`), `@util/*`, `@i18n/*`. Use these instead of relative imports in `.astro`/`.ts` files. They are declared in two places that must stay in sync: `tsconfig.json` `paths` (editor/types, no `baseUrl` since it is deprecated) and `vite.resolve.alias` in `astro.config.mjs` (Astro 5.4 only reads tsconfig aliases when `baseUrl` is set).
- i18n: Astro native routing, Spanish at `/` and English at `/en/` (`src/pages/index.astro` and `src/pages/en/index.astro` both render `Home.astro`). Short UI strings live in `src/i18n/ui.ts` (use `useTranslations(getLang(Astro))`); long content in data files (`src/util/ProjectsMain.ts`, `src/util/Experience.ts`) as `{ es, en }` objects.
- UI copy is in Spanish; keep new text consistent. `GoToAction` has desktop-only effects (recent commits).
- Static assets (profile images, project screenshots under `public/projects/`) are referenced by absolute `/` paths.
