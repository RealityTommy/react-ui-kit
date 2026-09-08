# `layout/` — hand-written layout primitives

This folder holds components authored in-repo, following the
conventions below. Reference implementations: `container.tsx` and
`header/`.

## The authoring pattern

Every hand-written component in this kit follows the same skeleton:

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

## The building blocks

- **`cva`** — variant-to-class-string mapper. Use it whenever a
  component has more than one visual "mode."
- **`cn()`** from `"cn"` — merges class strings + resolves Tailwind
  conflicts. Always wrap final className output.
- **`data-slot="component-name"`** — stable CSS/JS hook. Never
  target our components by class name; target by `data-slot`.
- **`data-<variant>={value}`** — echoes variant props as attributes
  so consumers can style based on state (`data-size="lg"`, etc.).
- **`React.ComponentProps<"element">`** — types the base HTML props
  automatically. Better than enumerating.
- **`VariantProps<typeof xVariants>`** — pulls variant prop types
  from the cva config. Single source of truth.

## Exports

Always export `{ ComponentName, componentVariants }`. The variants
export is a plain function, which triggers a `react-refresh` lint
warning — that's expected and accepted (see `CONTRIBUTING.md`).

## When to use a folder vs. a single file

- **Single file** (`container.tsx`) — one component, one file.
- **Folder** (`header/`) — the component has ~3+ concerns worth
  splitting (e.g., Header has SkipLink + MobileNav + main). Include a
  barrel `index.ts` with the public API and shared types.

## A11y baseline

Non-negotiable for anything in this folder:

- Semantic HTML first (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on landmarks (`<nav aria-label="Primary">`)
- Screen-reader hints for icon-only interactive elements
- `focus-visible:` (not `focus:`) for focus rings
- Reflow at 320px viewport width — never break
- Skip links for any page-level layout

If a component has complex interaction (dialog, menu, disclosure),
build on top of the React Aria primitives in `ui/` rather than
rolling your own.
