# Test cases

## Learn it

A test case turns one expected behavior into a repeatable check. It records the setup, action, and expected result so another tester can reproduce it and the team can keep evidence of what was verified.

## Example

| ID | Setup and action | Expected result |
| --- | --- | --- |
| SR-01 | Load the page | One `main`, one `h1`, named form, and instructions are present. |
| SR-02 | Submit whitespace | No request occurs; the field is invalid and explains how to recover. |
| SR-03 | Submit `accessibility` | Loading is announced, then matching records and a count appear. |
| SR-04 | Submit `empty` | An explicit no-results message and edit path appear. |
| SR-05 | Submit `error` | An error message and retry action appear. |
| SR-06 | Retry after changing to `accessibility` | Normal results return. |
| SR-07 | Activate a result | A success confirmation names the selected result. |
| SR-08 | Use only keyboard at 320px | Every action is reachable, focused, and usable without overflow. |

## Use it

```text
| ID | Setup and action | Expected result |
| --- | --- | --- |
| [ID-01] | [starting state and action] | [observable result] |
| [ID-02] | [boundary, error, or recovery action] | [message, state, and recovery] |
```

Keep true:

- Give each case a stable ID.
- Include enough setup for another person to repeat the check.
- Use observable results and avoid implementation-only assertions.
- Include at least one boundary, error, recovery, keyboard, or responsive case when relevant.
