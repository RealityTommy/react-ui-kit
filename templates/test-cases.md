# Test cases

## What this is

A test case is one check that can be repeated and marked as passed or failed. It gives another person enough information to repeat the check later.

Keep the same Given/When/Then/And shape, but put it into a small record with an ID.

## Example

| ID | Given | When | Then and And |
| --- | --- | --- | --- |
| SR-01 | The Search and Results page is loaded | Inspect the page | Then there is one clear heading and a labeled form; And the result area has an understandable status. |
| SR-02 | The query is blank or spaces | Submit the form | Then a helpful message appears; And no request is made. |
| SR-03 | The page is ready | Submit `accessibility` | Then loading is announced and matching records appear; And the count and actions are understandable. |
| SR-04 | The page is ready | Submit `empty` | Then a no-results message appears; And the query can be edited. |
| SR-05 | The page is ready | Submit `error` | Then an error message appears; And retry or query editing is available. |
| SR-06 | An error is visible | Change the query to `accessibility` and submit | Then normal results return; And the previous error does not block recovery. |
| SR-07 | Results are visible | Activate a result | Then a confirmation names the selected result; And the reading context remains understandable. |
| SR-08 | The page is loaded at 320px | Use only the keyboard | Then every action is reachable with visible focus; And content does not overflow horizontally. |

## Use it

```text
| ID | Given | When | Then and And |
| --- | --- | --- | --- |
| [ID-01] | [where we start] | [what the person does] | Then [what should happen]; And [what else must be true]. |
```

## Keep true

- Give every check a short, stable ID.
- Keep one main behavior per case.
- Include enough setup for another person to repeat it.
- Check outcomes, not private implementation details.
