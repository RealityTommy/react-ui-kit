# Using the kit in an application

This guide explains how to take the reusable parts of `react-ui-kit` into a
separate React application. The demo pages in this repository show what the
layouts look like. This guide explains how to choose, copy, adapt, test, and
maintain them in an application you own.

The kit uses a shadcn-style distribution model: copy the files you need into
your application and own the copied code. It is not currently an npm package.

## Start with the page pattern

Choose the simplest pattern that supports the page's actual job.

### Simple shell

Use when the page has one primary content area and does not need persistent
secondary navigation or a sidebar.

Copy:

- `src/components/layout/page-shell.tsx`
- `src/components/layout/header/`
- `src/components/layout/main.tsx`
- `src/components/layout/footer.tsx`
- `src/components/layout/container.tsx`
- `src/lib/utils.ts`
- `src/index.css` theme and Tailwind setup
- the UI files required by `Header` and `MobileNav`

Composition:

```tsx
<PageShell>
  <SkipLink />
  <Header logo={{ href: '/', label: 'My app' }} nav={primaryNav} />
  <Main>
    <h1>Page title</h1>
    {/* Page content */}
  </Main>
  <Footer copyright={<>© 2026 Your name</>} />
</PageShell>
```

### Secondary navigation shell

Use when people move between several related sections at the same level.

Add:

- `src/components/layout/layout-provider.tsx`
- `src/components/layout/secondary-nav.tsx`
- `src/components/layout/types.ts`

```tsx
<LayoutProvider
  secondaryNav={sectionLinks}
  secondaryNavLabel="Sections"
  activeHref={pathname}
>
  <PageShell>
    <SkipLink />
    <Header logo={logo} nav={primaryNav} />
    <SecondaryNav aria-label="Sections" />
    <Main>{children}</Main>
    <Footer copyright={copyright} />
  </PageShell>
</LayoutProvider>
```

`SecondaryNav` is for navigation between pages. Do not replace ordinary page
links with the React Aria `Tabs` primitive. Use `Tabs` for switching panels
within the current page.

### Sidebar shell

Use when people need persistent access to a larger set of destinations while
reading or working in the main area.

Add:

- `src/components/layout/page-body.tsx`
- `src/components/layout/sidebar/`
- `src/components/ui/tooltip.tsx` when using the icon-only Sidebar variant

```tsx
<LayoutProvider
  sidebarNav={sidebarEntries}
  sidebarNavLabel="On this page"
  activeHref={pathname}
>
  <PageShell>
    <SkipLink />
    <Header logo={logo} nav={primaryNav} />
    <PageBody>
      <Sidebar aria-label="On this page" />
      <Main size="full">{children}</Main>
    </PageBody>
    <Footer copyright={copyright} />
  </PageShell>
</LayoutProvider>
```

`PageBody` owns the width cap for the Sidebar and Main pair. Keep Main at
`size="full"` inside it so the content does not get capped twice.

### Full documentation shell

Use only when both section navigation and page-level navigation are justified.
It combines Header, SecondaryNav, Sidebar, PageBody, Main, and Footer.

More navigation is not automatically better. If a page has only a few
choices, use the Simple or Secondary navigation pattern instead.

### Split pane

Use when a primary area and supporting context should be visible together:

- selected-item details;
- filters beside results;
- a preview beside an editor;
- related content beside an article.

```tsx
<SplitPane secondarySize="half">
  <div>{/* Main content */}</div>
  <SecondaryPane aria-label="Related content">
    {/* Supporting content */}
  </SecondaryPane>
</SplitPane>
```

Supported sizes are deliberately limited:

- `third`: Main 2/3, Secondary 1/3;
- `half`: Main 1/2, Secondary 1/2.

Main content comes first in the DOM and the panes stack on narrow screens.
When SplitPane appears inside a Sidebar layout, it divides the remaining Main
region, not the full viewport.

## Copy-in setup

### 1. Install the runtime dependencies

The current primitives use:

```bash
pnpm add @fontsource-variable/geist class-variance-authority cn lucide-react react-aria-components react react-dom shadcn tw-animate-css
```

The Vite demo also uses:

```bash
pnpm add -D @tailwindcss/vite @types/node @types/react @types/react-dom @vitejs/plugin-react eslint prettier tailwindcss typescript vite
```

Use your application's existing versions when they are compatible. The
repository's `package.json` is the current reference, not a promise that every
consumer must use the same versions forever.

### 2. Copy the CSS contract

The components expect Tailwind CSS v4 and the semantic CSS variables defined
in `src/index.css`. Copy the relevant theme setup, including:

- the Tailwind import;
- `tw-animate-css`;
- shadcn's Tailwind CSS import;
- the Geist font import if using the kit's typography;
- the semantic color variables;
- radius variables;
- dark-mode variables;
- the base body and root styles.

Do not replace application design tokens with arbitrary component-specific
hex values. Map the kit's semantic roles to your application's tokens.

### 3. Resolve imports

The source uses the `@/*` alias. Either configure that alias to point to your
application's `src/` directory or rewrite copied imports to relative or local
paths.

For Vite, configure the alias in both the TypeScript configuration and the
Vite configuration. A TypeScript alias without a matching bundler alias can
compile while failing at runtime.

### 4. Copy UI primitives as needed

Files under `src/components/ui/` are disposable shadcn output. Copy only the
primitives required by the selected recipe. If shadcn regenerates them, allow
the files to be overwritten.

Keep application-specific behavior in wrappers or hand-written components
outside `ui/`. Do not build an application dependency on comments or local
edits inside generated files.

### 5. Keep demo files out of the application

Do not copy these unless you are intentionally studying the demo:

- `src/pages/`;
- `src/App.tsx`;
- `src/main.tsx`;
- `src/App.css`;
- demo assets;
- the hash router.

The demo is a reference application, not the consumer API.

## Router integration

The layout components use ordinary links so they remain router-neutral.
Provide application paths through `NavLeaf`, `NavParent`, and `NavGroup`.

For a client-side router, use the router's link integration at your
application boundary or create a small wrapper that preserves the same
navigation data model. Do not change the layout components merely to make the
kit know about one router.

The demo's hash router exists only to navigate the showcase. It does not
provide routing behavior to copied components.

## Roles in an application project

### Developer

The developer selects the page pattern, copies its dependency bundle,
connects routing, and owns application-specific wrappers.

Before implementation, confirm:

- the selected pattern is the simplest adequate one;
- every copied import resolves;
- the CSS contract is installed;
- the active navigation source is defined;
- mobile behavior is understood;
- generated UI files can be replaced safely.

### Business analyst

The BA helps decide which regions people need and why. Answer these before
choosing a layout:

- What is the primary task on this page?
- Are the available destinations peers or a hierarchy?
- Does the user need persistent navigation while reading?
- Is supporting information necessary at the same time as the main task?
- What is the simpler layout that could work?
- Does the page still make sense when secondary regions stack below the main
  content?

The BA should be able to describe the intended page in terms of jobs and
content, without needing to name React components.

### Designer

The designer defines the visual hierarchy and content density within the
selected pattern. Confirm:

- contained or full-width chrome;
- navigation hierarchy;
- column counts at each width;
- label and action lengths;
- hover, focus, active, disabled, and external-link states;
- dark-mode behavior;
- narrow-screen stacking and reading order.

Use semantic tokens rather than creating one-off colors or spacing values for
each page.

### Tester

Test the page as a structure, not only as a screenshot.

Check:

- one meaningful `h1`;
- labeled navigation landmarks;
- one main landmark with `id="main-content"`;
- a working SkipLink;
- keyboard access to every link and control;
- visible focus states;
- dropdown open, selection, navigation, Escape, and focus return;
- mobile drawer open, close, Escape, and focus return;
- no horizontal overflow at 320px;
- correct Main-first reading order;
- split panes stacking correctly;
- active navigation state matching the current route;
- external links announcing that they open in a new window;
- light and dark theme contrast;
- no console warnings.

Prefer semantic selectors and `data-slot` hooks over selectors based on
incidental Tailwind classes.

## AI and agent construction rules

An AI agent building an application with this kit should follow this order:

1. Identify the user's primary task and required destinations.
2. Choose the simplest page pattern that supports that task.
3. Identify the required file bundle before writing imports.
4. Copy the relevant hand-written layout files and required UI primitives.
5. Install or verify the runtime and styling dependencies.
6. Connect application-owned routes and navigation data.
7. Preserve the layout's semantic landmarks and Main-first reading order.
8. Use `Columns responsive="container"` inside constrained regions such as
   split panes.
9. Keep generated UI primitives replaceable.
10. Run the tester checklist at desktop, mobile, keyboard, and dark-theme
    states.
11. Explain any deliberate deviation from the recommended pattern.

Agents should not:

- add navigation layers because they are available;
- use Tabs for page navigation;
- invent arbitrary split percentages;
- put supporting content before Main in the DOM;
- copy demo routes into a product application;
- silently modify generated primitives when a wrapper or consumer-level
  override is more durable;
- treat the largest possible column count as the recommended count;
- claim a page is accessible based only on a successful build.

## Ownership and updates

The repository has two ownership boundaries:

- `components/ui/` is generated/disposable shadcn output;
- `components/layout/` is hand-written kit behavior and documentation.

Consumers own copied files. To make future updates manageable:

- keep application-specific wrappers outside copied generated files;
- avoid modifying shared layout APIs for a one-page need;
- record which kit revision was copied;
- compare updates by component or recipe rather than copying the entire tree;
- read release notes or migration notes before replacing hand-written files;
- test the consumer recipe after each update.

The project should eventually publish stable component and recipe identifiers,
release tags, a changelog, dependency manifests, and machine-readable metadata.
Until then, Git commits are the most precise reference for what changed.

## Current limitations

This kit does not currently provide:

- an npm package;
- a shadcn registry endpoint;
- router-specific adapters;
- automated accessibility or visual regression tests;
- a formal component stability policy;
- a machine-readable component catalog.

Those are future improvements, not assumptions a consumer should make today.
