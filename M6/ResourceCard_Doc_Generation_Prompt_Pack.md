# 📝 Doc-Generation Prompt Pack
### Copy-paste prompts for a full doc suite · M6 keeper · the 100x Masterclass

> One rule underneath all of these: **generate from the code, not from imagination.** Add *"only state what you can see in the repo; cite the file for each claim"* whenever a doc feels vague.

---

## PRD — by interview
```
Interview me to write a 1-page PRD for <app>. Ask 4–5 questions, one at a time
(problem, users, goals, scope, success metrics). Then combine my answers with
what you see in this repo into docs/PRD.md — one page, testable acceptance
criteria, explicit non-goals.
```
**Retrofit (no interview):** `Reverse-engineer a 1-page PRD from this codebase into docs/PRD.md.`

## HLD — architecture narrative + diagram
```
Read this repo and write docs/HLD.md: components & responsibilities, key data
flows, and main design decisions with trade-offs. Include a Mermaid
"flowchart TB" C4-container diagram of the real system, and save its source to
docs/architecture.mmd.
```

## Architecture diagram — Mermaid & C4
```
Generate a Mermaid C4 container diagram from this codebase (save to
architecture.mmd), AND a formal C4 version in C4-PlantUML (save to HLD-C4.puml).
```
- **Render Mermaid:** paste into a **Claude.ai Mermaid artifact**, GitHub Markdown, or the VS Code Mermaid preview.
- **Render C4/PlantUML:** plantuml.com/plantuml, the PlantUML VS Code extension, or Structurizr.
- **Model:** C4 = **Context → Container → Component → Code**; start at Container.

## LLD — one service in detail
```
Write docs/LLD.md — a low-level design for the <service> only: modules, the API
contract per endpoint (request/response, status codes, validation), control
flow, error handling, and core-path tests. Base it strictly on the code.
```

## User guide — for real users
```
Write docs/user-guide.md — a plain-language guide (no jargon): how to open the
app, do each core task, and a short FAQ. Friendly, for non-technical users.
```

## Docs-from-code extras
- **README:** `Write a README from this repo: what it is, how to run it, the API, and how to contribute.`
- **API docs / OpenAPI:** `Generate an openapi.yaml matching these endpoints.`
- **Changelog / release notes:** `Summarize the last N commits/PRs into release notes following our pr-conventions Skill.`
- **Onboarding:** `Write an onboarding guide for a new engineer: how the repo is organized and where to start.`

## Keep them alive (→ M7)
```
Add a CI job that regenerates docs/ from the code on every merge to main and
opens a PR if anything changed.
```

*Golden rule: docs generated from code are only worth it if you **regenerate on change**. Wire it into CI and documentation stops being the thing you skip.*
