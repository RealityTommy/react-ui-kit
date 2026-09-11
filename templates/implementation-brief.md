# Developer implementation brief

## Learn it

An implementation brief carries the agreed behavior into code. It tells the developer what must remain true, what may vary, and how to verify the Given/When/Then scenarios. It should reduce questions without pretending to design the whole application.

## Example

### Build

Use the existing PageShell, Header, Main, Footer, Card, and Button primitives. Keep the workflow behavior in a maintained page or feature module, not in `src/components/ui/`.

The query is trimmed before validation. The reference lookup is asynchronous so the loading state is observable. Replace `searchRecords` with the consuming application’s request function without changing the acceptance-criteria state contract.

### Stable hooks

Preserve `search-results-form`, `search-query`, `search-submit`, and `search-status`. Keep status text in a polite live region and associate validation text with the input.

### Do not assume

Do not assume a successful response contains records, that retrying will work, or that result titles alone are enough context. Keep the result action a real keyboard-accessible control.

### Verification

Implement against the acceptance criteria and test cases. Confirm the Given/When/Then scenarios for matches, blank input, no results, failure/recovery, keyboard use, and 320px reflow.

## Use it

```text
## Build

Use [existing patterns or primitives]. Keep [application behavior] in [owned location].

Implement the behavior described by [acceptance criteria link]. Do not change [approved contract].

## Stable hooks

Preserve [semantic labels, IDs, data attributes, or test hooks].

## Configurable versus fixed

Configurable: [what the consuming application may change].
Fixed: [behavior, accessibility, structure, or state that must remain true].

## Do not assume

Do not assume [unknown, failure, content, or integration condition].

## Verification

Run the Given/When/Then scenarios for [main path, alternate states, recovery, keyboard, and responsive behavior].
```

Keep true:

- Implement the behavior contract before optimizing the component structure.
- Separate generated primitives from maintained application behavior.
- Call out what is configurable and what is fixed.
- Make every acceptance scenario verifiable by a test case or documented manual check.
