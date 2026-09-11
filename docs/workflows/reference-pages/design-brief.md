# Worked design brief: React reference pages

## What this teaches

A design brief explains the visible experience and the decisions behind it. It gives a beginner enough information to understand the page before looking at JSX or CSS.

## Experience goal

Create a calm, readable reference application where a person can compare page structure and navigation choices without mistaking the examples for a product application.

The app should feel complete on its own. It should also make one lightweight connection to the GitHub repository for people who want the deeper playbook.

## Shared visual structure

Every page uses the same outer rhythm:

```text
PageShell
  SkipLink
  Header
  optional SecondaryNav
  optional PageBody with Sidebar + Main
  Main content
  Footer
```

The exact order and optional regions vary by page. Main content remains the primary reading destination. Supporting navigation earns its place only when it helps people understand or move through the example.

## Route-by-route design

### Home `/`

- Introduces the Application Delivery Kit in plain language.
- Explains that this is the shareable React reference app.
- Provides a light distinction between reviewing the app and reviewing the repository.
- Links to the GitHub repository in a new window.
- Shows three principles: clear pages, useful on smaller screens, and accessible by design.
- Provides a comparison path through Header Only, Secondary, Sidebar, and Full.

### Header Only `/layouts/header-only`

- Uses Header, Main, and Footer.
- Keeps the content area widest because there is no SecondaryNav or Sidebar.
- Demonstrates one-column content first, then progressively wider card grids.
- Shows both supported split-view examples: `third` and `half`.
- Recommends this as the default when one main task is enough.

### Secondary `/layouts/secondary`

- Adds a short row of peer links below Header.
- Uses SecondaryNav for sibling pages, not page headings or arbitrary actions.
- Gives Main less vertical and horizontal attention than Header Only.
- Demonstrates the same split-view choices, while explaining the added navigation cost.

### Sidebar `/layouts/sidebar`

- Adds a persistent grouped Sidebar beside Main.
- Uses Main-first DOM order even though the Sidebar is visible beside it.
- Uses fewer columns in the content area because the rail consumes width.
- Demonstrates only the `half` split view because the page already has a persistent rail.
- Explains that the mobile drawer takes over the Sidebar destinations.

### Full `/layouts/full`

- Combines SecondaryNav with Sidebar and Main.
- Uses the most navigation chrome and leaves the least room for content.
- Uses conservative column counts and only the `half` split view.
- Presents this as an intentional choice for content-heavy applications, not a default.

### Navigation pages

- `/navigation/header` isolates primary navigation.
- `/navigation/secondary` isolates peer-page navigation.
- `/navigation/sidebar` isolates grouped deeper navigation.
- `/navigation/footer` isolates supporting links at the end of a page.

These pages explain one navigation area at a time so beginners can understand each job before seeing the combined layouts.

## Exact responsive configurations

These are the configurations currently used by the React pages. They are part of this example's evidence, not universal recommendations:

- Home principles: `base={1}`, `md={3}`, `gap="lg"`.
- Home layout links: `base={1}`, `sm={2}`, `lg={4}`, `gap="lg"`.
- Header Only example cards: `base={1}`, `sm={2}`, `md={3}`, `lg={4}`, `gap="lg"`.
- Secondary example cards: `base={1}`, `sm={2}`, `md={3}`, `lg={4}`.
- Sidebar example cards: `base={1}`, `sm={2}`, `md={2}`, `lg={3}`.
- Full example cards: `base={1}`, `sm={2}`, `md={2}`, `lg={3}`.
- Header Only and Secondary split examples: `secondarySize="third"` and `secondarySize="half"`.
- Sidebar and Full split examples: `secondarySize="half"` only.

The source files are the final authority for the current implementation. If the source changes, update this worked brief and the related acceptance, test, and completion artifacts together.

## Responsive behavior

- At narrow widths, repeated content begins as one vertical column.
- Header navigation moves into the mobile drawer at the configured breakpoint.
- SecondaryNav and Sidebar are visually replaced by the mobile drawer while preserving their destinations.
- Split panes stack with Main first.
- Cards add columns only at wider breakpoints where their contents remain readable.
- The layout must remain usable at 320px without horizontal overflow.

## Design decisions

- Use the same Header, Footer, and page shell across reference pages so differences are easy to compare.
- Keep “When to use” and “When not to use” parallel so the tradeoff is easy to scan.
- Explain the visible effect before showing implementation terms.
- Keep the app focused on reviewing the experience; put delivery-process detail in repository artifacts.
- Use neutral labels such as Section one and Group one rather than implying a documentation product.

## Related template

There is no standalone blank design template yet. This worked brief is the proposed example for a future reusable design or experience brief. The [implementation brief](../../../templates/implementation-brief.md) and [accessibility guidance](../../../templates/accessibility.md) capture adjacent handoff needs today.
