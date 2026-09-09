/**
 * PageBody — flex container for Sidebar + Main compositions.
 *
 * Wraps a Sidebar and Main as siblings inside a size-capped flex
 * row, so the entire body (Sidebar + content together) respects
 * the same max-width the rest of the page chrome does. This gives
 * you "docs-site alignment" — Header, PageBody, and Footer content
 * all center to the same width, and Sidebar+Main together stay
 * aligned with the header nav above.
 *
 * Without PageBody, a `<div class="flex">` wrapping Sidebar + Main
 * would put Main's content off-center relative to Header/Footer
 * (Main would center within `viewport - sidebarWidth`, Header
 * within `viewport`).
 *
 * When to use:
 * - Sidebar layouts → wrap Sidebar + Main in PageBody.
 * - No Sidebar → use Main directly; it handles the cap itself.
 *
 * When you wrap with PageBody, set `<Main size="full">` inside —
 * otherwise Main would apply a second Container cap inside the
 * one PageBody already provides (double-capping, narrower than
 * intended).
 */

import type * as React from 'react'
import { cn } from 'cn'
import { Container } from '@/components/layout/container'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type PageBodyProps = React.ComponentProps<'div'> & {
  /**
   * Layout width behavior. Matches Header/Main/Footer for visual
   * consistency across the page shell.
   * - `contained` (default): Container 2xl (~1536px max-width).
   * - `full`: edge-to-edge with horizontal padding only.
   */
  size?: 'contained' | 'full'
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Flex-row wrapper for Sidebar + Main. Owns the max-width cap so
 * the sidebar+content pair stays aligned with the rest of the
 * page chrome.
 *
 * @example
 * // Sidebar layout — PageBody caps width, Main goes full inside
 * <Header />
 * <PageBody size="contained">
 *   <Sidebar aria-label="Docs" />
 *   <Main size="full">…</Main>
 * </PageBody>
 * <Footer />
 *
 * @example
 * // Full-bleed sidebar layout
 * <PageBody size="full">
 *   <Sidebar aria-label="Docs" />
 *   <Main size="full">…</Main>
 * </PageBody>
 */
function PageBody({ className, size = 'contained', children, ...props }: PageBodyProps) {
  return (
    <div data-slot="page-body" data-size={size} className={cn('w-full', className)} {...props}>
      <Container
        size={size === 'full' ? 'full' : '2xl'}
        // flex-row for Sidebar + Main layout. Container already
        // provides horizontal padding and max-width; we just need
        // the flex direction and a stable min-height so Main can
        // grow with its content.
        className="flex"
      >
        {children}
      </Container>
    </div>
  )
}

export { PageBody, type PageBodyProps }
