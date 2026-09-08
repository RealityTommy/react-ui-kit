/**
 * Header module — public API barrel.
 *
 * Consumers should import from this file, not the individual
 * component files. That way, if we refactor the internal file
 * structure later, callers don't have to change their imports.
 *
 * @example
 * import { Header, SkipLink, type NavItem } from "@/components/layout/header"
 */

export { Header } from './header'
export { SkipLink } from './skip-link'

/**
 * A single item in the Header's `nav` prop.
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
