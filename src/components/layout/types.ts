/**
 * Shared types for hand-written layout components.
 *
 * When a type is used by two or more components in `layout/`, it
 * lives here rather than in one component's barrel. Keeps
 * cross-references clean and prevents circular-feeling imports.
 */

// ---------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------

/**
 * A single item in a nav-style link list.
 *
 * Used by Header (primary nav + mobile drawer) and Footer
 * (bottom link row).
 *
 * @property href     - The URL the link points to.
 * @property label    - Visible text for the link.
 * @property external - If true, opens in a new tab with proper
 *                      rel attributes and a screen-reader hint.
 */
export type NavItem = {
  href: string
  label: string
  external?: boolean
}
