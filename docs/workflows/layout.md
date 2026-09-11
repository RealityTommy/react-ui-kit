# Layout workflow slice

> Four focused reference pages showing how available width changes the content area.

This slice is for reviewing the layout decision, not memorizing a largest possible column count. The running React pages make the arrangements visible; this document records the shared behavior and review expectations for the repository.

## Choose a layout reference

Open the running reference application and visit:

- `/layouts/header-only` — one primary content area with Header and Footer.
- `/layouts/secondary` — a primary content area below a row of related peer links.
- `/layouts/sidebar` — a primary content area beside persistent grouped navigation.
- `/layouts/full` — SecondaryNav and Sidebar together, leaving the least width for content.

If this document is being read in GitHub rather than the running app, use the route names as the corresponding paths in the reference application. The app pages explain the visible arrangement; this document explains what to review across them.

## Shared layout contract

Every reference page should preserve:

- one meaningful `h1` and one `main` landmark;
- a clear primary content region;
- one-column content at narrow widths;
- wider columns only when the cards remain readable and their labels and actions fit;
- no horizontal overflow at a 320px viewport;
- a reading order that still makes sense when content stacks;
- consistent alignment between Header, content, supporting navigation, and Footer;
- responsive behavior that is part of the initial layout choice, not a desktop fix added later.

## How to choose columns

Column count is a limit, not a target. Start with one vertical stack, then add columns only when the available width and content justify them.

Consider:

1. **Content shape:** long headings, descriptions, metadata, and actions need more room than short labels.
2. **Available width:** Header-only pages have more room than pages that also reserve space for SecondaryNav or Sidebar. Full uses both navigation layers and therefore has the tightest content area.
3. **Reading order:** when the grid becomes one column, the sequence should still tell the right story.
4. **Interaction:** buttons, links, focus indicators, and status text must remain usable at every width.
5. **Container boundaries:** page-wide grids can respond to the viewport; grids inside a constrained region should respond to that region instead.

The largest number that fits is not automatically the recommended number. A quieter, more readable grid is often the better choice.

## Responsive review

Review each reference at these stages:

- **Narrow:** content stacks into one column, navigation remains reachable, and nothing is clipped or horizontally scrolled.
- **Growing:** columns appear only when their contents can remain comfortable to scan and use.
- **Wide:** additional room improves grouping without creating oversized gaps or making related content feel disconnected.
- **Constrained:** when a Sidebar or split region reduces the available width, the inner content responds to that region rather than pretending it has the full viewport.

## Verification checklist

A layout slice is credible when a reviewer can confirm:

- the visible arrangement matches the page's explanation;
- each layout uses only the navigation and supporting regions it needs;
- the mobile version is a deliberate reading order, not merely a collapsed desktop grid;
- cards remain readable at the documented maximum;
- keyboard focus and landmarks remain clear;
- the page has no horizontal overflow at 320px;
- the source page and shared components agree about the responsive behavior.

## Worked artifacts

See the [worked React reference-page artifacts](./reference-pages/) for a complete beginner example covering the user story, acceptance criteria, design brief, implementation brief, accessibility guidance, tester scenarios, test cases, and definition-of-done record for these layout pages.

## Related repository guidance

- [Pattern contract](../patterns/pattern-template.md) — the contract a reusable layout or workflow should satisfy.
- [Navigation workflow slice](navigation/) — the navigation arrangements that change the content width.
- [Consumer guide](../consumer-guide.md) — how to copy the implementation into an application.
- [Roadmap](../roadmap.md) — how this slice fits before split-view and the later end-to-end proof.
