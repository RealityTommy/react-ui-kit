/**
 * HomePage — the ongoing introduction to react-ui-kit.
 *
 * This page is for the project itself. As the kit grows, use it to explain
 * what has been added, why it exists, and where to start.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Project introduction page. Mounted by the demo router at `#/`.
 *
 * @example
 * { path: '/', component: HomePage }
 */
function HomePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '#/', label: 'react-ui-kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-16 pb-12">
          <section className="max-w-3xl space-y-6 pt-8" aria-labelledby="intro-heading">
            <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A place to start when a page needs to make sense.
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              react-ui-kit is a personal collection of layout, navigation, and display pieces for
              building my own projects. I am using it to work through the page decisions that are
              easy to skip when the focus is on getting features out the door.
            </p>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              This page will grow with the project. As more pieces are added, this is where I will
              explain what they are for, what I learned while building them, and where they fit.
            </p>
          </section>

          <section className="space-y-6" aria-labelledby="principles-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight">
                What I am trying to keep consistent
              </h2>
              <p className="text-muted-foreground">
                The goal is not to build every possible component. It is to make the common page
                decisions easier to see and easier to reuse.
              </p>
            </div>
            <Columns base={1} md={3} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Clear pages</CardTitle>
                  <CardDescription>People should know where to begin.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Headings, spacing, and grouping should explain the page before decoration has to
                    do the work.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Useful on smaller screens</CardTitle>
                  <CardDescription>The layout should change without falling apart.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navigation and content need a sensible order when there is less room. Desktop
                    should not be the only version that feels finished.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessible by design</CardTitle>
                  <CardDescription>The structure should work for more people.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Landmarks, headings, keyboard access, focus, and useful names belong in the page
                    from the beginning.
                  </p>
                </CardContent>
              </Card>
            </Columns>
          </section>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)]" aria-labelledby="start-heading">
            <div className="space-y-5">
              <h2 id="start-heading" className="text-2xl font-semibold tracking-tight">
                Where to start
              </h2>
              <p className="leading-7 text-muted-foreground">
                Start with the Simple layout. It has a Header, Main, and Footer, with no extra
                navigation competing for attention. From there, compare what changes when a page
                needs a second row of links, a sidebar, or both.
              </p>
              <ol className="list-decimal space-y-3 pl-5 leading-7 text-muted-foreground marker:font-medium marker:text-foreground">
                <li>Open Simple and look at how much room the content gets.</li>
                <li>Compare the column choices at each screen size.</li>
                <li>Move to Secondary or Sidebar only when the page needs more help getting around.</li>
                <li>Use Full last. It combines the other navigation patterns and carries the most cost.</li>
              </ol>
            </div>
            <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="default-heading">
              <h2 id="default-heading" className="text-lg font-semibold">
                My default
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Use the least amount of layout that helps people complete the page. More navigation
                is not automatically more helpful.
              </p>
            </aside>
          </section>

          <section className="space-y-6" aria-labelledby="next-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="next-heading" className="text-2xl font-semibold tracking-tight">
                What is here now
              </h2>
              <p className="text-muted-foreground">
                The Layouts menu is the first part of the project. More primitives and examples can
                be added here as they become useful.
              </p>
            </div>
            <Columns base={1} sm={2} lg={4} gap="lg">
              <a href="#/layouts/simple" className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <h3 className="font-semibold">Simple</h3>
                <p className="mt-2 text-sm text-muted-foreground">Header, Main, and Footer.</p>
              </a>
              <a href="#/layouts/secondary" className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <h3 className="font-semibold">Secondary</h3>
                <p className="mt-2 text-sm text-muted-foreground">A small group of related pages.</p>
              </a>
              <a href="#/layouts/sidebar" className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <h3 className="font-semibold">Sidebar</h3>
                <p className="mt-2 text-sm text-muted-foreground">A larger section with a map.</p>
              </a>
              <a href="#/layouts/full" className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <h3 className="font-semibold">Full</h3>
                <p className="mt-2 text-sm text-muted-foreground">Both navigation layers together.</p>
              </a>
            </Columns>
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { HomePage }
