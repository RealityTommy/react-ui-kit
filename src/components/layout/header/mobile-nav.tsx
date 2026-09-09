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
 * The primary section supports NavParent entries — they render as
 * a labeled group with indented children rather than as a dropdown
 * (dropdowns inside a drawer would be awkward on touch).
 *
 * When Header is inside a LayoutProvider that supplies secondaryNav
 * or sidebarNav, those items appear as extra drawer sections below
 * the primary nav — divided visually so screen-reader landmark
 * navigation still works section-by-section.
 */

import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { isNavGroup, isNavParent, type NavItem, type NavLeaf, type NavGroup } from '../types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type MobileNavProps = {
  /**
   * Primary nav items. Always rendered as the first section.
   * Accepts NavLeaf and NavParent; parents render as labeled groups
   * with indented children (no dropdown on mobile).
   */
  nav: NavItem[]
  /**
   * Optional secondary nav items (from LayoutProvider). Rendered
   * as a second section under the primary nav with its own heading.
   */
  secondaryNav?: NavLeaf[]
  /**
   * Optional sidebar nav items (from LayoutProvider). Rendered as
   * a third section — supports flat items or grouped items.
   */
  sidebarNav?: (NavLeaf | NavGroup)[]
}

// ---------------------------------------------------------------
// Item renderer
// ---------------------------------------------------------------

/**
 * Renders a single NavLeaf as a drawer link.
 *
 * Extracted so all drawer sections (primary, secondary, sidebar,
 * and parent children) share identical link styling — no drift
 * risk if we tweak the class list later.
 */
function DrawerLink({ item }: { item: NavLeaf }) {
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

/**
 * Renders a NavParent as a labeled group with indented children.
 *
 * On desktop, Header renders parents as click-to-open dropdowns.
 * In the drawer we don't have that constraint (already a menu),
 * so we flatten to a group + indented list. Simpler to scan on
 * touch and doesn't require nested dropdown interactions.
 *
 * The parent label uses `div` (not a heading) because the drawer
 * itself is inside a Dialog landmark; adding a heading here would
 * introduce a doubled announcement. The indent + muted color +
 * icon presence make the grouping visually clear.
 */
function DrawerParent({
  item,
}: {
  item: { label: string; icon?: NavLeaf['icon']; children: NavLeaf[] }
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="inline-flex items-center gap-3 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
        {item.label}
      </div>
      {/* Indented children — pl-6 to align text under parent label,
          keeping the icon aligned with the parent's icon slot. */}
      <div className="flex flex-col gap-1 pl-6">
        {item.children.map((child) => (
          <DrawerLink key={child.href} item={child} />
        ))}
      </div>
    </div>
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
              landmark name across viewports. Parents render as
              labeled groups with indented children (no dropdowns
              inside the drawer). */}
          <nav aria-label="Primary" className="flex flex-col gap-1">
            {nav.map((item, i) =>
              isNavParent(item) ? (
                <DrawerParent key={`parent-${item.label}-${i}`} item={item} />
              ) : (
                <DrawerLink key={item.href} item={item} />
              ),
            )}
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
              flat NavLeaf[] or grouped NavGroup[] via isNavGroup
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
