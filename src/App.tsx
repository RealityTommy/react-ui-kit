import { Header, SkipLink } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { LinkButton } from '@/components/ui/button'

function App() {
  return (
    <>
      <SkipLink />
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

      {/* Main content — id matches SkipLink's default href.
          Long enough to actually scroll and see the sticky
          header's scrolled state kick in. */}
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Test page</h1>
        <p className="text-muted-foreground mb-6">
          Scroll down to see the header's scrolled state. Resize the window below 768px to see the
          mobile hamburger.
        </p>
        {/* Long filler content to enable scrolling. */}
        {Array.from({ length: 40 }).map((_, i) => (
          <p key={i} className="mb-4 text-sm text-foreground">
            Paragraph {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </main>

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
