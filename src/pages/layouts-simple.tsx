/**
 * LayoutsSimplePage — simple Header + Main + Footer layout reference.
 *
 * This page is the baseline example: one main content area, no secondary
 * navigation, and no sidebar. It also shows how to choose a sensible number
 * of columns as the screen gets wider.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { DemoCard } from './_demo-card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Simple layout reference page. Mounted by the demo router at `#/layouts/simple`.
 *
 * @example
 * { path: '/layouts/simple', component: LayoutsSimplePage }
 */
function LayoutsSimplePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-14 pb-12">
          <section className="max-w-3xl space-y-5 pt-6" aria-labelledby="simple-heading">
            <h1 id="simple-heading" className="text-4xl font-semibold tracking-tight">
              Simple layout
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              A Header, a Main area, and a Footer. There is no second row of links and no sidebar.
              The page gives the content most of the attention.
            </p>
          </section>

          <section className="space-y-5" aria-labelledby="simple-what-heading">
            <h2 id="simple-what-heading" className="text-2xl font-semibold tracking-tight">
              What is this layout?
            </h2>
            <p className="max-w-3xl leading-7 text-muted-foreground">
              This is the basic page layout in the kit. The Header handles the main navigation. Main
              holds one clear page heading and the work of the page. The Footer provides the small
              amount of supporting information that belongs at the bottom.
            </p>
          </section>

          <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="simple-use-heading">
            <div className="space-y-5">
              <h2 id="simple-use-heading" className="text-2xl font-semibold tracking-tight">
                When to use this layout
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>When the page has one main job.</li>
                <li>When the main navigation is enough to help people move around.</li>
                <li>For landing pages, simple dashboards, articles, and focused workflows.</li>
                <li>When adding more navigation would distract from the content.</li>
              </ul>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">When not to use this layout</h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                <li>When people need to move between many pages in the same section.</li>
                <li>When the page needs a visible map of a deeper set of content.</li>
                <li>When people need section links and a sidebar at the same time.</li>
                <li>When hiding important navigation in the Header would make it hard to find.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-5" aria-labelledby="simple-considerations-heading">
              <h2 id="simple-considerations-heading" className="text-2xl font-semibold tracking-tight">
                Design/accessibility considerations
              </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Design</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Give the page one clear heading and one clear next step.</li>
                  <li>Use the extra space for content, not for extra controls.</li>
                  <li>Keep the Header and Main lined up so the page feels steady.</li>
                  <li>Let the content determine the page height instead of forcing a fixed screen.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the page heading as the first meaningful heading in Main.</li>
                  <li>Keep the skip link so keyboard users can reach the content quickly.</li>
                  <li>Make sure Header navigation has a clear name and visible focus styles.</li>
                  <li>Check the reading order at small widths and with a keyboard.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-5" aria-labelledby="simple-columns-heading">
            <div className="max-w-3xl space-y-3">
              <h2 id="simple-columns-heading" className="text-2xl font-semibold tracking-tight">
                Example columns
              </h2>
              <p className="leading-7 text-muted-foreground">
                The example starts with one column, then adds columns as the screen gets wider:
                <code className="ml-1">base=1 sm=2 md=3 lg=4</code>. That gives each card room to
                stay readable instead of trying to fit four small cards on every screen.
              </p>
              <p className="leading-7 text-muted-foreground">
                There is no magic number. Look at the content in each card, the length of the labels,
                and how much space people need to scan or interact. At narrow widths, one column is
                often the kindest choice. At wider widths, add columns only when the cards still
                have enough room and the reading order remains obvious.
              </p>
            </div>
            <Columns base={1} sm={2} md={3} lg={4} gap="lg">
              {Array.from({ length: 8 }, (_, i) => (
                <DemoCard key={i} title={`Card ${i + 1}`} />
              ))}
            </Columns>
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { LayoutsSimplePage }
