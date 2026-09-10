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
 *
 * Usage:
 *   <DemoCard title="Card 1" />
 *   <DemoCard title="Card 2" description="Optional subheading" />
 *   <DemoCard title="Card 3" body="Custom body text" />
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
