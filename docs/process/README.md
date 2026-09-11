# How work moves through the system

> A lightweight path from an unclear need to a clear, tested experience.

## What this is

This process is a guide for turning a product need into an application experience that business stakeholders can understand, developers can implement, and testers can verify.

It is a set of useful checkpoints, not a mandatory ceremony for every project.

## The path

```text
Understand the need
  ↓
Describe the user goal
  ↓
Choose or define a pattern
  ↓
Document structure and behavior
  ↓
Create the visual and implementation example
  ↓
Define test scenarios and evidence
  ↓
Review accessibility and responsive behavior
  ↓
Record decisions and limitations
  ↓
Publish the reusable result
```

## Checkpoints

### 1. Understand the need

Describe the problem, the people affected, and the outcome they need. Avoid beginning with a component or screen because it may solve the wrong problem.

### 2. Describe the user goal

State what the user is trying to accomplish, what information they need, and what successful completion means.

### 3. Choose or define a pattern

Select the simplest existing pattern that fits. If no pattern fits, document the gap before inventing a new composition.

### 4. Document structure and behavior

Define required regions, content, states, interactions, validation, errors, recovery, accessibility, and responsive behavior.

### 5. Create the example

Implement a realistic example that makes the intended experience visible. Include normal, empty, loading, error, and success states where they apply.

### 6. Define verification

Write scenarios and test cases from the behavior contract. Verify structure and interaction—not only visual appearance or build success.

### 7. Review quality

Check keyboard behavior, focus, semantics, responsive layout, content clarity, and the documented acceptance criteria.

### 8. Record decisions

Record important choices, alternatives, tradeoffs, limitations, and conditions that might cause the decision to be revisited.

### 9. Publish the reusable result

Update the relevant README, catalog metadata, example links, templates, changelog, and migration notes.

## What “ready” means

A pattern is ready to share when:

- its purpose and boundaries are clear;
- its required states are documented;
- a person can see it working;
- a developer can identify the implementation contract;
- a tester can identify what to verify;
- accessibility and responsive expectations are stated;
- customization points are explicit;
- known limitations are honest;
- related files and catalog entries are linked.

## Continue

- [Use the role guides](../roles/)
- [Browse reusable templates](../../templates/)
- [Review architecture decisions](../decisions/)
