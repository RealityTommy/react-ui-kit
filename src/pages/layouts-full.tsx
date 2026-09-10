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
                <p className="text-sm font-medium text-muted-foreground">Layout reference · Combined navigation</p>
                <h1 id="full-heading" className="text-4xl font-semibold tracking-tight">
                  Use the full shell when the information architecture earns it.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  This composition combines a global Header, section-level navigation, a Sidebar,
                  and a Main area. It can support complex products, but it also creates the most
                  navigation to understand and maintain.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The goal is not to display every available navigation pattern. The goal is to
                  give people two useful kinds of context: where they are within the larger product
                  and where they are within the current section.
                </p>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="full-anatomy-heading">
                <div className="space-y-5">
                  <h2 id="full-anatomy-heading" className="text-2xl font-semibold tracking-tight">
                    What this layout is doing
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Header provides global identity and primary navigation.</li>
                    <li>SecondaryNav provides a short list of section-level destinations.</li>
                    <li>Sidebar provides deeper grouping and persistent orientation.</li>
                    <li>Main stays responsible for the task, article, or workflow at hand.</li>
                  </ul>
                </div>
                <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="full-recommendation-heading">
                  <h2 id="full-recommendation-heading" className="text-lg font-semibold">
                    Recommendation
                  </h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    Start with the simplest shell that works. Adopt this composition only when users
                    genuinely need both a section switcher and deeper persistent navigation.
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
                      <li>Give each navigation layer a distinct job and a distinct visual role.</li>
                      <li>Keep labels and active states consistent across the layers.</li>
                      <li>Protect a readable Main width; more chrome should not mean less clarity.</li>
                      <li>Test whether the combined shell still feels calm at realistic content lengths.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accessibility decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                      <li>Give every navigation landmark a unique, meaningful name.</li>
                      <li>Keep the page heading in Main and preserve a logical reading order.</li>
                      <li>Make the skip link useful by moving directly to the primary content.</li>
                      <li>Confirm the mobile drawer presents the same hierarchy without duplication or confusion.</li>
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
                    This deliberately dense shell uses a conservative grid because both navigation
                    layers consume horizontal space. In production, content density should follow
                    the task—not the desire to fill every available column.
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
