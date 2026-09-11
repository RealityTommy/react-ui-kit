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
import { SplitPaneDemo } from './_split-pane-demo'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Demo config
// ---------------------------------------------------------------

const sectionNav: NavLeaf[] = [
  { href: '/layouts/full', label: 'Section one' },
  { href: '/layouts/full/install', label: 'Section two' },
  { href: '/layouts/full/theming', label: 'Section three' },
]

const sidebarEntries: (NavLeaf | NavGroup)[] = [
  { href: '/layouts/full', label: 'Page one', icon: Home },
  {
    label: 'Group one',
    items: [
      { href: '/layouts/full/install', label: 'Page two', icon: Rocket },
      { href: '/layouts/full/theming', label: 'Page three', icon: Palette },
    ],
  },
  {
    label: 'Group two',
    items: [{ href: '/layouts/full/parts', label: 'Page four', icon: Puzzle }],
  },
]

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Full-layout reference page. Mounted by the demo router at
 * `/layouts/full`.
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
      activeHref="/layouts/full"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Documentation" />
        <PageBody>
          <Sidebar aria-label="On this page" />
          <Main size="full">
            <div className="space-y-14 pb-12">
              <section className="space-y-5 pt-6" aria-labelledby="full-heading">
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

              <section className="space-y-5" aria-labelledby="full-anatomy-heading">
                <div className="space-y-5">
                  <h2 id="full-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                    What is this layout?
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    This layout combines the Header, a second row of section links, a Sidebar, and
                    the main content. The Header provides the wider navigation, the second row keeps
                    a short list of section pages visible, and the Sidebar holds deeper groups of
                    pages. Main stays focused on the task, article, or workflow.
                  </p>
                </div>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="full-use-heading">
                <div className="space-y-5">
                  <h2 id="full-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use this layout
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When people need both a short list of section pages and a deeper list of pages
                      within that section.
                    </li>
                    <li>
                      For large documentation areas and complex products where people need both the
                      bigger picture and a detailed map.
                    </li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="full-recommendation-heading">
                  <h2 id="full-recommendation-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use this layout
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When the page would be using extra navigation just to make it feel more
                      complete.
                    </li>
                    <li>
                      When one row of links or a sidebar is enough for the people using the page.
                    </li>
                    <li>When the additional layers would make it harder to know where to start.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="full-decisions-heading">
                <h2 id="full-decisions-heading" className="text-2xl font-semibold tracking-tight">
                  Design/accessibility considerations
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
                      <li>
                        Check that the menu keeps the same hierarchy without feeling repetitive.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
          <section className="space-y-5" aria-labelledby="layouts-full-responsive-heading">
            <h2 id="layouts-full-responsive-heading" className="text-2xl font-semibold tracking-tight">
              Responsive behavior
            </h2>
            <p className="leading-7 text-muted-foreground">This layout is designed mobile-first. Begin with one vertical stack on the narrowest screen. On wider screens, the section-link row and Sidebar take their places, and cards can move side by side only when the remaining space keeps them clear.</p>
          </section>

              <section className="space-y-5" aria-labelledby="full-card-count-heading">
                <div className="space-y-2">
                  <h2
                    id="full-card-count-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    How many cards can fit across the page?
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Mobile-first means the page begins with one content group in a vertical stack. As the screen gets wider, more groups can sit side by side, but the extra navigation layers mean fewer may fit comfortably.
                  </p>
                  <p className="leading-7 text-muted-foreground">
                    The section links and sidebar both take room from the page, so the example shows three groups at the widest size. Keep the number lower when the cards feel crowded.
                  </p>
                </div>
                <Columns base={1} sm={2} md={2} lg={3}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <DemoCard key={i} title={`Card ${i + 1}`} />
                  ))}
                </Columns>
              </section>
            </div>
            <section className="space-y-5" aria-labelledby="full-second-area-heading">
              <div className="space-y-2">
                <h2
                  id="full-second-area-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  When the page needs a second area
                </h2>
                <p className="text-muted-foreground">
                  The section links and sidebar already use navigation space, so the content uses an even main-and-secondary split when both areas are needed.
                </p>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Equal room for both areas</h3>
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

export { LayoutsFullPage }
