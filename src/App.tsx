import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { LinkButton } from '@/components/ui/button'

function App() {
  return (
    <>
      <SkipLink />

      {/* Header — size prop controls layout width:
          - "contained" (default): Container 2xl (~1536px max-width)
          - "full": edge-to-edge with horizontal padding only
          Header and Footer default to "contained" so page chrome
          aligns consistently. Switch both to "full" for dashboards. */}
      <Header
        logo={{ href: '/', label: 'react-ui-kit' }}
        nav={[
          { href: '/docs', label: 'Docs' },
          { href: '/components', label: 'Components' },
          { href: '/about', label: 'About' },
        ]}
        actions={
          <LinkButton
            href="https://github.com/RealityTommy/react-ui-kit"
            variant="outline"
            size="sm"
          >
            GitHub
          </LinkButton>
        }
      />

      {/* Main — size prop matches Header/Footer for visual consistency:
          - "contained" (default): Container 2xl (~1536px max-width)
          - "full": edge-to-edge with horizontal padding only
          Demo uses the default so Main aligns with Header/Footer.
          Change to size="full" to preview an edge-to-edge layout.
          Long content below to exercise the sticky header's scrolled
          state; resize below 768px to see the mobile hamburger. */}
      <Main>
        <h1 className="text-3xl font-semibold mb-4">Test page</h1>
        <p className="text-muted-foreground mb-6">
          Scroll down to see the header's scrolled state. Resize the window below 768px to see the
          mobile hamburger. Scroll to bottom to see the Footer. Try size="full" on Header, Main, and
          Footer to preview an edge-to-edge layout.
        </p>
        {Array.from({ length: 40 }).map((_, i) => (
          <p key={i} className="mb-4 text-sm text-foreground">
            Paragraph {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </Main>

      {/* Footer — same size API as Header. Keep both in sync
          ("contained" together, or "full" together) so the page
          chrome shares one visual rhythm. */}
      <Footer
        copyright={<>© 2026 Tommy Truong</>}
        links={[
          { href: '/privacy', label: 'Privacy' },
          { href: '/terms', label: 'Terms' },
          { href: '/rss', label: 'RSS' },
        ]}
      />
    </>
  )
}

export default App
