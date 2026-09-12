/**
 * SplitPaneDemo — shared reference content for the layout guide pages.
 *
 * Shows the supported Main + Secondary arrangements with the actual
 * container-responsive column settings used inside each pane. Keep this
 * demo private to the pages folder; consumers should use SplitPane directly.
 */

import { useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Columns, type ColumnsProps } from '@/components/layout/columns'
import { SecondaryPane, SplitPane, type SecondarySize } from '@/components/layout/split-pane'
import { DemoCard } from './_demo-card'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type SplitColumns = Pick<ColumnsProps, 'base' | 'sm' | 'md' | 'lg'>

type SplitPaneDemoProps = {
  secondarySize: SecondarySize
  mainColumns: {
    visible: SplitColumns
    hidden: SplitColumns
  }
  mainCardCount: number
  secondaryColumns: Record<SecondarySize, SplitColumns>
  secondaryCardCount: number
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Renders one supported split-pane example for a layout reference page.
 *
 * The secondary area starts visible so the example shows the intended split.
 * The Main button lets people hide it and see Main grow into the space, then
 * restore it to compare both states.
 *
 * @example
 * <SplitPaneDemo secondarySize="half" />
 */
function SplitPaneDemo({
  secondarySize,
  mainColumns,
  mainCardCount,
  secondaryColumns,
  secondaryCardCount,
}: SplitPaneDemoProps) {
  const [secondaryVisible, setSecondaryVisible] = useState(true)
  const secondaryId = useId()
  const activeColumns = secondaryVisible ? mainColumns.visible : mainColumns.hidden
  const mainColumnsLabel = [
    `base=${activeColumns.base}`,
    activeColumns.sm && `sm=${activeColumns.sm}`,
    activeColumns.md && `md=${activeColumns.md}`,
    activeColumns.lg && `lg=${activeColumns.lg}`,
  ]
    .filter(Boolean)
    .join(' ')
  const activeSecondaryColumns = secondaryColumns[secondarySize]
  const secondaryColumnsLabel = [
    `base=${activeSecondaryColumns.base}`,
    activeSecondaryColumns.sm && `sm=${activeSecondaryColumns.sm}`,
    activeSecondaryColumns.md && `md=${activeSecondaryColumns.md}`,
    activeSecondaryColumns.lg && `lg=${activeSecondaryColumns.lg}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <SplitPane secondarySize={secondarySize} secondaryVisible={secondaryVisible}>
      <div className="space-y-3 rounded-xl border p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Main area</h3>
            <p className="text-sm text-muted-foreground">
              Cards shown: <code>{mainColumnsLabel}</code>
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-controls={secondaryId}
            aria-expanded={secondaryVisible}
            onClick={() => setSecondaryVisible((visible) => !visible)}
          >
            {secondaryVisible ? 'Hide secondary area' : 'Show secondary area'}
          </Button>
        </div>
        <Columns
          responsive="container"
          {...activeColumns}
          gap="lg"
        >
          {Array.from({ length: mainCardCount }, (_, i) => (
            <DemoCard key={i} title={`Main card ${i + 1}`} />
          ))}
        </Columns>
        <p className="leading-7 text-muted-foreground">
          The primary content stays first in the reading order and gets the larger share of the
          available space. When the secondary area is hidden, the Main grid also uses one more
          available space changes. Show it again to compare the original split.
        </p>
      </div>
      <SecondaryPane
        id={secondaryId}
        aria-label="Secondary content"
        hidden={!secondaryVisible}
        className="space-y-3 rounded-xl border p-6"
      >
        <h3 className="text-lg font-semibold">Secondary area</h3>
        <p className="text-sm text-muted-foreground">
          Cards shown: <code>{secondaryColumnsLabel}</code>
        </p>
        <Columns responsive="container" {...activeSecondaryColumns} gap="sm">
          {Array.from({ length: secondaryCardCount }, (_, i) => (
            <DemoCard key={i} title={`Secondary card ${i + 1}`} />
          ))}
        </Columns>
        <p className="leading-7 text-muted-foreground">
          Related details, filters, a preview, or another focused piece of supporting content can
          live here.
        </p>
      </SecondaryPane>
    </SplitPane>
  )
}

export { SplitPaneDemo }
