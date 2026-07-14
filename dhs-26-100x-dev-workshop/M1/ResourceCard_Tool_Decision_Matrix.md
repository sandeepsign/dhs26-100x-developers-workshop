# 🧭 Tool Decision Matrix — which AI tool for which job
### A keeper from M1 · the 100x Masterclass (accurate as of mid-2026)

> **The one rule for this workshop:** *Claude Code teaches and builds every concept.* The other tools appear where they shine. This card is for **after** the workshop — when you're choosing a tool for a real task back at work.

---

## The 30-second decision

```
Is it a throwaway prototype or a first-look UI?      → V0  or  Replit
Do you live in an editor and want AI alongside you?  → Cursor
Is it real, production work on a real repo?          → Claude Code  (or Cursor)
Delegating a big task to run in the background/CI?   → OpenAI Codex (cloud)
Want free / open-source, in the terminal?            → Gemini CLI
Teaching, specs, MCP, skills, sub-agents, docs, CI?  → Claude Code
```

---

## The six platforms at a glance

| Tool | Family | Best at | Reach for it when… | Watch-outs |
|---|---|---|---|---|
| **Claude Code** | Terminal · agentic | Full-lifecycle work on real repos: specs, MCP, skills, sub-agents, docs, CI | You want one tool that does planning → build → review → docs → pipeline, with humans on the approval path | It's a terminal tool — non-editor folks need a few minutes to acclimate |
| **Cursor** | IDE-native | Hands-on-keyboard coding with AI autocomplete + an in-editor agent | A developer wants AI *inside* a familiar VS Code, with inline diffs | Editor-centric; less suited to fully hands-off delegation |
| **OpenAI Codex** | Terminal + cloud | Delegating tasks to run **in the background / in CI**; terminal agent (Codex CLI) + cloud (Codex Web) | You want to hand off a well-scoped task and get a PR back, or add AI review in the pipeline | Cloud delegation shines only with clear, self-contained tasks |
| **Gemini CLI** | Terminal · agentic | Free / open-source terminal agent; huge context; code understanding & debugging | You want a no-cost, inspectable option, or a very large context window | Quality varies by task; newer ecosystem |
| **Replit** | Cloud · prototyping | Idea → deployed app in the browser, zero local setup; great for non-coders | You need something running and shareable *fast*, or you're on a locked-down machine | Prototype-grade by default; harden before production |
| **V0 (Vercel)** | Cloud · prototyping | Design-to-code UI (React/Next/Tailwind); now also production-focused with GitHub integration | You need a polished UI or component quickly, or a non-engineer needs to ship a UI change | UI-focused and conversational — not a full IDE agent |

---

## The four axes (print this, argue about it with your team)

| If your task is… | Lean toward |
|---|---|
| **Prototype / demo** (speed to something clickable) | V0, Replit, Cursor |
| **Production** (real repo, tests, review, maintainability) | Claude Code, Cursor |
| **Solo** (one person, fast iteration) | Cursor, Replit, V0 |
| **Team** (shared specs, review, traceability) | Claude Code (+ Codex for delegated/CI tasks) |
| **UI-first** (screens, components, layout) | V0, Replit, Cursor |
| **Backend / full-stack** (APIs, data, services, pipelines) | Claude Code, Cursor |
| **Open / cost-sensitive** | Gemini CLI (open-source, free tier) |
| **Regulated / auditable** (guardrails, approval trail) | Claude Code (sub-agents + human-in-loop), Cursor |

---

## One standard to rule them all: **MCP**

Claude Code, Cursor, Codex, and Gemini **all speak the Model Context Protocol**. That means the connectors, skills, and sub-agents you build (Modules 5–7) are largely **portable** across tools. Learn the standard once; you're not locked in.

---

*Rule of thumb: prototype where speed wins, harden where it ships, and let one agentic tool (Claude Code) carry the work across the whole lifecycle.*
