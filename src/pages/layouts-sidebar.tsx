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
import { SplitPaneDemo } from './_split-pane-demo'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

const sidebarEntries: (NavLeaf | NavGroup)[] = [
  { href: '#/layouts/sidebar', label: 'Page one', icon: Home },
  {
    label: 'Group one',
    items: [
      { href: '#/layouts/sidebar/install', label: 'Page two', icon: Rocket },
      { href: '#/layouts/sidebar/theming', label: 'Page three', icon: Palette },
    ],
  },
  {
    label: 'Group two',
    items: [{ href: '#/layouts/sidebar/parts', label: 'Page four', icon: Puzzle }],
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
              <section className="space-y-5 pt-6" aria-labelledby="sidebar-heading">
                <h1 id="sidebar-heading" className="text-4xl font-semibold tracking-tight">
                  Give larger sections a clear map without taking over the page.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  A sidebar helps when people need to move between several related pages while
                  keeping the section's organization visible next to the content.
                </p>
                <p className="leading-7 text-muted-foreground">
                  This works well for documentation, settings, account areas, and other parts of a
                  product with several pages. It should not hold every possible link. It should help
                  people find their way around the section they are in.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="sidebar-anatomy-heading">
                <div className="space-y-5">
                  <h2
                    id="sidebar-anatomy-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    What is this layout?
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    This layout places a section map beside the main content. The sidebar groups
                    related pages and shows where someone is now, while Main gets the rest of the
                    space for reading or getting work done. On smaller screens, the sidebar becomes
                    a section in the menu.
                  </p>
                </div>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="sidebar-use-heading">
                <div className="space-y-5">
                  <h2 id="sidebar-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use this layout
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When a section has enough pages that people need help finding their way
                      around.
                    </li>
                    <li>
                      For documentation, settings, account areas, and other sections with several
                      related pages.
                    </li>
                  </ul>
                </div>
                <aside
                  className="rounded-xl border bg-muted/40 p-6"
                  aria-labelledby="sidebar-recommendation-heading"
                >
                  <h2 id="sidebar-recommendation-heading" className="text-lg font-semibold">
                    When not to use this layout
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>When the page is simple and a sidebar would make it feel heavier.</li>
                    <li>
                      When the links are few, temporary, or unrelated to the content someone is
                      viewing.
                    </li>
                    <li>When there is not enough content to justify a persistent section map.</li>
                  </ul>
                </aside>
              </section>

              <section className="space-y-5" aria-labelledby="sidebar-decisions-heading">
                <h2
                  id="sidebar-decisions-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design/accessibility considerations
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Design decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>
                        Group links around how people think about the work, not how the team built
                        it.
                      </li>
                      <li>Use short labels that still make sense when someone scans the list.</li>
                      <li>Leave enough room for the main content to breathe.</li>
                      <li>Make the current page and the groups easy to tell apart.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>Give the sidebar a name that separates it from the other navigation.</li>
                      <li>
                        Use headings and group labels that still make sense without the styling.
                      </li>
                      <li>Make sure assistive technology can tell which page is current.</li>
                      <li>Make the menu version easy to find and use with a keyboard.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="sidebar-available-columns-heading">
                <div className="space-y-2">
                  <h2
                    id="sidebar-available-columns-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Available columns
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    The available configuration is{' '}
                    <code className="ml-1">base=1 sm=2 md=2 lg=3</code>. This layout makes up to
                    three columns available at larger widths, but it starts with one column on
                    narrow screens.
                  </p>
                  <p className="leading-7 text-muted-foreground">
                    The Sidebar takes up room, so this layout makes up to three columns available in
                    the main content. Stop at three when the cards still have enough width for their
                    content.
                  </p>
                </div>
                <Columns base={1} sm={2} md={2} lg={3}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <DemoCard key={i} title={`Card ${i + 1}`} />
                  ))}
                </Columns>
              </section>
            </div>
            <section className="space-y-5" aria-labelledby="sidebar-available-splits-heading">
              <div className="space-y-2">
                <h2
                  id="sidebar-available-splits-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Available split views
                </h2>
                <p className="text-muted-foreground">
                  The Sidebar already uses part of the page width, so this layout makes only the
                  half split available.
                </p>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Main 1/2 + Secondary 1/2</h3>
                  <SplitPaneDemo secondarySize="half" />
                </div>
              </div>
            </section>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSidebarPage }
