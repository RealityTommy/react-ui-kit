# Definition-of-done record

## What this is

This is the team’s short answer to: “What did we build, how did we check it, and what still needs to be known?”

It keeps “the build passed” from being confused with “the experience is ready.”

## Example

```text
## Work

Name: Search and Results workflow
User goal: Find a record by words the person knows.

## What we checked

- The user story and acceptance criteria were reviewed.
- Normal search, loading, empty, validation, error, recovery, and success states were demonstrated.
- Keyboard use and 320px behavior were checked.
- Accessibility guidance and test hooks were documented.
- `pnpm lint` passed with the accepted baseline warnings.
- `pnpm build` passed.

## What is still limited

- The search uses deterministic demo data, not a real service.
- Browser automation has not been added yet.

## Decision

Done for this proof: yes
Open issues: none blocking this proof
Reviewed by: [name]
Date: [YYYY-MM-DD]
```

## Use it

```text
## Work

Name: [feature, workflow, or pattern]
User goal: [what the person needs to accomplish]

## What we checked

- [User story and acceptance criteria]
- [Design or workflow decisions]
- [Main and alternate behavior]
- [Test scenarios and cases]
- [Accessibility and responsive behavior]
- [Required project checks]

## What is still limited

- [Known limitation, unknown, or intentional deferral]

## Decision

Done for this work: [yes / no / yes with follow-up]
Open issues: [none / list]
Reviewed by: [name]
Date: [YYYY-MM-DD]
```

## Keep true

- Point to real evidence or recorded checks.
- Name limitations instead of hiding them.
- “Done” means the agreed work is complete, not that the product will never change.
- Keep future improvements separate from the completion decision.
