# Sidebar navigation workflow

## Purpose

Use this workflow when people need a grouped, deeper page map beside the work they are doing. Header holds broad destinations, Sidebar holds the section map, the mobile menu gathers the Sidebar links, and Footer holds supporting links.

## Structure

```text
SkipLink → Header → PageBody(Sidebar + Main) → Footer
```

Main remains the first content region in the PageBody reading order. Sidebar is hidden on narrow screens because the Header's mobile menu provides the same destinations.

## What must remain true

- Sidebar has a distinct accessible name.
- Group labels and links remain understandable without visual styling.
- The active page is marked in the visible rail.
- The same grouped links appear in a named mobile-menu section.
- Sidebar does not become a second Header or duplicate broad navigation.
- Footer remains outside the rail and supports the page.

## When to choose another slice

Choose [Simple navigation](./navigation-simple.md) when a persistent page map does not earn its width. Choose [Secondary navigation](./navigation-secondary.md) when a short peer-link row is enough.

## Worked artifacts

See the [worked React reference-page artifacts](../reference-pages/) for the user story, acceptance criteria, design brief, implementation brief, accessibility guidance, tester scenarios, test cases, and definition-of-done record covering this page family.

## Example

- Route: `/navigation/sidebar`
- Source: [`src/pages/navigation-sidebar.tsx`](../../../src/pages/navigation-sidebar.tsx)
