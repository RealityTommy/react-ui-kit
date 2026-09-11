# Worked test cases: React reference pages

## What this teaches

A test case is one check with a stable ID. It should be possible for another person to repeat it and record pass or fail.

- **RP-TC-01 — Home explains the review surfaces**
  - Given: the app is open at `/`.
  - When: the tester reads the introduction.
  - Then: the app is described as a shareable React reference, and the repository is described as the deeper playbook.

- **RP-TC-02 — Home repository link is accessible**
  - Given: the Home page is loaded.
  - When: the tester moves to “Review the GitHub repository.”
  - Then: it is a real external link, opens in a new window, and announces that behavior to assistive technology.

- **RP-TC-03 — Layout page structure matches its description**
  - Given: each route in the layout set is loaded.
  - When: the tester inspects the visible regions.
  - Then: Header Only has Header/Main/Footer; Secondary adds SecondaryNav; Sidebar adds Sidebar; Full has both SecondaryNav and Sidebar.

- **RP-TC-04 — Narrow layout has no overflow**
  - Given: `/layouts/header-only`, `/layouts/secondary`, `/layouts/sidebar`, and `/layouts/full` are loaded at 320px.
  - When: the tester checks the document width and scrolls through the page.
  - Then: no essential content is clipped and `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.

- **RP-TC-05 — Cards begin as one column**
  - Given: a layout page is loaded at its narrow width.
  - When: the tester inspects the example card region.
  - Then: the cards form one vertical sequence before wider breakpoint columns are introduced.

- **RP-TC-06 — Navigation uses real links**
  - Given: a navigation guide is loaded.
  - When: the tester inspects or activates a navigation destination.
  - Then: it is an anchor with a route, preserves normal browser link actions, and exposes current-page state where applicable.

- **RP-TC-07 — SkipLink reaches Main**
  - Given: a reference page is loaded.
  - When: the tester presses Tab from the document start and activates SkipLink.
  - Then: focus moves to `#main-content` and the Main landmark remains identifiable.

- **RP-TC-08 — Mobile navigation preserves destinations**
  - Given: a Secondary or Sidebar navigation page is loaded at a narrow width.
  - When: the tester opens the Header mobile menu.
  - Then: the destinations hidden from the desktop slot are present in the named drawer section and can be reached by keyboard.

- **RP-TC-09 — Source and docs agree**
  - Given: the worked artifacts and source pages are available.
  - When: the tester compares routes, component composition, and responsive claims.
  - Then: the documented behavior matches the current source and no paused Search and Results route is advertised as active.

## Related template

See the reusable [test cases template](../../../templates/test-cases.md).
