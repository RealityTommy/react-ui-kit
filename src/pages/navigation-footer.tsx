/**
 * NavigationFooterPage — Footer component usage guide.
 *
 * Explains how Footer provides quiet supporting navigation at the end of a page.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { primaryNav } from './index'

const exampleFooterLinks = [
  { href: '/navigation/footer', label: 'Footer' },
  { href: '/navigation/header', label: 'Header' },
]

function NavigationFooterPage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-12 pb-12 pt-6">
          <section className="space-y-5" aria-labelledby="navigation-footer-heading">
            <h1 id="navigation-footer-heading" className="text-4xl font-semibold tracking-tight">
              Footer navigation
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              Use Footer for supporting information and links that should remain available without
              competing with the page's main task.
            </p>
          </section>
          <section className="space-y-5" aria-labelledby="navigation-footer-what-heading">
            <h2
              id="navigation-footer-what-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              What is it for?
            </h2>
            <p className="leading-7 text-muted-foreground">
              Footer creates the page's ending landmark. Its optional link list is useful for
              secondary destinations such as privacy, terms, contact, or project information.
            </p>
          </section>
          <section
            className="grid gap-10 lg:grid-cols-2"
            aria-labelledby="navigation-footer-use-heading"
          >
            <div className="space-y-5">
              <h2
                id="navigation-footer-use-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                When to use it
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>For supporting links shared across pages.</li>
                <li>For copyright or ownership information.</li>
                <li>When a destination does not need primary or section-level emphasis.</li>
              </ul>
            </div>
            <div className="space-y-5" aria-labelledby="navigation-footer-not-heading">
              <h2
                id="navigation-footer-not-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                When not to use it
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>For the main path people need to complete a task.</li>
                <li>For a large grouped navigation system.</li>
                <li>As a substitute for a clearly named section menu.</li>
              </ul>
            </div>
          </section>
          <section className="space-y-5" aria-labelledby="navigation-footer-design-heading">
            <h2
              id="navigation-footer-design-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Design/accessibility considerations
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Design</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep supporting links quiet and easy to scan.</li>
                  <li>Allow the row to wrap naturally on narrow screens.</li>
                  <li>Keep the Footer aligned with Header and Main.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the semantic footer landmark.</li>
                  <li>Use the named Footer navigation landmark when links exist.</li>
                  <li>Check focus visibility and the stacked mobile layout.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-5" aria-labelledby="navigation-footer-responsive-heading">
            <h2
              id="navigation-footer-responsive-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Responsive behavior
            </h2>
            <p className="leading-7 text-muted-foreground">
              On wider screens, the Footer content can sit in one row. On narrow screens, it wraps
              or stacks naturally so links remain easy to reach.
            </p>
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={exampleFooterLinks} />
    </PageShell>
  )
}

export { NavigationFooterPage }
