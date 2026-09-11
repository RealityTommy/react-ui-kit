/**
 * App — demo router.
 *
 * Tiny history router: reads `window.location.pathname`, maps it to one
 * of the demo pages in `src/pages/`, and re-renders on navigation.
 *
 * Why history routing (not React Router) for the demo:
 * - Zero dependency footprint — the library shouldn't endorse a
 *   specific router; consumers bring their own.
 * - Clean, shareable URLs without a hash fragment.
 * - Tiny code; matches the demo's throwaway nature.
 *
 * Each demo page is a self-contained shell (its own Header,
 * SkipLink, Footer). The router just picks which one to mount.
 */

import * as React from 'react'
import { routes } from '@/pages'

// ---------------------------------------------------------------
// History router
// ---------------------------------------------------------------

/**
 * Normalize a browser pathname into the route format used by the demo.
 *
 * `/`                         → `/`
 * `/layouts/secondary/`      → `/layouts/secondary`
 * empty / missing            → `/`
 *
 * @example
 * pathnameToPath('/layouts/sidebar/') // → '/layouts/sidebar'
 * pathnameToPath('/')                 // → '/'
 */
function pathnameToPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

/**
 * Subscribe to browser history changes and return the current pathname.
 * Internal anchors are intercepted so navigation stays in the app without
 * a full reload; browser back/forward remains native through popstate.
 *
 * @example
 * function App() {
 *   const path = useHistoryRoute()
 *   const route = routes.find((r) => r.path === path) ?? routes[0]
 *   return <route.component />
 * }
 */
function useHistoryRoute(): string {
  const [path, setPath] = React.useState(() => pathnameToPath(window.location.pathname))

  React.useEffect(() => {
    function onPopState() {
      setPath(pathnameToPath(window.location.pathname))
    }

    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}`)
      setPath(pathnameToPath(url.pathname))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onClick)
    }
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
 * on `window.location.pathname` and renders it. Unknown paths fall
 * back to the first route (Home).
 *
 * @example
 * // Mounted by main.tsx as the app root:
 * createRoot(document.getElementById('root')!).render(<App />)
 */
function App() {
  const path = useHistoryRoute()

  // Resolve exact routes first, then keep known layout children inside
  // their parent layout until those child pages have real content.
  const route = findRoute(path)
  const Page = route.component

  return <Page />
}

export default App
