/**
 * NavigationSimplePage — Header and Footer navigation workflow.
 *
 * This is the smallest navigation slice: broad primary destinations
 * at the top and supporting destinations at the bottom.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { primaryNav, footerLinks } from './index'

function NavigationSimplePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-12 pb-12 pt-6">
          <section className="space-y-5" aria-labelledby="navigation-simple-heading">
            <h1 id="navigation-simple-heading" className="text-4xl font-semibold tracking-tight">
              Simple navigation: one primary path
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-muted-foreground">
              Use the Header for the destinations people need most often. Use the Footer for
              supporting links that should remain available without competing with the page task.
            </p>
          </section>
          <section className="space-y-5" aria-labelledby="navigation-simple-contract-heading">
            <h2
              id="navigation-simple-contract-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              What this workflow proves
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Header provides one named primary navigation landmark.</li>
              <li>Primary links and parent groups remain usable on larger screens.</li>
              <li>The mobile menu preserves primary links as one focused drawer.</li>
              <li>Footer links remain available as supporting navigation.</li>
              <li>The skip link moves keyboard users directly to Main.</li>
            </ul>
          </section>
          <aside
            className="max-w-3xl rounded-xl border bg-muted/40 p-6"
            aria-labelledby="navigation-simple-boundary-heading"
          >
            <h2 id="navigation-simple-boundary-heading" className="text-lg font-semibold">
              Use a more specific workflow when needed
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Add SecondaryNav when people need peer pages inside a section. Add a Sidebar when a
              deeper page map earns a persistent place beside Main.
            </p>
          </aside>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { NavigationSimplePage }
