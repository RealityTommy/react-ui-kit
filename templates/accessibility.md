# Accessibility guidance

## Learn it

Accessibility guidance identifies the conditions that must remain true for people using different input methods, devices, and settings. Treat it as part of the behavior contract, not a final visual inspection.

## Example

- Keep the search field's visible `label` and `aria-describedby` relationship intact.
- Put validation text next to the field and expose it with `role="alert"`; do not communicate the problem only with a color.
- Use `aria-live="polite"` for loading, result counts, empty, error, and success updates. Avoid replacing the form while a person is typing.
- Keep results as a meaningful list with a heading. Use real buttons or links for result actions.
- Test keyboard focus, 200% zoom, 320px width, and light/dark themes. Check that text remains readable and no status is conveyed by color alone.

## Use it

```text
- [Visible label and accessible name] remain connected.
- [Validation, error, and status messages] are available to assistive technology
  and are not communicated by color alone.
- [Keyboard path] reaches every action with visible focus.
- [Reading order and landmarks] remain meaningful.
- [320px width and 200% zoom] do not hide content or create unnecessary scrolling.
- [Contrast and theme behavior] keep text, controls, and states understandable.
```

Keep true:

- Check the actual rendered experience, not only source attributes.
- Test keyboard and narrow-width behavior in addition to automated checks.
- Keep status, validation, and recovery messages understandable without sight or sound alone.
- Link any pattern-specific accessibility rules back to the pattern contract.
