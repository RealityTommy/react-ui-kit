/**
 * App — demo router.
 *
 * Tiny hash router: reads `window.location.hash`, maps it to one
 * of the demo pages in `src/pages/`, and re-renders on hashchange.
 *
 * Why hash routing (not React Router) for the demo:
 * - Zero dependency footprint — the library shouldn't endorse a
 *   specific router; consumers bring their own.
 * - No server config needed — works under `pnpm dev` and
 *   `pnpm build` identically.
 * - Tiny code; matches the demo's throwaway nature.
 *
 * Each demo page is a self-contained shell (its own Header,
 * SkipLink, Footer). The router just picks which one to mount.
 */

import * as React from 'react'
import { routes } from '@/pages'

// ---------------------------------------------------------------
// Hash router
// ---------------------------------------------------------------

/**
 * Extract the pathname from a `window.location.hash` string.
 *
 * `#/`                    → "/"
 * `#/layouts/secondary`   → "/layouts/secondary"
 * empty / missing         → "/"
 *
 * @example
 * hashToPath("#/layouts/sidebar")  // → "/layouts/sidebar"
 * hashToPath("")                   // → "/"
 */
function hashToPath(hash: string): string {
  if (!hash || hash === '#' || hash === '#/') return '/'
  // Strip leading `#` — the remainder is the path.
  return hash.replace(/^#/, '') || '/'
}

/**
 * Subscribe to `window.location.hash` changes and return the
 * current pathname. Re-renders the caller on every hashchange.
 *
 * @example
 * function App() {
 *   const path = useHashRoute()
 *   const route = routes.find((r) => r.path === path) ?? routes[0]
 *   return <route.component />
 * }
 */
function useHashRoute(): string {
  const [path, setPath] = React.useState(() => hashToPath(window.location.hash))

  React.useEffect(() => {
    function onChange() {
      setPath(hashToPath(window.location.hash))
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return path
}

/**
 * Resolve a pathname to the most specific known route.
 *
 * Demo navigation includes child paths to show how a layout handles
 * sibling pages. Until those child pages have their own content, keep
 * them inside their parent layout instead of sending people to Home.
 *
 * @example
 * findRoute('/layouts/sidebar/theming') // → Sidebar layout route
 * findRoute('/not-a-route')              // → Home route
 */
function findRoute(path: string) {
  return (
    routes.find((route) => route.path === path) ??
    routes
      .filter((route) => route.path !== '/')
      .filter((route) => path.startsWith(`${route.path}/`))
      .sort((a, b) => b.path.length - a.path.length)[0] ??
    routes[0]
  )
}

// ---------------------------------------------------------------
// App
// ---------------------------------------------------------------

/**
 * Root demo component. Picks a page from the `routes` table based
 * on `window.location.hash` and renders it. Unknown hashes fall
 * back to the first route (Home).
 *
 * @example
 * // Mounted by main.tsx as the app root:
 * createRoot(document.getElementById('root')!).render(<App />)
 */
function App() {
  const path = useHashRoute()

  // Resolve exact routes first, then keep known layout children inside
  // their parent layout until those child pages have real content.
  const route = findRoute(path)
  const Page = route.component

  return <Page />
}

export default App
