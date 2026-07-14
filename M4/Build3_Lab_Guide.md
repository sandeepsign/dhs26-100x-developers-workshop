# Build #3 — TaskFlow on a Phone + a Notifications Service
### M4 · Mobile Apps & Microservices · ~30 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The goal:** two more app types from the same spec. First (and mainly) get **TaskFlow running on your actual phone** via Expo — then take a quick, guided tour of a **notifications microservice** with a generated **OpenAPI doc + Dockerfile**.
>
> **No coding required, no local setup** — the mobile part runs entirely in the browser + your phone. Every step works the same on macOS and Windows. Work in **pairs**.
>
> ⏱ **Time split (flex to your room):** ~18 min mobile · ~12 min service. If you're short on time, the service part is a **watch-along** — the mobile app is the must-do.

---

## Part A — TaskFlow on your phone (Expo Snack) · ~18 min

### A1. Get Expo Go on your phone (once)
Install **Expo Go** from the **App Store** (iOS) or **Google Play** (Android). Open it once. *(No phone / can't install? Skip to the **Web preview** fallback in A4.)*

### A2. Generate the mobile screens with Claude
In **Claude Code** (or Claude.ai), paste:
```
Write a single-file React Native app (App.js) for Expo Snack — a TaskFlow
mobile companion. Two things on one screen:
1. A list of tasks (title, assignee, status) grouped by status.
2. An "Add task" form (title required) that adds to the list.
Use only React Native core components and useState (no extra libraries so it
runs in Expo Snack). Seed it with 3 sample tasks. Clean, modern styling.
```
Copy the `App.js` it produces.

### A3. Run it in Expo Snack → scan to your phone
1. Go to **snack.expo.dev** (no account needed to start).
2. Replace the contents of **`App.js`** with the code you copied. It compiles automatically.
3. On the right panel, pick the **"My Device"** tab — a **QR code** appears.
4. **Scan it:**
   - **iOS** — open the **Camera** app, point at the QR, tap the banner → it opens in Expo Go.
   - **Android** — open **Expo Go** → **Scan QR code** → point at it.
5. TaskFlow loads **on your phone**. 🎉 Edit the code in Snack and watch it **live-reload** on your device.

> **Prototyping pattern:** if a screen's off, paste a screenshot into Claude and say what to change, then update `App.js` in Snack.

### A4. (Optional) Connect it to your M3 web API
Ask Claude: *"change the app to fetch tasks from `<your-replit-app-URL>/api/tasks` instead of the seeded array."* Paste the result into Snack. Now your phone app talks to the **web app you deployed in M3**.

### A5. No phone? Web preview fallback
In Snack, click the **"Web"** tab — the app runs in the browser. Same code, no device needed.

**✅ You have TaskFlow running on a phone (or web) — a second app type from the same spec.**

---

## Part B — A notifications microservice (guided) · ~12 min

Keep this light — the point is to *see* decomposition, an auto-generated **OpenAPI** doc, and a **Dockerfile**, not to build a production service. Do it in a **Replit** (browser) with **Claude Code in the shell** (from M3).

### B1. Ask Claude Code to build the service
In a Repl's **Shell**, start `claude`, then:
```
Create a tiny "notifications" microservice in this repl: a Node + Express app
with POST /notify (body: { taskId, message }; validate both are present;
just log and return { ok: true }) and GET /health (returns { status: "ok" }).
Listen on process.env.PORT. Keep it to one file.
```
Approve the diffs, then **Run** it. Hit the `/health` URL — you have a service.

### B2. Generate its OpenAPI doc
```
Generate an openapi.yaml that documents these two endpoints, matching the code.
```
Open `openapi.yaml` — that's your API, described in a machine-readable spec. **Change an endpoint and ask Claude to regenerate it** — that's "kept in sync."

### B3. Generate a Dockerfile
```
Add a Dockerfile that containerizes this service (node base image, copy, npm
install, start). Explain each line in one sentence for a non-developer.
```
Read the Dockerfile + explanation. That's containerization at survey level — a **recipe** to run the service the same way anywhere. *(We're not building/deploying the image today.)*

### B4. (Stretch) Wire it to TaskFlow
Ask Claude Code: *"when a task is created in TaskFlow, call POST /notify with the task title."* — a first taste of services talking to each other (deeper in M5).

**✅ You've decomposed a service, documented its API, and containerized it — all generated.**

---

## Verify

- [ ] TaskFlow runs on your **phone** (or the Web tab): list + add work.
- [ ] (Optional) The phone app reads from your **M3 API**.
- [ ] The notifications service responds on **/health**.
- [ ] You have an **openapi.yaml** that matches the code.
- [ ] You have a **Dockerfile** you understand line-by-line.

---

## Fallbacks

- **QR won't scan / phone won't connect:** use the Snack **Web** tab — the app runs in the browser. (Corporate Wi-Fi sometimes blocks the device tunnel; web preview always works.)
- **Expo Go crashes on load:** the code likely uses a library Snack doesn't bundle — ask Claude to *"use only React Native core components, no external libraries."*
- **Short on time:** do **Part A only**; watch the instructor demo Part B. Part A (a phone app) is the module's must-have.
- **Claude Code login slow in Replit:** use Replit's built-in Assistant for Part B's prompts.

---

## What you keep

**TaskFlow on your phone** (Expo/Snack) plus a **notifications microservice** with an **OpenAPI doc and a Dockerfile** — three app types now (web, mobile, service) from one spec.

**Next — M5:** make TaskFlow *enterprise* — connect GitHub/Jira via **MCP**, encode a **Skill**, and run a **sub-agent** on the repo.
