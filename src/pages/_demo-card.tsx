/**
 * DemoCard — shared placeholder card for layout demo pages.
 *
 * Wraps shadcn Nova's compound Card API so every layout demo
 * exercises the real primitive (not muted placeholder divs).
 *
 * Underscore-prefixed filename marks this as demo-only
 * scaffolding — not part of the library's public surface, not
 * copied into consumer projects via the shadcn-style registry.
 *
 * Kept as its own file (rather than co-located in
 * `pages/index.tsx`) because `pages/index.tsx` is a barrel that
 * exports non-component data (routes, nav configs). Mixing
 * component exports with data exports there trips
 * `react-refresh/only-export-components`. Separate file =
 * lint-clean, cleaner separation of concerns.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Placeholder card used across the layout demo pages. Renders a
 * Nova Card with a title, optional description, and optional body
 * text (default placeholder body if omitted).
 *
 * @example
 * // Bare — just a title with the default placeholder body
 * <DemoCard title="Card 1" />
 *
 * @example
 * // With a subheading
 * <DemoCard title="Card 2" description="Optional subheading" />
 *
 * @example
 * // With custom body text
 * <DemoCard title="Card 3" body="Custom body text" />
 */
export function DemoCard({
  title,
  description,
  body,
}: {
  title: string
  description?: string
  body?: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {body ?? 'Placeholder content demonstrating the card body area.'}
        </p>
      </CardContent>
    </Card>
  )
}
