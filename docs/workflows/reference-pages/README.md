# Worked artifacts: React reference pages

This folder is a complete beginner example of how one visible React reference experience can be described before, during, and after implementation.

It is intentionally more detailed than a blank template. The artifacts describe the current pages in `src/pages/`, including their visible structure, routes, responsive behavior, accessibility expectations, implementation boundaries, and verification evidence.

## Start here

Read the artifacts in this order:

1. [User story](./user-story.md) — the reason this work exists.
2. [Acceptance criteria](./acceptance-criteria.md) — what the experience must do.
3. [Design brief](./design-brief.md) — what the pages should look like and why.
4. [Implementation brief](./implementation-brief.md) — how the React pages are structured.
5. [Accessibility guidance](./accessibility.md) — what must remain usable.
6. [Tester scenarios](./test-scenarios.md) — repeatable situations to check.
7. [Test cases](./test-cases.md) — individual checks with IDs.
8. [Definition of done](./definition-of-done.md) — what was verified and what remains limited.

The blank, reusable versions live in [`templates/`](../../../templates/). These files show how those templates can be completed for real work. The package is linked from the [navigation workflow slices](../navigation/) and the [layout workflow slice](../layout.md).

## What is in scope

This example covers the current shareable React reference app:

- Home: `/`
- Layout references: `/layouts/header-only`, `/layouts/secondary`, `/layouts/sidebar`, `/layouts/full`
- Navigation references: `/navigation/header`, `/navigation/secondary`, `/navigation/sidebar`, `/navigation/footer`

The Search and Results page is deliberately excluded because its workflow proof is paused and is documented separately.

## How to read the relationship

The app pages are the visible evidence. These artifacts are the repository record that explains what the evidence means. They are not a replacement for opening the app and checking the behavior yourself.
