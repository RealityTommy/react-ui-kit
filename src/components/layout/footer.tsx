/**
 * Footer — end-of-page bar with copyright and secondary links.
 *
 * Preset API: pass a copyright node and an optional link list, get
 * an opinionated footer that handles responsive wrap, semantic
 * landmarks, and consistent alignment with the rest of the kit.
 *
 * Inspired by the State of Michigan Digital Guidelines Footer
 * pattern — minimal, legal-first, one horizontal bar.
 *
 * Renders semantic <footer> (implicit `role="contentinfo"`) with
 * a nav landmark for the link list.
 */

import type * as React from 'react'
import { cn } from 'cn'
import { Container } from '@/components/layout/container'
import type { NavItem } from './types'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type FooterProps = {
  /**
   * Copyright content, shown on the left. Accepts any React node
   * so you can inline links (e.g., "© 2026 <a>Your Name</a>").
   */
  copyright: React.ReactNode
  /**
   * Secondary links shown on the right (Privacy, Terms, etc.).
   * Optional — omit for a copyright-only footer.
   */
  links?: NavItem[]
  /**
   * Layout width behavior.
   * - "contained" (default): Container 2xl (~1536px max-width).
   * - "full": edge-to-edge with horizontal padding only.
   */
  size?: 'contained' | 'full'
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * End-of-page footer with copyright left, secondary links right.
 *
 * Wraps to a stacked layout on narrow viewports. Not sticky; place
 * it after <main>.
 *
 * @example
 * <Footer
 *   copyright={<>© 2026 Tommy Truong</>}
 *   links={[
 *     { href: "/privacy", label: "Privacy" },
 *     { href: "/terms", label: "Terms" },
 *   ]}
 * />
 *
 * @example
 * // Full-width footer for dashboard layouts
 * <Footer size="full" copyright={...} />
 */
function Footer({ copyright, links, size = 'contained' }: FooterProps) {
  return (
    <footer
      data-slot="footer"
      data-size={size}
      className={cn(
        // Top border marks the page/footer boundary. No background —
        // Footer sits on the page, unlike Header which overlays it.
        'w-full border-t border-border',
        // Content padding; height is driven by content, not fixed.
        'py-6',
      )}
    >
      <Container
        size={size === 'full' ? 'full' : '2xl'}
        className={cn(
          // Flex row with space-between on wide viewports.
          // `flex-wrap` + `gap-4` gracefully stacks when the row
          // is too narrow (e.g., mobile).
          'flex flex-wrap items-center justify-between gap-4',
        )}
      >
        {/* Copyright — left. Muted text color to sit quietly. */}
        <div className="text-sm text-muted-foreground">{copyright}</div>

        {/* Secondary nav — right. Only rendered if links exist.
            `aria-label="Footer"` distinguishes this landmark from
            the Header's "Primary" nav for screen-reader users
            jumping between landmarks. */}
        {links && links.length > 0 && (
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                // External links need rel + target + a screen-reader
                // hint that a new window will open (WCAG G201).
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                // Match Header's inline nav styling for visual
                // consistency across page chrome.
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
                {item.external && <span className="sr-only"> (opens in new window)</span>}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </footer>
  )
}

export { Footer, type FooterProps }
