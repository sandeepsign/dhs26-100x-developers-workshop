# ⚙️ CI/CD with AI — Cheatsheet
### The pipeline in one page · M7 keeper · the 100x Masterclass

> **The idea:** a pipeline is just a file in your repo. It says *when* to run, *what* to run, and *what gates the merge*. Add an AI reviewer as one more job. Wire it once — it guards every pull request forever.

---

## The loop, in five stages

| Stage | What runs | How you wire it |
|---|---|---|
| **Triage** | Rank & route incoming bugs | GitHub MCP: *"list open issues, rank by impact."* |
| **Fix** | Reproduce → fix test-first | *"Write a failing test for this bug, then make it pass."* |
| **Lint + test** | Quality gate on every PR | GitHub Actions: `npm run lint && npm test` |
| **AI review** | Headless review, inline comments | `uses: anthropics/claude-code-action@v1` |
| **Ship** | Merge when all checks are green | Branch protection: require CI + review to pass |

---

## GitHub Actions in 60 seconds

A workflow is a YAML file at **`.github/workflows/*.yml`**. Three keys carry it:

- **`on:`** — the trigger. `pull_request`, `push`, `schedule`, `workflow_dispatch` (manual).
- **`jobs:`** — parallel units of work, each on a fresh `runs-on:` machine.
- **`steps:`** — run in order inside a job. `uses:` calls a prebuilt action; `run:` runs a shell command.

```yaml
name: CI
on: [pull_request]          # trigger: every PR
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - run: npm ci
      - run: npm run lint
      - run: npm test
```

---

## Adding the AI reviewer

```yaml
  ai-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write     # so it can comment
      id-token: write
    steps:
      - uses: actions/checkout@v6
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: "Review this PR for bugs and security issues."
          # claude_args: "--max-turns 5 --model claude-sonnet-5"
```

- **One-time setup:** run `/install-github-app` in Claude Code (installs the app + adds the secret), or install [github.com/apps/claude](https://github.com/apps/claude) and add the secret manually.
- **The secret:** repo **Settings → Secrets and variables → Actions**, named exactly `ANTHROPIC_API_KEY`. Or `gh secret set ANTHROPIC_API_KEY`.
- **Interactive mode:** omit `prompt` and the action responds to **`@claude`** mentions in PR/issue comments (`@claude fix the failing test`).

---

## Two ways to get AI review — pick per repo

| | **Claude Code Action** (this lab) | **Managed Code Review** |
|---|---|---|
| Where it runs | Your GitHub Actions minutes | Anthropic infrastructure |
| Setup | A workflow file you own | Admin enables it once, per-repo |
| Trigger | Any event you define | On PR open / every push / `@claude review` |
| Best for | Custom automation, full control | Zero-maintenance review across many repos |

> Managed Code Review posts severity-tagged inline comments (🔴 important · 🟡 nit · 🟣 pre-existing) and never blocks merges. Tune it with a `REVIEW.md` at the repo root.

---

## Gate the merge (branch protection)

Findings don't block by default — *you* decide. To require green checks before merge: repo **Settings → Branches → Add rule** → require status checks (`quality`) to pass. To gate on AI findings, read the review's severity count in a step and fail the job if important issues > 0.

## Keep humans on the path
CI **gates**; humans **approve**. The pipeline catches what it can prove — logic errors, failing tests, security smells — and a person still clicks merge. That's the enterprise contract: machines do the tireless checking, people own the call.

---

## Quick commands

```bash
gh secret set ANTHROPIC_API_KEY     # add the review key
gh pr create --fill                 # open a PR from your branch
gh pr checks --watch                # watch CI live
gh run list / gh run view --log     # inspect a workflow run
```
In Claude Code: `/install-github-app` · `/code-review` (review a diff locally, no CI) · `@claude review` (on a PR).

*Golden rule: wire the gate once, in a file that ships with the code. After that, every pull request is linted, tested, and reviewed — whether or not anyone remembers to ask.*
