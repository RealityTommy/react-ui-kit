# Worked tester scenarios: React reference pages

## What this teaches

A scenario is a repeatable situation. It tells a beginner where to start, what to do, and what to observe.

### RP-TS-01 — Review the app from Home

- **Given** the reference app is open at `/`
- **When** the tester reads the introduction and activates the repository link
- **Then** the page explains the app as a shareable React reference
- **And** the GitHub link opens in a new window with an understandable accessible name

### RP-TS-02 — Compare the four layout pages

- **Given** the tester can open the four layout routes
- **When** they compare Header Only, Secondary, Sidebar, and Full
- **Then** each page shows the regions named in its explanation
- **And** each page explains why its navigation complexity is or is not justified

### RP-TS-03 — Check narrow-screen layout

- **Given** the tester opens each layout route at 320px wide
- **When** they scroll from the top through the page
- **Then** repeated content is readable in one column
- **And** no content or control requires unnecessary horizontal scrolling
- **And** stacked content follows a sensible order

### RP-TS-04 — Check layout columns as width grows

- **Given** a layout page contains example cards
- **When** the tester changes the viewport from narrow to wide
- **Then** columns appear progressively according to the page’s documented configuration
- **And** the cards remain readable rather than merely fitting edge to edge

### RP-TS-05 — Check primary navigation

- **Given** the tester opens `/navigation/header`
- **When** they use the Header links, dropdown, and mobile menu
- **Then** destinations remain reachable with pointer and keyboard input
- **And** opening, closing, Escape, focus, and current-page behavior are understandable

### RP-TS-06 — Check secondary navigation

- **Given** the tester opens `/navigation/secondary`
- **When** they inspect and activate the peer links
- **Then** the landmark is named and the active page is visible
- **And** the same destinations remain available through the mobile drawer

### RP-TS-07 — Check Sidebar navigation

- **Given** the tester opens `/navigation/sidebar`
- **When** they inspect the rail and then use the mobile menu
- **Then** grouped links and current-page state are understandable
- **And** the mobile menu provides the same destinations without leaving a second hidden interaction behind

### RP-TS-08 — Check keyboard structure

- **Given** the tester starts at the top of any reference page
- **When** they use only the keyboard
- **Then** SkipLink, navigation controls, links, and page actions can be reached
- **And** focus is visible and the reading order remains understandable

## Related template

See the reusable [tester scenarios template](../../../templates/test-scenarios.md).
