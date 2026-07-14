# 🧩 MCP · Skills · Sub-Agents — Cheatsheet
### The extensibility layer, in one card · M5 keeper · the 100x Masterclass (accurate as of mid-2026)

> Three ways to extend the agent: **connect** (MCP), **encode** (Skills), **delegate** (Sub-Agents). All three are triggered by *description/intent* — you mostly just ask.

---

## 🔌 MCP — connect the agent to your tools

Add servers from the terminal; manage/auth with `/mcp` inside Claude Code.

```bash
# remote HTTP server (OAuth via /mcp, or a token header)
claude mcp add --transport http <name> <url>

# GitHub (fine-grained PAT scoped to your repos)
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ \
  --header "Authorization: Bearer $GITHUB_PAT"

# Jira / Confluence (Atlassian official, OAuth)
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp

# local stdio server (e.g. community Jenkins — verify first)
claude mcp add --env KEY=val --transport stdio <name> -- npx -y <server-pkg>
```

- `--scope local|project|user` — `project` writes a shared **`.mcp.json`** (check into the repo).
- `/mcp` — list servers, see tool counts, **authenticate OAuth** servers.
- `claude mcp list` · `claude mcp get <name>` · `claude mcp remove <name>`.
- Tools appear as `mcp__<server>__<tool>` (e.g. `mcp__github__create_issue`). **Just ask** ("create a GitHub issue…") — you rarely call them by name.
- Portable: the **same servers** work in Cursor, Codex and Gemini CLI.

---

## 📚 Skills — encode your rules (model-invoked)

```
.claude/skills/<name>/SKILL.md      # project (shareable, in the repo)
~/.claude/skills/<name>/SKILL.md    # personal (all your projects)
```
```markdown
---
name: pr-conventions
description: Our PR & commit house style. Use for any commit, PR or release note.
---
# PR & Commit Conventions
...your rules, templates, examples...
```
- Required frontmatter: **`name`** + **`description`**. The **description is what makes Claude invoke it** — be explicit about *when* to use it.
- Body holds your standards, templates, procedures. Bundle extra files in the folder.

---

## 🤖 Sub-Agents — specialists in their own context

```
.claude/agents/<name>.md            # project
~/.claude/agents/<name>.md          # user (all projects)
```
```markdown
---
name: code-reviewer
description: Reviews code for correctness, security, house style. Use after changes.
tools: Read, Glob, Grep     # omit to inherit all; restrict to keep it safe
model: sonnet               # or haiku (cheaper) / opus / inherit
---
You are a senior code reviewer. Report findings, most severe first…
```
- Claude **auto-delegates** by the `description`; each agent runs in **its own context** and returns a summary (saves your main context).
- **Restrict `tools`** to control what it can do (e.g. reviewer = read-only; fixer = +Edit).
- `/agents` no longer opens a wizard — **ask Claude to create one**, or write the file. Files are hot-reloaded within seconds (restart if a brand-new `agents/` folder isn't detected).
- **Orchestrate:** *"use the reviewer, then the fixer."* Separation of duties for agents.

---

*The through-line: MCP gives the agent your tools, Skills give it your rules, sub-agents give it specialists. That's the operating layer — and it travels across tools.*
