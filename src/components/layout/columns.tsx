/**
 * Columns — responsive grid of equal-width columns.
 *
 * A layout primitive for laying out cards, tiles, or any repeating
 * children in a grid that reflows across breakpoints. Uses CSS Grid
 * under the hood (`grid-template-columns: repeat(N, 1fr)`) so all
 * columns share a single row-track and rows stay aligned regardless
 * of individual child height.
 *
 * API mirrors Tailwind's breakpoint escalation: consumers set the
 * column count per breakpoint. `base` is required (mobile-first
 * default); larger breakpoints inherit from the next smaller one if
 * unspecified, matching Tailwind's natural mobile-first cascade.
 *
 * Range: 1–6 columns per breakpoint. Covers the vast majority of
 * real-world grid designs; extend later if a specific consumer
 * hits the ceiling.
 *
 * Not for asymmetric two-panel layouts (primary content + aside).
 * That's Sidebar's job on the page level, and will be
 * SecondaryPane's job inside Main. Columns is symmetric — every
 * child gets the same width in the same row.
 */

import type * as React from 'react'
import { cn } from 'cn'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

/**
 * Column counts supported at each breakpoint. Six covers dense
 * product grids without going into "too small to be useful" territory.
 * If a consumer needs 7+, they can pass `className` with an extra
 * `grid-cols-*` override — the escape hatch stays open.
 */
type ColCount = 1 | 2 | 3 | 4 | 5 | 6

/**
 * Gap presets map to Tailwind spacing tokens. Kept small on purpose:
 * three sizes is enough to communicate "tight / normal / loose"
 * without becoming a decision fatigue tax. Escape via `className`
 * (e.g., `className="gap-10"`) for the rare custom gap.
 */
type ColGap = 'sm' | 'md' | 'lg'

type ColumnsProps = React.ComponentProps<'div'> & {
  /**
   * Column count on the smallest viewport (< 640px). Required
   * because mobile-first means we always need a default — the
   * larger breakpoints only override, they don't establish.
   */
  base: ColCount
  /** Column count from 640px+. Cascades from `base` if omitted. */
  sm?: ColCount
  /** Column count from 768px+. Cascades from the next smaller if omitted. */
  md?: ColCount
  /** Column count from 1024px+. Cascades from the next smaller if omitted. */
  lg?: ColCount
  /** Column count from 1280px+. Cascades from the next smaller if omitted. */
  xl?: ColCount
  /** Column count from 1536px+. Cascades from the next smaller if omitted. */
  '2xl'?: ColCount
  /**
   * Gap between columns AND rows. Presets:
   * - `sm` → 8px (gap-2)   — dense grids, thumbnail tiles
   * - `md` → 16px (gap-4)  — default; matches card grids in most designs
   * - `lg` → 24px (gap-6)  — feature grids, hero blocks
   * @default "md"
   */
  gap?: ColGap
}

// ---------------------------------------------------------------
// Static class maps
// ---------------------------------------------------------------

// Tailwind's JIT compiler scans for literal class strings — it cannot
// see `grid-cols-${n}` at build time. So every (breakpoint, count)
// combination we support gets enumerated below. Ugly, but produces
// correct CSS and doesn't require a `safelist` config change or a
// separate CSS file.
//
// Precedent: Header's `mobileBreakpoint` uses the same enumerated-
// literal pattern (skill pitfall #4). This is the price of Tailwind's
// build-time scanning.

const baseColsClass: Record<ColCount, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
}

const smColsClass: Record<ColCount, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
}

const mdColsClass: Record<ColCount, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
}

const lgColsClass: Record<ColCount, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

const xlColsClass: Record<ColCount, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
}

const twoXlColsClass: Record<ColCount, string> = {
  1: '2xl:grid-cols-1',
  2: '2xl:grid-cols-2',
  3: '2xl:grid-cols-3',
  4: '2xl:grid-cols-4',
  5: '2xl:grid-cols-5',
  6: '2xl:grid-cols-6',
}

const gapClass: Record<ColGap, string> = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Responsive grid of equal-width columns. Set the count per
 * breakpoint; the browser handles the rest.
 *
 * @example
 * // Product grid: 1 col mobile, 2 col tablet, 3 col desktop
 * <Columns base={1} md={2} lg={3}>
 *   <ProductCard />
 *   <ProductCard />
 *   <ProductCard />
 * </Columns>
 *
 * @example
 * // Dense tile grid with tighter gap
 * <Columns base={2} sm={3} md={4} lg={6} gap="sm">
 *   {tiles.map((t) => <Tile key={t.id} {...t} />)}
 * </Columns>
 *
 * @example
 * // Feature grid — big gap, fewer columns at large sizes
 * <Columns base={1} md={2} lg={3} gap="lg">
 *   <Feature />
 *   <Feature />
 *   <Feature />
 * </Columns>
 *
 * @example
 * // Escape hatch: 7 columns via className override
 * <Columns base={1} className="lg:grid-cols-7">…</Columns>
 */
function Columns({
  base,
  sm,
  md,
  lg,
  xl,
  '2xl': twoXl,
  gap = 'md',
  className,
  children,
  ...props
}: ColumnsProps) {
  return (
    <div
      data-slot="columns"
      // Echo the resolved column counts to data attributes so
      // consumers can style child overrides based on state (e.g.,
      // a card that spans two columns at lg but one at base can
      // read the current mode from an ancestor selector).
      data-cols-base={base}
      data-cols-sm={sm}
      data-cols-md={md}
      data-cols-lg={lg}
      data-cols-xl={xl}
      data-cols-2xl={twoXl}
      data-gap={gap}
      className={cn(
        // grid + base column count are always present.
        'grid',
        baseColsClass[base],
        // Larger breakpoints only render a class when the prop is
        // set — Tailwind's mobile-first cascade means an unset
        // breakpoint keeps the smaller breakpoint's count, which
        // is exactly what consumers expect.
        sm && smColsClass[sm],
        md && mdColsClass[md],
        lg && lgColsClass[lg],
        xl && xlColsClass[xl],
        twoXl && twoXlColsClass[twoXl],
        // Single gap applies to both rows and columns — CSS `gap`
        // shorthand. If a consumer wants asymmetric gaps
        // (`gap-x-4 gap-y-8`), they pass it via className and it
        // overrides via cn()'s Tailwind conflict resolution.
        gapClass[gap],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Columns, type ColumnsProps, type ColCount, type ColGap }
