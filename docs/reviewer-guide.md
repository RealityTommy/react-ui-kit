# Reviewing the repository

This is the shortest path for someone reviewing the GitHub repository rather than only looking at the running React app.

## First, understand the two review surfaces

The project has two related but different public artifacts:

- **The React reference app** is the front-stage experience. It makes layout, navigation, responsive behavior, accessibility, and visual decisions tangible.
- **The GitHub repository** is the application-delivery playbook. It explains why the system exists, how roles work together, what can be reused, how the React implementation is organized, and how the result is verified.

The app is evidence of the system, not the system's only documentation. The repository is not a requirement that every app visitor needs to understand.

## Choose a review path

### Product, design, or accessibility review

1. Run the [React reference app](../README.md#getting-started).
2. Start at the home page.
3. Compare the layout and navigation pages in the running app.
4. Look for clear hierarchy, sensible mobile reflow, keyboard access, focus, landmarks, and honest layout tradeoffs.
5. Read the [operating philosophy](./operating-philosophy.md) if you want the reasoning behind those choices.

### Engineering and reuse review

1. Read the root [README](../README.md).
2. Read the [consumer guide](./consumer-guide.md) to understand the copy-in model and what is not part of the consumer API.
3. Review the [repository map](./architecture/repository-map.md).
4. Inspect the hand-written layout components under [`src/components/layout/`](../src/components/layout/) and the generated primitives under [`src/components/ui/`](../src/components/ui/).
5. Check the [machine-readable catalog](./kit-catalog.json) for file bundles, dependencies, constraints, and status.
6. Run the verification commands from the root README.

### Application-delivery system review

1. Read the [operating philosophy](./operating-philosophy.md).
2. Follow the [application delivery model](./process/delivery-model.md).
3. Review the [role handoffs](./roles/role-handoffs.md).
4. Inspect the copyable artifacts under [`templates/`](../templates/).
5. Review the focused [navigation workflow slices](./workflows/navigation/) and the current layout reference pages.
6. Use the [pattern contract](./patterns/pattern-template.md) to see how a future workflow should connect need, behavior, implementation, testing, and evidence.

## Know what each area means

- `src/pages/` — shareable React reference pages; not a consumer API.
- `src/components/layout/` — hand-written kit behavior and layout APIs.
- `src/components/ui/` — replaceable shadcn-generated primitives.
- `docs/` — durable explanation, contracts, process, architecture, decisions, and review guidance.
- `templates/` — copyable project artifacts for business analysts, designers, developers, testers, and delivery teams.
- `examples/` — reserved for complete worked examples; the current reference demonstrations remain in `src/pages/`.
- `tests/` — verification guidance and future automated coverage.
- `docs/kit-catalog.json` — structured metadata for maintainers, tooling, and AI agents; it is an index, not a replacement for the human-readable documents.

## Current state

The current repository includes:

- the operating philosophy and delivery model;
- role handoffs and reusable delivery templates;
- stable layout and navigation components;
- focused navigation workflow slices;
- layout and split-view reference pages;
- a history-routed React reference application;
- a paused search-and-results proof preserved for later resumption.

The project does not yet claim to be a published npm package, a shadcn registry, a complete workflow catalog, or a repository with automated browser and visual-regression coverage.

## Continue

- [Documentation map](./README.md)
- [Roadmap](./roadmap.md)
- [Consumer guide](./consumer-guide.md)
