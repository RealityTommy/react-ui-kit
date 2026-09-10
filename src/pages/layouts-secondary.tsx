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
              <p className="text-sm font-medium text-muted-foreground">Layout reference · Section navigation</p>
              <h1 id="secondary-heading" className="text-4xl font-semibold tracking-tight">
                Keep related destinations together without making them the whole page.
              </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                Secondary navigation is useful when a section has a small, stable set of sibling
                destinations—such as Overview, Installation, Theming, and Tokens.
              </p>
              <p className="leading-7 text-muted-foreground">
                It gives the section a visible local context while leaving the Header responsible
                for the product or site-wide structure. This example uses real links, so each item
                remains a destination that can be opened, shared, bookmarked, or visited with the
                browser's normal link commands.
              </p>
            </section>

            <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="secondary-anatomy-heading">
              <div className="space-y-5">
                <h2 id="secondary-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                  What this layout is doing
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>The Header carries global identity and primary destinations.</li>
                  <li>The secondary bar names the current section and its sibling pages.</li>
                  <li>Main remains a focused reading area with one clear page heading.</li>
                  <li>On small screens, the same items move into the shared mobile drawer.</li>
                </ul>
              </div>
              <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="secondary-recommendation-heading">
                <h2 id="secondary-recommendation-heading" className="text-lg font-semibold">
                  Recommendation
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Keep this row short. If people need multiple levels of grouping, a sidebar or a
                  dedicated contents navigation is usually clearer than adding more pills.
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
                    <li>Use sibling destinations with similar importance and comparable labels.</li>
                    <li>Keep the active state obvious without relying on color alone.</li>
                    <li>Do not use the row as a replacement for a page heading or breadcrumb.</li>
                    <li>Let the row scroll away naturally unless persistent access is essential.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Give the navigation landmark a specific accessible name.</li>
                    <li>Use real anchors and mark the current destination with <code>aria-current="page"</code>.</li>
                    <li>Preserve a visible keyboard focus indicator for every link.</li>
                    <li>Ensure the mobile drawer exposes the same destinations in reading order.</li>
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
                  The cards below represent the page content that sits beneath the section context.
                  In a real page, replace them with the primary task, article, or workflow for the
                  selected destination.
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
