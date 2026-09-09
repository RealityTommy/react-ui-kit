# Contributing

Personal project used to learn React and build a reusable UI framework.
External contributions aren't the goal right now, but the conventions
below apply to anyone (including future-me) touching the code.

## Principles

- **Accessibility first.** WCAG 2.1 AA is the baseline, not a stretch goal.
  If a component can't meet it, it doesn't ship.
- **Own the components.** shadcn-style — every component is meant to be
  copied into a consuming project and edited freely. Avoid clever
  abstractions that only make sense inside this repo.
- **Narrow v1.** Layout and navigation only. New component types wait for v2.
- **Plain, calm language.** Applies to component names, prop names, docs,
  and commit messages.
- **Small commits.** One concern per commit — see below.

## Stack conventions

- **TypeScript** — strict mode. No `any` without a comment explaining why.
- **Tailwind v4** — utility classes in JSX. Extract to a component before
  extracting to a custom CSS class.
- **React Aria Components** — use React Aria primitives for anything with
  interaction, focus management, or keyboard behavior. Don't rebuild what
  React Aria already gives you. (Chosen over Radix specifically for
  stronger a11y — JAWS/TalkBack coverage, RTL support.)
- **Design tokens** — colors, spacing, typography come from tokens via CSS
  variables. No hard-coded hex values or magic numbers in components.

## Component authoring

New hand-written components go in `src/components/layout/` (or a sibling
folder). See
[`src/components/layout/README.md`](./src/components/layout/README.md) for
the full authoring pattern.

New primitives (Button, Input, Dialog analogs) come from the shadcn CLI
into `src/components/ui/`. See
[`src/components/ui/README.md`](./src/components/ui/README.md) for the
rules around that folder.

**Shared types** used by two or more layout components live in
`src/components/layout/types.ts` (currently `NavItem`, used by Header and
Footer). When a type graduates from "one component uses it" to "two
components use it," move it there rather than cross-importing.

## Component checklist

Before a component is considered done:

- [ ] TypeScript types exported for all props
- [ ] Keyboard navigable (Tab, arrow keys where relevant, Escape to close)
- [ ] Focus visible and managed correctly (use `focus-visible:`, not `focus:`)
- [ ] Screen reader tested (labels, roles, live regions if needed)
- [ ] Works in light and dark theme via CSS variables
- [ ] Responsive (mobile-first, reflows at 320px)
- [ ] No console warnings
- [ ] JSDoc `@example` on every export

## Comment style

Every hand-written component file follows four rules:

1. **File-level docblock at the top** — describes what the file exports
   and when to use it. One short paragraph, not an essay.

2. **Section headers** for logical blocks (variants, component, hooks):

   ```tsx
   // ---------------------------------------------------------------
   // Variants
   // ---------------------------------------------------------------
   ```

3. **Inline comments only where the *why* isn't obvious from the code.**
   Never explain what the code does when the code is already clear —
   explain the reason it's done this way.

4. **JSDoc on every export**, including a one-line description and an
   `@example` block. This is the highest-leverage comment type because
   it powers hover-tooltips in VS Code.

**Anti-patterns to avoid:**

- Restating code (`// increment i by 1`)
- Novel-length explanations (extract a helper with a better name instead)
- Comments that duplicate what the code says — they drift out of sync
- Cargo-culted imports: don't `import type * as React` unless the file
  actually references `React.SomeName`. TypeScript will flag it on build.

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/).
Prefix every commit message with one of:

- **`feat:`** — new user-facing feature or component
- **`fix:`** — bug fix
- **`docs:`** — documentation only (READMEs, JSDoc, code comments)
- **`chore:`** — housekeeping, tooling, config (not user-facing)
- **`refactor:`** — code change that neither fixes a bug nor adds a feature
- **`test:`** — adding or updating tests

Messages use present-tense imperative after the prefix:
`feat: add mobile menu drawer` — not `added`, not `adding`.

**One reason per commit.** If a commit needs "and" in its message, it
probably needs to be split. The test: could you `git revert` this commit
and leave the repo in a coherent state?

Push only after local verification passes.

## Verification before every commit

```powershell
pnpm lint
pnpm build
```

Both must pass. Two known warnings are accepted and expected:

- `react-refresh/only-export-components` on `button.tsx` — because
  `buttonVariants` is a legitimately reused function export.
- `react-refresh/only-export-components` on `container.tsx` — same reason
  for `containerVariants`.

Anything else is a real signal. Don't push through unexplained warnings
or errors.

## Debugging playbook

### Reproduce → inspect → fix

Before proposing a fix for anything visual or layout-related, **read the
actual DOM in DevTools.** Mental models of CSS behavior (especially
`position: sticky`, z-index stacking, and `backdrop-filter`) are easy to
get wrong. Read the computed styles first, then fix.

### Read the whole file, not a filtered view

When diagnosing "why isn't my change reflected?", use `Get-Content <file>`
to read the full file. Avoid `Select-String` — it hides adjacent lines
that don't match your keyword, and the bug is usually on a line you
didn't grep for.

### Vite's incremental cache can hide regressions

After adding a component that pulls in a heavy dependency, `pnpm build`
may report the old module count and bundle size because Vite's `.vite/`
cache short-circuits the work. If numbers look suspiciously flat after a
real change, force a clean build:

```powershell
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
pnpm build
```

Byte-identical hashes on the clean build vs. incremental confirms the
reported size is honest.

### The shadcn overwrite trap

Every time you run `pnpm dlx shadcn@latest add <component>`, the CLI
prompts to overwrite existing files — most commonly `button.tsx`.
**Always answer "no"** unless you've verified you want to lose your
customizations. Our Button has custom comments and would be blasted
over.

### React Aria dialog title requirement

Every React Aria dialog/drawer (Dialog, Sheet) requires a title for
accessibility, even if it's visually hidden. Wrap with `sr-only` if the
drawer is short and self-explanatory. Missing this throws a runtime
warning and breaks screen reader announcement.

## Tailwind gotcha: no dynamic class strings

Tailwind's JIT compiler scans source files for **literal** class names.
This does not work:

```tsx
const cls = `${breakpoint}:flex`  // ← invisible to Tailwind
```

Instead, map to a static string:

```tsx
const cls = breakpoint === "md" ? "md:flex" : "lg:flex"
```

## AI-assisted development

This project is built with AI assistance in a coaching role. The pattern:

1. AI explains the concept and suggests the approach
2. Human types the code and runs the commands
3. AI verifies the result

Code committed here has been read and understood by a human, not just
accepted from a suggestion.

## Git operations

- Use `git mv` when renaming or moving files — preserves history.
- Rebase or amend only local (unpushed) commits. Once pushed, treat
  history as immutable.
- Currently working directly on `main`. Feature-branch discipline may
  come later if the project ever has multiple contributors.

## License

By contributing, you agree your contributions are licensed under the
[MIT License](./LICENSE).
