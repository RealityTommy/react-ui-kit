/**
 * Demo pages barrel + shared demo config.
 *
 * Exports the route table used by App.tsx's hash router, plus the
 * shared nav configs (primaryNav, footerLinks) that every demo
 * page consumes. Centralizing these means one edit updates the
 * whole demo — a page can't drift from the rest by accident.
 *
 * When adding a new demo page:
 *   1. Create the page in this folder.
 *   2. Import it here.
 *   3. Add an entry to `routes` with a hash path.
 *   4. If the page should appear in Header's primary nav, add it
 *      to `primaryNav` (a top-level entry or inside the Layouts
 *      dropdown).
 */

import type { LucideIcon } from 'lucide-react'
import type { NavItem, NavLeaf } from '@/components/layout/types'
import { HomePage } from './home'
import { LayoutsSecondaryPage } from './layouts-secondary'
import { LayoutsSidebarPage } from './layouts-sidebar'
import { LayoutsFullPage } from './layouts-full'

// ---------------------------------------------------------------
// Routes
// ---------------------------------------------------------------

type Route = {
  path: string
  component: React.ComponentType
}

/**
 * Route table for the hash router in App.tsx. First entry is the
 * home / fallback route — unknown hashes fall back to it.
 */
const routes: Route[] = [
  { path: '/', component: HomePage },
  { path: '/layouts/secondary', component: LayoutsSecondaryPage },
  { path: '/layouts/sidebar', component: LayoutsSidebarPage },
  { path: '/layouts/full', component: LayoutsFullPage },
]

// ---------------------------------------------------------------
// Shared nav config
// ---------------------------------------------------------------

/**
 * Primary nav shown in Header on every demo page. `Home` is a
 * plain leaf; `Layouts` is a parent with children — exercises both
 * NavLeaf and NavParent rendering paths in the header.
 */
const primaryNav: NavItem[] = [
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

// ---------------------------------------------------------------
// GitHub brand mark
// ---------------------------------------------------------------

/**
 * Inline GitHub mark. Lucide doesn't ship brand icons (policy —
 * they only carry generic UI icons; brand marks belong to their
 * owners). Rather than pull in a brand-icon dep for a single glyph
 * in demo code, we hand-roll a component matching the LucideIcon
 * shape so it drops into NavLeaf.icon without special-casing.
 *
 * SVG path is the official GitHub mark (from primer/octicons,
 * MIT-licensed). currentColor lets it inherit text color from the
 * parent link, matching how Lucide icons behave.
 *
 * If we later add more brand icons, promote this to a dedicated
 * `demo-icons.tsx` module. Single icon isn't worth the extra file.
 */
const GithubIcon: LucideIcon = (({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)) as unknown as LucideIcon

/**
 * Shared Footer links, applied to every demo page. Centralized so
 * one edit updates the entire demo footer — pages can't drift.
 *
 * GitHub is marked `external: true` so Footer renders proper
 * target="_blank" + rel + a screen-reader hint that a new tab opens
 * (WCAG G201). The inline GithubIcon renders before the label.
 */
const footerLinks: NavLeaf[] = [
  {
    href: 'https://github.com/RealityTommy/react-ui-kit',
    label: 'GitHub',
    icon: GithubIcon,
    external: true,
  },
]

export { routes, primaryNav, footerLinks }
