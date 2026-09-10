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

  // Exact-match lookup; fall back to Home if the hash doesn't
  // match anything known (e.g., typo, stale bookmark).
  const route = routes.find((r) => r.path === path) ?? routes[0]
  const Page = route.component

  return <Page />
}

export default App
