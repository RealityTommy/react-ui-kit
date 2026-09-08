/**
 * SkipLink — WCAG 2.4.1 Bypass Blocks compliance.
 *
 * Renders an anchor that's visually hidden until keyboard-focused.
 * Sighted users never see it; keyboard and screen-reader users get
 * a one-Tab shortcut past the header directly to main content.
 *
 * Place as the FIRST focusable element in your page layout.
 * The `href` should match your <main> element's id (default:
 * "#main-content", which requires <main id="main-content"> in
 * your app shell).
 */

import type * as React from 'react'
import { cn } from 'cn'

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Keyboard shortcut past the header. Invisible until focused.
 *
 * @example
 * // In your app shell, before the Header:
 * <SkipLink />
 * <Header ... />
 * <main id="main-content">...</main>
 */
function SkipLink({
  className,
  href = '#main-content',
  children = 'Skip to main content',
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="skip-link"
      href={href}
      className={cn(
        // Hidden by default (sr-only), but positioned so that when
        // focus reveals it, it appears at the top-left with padding
        // and full styling instead of jumping in unstyled.
        'sr-only focus:not-sr-only',
        'focus:fixed focus:top-2 focus:left-2 focus:z-100',
        'focus:rounded-md focus:bg-primary focus:px-4 focus:py-2',
        'focus:text-sm focus:font-medium focus:text-primary-foreground',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export { SkipLink }
