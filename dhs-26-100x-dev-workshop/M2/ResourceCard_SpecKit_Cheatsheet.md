# 🧩 SpecKit Cheatsheet
### Spec-driven development, phase by phase · M2 keeper · the 100x Masterclass (accurate as of mid-2026)

> **What it is:** GitHub's **Spec Kit** — a phase-gated pipeline that turns intent into a governed, traceable build. You run its slash commands *inside* Claude Code (and 30+ other agents). The spec is the contract; the phases keep you honest.

---

## Setup (once)

```bash
# install uv (fast Python package manager), then the CLI
curl -LsSf https://astral.sh/uv/install.sh | sh          # macOS / Linux / WSL
# Windows PowerShell:  irm https://astral.sh/uv/install.ps1 | iex
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

specify check                 # verify install
```

## Per project

```bash
specify init <project>        # choose Claude Code when prompted
cd <project>
claude                        # open in Claude Code; /speckit.* commands now available
```

---

## The phases (run in order)

| # | Command | What it does | Output |
|---|---|---|---|
| 1 | `/speckit.constitution` | Set the project's non-negotiable principles | `.specify/memory/constitution.md` |
| 2 | `/speckit.specify` | The **what & why** — user stories + acceptance criteria (no tech) | `specs/<id>/spec.md` |
| 3 | `/speckit.clarify` *(optional)* | Structured Q&A that removes ambiguity before planning | updates `spec.md` |
| 4 | `/speckit.plan` | The **how** — tech stack, architecture, data model | `plan.md` |
| 5 | `/speckit.analyze` *(optional)* | Cross-check spec ↔ plan ↔ tasks for consistency | report |
| 6 | `/speckit.tasks` | Ordered, dependency-aware task list; `[P]` = parallelizable | `tasks.md` |
| 7 | `/speckit.implement` | Executes the tasks in order, against the spec | code + PR |

**The five you'll always use:** constitution → specify → plan → tasks → implement. *Clarify* and *analyze* are optional quality gates.

---

## Handy extras

- `/speckit.checklist` — generate a quality checklist for the spec
- `/speckit.taskstoissues` — turn `tasks.md` into GitHub issues
- `specify self upgrade` — update the CLI

---

## When to reach for SpecKit

Starting **a new project (or feature) the right way** — solo or leading one — where you want governance (a constitution), a clean what→how separation, and an auditable trail from spec to code. Greenfield-friendly, phase-gated, thorough.

*Golden rule: keep the **what** (spec) free of tech choices; those live in the **plan**. Separating them is the whole discipline.*
