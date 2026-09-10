/**
 * HomePage — the narrative introduction to the react-ui-kit.
 *
 * The home page explains the project's purpose, design posture, and
 * accessibility baseline before inviting visitors into the layout reference
 * pages. It is intentionally an introduction, not another layout stress test.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DemoCard } from './_demo-card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Introduction page for the kit. Mounted by the demo router at `#/`.
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
        <div className="space-y-16 pb-12">
          <section className="max-w-3xl space-y-6 pt-8" aria-labelledby="intro-heading">
            <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Build pages that give people a clear place to begin.
            </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                react-ui-kit is a small collection of layout, navigation, and display pieces for
                building my own projects. The goal is simple: make it easier to understand a page
                before it gets crowded with features.
              </p>
            <p className="max-w-2xl leading-7 text-muted-foreground">
                These examples are not finished product screens. They are starting points for
                thinking about what belongs on a page, how people move through it, and what changes
                when the screen gets smaller.
            </p>
          </section>

          <section className="space-y-6" aria-labelledby="principles-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight">
                The principles behind the kit
              </h2>
              <p className="text-muted-foreground">
                A good layout helps people know where they are, what they can do next, and what
                belongs together.
              </p>
            </div>
            <Columns base={1} md={3} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Clarity before decoration</CardTitle>
                  <CardDescription>Let the page structure do some of the explaining.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use headings, spacing, and grouping to show how things relate before reaching for
                    color, borders, or visual effects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Responsive by default</CardTitle>
                  <CardDescription>Design for the smaller screen too.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navigation and content should rearrange without making people hunt for controls
                    or squeeze a desktop page into a narrow screen.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility is structural</CardTitle>
                  <CardDescription>Plan for it from the start.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Landmarks, heading order, keyboard access, visible focus, and useful names are
                    part of the page. They are not a final polish step.
                  </p>
                </CardContent>
              </Card>
            </Columns>
          </section>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)]" aria-labelledby="approach-heading">
            <div className="space-y-5">
              <h2 id="approach-heading" className="text-2xl font-semibold tracking-tight">
                How to use these examples
              </h2>
              <p className="leading-7 text-muted-foreground">
                Start with what the page needs to help people do. Then choose the simplest layout
                that supports it. Add more only when it solves a real problem.
              </p>
              <ol className="list-decimal space-y-3 pl-5 leading-7 text-muted-foreground marker:font-medium marker:text-foreground">
                <li>Decide what people need to do and what they need to see first.</li>
                <li>Choose a layout that keeps that task easy to find.</li>
                <li>Check the reading order, keyboard path, small-screen behavior, and focus states.</li>
                <li>Add extra actions and navigation only when they help.</li>
              </ol>
            </div>
            <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="recommendation-heading">
              <h2 id="recommendation-heading" className="text-lg font-semibold">
                A useful default
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                If you are unsure, start with a Header, Main, and Footer. A focused page is easier to
                use and easier to change than a page full of navigation no one needs yet.
              </p>
            </aside>
          </section>

          <section className="space-y-6" aria-labelledby="explore-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="explore-heading" className="text-2xl font-semibold tracking-tight">
                Explore the layout references
              </h2>
              <p className="text-muted-foreground">
                Each page explains what the layout is for, what to watch out for, and what I would
                keep in mind when building a real page.
              </p>
            </div>
            <Columns base={1} sm={2} lg={3} gap="lg">
              <DemoCard
                title="Secondary navigation"
                description="For a small group of related pages."
                body="See when a second row of links helps and when it starts to get in the way."
              />
              <DemoCard
                title="Sidebar navigation"
                description="For sections with more pages to move between."
                body="See how grouping, page width, and the menu work together."
              />
              <DemoCard
                title="Full layout"
                description="For pages that need both kinds of navigation."
                body="See what happens when a second row of links and a sidebar share the page."
              />
            </Columns>
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { HomePage }
