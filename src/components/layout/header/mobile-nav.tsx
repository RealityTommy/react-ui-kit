/**
 * MobileNav — hamburger button + slide-in drawer for narrow viewports.
 *
 * Internal to Header. Not exported from the barrel — consumers use
 * <Header /> which decides when to render this vs. the inline nav.
 *
 * The drawer uses shadcn's Sheet primitive (side="right"), which
 * wraps React Aria's Modal for focus trap, escape-to-close, and
 * dismiss-on-outside-tap out of the box.
 *
 * When Header is inside a LayoutProvider that supplies secondaryNav
 * or sidebarNav, those items appear as extra drawer sections below
 * the primary nav — divided visually so screen-reader landmark
 * navigation still works section-by-section.
 */

import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { isNavGroup, type NavItem, type NavGroup } from '../types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type MobileNavProps = {
  /** Primary nav items. Always rendered as the first section. */
  nav: NavItem[]
  /**
   * Optional secondary nav items (from LayoutProvider). Rendered
   * as a second section under the primary nav with its own heading.
   */
  secondaryNav?: NavItem[]
  /**
   * Optional sidebar nav items (from LayoutProvider). Rendered as
   * a third section — supports flat items or grouped items.
   */
  sidebarNav?: (NavItem | NavGroup)[]
}

// ---------------------------------------------------------------
// Item renderer
// ---------------------------------------------------------------

/**
 * Renders a single NavItem as a drawer link.
 *
 * Extracted so all three drawer sections (primary, secondary,
 * sidebar) share identical link styling — no drift risk if we
 * tweak the class list later.
 */
function DrawerLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      // External links need rel + target + a screen-reader hint
      // that a new window will open (WCAG G201).
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {item.icon && <item.icon className="size-5 shrink-0" aria-hidden="true" />}
      {item.label}
      {item.external && <span className="sr-only"> (opens in new window)</span>}
    </a>
  )
}

// ---------------------------------------------------------------
// Section heading
// ---------------------------------------------------------------

/**
 * Small-caps heading between drawer sections. Also the `id` that
 * the corresponding <nav aria-labelledby={id}> points at so
 * screen-readers announce the section name on landmark navigation.
 */
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
    >
      {children}
    </h2>
  )
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Hamburger button that opens a right-side drawer with nav links.
 *
 * Rendered by <Header /> when the viewport is below its
 * `mobileBreakpoint` prop.
 */
function MobileNav({ nav, secondaryNav, sidebarNav }: MobileNavProps) {
  const hasSecondary = secondaryNav && secondaryNav.length > 0
  const hasSidebar = sidebarNav && sidebarNav.length > 0

  return (
    <SheetTrigger>
      {/* The trigger — a hamburger button. React Aria wires up
          aria-expanded, aria-controls, and focus return for us. */}
      <Button variant="ghost" size="icon" aria-label="Open navigation menu">
        <MenuIcon />
      </Button>

      {/* The drawer. `side="right"` slides in from the right edge.
          SheetTitle is required by React Aria for a11y — screen
          readers need something to announce when the dialog opens.
          We use `sr-only` to hide it visually while keeping it in
          the accessibility tree. */}
      <Sheet side="right">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-1 p-4">
          {/* Primary section. `aria-label="Primary"` matches the
              desktop nav's label so users have a consistent
              landmark name across viewports. */}
          <nav aria-label="Primary" className="flex flex-col gap-1">
            {nav.map((item) => (
              <DrawerLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Secondary section — only rendered when LayoutProvider
              supplies items. Divider + labeled heading distinguishes
              it as its own landmark. */}
          {hasSecondary && (
            <>
              <hr className="my-2 border-border" />
              <SectionHeading id="mobile-nav-secondary">Section</SectionHeading>
              <nav aria-labelledby="mobile-nav-secondary" className="flex flex-col gap-1">
                {secondaryNav.map((item) => (
                  <DrawerLink key={item.href} item={item} />
                ))}
              </nav>
            </>
          )}

          {/* Sidebar section — also from LayoutProvider. Supports
              flat NavItem[] or grouped NavGroup[] via isNavGroup
              type guard. Groups render with a small sub-heading
              above their items. */}
          {hasSidebar && (
            <>
              <hr className="my-2 border-border" />
              <SectionHeading id="mobile-nav-sidebar">Pages</SectionHeading>
              <nav aria-labelledby="mobile-nav-sidebar" className="flex flex-col gap-1">
                {sidebarNav.map((entry, i) =>
                  isNavGroup(entry) ? (
                    // Group: render label + items. `key` uses index
                    // because group labels aren't guaranteed unique
                    // (unlike hrefs, which we validate elsewhere).
                    <div key={`group-${i}`} className="flex flex-col gap-1">
                      <div className="px-3 pt-2 pb-1 text-xs font-medium text-muted-foreground">
                        {entry.label}
                      </div>
                      {entry.items.map((item) => (
                        <DrawerLink key={item.href} item={item} />
                      ))}
                    </div>
                  ) : (
                    <DrawerLink key={entry.href} item={entry} />
                  ),
                )}
              </nav>
            </>
          )}
        </div>
      </Sheet>
    </SheetTrigger>
  )
}

export { MobileNav, type MobileNavProps }
