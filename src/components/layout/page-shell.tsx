/**
 * PageShell — outermost page wrapper that pins Footer to the bottom.
 *
 * Every page in the demo (and every consumer app using this kit)
 * wraps its shell in the same pattern: SkipLink, Header, optional
 * SecondaryNav / PageBody, Main, Footer. Without a wrapping element
 * that owns the viewport height, short pages leave the Footer
 * floating mid-viewport — the browser has no reason to push it down
 * because the content doesn't fill the screen.
 *
 * PageShell fixes this with the standard sticky-footer pattern:
 *
 *   <div class="flex min-h-svh flex-col">
 *     <Header />
 *     <Main class="flex-1">  ← grows to eat remaining space
 *     <Footer />
 *   </div>
 *
 * `min-h-svh` uses the small-viewport-height unit (100svh) so mobile
 * browsers don't over-extend the shell when the URL bar retracts
 * (the classic vh bug on iOS Safari). `min-h-` (not `h-`) lets the
 * shell grow past the viewport when content is long — otherwise
 * you'd cap page height at 100svh and force internal scroll on
 * every page, which is not what we want.
 *
 * For the `flex-1` grow to actually kick in, one of the shell's
 * children needs to claim the remaining space. Main already has
 * `flex-1 min-w-0` on it, so single-column pages Just Work. For
 * Sidebar layouts, PageBody carries the `flex-1` so the Sidebar +
 * Main pair takes the remaining height together.
 *
 * No props beyond children. Any layout customization (width caps,
 * gutters, backgrounds) happens on the inner components — PageShell
 * only exists to solve the sticky-footer problem.
 */

import type * as React from 'react'
import { cn } from 'cn'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type PageShellProps = React.ComponentProps<'div'>

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Wraps a full page shell so the Footer stays at the bottom of the
 * viewport on short pages while still allowing tall pages to scroll
 * normally.
 *
 * @example
 * // Standard page (Header + Main + Footer)
 * <PageShell>
 *   <SkipLink />
 *   <Header ... />
 *   <Main>...</Main>
 *   <Footer ... />
 * </PageShell>
 *
 * @example
 * // Sidebar layout — PageBody carries flex-1 so Sidebar + Main
 * // grow together to the bottom.
 * <PageShell>
 *   <SkipLink />
 *   <Header ... />
 *   <PageBody>
 *     <Sidebar ... />
 *     <Main size="full">...</Main>
 *   </PageBody>
 *   <Footer ... />
 * </PageShell>
 *
 * @example
 * // Full layout — SecondaryNav sits between Header and PageBody.
 * <PageShell>
 *   <SkipLink />
 *   <Header ... />
 *   <SecondaryNav ... />
 *   <PageBody>
 *     <Sidebar ... />
 *     <Main size="full">...</Main>
 *   </PageBody>
 *   <Footer ... />
 * </PageShell>
 */
function PageShell({ className, children, ...props }: PageShellProps) {
  return (
    <div
      data-slot="page-shell"
      className={cn(
        // Flex column so children stack vertically and one can grow.
        'flex flex-col',
        // min-h-svh (not h-svh) so tall pages still scroll past the
        // viewport. svh (not vh) avoids the iOS Safari URL-bar bug
        // where 100vh overshoots the actual visible area.
        'min-h-svh',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { PageShell, type PageShellProps }
