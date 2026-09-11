# Accessibility guidance

- Keep the search field's visible `label` and `aria-describedby` relationship intact.
- Put validation text next to the field and expose it with `role="alert"`; do not communicate the problem only with a color.
- Use `aria-live="polite"` for loading, result counts, empty, error, and success updates. Avoid replacing the form while a person is typing.
- Keep results as a meaningful list with a heading. Use real buttons or links for result actions.
- Test keyboard focus, 200% zoom, 320px width, and light/dark themes. Check that text remains readable and no status is conveyed by color alone.
