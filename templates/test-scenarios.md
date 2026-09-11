# Tester scenarios

## What this is

A test scenario is a situation someone can repeat to see whether the feature works. It gives the tester a path to follow instead of a loose list of things to click.

Use the same Given/When/Then/And language as the acceptance criteria. That way, the tester is checking the behavior the team already agreed on.

## Example

### Normal search

- **Given** the page is ready
- **When** the tester submits `accessibility`
- **Then** loading is announced before results appear
- **And** matching records, a result count, and usable actions are visible

### Validation and recovery

- **Given** the search field is empty
- **When** the tester submits the form
- **Then** the message explains what to enter
- **And** the tester can enter a query and search successfully

### No results

- **Given** the page is ready
- **When** the tester submits `empty`
- **Then** the page says that no records were found
- **And** the query remains available to edit

### Error and recovery

- **Given** the page is ready
- **When** the tester submits `error`
- **Then** the page explains that the search failed
- **And** retrying or changing the query provides a way forward

### Keyboard and small screen

- **Given** the tester uses only a keyboard at 320px wide
- **When** they move through the form and result actions
- **Then** every action has visible focus and remains usable
- **And** the page does not require unnecessary horizontal scrolling

## Use it

```text
### [A short name for this situation]

- Given [where we start]
- When [what the person does]
- Then [what the tester should observe]
- And [what else must be true]
```

## Keep true

- Start with a situation someone can reproduce.
- Cover the normal path, important alternate states, and recovery.
- Reuse the words from the acceptance criteria when possible.
- Describe what the tester should observe, not what the code should do.
