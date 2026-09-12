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
import { SplitPaneDemo } from './_split-pane-demo'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

const sectionNav: NavLeaf[] = [
  { href: '/layouts/secondary', label: 'Section one' },
  { href: '/layouts/secondary/install', label: 'Section two' },
  { href: '/layouts/secondary/theming', label: 'Section three' },
  { href: '/layouts/secondary/tokens', label: 'Section four' },
]

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Secondary-layout reference page. Mounted by the demo router at
 * `/layouts/secondary`.
 *
 * @example
 * { path: '/layouts/secondary', component: LayoutsSecondaryPage }
 */
function LayoutsSecondaryPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Documentation"
      activeHref="/layouts/secondary"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
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
                <p className="leading-7 text-muted-foreground">
                  This layout adds a short row of section links below the Header. The Header handles
                  the wider site or product navigation, while the second row keeps a small group of
                  related pages together. Main stays focused on the page someone came to read or
                  use, and the links move into the menu on smaller screens.
                </p>
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="secondary-use-heading">
              <div className="space-y-5">
                <h2 id="secondary-use-heading" className="text-2xl font-semibold tracking-tight">
                  When to use this layout
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>When the pages are siblings and people may move between them often.</li>
                  <li>
                    For a small documentation section, a product area, or a group of related steps.
                  </li>
                </ul>
              </div>
              <div className="space-y-5" aria-labelledby="secondary-recommendation-heading">
                <h2
                  id="secondary-recommendation-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  When not to use this layout
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>When the section has a long list of links or several levels of grouping.</li>
                  <li>
                    When only one or two related pages exist and the extra row would not help.
                  </li>
                  <li>When a sidebar would make the deeper page structure easier to understand.</li>
                </ul>
              </div>
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
                    <li>
                      Give SecondaryNav its own accessible name so it is distinct from Header
                      navigation.
                    </li>
                    <li>
                      Use real links and mark the current page with <code>aria-current="page"</code>
                      .
                    </li>
                    <li>
                      Keep a visible focus indicator and verify that each item is a real
                      keyboard-accessible link.
                    </li>
                    <li>
                      Verify that the mobile menu preserves the same link order and current-page
                      state.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="space-y-5" aria-labelledby="layouts-secondary-responsive-heading">
              <h2
                id="layouts-secondary-responsive-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Responsive behavior
              </h2>
              <p className="leading-7 text-muted-foreground">
                On a narrow screen, the section links move into the mobile menu and Main begins with
                one vertical stack. On wider screens, the named SecondaryNav stays above Main, while
                cards move side by side only when the remaining content width keeps them comfortable
                to read.
              </p>
            </section>

            <section className="space-y-5" aria-labelledby="secondary-card-count-heading">
              <div className="space-y-2">
                <h2
                  id="secondary-card-count-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  How many cards can fit across the page?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Start with one content group in a vertical stack. As the available width grows,
                  more groups can sit side by side when each card still has room for its label,
                  content, and actions.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The section links use some vertical space but leave Main broad enough for four
                  columns at the largest size in this example. These are starting points, not a
                  rule: use fewer columns when the real card content needs more room.
                </p>
              </div>
              <Columns base={1} sm={2} md={3} lg={4}>
                {Array.from({ length: 8 }, (_, i) => (
                  <DemoCard key={i} title={`Card ${i + 1}`} />
                ))}
              </Columns>
            </section>
          </div>
          <section className="space-y-5" aria-labelledby="secondary-second-area-heading">
            <div className="space-y-2">
              <h2
                id="secondary-second-area-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Optional split view
              </h2>
              <p className="text-muted-foreground">
                The base layout uses SecondaryNav above one Main area. A split view is an optional
                extension for pages that also need supporting content beside the primary work. The
                demonstrations show two ways to share the remaining width.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">More room for the main area</h3>
                <SplitPaneDemo
                  secondarySize="third"
                  mainColumns={{
                    visible: { base: 1, sm: 2, md: 2, lg: 3 },
                    hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                  }}
                  mainCardCount={8}
                  secondaryColumns={{
                    third: { base: 1, sm: 1, md: 1, lg: 2 },
                    half: { base: 1, sm: 1, md: 2, lg: 2 },
                  }}
                  secondaryCardCount={4}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Equal room for both areas</h3>
                <SplitPaneDemo
                  secondarySize="half"
                  mainColumns={{
                    visible: { base: 1, sm: 1, md: 2, lg: 2 },
                    hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                  }}
                  mainCardCount={8}
                  secondaryColumns={{
                    third: { base: 1, sm: 1, md: 1, lg: 2 },
                    half: { base: 1, sm: 1, md: 2, lg: 2 },
                  }}
                  secondaryCardCount={4}
                />
              </div>
            </div>
          </section>
        </Main>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { LayoutsSecondaryPage }
