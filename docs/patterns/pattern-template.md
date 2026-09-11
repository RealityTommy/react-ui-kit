# Pattern contract template

> Copy this file when defining a new page or workflow pattern. Replace the bracketed guidance and remove instructions before publishing.

## Identity

- **ID:** `[stable-kebab-case-id]`
- **Name:** `[Pattern name]`
- **Status:** `proposed | experimental | stable | deprecated`
- **Version:** `[semver or project revision]`
- **Related catalog entry:** `[catalog path or ID]`

## What

[Describe the user or application problem this pattern solves. Explain the intended outcome in plain language.]

## When to use

- [Condition that makes this pattern appropriate.]
- [User goal or information need it supports.]

## When not to use

- [Condition where a simpler or different pattern is better.]
- [Misuse this pattern is specifically intended to prevent.]

## User goal and actors

- **Primary user:** [Who is trying to accomplish the goal?]
- **User goal:** [What does successful completion mean?]
- **Other actors or systems:** [Who or what else is involved?]
- **Preconditions:** [What must be true before the experience begins?]

## Structure

Describe the required page regions and their order. Identify which regions are required, optional, or conditional.

1. [Region]
2. [Region]
3. [Region]

## Content requirements

- **Page title:** [Required content and purpose]
- **Primary action:** [Label, purpose, and placement]
- **Supporting information:** [What helps the user decide or complete the task]
- **Required labels and instructions:** [Content that must not be omitted]

## Behavior contract

Describe observable behavior without prescribing an internal framework implementation.

### Primary flow

1. [User action]
2. [System response]
3. [User-visible result]

### Alternate flows

- [Alternate action and expected result]

### Validation

- [Input or business rule]
- [Expected message and recovery behavior]

### Required states

- [ ] Initial
- [ ] Loading
- [ ] Results or working state
- [ ] Empty
- [ ] Error
- [ ] Success or confirmation
- [ ] Disabled or unavailable, when applicable

## Accessibility contract

- [Semantic landmarks and heading structure]
- [Keyboard interaction and focus behavior]
- [Accessible names, descriptions, and error associations]
- [Status or announcement behavior]
- [Contrast, zoom, and reflow expectations]

## Responsive contract

- [Behavior at narrow widths]
- [Changes in order, grouping, or navigation]
- [Minimum supported viewport or reflow expectation]
- [Content that must remain available]

## Implementation contract

The implementation must:

- [Required structural or API behavior]
- [Required ownership boundary]
- [Required stable hook, identifier, or data shape]
- [Constraint that prevents unsafe interpretation]

The implementation may customize:

- [Project-owned content]
- [Approved visual tokens]
- [Router or data-fetching integration]

The implementation must not assume:

- [Framework-specific behavior not guaranteed by the pattern]
- [Business rule not defined by the consuming project]
- [Optional region is always present]

## Testing contract

### Scenario coverage

- [ ] Primary success path
- [ ] Alternate path
- [ ] Validation failure and recovery
- [ ] Empty state
- [ ] Loading state
- [ ] Error state and recovery
- [ ] Keyboard-only path
- [ ] Narrow viewport path

### Evidence

- **Automated checks:** [Test files or commands]
- **Manual checks:** [Human verification steps]
- **Expected evidence:** [What proves the behavior is correct]

## Delivery artifacts

- **User story:** `[path]`
- **Acceptance criteria:** `[path]`
- **Implementation brief:** `[path]`
- **Test scenarios:** `[path]`
- **Test cases:** `[path]`
- **Accessibility review:** `[path]`
- **Reference example:** `[path]`

## Customization and portability

Describe what a consuming project can change safely and what should remain consistent. Keep this section framework-neutral where possible.

## Known limitations

- [Current limitation]
- [Unresolved question]

## Related resources

- [Component or foundation documentation]
- [Example]
- [Architecture decision]
- [Migration or changelog entry]
