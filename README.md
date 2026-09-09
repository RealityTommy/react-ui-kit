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

# Run the demo pages at http://localhost:5173
pnpm dev

# Verify (before committing)
pnpm lint
pnpm build
```

Node 24 + pnpm 12 (via corepack) recommended.

The demo app is a hash-routed showcase of the layout components — visit
`#/`, `#/layouts/secondary`, `#/layouts/sidebar`, `#/layouts/full` (or use
the Layouts dropdown in the header nav) to see each composition pattern.

## Repo structure

```
src/
├── components/
│   ├── ui/                        ← shadcn-managed primitives
│   │   ├── button.tsx             ← Button + LinkButton (React Aria)
│   │   ├── dialog.tsx             ← centered modal
│   │   ├── dropdown-menu.tsx      ← click-to-open menu (used by Header)
│   │   ├── sheet.tsx              ← side drawer (used by MobileNav)
│   │   └── tooltip.tsx            ← hover/focus tooltip (used by Sidebar)
│   └── layout/                    ← hand-written layouts
│       ├── container.tsx          ← max-width + responsive padding
│       ├── main.tsx               ← <main> landmark with size presets
│       ├── footer.tsx             ← copyright + secondary links
│       ├── page-body.tsx          ← Sidebar+Main flex wrapper w/ size cap
│       ├── secondary-nav.tsx      ← horizontal sub-nav below Header
│       ├── layout-provider.tsx    ← shared config for multi-slot components
│       ├── types.ts               ← NavLeaf, NavParent, NavGroup, guards
│       ├── header/                ← multi-file: Header + SkipLink + MobileNav
│       │   ├── index.ts
│       │   ├── header.tsx
│       │   ├── mobile-nav.tsx
│       │   └── skip-link.tsx
│       └── sidebar/               ← multi-file: Sidebar (labeled + icon-only)
│           ├── index.ts
│           └── sidebar.tsx
├── pages/                         ← demo pages (not part of the library)
│   ├── index.ts                   ← routes table + primary nav
│   ├── home.tsx
│   ├── layouts-secondary.tsx
│   ├── layouts-sidebar.tsx
│   └── layouts-full.tsx
├── lib/
│   └── utils.ts                   ← cn() helper
├── App.tsx                        ← hash router for the demo
├── main.tsx                       ← Vite entry
└── index.css                      ← Tailwind entry + global tokens
```

Each meaningful folder has its own README explaining what belongs there and why:

- [`src/components/README.md`](./src/components/README.md) — folder layout overview
- [`src/components/ui/README.md`](./src/components/ui/README.md) — shadcn-managed rules
- [`src/components/layout/README.md`](./src/components/layout/README.md) — hand-authored component pattern, layout composition, NavItem types

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for commit conventions, comment style,
verification steps, and debugging playbook.

## What's built

**Primitives (`ui/`):**

- Button + LinkButton (React Aria)
- Dialog (centered modal)
- DropdownMenu (click-to-open, React Aria)
- Sheet (side drawer)
- Tooltip (hover/focus, React Aria)

**Layouts (`layout/`):**

- **Container** — max-width + responsive padding, 6 size variants
- **Header** — sticky nav with scroll-triggered blur, mobile hamburger
  drawer, prop-configurable breakpoint, `contained` / `full` size,
  supports NavItem dropdowns via `NavParent`
- **Main** — `<main id="main-content">` landmark with `contained` /
  `full` size presets
- **Footer** — copyright + optional links with `contained` / `full`
  size, semantic `<footer>` landmark
- **PageBody** — flex wrapper for `Sidebar + Main`, owns the size
  cap so the pair aligns with Header/Footer above
- **SecondaryNav** — horizontal sub-nav that sits under Header,
  hidden on mobile (drawer takes over)
- **Sidebar** — left rail with `labeled` (240px, icon + label) and
  `icon-only` (56px, tooltip on hover) variants; supports flat items
  or `NavGroup`s
- **LayoutProvider** — shared config context so `SecondaryNav` and
  `Sidebar` items also appear in Header's mobile drawer without
  duplication
- **SkipLink** — WCAG 2.4.1 keyboard bypass to `#main-content`

Header, Main, Footer, PageBody, and SecondaryNav share a single
`size` prop (`"contained"` default = Container 2xl ~1536px, or
`"full"` = edge-to-edge with padding). Keep all chrome components
in sync for a consistent page rhythm.

**Navigation types (`layout/types.ts`):**

- `NavLeaf` — real link with `href`, `label`, optional `external`
  and `icon` (Lucide component)
- `NavParent` — dropdown trigger: `label` + `children: NavLeaf[]`,
  one level deep, only used in Header's primary nav
- `NavGroup` — labeled group of leaves, only used in Sidebar for
  section headings
- Type guards: `isNavParent`, `isNavGroup`

## Quick start — full page shell

```tsx
import { Home, Book, Palette } from "lucide-react"
import { Header, SkipLink } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { Footer } from "@/components/layout/footer"
import { LinkButton } from "@/components/ui/button"

function App() {
  return (
    <>
      <SkipLink />
      {/* All chrome components default to size="contained"
          (Container 2xl ~1536px). Switch all to size="full"
          for edge-to-edge dashboards. */}
      <Header
        logo={{ href: "/", label: "My Site" }}
        nav={[
          { href: "/", label: "Home", icon: Home },
          {
            // NavParent — renders as a dropdown on desktop
            // and an indented group in the mobile drawer.
            label: "Docs",
            icon: Book,
            children: [
              { href: "/docs/intro", label: "Intro" },
              { href: "/docs/theming", label: "Theming", icon: Palette },
            ],
          },
        ]}
        actions={
          <LinkButton href="/github" variant="outline" size="sm">
            GitHub
          </LinkButton>
        }
      />
      <Main>
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

## Docs-site shell (with SecondaryNav + Sidebar)

`LayoutProvider` shares config across chrome components so the mobile
drawer stays unified. `PageBody` wraps `Sidebar + Main` so the pair
caps at the same width as `Header` / `Footer` above.

```tsx
import { Header, SkipLink } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { Footer } from "@/components/layout/footer"
import { PageBody } from "@/components/layout/page-body"
import { LayoutProvider } from "@/components/layout/layout-provider"
import { SecondaryNav } from "@/components/layout/secondary-nav"
import { Sidebar } from "@/components/layout/sidebar"

function DocsShell({ children, pathname }) {
  return (
    <LayoutProvider
      secondaryNav={sectionTabs}
      secondaryNavLabel="Documentation"     // drawer heading + landmark
      sidebarNav={sidebarEntries}
      sidebarNavLabel="On this page"
      activeHref={pathname}
    >
      <SkipLink />
      <Header logo={{ href: "/", label: "My Docs" }} nav={primaryNav} />
      <SecondaryNav aria-label="Documentation" />
      <PageBody>
        <Sidebar aria-label="On this page" />
        <Main size="full">{children}</Main>
      </PageBody>
      <Footer copyright={<>© 2026 Your Name</>} />
    </LayoutProvider>
  )
}
```

## License

[MIT](./LICENSE) — copy, adapt, use freely.
