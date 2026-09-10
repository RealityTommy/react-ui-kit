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
 * the areas stack on narrow screens.
 *
 * @example
 * <SplitPane secondarySize="third">
 *   <div>Main results</div>
 *   <SecondaryPane>Selected result</SecondaryPane>
 * </SplitPane>
 */
function SplitPane({ className, secondarySize = 'half', ...props }: SplitPaneProps) {
  return (
    <div
      data-slot="split-pane"
      data-secondary-size={secondarySize}
      className={cn('grid gap-6', secondarySizeClasses[secondarySize], className)}
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
