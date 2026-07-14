# Build #2 — TaskFlow Goes Live (Replit)
### M3 · Building Web Applications with AI · ~35 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The payoff:** TaskFlow stops being a spec and becomes a **real web app with a live URL** you can open on your phone. You'll **prototype** in Replit, **harden** with Claude Code, **persist** with Replit DB, and **deploy** — all in the cloud, **no local setup**.
>
> **No coding required** — you drive; the agents build. Everything runs in the browser (works the same on macOS and Windows). Work in **pairs**; TAs help with the deploy clicks.

---

## Before you start

- A free **Replit** account (from the pre-flight sign-ups). Sign in at replit.com.
- Your **Claude Pro** login (for Claude Code).
- The **TaskFlow brief** (`TaskFlow_Brief.md`) — your spec/contract from M2.
- ⚠️ **Replit free tier gives ~10 Agent "checkpoints" per month** — so use the Agent for the *initial scaffold only*, then switch to Claude Code (which uses your Claude Pro, not Replit credits) for everything else.

---

## Step 1 — Prototype the UI with Replit Agent (~10 min)

1. On **replit.com**, click **Create** → **Create with Agent** (or open the **Agent**).
2. Give it this prompt (paste as-is):
   ```
   Build TaskFlow, a team task-tracker web app. A board with three columns:
   To-Do, In Progress, Done. I can create a task with a title (required),
   an assignee, and a due date; a task shows as a card in its column; I can
   move a card between columns; and I can filter the board by assignee or
   status. Use a clean, modern look. Keep it a simple Node + Express app
   with a plain HTML/CSS/JS front end (no heavy framework).
   ```
3. Let the Agent scaffold and run it. When it opens a preview, **click around** — create a task, see it appear.
4. **Stop here with the Agent.** Don't burn more checkpoints polishing — the next steps use Claude Code.

> **Prototyping patterns** (from the slides): if a screen is close but not right, **paste a screenshot** into the Agent and say what to change — it's faster than describing in words.

---

## Step 2 — Harden with Claude Code, in the Replit shell (~15 min)

Now switch to Claude Code — running **inside your Repl's shell** — so hardening uses your Claude Pro, not Replit credits.

1. In your Repl, open the **Shell** tab (bottom panel).
2. Install and start Claude Code:
   ```bash
   npm install -g @anthropic-ai/claude-code
   claude
   ```
3. Log in when prompted (copy the URL it prints into a new browser tab, approve, come back). A TA can help with the one-time login.
4. Drive the hardening with these prompts, one at a time — **approve each diff**:

   **4a — Real API + validation**
   ```
   Read the app. Add real REST API routes backed by the server:
   POST /api/tasks (validate: title is required; status defaults to "To-Do"),
   GET /api/tasks (support ?assignee= and ?status= filters),
   PATCH /api/tasks/:id (change status). Return clear errors for bad input.
   Wire the front end to these routes.
   ```

   **4b — Persistence with Replit DB**
   ```
   Add persistence with Replit DB so tasks survive a restart.
   Use `npm install @replit/database`, then `import Client from
   "@replit/database"; const db = new Client();`. Store each task under
   `task:<id>` and list with db.list("task:"). Replace any in-memory array.
   ```

   **4c — Two tests**
   ```
   Add two tests for the core paths: (1) creating a task without a title
   is rejected, (2) a created task appears in GET /api/tasks. Give me the
   command to run them.
   ```
5. Run the tests as instructed. Green? You've got a real app.

> **You are the human in the loop.** If a diff looks wrong, type feedback instead of approving — name the file and the behavior.

---

## Step 3 — Deploy and share your live URL (~10 min)

**The instant, free way (recommended for the workshop):**
1. Click **Run**. Your app is now served at a **public `*.replit.dev` preview URL**.
2. Copy that URL from the webview (the "open in new tab" icon) and **open it on your phone**. 🎉
3. Share it with your neighbor — it's live on the internet.

**The permanent way (optional):**
1. Click **Publish** (top-right).
2. Accept the auto-filled domain, set access to **Public**, and publish.
3. Wait through **Provision → Security Scan → Build → Bundle → Promote** (~1–2 min) → your app is at a permanent **`*.replit.app`** URL.

> ⚠️ Free apps **sleep after ~5 minutes idle** and take 10–30 s to wake on the next visit — that's normal, not a failure. Permanent always-on hosting needs Replit Core.

---

## Step 4 — Verify against the spec

Open `TaskFlow_Brief.md` and check the app does what the M2 spec promised:

- [ ] Create a task with a title (blank title is rejected).
- [ ] The task appears on the board in **To-Do**.
- [ ] Move a task across **To-Do → In Progress → Done**.
- [ ] Filter the board by **assignee** or **status**.
- [ ] Tasks survive a restart (Replit DB).
- [ ] Two tests pass.
- [ ] You have a **live URL**.

**Every one of those was a line in your M2 spec. The spec became a working, deployed app.**

---

## Fallbacks

- **Out of Agent checkpoints / Agent stalls:** skip the Agent. In the Repl shell, use **Claude Code** to build the whole thing from the brief: *"Create a Node + Express TaskFlow app with a plain HTML/CSS/JS board per this spec …"* then continue with Step 2's prompts.
- **Claude Code login is slow in the shell:** harden with **Replit's built-in Assistant/Agent** instead (same prompts) — you'll spend a couple of checkpoints, but it works.
- **Preview URL won't load:** make sure the app is **running** (Run is green) and listening on the port Replit expects (`process.env.PORT`). Ask Claude Code: *"make the server listen on process.env.PORT so Replit can serve it."*
- **Deploy blocked (free limits):** the **Run preview URL** is enough to "leave with a live URL" — Publish is a bonus.

---

## What you keep

A **deployed TaskFlow web app** with a live URL, real API routes, Replit DB persistence, and two passing tests — built by directing agents, entirely in the cloud.

**Next — M4:** put TaskFlow on a phone with an Expo mobile app, and add a notifications **microservice** with generated API docs.
