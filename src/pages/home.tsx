/**
 * HomePage — demos Header + Main + Footer only.
 *
 * The simplest shell — just the three universal chrome components.
 * Use this as the reference point when comparing what SecondaryNav
 * and Sidebar add on the other demo pages.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { primaryNav } from './index'

function HomePage() {
  return (
    <>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Home</h1>
        <p className="text-muted-foreground">
          Header + Main + Footer only. Use the Layouts menu in the header to preview the
          SecondaryNav, Sidebar, and combined layouts.
        </p>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} />
    </>
  )
}

export { HomePage }
