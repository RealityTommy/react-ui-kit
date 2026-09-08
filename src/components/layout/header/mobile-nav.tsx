/**
 * MobileNav — hamburger button + slide-in drawer for narrow viewports.
 *
 * Internal to Header. Not exported from the barrel — consumers use
 * <Header /> which decides when to render this vs. the inline nav.
 *
 * The drawer uses shadcn's Sheet primitive (side="right"), which
 * wraps React Aria's Modal for focus trap, escape-to-close, and
 * dismiss-on-outside-tap out of the box.
 */

import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import type { NavItem } from './index'

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Hamburger button that opens a right-side drawer with nav links.
 *
 * Rendered by <Header /> when the viewport is below its
 * `mobileBreakpoint` prop.
 */
function MobileNav({ nav }: { nav: NavItem[] }) {
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

        {/* The nav list itself. `aria-label="Primary"` matches
            the desktop nav's label so users have a consistent
            landmark name across viewports. */}
        <nav aria-label="Primary" className="flex flex-col gap-1 p-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // External links need rel + target + a screen-reader
              // hint that a new window will open (WCAG G201).
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
              {item.external && <span className="sr-only"> (opens in new window)</span>}
            </a>
          ))}
        </nav>
      </Sheet>
    </SheetTrigger>
  )
}

export { MobileNav }
