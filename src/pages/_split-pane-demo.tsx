/**
 * SplitPaneDemo — shared reference content for the layout guide pages.
 *
 * Shows the supported Main + Secondary arrangements with the actual
 * container-responsive column settings used inside each pane. Keep this
 * demo private to the pages folder; consumers should use SplitPane directly.
 */

import { Columns } from '@/components/layout/columns'
import { SecondaryPane, SplitPane, type SecondarySize } from '@/components/layout/split-pane'
import { DemoCard } from './_demo-card'

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type SplitPaneDemoProps = {
  secondarySize: SecondarySize
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Renders one supported split-pane example for a layout reference page.
 *
 * @example
 * <SplitPaneDemo secondarySize="half" />
 */
function SplitPaneDemo({ secondarySize }: SplitPaneDemoProps) {
  const mainColumns = secondarySize === 'third' ? 'base=1 md=2 lg=3' : 'base=1 md=2'
  const secondaryColumns = 'base=1 md=2'

  return (
    <SplitPane secondarySize={secondarySize}>
      <div className="space-y-3 rounded-xl border bg-muted/40 p-6">
        <h3 className="text-lg font-semibold">Main area</h3>
        <p className="text-sm text-muted-foreground">
          Cards shown: <code>{mainColumns}</code>
        </p>
        <Columns
          responsive="container"
          base={1}
          md={2}
          lg={secondarySize === 'third' ? 3 : 2}
          gap="sm"
        >
          <DemoCard title="Main card 1" />
          <DemoCard title="Main card 2" />
          <DemoCard title="Main card 3" />
        </Columns>
        <p className="leading-7 text-muted-foreground">
          The primary content stays first in the reading order and gets the larger share of the
          available space.
        </p>
      </div>
      <SecondaryPane aria-label="Secondary content" className="space-y-3 rounded-xl border p-6">
        <h3 className="text-lg font-semibold">Secondary area</h3>
        <p className="text-sm text-muted-foreground">
          Cards shown: <code>{secondaryColumns}</code>
        </p>
        <Columns responsive="container" base={1} md={2} gap="sm">
          <DemoCard title="Secondary card 1" />
          <DemoCard title="Secondary card 2" />
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
