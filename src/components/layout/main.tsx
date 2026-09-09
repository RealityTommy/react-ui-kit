/**
 * Main — semantic <main> landmark with size presets.
 *
 * Preset API: pass a size intent, get the correct max-width plus
 * top spacing to sit below a sticky Header.
 *
 * Two intents:
 * - `reading` (default): narrow, optimized for line length and
 *   long-form content (articles, docs, blog posts).
 * - `app`: wider, matches Header/Footer alignment for dashboards,
 *   bento layouts, and multi-column pages.
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

type MainSize = 'reading' | 'app'

type MainProps = Omit<React.ComponentProps<'main'>, 'id'> & {
  /**
   * Content intent. Determines max-width via the underlying Container.
   * - `reading`: ~768px, optimized for reading measure.
   * - `app`: ~1280px, matches Header/Footer alignment.
   * @default "reading"
   */
  size?: MainSize
}

// ---------------------------------------------------------------
// Size mapping
// ---------------------------------------------------------------

// Semantic intent → Container size. Kept as a lookup so future
// changes (e.g., "reading moves to 720px") happen in one place.
const containerSizeFor: Record<MainSize, 'md' | 'xl'> = {
  reading: 'md',
  app: 'xl',
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Renders <main id="main-content"> with size-preset Container.
 *
 * @example
 * // Reading page (docs, blog):
 * <Main>
 *   <h1>Article title</h1>
 *   <p>...</p>
 * </Main>
 *
 * @example
 * // App page (dashboard, bento):
 * <Main size="app">
 *   <div className="grid grid-cols-3 gap-4">...</div>
 * </Main>
 *
 * @example
 * // Page with no sticky header (auth, splash):
 * <Main stickyHeaderOffset={false}>...</Main>
 */
function Main({ className, size = 'reading', children, ...props }: MainProps) {
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
