# Worked accessibility guidance: React reference pages

## What this teaches

Accessibility guidance identifies how people use the real experience. It is not a promise that a build command can prove everything.

## Page structure

- Each page has one meaningful `h1`.
- Each page uses one `main` landmark with `id="main-content"`.
- Every page includes a SkipLink before the Header.
- Header, SecondaryNav, Sidebar, and Footer landmarks have understandable names where multiple landmarks could otherwise be confusing.
- Main-first DOM order is preserved when Sidebar and split panes stack.

## Navigation

- Header destinations are real links.
- SecondaryNav uses real anchors for page navigation and has a named landmark.
- Sidebar links expose the current page state.
- The mobile drawer provides the destinations hidden from the desktop layout without creating a second competing navigation system.
- Menu and drawer controls work with keyboard input, Escape, and focus return.
- External GitHub links announce that they open in a new window.

## Responsive and visual behavior

- Content reflows at 320px without horizontal scrolling.
- One-column content remains readable and ordered on narrow screens.
- Focus indicators remain visible against the page surface.
- Information is not communicated by color alone.
- Cards, links, and actions have understandable names.
- The layout remains understandable when navigation regions move or stack.

## Review evidence

A reviewer should check the running pages with a keyboard, at 320px, in light and dark themes, and with browser zoom. Source inspection should confirm semantic landmarks and stable hooks, but source inspection alone is not sufficient evidence.

## Related template

See the reusable [accessibility guidance template](../../../templates/accessibility.md).
