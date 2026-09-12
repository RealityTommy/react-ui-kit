/**
 * LayoutsHeaderOnlyPage — simple Header + Main + Footer layout reference.
 *
 * This page is the header-only baseline example: one main content area, no secondary
 * navigation, and no sidebar. It also shows how to choose a sensible number
 * of columns as the screen gets wider.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { DemoCard } from './_demo-card'
import { SplitPaneDemo } from './_split-pane-demo'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Header Only layout reference page. Mounted by the demo router at `/layouts/header-only`.
 *
 * @example
 * { path: '/layouts/header-only', component: LayoutsHeaderOnlyPage }
 */
function LayoutsHeaderOnlyPage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-14 pb-12">
          <section className="space-y-5 pt-6" aria-labelledby="header-only-heading">
            <h1 id="header-only-heading" className="text-4xl font-semibold tracking-tight">
              Keep the page focused when the content has one clear job.
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              A Header, a Main area, and a Footer. There is no second row of links and no sidebar.
              The page gives the content most of the attention.
            </p>
          </section>

          <section className="space-y-5" aria-labelledby="header-only-what-heading">
            <h2 id="header-only-what-heading" className="text-2xl font-semibold tracking-tight">
              What is this layout?
            </h2>
            <p className="leading-7 text-muted-foreground">
              This is the basic page layout in the kit. The Header handles the main navigation. Main
              holds one clear page heading and the work of the page. The Footer provides the small
              amount of supporting information that belongs at the bottom.
            </p>
          </section>

          <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="header-only-use-heading">
            <div className="space-y-5">
              <h2 id="header-only-use-heading" className="text-2xl font-semibold tracking-tight">
                When to use this layout
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>When the page has one main job.</li>
                <li>When the main navigation is enough to help people move around.</li>
                <li>For landing pages, simple dashboards, articles, and focused workflows.</li>
                <li>When adding more navigation would distract from the content.</li>
              </ul>
            </div>
            <div className="space-y-5" aria-labelledby="header-only-recommendation-heading">
              <h2 id="header-only-recommendation-heading" className="text-2xl font-semibold tracking-tight">
                When not to use this layout
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>When people need to move between many pages in the same section.</li>
                <li>When the page needs a visible map of a deeper set of content.</li>
                <li>When people need section links and a sidebar at the same time.</li>
                <li>When hiding important navigation in the Header would make it hard to find.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-5" aria-labelledby="header-only-considerations-heading">
            <h2
              id="header-only-considerations-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Design/accessibility considerations
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Design</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Give the page one clear heading and one clear next step.</li>
                  <li>Use the extra space for content, not for extra controls.</li>
                  <li>Keep the Header and Main lined up so the page feels steady.</li>
                  <li>
                    Let the content determine the page height instead of forcing a fixed screen.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep one clear <code>h1</code> as the first meaningful heading in Main.</li>
                  <li>Verify that the skip link moves focus directly to Main.</li>
                  <li>Give Header navigation a clear accessible name and keep focus styles visible.</li>
                  <li>Check at a narrow viewport that Main remains first and no horizontal scrolling is required.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-5" aria-labelledby="layouts-header-only-responsive-heading">
            <h2 id="layouts-header-only-responsive-heading" className="text-2xl font-semibold tracking-tight">
              Responsive behavior
            </h2>
            <p className="leading-7 text-muted-foreground">On a narrow screen, Header navigation moves into the mobile menu and Main begins with one vertical stack. As the available width grows, cards can sit side by side only when each remains easy to read and use. The Header, Main, and Footer keep their page-level jobs throughout.</p>
          </section>

          <section className="space-y-5" aria-labelledby="header-only-card-count-heading">
            <div className="space-y-3">
              <h2
                id="header-only-card-count-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                How many cards can fit across the page?
              </h2>
              <p className="leading-7 text-muted-foreground">
                Start with one content group in a vertical stack. As the available width grows, more groups can sit side by side when each card still has room for its label, content, and actions.
              </p>
              <p className="leading-7 text-muted-foreground">
                This example starts with one column, allows two at small widths, three at medium widths, and four at large widths. Those are starting points, not a rule: use fewer columns when the real card content needs more room.
              </p>
            </div>
            <Columns base={1} sm={2} md={3} lg={4} gap="lg">
              {Array.from({ length: 8 }, (_, i) => (
                <DemoCard key={i} title={`Card ${i + 1}`} />
              ))}
            </Columns>
          </section>
        </div>
        <section className="space-y-5" aria-labelledby="header-only-second-area-heading">
          <div className="space-y-2">
            <h2
              id="header-only-second-area-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Optional split view
            </h2>
            <p className="text-muted-foreground">
              The base layout has one Main area. A split view is an optional extension for pages that need supporting content beside the primary work. The demonstrations show two ways to share the available width.
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
  )
}

export { LayoutsHeaderOnlyPage }
