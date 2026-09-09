/**
 * SecondaryNav — horizontal sub-nav bar below the Header.
 *
 * Sits between Header and Main to provide section-level navigation
 * (e.g., Docs → Overview / Installation / Theming). Not sticky —
 * scrolls away with content. Hidden on mobile; Header's drawer
 * renders these items instead (via LayoutProvider context).
 *
 * Reads `items` and `activeHref` from LayoutProvider when props
 * are omitted, so the same config can drive both the desktop nav
 * and the mobile drawer without duplication. Explicit props always
 * override context.
 *
 * Renders semantic <nav aria-label="..."> — the aria-label prop
 * is required because multiple nav landmarks need distinct names
 * for screen-reader landmark navigation.
 */

import { cn } from 'cn'
import { Container } from '@/components/layout/container'
import { useLayout } from '@/components/layout/layout-provider'
import type { NavItem } from './types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type SecondaryNavProps = {
  /**
   * Accessible name for the landmark. Required — screen readers
   * announce this when users jump between page landmarks. Use a
   * short, distinctive label like "Docs" or "Settings".
   */
  'aria-label': string
  /**
   * Nav items. When omitted, reads from LayoutProvider's
   * `secondaryNav`. Explicit prop overrides context.
   */
  items?: NavItem[]
  /**
   * Currently active URL. Exact match on `item.href === activeHref`
   * applies `aria-current="page"` and active-state styling. When
   * omitted, reads from LayoutProvider's `activeHref`.
   */
  activeHref?: string
  /**
   * Layout width behavior.
   * - "contained" (default): Container 2xl (~1536px max-width),
   *   matches Header/Footer default alignment.
   * - "full": edge-to-edge with horizontal padding only.
   */
  size?: 'contained' | 'full'
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Horizontal sub-nav bar. Renders a tab-like row of links below
 * the Header. Active item gets an underline. On mobile the
 * component renders nothing — Header's drawer picks up the same
 * items via LayoutProvider context.
 *
 * @example
 * <LayoutProvider secondaryNav={docsNav} activeHref={pathname}>
 *   <Header logo={...} nav={primaryNav} />
 *   <SecondaryNav aria-label="Docs" />
 *   <Main>...</Main>
 * </LayoutProvider>
 *
 * @example
 * // Standalone (no provider), explicit props:
 * <SecondaryNav
 *   aria-label="Docs"
 *   items={[
 *     { href: "/docs/overview", label: "Overview" },
 *     { href: "/docs/theming", label: "Theming" },
 *   ]}
 *   activeHref="/docs/theming"
 * />
 */
function SecondaryNav({
  'aria-label': ariaLabel,
  items: itemsProp,
  activeHref: activeHrefProp,
  size = 'contained',
}: SecondaryNavProps) {
  const ctx = useLayout()

  // Explicit prop wins, then context, then empty array.
  const items = itemsProp ?? ctx.secondaryNav ?? []
  const activeHref = activeHrefProp ?? ctx.activeHref

  // No items resolved — render nothing. Safe no-op so consumers
  // can drop <SecondaryNav /> into a shell unconditionally.
  if (items.length === 0) return null

  return (
    <nav
      aria-label={ariaLabel}
      data-slot="secondary-nav"
      data-size={size}
      className={cn(
        // Hidden on mobile — Header's drawer renders these items.
        // Shown from md+ where the row has room to breathe.
        'hidden md:block',
        // Bottom border marks the boundary from Main content below.
        'w-full border-b border-border',
      )}
    >
      <Container
        size={size === 'full' ? 'full' : '2xl'}
        className={cn(
          // Horizontal scroll on overflow — tabs stay one line
          // rather than wrapping to a second row (which would
          // reintroduce a stacking/height problem).
          'flex items-center gap-1 overflow-x-auto',
        )}
      >
        {items.map((item) => {
          const isActive = item.href === activeHref
          return (
            <a
              key={item.href}
              href={item.href}
              // aria-current="page" on the active item — the
              // canonical way to mark "you are here" for screen
              // readers. We echo the same state to `data-active`
              // for CSS targeting.
              aria-current={isActive ? 'page' : undefined}
              data-active={isActive}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={cn(
                // Base: inline-flex for icon + label alignment,
                // gap-2 between icon and label, whitespace-nowrap
                // so labels don't wrap mid-item during scroll.
                'inline-flex items-center gap-2 whitespace-nowrap px-3 py-3 text-sm font-medium',
                // Underline lives on a transparent border by default
                // so the row height doesn't change when active
                // state toggles. Active flips border to foreground.
                'border-b-2 border-transparent',
                // Idle color + hover, matching Header's inline nav.
                'text-muted-foreground hover:text-foreground',
                // Active state — foreground text and visible underline.
                'data-[active=true]:text-foreground data-[active=true]:border-foreground',
                // Focus ring — focus-visible only, matches kit standard.
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              )}
            >
              {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
              {item.label}
              {item.external && <span className="sr-only"> (opens in new window)</span>}
            </a>
          )
        })}
      </Container>
    </nav>
  )
}

export { SecondaryNav, type SecondaryNavProps }
