# 🚀 Replit Cheatsheet — Agent, DB & Deploy
### Prototype → harden → live URL, all in the browser · M3 keeper · the 100x Masterclass (accurate as of mid-2026)

> The whole Build #2 flow, in one card. Everything runs in the cloud — **no local setup**.

---

## 1) Prototype with Replit Agent

- **Create** → **Create with Agent** → describe your app in plain English.
- The Agent scaffolds **and runs** it; iterate by chatting (or **paste a screenshot** and say what to change).
- ⚠️ **Free tier ≈ 10 Agent checkpoints/month.** Use them for the *initial scaffold*, then switch to Claude Code.

## 2) Harden with Claude Code — in the Repl **Shell**

```bash
npm install -g @anthropic-ai/claude-code
claude          # log in with your Claude Pro — uses NO Replit credits
```
Then prompt it to add real API routes, validation, persistence, and tests. You approve each diff.

## 3) Persistence — Replit DB (zero config)

```bash
npm install @replit/database
```
```javascript
import Client from "@replit/database";
const db = new Client();

await db.set(`task:${id}`, task);      // create / update
const one   = await db.get(`task:${id}`);
const keys  = await db.list("task:");  // list by prefix
await db.delete(`task:${id}`);         // delete
```
No credentials or setup needed inside a Repl.

## 4) Deploy — two ways to a live URL

| Way | Action | URL | Notes |
|---|---|---|---|
| **Instant** | Click **Run** | `*.replit.dev` (public preview) | Free, immediate; app **sleeps after ~5 min idle**, wakes on visit |
| **Permanent** | Click **Publish** | `*.replit.app` | Runs **Provision → Security Scan → Build → Bundle → Promote** (~1–2 min); free gets a replit.app subdomain; always-on needs Core |

> **Make it serve publicly:** the app must listen on `process.env.PORT`. If the preview is blank, ask Claude Code: *"make the server listen on process.env.PORT."*

---

## Free-tier reality check

- ~10 Agent checkpoints/month · apps sleep after ~5 min idle (10–30 s cold start) · ~512 MB–1 GB RAM · replit.app subdomain (no custom domain) · always-on = paid Core.
- **Good for**: learning, prototyping, workshop demos. **Not for**: production traffic.

*The move that keeps you inside the free tier: Agent for the first scaffold, then Claude Code (your Pro) for all the hardening.*
