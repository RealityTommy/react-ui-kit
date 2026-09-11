# Acceptance criteria

## Learn it

Acceptance criteria are small stories about behavior. The most useful format is:

- **Given** — the starting situation
- **When** — the person’s action
- **Then** — the result they should observe
- **And** — another result that must also be true

This gives the team one shared sentence for building and checking the experience. The example below is from Search and Results.

## Example

### Search with matches

- **Given** the person is on the Search and Results page
- **When** they enter `accessibility` and submit the form
- **Then** the page shows that the search is loading and then shows matching records
- **And** the result count and each record’s action are understandable

### Blank search

- **Given** the search field is empty or contains only spaces
- **When** the person submits the form
- **Then** the page shows a useful validation message
- **And** no search request is made

### No matches

- **Given** the person submits a valid query with no matches
- **When** the search finishes
- **Then** the page explains that nothing was found
- **And** the person can change the query without starting over

### Failed search

- **Given** the search service cannot answer
- **When** the request fails
- **Then** the page explains that the search did not finish
- **And** the person can retry or edit the query

### Accessibility and responsive behavior

- **Given** the person uses a keyboard or a 320px-wide viewport
- **When** they complete the search and choose a result
- **Then** every action remains reachable, readable, and usable
- **And** status and validation messages are available without relying on color alone

## Use it

```text
### [Scenario name]

- Given [starting situation]
- When [person's action]
- Then [observable result]
- And [another result that must also be true]
```

Keep true:

- Given, When, Then, and And should describe observable behavior.
- Use more than one And when several results belong to the same action.
- Add a scenario for the main path, meaningful alternate states, and recovery.
- Do not prescribe a component, CSS class, or internal function.
- If a scenario becomes too large, split it into a second scenario.
