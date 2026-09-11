# Documentation

This directory explains how the Application Delivery Kit is organized, why it exists, and how to use it as a shared reference for planning, designing, building, and testing applications.

## Choose a path

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
- [`workflows/search-results.md`](./workflows/search-results.md) — the first complete workflow proof and its delivery artifacts.
- [`roles/`](./roles/) — guidance for business stakeholders, business analysts, designers, developers, and testers.
- [`process/`](./process/) — how an idea becomes a documented, implemented, and verified experience.
- [`decisions/`](./decisions/) — decisions that shape the project and their tradeoffs.
- [`consumer-guide.md`](./consumer-guide.md) — how to copy and adapt the kit in another application.
- [`kit-catalog.json`](./kit-catalog.json) — machine-readable components, patterns, roles, and update metadata.

## How documentation is organized

README files are the navigation layer. They explain where you are, what belongs in a directory, and what to read next. Detailed guidance belongs in focused documents linked from those READMEs.

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
- [Read the consumer guide](./consumer-guide.md)
- [Study the search-and-results workflow](./workflows/search-results.md)
