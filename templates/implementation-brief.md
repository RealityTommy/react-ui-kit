# Developer implementation brief

## Learn it

An implementation brief carries the agreed experience into code. It tells the developer what must remain true, what may vary, and how the result can be checked. It should reduce questions without pretending to design the whole application.

## Example

### Build

Use the existing PageShell, Header, Main, Footer, Card, and Button primitives. Keep the workflow behavior in a maintained page or feature module, not in `src/components/ui/`.

The query is trimmed before validation. The reference lookup is asynchronous so loading is observable. Replace `searchRecords` with the consuming application's request function without changing the state contract.

### Stable hooks

Preserve `search-results-form`, `search-query`, `search-submit`, and `search-status`. Keep the status text in a polite live region and associate validation text with the input.

### Do not assume

Do not assume a successful response contains records, that retrying will work, or that result titles alone are enough context. Keep the result action a real keyboard-accessible control.

## Use it

```text
## Build

Use [existing patterns or primitives]. Keep [application behavior] in [owned location].

Implement [states, rules, and important behavior]. Do not change [approved contract].

## Stable hooks

Preserve [semantic labels, IDs, data attributes, or test hooks].

## Configurable versus fixed

Configurable: [what the consuming application may change].
Fixed: [behavior, accessibility, structure, or state that must remain true].

## Do not assume

Do not assume [unknown, failure, content, or integration condition].

## Verification notes

Check [commands, scenarios, viewport, keyboard path, and accessibility expectations].
```

Keep true:

- Describe behavior and boundaries before naming implementation details.
- Separate generated primitives from maintained application behavior.
- Name stable hooks only when they support real verification or integration.
- Call out what is configurable and what is fixed.
