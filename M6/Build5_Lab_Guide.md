# Build #5 — The Full Documentation Suite
### M6 · Documentation & Artifact Generation · ~25 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The goal:** point Claude Code at your TaskFlow repos and generate a **complete doc suite from the real code** — a 1-page **PRD**, an **HLD with an architecture diagram**, an **LLD** for the notifications service, and a **non-technical user guide** — then **peer-review** a neighbour's PRD against a rubric.
>
> Everything runs in **Claude Code** against a local TaskFlow project (your M2 `taskflow/` folder or a clone). Steps are identical on macOS and Windows. Work in **pairs**.
>
> 📎 Compare your output to the **`examples/`** folder — a full reference suite for TaskFlow ("what good looks like").

---

## Setup (1 min)
```bash
cd taskflow      # your project from earlier modules
claude
```
Make a `docs/` folder to collect outputs: ask Claude *"create a docs/ folder."*

---

## Step 1 — PRD by interview (~6 min)
Don't fill a blank template — let the agent interview you.
```
Interview me to write a 1-page PRD for TaskFlow. Ask me 4–5 questions one at a
time (problem, users, goals, scope, success metrics). Then, using my answers
AND what you can see in this repo, write docs/PRD.md — one page, with testable
acceptance criteria and explicit non-goals.
```
Answer its questions. Read the result against `examples/PRD.md`.

> **Retrofit shortcut:** if you're short on time, skip the interview: *"Reverse-engineer a 1-page PRD from this codebase into docs/PRD.md."*

---

## Step 2 — HLD + architecture diagram (~7 min)
```
Read this repo and write docs/HLD.md: an architecture narrative — components,
responsibilities, key data flows, and the main design decisions with trade-offs.
Include a Mermaid "flowchart TB" C4-container diagram of the real system, and
also save the diagram source to docs/architecture.mmd.
```
**Render the diagram live:** copy the Mermaid block into a **Claude.ai Mermaid artifact** (or paste `architecture.mmd` into GitHub / the VS Code Mermaid preview) — it draws instantly. Change the code, and it re-renders. Compare to `examples/HLD.md` + `examples/architecture.mmd`.

> **C4 / PlantUML (both):** for a formal C4 diagram, also ask *"produce a C4 container diagram in C4-PlantUML at docs/HLD-C4.puml"* and render it at plantuml.com or the PlantUML VS Code extension. See `examples/HLD-C4.puml`.

---

## Step 3 — LLD for one service (~5 min)
```
Write docs/LLD.md — a low-level design for the notifications microservice only:
its modules, the API contract for each endpoint (request/response, status codes,
validation), control flow, error handling, and the core-path tests. Base it on
the actual code, not assumptions.
```
Compare to `examples/LLD.md`.

---

## Step 4 — Non-technical user guide (~4 min)
```
Write docs/user-guide.md — a plain-language guide for end users (no jargon):
how to open TaskFlow, create/move/filter tasks, and a short FAQ. Friendly tone.
```
Compare to `examples/user-guide.md`.

---

## Step 5 — Peer review (~3 min)
Swap your **PRD** with a neighbour. Score theirs against **`PRD_Quality_Rubric.md`** (1–5 on each line): problem clear? scope bounded? success measurable? grounded in the real app? one page, no fluff? Give one concrete suggestion. **This is the point:** the agent drafts fast; *your judgment* is the value.

---

## Verify
- [ ] `docs/PRD.md` — one page, testable ACs, explicit non-goals.
- [ ] `docs/HLD.md` + a **rendered** Mermaid diagram (+ optional C4-PlantUML).
- [ ] `docs/LLD.md` — the notifications service, contract-level.
- [ ] `docs/user-guide.md` — plain language, no jargon.
- [ ] You scored a neighbour's PRD against the rubric.

## "Keep docs alive" (survey → M7)
Because these are generated from code, they can be **regenerated in CI** on every merge — a job that runs the same prompts and commits updated docs. That's where M7 goes next: docs (and reviews, and tests) that stay current automatically.

---

## Fallbacks
- **Diagram won't render in an artifact:** paste `architecture.mmd` into GitHub (it renders Mermaid in Markdown) or the VS Code Mermaid extension.
- **Docs feel generic/imagined:** tell Claude *"only state what you can see in the code; cite the file for each claim."* Grounding is the whole game.
- **Short on time:** PRD + HLD-with-diagram are the must-dos; LLD and user guide can be generated after the session with the same prompts (they're in the prompt pack).

---

## What you keep
A `docs/` folder with a **PRD, HLD, architecture diagram, LLD, and user guide** — every one grounded in your real TaskFlow code, and regenerable whenever the code changes.

**Next — M7:** the enterprise workflow — bug triage → fix (test-first) → a CI pipeline with AI review — closing the loop on everything you've built.
