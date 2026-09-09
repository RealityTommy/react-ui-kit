/**
 * Shared types for hand-written layout components.
 *
 * When a type is used by two or more components in layout/, it
 * lives here rather than in one component's barrel. Keeps
 * cross-references clean and prevents circular-feeling imports.
 */

import type { LucideIcon } from 'lucide-react'

// ---------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------

/**
 * A single item in a nav-style link list.
 *
 * Used by Header (primary nav + mobile drawer), Footer (bottom
 * link row), SecondaryNav (horizontal tabs), and Sidebar (left rail).
 *
 * @property href     - The URL the link points to.
 * @property label    - Visible text for the link.
 * @property external - If true, opens in a new tab with proper
 *                      rel attributes and a screen-reader hint.
 * @property icon     - Optional Lucide icon component. Rendered
 *                      before the label. `LucideIcon` is the type
 *                      of any Lucide export (e.g., `Home`, `Book`).
 *                      Any icon-shaped component satisfies this
 *                      type if you need a custom SVG later.
 */
export type NavItem = {
  href: string
  label: string
  external?: boolean
  icon?: LucideIcon
}

/**
 * A labeled group of nav items.
 *
 * Used by Sidebar to render section headings above item lists
 * (e.g., "Getting Started", "Components"). Consumers pass
 * `NavGroup[]` for grouped rendering or `NavItem[]` for flat.
 *
 * @property label - Group heading text.
 * @property items - Items within the group.
 */
export type NavGroup = {
  label: string
  items: NavItem[]
}

/**
 * Type guard distinguishing a NavGroup from a NavItem.
 *
 * Used by Sidebar to render either mode from a mixed-type array.
 * Checks for the `items` property since `NavItem` has `href` and
 * `NavGroup` has `items` — no overlap.
 *
 * @example
 * const entries: (NavItem | NavGroup)[] = [...]
 * entries.map(entry =>
 *   isNavGroup(entry)
 *     ? <GroupRenderer group={entry} />
 *     : <ItemRenderer item={entry} />
 * )
 */
export function isNavGroup(x: NavItem | NavGroup): x is NavGroup {
  return 'items' in x
}
