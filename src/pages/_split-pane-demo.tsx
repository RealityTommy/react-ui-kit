import { SecondaryPane, SplitPane, type SecondarySize } from '@/components/layout/split-pane'

type SplitPaneDemoProps = {
  secondarySize: SecondarySize
}

function SplitPaneDemo({ secondarySize }: SplitPaneDemoProps) {
  return (
    <SplitPane secondarySize={secondarySize}>
      <div className="space-y-3 rounded-xl border bg-muted/40 p-6">
        <h3 className="text-lg font-semibold">Main area</h3>
        <p className="leading-7 text-muted-foreground">
          The primary content stays first in the reading order and gets the larger share of the
          available space.
        </p>
      </div>
      <SecondaryPane aria-label="Secondary content" className="space-y-3 rounded-xl border p-6">
        <h3 className="text-lg font-semibold">Secondary area</h3>
        <p className="leading-7 text-muted-foreground">
          Related details, filters, a preview, or another focused piece of supporting content can
          live here.
        </p>
      </SecondaryPane>
    </SplitPane>
  )
}

export { SplitPaneDemo }
