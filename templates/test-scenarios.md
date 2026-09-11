# Tester scenarios

## Learn it

A test scenario is a realistic situation a person or system needs to handle. Use the same Given/When/Then/And language as the acceptance criteria so the tester can trace each check back to an agreed behavior.

## Example

### Normal search

- **Given** the page is ready and the person can reach the search field
- **When** they submit `accessibility`
- **Then** loading is announced before the results appear
- **And** matching records, a result count, and usable actions are visible

### Validation and recovery

- **Given** the search field is empty
- **When** the person submits the form
- **Then** validation explains what to enter
- **And** the person can enter a query and submit successfully

### Empty state

- **Given** the person submits `empty`
- **When** the search finishes
- **Then** the page says that no records were found
- **And** the query remains available to edit

### Error and recovery

- **Given** the person submits `error`
- **When** the search fails
- **Then** the page explains the failure
- **And** retrying or changing the query provides a recovery path

### Keyboard and narrow viewport

- **Given** the person uses only a keyboard at 320px wide
- **When** they move through the form and result actions
- **Then** every action has a visible focus state and remains usable
- **And** content does not require unnecessary horizontal scrolling

## Use it

```text
### [Scenario name]

- Given [starting situation]
- When [person's action]
- Then [observable result]
- And [another result that must also be true]
```

Keep true:

- Start with a situation a tester can reproduce.
- Cover the main path, meaningful alternate states, and recovery.
- Use the same scenario names and wording as the acceptance criteria where possible.
- State what the tester should observe, not what code should execute.
