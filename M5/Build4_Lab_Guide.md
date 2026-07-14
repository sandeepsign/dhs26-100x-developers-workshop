# Build #4 — MCP, a Skill & Sub-Agents
### M5 · The Extensibility Layer · ~30 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The goal:** make TaskFlow *enterprise*. Give the agent your **tools** (MCP → GitHub/Jira/Jenkins), your **rules** (a Skill), and your **specialists** (a reviewer → fixer sub-agent workflow) — all in Claude Code.
>
> **Everything runs in Claude Code** on a local TaskFlow project. Use your **M2 `taskflow/` folder** (from the SpecKit build) or clone the workshop repo — either works. Steps are the same on macOS and Windows. Work in **pairs**.
>
> ⚠️ **Tokens:** GitHub needs a fine-grained token; Jira/Jenkins need accounts/instances. Do **Part 1 (GitHub)** hands-on; **Jira and Jenkins** are "wire it if you have it, otherwise watch the pattern."

---

## Setup (2 min)

Open your TaskFlow project in Claude Code:
```bash
cd taskflow      # your M2 folder, or a fresh clone
claude
```

---

## Part 1 — MCP: connect GitHub & create an issue (~10 min)

### 1a. Get a GitHub token
Open **github.com/settings/personal-access-tokens** → **Generate new token (fine-grained)** → give it access to the **one repo** you'll use for TaskFlow, with **Issues: Read/Write** and **Contents: Read**. Copy the token.

### 1b. Add the GitHub MCP server
In your terminal (not inside Claude):
```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ \
  --header "Authorization: Bearer YOUR_GITHUB_PAT"
```
Back in Claude Code, run `/mcp` — you should see **github** connected, with a tool count. (Reserved name note: it must be `github`, not a reserved name.)

### 1c. Create an issue from chat
Just ask:
```
Create a GitHub issue on <your-org>/<your-repo>: title "Fix the date filter
on the board", label it "bug", and describe the problem in two lines.
```
Approve the tool call. **Open GitHub — the issue is there.** You just acted on an enterprise system from a sentence.

### 1d. (If you have it) Jira & Jenkins — same pattern
**Jira / Confluence** (Atlassian's official remote server, OAuth):
```bash
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp
```
Run `/mcp` → **authenticate** (it opens a browser for OAuth). Then: *"create a Jira issue in project TASK: 'Filter bug', priority high."*

**Jenkins** (community server — verify the package first; instructor demos this):
```bash
claude mcp add --env JENKINS_URL=... --env JENKINS_TOKEN=... \
  --transport stdio jenkins -- npx -y <a-jenkins-mcp-server>
```
> **No Jira/Jenkins account?** That's expected — watch the instructor's demo. The point is *one standard, many systems*: the wiring is identical.

**Security as you go:** scope tokens to **only** the repos/projects you need; keep them in the command/env, never in a committed file; treat every third-party server as able to see what you connect — prefer official/vetted ones.

---

## Part 2 — Skill: encode your PR & commit conventions (~8 min)

### 2a. Drop in the Skill
Create the folder and copy the provided Skill:
```bash
mkdir -p .claude/skills/pr-conventions
# copy lab-kit/pr-conventions_SKILL.md  ->  .claude/skills/pr-conventions/SKILL.md
```
(On Windows PowerShell: `New-Item -ItemType Directory -Force .claude\skills\pr-conventions`, then copy the file in.)

### 2b. Watch it trigger — automatically
The Skill is **model-invoked**: Claude reads its `description` and uses it when relevant. Ask:
```
Write a commit message and a PR description for the date-filter fix.
```
Notice it follows the **conventional-commit format** and the **PR template** from the Skill — without you pasting the rules. That's governance that scales: **every session, every teammate, same standard.**

> Make it yours: open `SKILL.md`, change a rule (e.g. your `type(scope)` list), and re-ask — the output changes to match.

---

## Part 3 — Sub-agents: a reviewer → fixer workflow (~10 min)

### 3a. Add the two sub-agents
```bash
mkdir -p .claude/agents
# copy lab-kit/code-reviewer.md  ->  .claude/agents/code-reviewer.md
# copy lab-kit/fixer.md          ->  .claude/agents/fixer.md
```
Claude Code detects new agent files within a few seconds (restart Claude if it doesn't). Note their **frontmatter**: `code-reviewer` gets **read-only** tools (Read, Glob, Grep); `fixer` also gets **Edit**. Restricting tools keeps each one safe and focused.

### 3b. Run the workflow
```
Use the code-reviewer sub-agent to review the TaskFlow code, then use the
fixer sub-agent to implement its top findings. Keep me in the loop before
any edit.
```
Watch it happen: the **reviewer** works in its own context and returns a prioritized findings list; the **fixer** takes those findings and proposes minimal edits — you approve each. This is orchestration: you set intent, specialists do the work.

> **Two-agent value:** the reviewer never edits (can't accidentally "fix" by rewriting); the fixer never re-reviews (won't rationalize its own work). Separation of duties, for agents.

---

## Comparison (instructor, 2 min)
The **same GitHub MCP server** attached to **Gemini CLI** (`gemini mcp add …`) exposes the same tools — *one standard, many tools*. Your MCP servers, Skills-style context, and agent patterns aren't locked to one product.

---

## Verify

- [ ] `/mcp` shows **github** connected; you created a real **issue** from chat.
- [ ] (If wired) Jira/Jenkins connected via the same `claude mcp add` pattern.
- [ ] Your commit/PR text follows the **pr-conventions** Skill automatically.
- [ ] `code-reviewer` returned a findings list; `fixer` proposed fixes you approved.

---

## Fallbacks

- **GitHub MCP won't connect:** re-check the token scope (Issues: R/W on that repo) and that the header is exactly `Authorization: Bearer <token>`. Try `/mcp` → reconnect.
- **No repo yet:** create an empty GitHub repo (or fork the workshop repo) first; point the issue command at it.
- **Skill doesn't trigger:** make the `description` explicit about *when* to use it; ensure the file is at `.claude/skills/pr-conventions/SKILL.md`.
- **Sub-agent not found:** restart Claude Code (a running session doesn't detect a brand-new `.claude/agents/` folder).
- **Short on time:** Part 1 (GitHub issue) + Part 3 (reviewer→fixer) are the highlights; Part 2 is a 3-minute drop-in.

---

## What you keep

A TaskFlow project wired to **GitHub via MCP**, a shareable **`pr-conventions` Skill**, and a **reviewer → fixer** sub-agent workflow in `.claude/agents/`. The "operating layer" from the Welcome — now your actual setup.

**Next — M6:** point Claude Code at your repos and generate the full **doc suite** — PRD, HLD, LLD, an architecture diagram, and a user guide.
