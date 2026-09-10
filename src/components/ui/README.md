# `ui/` — shadcn-managed primitives

Everything in this folder is generated and maintained by the
[shadcn CLI](https://ui.shadcn.com). Treat these files as
copy-in-then-customize scaffolding, not hand-written code.

## Adding a new primitive

```powershell
pnpm dlx shadcn@latest add <component-name>
```

Examples: `button`, `dialog`, `sheet`, `input`, `card`.

The CLI reads `components.json` at the repo root, which is locked to:

- Style preset: **`aria-nova`** (React Aria Components under the hood)
- Icon library: **Lucide**
- Base color: **Neutral**
- CSS variables: Yes

## Overwrite policy

These files are intentionally disposable. When the shadcn CLI offers to
overwrite an existing primitive, allow it. Do not rely on comments or local
edits in this folder surviving regeneration.

Project-specific behavior belongs in a wrapper or a hand-written component
outside `ui/`. If a generated primitive needs a local fix before upstream
support exists, keep the change small and expect to reapply or replace it
when the primitive is regenerated.

## What NOT to do

- ❌ Don't create hand-written components in this folder
- ❌ Don't nest sub-folders here (e.g., `ui/layout/`)
- ❌ Don't rename shadcn-generated files
- ❌ Don't answer "yes" to overwrite prompts without reading the diff
