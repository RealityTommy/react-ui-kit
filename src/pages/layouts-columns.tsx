/**
 * LayoutsColumnsPage — demos the Columns responsive grid primitive.
 *
 * Shows three column configurations back-to-back so the reflow
 * behavior is easy to see as the viewport resizes:
 *
 * 1. Product grid pattern — 1 → 2 → 3 columns
 * 2. Dense tile grid — 2 → 3 → 4 → 6 columns
 * 3. Feature grid — 1 → 2 → 3 columns with a large gap
 *
 * Cards are simple divs with a muted background and a label so the
 * grid shape is legible without any card component (Card is a v2
 * primitive). Numbers on the cards make it easy to see how many
 * columns fit at the current viewport width.
 *
 * PageShell wraps the tree so Footer pins to the bottom even when
 * the grid is short.
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
 * Placeholder card. Muted background + centered label; height set
 * on the smaller demos so all rows line up visually while columns
 * reflow. When Card ships in v2, swap this out.
 */
function DemoCard({ n }: { n: number }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-md bg-muted text-sm font-medium text-muted-foreground">
      Card {n}
    </div>
  )
}

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

function LayoutsColumnsPage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Layouts / Columns</h1>
        <p className="text-muted-foreground mb-8">
          Responsive grid columns. Resize the viewport to see each grid reflow. Column counts
          escalate mobile-first — smaller breakpoints inherit from the next-smaller if unspecified.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Product grid</h2>
          <p className="text-sm text-muted-foreground mb-4">
            <code>base=1 md=2 lg=3</code>, default gap. Typical card list.
          </p>
          <Columns base={1} md={2} lg={3}>
            {Array.from({ length: 6 }, (_, i) => (
              <DemoCard key={i} n={i + 1} />
            ))}
          </Columns>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Dense tile grid</h2>
          <p className="text-sm text-muted-foreground mb-4">
            <code>base=2 sm=3 md=4 lg=6</code> with <code>gap=&quot;sm&quot;</code>. Thumbnails,
            avatars, icon grids.
          </p>
          <Columns base={2} sm={3} md={4} lg={6} gap="sm">
            {Array.from({ length: 12 }, (_, i) => (
              <DemoCard key={i} n={i + 1} />
            ))}
          </Columns>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Feature grid</h2>
          <p className="text-sm text-muted-foreground mb-4">
            <code>base=1 md=2 lg=3</code> with <code>gap=&quot;lg&quot;</code>. More breathing room
            for larger feature blocks.
          </p>
          <Columns base={1} md={2} lg={3} gap="lg">
            {Array.from({ length: 3 }, (_, i) => (
              <DemoCard key={i} n={i + 1} />
            ))}
          </Columns>
        </section>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { LayoutsColumnsPage }
