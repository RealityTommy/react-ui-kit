/**
 * LayoutsSecondaryPage — reference guide for section-level navigation.
 *
 * Explains when a horizontal secondary navigation helps people move between
 * sibling pages, and when it creates unnecessary competition with primary nav.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Columns } from '@/components/layout/columns'
import type { NavLeaf } from '@/components/layout/types'
import { DemoCard } from './_demo-card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

const sectionNav: NavLeaf[] = [
  { href: '#/layouts/secondary', label: 'Overview' },
  { href: '#/layouts/secondary/install', label: 'Installation' },
  { href: '#/layouts/secondary/theming', label: 'Theming' },
  { href: '#/layouts/secondary/tokens', label: 'Tokens' },
]

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Secondary-layout reference page. Mounted by the demo router at
 * `#/layouts/secondary`.
 *
 * @example
 * { path: '/layouts/secondary', component: LayoutsSecondaryPage }
 */
function LayoutsSecondaryPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Documentation"
      activeHref="#/layouts/secondary"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Documentation" />
        <Main>
          <div className="space-y-14 pb-12">
            <section className="max-w-3xl space-y-5 pt-6" aria-labelledby="secondary-heading">
              <h1 id="secondary-heading" className="text-4xl font-semibold tracking-tight">
                Keep related pages together without making them the whole page.
              </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                A second row of links can help when a section has a small set of related pages, such
                as Overview, Installation, Theming, and Tokens.
              </p>
              <p className="leading-7 text-muted-foreground">
                It gives people a little more context without asking the Header to carry every link.
                These are regular links, so people can open, share, bookmark, or use them with the
                browser as usual.
              </p>
            </section>

            <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="secondary-anatomy-heading">
              <div className="space-y-5">
                <h2 id="secondary-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                  What this layout is doing
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>The Header handles the main site or product navigation.</li>
                  <li>The second row holds the pages that belong to this section.</li>
                  <li>Main stays focused on the page someone came to read or use.</li>
                  <li>On smaller screens, the same links move into the menu.</li>
                </ul>
              </div>
              <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="secondary-recommendation-heading">
                <h2 id="secondary-recommendation-heading" className="text-lg font-semibold">
                  Recommendation
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Keep this row short. If people need several levels of grouping, a sidebar is
                  probably easier to understand.
                </p>
              </aside>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-use-heading">
              <h2 id="secondary-use-heading" className="text-2xl font-semibold tracking-tight">
                Design and accessibility considerations
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">Design decisions</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Use pages that belong together and have a similar level of importance.</li>
                    <li>Make the current page clear without relying on color alone.</li>
                    <li>Keep the page heading separate from this row of links.</li>
                    <li>Let the row scroll away unless people truly need it to stay visible.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Give this navigation its own clear name.</li>
                    <li>Use real links and mark the current page with <code>aria-current="page"</code>.</li>
                    <li>Keep a visible focus indicator for keyboard users.</li>
                    <li>Make sure the menu shows the same links in a sensible order.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-example-heading">
              <div className="max-w-2xl space-y-2">
                <h2 id="secondary-example-heading" className="text-2xl font-semibold tracking-tight">
                  Example content area
                </h2>
                <p className="text-muted-foreground">
                  The cards below stand in for the content below the section links. On a real page,
                  this is where the main task, article, or workflow would go.
                </p>
              </div>
              <Columns base={1} sm={2} md={3} lg={4}>
                {Array.from({ length: 8 }, (_, i) => (
                  <DemoCard key={i} title={`Card ${i + 1}`} />
                ))}
              </Columns>
            </section>
          </div>
        </Main>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSecondaryPage }
