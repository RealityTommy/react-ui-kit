/**
 * LayoutsFullPage — demos Header + SecondaryNav + Sidebar + Main + Footer.
 *
 * All four chrome components together. Stress-tests LayoutProvider's
 * multi-section drawer: mobile menu shows Primary + Section + Pages.
 */

import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
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
      sidebarNav={sidebarEntries}
      activeHref="#/layouts/full"
    >
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <SecondaryNav aria-label="Section" />
      <div className="flex">
        <Sidebar aria-label="Pages" />
        <Main>
          <h1 className="text-3xl font-semibold mb-4">Layouts / Full</h1>
          <p className="text-muted-foreground">
            Header + SecondaryNav + Sidebar + Main + Footer. On mobile the hamburger drawer stacks
            Primary + Section + Pages sections with dividers between them.
          </p>
        </Main>
      </div>
      <Footer copyright={<>© 2026 Tommy Truong</>} />
    </LayoutProvider>
  )
}

export { LayoutsFullPage }
