# Search and results pattern

- **ID:** `pattern.search-results`
- **Status:** `stable`
- **Version:** `1.0.0`
- **Example:** [`src/pages/search-results.tsx`](../../src/pages/search-results.tsx)

## What

People enter a plain-language query, submit it, and inspect a short list of matching records. The page makes the next useful action clear without hiding the search controls.

Use this for a bounded collection such as help articles, products, records, or documents. It is not a replacement for faceted search, a data grid, or an advanced query builder.

## User goal and structure

The primary user wants to find a record and open it. The page contains, in order:

1. one page heading and a short explanation;
2. a labeled search field and submit button;
3. an inline validation message when the query is blank;
4. a status summary and result list;
5. a recovery action when the request fails or returns no matches.

The reference example uses local data so every state is deterministic. A consuming application replaces that data lookup with its own service.

## Behavior contract

1. On first visit, show the instructions and an empty result region.
2. A blank submission does not request data. Keep the field focused and explain what is needed.
3. A nonblank submission shows loading, then matching results.
4. A query with no matches shows an honest empty state and keeps the query available to edit.
5. A request failure shows the error and a retry action. The user can edit the query before retrying.
6. Selecting a result shows a confirmation in the example. A real application navigates to or opens the selected record.

The example recognizes `empty` as a deterministic no-match query and `error` as a deterministic failure so reviewers can inspect those states without a backend.

## Accessibility and responsive behavior

- Use one `main` landmark, one `h1`, and a named form.
- Associate the visible label, validation message, and field with the input.
- Announce loading, result counts, empty, error, and success text through a polite live region.
- Keep the submit control keyboard reachable and visibly focused.
- Do not rely on color alone for errors or status.
- Let the form and results stack at narrow widths; nothing essential is hidden or horizontally scrolled.

## Implementation contract

The implementation must own a stable `search-results-form` label, `search-query` input, `search-submit` button, and `search-status` live region. Data fetching may change, but the observable states and recovery actions must remain.

It may customize record fields, wording, routing, and visual tokens. It must not assume that a search always returns results, that network access succeeds, or that a mouse is available.

## Delivery artifacts

- [User story](./artifacts/user-story.md)
- [Acceptance criteria](./artifacts/acceptance-criteria.md)
- [Developer implementation brief](./artifacts/implementation-brief.md)
- [Tester scenarios](./artifacts/test-scenarios.md)
- [Test cases](./artifacts/test-cases.md)
- [Accessibility guidance](./artifacts/accessibility.md)

## Verification

- Automated: `pnpm lint`, `pnpm build`, `git diff --check`, and JSON validation for the catalog.
- Manual: inspect initial, loading, normal, empty, error, validation/recovery, success, keyboard, and narrow-width states using the example's deterministic queries.
