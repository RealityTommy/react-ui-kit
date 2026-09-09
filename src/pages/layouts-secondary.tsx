/**
 * LayoutsSecondaryPage — demos Header + SecondaryNav + Main + Footer.
 *
 * SecondaryNav sits directly under Header for section-level tabs.
 * On mobile, SecondaryNav's items appear inside Header's drawer
 * (via LayoutProvider), so the mobile menu stays unified. The
 * `secondaryNavLabel` prop drives both the drawer section heading
 * on mobile and matches SecondaryNav's `aria-label` on desktop —
 * a11y landmark and visible heading stay in sync.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import type { NavLeaf } from '@/components/layout/types'
import { primaryNav } from './index'

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
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <SecondaryNav aria-label="Documentation" />
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Layouts / Secondary</h1>
        <p className="text-muted-foreground">
          Header + SecondaryNav + Main + Footer. The section tabs above scroll away with the page
          (not sticky). On mobile they appear inside the hamburger drawer under a "Documentation"
          heading.
        </p>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} />
    </LayoutProvider>
  )
}

export { LayoutsSecondaryPage }
