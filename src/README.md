# `src/` — React application source

This directory contains the React source for the reference application.

## Directory and file map

- `components/` — reusable UI primitives and hand-written layout components.
- `pages/` — route-level reference pages and shared route/navigation data.
- `lib/` — small shared implementation utilities.
- `App.tsx` — history-based route selection and page rendering.
- `main.tsx` — browser entry point that mounts the React app.
- `index.css` — Tailwind entry point, theme tokens, and global styles.

## Component ownership

- `components/ui/` contains shadcn-generated primitives and may be regenerated.
- `components/layout/` contains hand-written layout and navigation behavior.
- `pages/` contains the reference app and is not a consumer API.

## Development

Run these commands from the repository root:

```bash
pnpm dev
pnpm lint
pnpm build
```

When a page or component changes, verify the affected route at a narrow width as well as a desktop width. Keep route and shared navigation data in `pages/index.tsx` accurate when adding or renaming a page.

## Continue

- [Component folders](./components/README.md)
- [Layout components](./components/layout/README.md)
- [Generated UI primitives](./components/ui/README.md)
- [Repository README](../README.md)
