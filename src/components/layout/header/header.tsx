/**
 * Header — sticky site header with logo, primary nav, and actions.
 *
 * Preset API: pass structured props, get an opinionated header
 * that handles responsive layout, accessibility landmarks, and
 * scroll-triggered styling automatically.
 *
 * Below `mobileBreakpoint`, the nav collapses into a hamburger
 * button that opens a right-side drawer (see mobile-nav.tsx).
 * At or above the breakpoint, nav links render inline.
 *
 * Nav items that have `children` (NavParent) render as dropdown
 * menus on desktop via React Aria's MenuTrigger; on mobile they
 * appear as labeled groups with indented children in the drawer.
 *
 * When a LayoutProvider is above Header in the tree with
 * `secondaryNav` or `sidebarNav` config, those items are rendered
 * as extra sections inside the mobile drawer — so consumers get
 * a single unified menu on mobile without SecondaryNav / Sidebar
 * needing their own drawers.
 *
 * Renders semantic <header> + <nav aria-label="Primary"> for
 * screen-reader landmark navigation.
 */

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from 'cn'
import { Container } from '@/components/layout/container'
import { useLayout } from '@/components/layout/layout-provider'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MobileNav } from './mobile-nav'
import { isNavParent, type NavItem, type NavLeaf, type NavParent } from '../types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type HeaderProps = {
  /** Brand mark shown on the left. Usually a link home. */
  logo: {
    href: string
    label: string
  }
  /**
   * Primary nav entries. Accepts a mix of NavLeaf (plain links)
   * and NavParent (dropdown triggers with children). Left-to-right
   * in render order.
   */
  nav: NavItem[]
  /** Right-side content: theme toggle, CTA button, avatar, etc. */
  actions?: React.ReactNode
  /**
   * Viewport width at which inline nav appears. Below this,
   * the nav collapses into a hamburger + drawer.
   * Default: "md" (768px). Use "lg" (1024px) if you have 7+
   * nav items or unusually long labels.
   */
  mobileBreakpoint?: 'md' | 'lg'
  /**
   * Layout width behavior.
   * - "contained" (default): Container 2xl (~1536px max-width).
   * - "full": edge-to-edge with horizontal padding only.
   */
  size?: 'contained' | 'full'
}

// ---------------------------------------------------------------
// Scroll detection
// ---------------------------------------------------------------

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used to toggle the blur + border-bottom styling on the header.
 *
 * Kept as a hook (not inline) so the effect logic is testable
 * and reusable — you may want the same signal for a back-to-top
 * button or a shrinking search bar later.
 */
function useScrolledPast(threshold: number): boolean {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold)
    }
    // Check on mount in case the page loads mid-scroll (e.g.,
    // navigation back to a scroll-restored position).
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

// ---------------------------------------------------------------
// Inline nav item renderers
// ---------------------------------------------------------------

/**
 * Renders a NavLeaf as a plain anchor in the inline (desktop) nav.
 * Shared trigger class list keeps parent triggers visually identical
 * to leaf links (so the row reads as one nav, not two styles).
 */
function InlineLeaf({ item }: { item: NavLeaf }) {
  return (
    <a
      href={item.href}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={inlineTriggerClass}
    >
      {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
      {item.label}
      {item.external && <span className="sr-only"> (opens in new window)</span>}
    </a>
  )
}

/**
 * Renders a NavParent as a click-to-open dropdown trigger with a
 * chevron affordance. Uses React Aria's MenuTrigger (via shadcn's
 * DropdownMenu primitive) for full a11y — keyboard nav, focus
 * trap, escape-to-close, and dismiss-on-outside-click.
 */
function InlineParent({ item }: { item: NavParent }) {
  return (
    <DropdownMenuTrigger>
      <button type="button" className={inlineTriggerClass}>
        {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
        {item.label}
        <ChevronDownIcon className="size-4 shrink-0" aria-hidden="true" />
      </button>
      <DropdownMenu>
        {item.children.map((child) => (
          <DropdownMenuItem key={child.href} textValue={child.label}>
            {/* React Aria's MenuItem swallows onAction, but a plain
                anchor still handles href navigation and preserves
                right-click / open-in-new-tab. */}
            <a
              href={child.href}
              {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex w-full items-center gap-2"
            >
              {child.icon && <child.icon className="size-4 shrink-0" aria-hidden="true" />}
              {child.label}
              {child.external && <span className="sr-only"> (opens in new window)</span>}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}

/**
 * Shared className for inline nav triggers (both leaf anchors and
 * parent buttons). Extracted so both variants stay visually
 * identical — critical because the nav should read as one row, not
 * two competing styles.
 */
const inlineTriggerClass =
  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Sticky top header with logo, nav, and actions.
 *
 * @example
 * <Header
 *   logo={{ href: "/", label: "react-ui-kit" }}
 *   nav={[
 *     { href: "/docs", label: "Docs" },
 *     { href: "/components", label: "Components" },
 *   ]}
 *   actions={<LinkButton href="/github" variant="outline">GitHub</LinkButton>}
 * />
 *
 * @example
 * // Full-width header for dashboard layouts
 * <Header size="full" logo={...} nav={...} />
 *
 * @example
 * // Nav items with icons (Lucide components)
 * import { Home, Book, Info } from "lucide-react"
 * <Header
 *   nav={[
 *     { href: "/", label: "Home", icon: Home },
 *     { href: "/docs", label: "Docs", icon: Book },
 *     { href: "/about", label: "About", icon: Info },
 *   ]}
 * />
 *
 * @example
 * // Nav with a dropdown parent (NavParent)
 * <Header
 *   nav={[
 *     { href: "/", label: "Home" },
 *     {
 *       label: "Layouts",
 *       children: [
 *         { href: "/layouts/secondary", label: "Secondary" },
 *         { href: "/layouts/sidebar",   label: "Sidebar" },
 *       ],
 *     },
 *   ]}
 * />
 */
function Header({ logo, nav, actions, mobileBreakpoint = 'md', size = 'contained' }: HeaderProps) {
  const scrolled = useScrolledPast(10)

  // Pull secondaryNav / sidebarNav from LayoutProvider (if any) so
  // MobileNav can render them as extra drawer sections. Empty
  // object default means no provider = no extra sections.
  const { secondaryNav, sidebarNav } = useLayout()

  // Tailwind can't consume dynamic class strings, so we map the
  // breakpoint prop to a static class string. `hidden md:flex`
  // shows the inline nav at md+; `md:hidden` hides the hamburger
  // at md+. Swap md↔lg based on the prop.
  const inlineNavVisibility = mobileBreakpoint === 'md' ? 'hidden md:flex' : 'hidden lg:flex'
  const mobileNavVisibility = mobileBreakpoint === 'md' ? 'md:hidden' : 'lg:hidden'

  return (
    <header
      data-slot="header"
      data-scrolled={scrolled}
      data-size={size}
      className={cn(
        // Sticky + full width. z-40 sits below skip-link (z-100)
        // but above page content.
        'sticky top-0 z-40 w-full',
        // Responsive height — 56px mobile, 64px desktop.
        'h-14 md:h-16',
        // Base background, transparent at top of page.
        'bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150',
        // Scrolled state — background blur + subtle border.
        // We target our own data attribute for clarity.
        'data-[scrolled=true]:bg-background/80 data-[scrolled=true]:border-b data-[scrolled=true]:border-border data-[scrolled=true]:backdrop-blur-md',
      )}
    >
      <Container
        size={size === 'full' ? 'full' : '2xl'}
        className="flex h-full items-center justify-between gap-4"
      >
        {/* Logo — left. Plain <a> for now; consumers can wrap
            with their router link if needed via a future prop. */}
        <a
          href={logo.href}
          className="font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          {logo.label}
        </a>

        {/* Inline nav — visible at/above breakpoint. Renders
            NavLeaf as an anchor and NavParent as a dropdown; both
            share `inlineTriggerClass` so the row looks uniform.
            Key strategy: leaves use item.href (unique); parents
            use item.label (also unique in practice — no two nav
            entries should share a label). Index fallback handles
            the theoretical dup case. */}
        <nav aria-label="Primary" className={cn('items-center gap-1', inlineNavVisibility)}>
          {nav.map((item, i) =>
            isNavParent(item) ? (
              <InlineParent key={`parent-${item.label}-${i}`} item={item} />
            ) : (
              <InlineLeaf key={item.href} item={item} />
            ),
          )}
        </nav>

        {/* Right side: actions + mobile hamburger.
            Actions are always visible; hamburger is breakpoint-gated.
            secondaryNav/sidebarNav come from LayoutProvider context and
            get rendered as extra drawer sections on mobile. */}
        <div className="flex items-center gap-2">
          {actions}
          <div className={mobileNavVisibility}>
            <MobileNav nav={nav} secondaryNav={secondaryNav} sidebarNav={sidebarNav} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export { Header, type HeaderProps }
