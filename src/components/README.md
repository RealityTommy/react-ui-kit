# Components

This directory contains all UI components in the kit, organized by
authorship model.

## Folder layout

- **`ui/`** — Managed by the [shadcn CLI](https://ui.shadcn.com). These
  are primitives (Button, Dialog, Sheet, etc.) generated from the
  `aria-nova` style preset with React Aria under the hood. See
  [`ui/README.md`](./ui/README.md) for the "don't hand-edit" rules.

- **`layout/`** — Hand-written layout primitives and composed
  components (Container, Header, Main, Footer). These follow our
  in-repo authoring conventions. See
  [`layout/README.md`](./layout/README.md) for the pattern.

## Which folder should a new component go in?

| Question | Answer |
|---|---|
| Did the shadcn CLI generate it? | `ui/` |
| Are you writing it by hand? | `layout/` (or a new sibling folder) |
| Is it a primitive (Button, Input, Dialog)? | Usually `ui/` — check shadcn's registry first |
| Is it a composition (Header, Footer, PageShell)? | `layout/` |

**Never** nest `layout/` inside `ui/` or vice versa. shadcn's CLI may
prune or reformat files under `ui/` on future updates — keep
hand-written work outside that blast radius.

## Shared types

Types used by two or more layout components live in
[`layout/types.ts`](./layout/types.ts) — currently `NavItem`, shared by
Header and Footer. When a type is used by exactly one component, keep
it in that component's file. When a second component starts using it,
promote it to `layout/types.ts` and re-export from any barrels that
were previously exporting it (so existing imports keep working).

## Import paths

Both folders resolve via the `@/*` path alias:

```ts
import { Button, LinkButton } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Main } from "@/components/layout/main"
import { Footer } from "@/components/layout/footer"
import { Header, SkipLink, type NavItem } from "@/components/layout/header"
```

Multi-file components (like Header) expose a barrel `index.ts` so
consumers never need to reach inside the folder.
