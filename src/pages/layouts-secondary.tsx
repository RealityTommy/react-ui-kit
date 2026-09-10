/**
 * LayoutsSecondaryPage — demos Header + SecondaryNav + Main + Footer
 * with a card grid inside Main.
 *
 * SecondaryNav sits directly under Header for section-level tabs.
 * On mobile, SecondaryNav's items appear inside Header's drawer
 * (via LayoutProvider), so the mobile menu stays unified. The
 * `secondaryNavLabel` prop drives both the drawer section heading
 * on mobile and matches SecondaryNav's `aria-label` on desktop —
 * a11y landmark and visible heading stay in sync.
 *
 * PageShell wraps the whole tree so Footer pins to the viewport
 * bottom on this short demo page. Columns shows the card-grid
 * pattern (1 → 2 → 3 → 4 cols, default gap) inside a Container-
 * capped Main — verifies the pill tray above doesn't push the grid.
 * Same 4-col ceiling as Home since Main here has full width too
 * (no Sidebar competing for horizontal space).
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Columns } from '@/components/layout/columns'
import type { NavLeaf } from '@/components/layout/types'
import { DemoCard } from './_demo-card'
import { primaryNav, footerLinks } from './index'

// Sample section tabs — kept in-page since this is demo content.
const sectionNav: NavLeaf[] = [
  { href: '#/layouts/secondary', label: 'Overview' },
  { href: '#/layouts/secondary/install', label: 'Installation' },
  { href: '#/layouts/secondary/theming', label: 'Theming' },
  { href: '#/layouts/secondary/tokens', label: 'Tokens' },
]

function LayoutsSecondaryPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Documentation"
      activeHref="#/layouts/secondary"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Documentation" />
        <Main>
          <h1 className="text-3xl font-semibold mb-4">Layouts / Secondary</h1>
          <p className="text-muted-foreground mb-8">
            Header + SecondaryNav + Main + Footer. The section tabs above scroll away with the page
            (not sticky). On mobile they appear inside the hamburger drawer under a
            &quot;Documentation&quot; heading. Grid below uses{' '}
            <code>Columns base=1 sm=2 md=3 lg=4</code>.
          </p>
          <Columns base={1} sm={2} md={3} lg={4}>
            {Array.from({ length: 8 }, (_, i) => (
              <DemoCard key={i} title={`Card ${i + 1}`} />
            ))}
          </Columns>
        </Main>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSecondaryPage }
