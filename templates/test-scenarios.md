# Tester scenarios

## Learn it

A test scenario is a realistic situation a person or system needs to handle. Scenarios help a tester cover the journey, not just individual controls. Start with the main task, then include states, recovery, keyboard use, and responsive behavior.

## Example

1. First visit: confirm the instructions and empty result region are clear.
2. Normal search: submit `accessibility`; confirm loading, result count, and records.
3. Validation and recovery: submit blank, read the error, enter `accessibility`, and submit successfully.
4. Empty state: submit `empty`; confirm no-results guidance and editable query.
5. Error and recovery: submit `error`; confirm the error and retry, then change the query and succeed.
6. Success: activate a result; confirm a visible selection message.
7. Keyboard: tab through the form and result actions, submit with Enter, and confirm visible focus.
8. Narrow viewport: inspect at 320px; confirm stacked content and no horizontal scrolling.

## Use it

```text
1. [Starting situation]: [what should be understandable or available].
2. [Main task]: [action]; confirm [observable outcome].
3. [Validation or boundary]: [input/action]; confirm [message and recovery].
4. [Failure and recovery]: [failure]; confirm [recovery path].
5. [Keyboard or assistive technology]: [input method]; confirm [usable outcome].
6. [Narrow or changed context]: [viewport/device/state]; confirm [reflow and readability].
```

Keep true:

- Use situations a person can reproduce.
- Cover the main path and the states that could change the outcome.
- State what the tester should observe, not what code should execute.
- Link scenarios to detailed test cases when setup or data needs more detail.
