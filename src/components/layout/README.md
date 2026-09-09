# `layout/` — hand-written layout primitives

This folder holds components authored in-repo, following the
conventions below. Reference implementations:

- `container.tsx` — the simplest example (variants + cva)
- `main.tsx`, `footer.tsx` — preset components (no variants, no cva)
- `header/` — multi-file component with barrel
- `types.ts` — shared types

## The authoring pattern

Every hand-written component in this kit follows the same skeleton.
`cva` is used **only when the component has variants** (multiple visual
modes). Simple presets like Main and Footer skip cva entirely — see
those files for reference.

### Full skeleton with variants (Container-style)

```tsx
/**
 * ComponentName — one-line description.
 *
 * Longer explanation: when to use it, what it composes,
 * any a11y notes worth surfacing at file scope.
 */

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

// ---------------------------------------------------------------
// Variants
// ---------------------------------------------------------------

const componentVariants = cva(
  "base classes here",
  {
    variants: {
      size: { /* ... */ },
    },
    defaultVariants: { size: "default" },
  }
)

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * One-line description of what it renders.
 *
 * @example
 * <ComponentName size="lg">…</ComponentName>
 */
function ComponentName({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof componentVariants>) {
  return (
    <div
      data-slot="component-name"
      data-size={size}
      className={cn(componentVariants({ size, className }))}
      {...props}
    />
  )
}

export { ComponentName, componentVariants }
```

### Skeleton without variants (Footer/Main-style)

For preset components that don't need multiple visual modes, drop cva
entirely. Type props directly and inline the className:

```tsx
type ComponentProps = React.ComponentProps<"div"> & {
  /** Layout width behavior. */
  size?: "contained" | "full"
}

function Component({ className, size = "contained", ...props }: ComponentProps) {
  return (
    <div
      data-slot="component"
      data-size={size}
      className={cn("static classes here", className)}
      {...props}
    />
  )
}

export { Component, type ComponentProps }
```

## The building blocks

- **`cva`** — variant-to-class-string mapper. Use it *only* when a
  component has more than one visual mode. Skip it for presets.
- **`cn()`** from `"cn"` — merges class strings + resolves Tailwind
  conflicts. Always wrap final className output.
- **`data-slot="component-name"`** — stable CSS/JS hook. Never target
  our components by class name; target by `data-slot`.
- **`data-<variant>={value}`** — echoes variant/preset props as
  attributes so consumers can style based on state (`data-size="contained"`,
  `data-size="full"`).
- **`React.ComponentProps<"element">`** — types the base HTML props
  automatically. Better than enumerating.
- **`VariantProps<typeof xVariants>`** — pulls variant prop types
  from the cva config. Single source of truth. Only relevant when
  using cva.
- **`Omit<React.ComponentProps<"element">, "id">`** — use when a prop
  must be enforced by the component (e.g., Main enforces
  `id="main-content"` as the SkipLink target).

## Layout size API (page-chrome consistency)

Header, Main, and Footer share a single `size` prop with two values:

- **`"contained"`** (default) — Container `2xl` (~1536px max-width).
  Keeps page chrome aligned across every page in the kit.
- **`"full"`** — edge-to-edge with horizontal padding only. Use for
  full-bleed dashboards, hero sections, or marketing pages.

Keep all three in sync (`"contained"` together, or `"full"` together)
so the page chrome shares one visual rhythm. Mixing is technically
allowed but should be a deliberate design choice, not a default.

## Exports

When using cva, always export `{ ComponentName, componentVariants }`.
The variants export is a plain function, which triggers a
`react-refresh` lint warning — that's expected and accepted (see
`CONTRIBUTING.md`).

When not using cva, export `{ Component, type ComponentProps }` so
consumers can type their own wrappers.

## When to use a folder vs. a single file

- **Single file** (`container.tsx`, `main.tsx`, `footer.tsx`) — one
  component, one file. Use this by default.
- **Folder** (`header/`) — the component has ~3+ concerns worth
  splitting (Header has SkipLink + MobileNav + main composition).
  Include a barrel `index.ts` with the public API and any re-exports
  of shared types.

## Shared types

Types used by two or more layout components live in `types.ts`.
Currently `NavItem` (Header + Footer). When a type graduates from
one-consumer to two-consumers, move it and update the previous
location to re-export from `types.ts` for backward compatibility.

## A11y baseline

Non-negotiable for anything in this folder:

- Semantic HTML first (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on landmarks (`<nav aria-label="Primary">`)
- Screen-reader hints for icon-only interactive elements
- `focus-visible:` (not `focus:`) for focus rings
- Reflow at 320px viewport width — never break
- Skip links for any page-level layout (see `header/skip-link.tsx`)
- External links: `target="_blank" rel="noopener noreferrer"` +
  `<span className="sr-only"> (opens in new window)</span>` (WCAG G201)

If a component has complex interaction (dialog, menu, disclosure),
build on top of the React Aria primitives in `ui/` rather than
rolling your own.
