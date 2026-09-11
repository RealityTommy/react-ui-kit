# Simple navigation workflow

## Purpose

Use this workflow when one primary navigation is enough. Header holds broad destinations, the mobile menu preserves those destinations on narrow screens, and Footer holds supporting links.

## Structure

```text
SkipLink → Header → Main → Footer
```

## What must remain true

- Header has one named primary navigation landmark.
- Primary links and parent groups work at larger widths.
- The mobile menu keeps primary links available in one focused drawer.
- Footer links remain supporting navigation.
- SkipLink moves focus to Main.
- Every interactive link has visible keyboard focus.

## When to choose another slice

Choose [Secondary navigation](./navigation-secondary.md) when people need a short list of peer pages inside a section. Choose [Sidebar navigation](./navigation-sidebar.md) when people need grouped, deeper page links beside Main.

## Example

- Route: `/workflows/navigation/simple`
- Source: [`src/pages/navigation-simple.tsx`](../../../src/pages/navigation-simple.tsx)
