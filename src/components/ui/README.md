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

## The overwrite trap

When you add a new component, the CLI will often prompt to overwrite
existing files it thinks are stale — most commonly `button.tsx`.

**Always answer "no" unless you've verified you want to lose your
customizations.** Any file in this folder that we've added comments
to, tweaked, or extended will be blasted over otherwise.

## Hand-editing (with caution)

You *can* hand-edit files here — but every edit is a debt you pay next
time you run the CLI. Only hand-edit when:

- Fixing a bug in the generated code that shadcn hasn't addressed
- Adding project-specific comments (like our JSDoc/section-header
  standard from `CONTRIBUTING.md`)
- Removing dead imports (e.g., the cargo-culted `"use client"` on
  files that never run in Next.js)

For anything beyond that — new variants, new sub-components, wildly
different APIs — **create a wrapper in `layout/` or a sibling
component folder** that imports the primitive and adds on top.

## What NOT to do

- ❌ Don't create hand-written components in this folder
- ❌ Don't nest sub-folders here (e.g., `ui/layout/`)
- ❌ Don't rename shadcn-generated files
- ❌ Don't answer "yes" to overwrite prompts without reading the diff
