/**
 * LayoutsSidebarPage — demos Header + Sidebar + Main + Footer with
 * a conservative card grid inside Main.
 *
 * Sidebar sits left of Main inside a PageBody, so the sidebar+
 * content pair respects the same width cap as Header/Footer above.
 * Main uses size="full" here since PageBody owns the cap — otherwise
 * we'd double-cap (Container inside Container). On mobile the
 * Sidebar items appear inside Header's drawer under the label set
 * by `sidebarNavLabel` (matches Sidebar's aria-label for consistency).
 *
 * PageShell wraps the whole tree so Footer pins to the viewport
 * bottom. PageBody carries `flex-1` so the Sidebar + Main pair
 * grows to fill the space between Header and Footer.
 *
 * Columns config here is deliberately conservative (base=1 sm=2
 * md=2 lg=3): Sidebar eats 240px of width, so Main has less room
 * than the standalone pages. Capping at 3 columns (vs Home/Secondary's
 * 4) keeps cards readable. Uses the shared DemoCard scaffold so
 * every layout demo speaks the same visual language.
 */

import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Sidebar } from '@/components/layout/sidebar'
import { Columns } from '@/components/layout/columns'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { DemoCard } from './_demo-card'
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
            <p className="text-muted-foreground mb-8">
              Header + Sidebar + Main + Footer. Sidebar and Main sit inside a PageBody so the pair
              caps at the same width as Header/Footer above. On mobile the entries appear inside the
              hamburger drawer under a &quot;Documentation&quot; heading. Grid below uses{' '}
              <code>Columns base=1 sm=2 md=2 lg=3</code> — more conservative than the standalone
              pages because Sidebar eats 240px of width.
            </p>
            <Columns base={1} sm={2} md={2} lg={3}>
              {Array.from({ length: 6 }, (_, i) => (
                <DemoCard key={i} title={`Card ${i + 1}`} />
              ))}
            </Columns>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSidebarPage }
