/**
 * Main — semantic <main> landmark with size presets.
 *
 * Preset API: pass a size intent, get the correct max-width plus
 * top spacing to sit below a sticky Header.
 *
 * Two intents (consistent with Header/Footer):
 * - `contained` (default): Container 2xl (~1536px max-width),
 *   matches Header/Footer default alignment.
 * - `full`: edge-to-edge with horizontal padding only, for
 *   full-bleed dashboards and hero sections.
 *
 * Always renders <main id="main-content"> so the SkipLink from
 * @/components/layout/header has a target. The id is intentionally
 * not configurable — the whole point of this component is a
 * consistent, opinionated page-content shell.
 */

import type * as React from 'react'
import { cn } from 'cn'
import { Container } from '@/components/layout/container'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type MainSize = 'contained' | 'full'

type MainProps = Omit<React.ComponentProps<'main'>, 'id'> & {
  /**
   * Layout width behavior. Matches Header/Footer for visual
   * consistency across the page shell.
   * - `contained` (default): Container 2xl (~1536px max-width).
   * - `full`: edge-to-edge with horizontal padding only.
   * @default "contained"
   */
  size?: MainSize
}

// ---------------------------------------------------------------
// Size mapping
// ---------------------------------------------------------------

// Semantic intent → Container size. Kept as a lookup so future
// changes (e.g., "bump contained to 3xl") happen in one place.
const containerSizeFor: Record<MainSize, '2xl' | 'full'> = {
  contained: '2xl',
  full: 'full',
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Renders <main id="main-content"> with size-preset Container.
 *
 * @example
 * // Contained page (default) — most pages:
 * <Main>
 *   <h1>Page title</h1>
 *   <p>...</p>
 * </Main>
 *
 * @example
 * // Full-width page (dashboard, hero, marketing):
 * <Main size="full">
 *   <div className="grid grid-cols-3 gap-4">...</div>
 * </Main>
 */
function Main({ className, size = 'contained', children, ...props }: MainProps) {
  return (
    <main
      id="main-content"
      data-slot="main"
      data-size={size}
      className={cn('pt-3 lg:pt-4', className)}
      {...props}
    >
      <Container size={containerSizeFor[size]}>{children}</Container>
    </main>
  )
}

export { Main, type MainProps, type MainSize }
