# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

## Repo structure

```
src/
├── components/
│   ├── ui/          ← shadcn-managed primitives (Button, Dialog, Sheet)
│   └── layout/      ← hand-written layouts (Container, Header)
├── lib/
│   └── utils.ts     ← cn() helper
├── App.tsx          ← demo page — not part of the library
├── main.tsx         ← Vite entry
└── index.css        ← Tailwind entry + global tokens
```

Each meaningful folder has its own README explaining what belongs
there and why:

- [`src/components/README.md`](./src/components/README.md) — folder
  layout overview
- [`src/components/ui/README.md`](./src/components/ui/README.md) —
  the shadcn-managed rules
- [`src/components/layout/README.md`](./src/components/layout/README.md) —
  the hand-authored component pattern

Start with those before adding new components. See
[`CONTRIBUTING.md`](./CONTRIBUTING.md) for commit conventions,
comment style, and verification steps.

## What's built

**Primitives (`ui/`):**
- Button + LinkButton (React Aria)
- Dialog (centered modal)
- Sheet (side drawer)

**Layouts (`layout/`):**
- Container — max-width + responsive padding
- Header — sticky nav with mobile drawer and skip link

## Quick start — Header preset

```tsx
import { Header, SkipLink } from "@/components/layout/header"
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
      <main id="main-content">…</main>
    </>
  )
}
```
