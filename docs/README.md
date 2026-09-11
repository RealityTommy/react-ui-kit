# Documentation

This directory explains how the Application Delivery Kit is organized, why it exists, and how to use it as a shared reference for planning, designing, building, and testing applications.

## Choose a path

### I am reviewing the running React app

1. Run the [demo application](../README.md#getting-started).
2. Start with the home page, then compare the layout and navigation guides.
3. Use the repository only when you want the reasoning, implementation, or delivery artifacts behind what you see.

### I am reviewing the GitHub repository

Start with the [reviewer guide](./reviewer-guide.md). It separates the shortest paths for reviewing the product experience, React implementation, and application-delivery system.

### I want to understand the project philosophy

1. Read the [operating philosophy](./operating-philosophy.md).
2. Read the [application delivery model](./process/delivery-model.md).
3. Study the [focused navigation workflow slices](./workflows/navigation/).
4. Follow the [layout guidance in the React reference app](../README.md#getting-started), then review the current roadmap.

### I want to see the system

1. Run the [demo application](../README.md#getting-started).
2. Review the [repository map](./architecture/repository-map.md).
3. Browse the [pattern catalog](./kit-catalog.json).

### I want to use the kit in an application

1. Read the [consumer guide](./consumer-guide.md).
2. Choose the simplest layout or workflow pattern that fits the user’s goal.
3. Use the relevant implementation and testing guidance.

### I want to understand the architecture

1. Read the [system layers](./architecture/system-layers.md).
2. Review the [repository map](./architecture/repository-map.md).
3. Read the project decisions in [`decisions/`](./decisions/).

### I am defining requirements or tests

Start with the role guides in [`roles/`](./roles/) and the reusable artifacts in [`../templates/`](../templates/).

## Documentation areas

- [`architecture/`](./architecture/) — system boundaries, repository structure, and ownership.
- [`patterns/`](./patterns/) — reusable page and workflow patterns.
- [`workflows/navigation/`](./workflows/navigation/) — the focused navigation workflow slices.
- [`workflows/layout.md`](./workflows/layout.md) — the layout workflow slice and responsive review contract.
- [`workflows/reference-pages/`](./workflows/reference-pages/) — complete worked artifacts for the current React reference pages.
- [`workflows/search-results.md`](./workflows/search-results.md) — the later search-and-results workflow proof.
- [`roles/`](./roles/) — guidance for business stakeholders, business analysts, designers, developers, and testers.
- [`process/`](./process/) — how an idea becomes a documented, implemented, and verified experience.
- [`decisions/`](./decisions/) — decisions that shape the project and their tradeoffs.
- [`consumer-guide.md`](./consumer-guide.md) — how to copy and adapt the kit in another application.
- [`reviewer-guide.md`](./reviewer-guide.md) — how to review the repository without treating the app and repository as the same artifact.
- [`kit-catalog.json`](./kit-catalog.json) — machine-readable components, patterns, roles, and update metadata.

## How documentation is organized

README files are the navigation layer. They explain where you are, what belongs in a directory, and what to read next. Detailed guidance belongs in focused documents linked from those READMEs.

The running React app and the GitHub repository serve different review needs. App pages are the front-stage reference experience: they make layout, navigation, responsive behavior, and accessibility decisions visible. Repository documentation is the supporting playbook: it explains the system, the handoffs, the reusable artifacts, the implementation boundaries, and the evidence behind the app. Do not force either surface to contain the whole other surface.

A meaningful pattern should connect four things:

```text
Pattern
  → explanation and usage boundaries
  → implementation example
  → delivery artifacts
  → test and accessibility expectations
```

## Public-project rule

Examples and guidance must be generic, original, and safe to publish. Do not add employer-specific information, private project data, credentials, internal URLs, or copied proprietary material.

## Continue

- [Understand the system layers](./architecture/system-layers.md)
- [See the repository map](./architecture/repository-map.md)
- [Choose a repository review path](./reviewer-guide.md)
- [Read the consumer guide](./consumer-guide.md)
- [Study the focused navigation workflow slices](./workflows/navigation/)
- [Study the search-and-results workflow](./workflows/search-results.md)
