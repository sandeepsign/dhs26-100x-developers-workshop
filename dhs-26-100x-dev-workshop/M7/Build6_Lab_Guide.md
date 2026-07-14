# Build #6 — Triage, Fix, Ship: the Enterprise Loop
### M7 · Enterprise Workflows & CI/CD Automation · ~30 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The goal:** close the loop on everything you've built. Take your **TaskFlow** repo, **triage three bugs** with the agent, **fix the top one test-first**, then wire a **CI pipeline that lints, tests, and AI-reviews every pull request** — and watch it run on your own PR.
>
> Everything runs in **Claude Code** against your TaskFlow project (your M2/M3 `taskflow/` folder or a fresh clone), plus a **GitHub repo** you push to. Steps are identical on macOS and Windows — the only differences are how you open a terminal and set an environment variable, both called out inline.
>
> 📎 Compare your work to the **`examples/`** folder — a worked TaskFlow fix, test, `ci.yml`, and a sample AI-review comment ("what good looks like").

---

## Before you start — 3-minute checklist

You need four things. If any are missing, use the fallback noted.

1. **Your TaskFlow repo on GitHub.** If it's only local, create a repo and push it (below). *Fallback: clone the reference `examples/taskflow-min` — a tiny TaskFlow you can use for the whole lab.*
2. **Claude Code**, signed in (`claude` runs from your terminal).
3. **The GitHub MCP server** connected (you wired this in M5). Quick re-check: `claude mcp list` should show `github`. *Fallback: if the MCP isn't connected, use the `gh` CLI commands noted at each step.*
4. **An Anthropic API key** for the AI-review step — from [console.anthropic.com](https://console.anthropic.com). You'll paste it into a GitHub repo **secret**, never into a file.

**Open a terminal:**

- **macOS:** Terminal (⌘-Space → "Terminal") or the VS Code terminal.
- **Windows:** **Git Bash** (recommended, so the commands below match) or PowerShell. Install Git for Windows if you don't have Git Bash.

**Push TaskFlow to GitHub if it isn't there yet:**
```bash
cd taskflow
git init && git add -A && git commit -m "TaskFlow baseline"
gh repo create taskflow --private --source=. --push
```
> `gh` will prompt you to log in the first time (`gh auth login`). On Windows, `gh` works the same in Git Bash and PowerShell.

---

## Step 1 — Seed & triage three bugs (~8 min)

Real triage starts with a messy inbox. We'll create one, then let the agent bring order to it.

**1a. Seed the three bugs as GitHub issues.** Open **`seed-bugs.md`** — it has three realistic TaskFlow bugs. Create them as issues:

```bash
gh issue create --title "Closed tasks still show on the board" --body-file - <<'EOF'
Moving a task to "Done" (closed) still leaves it visible on the board.
Expected: closed tasks are hidden from the default board view.
EOF
```
Repeat for the other two in `seed-bugs.md` (empty-title task is accepted; filter-by-assignee shows everyone). *Shortcut: the file lists all three `gh issue create` commands ready to paste.*

**1b. Let the agent triage.** Start Claude Code in the repo and ask it to rank them:

```
claude
```
```
Using the GitHub MCP, list the open issues in this repo. Triage them:
for each, estimate severity (data-loss > wrong-output > cosmetic) and blast
radius (how many users hit it), then give me a ranked fix order with a one-
line reason each. Don't fix anything yet.
```

The agent reads every issue, ranks by **impact — not newest-first**, and explains its reasoning. This is the judgment layer: you can overrule it, but you're starting from a considered list instead of a pile.

> **No GitHub MCP?** Paste the three bugs from `seed-bugs.md` directly into the prompt and ask for the same ranked triage. You lose the live issue list, not the lesson.

**You keep:** a ranked, reasoned bug list. The "Closed tasks still show" bug should land on top — it's wrong output every user sees.

---

## Step 2 — Fix the top bug, test-first (~10 min)

The discipline that makes AI fixes safe: **write a failing test first**, then make it pass. The test proves the bug is real, and it stays behind as a regression guard.

**2a. Reproduce with a failing test.**
```
Reproduce the top bug with a failing test first — a test asserting that a
closed/Done task is NOT in the default board view. Run it and show me it
fails. Do not change any application code yet.
```
Watch it go **red**. A failing test is proof you understand the bug.

**2b. Make it green — smallest change.**
```
Now make the smallest change to the application code that makes that test
pass, without breaking any other test. Show me the diff and run the full
test suite.
```
The agent makes it **green** with a scoped diff (e.g. filtering `status !== 'closed'` in the board query). Keep the change small — small diffs are reviewable diffs.

**2c. Open a pull request.**
```bash
git checkout -b fix/closed-tasks-hidden
git add -A && git commit -m "Hide closed tasks from board (fixes #1)"
git push -u origin fix/closed-tasks-hidden
gh pr create --fill
```
> `--fill` uses your commit message as the PR title/body. The `fixes #1` in the commit auto-closes the issue when the PR merges.

**You keep:** a small, test-backed fix on a PR — with a test that will fail forever if the bug ever comes back.

---

## Step 3 — Generate the CI pipeline: lint + tests + AI review (~12 min)

Now make quality automatic. We'll add one workflow file that runs on **every** pull request.

**3a. Add your API key as a repo secret** (never a file):
```bash
gh secret set ANTHROPIC_API_KEY
# paste your key when prompted — it's stored encrypted in the repo, not in git
```
> UI alternative: repo **Settings → Secrets and variables → Actions → New repository secret**, name it exactly `ANTHROPIC_API_KEY`.

**3b. Generate the pipeline.** Ask the agent to write it (or copy the ready-made **`ci.yml`** from the lab-kit):
```
Create .github/workflows/ci.yml: on every pull_request, one job installs
deps and runs `npm run lint` then `npm test`. Add a second job that runs a
headless AI review using anthropics/claude-code-action@v1, authenticated
with the ANTHROPIC_API_KEY secret, prompted to review the PR diff for bugs
and security issues. Keep it minimal.
```
The result matches the reference `ci.yml` — a `quality` job (lint + test) and an `ai-review` job using the **Claude Code Action v1**.

**3c. Install the GitHub App** (one-time, gives the action permission to comment). In a Claude Code session run:
```
/install-github-app
```
and follow the prompts for your repo — or install it manually from [github.com/apps/claude](https://github.com/apps/claude) and confirm the `ANTHROPIC_API_KEY` secret is set.

**3d. Push the pipeline to your PR branch and watch it run.**
```bash
git add .github/workflows/ci.yml
git commit -m "Add CI: lint, tests, AI review"
git push
gh pr checks --watch
```
Open the PR in your browser. Within a minute or two you'll see the checks run: **lint ✓**, **tests ✓** (including your new regression test), and **Claude** posting an inline review on the diff. Comment `@claude review` on the PR if you want to trigger a review on demand.

**You keep:** a pipeline, committed with your code, that gates every future PR — lint, tests, and an AI reviewer, all automatic.

---

## Instructor demo (2 min) — Codex cloud task delegation

Your instructor will show the same "fix a bug" task **delegated to a cloud agent** (OpenAI **Codex** cloud tasks): describe the task, the agent works in its own cloud sandbox, and opens a PR back to the repo. Same shape as our loop — triage, fix, PR — but running **off your machine**, in parallel. The lesson isn't the tool; it's that the loop is portable: you can run it locally in Claude Code *or* hand it to a cloud agent, and the CI pipeline you just built reviews the result either way.

*(Watch only — no setup needed. See `AI_Review_in_CI_Prompt_Pack.md` → "Cloud delegation" for the pattern.)*

---

## Verify

- [ ] Three issues triaged into a **ranked, reasoned** fix order.
- [ ] The top bug reproduced with a **failing test**, then made **green** with a small diff.
- [ ] A **pull request** open for the fix.
- [ ] `.github/workflows/ci.yml` running **lint + tests + AI review** on the PR.
- [ ] `ANTHROPIC_API_KEY` stored as a **repo secret** (not in any file).
- [ ] You saw **@claude** post a review on your PR (or via `@claude review`).

---

## Fallbacks

- **No GitHub MCP:** paste bugs from `seed-bugs.md` into the triage prompt; use `gh issue`/`gh pr` for everything else.
- **Actions minutes / API key unavailable:** wire the `quality` job (lint + tests) only, and run the AI review **locally** instead: in Claude Code run `/code-review` on your branch — same reviewer, no CI needed.
- **The action doesn't comment:** confirm the **GitHub App is installed** on the repo, the secret is named exactly `ANTHROPIC_API_KEY`, and the workflow has `pull-requests: write` permission (see the reference `ci.yml`).
- **Short on time:** Steps 1–2 (triage + test-first fix) are the must-dos; the pipeline can be added after the session with the same prompts.

---

## What you keep

A **closed enterprise loop**: a triaged bug list, a test-first fix on a PR, and a **CI pipeline that lints, tests, and AI-reviews every pull request from now on** — with you on the approval path. Every future change to TaskFlow runs this gate automatically.

**Next — Showcase & your 100x roadmap:** demo what you built, then commit to the tool, workflow, and integration you'll take back to your team on Monday.
