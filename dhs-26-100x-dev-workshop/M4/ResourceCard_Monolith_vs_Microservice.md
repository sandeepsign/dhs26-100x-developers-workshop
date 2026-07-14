# 🧱 Monolith vs Microservice — the honest guide
### When to split, when to stay · M4 keeper · the 100x Masterclass

> The trendy answer is "microservices." The **right** answer is usually "a monolith, until a specific pain forces a split." Use Claude as an architecture **sparring partner** — it's good at proposing boundaries *and* at talking you out of premature ones.

---

## The 10-second call

```
Default → build a MONOLITH (one app, one deploy).
Split a piece into its own SERVICE only when a real pain shows up:
   it needs to scale on its own · it has a different release cadence ·
   a separate team owns it · there's a clear, stable boundary.
No pain yet?  Don't split.  Complexity is a cost you pay forever.
```

---

## Side by side

| Stay a **monolith** when… | Split into a **service** when… |
|---|---|
| Small team, early product | A part needs to scale independently |
| One deploy keeps life simple | A piece has its own release cadence |
| The domain is still changing | A clear, stable boundary exists |
| Simplicity matters most | A separate team owns that piece |
| **Default — start here** | **Split when the pain is real** |

---

## What "good decomposition" looks like

- **One service, one responsibility** — if you can't name its single job, it's not a service yet.
- **A clear contract** — services talk through a documented API (OpenAPI), not shared internals.
- **Independent lifecycle** — it can be deployed and scaled without touching the rest.
- **Owns its data** — a service that shares another's database isn't really separate.

## How to use Claude as a sparring partner

- *"Here's TaskFlow. Propose service boundaries — and argue against splitting where a monolith is fine."*
- *"What's the smallest first service to extract, and why that one?"*
- *"What would I regret about this split in 6 months?"*

*Rule of thumb: a well-structured monolith beats a poorly-drawn set of microservices every time. Earn the split.*
