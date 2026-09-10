/**
 * HomePage — demos Header + Main + Footer with a feature card grid.
 *
 * The simplest shell — three universal chrome components wrapped
 * in PageShell so Footer pins to the viewport bottom. Uses Columns
 * to showcase a feature-grid pattern (1 → 2 → 3 → 4 cols, generous
 * gap) inside a full-width Main so you can see how the primitive
 * behaves without any competing chrome (no SecondaryNav, no
 * Sidebar). Cards use the shared DemoCard scaffold so every layout
 * demo speaks the same visual language.
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
 * Home page — Header + Main + Footer with an 8-card feature grid.
 * Mounted by the demo router at `#/`.
 *
 * @example
 * // Registered in the routes table (src/pages/index.tsx):
 * { path: '/', component: HomePage }
 */
function HomePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Home</h1>
        <p className="text-muted-foreground mb-8">
          Header + Main + Footer only. Use the Layouts menu in the header to preview the
          SecondaryNav, Sidebar, and combined layouts. Grid below uses{' '}
          <code>Columns base=1 sm=2 md=3 lg=4 gap=&quot;lg&quot;</code>.
        </p>
        <Columns base={1} sm={2} md={3} lg={4} gap="lg">
          {Array.from({ length: 8 }, (_, i) => (
            <DemoCard key={i} title={`Card ${i + 1}`} />
          ))}
        </Columns>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { HomePage }
