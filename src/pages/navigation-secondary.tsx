/**
 * NavigationSecondaryPage — SecondaryNav component usage guide.
 *
 * Explains how to keep a short set of peer links together inside a section.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import type { NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const sectionLinks: NavLeaf[] = [
  { href: '/navigation/secondary', label: 'Overview' },
  { href: '/navigation/header', label: 'Header' },
  { href: '/navigation/sidebar', label: 'Sidebar' },
]

function NavigationSecondaryPage() {
  return (
    <LayoutProvider secondaryNav={sectionLinks} secondaryNavLabel="Navigation components" activeHref="/navigation/secondary">
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Navigation components" />
        <Main>
          <div className="space-y-12 pb-12 pt-6">
            <section className="space-y-5" aria-labelledby="navigation-secondary-heading">
              <h1 id="navigation-secondary-heading" className="text-4xl font-semibold tracking-tight">Secondary navigation</h1>
              <p className="text-xl leading-8 text-muted-foreground">Use SecondaryNav for a short row of peer links inside the current section. On smaller screens, LayoutProvider makes the same links available in the Header drawer.</p>
            </section>
            <section className="space-y-5" aria-labelledby="navigation-secondary-what-heading">
              <h2 id="navigation-secondary-what-heading" className="text-2xl font-semibold tracking-tight">What is it for?</h2>
              <p className="leading-7 text-muted-foreground">SecondaryNav gives people nearby context without mixing section links into the application-wide Header. It renders real anchors and marks the active page with <code>aria-current="page"</code>.</p>
            </section>
            <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="navigation-secondary-use-heading">
              <div className="space-y-5"><h2 id="navigation-secondary-use-heading" className="text-2xl font-semibold tracking-tight">When to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground"><li>For a small number of sibling pages.</li><li>When the links share one clear section identity.</li><li>When a horizontal row remains easy to scan.</li></ul></div>
              <div className="space-y-5" aria-labelledby="navigation-secondary-not-heading"><h2 id="navigation-secondary-not-heading" className="text-2xl font-semibold tracking-tight">When not to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground"><li>For a deep or heavily grouped page map.</li><li>For broad application destinations.</li><li>When the row would wrap into an unclear second menu.</li></ul></div>
            </section>
            <section className="space-y-5" aria-labelledby="navigation-secondary-design-heading"><h2 id="navigation-secondary-design-heading" className="text-2xl font-semibold tracking-tight">Design/accessibility considerations</h2><div className="grid gap-6 md:grid-cols-2"><div><h3 className="text-lg font-semibold">Design</h3><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground"><li>Keep labels short and parallel.</li><li>Keep the active state visually clear.</li><li>Use the same links in the mobile drawer, not a second data set.</li></ul></div><div><h3 className="text-lg font-semibold">Accessibility</h3><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground"><li>Give the landmark a specific <code>aria-label</code>.</li><li>Use real links so keyboard and browser link actions work.</li><li>Verify the mobile replacement remains named and reachable.</li></ul></div></div></section>
          </div>
        </Main>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { NavigationSecondaryPage }
