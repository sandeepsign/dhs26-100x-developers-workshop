# ⚖️ Prototype vs Production — the fast call
### Which tier for which moment · M3 keeper · the 100x Masterclass

> Two tiers, one rule: **prototype where speed wins, harden where it ships.** A prototype is a starting point, not a product.

---

## The 10-second decision

```
Do I just need something clickable to explore / demo / pitch?   → PROTOTYPING TIER
Will real users depend on it (data, correctness, uptime)?       → PRODUCTION TIER
Not sure?  Prototype first, then harden the parts that survive.
```

---

## Side by side

| | **Prototyping tier** | **Production tier** |
|---|---|---|
| **Goal** | Something clickable, fast | Something real, shippable |
| **Tools** | Replit Agent · V0 | Claude Code · Cursor |
| **Frontend** | Auto-generated, iterate freely | Componentized, consistent, accessible |
| **Data** | Mock / hardcoded | Real store (Replit DB), validated |
| **Tests** | None yet | Core paths covered |
| **Mindset** | Throwaway-friendly | Maintainable |
| **Use it when** | Explore, demo, pitch | Users depend on it |
| **In Build #2** | Step 1 (prototype the UI) | Steps 2–4 (harden → persist → deploy) |

---

## Why the handoff matters

Demos are easy to generate; **production features aren't**. The prototype proves the *idea*; the production tier makes it **survive real users** — real API routes instead of mocked data, a data model with validation, error handling, and tests that guard the core paths. Skipping the handoff is how "it worked in the demo" becomes a support ticket.

## Frontend generation patterns (both tiers)

- **Scaffold, then iterate** — generate the whole screen, then refine one component at a time.
- **Iterate by screenshot** — paste an image and say what to change; faster than prose.
- **Design consistency** — hand it your colors, spacing, and one example component to match.
- **Lock & reuse** — once a card/header is right, reuse it everywhere.

*Rule of thumb: it's fine to vibe-code a prototype — just don't ship the prototype. Harden it first.*
