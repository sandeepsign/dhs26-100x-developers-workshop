# 🔁 OpenSpec Cheatsheet
### Spec-driven development as reviewable change proposals · M2 keeper · the 100x Masterclass (accurate as of mid-2026)

> **What it is:** **OpenSpec** (Fission-AI) treats every change as a *proposal* the team aligns on **before** code is written — then implements and archives it into a living spec. "Fluid, not rigid": artifacts iterate freely, with no hard phase gates. Ideal for teams and existing codebases.

---

## Setup

```bash
npm install -g @fission-ai/openspec@latest
cd your-project
openspec init            # scaffolds openspec/ and wires your AI agent
openspec update          # refresh agent instructions / latest commands
```

---

## The three-stage loop

| Stage | Command | What happens |
|---|---|---|
| **Propose** | `/opsx:propose "<idea>"` | Creates a change: rationale, **spec deltas**, and a task list — *before* any code |
| **Review** | *(human)* | The team reads the proposal and aligns on scope. This is the point. |
| **Apply** | `/opsx:apply` | Implements the tasks from the approved change |
| **Archive** | `/opsx:archive` | Folds the completed change into the living spec + history |

Other commands: `/opsx:new`, `/opsx:continue`, `/opsx:verify`, `/opsx:bulk-archive`, `/opsx:onboard`.

---

## Folder structure

```
openspec/
├── changes/
│   └── <proposal-name>/
│       ├── proposal.md     # rationale & scope
│       ├── specs/          # requirements & scenarios (the deltas)
│       ├── design.md       # technical approach
│       └── tasks.md        # implementation checklist
└── archive/                # completed changes, timestamped
```

---

## Step-by-step: one change, end to end

Follow this the way you'd follow the SpecKit lab — it's the same idea, in OpenSpec's shape. (Runs inside Claude Code after `openspec init`.)

**Step 1 — Propose the change.** Describe what you want; OpenSpec writes the proposal, *not* the code.
```
/opsx:propose "add a due-date reminder to TaskFlow tasks"
```
→ creates `openspec/changes/due-date-reminder/` with `proposal.md`, `specs/` (the deltas), `design.md`, `tasks.md`.

**Step 2 — Read & review it (the important part).** Open `proposal.md` and `tasks.md`. This is the moment the team aligns *before* any code exists. Edit the proposal if scope is off — it's fluid, so just change it.

**Step 3 — Apply it.** Once you're happy with the proposal:
```
/opsx:apply
```
→ Claude Code implements the tasks from the approved change, showing diffs. You approve each one.

**Step 4 — Verify (optional).**
```
/opsx:verify
```
→ checks the implementation against the change's spec deltas.

**Step 5 — Archive it.** When it's done and merged:
```
/opsx:archive
```
→ folds the change into the living spec under `openspec/archive/`, keeping history.

> **Try it as a contrast to SpecKit:** run SpecKit's `constitution → … → implement` on a *new* project; run OpenSpec's `propose → apply → archive` on a *change to an existing* project. You'll feel why each shape fits its situation.

---

## SpecKit vs OpenSpec — at a glance

| | **SpecKit** | **OpenSpec** |
|---|---|---|
| **Shape** | Phase-gated pipeline | Fluid change proposals |
| **Unit** | A project/feature spec | A reviewable change (delta) |
| **Governance** | A constitution | Team review before code |
| **Sweet spot** | Greenfield, starting right | Teams evolving existing code |
| **Commands** | `/speckit.constitution … implement` | `/opsx:propose · apply · archive` |

---

## When to reach for OpenSpec

A **team** making changes to an **existing codebase**, where the valuable moment is *agreeing on the change before it's built*. Proposals are reviewable diffs to the spec; nothing forces a rigid order; the spec stays alive as changes archive into it.

*Both tools share one belief: the spec — not the prompt — is the source of truth. Pick the shape that fits how your team actually works.*
