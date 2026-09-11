/**
 * NavigationSidebarPage — Header, Sidebar, and Footer workflow.
 *
 * This page shows a deeper page map beside Main and how that map
 * moves into the mobile menu when the Sidebar is hidden.
 */

import { BookOpen, Home, Palette, Rocket } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const sidebarEntries: (NavLeaf | NavGroup)[] = [
  { href: '#/workflows/navigation/sidebar', label: 'Overview', icon: Home },
  {
    label: 'Navigation areas',
    items: [
      { href: '#/workflows/navigation/sidebar/one', label: 'Section one', icon: BookOpen },
      { href: '#/workflows/navigation/sidebar/two', label: 'Section two', icon: Palette },
    ],
  },
  {
    label: 'More pages',
    items: [{ href: '#/workflows/navigation/sidebar/three', label: 'Section three', icon: Rocket }],
  },
]

function NavigationSidebarPage() {
  return (
    <LayoutProvider
      sidebarNav={sidebarEntries}
      sidebarNavLabel="Section pages"
      activeHref="#/workflows/navigation/sidebar"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '#/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <PageBody>
          <Sidebar aria-label="Section pages" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="navigation-sidebar-heading">
                <h1
                  id="navigation-sidebar-heading"
                  className="text-4xl font-semibold tracking-tight"
                >
                  Sidebar navigation: show the deeper map
                </h1>
                <p className="max-w-3xl text-xl leading-8 text-muted-foreground">
                  Use a Sidebar when people need grouped page links beside the work they are doing.
                  The Header still owns broad destinations; the Sidebar owns this section's deeper
                  map.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-sidebar-contract-heading">
                <h2
                  id="navigation-sidebar-contract-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What this workflow proves
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Sidebar groups related page links without becoming a second Header.</li>
                  <li>The active page is marked in the visible rail.</li>
                  <li>The same grouped links appear under a named section in the mobile menu.</li>
                  <li>Main remains the first content region in the reading order.</li>
                  <li>The Footer remains outside the navigation rail and supports the page.</li>
                </ul>
              </section>
              <aside
                className="max-w-3xl rounded-xl border bg-muted/40 p-6"
                aria-labelledby="navigation-sidebar-boundary-heading"
              >
                <h2 id="navigation-sidebar-boundary-heading" className="text-lg font-semibold">
                  Give the Sidebar room to earn its width
                </h2>
                <p className="mt-2 leading-7 text-muted-foreground">
                  A short list does not need a persistent rail. If the page only needs peer links,
                  use SecondaryNav. If it needs neither, use the simple workflow.
                </p>
              </aside>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { NavigationSidebarPage }
