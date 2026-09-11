# Developer implementation brief

## What this is

This is a short handoff from the agreed behavior to the developer. It answers: what are we building, what must it do, and how will we check it?

You do not need to design the whole application from this page. Start with the acceptance criteria. Then use this brief to make the code match them.

## Example: Search and Results

### What are we building?

A page where a person can search for a record and choose one from the results.

Use the existing page layout and controls from the kit. Keep the search behavior in the page or feature code, where the consuming application can maintain it.

### What must happen?

Build the behavior described by the acceptance criteria:

- A person can enter a search term and submit it.
- Blank input shows a helpful message and does not start a search.
- A search with matches shows loading, then results.
- A search with no matches explains what happened and lets the person try again.
- A failed search explains the problem and offers retry or another search.
- A person can reach and use every action with a keyboard.
- The page remains usable at 320px wide.

### What can I reuse or change?

Reuse the existing PageShell, Header, Main, Footer, Card, and Button. You can change the record data and connect the search to a real service later.

You can change styling and copy when the acceptance criteria remain true.

### What must not break?

Keep these connections in place:

- The search field has a visible label.
- The validation message is connected to the field.
- Loading, result, empty, error, and success messages can be understood by someone using a screen reader.
- Results use real links or buttons, not clickable non-interactive elements.
- The main content remains in a sensible reading order on a small screen.

These names are also used by checks and examples, so keep them unless the team agrees to change the contract:

```text
search-results-form
search-query
search-submit
search-status
```

### How do I know I’m done?

Run through the Given/When/Then/And scenarios for:

- A search with matches
- Blank input
- No matches
- A failed search and recovery
- Keyboard use
- A 320px-wide viewport

Then run the project’s required checks and record the results in the definition-of-done record.

## Use it

```text
# Developer implementation brief

## What are we building?

[Describe the user-visible outcome in one or two sentences.]

## What must happen?

Build the behavior described by [link to acceptance criteria].

- [Main behavior]
- [Alternate or empty state]
- [Error and recovery behavior]
- [Accessibility or responsive behavior]

## What can I reuse or change?

Reuse [existing patterns, components, or example].

You can change [project-specific content or styling] when [important condition].

## What must not break?

Keep these connections and behaviors in place:

- [Accessible name, label, status, or reading-order requirement]
- [Keyboard or responsive requirement]
- [Stable ID, link, or test hook, if one is needed]

## How do I know I’m done?

Run the Given/When/Then/And scenarios for:

- [Main path]
- [Alternate state]
- [Error and recovery]
- [Keyboard, accessibility, or responsive behavior]

Run [required checks] and record the results in [definition-of-done record].
```

## Keep true

- Start with the user-visible outcome, not the file structure.
- Use the acceptance criteria as the source of expected behavior.
- Reuse proven patterns before creating new ones.
- Explain stable IDs or test hooks only when a real check depends on them.
- Do not hide important accessibility, error, or responsive behavior in a separate document.
- A beginner should be able to follow the headings in order and know what to do next.
