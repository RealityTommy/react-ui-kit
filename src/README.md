# `src/` — React implementation

This directory contains the current React reference implementation of the Application Delivery Kit.

## What belongs here

- `components/` — reusable UI primitives and hand-written layout behavior.
- `pages/` — demo pages used to show the current kit in action.
- `lib/` — small shared implementation utilities.
- `App.tsx` — demo application composition and routing boundary.
- `main.tsx` — application entry point.
- `index.css` — Tailwind entry point and semantic theme tokens.

## Ownership boundaries

- Files under `components/ui/` are shadcn-managed and disposable.
- Files under `components/layout/` are hand-written kit behavior.
- Files under `pages/` are reference demonstrations, not a consumer API.
- Application-specific behavior should not be added merely to make one demo page work unless it represents a reusable pattern.

See [`components/README.md`](./components/README.md) for component ownership and [`../docs/consumer-guide.md`](../docs/consumer-guide.md) for copy-in use.

## Development loop

From the repository root:

```bash
pnpm dev
pnpm lint
pnpm build
```

When changing a layout or pattern, verify the relevant demo route at desktop and narrow widths, then update the matching documentation and catalog metadata when the public behavior changes.

## Continue

- [Components guide](./components/README.md)
- [Layout authoring guide](./components/layout/README.md)
- [Repository map](../docs/architecture/repository-map.md)
