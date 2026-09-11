# Application delivery model

> The big-picture path from “we need something” to “we know it works.”

## What this is

This is the model behind the Application Delivery Kit. It explains how the pieces fit together when a React application is planned, designed, built, tested, and shipped.

It is not a required ceremony. Use the smallest part that helps the team understand the work. The point is to prevent a small request from becoming a small solution to the wrong problem.

## The path

```text
Need and context
  ↓
User goal and success
  ↓
Workflow and experience
  ↓
Structure, behavior, and content
  ↓
React implementation
  ↓
Verification and evidence
  ↓
Definition of done
  ↓
Release and reusable learning
```

The path is not a one-way conveyor belt. Testing, design, and implementation may uncover questions that send the work back to an earlier step. That is useful discovery, not failure.

## What moves between roles

### 1. Business analyst: capture the need

The BA turns a request into something the team can understand:

- Who needs something
- What they are trying to do
- Why it matters
- What success means
- Business rules and constraints
- Known questions and assumptions

**Handoff:** a clear user story and acceptance criteria, not a transcript of the request.

### 2. Designer: shape the experience

The designer turns the need into a usable workflow and screen experience:

- The steps the person takes
- The information they need
- The available actions
- What happens at each state
- How the experience works on narrow screens
- How the experience works with a keyboard or assistive technology

**Handoff:** a workflow or screen design that explains behavior, not only appearance.

### 3. Developer: build the behavior

The developer turns the agreed experience into a React implementation:

- Use the kit's existing patterns where they fit
- Preserve the documented structure and behavior
- Implement normal, loading, empty, error, validation, and success states where relevant
- Keep accessibility and responsive rules intact
- Write or run tests against the behavior contract

**Handoff:** working code plus evidence that the implementation matches the agreed behavior.

### 4. Tester: verify the outcome

The tester checks what a person can actually do:

- Main success path
- Validation and boundary cases
- Errors and recovery
- Keyboard and focus behavior
- Responsive behavior
- Accessibility expectations
- Acceptance criteria

**Handoff:** test results, open issues, and a clear statement of what was verified.

### 5. Team: prove completion

The team records:

- What was requested
- What was decided
- What was built
- What was tested
- What remains limited or unknown
- Whether the definition of done is satisfied

## Behavior-driven and test-driven work

Behavior-driven development describes the experience in terms people can understand:

```text
Given [starting situation]
When [person takes an action]
Then [observable result]
```

Test-driven development turns those expected results into checks that guide implementation:

```text
Write the expected check
→ see it fail
→ build the smallest working behavior
→ see it pass
→ improve the code without changing the behavior
```

The practical rule is simple:

> Agree what good looks like before arguing about how to build it.

## Two layers for every resource

Every template, guide, and workflow package should include:

1. **Learn it** — short ELI5 explanation, purpose, example, and boundaries.
2. **Use it** — clean copy-and-paste content with obvious replacement fields.

A resource is successful when a tired person can find it, understand it, adapt it, and use it without rereading the whole system.

## Checkpoints

Before work moves forward, ask:

- Do we understand the user and the problem?
- Can we describe the expected behavior without talking about code yet?
- Are states, errors, recovery, accessibility, and narrow screens accounted for?
- Can the developer tell what must remain true?
- Can the tester tell what to verify?
- Can the team explain why this is done?

If the answer is no, the next step is clarification—not more implementation.

## Related resources

- [Role handoffs](../roles/role-handoffs.md) — what each role receives, produces, and checks.

- [Process guide](./README.md) — the practical checkpoints.
- [Pattern contract](../patterns/pattern-template.md) — the shape of a reusable pattern.
- [Search-and-results workflow](../workflows/search-results.md) — the first worked example.
- [Documentation map](../README.md) — where the rest of the repository fits.
