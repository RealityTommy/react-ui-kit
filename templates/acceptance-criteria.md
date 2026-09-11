# Acceptance criteria

## What this is

Acceptance criteria are short examples of how the feature should behave. They help the team agree on what “working” means before anyone starts building.

Use this format:

- **Given** — where we start
- **When** — what the person does
- **Then** — what should happen
- **And** — what else must be true

## Example

### Search with matches

- **Given** the person is on the Search and Results page
- **When** they enter `accessibility` and submit the form
- **Then** the page shows loading and then matching records
- **And** the result count and each record’s action are understandable

### Blank search

- **Given** the search field is empty or contains only spaces
- **When** the person submits the form
- **Then** the page shows a useful message
- **And** no search request is made

### No matches

- **Given** the person submits a valid query with no matches
- **When** the search finishes
- **Then** the page explains that nothing was found
- **And** the person can change the query and try again

### Failed search

- **Given** the search cannot finish
- **When** the request fails
- **Then** the page explains the problem
- **And** the person can retry or edit the query

### Keyboard and small screen

- **Given** the person uses a keyboard or a 320px-wide viewport
- **When** they search and choose a result
- **Then** every action remains reachable and readable
- **And** status messages do not depend on color alone

## Use it

```text
### [A short name for this situation]

- Given [where we start]
- When [what the person does]
- Then [what should happen]
- And [what else must be true]
```

## Keep true

- Write what a person can see, hear, read, or do.
- Include the normal path, important alternate states, and recovery from problems.
- Keep one main situation per scenario.
- Do not prescribe a component or code implementation.
