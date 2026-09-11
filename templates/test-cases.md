# Test cases

## Learn it

A test case is one repeatable check from a scenario. Write it in Given/When/Then/And form so the setup, action, and expected result are easy to follow and record.

## Example

| ID | Given | When | Then and And |
| --- | --- | --- | --- |
| SR-01 | The Search and Results page is loaded | The tester inspects the page | Then there is one clear heading and a labeled form; And the result region has an understandable status. |
| SR-02 | The query is blank or spaces | The tester submits the form | Then validation appears; And no request is made. |
| SR-03 | The page is ready | The tester submits `accessibility` | Then loading is announced and matching records appear; And the result count and actions are understandable. |
| SR-04 | The page is ready | The tester submits `empty` | Then an explicit no-results message appears; And the query can be edited. |
| SR-05 | The page is ready | The tester submits `error` | Then an error message appears; And retry or query editing is available. |
| SR-06 | An error is visible | The tester changes the query to `accessibility` and submits | Then normal results return; And the previous failure does not block recovery. |
| SR-07 | Results are visible | The tester activates a result | Then a success confirmation names the selected result; And focus or reading context remains understandable. |
| SR-08 | The page is loaded at 320px | The tester uses only the keyboard | Then every action is reachable with visible focus; And content does not overflow horizontally. |

## Use it

```text
| ID | Given | When | Then and And |
| --- | --- | --- | --- |
| [ID-01] | [starting situation] | [action] | Then [observable result]; And [additional result]. |
```

Keep true:

- Give every case a stable ID.
- Keep one main behavior per case.
- Include enough setup for another person to repeat the check.
- Use observable results, not implementation-only assertions.
