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
                <h2 id="secondary-recommendation-heading" className="text-2xl font-semibold tracking-tight">
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
          <section className="space-y-5" aria-labelledby="layouts-secondary-responsive-heading">
            <h2 id="layouts-secondary-responsive-heading" className="text-2xl font-semibold tracking-tight">
              Responsive behavior
            </h2>
            <p className="leading-7 text-muted-foreground">This layout is designed mobile-first. Begin with one vertical stack for the narrowest screen. On wider screens, the row of section links stays above the content and cards can move side by side when they remain comfortable to read.</p>
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
                  Mobile-first means the page begins with one content group in a vertical stack. As the screen gets wider, more groups can sit side by side when they remain easy to read.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The section links sit above the page, leaving the main content with room for four groups at the widest size. Use fewer when the cards need more breathing room.
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
                When the page needs a second area
              </h2>
              <p className="text-muted-foreground">
                The section links sit above the page, so the content can place a main area beside a secondary area. The live demonstrations below show two ways to share the width.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">More room for the main area</h3>
                <SplitPaneDemo secondarySize="third" mainColumns={{ visible: { base: 1, sm: 2, md: 2, lg: 3 }, hidden: { base: 1, sm: 2, md: 3, lg: 4 } }} mainCardCount={8} secondaryColumns={{ third: { base: 1, sm: 1, md: 1, lg: 2 }, half: { base: 1, sm: 1, md: 2, lg: 2 } }} secondaryCardCount={4} />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Equal room for both areas</h3>
                <SplitPaneDemo secondarySize="half" mainColumns={{ visible: { base: 1, sm: 1, md: 2, lg: 2 }, hidden: { base: 1, sm: 2, md: 3, lg: 4 } }} mainCardCount={8} secondaryColumns={{ third: { base: 1, sm: 1, md: 1, lg: 2 }, half: { base: 1, sm: 1, md: 2, lg: 2 } }} secondaryCardCount={4} />
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
