# Developer implementation brief

## Build

Use the existing PageShell, Header, Main, Footer, Card, and Button primitives. Keep the workflow behavior in a maintained page or feature module, not in `src/components/ui/`.

The query is trimmed before validation. The reference lookup is asynchronous so loading is observable. Replace `searchRecords` with the consuming application's request function without changing the state contract.

## Stable hooks

Preserve `search-results-form`, `search-query`, `search-submit`, and `search-status`. Keep the status text in a polite live region and associate validation text with the input.

## Do not assume

Do not assume a successful response contains records, that retrying will work, or that result titles alone are enough context. Keep the result action a real keyboard-accessible control.
