# 🔒 MCP Security Card
### Connecting the agent to enterprise systems — safely · M5 keeper · the 100x Masterclass

> MCP gives an agent real power over your systems (issues, PRs, tickets, builds, databases). That power needs guardrails. Read this **before** you wire tokens.

---

## The three rules

**1. Least privilege — scope every token.**
Use **fine-grained** tokens, scoped to the **specific repos/projects** the agent needs and the **minimum permissions** (e.g. GitHub *Issues: Read/Write* on one repo, not org-wide admin). A token is a key; don't hand over the whole building.

**2. Secrets hygiene — never let a token leak.**
- Keep tokens in the **command/env or the OAuth flow**, never in prompts, code, or committed files.
- Never commit `.mcp.json` with a literal token — reference an **env var**, or use OAuth.
- **Rotate** tokens periodically and the moment one might be exposed.
- Add `.env` and local config to `.gitignore`.

**3. Third-party server risk — trust deliberately.**
An MCP server can **see and act on everything you connect to it**. Before adding one:
- Prefer **official / first-party** servers (GitHub, Atlassian) or **vetted** directory entries.
- **Read what tools it exposes** (`/mcp` shows them) — understand what it *can* do.
- Be cautious with community servers (e.g. many Jenkins servers) — **verify the source** and pin a known version.
- Remote servers = your data leaves your machine; know the vendor's data policy.

---

## Scope & sharing (Claude Code specifics)

- `--scope local` — just you, this project (default). `--scope user` — you, everywhere. `--scope project` — **shared via `.mcp.json`** in the repo.
- A **project-scoped** server from `.mcp.json` shows as **⏸ Pending approval** until you trust the workspace — a cloned repo can't silently auto-approve its own servers. Review before you accept.
- Keep human approval on **write/destructive** actions; don't blanket-allow every tool.

---

## A 20-second pre-flight before wiring anything

1. Is this the **official/vetted** server? What tools does it expose?
2. Is my token **fine-grained** and scoped to the **minimum**?
3. Is the token **out of** any committed file (env/OAuth only)?
4. Do I still **approve** the risky actions, rather than auto-run them?

*Power without guardrails is how "the agent did something" becomes an incident. Scope tight, keep secrets out of files, trust servers deliberately — and you get all the leverage with none of the surprises.*
