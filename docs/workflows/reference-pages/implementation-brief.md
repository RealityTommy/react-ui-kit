# Worked implementation brief: React reference pages

## What this teaches

This is the developer handoff. It translates the accepted visible behavior into concrete source structure without turning the user story into a list of filenames.

## What is being built

A Vite + React + TypeScript reference application with shared layout components and focused pages that demonstrate page and navigation arrangements.

The application uses history-based routes. The pages are reference examples, not the consumer API.

## Source map

- `src/App.tsx` — history router and route rendering boundary.
- `src/pages/index.tsx` — route table and shared navigation/footer data.
- `src/pages/home.tsx` — app introduction and review-surface explanation.
- `src/pages/layouts-header-only.tsx` — Header + Main + Footer layout.
- `src/pages/layouts-secondary.tsx` — SecondaryNav + Main layout.
- `src/pages/layouts-sidebar.tsx` — Sidebar + Main layout.
- `src/pages/layouts-full.tsx` — SecondaryNav + Sidebar + Main layout.
- `src/pages/navigation-header.tsx` — primary Header navigation guide.
- `src/pages/navigation-secondary.tsx` — SecondaryNav guide.
- `src/pages/navigation-sidebar.tsx` — Sidebar guide.
- `src/pages/navigation-footer.tsx` — Footer guide.
- `src/components/layout/` — hand-written kit-owned behavior.
- `src/components/ui/` — replaceable shadcn-generated primitives.

## Composition contract

Use the shared components rather than recreating page chrome in each page:

- Every page uses `PageShell`, `SkipLink`, `Header`, `Main`, and `Footer`.
- Pages with shared navigation data use `LayoutProvider` so desktop and mobile destinations stay aligned.
- Secondary navigation uses real anchors, not the Tabs primitive.
- Sidebar pages use `PageBody` and `<Main size="full">` to avoid double width-capping.
- Main content comes before supporting content in the DOM when a page stacks.
- Layout pages use `Columns` with literal responsive props, beginning at `base={1}`.
- Header-only and Secondary layouts may use `SplitPaneDemo secondarySize="third"` and `"half"`.
- Sidebar and Full layouts use `SplitPaneDemo secondarySize="half"` only.

## What can change

A consuming application may replace labels, route values, card content, services, and visual tokens. It may choose a different router at its application boundary.

Do not copy the demo route table or private demo helpers into a product application unless intentionally studying the reference.

## What must not break

- The visible page structure described in the design brief.
- One meaningful Main landmark and one page `h1`.
- SkipLink targeting `#main-content`.
- Real link navigation and active-page state.
- Mobile drawer replacement for SecondaryNav and Sidebar destinations.
- Main-first reading order and narrow-width reflow.
- The app/repository distinction on Home.

## How to know implementation is done

Run the tester scenarios and test cases in this folder. Then run `pnpm lint`, `pnpm build`, `git diff --check`, and the Markdown/catalog checks. Record the results in the definition-of-done record.

## Related template

See the reusable [implementation brief template](../../../templates/implementation-brief.md).
