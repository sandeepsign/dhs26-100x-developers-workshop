---
name: pr-conventions
description: Our team's pull-request and commit-message conventions. Use whenever writing a commit message, a PR title or description, or a release note, so everything follows house style.
---

# PR & Commit Conventions

Apply these whenever you write a commit message, a pull-request title/description, or a release note for this project.

## Commit messages (Conventional Commits)

Format: `type(scope): short summary` (imperative, ≤ 72 chars, no trailing period).

- **type** — one of: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`
- **scope** — the area touched, e.g. `api`, `board`, `auth` (optional but preferred)
- Body (optional): what & why, wrapped at ~72 chars. Reference issues with `Refs #123` / `Closes #123`.

**Examples**
- `feat(board): filter tasks by assignee`
- `fix(api): reject task creation when title is empty`

## Pull-request titles

Same as the commit summary: `type(scope): summary`. One PR = one logical change.

## Pull-request description template

```
## What
<one-paragraph summary of the change>

## Why
<the problem / the linked issue: Closes #___>

## How to test
1. <step>
2. <step>

## Checklist
- [ ] Tests added/updated for the core path
- [ ] No secrets or tokens committed
- [ ] Follows our naming & structure conventions
```

## Release notes

Group by type under the version, newest first. User-facing voice, not commit-speak.

```
## vX.Y.Z — <date>
### Added
- <feature, in plain language>
### Fixed
- <bug fix, in plain language>
```

## House rules
- Small PRs over big ones. If it's over ~400 lines, propose splitting it.
- Never commit secrets, tokens, or `.env` files.
- Every bug fix ships with a test that would have caught it.
