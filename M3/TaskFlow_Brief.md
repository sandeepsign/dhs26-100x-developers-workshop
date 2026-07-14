# TaskFlow — The Anchor Project Brief
### The one app we build, harden, ship, document, and operate across M2 → M7

> This 3-line brief is deliberately vague — that's the point. In Build #1 you'll turn it into a **testable spec** with SpecKit. Keep this file; every later module builds on TaskFlow.

---

## The brief (what a stakeholder actually said)

> *"We need a lightweight task tracker for the team. People should be able to create tasks, assign them, and move them from To-Do to Done. Anyone on the team should be able to see the board and filter it."*

That's it. Three sentences. Everything below is what a good spec makes explicit.

---

## Core concept

**TaskFlow** is a team task-tracker. A team creates tasks, assigns them to members, sets due dates, and moves them across a simple board.

## Entities (what the spec will pin down)

- **Task** — `title` (required), `assignee`, `dueDate`, `status`
- **Status** — one of `To-Do` · `In Progress` · `Done`
- **Member** — `name` (assignee reference)

## Core capabilities (the "what")

1. Create a task with a title, assignee, and due date.
2. Move a task across `To-Do → In Progress → Done`.
3. See the whole board.
4. Filter the board by **assignee** or **status**.

## Explicitly out of scope (for now)

Auth/login, real-time collaboration, comments, attachments, notifications — these arrive in later modules (notifications in M4, integrations in M5) or stay out. Keeping scope tight is what makes the spec useful.

---

## How TaskFlow threads through the day

| Module | What happens to TaskFlow |
|---|---|
| **M2** (now) | Spec + plan + a thin working slice (model + API + tiny UI) via SpecKit |
| **M3** | Full web app — prototype the UI in V0/Replit, harden in Claude Code, deploy to a live URL |
| **M4** | Expo mobile companion + a notifications microservice (OpenAPI + Dockerfile) |
| **M5** | Wire GitHub/Jira via MCP; a release-notes Skill; a code-reviewer sub-agent on the repo |
| **M6** | Full doc suite — PRD, HLD, LLD, architecture diagram, user guide — generated from the code |
| **M7** | Bug triage → fix (test-first) → GitHub Actions pipeline with AI review |

**One project, compounding artifacts. Don't start over each module — build on what you have.**
