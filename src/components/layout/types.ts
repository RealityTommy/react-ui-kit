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
 * A leaf nav item — a real link to a page.
 *
 * Used everywhere a nav renders individual clickable links: Header
 * (primary + drawer), Footer, SecondaryNav, Sidebar, and inside
 * NavParent.children (dropdown menus).
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
export type NavLeaf = {
  href: string
  label: string
  external?: boolean
  icon?: LucideIcon
}

/**
 * A parent nav item — a dropdown menu with child links.
 *
 * Only meaningful in Header's primary nav. Renders as a
 * `<MenuTrigger>` on desktop (dropdown menu) and as an indented
 * group under a label in the mobile drawer.
 *
 * Children are `NavLeaf[]` (not `NavItem[]`) — nesting is capped
 * at one level. Multi-level menus (mega-menus, deeply nested
 * settings trees) are out of scope for v1.
 *
 * Note: no `href`. Parents aren't clickable navigation targets —
 * they open the menu. If a "click to navigate AND open menu"
 * pattern is needed later, we'll introduce a separate NavSplitButton
 * or extend NavParent with an optional href then.
 *
 * @property label    - Visible text for the trigger.
 * @property icon     - Optional Lucide icon rendered before the label.
 * @property children - Menu items. One level deep (NavLeaf, not NavItem).
 */
export type NavParent = {
  label: string
  icon?: LucideIcon
  children: NavLeaf[]
}

/**
 * A nav entry — either a leaf link or a parent with a submenu.
 *
 * Consumers that support dropdowns (Header primary nav) accept
 * `NavItem[]`. Consumers that don't (Footer, SecondaryNav, Sidebar
 * items) accept `NavLeaf[]` directly — dropdowns don't make
 * semantic sense in those places.
 */
export type NavItem = NavLeaf | NavParent

/**
 * Type guard distinguishing a NavParent from a NavLeaf.
 *
 * Used by Header's inline nav and MobileNav to branch between
 * dropdown rendering and plain-link rendering.
 *
 * @example
 * nav.map(item =>
 *   isNavParent(item)
 *     ? <DropdownRenderer parent={item} />
 *     : <LinkRenderer leaf={item} />
 * )
 */
export function isNavParent(x: NavItem): x is NavParent {
  return 'children' in x
}

// ---------------------------------------------------------------
// Grouping (Sidebar)
// ---------------------------------------------------------------

/**
 * A labeled group of nav leaves.
 *
 * Used by Sidebar to render section headings above item lists
 * (e.g., "Getting Started", "Components"). Sidebar consumers pass
 * `NavGroup[]` for grouped rendering or `NavLeaf[]` for flat.
 *
 * Group items are `NavLeaf[]` (not `NavItem[]`) — dropdowns
 * don't belong inside sidebars. Grouping is Sidebar's hierarchy
 * primitive; dropdowns are Header's.
 *
 * @property label - Group heading text.
 * @property items - Leaf items within the group.
 */
export type NavGroup = {
  label: string
  items: NavLeaf[]
}

/**
 * Type guard distinguishing a NavGroup from a NavLeaf.
 *
 * Used by Sidebar to render either mode from a mixed-type array.
 * Checks for the `items` property since `NavLeaf` has `href` and
 * `NavGroup` has `items` — no overlap.
 *
 * @example
 * const entries: (NavLeaf | NavGroup)[] = [...]
 * entries.map(entry =>
 *   isNavGroup(entry)
 *     ? <GroupRenderer group={entry} />
 *     : <ItemRenderer item={entry} />
 * )
 */
export function isNavGroup(x: NavLeaf | NavGroup): x is NavGroup {
  return 'items' in x
}
