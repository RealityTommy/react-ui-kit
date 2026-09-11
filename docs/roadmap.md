# Roadmap

The kit is built outside in. Establish the concrete page and navigation workflows first, then connect those slices into larger delivery examples.

## Complete

- Repository operating rules and documentation navigation.
- Operating philosophy and application delivery model.
- Canonical pattern contract.
- Role handoff guide connecting the delivery model to the copyable artifacts.
- Human, copyable delivery artifacts for user stories, acceptance criteria, implementation briefs, tester scenarios, test cases, accessibility, and definition of done.
- Layout examples for the current Header, SecondaryNav, Sidebar, mobile menu, Footer, Columns, and split-view components.

## Complete: navigation workflow slice

Use the existing navigation components together as one outside-in workflow:

- Header and primary navigation;
- SecondaryNav for related section pages;
- Sidebar for deeper page groups;
- the mobile menu's combined hierarchy and handoff;
- Footer links and the end of the page.

The three focused pages explain when each navigation area earns its place, how the areas relate, what the mobile menu preserves, and what keyboard, focus, landmark, active-state, and narrow-screen behavior must remain true.

## Current focus: layout workflow slice

Use the existing layout examples to make column behavior understandable:

- available column counts at each supported viewport size;
- one-column behavior on narrow screens;
- how content width and card readability limit the maximum;
- how the layout changes without breaking reading order or causing overflow.

The four layout reference pages now provide the visual starting point. The next documentation pass should connect their visible guidance to a reusable layout pattern contract and the relevant delivery artifacts without turning the app pages into process documents.

## Then: split-view workflow slice

Use the existing split-view examples to make the supported split sizes understandable:

- when `third` and `half` are available;
- how Main and Secondary divide the available space;
- how columns behave inside each pane;
- how the panes stack and preserve reading order on smaller screens;
- why Sidebar and Full layouts have a narrower split choice.

## Later: connect the layers

- Revisit Search and Results as the first complete delivery proof after the three workflow slices are established and reviewed.
- Add another common workflow only after the first proof has been used and its boundaries are clear.
- Add automated browser tests when the project chooses a test runner and a stable test environment.
- Consider a registry or package only after copied-file APIs and update rules have proven stable.

Do not treat the next items as permission to add a framework, dependency, or product domain without a separate decision.
