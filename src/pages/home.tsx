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
            <p className="text-sm font-medium text-muted-foreground">A practical starting point</p>
            <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Build pages that give people a clear place to begin.
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              react-ui-kit is a personal, opinionated collection of React layout, navigation, and
              display primitives. It is designed to make the page structure understandable before
              the details become complicated.
            </p>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              The examples are not finished product screens. They are reference compositions: a
              way to study how content hierarchy, navigation, responsive behavior, and accessibility
              fit together before choosing colors, features, and application-specific components.
            </p>
          </section>

          <section className="space-y-6" aria-labelledby="principles-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight">
                The principles behind the kit
              </h2>
              <p className="text-muted-foreground">
                A layout is successful when it helps people understand where they are, what they
                can do next, and how the page is organized.
              </p>
            </div>
            <Columns base={1} md={3} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Clarity before decoration</CardTitle>
                  <CardDescription>Structure should carry meaning.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use headings, spacing, landmarks, and grouping to establish relationships before
                    relying on color, borders, or visual effects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Responsive by default</CardTitle>
                  <CardDescription>Small screens are a design constraint.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navigation and content should reflow without making people hunt for controls or
                    forcing a desktop information architecture onto a narrow viewport.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility is structural</CardTitle>
                  <CardDescription>It belongs in the composition.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Semantic landmarks, heading order, keyboard access, visible focus, and useful
                    names are part of the layout decision—not a final polish step.
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
                Start with the content and navigation your page actually needs. Then choose the
                simplest composition that supports it. Add complexity only when it improves the
                experience for a real audience.
              </p>
              <ol className="list-decimal space-y-3 pl-5 leading-7 text-muted-foreground marker:font-medium marker:text-foreground">
                <li>Identify the page's primary task and the information people need first.</li>
                <li>Choose the layout that makes that task and its surrounding context visible.</li>
                <li>Check the reading order, keyboard path, responsive behavior, and focus states.</li>
                <li>Only then add visual emphasis, secondary actions, and optional navigation.</li>
              </ol>
            </div>
            <aside className="rounded-xl border bg-muted/40 p-6" aria-labelledby="recommendation-heading">
              <h2 id="recommendation-heading" className="text-lg font-semibold">
                A useful default
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                If you are unsure, begin with a simple Header, Main, and Footer. A focused page is
                easier to navigate, easier to test, and easier to expand than a shell filled with
                navigation that no one needs yet.
              </p>
            </aside>
          </section>

          <section className="space-y-6" aria-labelledby="explore-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="explore-heading" className="text-2xl font-semibold tracking-tight">
                Explore the layout references
              </h2>
              <p className="text-muted-foreground">
                Each page explains the problem the composition solves, the tradeoffs it introduces,
                and the accessibility decisions worth carrying into a real project.
              </p>
            </div>
            <Columns base={1} sm={2} lg={3} gap="lg">
              <DemoCard
                title="Secondary navigation"
                description="For sections with a small set of sibling destinations."
                body="Study when a horizontal section nav helps—and when it becomes too much competing navigation."
              />
              <DemoCard
                title="Sidebar navigation"
                description="For deeper information architecture and documentation."
                body="Study persistent context, grouping, content width, and the mobile drawer equivalent."
              />
              <DemoCard
                title="Full composition"
                description="For complex shells that need both navigation layers."
                body="Study the cost of combining section navigation, a sidebar, and the main reading area."
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
