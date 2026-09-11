# Operating philosophy

> Build the shared understanding before building the thing.

## Why this exists

Application work often breaks down when each role handles only its own slice. A request gets copied into a ticket, a screen gets designed, code gets written, and tests get run—but the larger user goal, system effects, accessibility, behavior, and completion evidence are unclear.

The Application Delivery Kit is Tommy's practical response to that problem. It preserves a way of thinking and working that can be reused across React projects.

## The central belief

A good application is not a collection of screens or components. It is a connected experience that helps people accomplish something reliably.

Small decisions must be made in the context of:

- the user's goal and larger journey;
- the people and roles affected;
- the information, rules, and dependencies involved;
- normal, empty, loading, error, validation, and recovery states;
- accessibility, responsive behavior, and content clarity;
- implementation, testing, maintenance, and release realities.

## Working principles

### Start with the need, not the artifact

Do not begin with “we need a button,” “we need a page,” or “we need a field.” Begin with who needs what, why they need it, and what successful completion means.

### Make the big picture visible

Use plain language, diagrams, examples, and connected artifacts so people can see how a small request fits into the larger experience.

### Make intent difficult to misread

Requirements and handoffs should describe structure, behavior, states, constraints, and expected outcomes literally. Do not rely on everyone making the same assumptions.

### Use consistency to protect attention

Reuse proven structure, UI, behavior, and accessibility patterns where they fit. Consistency lets designers spend more energy on user experience instead of rebuilding solved problems.

### Treat accessibility and responsive behavior as part of the work

They are not a final inspection layer. They shape the structure and behavior from the beginning.

### Prefer evidence over argument

Show the experience. Define the expected behavior. Test it. Record what was verified and what remains limited or unknown.

### Keep the system adaptable

The kit is a strong starting point, not a mandate. Projects may change the pieces when their users, constraints, or goals require it. Explain the change and preserve the reasoning.

## How roles should work together

- **Business analysts** capture the need and translate it into a user goal, rules, questions, and acceptance criteria.
- **Designers** shape the user's workflow and experience using the proven foundation without treating the foundation as a substitute for UX thinking.
- **Developers** implement the agreed structure and behavior, then test against observable outcomes rather than personal assumptions.
- **Testers** verify the whole behavior, including failure, recovery, accessibility, responsive, and boundary cases.

## Resource standards

Every resource should be usable in two ways:

1. **Learn it:** ELI5 explanation, purpose, example, and limits.
2. **Use it:** clean copy-and-paste content with obvious placeholders and minimal editing.

A resource should help a first-timer understand the work and help a tired practitioner complete it without rereading the entire playbook.

## Definition of good work

Work is not complete because a screen exists or a build passes. The team should be able to explain:

- what need was addressed;
- what behavior was intended;
- what was built;
- how it was tested;
- what accessibility and responsive checks were performed;
- what decisions, limits, and unknowns remain;
- why the result is ready to ship.

## Scope and limits

- React is the grounding implementation context because it is Tommy's near-term work context.
- The principles and many artifacts should remain useful outside React where practical.
- The kit is not intended to remove judgment or force identical solutions.
- It is not a replacement for product strategy, domain expertise, or human review.

## Related resources

- [Application delivery model](./process/delivery-model.md) — how the philosophy moves through the delivery lifecycle.
- [Documentation map](./README.md) — where the rest of the project lives.
