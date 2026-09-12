/**
 * SplitPane — responsive main + secondary content layout.
 *
 * The primary content stays first in reading order. The secondary content
 * stacks below it on narrow screens, then takes a fixed proportion of the
 * available content width at the large breakpoint.
 */

import type * as React from 'react'
import { cn } from 'cn'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type SecondarySize = 'third' | 'half'

type SplitPaneProps = React.ComponentProps<'div'> & {
  /**
   * Width reserved for the secondary area at large screens.
   * - `third`: primary 2/3, secondary 1/3.
   * - `half`: primary 1/2, secondary 1/2.
   * @default "half"
   */
  secondarySize?: SecondarySize
  /**
   * Whether the secondary area should occupy its grid track.
   * Set this to `false` when the secondary content is collapsed so Main
   * expands to the available width.
   * @default true
   */
  secondaryVisible?: boolean
}

// ---------------------------------------------------------------
// Size mapping
// ---------------------------------------------------------------

const secondarySizeClasses: Record<SecondarySize, string> = {
  third: 'lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]',
  half: 'lg:grid-cols-2',
}

// ---------------------------------------------------------------
// Components
// ---------------------------------------------------------------

/**
 * Renders primary and secondary content in a responsive split layout.
 *
 * Keep the primary child first so the reading order remains sensible when
 * the areas stack on narrow screens. When `secondaryVisible` is false, the
 * large-screen grid transitions to one full-width Main column.
 *
 * @example
 * <SplitPane secondarySize="third" secondaryVisible>
 *   <div>Main results</div>
 *   <SecondaryPane>Selected result</SecondaryPane>
 * </SplitPane>
 */
function SplitPane({
  className,
  secondarySize = 'half',
  secondaryVisible = true,
  ...props
}: SplitPaneProps) {
  return (
    <div
      data-slot="split-pane"
      data-secondary-size={secondarySize}
      data-secondary-visible={secondaryVisible}
      className={cn(
        'grid gap-6 transition-[grid-template-columns] duration-300 ease-in-out motion-reduce:transition-none',
        secondaryVisible ? secondarySizeClasses[secondarySize] : 'lg:grid-cols-1',
        className,
      )}
      {...props}
    />
  )
}

type SecondaryPaneProps = React.ComponentProps<'aside'>

/**
 * Marks the secondary area of a SplitPane as an aside landmark.
 *
 * Give it an accessible label when the page has more than one aside or when
 * its purpose is not clear from the surrounding heading.
 *
 * @example
 * <SecondaryPane aria-label="Selected result details">…</SecondaryPane>
 */
function SecondaryPane({ className, ...props }: SecondaryPaneProps) {
  return <aside data-slot="secondary-pane" className={cn('min-w-0', className)} {...props} />
}

export {
  SplitPane,
  SecondaryPane,
  type SplitPaneProps,
  type SecondaryPaneProps,
  type SecondarySize,
}
