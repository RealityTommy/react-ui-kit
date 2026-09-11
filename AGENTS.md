# Operating rules

This repository is a public Application Delivery Kit. Keep the concepts portable even though the reference example is React.

## Before changing files

- Work on `main` in `/home/tommy/dev/react-ui-kit`.
- Read `docs/roadmap.md`, the relevant README, and the pattern contract before starting.
- Check `git status`, recent commits, and the current implementation.
- Do not add private, employer-specific, or proprietary material.

## Boundaries

- `src/components/ui/` is disposable shadcn output. Put maintained behavior and guidance elsewhere.
- Keep examples router-neutral unless the demo itself needs a route.
- Prefer small, reviewable changes over broad rewrites or new dependencies.
- Do not make product or architecture decisions that are not supported by the roadmap; stop and report when one is needed.

## Verification

For code, run `pnpm lint` and `pnpm build`. For documentation, run `git diff --check`, validate JSON, and check local Markdown links. Keep each coherent change in a local commit. Do not push from an autonomous run.
