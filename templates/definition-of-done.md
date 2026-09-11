# Definition-of-done record

## Learn it

A definition-of-done record is the team’s short completion summary. It connects the request, decisions, implementation, verification, and remaining limits. It prevents “the build passed” from being mistaken for “the experience is complete.”

## Example

```text
## Work

Name: Search and Results workflow
User goal: Find a record by words the person knows.

## Evidence

- User story and acceptance criteria reviewed.
- Normal, loading, empty, validation, error, recovery, and success states demonstrated.
- Keyboard and 320px behavior checked.
- Accessibility guidance and stable hooks documented.
- `pnpm lint` passed with accepted baseline warnings.
- `pnpm build` passed.

## Limitations

- The lookup is deterministic demo behavior, not a real service integration.
- Browser automation has not yet been added.

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
User goal: [person's goal]

## Evidence

- [Need, story, and acceptance criteria]
- [Design/workflow decisions]
- [Implementation and state coverage]
- [Test scenarios/cases and results]
- [Accessibility and responsive checks]
- [Build, lint, or other required checks]

## Limitations

- [Known limitation, unknown, or intentional deferral]

## Decision

Done for this work: [yes / no / yes with follow-up]
Open issues: [none / list]
Reviewed by: [name]
Date: [YYYY-MM-DD]
```

Keep true:

- Evidence should point to actual artifacts or recorded checks.
- Name limitations instead of hiding them.
- A “yes” means the agreed definition of done is satisfied, not that every future improvement is complete.
- Keep follow-up work separate from the completion decision.
