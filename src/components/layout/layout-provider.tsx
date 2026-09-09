/**
 * LayoutProvider — shares layout config across page-chrome components.
 *
 * Some layout components (SecondaryNav, Sidebar) need to appear in
 * two places: their own dedicated slot on desktop, and inside the
 * Header's mobile drawer. Rather than duplicate their `items` prop
 * on both Header and the component itself, consumers pass config
 * to a single provider and both components read it.
 *
 * The provider is optional — SecondaryNav and Sidebar can be used
 * standalone by passing props directly. Explicit props always
 * override context (standard React pattern).
 *
 * `secondaryNavLabel` / `sidebarNavLabel` are visible drawer
 * headings, separate from the components' `aria-label` (which is
 * the landmark name for screen readers). Usually you'll set both
 * to the same value, but they're independent so consumers can pick
 * a shorter drawer heading if the aria-label is verbose (e.g.,
 * aria-label="Product documentation sections", drawer heading="Docs").
 *
 * @example
 * <LayoutProvider
 *   secondaryNav={[
 *     { href: "/docs/overview", label: "Overview" },
 *     { href: "/docs/theming", label: "Theming" },
 *   ]}
 *   secondaryNavLabel="Documentation"
 *   activeHref={pathname}
 * >
 *   <Header logo={...} nav={primaryNav} />
 *   <SecondaryNav aria-label="Documentation" />
 *   <Main>...</Main>
 *   <Footer copyright={...} />
 * </LayoutProvider>
 */

import * as React from 'react'
import type { NavLeaf, NavGroup } from './types'

// ---------------------------------------------------------------
// Context
// ---------------------------------------------------------------

type LayoutContextValue = {
  /**
   * Items for the SecondaryNav component. When present, Header's
   * mobile drawer will render them below the primary nav.
   *
   * Typed as NavLeaf[] because SecondaryNav doesn't support
   * dropdowns — its consumers are tabs, which shouldn't have
   * submenus. (Header's `nav` prop still accepts NavItem[] with
   * NavParent dropdowns; those live on the primary nav only.)
   */
  secondaryNav?: NavLeaf[]
  /**
   * Visible heading text for the secondary-nav section inside
   * Header's mobile drawer. When omitted, the drawer uses a
   * generic fallback ("Section"). Usually set to the same value
   * as SecondaryNav's `aria-label` for consistency.
   */
  secondaryNavLabel?: string
  /**
   * Items for the Sidebar component. When present, Header's mobile
   * drawer will render them below the primary nav (and below
   * secondaryNav if both are present).
   *
   * Typed as (NavLeaf | NavGroup)[] — Sidebar supports grouping
   * as its hierarchy primitive but not dropdowns.
   */
  sidebarNav?: (NavLeaf | NavGroup)[]
  /**
   * Visible heading text for the sidebar section inside Header's
   * mobile drawer. When omitted, the drawer uses a generic
   * fallback ("Pages"). Usually set to the same value as Sidebar's
   * `aria-label` for consistency.
   */
  sidebarNavLabel?: string
  /**
   * Currently active URL. Used by SecondaryNav and Sidebar to
   * apply `aria-current="page"` and active-state styling. Match
   * is exact (`item.href === activeHref`).
   */
  activeHref?: string
}

// Safe default: an empty object. useLayout() never returns
// undefined, so consumers can destructure without null-checks.
// A component with no provider above it behaves as if all
// context fields were omitted — SecondaryNav/Sidebar fall back
// to their own props or render nothing.
const LayoutContext = React.createContext<LayoutContextValue>({})

// ---------------------------------------------------------------
// Provider
// ---------------------------------------------------------------

type LayoutProviderProps = LayoutContextValue & {
  children: React.ReactNode
}

/**
 * Wraps a page tree with shared layout config. Reads values off
 * its own props and hands them to the context. No internal state.
 *
 * Rendering is a pass-through — no wrapper element, so it doesn't
 * affect layout or introduce a DOM node. Consumers keep full
 * control over the page's flex/grid structure.
 */
function LayoutProvider({ children, ...value }: LayoutProviderProps) {
  // Memoize the context value so consumers don't re-render on
  // every parent render. The dependency list is the individual
  // config fields — object identity of `value` changes each
  // render, so we can't just pass `value` directly.
  const memoized = React.useMemo<LayoutContextValue>(
    () => ({
      secondaryNav: value.secondaryNav,
      secondaryNavLabel: value.secondaryNavLabel,
      sidebarNav: value.sidebarNav,
      sidebarNavLabel: value.sidebarNavLabel,
      activeHref: value.activeHref,
    }),
    [
      value.secondaryNav,
      value.secondaryNavLabel,
      value.sidebarNav,
      value.sidebarNavLabel,
      value.activeHref,
    ],
  )

  return <LayoutContext.Provider value={memoized}>{children}</LayoutContext.Provider>
}

// ---------------------------------------------------------------
// Hook
// ---------------------------------------------------------------

/**
 * Read layout config from the nearest LayoutProvider.
 *
 * Returns an empty object if no provider is above the caller,
 * so destructuring is always safe. Consumers should treat every
 * field as potentially undefined.
 *
 * @example
 * function SecondaryNav({ items: itemsProp, activeHref: activeProp }: Props) {
 *   const ctx = useLayout()
 *   // Explicit prop overrides context, context falls back to []
 *   const items = itemsProp ?? ctx.secondaryNav ?? []
 *   const activeHref = activeProp ?? ctx.activeHref
 *   ...
 * }
 */
function useLayout(): LayoutContextValue {
  return React.useContext(LayoutContext)
}

export { LayoutProvider, useLayout, type LayoutContextValue, type LayoutProviderProps }
