# `layout/` — hand-written layout primitives

This folder holds components authored in-repo, following the
conventions below. Reference implementations:

- `container.tsx` — the simplest example (variants + cva)
- `main.tsx`, `footer.tsx`, `page-body.tsx` — preset components (no variants, no cva)
- `secondary-nav.tsx` — preset with LayoutProvider integration
- `sidebar/` — multi-file component with barrel
- `header/` — multi-file component with barrel (includes MobileNav, SkipLink)
- `layout-provider.tsx` — shared config context
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

Header, Main, Footer, PageBody, and SecondaryNav share a single
`size` prop with two values:

- **`"contained"`** (default) — Container `2xl` (~1536px max-width).
  Keeps page chrome aligned across every page in the kit.
- **`"full"`** — edge-to-edge with horizontal padding only. Use for
  full-bleed dashboards, hero sections, or marketing pages.

Keep all chrome components in sync (`"contained"` together, or `"full"`
together) so the page reads with one visual rhythm. Mixing is
technically allowed but should be a deliberate design choice, not a
default.

## Composition patterns

### No sidebar (Home, article, marketing)

Main owns the width cap directly:

```tsx
<Header />
<Main size="contained">…</Main>
<Footer />
```

### With sidebar (docs, dashboard)

`PageBody` owns the width cap so Sidebar + Main together stay aligned
with Header/Footer above. Main goes `size="full"` inside so it doesn't
double-cap:

```tsx
<Header />
<PageBody size="contained">
  <Sidebar aria-label="Docs" />
  <Main size="full">…</Main>
</PageBody>
<Footer />
```

### With secondary tabs above main

SecondaryNav sits between Header and Main (or Header and PageBody).
Reads its items from LayoutProvider so the mobile drawer picks them up
too:

```tsx
<LayoutProvider secondaryNav={sectionTabs} secondaryNavLabel="Docs">
  <Header />
  <SecondaryNav aria-label="Docs" />
  <Main>…</Main>
</LayoutProvider>
```

## LayoutProvider — shared config for multi-slot components

Some components (`SecondaryNav`, `Sidebar`) need to appear in **two
places at once**: their dedicated desktop slot, AND inside Header's
mobile drawer. `LayoutProvider` centralizes their config so consumers
don't pass items twice.

```tsx
<LayoutProvider
  secondaryNav={sectionTabs}
  secondaryNavLabel="Documentation"   // drawer heading, matches aria-label
  sidebarNav={sidebarEntries}
  sidebarNavLabel="On this page"      // drawer heading
  activeHref={pathname}
>
  <Header />
  <SecondaryNav aria-label="Documentation" />
  <PageBody>
    <Sidebar aria-label="On this page" />
    <Main size="full">…</Main>
  </PageBody>
</LayoutProvider>
```

**Rules of thumb:**
- Explicit props on `SecondaryNav` / `Sidebar` override context.
- Provider is optional — components work with just props too.
- `secondaryNavLabel` / `sidebarNavLabel` control the drawer section
  headings. Set them alongside items when using the provider.
- `aria-label` on the components themselves is still required — it's
  the landmark name for screen readers, independent of the drawer
  heading (usually you'll set both to the same value).

## Navigation types (NavLeaf, NavParent, NavGroup)

A discriminated union covers three shapes:

- **`NavLeaf`** — real link: `{ href, label, external?, icon? }`. Every
  actual navigation target.
- **`NavParent`** — dropdown trigger: `{ label, icon?, children: NavLeaf[] }`.
  One level deep, no href, only meaningful in Header's primary nav.
- **`NavGroup`** — labeled group of leaves: `{ label, items: NavLeaf[] }`.
  Only used by Sidebar for section headings.

**Where each type is accepted:**

| Consumer | Type |
| --- | --- |
| `Header.nav` | `NavItem[]` (= `(NavLeaf \| NavParent)[]`) |
| `Footer.links` | `NavLeaf[]` |
| `SecondaryNav.items` | `NavLeaf[]` |
| `Sidebar.items` | `(NavLeaf \| NavGroup)[]` |
| `LayoutContext.secondaryNav` | `NavLeaf[]` |
| `LayoutContext.sidebarNav` | `(NavLeaf \| NavGroup)[]` |

Only Header supports dropdowns. Only Sidebar supports groups. Both
patterns are the "hierarchy primitive" for their respective place —
don't nest them.

**Icons** (optional on every `NavLeaf` / `NavParent`) are Lucide
components:

```tsx
import { Home, Book } from "lucide-react"
<Header
  nav={[
    { href: "/", label: "Home", icon: Home },
    {
      label: "Docs",
      icon: Book,
      children: [
        { href: "/docs/intro", label: "Intro" },
      ],
    },
  ]}
/>
```

Any icon-shaped React component (`(props) => JSX`) satisfies
`LucideIcon` — bring your own SVG if needed.

## Mobile drawer hierarchy

Header's `MobileNav` stacks up to three sections inside the drawer,
each its own `<nav>` landmark:

1. **Primary** — always present. Renders `Header.nav`. `NavParent`
   items appear as small-caps labels with indented children (no
   dropdown on touch).
2. **{secondaryNavLabel}** — rendered when `LayoutContext.secondaryNav`
   is set. Section heading uses the label; falls back to "Section".
3. **{sidebarNavLabel}** — rendered when `LayoutContext.sidebarNav`
   is set. Groups render as small-caps sub-labels with indented items.
   Falls back to "Pages".

Visual hierarchy uses small-caps at every level, sized to communicate
depth:

- `SectionHeading` (landmark boundary) — biggest
- `SubGroupLabel` (NavParent labels, NavGroup labels) — smaller +
  lighter weight, followed by indented children (`pl-6`)
- `DrawerLink` — base text size

## Exports

When using cva, always export `{ ComponentName, componentVariants }`.
The variants export is a plain function, which triggers a
`react-refresh` lint warning — that's expected and accepted (see
`CONTRIBUTING.md`).

When not using cva, export `{ Component, type ComponentProps }` so
consumers can type their own wrappers.

Layout-provider follows the same "accepted warning" pattern for its
`useLayout` hook export co-located with `LayoutProvider`.

## When to use a folder vs. a single file

- **Single file** (`container.tsx`, `main.tsx`, `footer.tsx`,
  `secondary-nav.tsx`, `page-body.tsx`, `layout-provider.tsx`) — one
  component, one file. Use this by default.
- **Folder** (`header/`, `sidebar/`) — the component has ~3+ concerns
  worth splitting (Header has SkipLink + MobileNav + main composition;
  Sidebar has room to grow). Include a barrel `index.ts` with the
  public API and any re-exports of shared types.

## Shared types

Types used by two or more layout components live in `types.ts`.
Currently: `NavLeaf`, `NavParent`, `NavItem` (union), `NavGroup`, plus
the `isNavParent` and `isNavGroup` type guards. When a type graduates
from one-consumer to two-consumers, move it and update the previous
location to re-export from `types.ts` for backward compatibility.

## A11y baseline

Non-negotiable for anything in this folder:

- Semantic HTML first (`<header>`, `<nav>`, `<main>`, `<footer>`,
  `<aside>`)
- ARIA labels on landmarks (`<nav aria-label="Primary">`)
- Screen-reader hints for icon-only interactive elements
- `focus-visible:` (not `focus:`) for focus rings
- Reflow at 320px viewport width — never break
- Skip links for any page-level layout (see `header/skip-link.tsx`)
- External links: `target="_blank" rel="noopener noreferrer"` +
  `<span className="sr-only"> (opens in new window)</span>` (WCAG G201)
- Icons rendered alongside text use `aria-hidden="true"` (the label
  is the accessible name)
- Icon-only interactive elements use `aria-label` for the accessible
  name (see Sidebar's icon-only variant)

If a component has complex interaction (dialog, menu, disclosure),
build on top of the React Aria primitives in `ui/` rather than
rolling your own.

## React Aria trigger gotcha

Components like `DropdownMenuTrigger` and `TooltipTrigger` from
`react-aria-components` require their trigger child to be either an
RAC `Button` or wrapped in `<Pressable>`. A plain `<button>` renders
visually but silently no-ops as a trigger (no `aria-haspopup`, no
keyboard wiring). Wrap accordingly:

```tsx
import { Pressable } from "react-aria-components"

<DropdownMenuTrigger>
  <Pressable>
    <button type="button">Open</button>
  </Pressable>
  <DropdownMenu>…</DropdownMenu>
</DropdownMenuTrigger>
```
