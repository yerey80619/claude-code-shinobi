# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (uses Turbopack)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Run all tests:** `npm run test`
- **Run single test:** `npx vitest run src/components/ui/Button/Button.test.tsx`
- **Test UI:** `npm run test:ui`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header, dark mode toggle)
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles and Tailwind theme tokens
│   ├── preview/
│   │   └── page.tsx        # Component preview page
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [slug]/
│           ├── page.tsx    # Individual blog post page
│           └── BlogPost.module.css
├── components/
│   ├── BlogSidebar.tsx     # Blog sidebar (categories, newsletter)
│   ├── DarkModeToggle.tsx  # Dark/light mode toggle
│   └── ui/
│       └── Button/
│           ├── Button.tsx
│           └── Button.test.tsx
├── hooks/                  # Reuseable hooks
├── lib/
│   ├── queries.ts          # GraphQL query strings
│   ├── types.ts            # TypeScript interfaces
│   └── sanitize.ts         # HTML sanitization (DOMPurify)
└── test/
    ├── setup.ts            # Vitest setup (jest-dom matchers)
    └── vitest.d.ts         # Type declarations for vitest
```

## Architecture

This is a Next.js 15 blog app ("Shinobi") using the App Router, React 19, Tailwind CSS v4, and TypeScript.

### Data Layer

Blog content is fetched from **Hygraph** (headless CMS) via GraphQL POST requests using raw `fetch` (no GraphQL client library). The endpoint is configured via `HYGRAPH_ENDPOINT` in `.env`. Responses are revalidated every 3600 seconds via Next.js ISR (`next: { revalidate: 3600 }`).

- `src/lib/queries.ts` — GraphQL query strings (`GET_BLOG_POSTS`, `GET_SINGLE_POST`)
- `src/lib/types.ts` — TypeScript interfaces (`BlogPost`)
- `src/lib/sanitize.ts` — Server-side HTML sanitization using DOMPurify + JSDOM before rendering blog post content with `dangerouslySetInnerHTML`

### Routes

- `/` — Landing page (client component)
- `/blog` — Blog listing page (server component, fetches all posts)
- `/blog/[slug]` — Individual blog post (server component, fetches by slug)
- `/preview` — Component preview page

### Testing

Vitest with jsdom environment and `@testing-library/react`. Setup file at `src/test/setup.ts` extends expect with jest-dom matchers. Path aliases (`@/*`) resolve via `vite-tsconfig-paths`.

### Styling

Tailwind CSS v4 with custom theme tokens (CSS variables): `--color-primary`, `--color-secondary`, `--color-accent`, `--color-success`, `--color-warning`, `--color-danger`, `--color-background`, `--color-surface`, `--color-foreground`, `--color-muted`, `--color-border`. Dark mode toggled via `.dark` class on `<html>`. Component-level styles use CSS Modules (e.g., `BlogPost.module.css`).

### UI Components

- `src/components/ui/Button/Button.tsx` — Button with variants: primary, secondary, success, warning, danger
- `src/components/DarkModeToggle.tsx` — Client component using lucide-react icons
