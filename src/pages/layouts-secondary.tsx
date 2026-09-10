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
  { href: '#/layouts/secondary', label: 'Section one' },
  { href: '#/layouts/secondary/install', label: 'Section two' },
  { href: '#/layouts/secondary/theming', label: 'Section three' },
  { href: '#/layouts/secondary/tokens', label: 'Section four' },
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
            <section className="space-y-5 pt-6" aria-labelledby="secondary-heading">
              <h1 id="secondary-heading" className="text-4xl font-semibold tracking-tight">
                Keep related pages together without making them the whole page.
              </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                A second row of links can help when a section has a small set of related pages.
              </p>
              <p className="leading-7 text-muted-foreground">
                It gives people a little more context without asking the Header to carry every link.
                These are regular links, so people can open, share, bookmark, or use them with the
                browser as usual.
              </p>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-anatomy-heading">
              <div className="space-y-5">
                <h2
                  id="secondary-anatomy-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is this layout?
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>The Header handles the main site or product navigation.</li>
                  <li>The second row holds the pages that belong to this section.</li>
                  <li>Main stays focused on the page someone came to read or use.</li>
                  <li>On smaller screens, the same links move into the menu.</li>
                </ul>
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="secondary-use-heading">
              <div className="space-y-5">
                <h2 id="secondary-use-heading" className="text-2xl font-semibold tracking-tight">
                  When to use this layout
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Use it when the pages are siblings and people may move between them often. It
                  works well for a small documentation section, a product area, or a group of
                  related steps.
                </p>
              </div>
              <aside
                className="rounded-xl border bg-muted/40 p-6"
                aria-labelledby="secondary-recommendation-heading"
              >
                <h2 id="secondary-recommendation-heading" className="text-lg font-semibold">
                  When not to use this layout
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Do not use this row for a long list of links or several levels of grouping. A
                  sidebar is probably easier to understand. If the page has only one or two related
                  pages, the extra row may not be needed at all.
                </p>
              </aside>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-decisions-heading">
              <h2
                id="secondary-decisions-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Design/accessibility considerations
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
                    <li>
                      Use real links and mark the current page with <code>aria-current="page"</code>
                      .
                    </li>
                    <li>Keep a visible focus indicator for keyboard users.</li>
                    <li>Make sure the menu shows the same links in a sensible order.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-example-heading">
              <div className="space-y-2">
                <h2
                  id="secondary-example-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Example columns
                </h2>
                <p className="text-muted-foreground">
                  This example uses <code>base=1 sm=2 md=3 lg=4</code>. Start with one column on a
                  small screen, then add columns as there is room. Add another column only when the
                  cards are still easy to scan and use.
                </p>
                <p className="text-muted-foreground">
                  The right number depends on the content. Short cards can support more columns;
                  cards with longer titles, descriptions, or actions may need fewer. Check the
                  reflow at narrow widths and make sure the order still makes sense when the grid
                  becomes one column.
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
