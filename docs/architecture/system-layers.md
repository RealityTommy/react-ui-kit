# System layers

> The Application Delivery Kit connects product understanding to working, testable software.

## What this is

The kit has four cooperating layers. Each layer has a different audience and responsibility. Keeping the layers distinct prevents the project from becoming either a vague process guide or a collection of disconnected UI components.

## Layer 1: Foundations

Foundations are the reusable visual and behavioral building blocks:

- typography;
- color and semantic tokens;
- spacing and layout primitives;
- buttons and links;
- form controls;
- status and feedback;
- tables, dialogs, menus, and navigation.

Foundations should have stable, understandable APIs and accessible default behavior.

## Layer 2: Application patterns

Patterns combine foundations around a recognizable user or application need:

- application shell;
- search and results;
- detail page;
- create or edit form;
- review and confirmation;
- multi-step workflow;
- dashboard or workspace;
- filtering, sorting, and pagination.

A pattern is more than a visual composition. It defines structure, behavior, states, content needs, accessibility expectations, and appropriate boundaries.

## Layer 3: Delivery artifacts

Artifacts help people communicate and carry the pattern into a project:

- problem statements;
- user stories;
- acceptance criteria;
- business rules;
- implementation briefs;
- test scenarios;
- test cases;
- accessibility review worksheets;
- release-readiness checks.

Artifacts should be copyable and customizable while preserving the important behavior and quality expectations of the pattern.

## Layer 4: Reference applications

Reference applications make the system tangible. They should demonstrate:

- realistic content;
- complete workflows;
- normal and exceptional states;
- responsive behavior;
- keyboard and assistive-technology considerations;
- implementation organization;
- the relationship between the UI and its delivery artifacts.

The reference application is evidence of the system, not the system’s only documentation.

## How the layers connect

```text
Need or problem
  ↓
Pattern choice
  ↓
User story and acceptance criteria
  ↓
Implementation contract
  ↓
Reference implementation
  ↓
Test scenarios and evidence
```

A useful pattern should be traceable through this path. If a pattern has code but no explanation, it is difficult to select. If it has explanation but no example, it is difficult to visualize. If it has neither test expectations nor states, it is difficult to implement reliably.

## Boundaries

- Foundations should not contain project-specific workflows.
- Patterns should not hide required business rules or states.
- Delivery artifacts should not prescribe one framework’s internal code structure.
- Reference applications should not be mistaken for copy-and-paste product applications.
- Machine-readable metadata should index the system without becoming the only source of human understanding.

## Quality question

For every meaningful addition, ask:

> Does this make the intended experience, structure, behavior, implementation, or evidence clearer for at least one audience without making the other layers inconsistent?

## Continue

- [See where each layer lives](./repository-map.md)
- [Learn the project process](../process/README.md)
- [Browse the kit catalog](../kit-catalog.json)
