/**
 * HomePage — demos Header + Main + Footer with a feature grid.
 *
 * The simplest shell — three universal chrome components wrapped
 * in PageShell so Footer pins to the viewport bottom. Uses Columns
 * to showcase a feature-grid pattern (1 → 2 → 3 cols, generous gap)
 * inside a full-width Main so you can see how the primitive behaves
 * without any competing chrome (no SecondaryNav, no Sidebar).
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo card
// ---------------------------------------------------------------

/**
 * Placeholder feature card. Fixed height so rows align across the
 * grid while columns reflow. When Card ships in v2, swap this out.
 */
function FeatureCard({ n }: { n: number }) {
  return (
    <div className="flex h-32 flex-col justify-between rounded-lg border border-border bg-card p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Feature {n}
      </div>
      <div className="text-sm text-muted-foreground">Placeholder for real feature content.</div>
    </div>
  )
}

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

function HomePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Home</h1>
        <p className="text-muted-foreground mb-8">
          Header + Main + Footer only. Use the Layouts menu in the header to preview the
          SecondaryNav, Sidebar, and combined layouts. Grid below uses{' '}
          <code>Columns base=1 md=2 lg=3 gap=&quot;lg&quot;</code>.
        </p>
        <Columns base={1} md={2} lg={3} gap="lg">
          {Array.from({ length: 3 }, (_, i) => (
            <FeatureCard key={i} n={i + 1} />
          ))}
        </Columns>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { HomePage }
