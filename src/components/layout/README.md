# `layout/` — hand-written layout primitives

This folder holds components authored in-repo, following the
conventions below. Reference implementations:

- `container.tsx` — the simplest example (variants + cva)
- `main.tsx`, `footer.tsx`, `page-body.tsx`, `page-shell.tsx` —
  preset components (no variants, no cva)
- `secondary-nav.tsx` — preset with LayoutProvider integration and
  Nova pill styling on real anchor navigation
- `sidebar/` — multi-file component with barrel; Nova visual language
- `header/` — multi-file component with barrel (includes MobileNav, SkipLink)
- `layout-provider.tsx` — shared config context
- `split-pane.tsx` — responsive main + secondary content layout
- `columns.tsx` — responsive equal-width grid; use
  `responsive="container"` when its breakpoints should follow the
  containing region instead of the viewport
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

**PageShell has no `size` prop** — its only job is viewport height
(`min-h-svh flex flex-col` so Footer pins to the bottom on short
pages). Width behavior belongs to the inner chrome.

## Composition patterns

Every layout should start with `PageShell` as the outermost wrapper —
without it, short pages leave the Footer floating mid-viewport instead
of pinning to the bottom.

### No sidebar (Home, article, marketing)

Main owns the width cap directly. Its `flex-1` grows it inside
PageShell so Footer sits at the viewport bottom.

```tsx
<PageShell>
  <SkipLink />
  <Header />
  <Main size="contained">…</Main>
  <Footer />
</PageShell>
```

### With sidebar (docs, dashboard)

`PageBody` owns the width cap so Sidebar + Main together stay aligned
with Header/Footer above. Main goes `size="full"` inside so it doesn't
double-cap. PageBody's `flex-1` grows the Sidebar + Main pair inside
PageShell.

```tsx
<PageShell>
  <SkipLink />
  <Header />
  <PageBody size="contained">
    <Sidebar aria-label="Docs" />
    <Main size="full">…</Main>
  </PageBody>
  <Footer />
</PageShell>
```

### With secondary tabs above main

SecondaryNav sits between Header and Main (or Header and PageBody).
Reads its items from LayoutProvider so the mobile drawer picks them up
too:

```tsx
<LayoutProvider secondaryNav={sectionTabs} secondaryNavLabel="Docs">
  <PageShell>
    <Header />
    <SecondaryNav aria-label="Docs" />
    <Main>…</Main>
    <Footer />
  </PageShell>
</LayoutProvider>
```

### Full docs shell (SecondaryNav + Sidebar)

Combines everything. LayoutProvider sits outside PageShell so its
context is available to Header (for the mobile drawer) as well as
SecondaryNav and Sidebar.

```tsx
<LayoutProvider
  secondaryNav={sectionTabs}
  secondaryNavLabel="Documentation"
  sidebarNav={sidebarEntries}
  sidebarNavLabel="On this page"
  activeHref={pathname}
>
  <PageShell>
    <SkipLink />
    <Header />
    <SecondaryNav aria-label="Documentation" />
    <PageBody>
      <Sidebar aria-label="On this page" />
      <Main size="full">…</Main>
    </PageBody>
    <Footer />
  </PageShell>
</LayoutProvider>
```

## PageShell — sticky footer wrapper

`PageShell` is the outermost element on every page. Its job is a
single CSS pattern:

```tsx
<div className="flex flex-col min-h-svh">{children}</div>
```

Why `min-h-svh` and not `h-svh`:
- `min-h-` (not `h-`) lets tall pages grow past the viewport instead
  of capping page height and forcing internal scroll.
- `svh` (not `vh`) uses the small-viewport-height unit so iOS Safari
  doesn't overshoot when the URL bar retracts.

For the `flex-1` grow to kick in, one child of PageShell needs to
claim the remaining space. `Main` already carries `flex-1 min-w-0`;
`PageBody` carries `flex-1 h-full` for Sidebar layouts. Single-column
and Sidebar layouts both just work.

PageShell has no `size`, no variants, no other props beyond `children`
and `className`. If you need to customize width, that belongs on the
inner components.

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
  <PageShell>
    <Header />
    <SecondaryNav aria-label="Documentation" />
    <PageBody>
      <Sidebar aria-label="On this page" />
      <Main size="full">…</Main>
    </PageBody>
    <Footer />
  </PageShell>
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
- Provider sits **outside** PageShell so Header (inside PageShell) can
  still consume the context.

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
`LucideIcon` — bring your own SVG if needed (see CONTRIBUTING for the
brand-icon inline-SVG pattern).

## SecondaryNav — Nova pill styling on real anchors

SecondaryNav renders a shadcn Nova "pill" tab row inside a muted
rounded tray, but is built on real `<a>` anchors — not React Aria
Tabs. The `ui/tabs.tsx` primitive is React Aria under the hood and
manages selection state internally; it can't drive anchor navigation
via `asChild` the way vanilla shadcn/Radix Tabs can. Nesting an `<a>`
inside a `role="tab"` element also produces invalid ARIA.

Rule: use `ui/tabs.tsx` for real tab-panel UIs (settings screens,
preview/code toggles). For navigate-between-pages scenarios like
SecondaryNav, hand-roll pill classes on `<nav>` + `<a>` so
middle-click, Cmd+click, browser tooltips, and crawlability all work.

Structural pattern for a hugged widget that aligns with page content
(SecondaryNav uses this):

```
<nav> full-width landmark, py-3 breathing room
  <Container> page-aligned gutter (matches Header/Footer)
    <div tray> inline-flex w-fit — hugs its own children flush-left
      <a>...<a>
```

You can't put `w-fit` and `max-w-2xl mx-auto` on the same element and
expect both to work. Three layers keeps concerns separated.

## Sidebar — Nova visual language

Sidebar uses full-row `rounded-md` fill on hover/active (`bg-muted`),
not left-border accent. Group headings use
`text-xs font-medium text-muted-foreground/70` — Nova's softer
treatment. Uses existing `--muted` / `--border` / `--foreground`
tokens rather than a dedicated `--sidebar-*` set, so any theme swap
Just Works.

Public API preserved: `aria-label`, `items`, `activeHref`, `variant`.
LayoutProvider integration preserved.

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
  `secondary-nav.tsx`, `page-body.tsx`, `page-shell.tsx`,
  `layout-provider.tsx`) — one component, one file. Use this by default.
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
