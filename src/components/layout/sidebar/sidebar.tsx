/**
 * Sidebar — left-rail navigation for section pages.
 *
 * Preset API: pass items (flat NavLeaves or NavGroups), get a
 * vertical link rail with active-state styling and optional
 * icon-only mode. Not sticky — scrolls with content.
 *
 * Composition: Sidebar doesn't wrap Main. Consumers place both
 * as siblings inside a flex container so the page owns its
 * layout. See @example blocks below.
 *
 * Two variants:
 * - `labeled` (default): 240px wide, icon + label per item,
 *   group headings visible.
 * - `icon-only`: 56px wide, icons only with hover/focus tooltips
 *   surfacing the label (React Aria Tooltip). Group labels hidden;
 *   groups separated by a subtle divider.
 *
 * Reads items and activeHref from LayoutProvider when props are
 * omitted, so Header's mobile drawer picks up the same config.
 * Hidden on mobile (drawer handles it).
 */

import { cn } from 'cn'
import { useLayout } from '@/components/layout/layout-provider'
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip'
import { isNavGroup, type NavLeaf, type NavGroup } from '../types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type SidebarVariant = 'labeled' | 'icon-only'

type SidebarProps = {
  /**
   * Accessible name for the landmark. Required — screen readers
   * announce this when jumping between page landmarks. Use a
   * short distinctive label like "Docs" or "Settings".
   */
  'aria-label': string
  /**
   * Nav entries — flat leaves or labeled groups. When omitted,
   * reads from LayoutProvider's `sidebarNav`. Explicit prop
   * overrides context.
   *
   * Typed as (NavLeaf | NavGroup)[] (not NavItem-based) — dropdowns
   * don't belong in a sidebar. Grouping is Sidebar's hierarchy
   * primitive; dropdowns are Header's.
   */
  items?: (NavLeaf | NavGroup)[]
  /**
   * Currently active URL. Exact match on `item.href === activeHref`
   * applies `aria-current="page"` and active-state styling. When
   * omitted, reads from LayoutProvider's `activeHref`.
   */
  activeHref?: string
  /**
   * Visual density.
   * - `labeled` (default): 240px wide, icon + label + group headings.
   * - `icon-only`: 56px wide, icons only with hover/focus tooltips.
   *   Requires every NavLeaf to have an `icon` — icon-only mode
   *   with a label-only item would render a blank clickable box.
   */
  variant?: SidebarVariant
}

// ---------------------------------------------------------------
// Item renderer
// ---------------------------------------------------------------

/**
 * Renders a single NavLeaf. Icon-only mode wraps in a TooltipTrigger
 * so the label surfaces on hover/focus without occupying rail space.
 *
 * Active state uses a transparent-border base + border-l-2 on
 * active — no layout shift when toggling active, consistent with
 * SecondaryNav's underline pattern.
 */
function SidebarItem({
  item,
  active,
  iconOnly,
}: {
  item: NavLeaf
  active: boolean
  iconOnly: boolean
}) {
  const link = (
    <a
      href={item.href}
      // aria-current="page" is the canonical "you are here" marker.
      // We echo to data-active for CSS targeting.
      aria-current={active ? 'page' : undefined}
      data-active={active}
      // In icon-only mode the label isn't visible, so we set
      // aria-label so screen readers still announce the item.
      // The Tooltip provides a sighted-user equivalent.
      aria-label={iconOnly ? item.label : undefined}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        // Base: flex + gap for icon-label alignment, block-level so
        // the full row is clickable, rounded for the hover surface.
        'flex items-center rounded-md text-sm font-medium',
        // Variant-driven padding: labeled has room for text, icon-only
        // is a tight 40px square inside the 56px rail.
        iconOnly ? 'justify-center p-2' : 'gap-3 px-3 py-2',
        // Left accent bar lives on a transparent border by default
        // so row width stays stable when active toggles.
        'border-l-2 border-transparent',
        // Idle color + hover.
        'text-muted-foreground hover:text-foreground hover:bg-muted',
        // Active state — foreground text, accent border, muted bg.
        'data-[active=true]:text-foreground data-[active=true]:border-foreground data-[active=true]:bg-muted',
        // Focus ring — focus-visible only, matches kit standard.
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      )}
    >
      {item.icon && (
        <item.icon className={cn('shrink-0', iconOnly ? 'size-5' : 'size-4')} aria-hidden="true" />
      )}
      {!iconOnly && item.label}
      {item.external && !iconOnly && <span className="sr-only"> (opens in new window)</span>}
    </a>
  )

  // Labeled mode — just the link, tooltip would be redundant.
  if (!iconOnly) return link

  // Icon-only mode — wrap in tooltip for sighted-user affordance.
  // delay={200} avoids tooltip flicker on rapid mouse movement.
  // placement="right" pops out from the rail toward the content.
  return (
    <TooltipTrigger delay={200}>
      {link}
      <Tooltip placement="right">{item.label}</Tooltip>
    </TooltipTrigger>
  )
}

// ---------------------------------------------------------------
// Group renderer
// ---------------------------------------------------------------

/**
 * Renders a group's heading + items. In icon-only mode the heading
 * is hidden (no room) but a top-border divider preserves the
 * visual grouping.
 */
function SidebarGroup({
  group,
  activeHref,
  iconOnly,
  isFirst,
}: {
  group: NavGroup
  activeHref: string | undefined
  iconOnly: boolean
  isFirst: boolean
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-0.5',
        // Space between groups (skip for the first group).
        !isFirst && 'mt-4',
        // In icon-only mode we add a top divider between groups
        // since the heading is hidden — otherwise groups blur together.
        !isFirst && iconOnly && 'border-t border-border pt-4',
      )}
    >
      {!iconOnly && (
        <div className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {group.label}
        </div>
      )}
      {group.items.map((item) => (
        <SidebarItem
          key={item.href}
          item={item}
          active={item.href === activeHref}
          iconOnly={iconOnly}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Left-rail navigation. Hidden on mobile — Header's drawer picks
 * up the same items via LayoutProvider context.
 *
 * @example
 * // With LayoutProvider (shared config with mobile drawer):
 * <LayoutProvider sidebarNav={docsSidebar} activeHref={pathname}>
 *   <Header logo={...} nav={primaryNav} />
 *   <div className="flex">
 *     <Sidebar aria-label="Docs" />
 *     <Main>...</Main>
 *   </div>
 * </LayoutProvider>
 *
 * @example
 * // Grouped items with icons:
 * import { Home, Book, Palette } from "lucide-react"
 * <Sidebar
 *   aria-label="Docs"
 *   items={[
 *     {
 *       label: "Getting Started",
 *       items: [
 *         { href: "/docs", label: "Overview", icon: Home },
 *         { href: "/docs/install", label: "Install", icon: Book },
 *       ],
 *     },
 *     {
 *       label: "Components",
 *       items: [
 *         { href: "/docs/theming", label: "Theming", icon: Palette },
 *       ],
 *     },
 *   ]}
 *   activeHref="/docs/theming"
 * />
 *
 * @example
 * // Icon-only rail (56px wide, tooltips on hover):
 * <Sidebar aria-label="Docs" variant="icon-only" items={...} />
 */
function Sidebar({
  'aria-label': ariaLabel,
  items: itemsProp,
  activeHref: activeHrefProp,
  variant = 'labeled',
}: SidebarProps) {
  const ctx = useLayout()

  // Explicit prop wins, then context, then empty array.
  const items = itemsProp ?? ctx.sidebarNav ?? []
  const activeHref = activeHrefProp ?? ctx.activeHref
  const iconOnly = variant === 'icon-only'

  // No items resolved — render nothing. Safe no-op.
  if (items.length === 0) return null

  return (
    <aside
      aria-label={ariaLabel}
      data-slot="sidebar"
      data-variant={variant}
      className={cn(
        // Hidden on mobile — Header's drawer handles these items.
        'hidden md:block',
        // Fixed width per variant: 240px labeled, 56px icon-only.
        iconOnly ? 'w-14' : 'w-60',
        // Right border marks the boundary from Main content.
        'shrink-0 border-r border-border',
        // Padding: tighter for icon-only rail.
        iconOnly ? 'py-4' : 'p-4',
      )}
    >
      <nav aria-label={ariaLabel} className="flex flex-col gap-0.5">
        {items.map((entry, i) =>
          isNavGroup(entry) ? (
            <SidebarGroup
              key={`group-${i}`}
              group={entry}
              activeHref={activeHref}
              iconOnly={iconOnly}
              isFirst={i === 0}
            />
          ) : (
            <SidebarItem
              key={entry.href}
              item={entry}
              active={entry.href === activeHref}
              iconOnly={iconOnly}
            />
          ),
        )}
      </nav>
    </aside>
  )
}

export { Sidebar, type SidebarProps, type SidebarVariant }
