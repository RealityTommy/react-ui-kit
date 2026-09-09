# react-ui-kit

A personal, opinionated React component library. Layouts and navigation for
now — forms and feedback in v2. Built for reuse across my own projects.

Distribution model is shadcn-style: **copy the components you want into your
consuming project and edit freely.** No npm install, no lock-in.

## Stack

- **Vite** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** with the `aria-nova` preset — components are backed by
  [React Aria Components](https://react-spectrum.adobe.com/react-aria/) for
  accessibility depth over Radix
- **Lucide** icons, **Geist** font
- **MIT** licensed

## Getting started

```powershell
# Install dependencies
pnpm install

# Run the demo page at http://localhost:5173
pnpm dev

# Verify (before committing)
pnpm lint
pnpm build
```

Node 24 + pnpm 12 (via corepack) recommended.

## Repo structure

```
src/
├── components/
│   ├── ui/                    ← shadcn-managed primitives
│   │   ├── button.tsx         ← Button + LinkButton (React Aria)
│   │   ├── dialog.tsx         ← centered modal
│   │   └── sheet.tsx          ← side drawer
│   └── layout/                ← hand-written layouts
│       ├── container.tsx      ← max-width + responsive padding
│       ├── main.tsx           ← <main> landmark with size presets
│       ├── footer.tsx         ← copyright + secondary links
│       ├── types.ts           ← shared types (NavItem)
│       └── header/            ← multi-file: Header + SkipLink + MobileNav
│           ├── index.ts       ← public API barrel
│           ├── header.tsx
│           ├── skip-link.tsx
│           └── mobile-nav.tsx
├── lib/
│   └── utils.ts               ← cn() helper
├── App.tsx                    ← demo page (not part of the library)
├── main.tsx                   ← Vite entry
└── index.css                  ← Tailwind entry + global tokens
```

Each meaningful folder has its own README explaining what belongs there and why:

- [`src/components/README.md`](./src/components/README.md) — folder layout overview
- [`src/components/ui/README.md`](./src/components/ui/README.md) — shadcn-managed rules
- [`src/components/layout/README.md`](./src/components/layout/README.md) — hand-authored component pattern

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for commit conventions, comment style,
verification steps, and debugging playbook.

## What's built

**Primitives (`ui/`):**

- Button + LinkButton (React Aria)
- Dialog (centered modal)
- Sheet (side drawer)

**Layouts (`layout/`):**

- Container — max-width + responsive padding, 6 size variants
- Header — sticky nav with scroll-triggered blur, mobile hamburger drawer, prop-configurable breakpoint
- Main — `<main id="main-content">` landmark with `reading` / `app` size presets
- Footer — copyright + optional secondary links, semantic `<footer>` landmark
- SkipLink — WCAG 2.4.1 keyboard bypass to `#main-content`

## Quick start — full page shell

```tsx
import { Header, SkipLink } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { Footer } from "@/components/layout/footer"
import { LinkButton } from "@/components/ui/button"

function App() {
  return (
    <>
      <SkipLink />
      <Header
        logo={{ href: "/", label: "My Site" }}
        nav={[
          { href: "/docs", label: "Docs" },
          { href: "/blog", label: "Blog" },
        ]}
        actions={
          <LinkButton href="/github" variant="outline" size="sm">
            GitHub
          </LinkButton>
        }
      />
      <Main size="app">
        <h1>Page title</h1>
        <p>Content goes here.</p>
      </Main>
      <Footer
        copyright={<>© 2026 Your Name</>}
        links={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
      />
    </>
  )
}
```

## License

[MIT](./LICENSE) — copy, adapt, use freely.
