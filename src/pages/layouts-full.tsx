/**
 * LayoutsFullPage — reference guide for the most information-dense shell.
 *
 * Explains the cost and responsibility of combining section navigation, a
 * sidebar, and a main reading area in one page composition.
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
import { DemoCard } from './_demo-card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

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
// Page
// ---------------------------------------------------------------

/**
 * Full-layout reference page. Mounted by the demo router at
 * `#/layouts/full`.
 *
 * @example
 * { path: '/layouts/full', component: LayoutsFullPage }
 */
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
            <div className="space-y-14 pb-12">
              <section className="max-w-3xl space-y-5 pt-6" aria-labelledby="full-heading">
                <h1 id="full-heading" className="text-4xl font-semibold tracking-tight">
                  Use the full layout only when people need it.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  This layout combines a Header, a second row of links, a Sidebar, and the main
                  content. It can work well for a large product, but it gives people more to
                  understand and gives the team more to maintain.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The point is not to show every kind of navigation at once. Use this when people
                  need both the bigger picture and a detailed map of the section they are in.
                </p>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="full-anatomy-heading">
                <div className="space-y-5">
                  <h2 id="full-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                    What this layout is doing
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>The Header handles the main site or product navigation.</li>
                    <li>The second row holds a short list of pages in this section.</li>
                    <li>The Sidebar holds deeper groups of pages.</li>
                    <li>Main stays focused on the task, article, or workflow.</li>
                  </ul>
                </div>
                <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="full-recommendation-heading">
                  <h2 id="full-recommendation-heading" className="text-lg font-semibold">
                    Recommendation
                  </h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                  Start with the simplest layout that works. Use this one only when people really
                  need both kinds of navigation.
                  </p>
                </aside>
              </section>

              <section className="space-y-5" aria-labelledby="full-decisions-heading">
                <h2 id="full-decisions-heading" className="text-2xl font-semibold tracking-tight">
                  Design and accessibility considerations
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Design decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Give each layer a clear job so the page does not feel repetitive.</li>
                    <li>Keep labels and current-page styles consistent.</li>
                    <li>Leave enough room for the main content to be comfortable to read.</li>
                    <li>Try it with real content. The page can feel busy quickly.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>Give each navigation area its own clear name.</li>
                      <li>Keep the page heading in Main and keep the reading order sensible.</li>
                      <li>Make the skip link move directly to the main content.</li>
                      <li>Check that the menu keeps the same hierarchy without feeling repetitive.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="full-example-heading">
                <div className="max-w-2xl space-y-2">
                  <h2 id="full-example-heading" className="text-2xl font-semibold tracking-tight">
                    Example content area
                  </h2>
                  <p className="text-muted-foreground">
                    This example uses fewer columns because both navigation areas take up room. In a
                    real page, let the content decide how dense the layout should be.
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

export { LayoutsFullPage }
