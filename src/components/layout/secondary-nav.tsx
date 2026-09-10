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
 *
 * Visual: shadcn Nova "pill" tab style. A muted rounded tray holds
 * the tabs; the active tab fills to the background color with a
 * subtle shadow, matching Vercel/Linear dashboards. We hand-roll
 * the pill classes onto real <a> anchors (rather than using
 * ui/tabs.tsx directly) because ui/tabs is React Aria Tabs, which
 * manages selection internally and doesn't support anchor
 * navigation. Real links preserve middle-click, Cmd+click, browser
 * tooltips, and crawlability — the right primitive for
 * navigate-between-pages, not switch-between-panels.
 *
 * Layout structure:
 *   <nav>                    ← full-width landmark, py-3 breathing room
 *     <Container>            ← page-aligned gutter (matches Header/Footer)
 *       <div tray>           ← inline-flex w-fit, hugs its tabs flush-left
 *         <a>...<a>          ← individual pills
 *
 * The inner <div> is what hugs the tabs — Container provides the
 * horizontal alignment with the rest of the page (logo, headings,
 * footer text), and the div sits flush-left inside that gutter.
 */

import { cn } from 'cn'
import { Container } from '@/components/layout/container'
import { useLayout } from '@/components/layout/layout-provider'
import type { NavLeaf } from './types'

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
   *
   * Typed as NavLeaf[] (not NavItem[]) — dropdowns don't
   * semantically belong in a tab bar. If you need multi-level
   * navigation at the section level, use Sidebar with NavGroup[].
   */
  items?: NavLeaf[]
  /**
   * Currently active URL. Exact match on `item.href === activeHref`
   * applies `aria-current="page"` and active-state styling. When
   * omitted, reads from LayoutProvider's `activeHref`.
   */
  activeHref?: string
  /**
   * Layout width behavior — controls the OUTER Container's max
   * width (which sets where the tray's left edge lands). The tray
   * itself always hugs its content; `size` only affects the page
   * gutter alignment.
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
 * Horizontal sub-nav bar. Renders a pill-style row of links below
 * the Header. Active item gets a filled background pill with subtle
 * shadow. On mobile the component renders nothing — Header's drawer
 * picks up the same items via LayoutProvider context.
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
        // Full-width landmark with vertical padding for row
        // breathing room. Horizontal alignment is delegated to
        // the inner Container so tabs line up with Header/Footer.
        'w-full py-3 mb-2',
      )}
    >
      <Container size={size === 'full' ? 'full' : '2xl'}>
        <div
          className={cn(
            // The pill "tray" — muted background containing all
            // tabs. Matches Nova's TabsList variant="default":
            // rounded-lg, bg-muted, small inner padding so active
            // pills have room to fill without touching the tray
            // edge. inline-flex + w-fit makes the tray hug its
            // tabs rather than stretching across Container's full
            // inner width, so it reads as a compact segmented
            // control flush against the page's left gutter.
            'inline-flex w-fit items-center gap-1 rounded-lg bg-muted p-[3px]',
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
                  // Base pill — matches Nova's TabsTrigger idle
                  // state: rounded-md so the pill sits nicely
                  // inside the rounded-lg tray, small horizontal
                  // padding, subtle muted text color that lifts
                  // to foreground on hover.
                  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium',
                  // Idle color + hover — muted-foreground /
                  // foreground matches Header's inline nav for
                  // cross-component consistency.
                  'text-muted-foreground transition-colors hover:text-foreground',
                  // Active state — mirrors Nova's data-selected:
                  // background fills to page bg (creating the
                  // "pill lifted off the tray" effect), text goes
                  // full foreground, subtle shadow for depth.
                  'data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-sm',
                  // Focus ring — focus-visible only, matches kit
                  // standard.
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
              >
                {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
                {item.label}
                {item.external && <span className="sr-only"> (opens in new window)</span>}
              </a>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

export { SecondaryNav, type SecondaryNavProps }
