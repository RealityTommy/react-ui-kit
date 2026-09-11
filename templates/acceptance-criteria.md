# Acceptance criteria

## Learn it

Acceptance criteria describe observable results that tell the team whether the user story is satisfied. They are not implementation tasks. Write them so a person can verify the behavior without guessing what the author meant.

## Example

- The page has one clear heading and a labeled search form.
- Submitting a blank query shows a useful validation message without a request.
- A valid query shows loading before results, and the result count is understandable.
- No matches produce an empty state that offers a way to change the query.
- A failed request explains the problem and offers retry or edit recovery.
- Selecting a result gives visible confirmation or opens the selected record.
- All controls work with keyboard input and remain usable at narrow widths.

## Use it

```text
- [Person] can [observable action] and sees [observable result].
- When [alternate condition], the experience [expected behavior].
- If [error or boundary condition], the experience [message and recovery].
- [Accessibility, responsive, or content requirement] remains true.
```

Keep true:

- Each criterion can be checked as pass or fail.
- Include the main path and meaningful alternate states.
- Describe recovery when something fails.
- Include accessibility and responsive expectations when they affect the task.
- Do not prescribe a component, CSS class, or internal function.
