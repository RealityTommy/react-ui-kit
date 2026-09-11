# Repository map

> A guide to where the system lives and how the parts fit together.

## What this is

The repository contains a React reference implementation, reusable application patterns, documentation, machine-readable metadata, and copyable delivery artifacts. It is intentionally more than a component library: it demonstrates a way to make application structure, behavior, accessibility, and testing clear across roles.

## Start here

- New visitor: [`README.md`](../../README.md)
- New consumer: [`consumer-guide.md`](../consumer-guide.md)
- Contributor: [`CONTRIBUTING.md`](../../CONTRIBUTING.md)
- Pattern author: [`../patterns/`](../patterns/)
- Business analyst or tester: [`../../templates/`](../../templates/)

## Top-level areas

### `src/`

The current React implementation of the kit and its reference demo.

- `src/components/ui/` contains shadcn-managed, disposable primitives.
- `src/components/layout/` contains hand-written layout behavior owned by this project.
- `src/pages/` contains demo pages and is not the consumer API.
- `src/index.css` contains the current styling and token contract.

See [`src/README.md`](../../src/README.md) and [`src/components/README.md`](../../src/components/README.md).

### `docs/`

Human-readable guidance and project knowledge.

- `architecture/` explains boundaries and structure.
- `patterns/` explains reusable page and workflow solutions.
- `roles/` provides audience-specific guidance.
- `process/` explains how work moves from need to verified experience.
- `decisions/` records durable choices and tradeoffs.
- `consumer-guide.md` explains copy-in use.
- `kit-catalog.json` indexes the current system for tools and agents.

### `templates/`

Copyable project artifacts such as user stories, acceptance criteria, implementation briefs, scenarios, test cases, and accessibility reviews. Templates should be useful without requiring a consumer to read the entire repository.

### `examples/`

Complete, realistic workflows that demonstrate the system in use. Examples should show states and behavior, not just isolated component screenshots.

### `tests/`

Automated checks that prove implementation behavior. Manual role-based checks belong beside the relevant pattern or in the testing guidance.

### `.github/`

Public contribution workflows, issue templates, pull-request guidance, and automated quality checks.

## Ownership boundaries

```text
Generated primitives      → src/components/ui/
Maintained UI behavior    → src/components/layout/ and future patterns
Reference demonstrations  → src/pages/ and examples/
Human guidance            → docs/
Copyable artifacts        → templates/
Machine-readable index    → docs/kit-catalog.json and future catalog/
Verification              → tests/ and documented manual checks
```

Do not place project-specific application behavior in generated primitives. Do not treat demo pages as a stable consumer API. Do not duplicate a pattern’s contract independently in code, prose, and tests without linking the sources.

## Adding something new

1. Identify whether it is a primitive, pattern, example, artifact, or guide.
2. Place it in the matching ownership area.
3. Add or update the nearest README.
4. Link it from the appropriate catalog or index.
5. Document behavior, states, accessibility, and testing expectations.
6. Run the repository verification commands before committing.

## Continue

- [Understand the system layers](./system-layers.md)
- [Learn how work moves through the system](../process/README.md)
- [Browse the documentation map](../README.md)
