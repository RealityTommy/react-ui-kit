/**
 * lib/utils.ts — small shared utilities re-exported for consumer use.
 *
 * `cn` is the class-name merger used by every component's className
 * output (Tailwind-conflict-aware, powered by tailwind-merge under
 * the hood). Re-exported from the `"cn"` path alias so components
 * can `import { cn } from "cn"` without knowing about the shim.
 *
 * Any future project-wide helper (formatters, slugifiers, etc.) can
 * land here and get the same one-import public surface.
 */

/**
 * Merge class names with Tailwind-conflict resolution.
 *
 * Later classes win over earlier ones for conflicting utilities
 * (e.g., `cn("p-2", "p-4")` → `"p-4"`). Handles conditional
 * className props via clsx-style truthy filtering.
 *
 * @example
 * <div className={cn("p-2 text-sm", isActive && "bg-muted", className)} />
 */
export { cn } from "cn"
