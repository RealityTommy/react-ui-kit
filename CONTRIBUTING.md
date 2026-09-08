# Contributing

This is a personal project used to learn React and build a reusable UI framework. External contributions aren't the goal right now, but the conventions below apply to anyone (including future-me) touching the code.

## Principles

- **Accessibility first.** WCAG 2.1 AA is the baseline, not a stretch goal. If a component can't meet it, it doesn't ship.
- **Own the components.** shadcn-style — every component is meant to be copied into a consuming project and edited freely. Avoid clever abstractions that only make sense inside this repo.
- **Narrow v1.** Layout and navigation only. New component types wait for v2.
- **Plain, calm language.** Applies to component names, prop names, docs, and commit messages.
- **Small PRs.** One concern per change.

## Stack conventions

- **TypeScript** — strict mode. No `any` without a comment explaining why.
- **Tailwind** — utility classes in JSX. Extract to a component before extracting to a custom CSS class.
- **Radix UI** — use Radix primitives for anything with interaction, focus management, or keyboard behavior. Don't rebuild what Radix already gives you.
- **Design tokens** — colors, spacing, typography come from tokens. No hard-coded hex values or magic numbers in components.

## File layout

*(To be filled in after Phase 2 scaffold.)*

## Component checklist

Before a component is considered "done":

- [ ] TypeScript types exported for all props
- [ ] Keyboard navigable (tab, arrow keys where relevant, escape to close)
- [ ] Focus visible and managed correctly
- [ ] Screen reader tested (labels, roles, live regions if needed)
- [ ] Works in light and dark theme
- [ ] Responsive (mobile-first)
- [ ] No console warnings
- [ ] Example usage in the component's folder or docs

## Commits

- Present tense, imperative: `add mobile menu drawer` not `added` or `adding`
- One logical change per commit
- Reference an issue if there is one

## Branching

- `main` — always working
- Feature branches: `feature/<short-name>` or `fix/<short-name>`
- Merge via PR against `main`, even for solo work — keeps history clean and forces a review pause

## AI-assisted development

This project is built with AI assistance in a coaching role. The pattern:

1. AI explains the concept and suggests the approach
2. Human types the code and runs the commands
3. AI verifies the result

Code committed here has been read and understood by a human, not just accepted from a suggestion.

## License

By contributing, you agree your contributions are licensed under the [MIT License](./LICENSE).

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/).
Prefix every commit message with one of:

- **`feat:`** — new user-facing feature or component
- **`fix:`** — bug fix
- **`docs:`** — documentation only (READMEs, JSDoc, code comments)
- **`chore:`** — housekeeping, tooling, config (not user-facing)
- **`refactor:`** — code change that neither fixes a bug nor adds a feature
- **`test:`** — adding or updating tests

**One reason per commit.** If a commit needs "and" in its message, it
probably needs to be split. The test: could you `git revert` this
commit and leave the repo in a coherent state?

Push only after local verification passes (see below).

## Verification before every commit

```powershell
pnpm lint
pnpm build
```

Both must pass. Two known warnings are accepted and expected:

- `react-refresh/only-export-components` on `button.tsx` — because
  `buttonVariants` is a legitimately reused function export.
- `react-refresh/only-export-components` on `container.tsx` — same
  reason for `containerVariants`.

Anything else is a real signal. Do not push through unexplained
warnings or errors.

## Component authoring

New hand-written components go in `src/components/layout/` (or a
sibling folder). See
[`src/components/layout/README.md`](./src/components/layout/README.md)
for the full authoring pattern.

New primitives (Button, Input, Dialog analogs) come from the shadcn
CLI into `src/components/ui/`. See
[`src/components/ui/README.md`](./src/components/ui/README.md) for
the rules around that folder.

## Comment style

Every hand-written component file follows four rules:

1. **File-level docblock at the top** — describes what the file
   exports and when to use it. One short paragraph, not an essay.

2. **Section headers** for logical blocks (variants, component,
   hooks). Format:
   ```tsx
   // ---------------------------------------------------------------
   // Variants
   // ---------------------------------------------------------------
   ```

3. **Inline comments only where the *why* isn't obvious from the
   code.** Never explain what the code does when the code is already
   clear — explain the reason it's done this way.

4. **JSDoc on every export**, including a one-line description and an
   `@example` block. This is the highest-leverage comment type
   because it powers hover-tooltips in VS Code.

**Anti-patterns to avoid:**

- Restating code (`// increment i by 1`)
- Novel-length explanations (extract a helper with a better name
  instead)
- Comments that duplicate what the code says — they drift out of sync

## Cargo-culted imports

If a file doesn't reference `React.SomeName` anywhere, don't
`import type * as React from "react"`. The modern JSX transform
handles JSX-only files without any React import. TypeScript will
flag unused imports on build.

## Tailwind gotcha: no dynamic class strings

Tailwind's JIT compiler scans source files for **literal** class
names. This does not work:

```tsx
const cls = `${breakpoint}:flex`  // ← invisible to Tailwind
```

Instead, map to a static string:

```tsx
const cls = breakpoint === "md" ? "md:flex" : "lg:flex"
```

## Git operations

- Use `git mv` when renaming or moving files — preserves history.
- Rebase or amend only local (unpushed) commits. Once pushed, treat
  history as immutable.
