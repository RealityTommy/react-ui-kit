# react-ui-kit

A personal React UI framework — reusable layout and navigation components, built to be dropped into future React projects.

Distributed shadcn/ui-style: components live in your project, fully owned and editable. No versioned package to fight with.

## Stack

- **Vite** — dev server and build
- **React** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Radix UI** — unstyled, accessible primitives
- **shadcn-style registry** — copy components into your project, own them

Accessibility target: **WCAG 2.1 AA** baked in from day one.

## v1 scope

Layout and navigation only — deliberately narrow so v1 actually ships.

- Header (logo / nav / actions slots)
- Primary navigation (desktop horizontal)
- Mobile menu (hamburger → drawer/sheet)
- Secondary navigation (sub-nav or sidebar)
- Footer
- Container / layout wrappers (page shell, section)
- Design tokens (colors, spacing, typography scale)
- Theme provider (light / dark)

## v2 (planned, not yet built)

Form and feedback components — added once v1 is used in a real project.

- Button, Input, Textarea, Select, Checkbox, Radio
- Dialog / Modal, Toast, Tooltip
- Card, Badge

## Getting started

*(To be filled in after Phase 2 scaffold. Will cover: clone, `pnpm install`, `pnpm dev`, and how to copy a component into a consuming project.)*

## Using components in another project

*(To be filled in once the registry pattern is set up in Phase 3. Rough idea: run a small CLI or copy from `src/components/` into your target project, then customize freely.)*

## Project structure

*(To be filled in after Phase 2.)*

## Development

*(To be filled in after Phase 2 — dev server, build, lint, typecheck commands.)*

## Status

Early — actively being built as a learning project. See [CONTRIBUTING.md](./CONTRIBUTING.md) for how the codebase is developed.

## License

[MIT](./LICENSE)

## AI disclosure

This project is developed with AI assistance in a coaching role. Design decisions and code are reviewed and typed by a human before commit.
