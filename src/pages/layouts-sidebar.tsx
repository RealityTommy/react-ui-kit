/**
 * LayoutsSidebarPage — reference guide for persistent section navigation.
 *
 * Explains the sidebar pattern as an information-architecture choice, not just
 * a column added beside Main.
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

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

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

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Sidebar-layout reference page. Mounted by the demo router at
 * `#/layouts/sidebar`.
 *
 * @example
 * { path: '/layouts/sidebar', component: LayoutsSidebarPage }
 */
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
            <div className="space-y-14 pb-12">
              <section className="max-w-3xl space-y-5 pt-6" aria-labelledby="sidebar-heading">
              <h1 id="sidebar-heading" className="text-4xl font-semibold tracking-tight">
                Give larger sections a clear map without taking over the page.
              </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                A sidebar helps when people need to move between several related pages while keeping
                the section's organization visible next to the content.
              </p>
              <p className="leading-7 text-muted-foreground">
                This works well for documentation, settings, account areas, and other parts of a
                product with several pages. It should not hold every possible link. It should help
                people find their way around the section they are in.
                </p>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="sidebar-anatomy-heading">
                <div className="space-y-5">
                  <h2 id="sidebar-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                    What this layout is doing
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>The page keeps the sidebar and content lined up with the Header and Footer.</li>
                  <li>The sidebar groups related pages and shows where someone is now.</li>
                  <li>Main gets the rest of the space for reading or getting work done.</li>
                  <li>On smaller screens, the sidebar becomes a section in the menu.</li>
                  </ul>
                </div>
                <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="sidebar-recommendation-heading">
                  <h2 id="sidebar-recommendation-heading" className="text-lg font-semibold">
                    Recommendation
                  </h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                  Choose a sidebar because people need it, not because there is empty space on the
                  left.
                  </p>
                </aside>
              </section>

              <section className="space-y-5" aria-labelledby="sidebar-decisions-heading">
                <h2 id="sidebar-decisions-heading" className="text-2xl font-semibold tracking-tight">
                  Design and accessibility considerations
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Design decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Group links around how people think about the work, not how the team built it.</li>
                    <li>Use short labels that still make sense when someone scans the list.</li>
                    <li>Leave enough room for the main content to breathe.</li>
                    <li>Make the current page and the groups easy to tell apart.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>Give the sidebar a name that separates it from the other navigation.</li>
                      <li>Use headings and group labels that still make sense without the styling.</li>
                      <li>Make sure assistive technology can tell which page is current.</li>
                      <li>Make the menu version easy to find and use with a keyboard.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="sidebar-example-heading">
                <div className="max-w-2xl space-y-2">
                  <h2 id="sidebar-example-heading" className="text-2xl font-semibold tracking-tight">
                    Example content area
                  </h2>
                  <p className="text-muted-foreground">
                    The sidebar is most useful when the content beside it needs some orientation.
                    These cards stand in for that content so the layout is easy to see.
                  </p>
                </div>
                <Columns base={1} sm={2} md={2} lg={3}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <DemoCard key={i} title={`Card ${i + 1}`} />
                  ))}
                </Columns>
              </section>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSidebarPage }
