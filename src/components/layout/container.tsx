/**
 * Container — horizontal centering + max-width primitive.
 *
 * Wrap page content in a Container to get consistent side padding
 * and a bounded reading width. Use `size` to pick the max-width
 * (default: `lg` at 1024px). Use `full` for edge-to-edge sections.
 *
 * Responsive padding is fixed at 16 / 24 / 32 px so containers
 * stay visually aligned across every page in the kit.
 */

import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

// ---------------------------------------------------------------
// Variants
// ---------------------------------------------------------------

/**
 * Container variant classes — max-width per `size` value.
 *
 * Exported so wrapper components can reuse the exact class output
 * without re-implementing the size mapping. Header, Footer, Main,
 * PageBody, and SecondaryNav all delegate width to Container via
 * this function.
 *
 * @example
 * // Compose Container's width behavior into a custom wrapper:
 * <div className={cn(containerVariants({ size: "xl" }), "border")}>
 *   …
 * </div>
 */
const containerVariants = cva(
  // Base: fluid width, centered, with responsive horizontal padding.
  'mx-auto w-full px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        sm: 'max-w-screen-sm', // 640px  — narrow reading content
        md: 'max-w-screen-md', // 768px
        lg: 'max-w-screen-lg', // 1024px — most pages
        xl: 'max-w-screen-xl', // 1280px — wide dashboards, headers
        '2xl': 'max-w-screen-2xl', // 1536px
        full: 'max-w-none', // edge-to-edge; use for hero sections
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
)

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------

/**
 * Layout primitive that centers its children and caps their width.
 *
 * @example
 * <Container size="xl">
 *   <h1>Page title</h1>
 * </Container>
 */
function Container({
  className,
  size = 'lg',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof containerVariants>) {
  return (
    <div
      // `data-slot` lets consumers target this element from CSS
      // without depending on class names (which can change).
      data-slot="container"
      data-size={size}
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  )
}

export { Container, containerVariants }
