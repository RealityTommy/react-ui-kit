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
