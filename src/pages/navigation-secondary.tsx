/**
 * NavigationSecondaryPage — Header, SecondaryNav, and Footer workflow.
 *
 * This page shows a short peer navigation row inside a section and
 * how the same links move into the mobile menu below the breakpoint.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import type { NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const sectionNav: NavLeaf[] = [
  { href: '/workflows/navigation/secondary', label: 'Overview' },
  { href: '/workflows/navigation/secondary/one', label: 'Section one' },
  { href: '/workflows/navigation/secondary/two', label: 'Section two' },
]

function NavigationSecondaryPage() {
  return (
    <LayoutProvider
      secondaryNav={sectionNav}
      secondaryNavLabel="Section navigation"
      activeHref="/workflows/navigation/secondary"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Section navigation" />
        <Main>
          <div className="space-y-12 pb-12 pt-6">
            <section className="space-y-5" aria-labelledby="navigation-secondary-heading">
              <h1
                id="navigation-secondary-heading"
                className="text-4xl font-semibold tracking-tight"
              >
                Secondary navigation: keep peer pages together
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-muted-foreground">
                Use a short row of real links when people move between related pages inside the same
                section.
              </p>
            </section>
            <section className="space-y-5" aria-labelledby="navigation-secondary-contract-heading">
              <h2
                id="navigation-secondary-contract-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                What this workflow proves
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>Header remains responsible for the broadest destinations.</li>
                <li>SecondaryNav contains only peer pages in the current section.</li>
                <li>The active page is marked on the real anchor.</li>
                <li>The same links appear under a named section in the mobile menu.</li>
                <li>The row disappears on narrow screens without removing the destinations.</li>
              </ul>
            </section>
            <aside
              className="max-w-3xl rounded-xl border bg-muted/40 p-6"
              aria-labelledby="navigation-secondary-boundary-heading"
            >
              <h2 id="navigation-secondary-boundary-heading" className="text-lg font-semibold">
                Do not turn this into a second primary menu
              </h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Keep the list short and made of peer pages. Use a Sidebar when people need grouped,
                deeper navigation instead.
              </p>
            </aside>
          </div>
        </Main>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { NavigationSecondaryPage }
