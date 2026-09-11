/**
 * NavigationSidebarPage — Sidebar component usage guide.
 *
 * Explains how grouped section links support deeper navigation beside Main.
 */

import { BookOpen, Home, Palette } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const sidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/navigation/sidebar', label: 'Overview', icon: Home },
  { label: 'Components', items: [{ href: '/navigation/header', label: 'Header', icon: BookOpen }, { href: '/navigation/secondary', label: 'Secondary', icon: Palette }] },
]

function NavigationSidebarPage() {
  return (
    <LayoutProvider sidebarNav={sidebarLinks} sidebarNavLabel="Navigation components" activeHref="/navigation/sidebar">
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <PageBody>
          <Sidebar aria-label="Navigation components" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="navigation-sidebar-heading"><h1 id="navigation-sidebar-heading" className="text-4xl font-semibold tracking-tight">Sidebar navigation</h1><p className="text-xl leading-8 text-muted-foreground">Use Sidebar when people need a grouped map of deeper pages beside Main. On smaller screens, LayoutProvider moves that map into the Header drawer.</p></section>
              <section className="space-y-5" aria-labelledby="navigation-sidebar-what-heading"><h2 id="navigation-sidebar-what-heading" className="text-2xl font-semibold tracking-tight">What is it for?</h2><p className="leading-7 text-muted-foreground">Sidebar gives a section enough space for groups, icons, and an active page state without making the Header carry every link.</p></section>
              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="navigation-sidebar-use-heading"><div className="space-y-5"><h2 id="navigation-sidebar-use-heading" className="text-2xl font-semibold tracking-tight">When to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground"><li>For a deeper set of related pages.</li><li>When grouped labels improve scanning.</li><li>When the page has enough width for a persistent rail.</li></ul></div><div className="space-y-5" aria-labelledby="navigation-sidebar-not-heading"><h2 id="navigation-sidebar-not-heading" className="text-2xl font-semibold tracking-tight">When not to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground"><li>For only two or three peer links.</li><li>For broad destinations shared by the whole application.</li><li>When the rail would take more space than the content earns.</li></ul></div></section>
              <section className="space-y-5" aria-labelledby="navigation-sidebar-design-heading"><h2 id="navigation-sidebar-design-heading" className="text-2xl font-semibold tracking-tight">Design/accessibility considerations</h2><div className="grid gap-6 md:grid-cols-2"><div><h3 className="text-lg font-semibold">Design</h3><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground"><li>Keep groups meaningful and short.</li><li>Use icons only when they help recognition.</li><li>Keep Main first in the DOM reading order.</li></ul></div><div><h3 className="text-lg font-semibold">Accessibility</h3><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground"><li>Give the rail a specific landmark name.</li><li>Mark the current page on its link.</li><li>Test the mobile drawer and keyboard focus order.</li></ul></div></div></section>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { NavigationSidebarPage }
