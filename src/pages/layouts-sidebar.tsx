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
                <p className="text-sm font-medium text-muted-foreground">Layout reference · Persistent navigation</p>
                <h1 id="sidebar-heading" className="text-4xl font-semibold tracking-tight">
                  Give complex sections a stable map without taking over the reading area.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  A sidebar works when people need to move among several related destinations while
                  keeping the section's organization visible beside the current content.
                </p>
                <p className="leading-7 text-muted-foreground">
                  This pattern is especially useful for documentation, settings, account areas, and
                  applications with a durable information architecture. The sidebar is not a place
                  to put every possible destination; it is a map for the current section.
                </p>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="sidebar-anatomy-heading">
                <div className="space-y-5">
                  <h2 id="sidebar-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                    What this layout is doing
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>PageBody owns the shared width so the rail and content align with the chrome.</li>
                    <li>The sidebar groups related destinations and identifies the current page.</li>
                    <li>Main receives the remaining width and can stay focused on reading or work.</li>
                    <li>On small screens, the rail becomes a labeled section in the mobile drawer.</li>
                  </ul>
                </div>
                <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="sidebar-recommendation-heading">
                  <h2 id="sidebar-recommendation-heading" className="text-lg font-semibold">
                    Recommendation
                  </h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    Choose a sidebar because the section has meaningful navigational depth—not simply
                    because the page has empty space on the left.
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
                      <li>Group links by a user's mental model, not by the order they were built.</li>
                      <li>Use concise labels that remain understandable when scanned quickly.</li>
                      <li>Protect Main's reading width; a rail should not make content feel cramped.</li>
                      <li>Keep the active state and group hierarchy visually distinct.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>Name the sidebar landmark so it is distinguishable from other navigation.</li>
                      <li>Use heading order and group labels that communicate hierarchy beyond styling.</li>
                      <li>Keep the current-page state available to assistive technology.</li>
                      <li>Make the mobile replacement discoverable and keyboard operable.</li>
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
                    The sidebar is most valuable when the content beside it has enough depth to need
                    orientation. These cards stand in for that content while keeping the layout easy
                    to inspect.
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
