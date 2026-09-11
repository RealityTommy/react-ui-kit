# Role handoffs

> A shared view of what each role receives, produces, and checks before work moves on.

The Application Delivery Kit uses role handoffs to keep the same intent connected from the first request to a verified experience. A handoff is not a formal approval ceremony. It is a short check that the next person has enough information to continue without reconstructing the work from memory.

## The handoff path

```text
Need and context
  → user story and acceptance criteria
  → workflow and experience decisions
  → implementation brief
  → test scenarios and test cases
  → verification evidence and definition of done
```

Each role can ask questions and send work backward when something important is unclear. That is part of the work, not a failure of the handoff.

## Business analyst

Use Given/When/Then/And for acceptance criteria so the behavior agreement is easy to read and test.

**Receives:** a request, problem, opportunity, or observed user need.

**Produces:**

- a user story that names the person, goal, and reason;
- acceptance criteria that describe observable outcomes;
- business rules, constraints, assumptions, and open questions;
- the meaning of success and any important failure conditions.

**Hands off to:** the designer and developer, with the user story and acceptance criteria as the minimum shared starting point.

**Ready when:** the team can explain who needs something, what they need to do, why it matters, and what must remain true without discussing a specific component or implementation.

**Useful tools:** [user story template](../../templates/user-story.md) and [acceptance criteria template](../../templates/acceptance-criteria.md).

## Designer

**Receives:** the user goal, success conditions, constraints, and acceptance criteria.

**Produces:**

- the steps a person takes through the experience;
- the page or workflow structure;
- content and action priorities;
- normal, loading, empty, validation, error, recovery, and success states where they apply;
- responsive, keyboard, focus, and accessibility decisions;
- a record of choices that affect implementation or testing.

**Hands off to:** the developer and tester through the pattern contract, workflow guidance, and explicit state decisions.

**Ready when:** another person can describe what appears, what can be done, what happens next, and how the experience changes across states and screen sizes without relying on a visual mockup alone.

**Useful tools:** the relevant [pattern contract](../patterns/pattern-template.md) and [workflow proof](../workflows/search-results.md).

## Developer

**Receives:** the user goal, acceptance criteria, workflow decisions, states, constraints, and accessibility expectations.

**Produces:**

- working implementation using the simplest adequate kit patterns;
- application-specific behavior outside generated primitives;
- stable semantic structure and test hooks where needed;
- tests or executable checks for the behavior contract;
- known limitations and integration notes.

**Hands off to:** the tester with working code, the implementation brief, and enough information to reproduce each expected state.

**Ready when:** the implementation matches the documented structure and behavior, all relevant states are reachable, and the developer can explain how the result was checked.

**Useful tool:** [developer implementation brief](../../templates/implementation-brief.md).

## Tester

**Receives:** acceptance criteria, workflow states, implementation notes, and the running experience.

**Produces:**

- scenarios that cover the main task and meaningful alternate paths;
- test cases with setup, action, and expected result;
- accessibility and responsive observations;
- verified evidence, open issues, and limits of the test.

**Hands off to:** the whole team with a clear statement of what passed, what failed, and what remains unknown.

**Ready when:** the tester can verify the user-visible contract without inferring expected behavior from the implementation alone.

**Useful tools:** [tester scenarios](../../templates/test-scenarios.md), [test cases](../../templates/test-cases.md), and [accessibility guidance](../../templates/accessibility.md).

## Team completion check

The team records the result when it can answer all of these questions:

- What need and user goal were addressed?
- What behavior and states were agreed?
- What was implemented, and which existing patterns were used?
- What was tested, including accessibility and narrow-screen behavior?
- What remains limited, unknown, or intentionally deferred?
- What evidence supports calling the work done?

A build passing is necessary for code changes, but it is not by itself proof that the experience is complete.

## Continue

- [Application delivery model](../process/delivery-model.md)
- [Copyable templates](../../templates/)
- [Search-and-results workflow proof](../workflows/search-results.md)
