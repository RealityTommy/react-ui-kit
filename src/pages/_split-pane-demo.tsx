/**
 * SplitPaneDemo — shared reference content for the layout guide pages.
 *
 * Shows the supported Main + Secondary arrangements with the actual
 * container-responsive column settings used inside each pane. Keep this
 * demo private to the pages folder; consumers should use SplitPane directly.
 */

import { useEffect, useId, useRef, useState } from 'react'
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
 * The secondary area starts hidden so the example reflects a common detail-view
 * pattern. The Main button opens it in place, then lets people close it again.
 *
 * @example
 * See the layout pages for complete configurations.
 */
function SplitPaneDemo({
  secondarySize,
  mainColumns,
  mainCardCount,
  secondaryColumns,
  secondaryCardCount,
}: SplitPaneDemoProps) {
  const [secondaryVisible, setSecondaryVisible] = useState(false)
  const secondaryId = useId()
  const mainToggleRef = useRef<HTMLButtonElement>(null)
  const wasSecondaryVisible = useRef(false)

  useEffect(() => {
    if (!secondaryVisible && wasSecondaryVisible.current) {
      mainToggleRef.current?.focus()
    }
    wasSecondaryVisible.current = secondaryVisible
  }, [secondaryVisible])
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
              Cards: <code>{mainCardCount}</code> · Columns: <code>{mainColumnsLabel}</code>
            </p>
          </div>
          <Button
            ref={mainToggleRef}
            type="button"
            variant="outline"
            size="sm"
            aria-controls={secondaryId}
            aria-expanded={secondaryVisible}
            onClick={() => setSecondaryVisible((visible) => !visible)}
          >
            {secondaryVisible ? 'Hide details' : 'View details'}
          </Button>
        </div>
        <Columns responsive="container" {...activeColumns} gap="lg">
          {Array.from({ length: mainCardCount }, (_, i) => (
            <DemoCard key={i} title={`Main card ${i + 1}`} />
          ))}
        </Columns>
        <p className="leading-7 text-muted-foreground">
          Main stays first in the reading order and starts with the wider page configuration because
          the details area is closed. Choose View details to open supporting information without
          leaving the current page. When details are open, Main uses a more conservative column
          pattern so its cards remain readable.
        </p>
        <p className="leading-7 text-muted-foreground">
          The button controls the details area in place. Its expanded state and controlled region
          are exposed to assistive technology, and the details content remains after Main in the
          reading order.
        </p>
      </div>
      <SecondaryPane
        id={secondaryId}
        aria-label="Secondary area"
        hidden={!secondaryVisible}
        className="space-y-3 rounded-xl border p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">Secondary area</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-controls={secondaryId}
            aria-expanded={secondaryVisible}
            onClick={() => setSecondaryVisible(false)}
          >
            Close details
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Cards: <code>{secondaryCardCount}</code> · Columns: <code>{secondaryColumnsLabel}</code>
        </p>
        <Columns responsive="container" {...activeSecondaryColumns} gap="sm">
          {Array.from({ length: secondaryCardCount }, (_, i) => (
            <DemoCard key={i} title={`Secondary card ${i + 1}`} />
          ))}
        </Columns>
        <p className="leading-7 text-muted-foreground">
          This area can hold the selected record's details, a preview, or other supporting content.
          Its column pattern becomes more cautious when the pane is narrower.
        </p>
      </SecondaryPane>
    </SplitPane>
  )
}

export { SplitPaneDemo }
