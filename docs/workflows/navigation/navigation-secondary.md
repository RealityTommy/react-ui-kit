# Secondary navigation workflow

## Purpose

Use this workflow when a section has a short list of peer pages. Header holds broad destinations, SecondaryNav holds the current section's peers, the mobile menu gathers both, and Footer holds supporting links.

## Structure

```text
SkipLink → Header → SecondaryNav → Main → Footer
```

## What must remain true

- SecondaryNav uses real links, not tab-panel state.
- The current page is marked on the active link.
- The list stays short and contains peer pages.
- The same links appear in a named mobile-menu section.
- SecondaryNav can disappear visually on narrow screens without removing its destinations.
- Header remains the primary navigation rather than becoming a duplicate of SecondaryNav.

## When to choose another slice

Choose [Simple navigation](./navigation-simple.md) when peer-page navigation is not needed. Choose [Sidebar navigation](./navigation-sidebar.md) when the section needs grouped, deeper page links.

## Example

- Route: `#/workflows/navigation/secondary`
- Source: [`src/pages/navigation-secondary.tsx`](../../../src/pages/navigation-secondary.tsx)
