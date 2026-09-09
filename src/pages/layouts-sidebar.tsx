/**
 * LayoutsSidebarPage — demos Header + Sidebar + Main + Footer.
 *
 * Sidebar sits left of Main inside a PageBody, so the sidebar+
 * content pair respects the same width cap as Header/Footer above.
 * Main uses size="full" here since PageBody owns the cap — otherwise
 * we'd double-cap (Container inside Container). On mobile the
 * Sidebar items appear inside Header's drawer under the label set
 * by `sidebarNavLabel` (matches Sidebar's aria-label for consistency).
 *
 * PageShell wraps the whole tree so Footer pins to the viewport
 * bottom on this short demo page. PageBody carries `flex-1` so the
 * Sidebar + Main pair grows to fill the space between Header and
 * Footer instead of leaving a gap below Main.
 */

import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

// Sample sidebar entries — mix of grouped and one flat item to
// exercise both rendering paths.
const sidebarEntries: (NavLeaf | NavGroup)[] = [
  { href: '#/layouts/sidebar', label: 'Overview', icon: Home },
  {
    label: 'Getting Started',
    items: [
      { href: '#/layouts/sidebar/install', label: 'Installation', icon: Rocket },
      { href: '#/layouts/sidebar/theming', label: 'Theming', icon: Palette },
    ],
  },
  {
    label: 'Components',
    items: [{ href: '#/layouts/sidebar/parts', label: 'Parts', icon: Puzzle }],
  },
]

function LayoutsSidebarPage() {
  return (
    <LayoutProvider
      sidebarNav={sidebarEntries}
      sidebarNavLabel="Documentation"
      activeHref="#/layouts/sidebar"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
        <PageBody>
          <Sidebar aria-label="Documentation" />
          <Main size="full">
            <h1 className="text-3xl font-semibold mb-4">Layouts / Sidebar</h1>
            <p className="text-muted-foreground">
              Header + Sidebar + Main + Footer. Sidebar and Main sit inside a PageBody so the pair
              caps at the same width as Header/Footer above. On mobile the entries appear inside the
              hamburger drawer under a "Documentation" heading.
            </p>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSidebarPage }
