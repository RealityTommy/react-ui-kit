/**
 * LayoutsFullPage — demos Header + SecondaryNav + Sidebar + Main +
 * Footer with a dense tile grid inside Main.
 *
 * All four chrome components together. Uses PageBody to wrap the
 * Sidebar + Main pair inside a shared width cap; Main goes full
 * so it doesn't double-cap. Stress-tests LayoutProvider's
 * multi-section drawer: mobile menu shows Primary + Documentation
 * (secondary) + On this page (sidebar).
 *
 * PageShell wraps the whole tree so Footer pins to the viewport
 * bottom. PageBody's `flex-1` grows the Sidebar + Main pair to
 * fill space between SecondaryNav and Footer.
 *
 * Columns config is the densest of the demo pages (base=2 sm=3
 * md=3 lg=4 gap="sm") with 12 items — a tile-grid pattern.
 * Stress-tests Columns inside the tightest available space
 * (viewport minus Sidebar, below Header + SecondaryNav) with the
 * most complex responsive escalation.
 */

import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { Columns } from '@/components/layout/columns'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const sectionNav: NavLeaf[] = [
  { href: '#/layouts/full', label: 'Overview' },
  { href: '#/layouts/full/install', label: 'Installation' },
  { href: '#/layouts/full/theming', label: 'Theming' },
]

const sidebarEntries: (NavLeaf | NavGroup)[] = [
  { href: '#/layouts/full', label: 'Overview', icon: Home },
  {
    label: 'Getting Started',
    items: [
      { href: '#/layouts/full/install', label: 'Installation', icon: Rocket },
      { href: '#/layouts/full/theming', label: 'Theming', icon: Palette },
    ],
  },
  {
    label: 'Components',
    items: [{ href: '#/layouts/full/parts', label: 'Parts', icon: Puzzle }],
  },
]

// ---------------------------------------------------------------
// Demo tile
// ---------------------------------------------------------------

/**
 * Dense tile — small square, muted background, centered index.
 * Sized for the tightest layout on the site.
 */
function DemoTile({ n }: { n: number }) {
  return (
    <div className="flex aspect-square items-center justify-center rounded-md bg-muted text-sm font-medium text-muted-foreground">
      {n}
    </div>
  )
}

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

function LayoutsFullPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Documentation"
      sidebarNav={sidebarEntries}
      sidebarNavLabel="On this page"
      activeHref="#/layouts/full"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Documentation" />
        <PageBody>
          <Sidebar aria-label="On this page" />
          <Main size="full">
            <h1 className="text-3xl font-semibold mb-4">Layouts / Full</h1>
            <p className="text-muted-foreground mb-8">
              Header + SecondaryNav + Sidebar + Main + Footer. Sidebar + Main are wrapped in
              PageBody so the pair aligns with Header/Footer width. On mobile the hamburger drawer
              stacks Primary + Documentation + On this page sections with dividers between them.
              Grid below uses <code>Columns base=2 sm=3 md=3 lg=4 gap=&quot;sm&quot;</code> — the
              densest layout, stress-testing reflow in the tightest available space.
            </p>
            <Columns base={2} sm={3} md={3} lg={4} gap="sm">
              {Array.from({ length: 12 }, (_, i) => (
                <DemoTile key={i} n={i + 1} />
              ))}
            </Columns>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsFullPage }
