# Accessibility guidance

## What this is

Accessibility guidance calls out what must remain usable for people who use keyboards, screen readers, zoom, different colors, or smaller screens. It belongs beside the behavior, not only at the end of testing.

## Example

For Search and Results:

- The search field has a visible label.
- The validation message is connected to the field and is not shown by color alone.
- Loading, result counts, empty states, errors, and success messages can be understood by a screen reader.
- Results use real links or buttons.
- Every action works with a keyboard and has visible focus.
- At 320px wide and 200% zoom, content remains readable and usable.

## Use it

```text
- The [field or control] has a visible, understandable name.
- [Validation, error, and status messages] are announced and are not shown by color alone.
- Every action can be reached and used with a keyboard.
- Focus is visible and the reading order still makes sense.
- The page remains usable at [small viewport and zoom level].
- Text, controls, and states remain understandable in [supported themes or contrast conditions].
```

## Keep true

- Check the experience people actually use, not only the source code.
- Test keyboard and small-screen behavior as well as automated checks.
- Do not make color, sound, or position the only way to understand an important message.
- Link special rules back to the pattern’s acceptance criteria.
