# Seed bugs — TaskFlow (Build #6)
*Three realistic bugs to triage, then fix. Create them as GitHub issues, triage with the agent, and fix the top one test-first.*

These are deliberately a mix — one wrong-output bug everyone sees, one validation gap, one filtering bug. Part of the lab is deciding **which to fix first**.

---

## Bug 1 — Closed tasks still show on the board
**Severity:** wrong output · **Blast radius:** every user, every board
Moving a task to **Done** (closed) still leaves its card visible in the default board view. Expected: closed tasks are hidden from the default view (still reachable via a "show done" filter).
*Repro:* create a task → move it to Done → it's still on the board.

## Bug 2 — Empty-title tasks are accepted
**Severity:** data quality · **Blast radius:** anyone who mis-clicks
The **+ Add task** flow saves a task with a blank title. Expected: a blank/whitespace title is rejected with a clear message; the API returns `400`.
*Repro:* submit the add-task form with the title empty → a blank card appears.

## Bug 3 — Filter "by assignee" shows everyone
**Severity:** wrong output · **Blast radius:** teams using filters
Selecting an assignee in the filter still shows tasks assigned to other people. Expected: only the selected assignee's tasks remain; clearing the filter restores all.
*Repro:* filter by "Priya" → tasks assigned to others are still visible.

---

## Create all three as GitHub issues (paste-ready)

```bash
gh issue create --title "Closed tasks still show on the board" --body "Moving a task to Done still leaves it on the default board view. Expected: closed tasks are hidden from the default view."

gh issue create --title "Empty-title tasks are accepted" --body "The add-task flow saves a task with a blank title. Expected: blank/whitespace titles are rejected; API returns 400."

gh issue create --title "Filter by assignee shows everyone" --body "Selecting an assignee in the filter still shows other people's tasks. Expected: only the selected assignee's tasks remain."
```

> **Suggested triage outcome:** Bug 1 first (wrong output, every user), then Bug 3 (wrong output, filtered teams), then Bug 2 (data quality, self-inflicted). The agent should reason its way to something close to this — overrule it if you disagree, that's the judgment step.
