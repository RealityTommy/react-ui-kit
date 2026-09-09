/**
 * LayoutsFullPage — demos Header + SecondaryNav + Sidebar + Main + Footer.
 *
 * All four chrome components together. Uses PageBody to wrap the
 * Sidebar + Main pair inside a shared width cap; Main goes full
 * so it doesn't double-cap. Stress-tests LayoutProvider's
 * multi-section drawer: mobile menu shows Primary + Documentation
 * (secondary) + On this page (sidebar).
 */

import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav } from './index'

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

function LayoutsFullPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Documentation"
      sidebarNav={sidebarEntries}
      sidebarNavLabel="On this page"
      activeHref="#/layouts/full"
    >
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <SecondaryNav aria-label="Documentation" />
      <PageBody>
        <Sidebar aria-label="On this page" />
        <Main size="full">
          <h1 className="text-3xl font-semibold mb-4">Layouts / Full</h1>
          <p className="text-muted-foreground">
            Header + SecondaryNav + Sidebar + Main + Footer. Sidebar + Main are wrapped in PageBody
            so the pair aligns with Header/Footer width. On mobile the hamburger drawer stacks
            Primary + Documentation + On this page sections with dividers between them.
          </p>
        </Main>
      </PageBody>
      <Footer copyright={<>© 2026 Tommy Truong</>} />
    </LayoutProvider>
  )
}

export { LayoutsFullPage }
