# Worked acceptance criteria: React reference pages

## What this teaches

Acceptance criteria turn the user story into observable behavior. They describe what a person can see, read, reach, or do. They do not prescribe private implementation details.

## Page family and routes

- Home: `/`
- Header Only: `/layouts/header-only`
- Secondary: `/layouts/secondary`
- Sidebar: `/layouts/sidebar`
- Full: `/layouts/full`
- Navigation Header: `/navigation/header`
- Navigation Secondary: `/navigation/secondary`
- Navigation Sidebar: `/navigation/sidebar`
- Navigation Footer: `/navigation/footer`

## Criteria

### RP-AC-01 — Understand the reference app

- **Given** a person opens the home page
- **When** they read the introduction and review links
- **Then** they understand that the React app is a shareable reference experience
- **And** they can distinguish reviewing the app from reviewing the GitHub repository

### RP-AC-02 — Compare layout arrangements

- **Given** a person opens a Layouts page
- **When** they read its explanation and inspect its example
- **Then** the page identifies the visible regions and the job each region performs
- **And** the page explains when the arrangement helps and when a simpler arrangement is better

### RP-AC-03 — Compare navigation arrangements

- **Given** a person opens a Navigation page
- **When** they inspect the Header, SecondaryNav, Sidebar, or Footer example
- **Then** the page explains what that navigation area is for
- **And** the page does not imply that every navigation layer belongs on every application page

### RP-AC-04 — Preserve mobile behavior

- **Given** a person views any reference page at a narrow width
- **When** the page reflows
- **Then** content stacks into a usable reading order
- **And** navigation remains reachable through the appropriate mobile menu behavior
- **And** nothing essential is clipped or horizontally scrolled

### RP-AC-05 — Use readable columns

- **Given** a page shows repeated content cards
- **When** the available width changes
- **Then** the cards begin as one column on narrow screens
- **And** additional columns appear only when the content remains readable and usable
- **And** the largest number of columns is not presented as automatically best

### RP-AC-06 — Preserve navigation behavior

- **Given** a page contains navigation links
- **When** a person uses a pointer, keyboard, browser link action, or mobile menu
- **Then** the links navigate as real links
- **And** active state, focus, menu opening, closing, and focus return remain understandable

### RP-AC-07 — Preserve accessible structure

- **Given** a person uses a keyboard or assistive technology
- **When** they move through a reference page
- **Then** the page has one meaningful `h1`, named navigation landmarks, one Main landmark, and a working SkipLink
- **And** the reading order remains sensible when regions stack

### RP-AC-08 — Keep the repository boundary clear

- **Given** a person follows the GitHub link from the app
- **When** they inspect the repository
- **Then** they can find the reasoning, implementation guidance, reusable templates, and verification expectations
- **And** the app does not need to contain the entire delivery process

## Related template

See the reusable [acceptance criteria template](../../../templates/acceptance-criteria.md).
