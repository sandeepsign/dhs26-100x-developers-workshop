# Build #1 — TaskFlow via SpecKit
### M2 · AI Development Methodologies & Frameworks · ~25 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The point:** take a vague 3-line brief and let a **methodology** — not a lucky prompt — carry it to a working slice. You'll run **SpecKit's** phase pipeline inside Claude Code, produce a **spec + plan + tasks**, and let Claude Code **implement a thin vertical slice** of TaskFlow (data model + a small API + a tiny UI).
>
> **No coding required** — you drive the phases; the agent writes the code. Every step is given for **macOS** and **Windows**. Work in **pairs**.

---

## Before you start

- Claude Code installed and logged in (from the pre-flight guide).
- The **TaskFlow brief** open next to you (`TaskFlow_Brief.md`).
- ~10 GB free disk, internet on.

---

## Step 1 — Install SpecKit

SpecKit's CLI is `specify`. It installs with **uv** (a fast Python package manager).

**macOS / Linux / Windows (WSL):**
```bash
# 1. install uv if you don't have it
curl -LsSf https://astral.sh/uv/install.sh | sh
# 2. install the SpecKit CLI
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

**Windows (PowerShell):**
```powershell
# 1. install uv
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
# 2. install the SpecKit CLI
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Verify:
```bash
specify check
```

> No `uv`? A TA can help, or use the fallback in §7.

---

## Step 2 — Initialize the project

**All platforms:**
```bash
specify init taskflow
cd taskflow
```
When prompted for your AI agent, **choose Claude Code**. SpecKit drops its templates and slash commands into the project.

Then open the folder in Claude Code:
```bash
claude
```

> SpecKit's slash commands (`/speckit.*`) now work inside Claude Code. Depending on version they may appear as `/speckit.specify` or `/specify` — either is fine.

---

## Step 3 — Run the phases (this is the whole point)

Run these **in order** inside Claude Code, reading and approving each artifact before moving on. Paste the prompts as shown.

### 3.1 Constitution — the rules every session obeys
```
/speckit.constitution
Principles for TaskFlow: keep it simple and single-file where possible;
every feature must have acceptance criteria; prefer readable code over clever
code; no feature ships without a test for its core path.
```
→ writes `.specify/memory/constitution.md`. **Skim it.**

### 3.2 Specify — the what & why (no tech yet)
```
/speckit.specify
Build TaskFlow, a team task-tracker. A member can create a task with a title
(required), an assignee, and a due date. A task has a status of To-Do, In
Progress, or Done and can move between them. Anyone can view the board and
filter it by assignee or by status.
```
→ writes `specs/001-taskflow/spec.md` with user stories + acceptance criteria. **Read the acceptance criteria** — this is your contract.

### 3.3 (Optional) Clarify — de-risk ambiguity
```
/speckit.clarify
```
Answer its questions (e.g., "can a task have no assignee?"). Great for tightening the spec.

### 3.4 Plan — the how (tech & architecture)
```
/speckit.plan
Use a single-page app: vanilla HTML/CSS/JS for the UI, a small Node/Express
API, and in-memory storage (a JSON array) for now — no database. Keep it to a
few files so it's easy to read.
```
→ writes `plan.md` plus data-model/API notes.

### 3.5 Tasks — ordered, traceable work
```
/speckit.tasks
```
→ writes `tasks.md`: an ordered checklist, `[P]` marking tasks that can run in parallel, each tied back to the spec.

### 3.6 Implement — build the slice
```
/speckit.implement
```
Claude Code works the task list in order, showing diffs. **Approve the changes.** Stop it once you have the thin slice working (create + list tasks, visible on a simple page) — you don't need the whole app today.

---

## Step 4 — See your slice run

Ask Claude Code:
```
How do I run this locally? Give me the exact command, then I'll open it.
```
Follow its instructions (usually `npm install` then `npm start`), open the URL, and **create a task**. You just went from a 3-line brief to running software — through a spec, not a guess.

---

## Step 5 — Verify against the spec

Open `specs/001-taskflow/spec.md` and check the acceptance criteria against what you built:

- [ ] I can create a task with a title, assignee, and due date.
- [ ] A task has a status of To-Do / In Progress / Done.
- [ ] The board shows tasks; I can filter by assignee or status *(or it's a listed, traceable task for later)*.
- [ ] Every task in `tasks.md` traces back to a line in the spec.

**This traceability — spec → task → code — is the superpower.** It's what makes the build reviewable and repeatable.

---

## Step 6 — Cross-team debrief (instructor-led)

Half the room ran SpecKit; the instructor will demo **OpenSpec** (the `/opsx:propose → apply → archive` change loop) on the same brief. Compare:

- **Clarity** — did the spec remove ambiguity before code?
- **Traceability** — can you trace each task to a spec line?
- **Team fit** — which suits a team evolving an existing codebase vs. a solo greenfield start?
- **Speed to slice** — how fast from brief to working software?

---

## Step 7 — Fallbacks

- **No `uv` / install blocked:** skip the CLI. In Claude Code, paste the spec prompt from §3.2 directly and ask: *"Act as SpecKit: produce a constitution, a spec with acceptance criteria, a plan, and an ordered task list as markdown files, then implement a thin slice."* You get the same methodology, minus the tooling.
- **Slice won't run:** ask Claude Code *"the app won't start — read the error and fix it,"* and paste the terminal output. That reproduce→diagnose→fix loop is exactly M7.
- **Behind on time:** stop after `/speckit.tasks`. A spec + plan + traceable tasks is a complete Build #1 — M3 picks up the implementation.

---

## What you keep

A `taskflow/` project with a **constitution, a spec, a plan, a task list, and a running slice** — all traceable to three sentences. That's the seed M3 turns into a real, deployed web app.

**Next — M3:** prototype the TaskFlow UI in V0/Replit, harden it in Claude Code, and deploy to a live URL.
