# 📱 Mobile + Microservices Cheatsheet
### Expo Snack, OpenAPI & Docker — the fast reference · M4 keeper · the 100x Masterclass (accurate as of mid-2026)

> Two app types, one card. The mobile path is **browser + phone, zero setup**; the service path is **generated, survey-level**.

---

## 📱 Mobile — idea → phone via Expo Snack

1. **Expo Go** on your phone — free, from the App Store / Google Play.
2. Ask Claude for a **single-file `App.js`** (React Native, core components + `useState` only, no extra libraries — so it runs in Snack).
3. **snack.expo.dev** → paste into `App.js` (compiles automatically).
4. Right panel → **"My Device"** tab → a **QR code** appears.
   - **iOS**: open the **Camera** app, point at the QR, tap the banner.
   - **Android**: open **Expo Go** → **Scan QR code**.
5. It's **live on your phone** and **live-reloads** as you edit.
6. **No phone?** Use the **"Web"** tab — runs in the browser.

**Gotcha:** Snack only bundles core RN + a few libs. If Expo Go errors, tell Claude *"use only React Native core components, no external libraries."*

---

## 🔌 API docs — OpenAPI, kept in sync

- An **`openapi.yaml`** describes your API in a machine-readable spec (endpoints, request/response shapes).
- **Generate it from the code**, don't hand-write it: *"generate an openapi.yaml matching these endpoints."*
- **Change code → regenerate** so the doc never drifts. One source of truth → feeds docs, client code, and tests.

```yaml
paths:
  /notify:
    post: { summary: notify about a task, body: { taskId, message } }
  /health:
    get:  { summary: liveness check }
```

---

## 🐳 Containers — Dockerfile at survey level

A **Dockerfile** is a *recipe* to package your service so it runs the same everywhere — no "works on my machine."

```dockerfile
FROM node:20-slim      # base image
WORKDIR /app           # where the code lives
COPY . .               # copy your files in
RUN npm install        # install dependencies
CMD ["npm","start"]    # how to run it
```

Ask Claude: *"add a Dockerfile and explain each line for a non-developer."* You don't need to build or deploy the image today — the point is the **concept**.

---

## The through-line

**One spec → three app types.** The TaskFlow spec from M2 now runs as a **web app** (M3), a **phone app** (Expo), and is served by a **documented, containerizable service**. Same contract, three shapes — you chose the shape, the agents built it.
