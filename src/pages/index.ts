/**
 * Demo pages barrel + route table.
 *
 * The kit's `App.tsx` uses a small hash router to switch between
 * these pages. Routes use path syntax like `#/layouts/secondary`
 * — hash routing means no server config and works identically
 * under `pnpm dev` and `pnpm build`.
 *
 * NOTE: Pages here are demos, not part of the library. They live
 * under `src/pages/` (not `src/components/`) to keep that
 * distinction visible.
 */

import type { NavItem } from '@/components/layout/types'
import { HomePage } from './home'
import { LayoutsSecondaryPage } from './layouts-secondary'
import { LayoutsSidebarPage } from './layouts-sidebar'
import { LayoutsFullPage } from './layouts-full'

// ---------------------------------------------------------------
// Route table
// ---------------------------------------------------------------

/**
 * A single demo route.
 *
 * - `path` is the hash-stripped URL (e.g., "/layouts/secondary").
 * - `component` renders the page.
 * - `href` is the anchor-usable form (with the `#` prefix).
 */
type DemoRoute = {
  path: string
  href: string
  label: string
  component: () => React.JSX.Element
}

/**
 * All demo routes, in menu display order. Consumed by:
 * - App.tsx to pick which page to render.
 * - primaryNav (below) to build Header nav (Home + Layouts dropdown).
 * - each demo page to derive its own `activeHref`.
 */
export const routes: DemoRoute[] = [
  { path: '/', href: '#/', label: 'Home', component: HomePage },
  {
    path: '/layouts/secondary',
    href: '#/layouts/secondary',
    label: 'Secondary',
    component: LayoutsSecondaryPage,
  },
  {
    path: '/layouts/sidebar',
    href: '#/layouts/sidebar',
    label: 'Sidebar',
    component: LayoutsSidebarPage,
  },
  {
    path: '/layouts/full',
    href: '#/layouts/full',
    label: 'Full',
    component: LayoutsFullPage,
  },
]

// ---------------------------------------------------------------
// Header primary nav
// ---------------------------------------------------------------

/**
 * Header nav for every demo page. Home is a leaf; the three
 * layouts pages are grouped under a "Layouts" NavParent dropdown.
 *
 * Kept here (not in each page) so all pages share one source of
 * truth — add a new demo route above and both the router and the
 * Header nav pick it up.
 */
export const primaryNav: NavItem[] = [
  { href: '#/', label: 'Home' },
  {
    label: 'Layouts',
    children: [
      { href: '#/layouts/secondary', label: 'Secondary' },
      { href: '#/layouts/sidebar', label: 'Sidebar' },
      { href: '#/layouts/full', label: 'Full' },
    ],
  },
]

export { HomePage, LayoutsSecondaryPage, LayoutsSidebarPage, LayoutsFullPage }
