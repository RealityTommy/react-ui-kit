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
 * @example
 * // Full page shell with shared config:
 * <LayoutProvider
 *   secondaryNav={[
 *     { href: "/docs/overview", label: "Overview" },
 *     { href: "/docs/theming", label: "Theming" },
 *   ]}
 *   activeHref={pathname}
 * >
 *   <Header logo={...} nav={primaryNav} />
 *   <SecondaryNav aria-label="Docs" />
 *   <Main>...</Main>
 *   <Footer copyright={...} />
 * </LayoutProvider>
 */

import * as React from 'react'
import type { NavItem, NavGroup } from './types'

// ---------------------------------------------------------------
// Context
// ---------------------------------------------------------------

type LayoutContextValue = {
  /**
   * Items for the SecondaryNav component. When present, Header's
   * mobile drawer will render them below the primary nav.
   */
  secondaryNav?: NavItem[]
  /**
   * Items for the Sidebar component. When present, Header's mobile
   * drawer will render them below the primary nav (and below
   * secondaryNav if both are present).
   */
  sidebarNav?: (NavItem | NavGroup)[]
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
      sidebarNav: value.sidebarNav,
      activeHref: value.activeHref,
    }),
    [value.secondaryNav, value.sidebarNav, value.activeHref],
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
