# Build #0 — First Feature, Four Ways
### M1 · Foundations of AI-Native Software Development · ~20 minutes
**DataHack Summit 2026 — the 100x Masterclass**

> **The point of this exercise:** you'll give the *exact same, well-structured prompt* to Claude Code and watch the instructor run it in Cursor, Codex, and Gemini. Same input, four behaviors. By the end you'll *feel* the landscape — not just hear about it — and you'll have used the prompting patterns from the slides on a real feature.
>
> **No coding required.** You direct the agent; it writes the code. Every instruction below is given for **macOS** and **Windows**.

---

## What you're building

The starter page (`index.html`) is a static **Acme Corp — Employee Directory**: a styled table of 10 employees with no interactivity. You'll add a **live search filter** — the kind of feature that appears in almost every enterprise app.

You will **not** type the code. You'll describe *what "done" looks like* (acceptance criteria) and let the agent build it.

---

## Step 1 — Get the starter file into a folder

The `index.html` starter is in the workshop repo under `M1/lab-kit/`. Make a working copy so you can experiment freely.

**macOS / Windows (WSL) / Linux:**
```bash
mkdir -p ~/build0 && cd ~/build0
cp <path-to-repo>/M1/lab-kit/index.html .
```

**Windows (PowerShell):**
```powershell
mkdir $HOME\build0; cd $HOME\build0
copy <path-to-repo>\M1\lab-kit\index.html .
```

> Don't have the repo cloned? Grab just this file from the workshop repo's web page → download `index.html` into your `build0` folder. A TA can help.

**Optional — see the starting point:** double-click `index.html` to open it in your browser. You'll see the directory table with no search box. That's what you're about to change.

---

## Step 2 — Open the folder in Claude Code

**All platforms** — from inside the `build0` folder:
```bash
claude
```
Claude Code starts in that folder and can see `index.html`. (If it asks for permission to read files in the folder, approve it.)

---

## Step 3 — Give it the structured prompt

Copy the prompt below **exactly** and paste it into Claude Code. This is the same prompt the instructor will run in the other three tools — notice how much of it is *acceptance criteria*, not instructions on how to code.

```text
You are adding a feature to a static HTML employee directory (index.html —
a single file with inline CSS, no framework and no build step).

Feature: a live search filter for the employee table.

Acceptance criteria:
1. Add a labeled search input above the table, placeholder "Search employees…".
2. As I type, filter the table rows in real time. Match case-insensitively
   against the employee's Name OR Department.
3. Show a live count "Showing X of Y employees" that updates as results change.
4. When no rows match, hide the table and show a friendly message:
   "No matching employees."
5. Clearing the input restores all rows and the full count.
6. Keep everything in the single index.html file. No external libraries.
   Preserve the existing visual style.
7. Accessibility: the input has an associated <label>, and the result count
   uses aria-live="polite".

Before writing any code, briefly outline your plan. Then implement it.
After implementing, tell me how to verify each acceptance criterion.
```

**Why this prompt works** (these are the M1 patterns in action):
- **Role + context** — it says what the file is, the stack, and the constraints.
- **Explicit acceptance criteria** — seven testable statements of "done."
- **Constraints** — one file, no libraries, keep the style.
- **Plan-first** — it must show a plan before coding, so you can catch a wrong turn early.
- **Self-verification** — it must tell you how to check its own work.

---

## Step 4 — Watch the agentic loop

Notice what Claude Code does — this is the **Perceive → Plan → Act → Verify** loop from the slides:

1. **Perceive** — it reads `index.html` to understand the current structure.
2. **Plan** — it outlines the steps *before* editing. Read the plan. Does it match the criteria?
3. **Act** — it edits the file. It will show you the change (a diff) and ask to apply it. **Approve it.**
4. **Verify** — it tells you how to confirm each criterion.

> **You are the human in the loop.** If the plan looks wrong, type feedback instead of approving — e.g. *"Also match the Location column,"* or *"Keep the status pills visible."* That's the **iterate-with-feedback** pattern.

---

## Step 5 — Verify it yourself

Refresh `index.html` in your browser and check each criterion:

- [ ] A search box appears above the table with the right placeholder.
- [ ] Typing `eng` filters to Engineering employees; typing `aisha` filters to one row.
- [ ] The "Showing X of Y employees" count updates as you type.
- [ ] Typing `zzz` hides the table and shows "No matching employees."
- [ ] Clearing the box brings everyone back.
- [ ] It's still one file, still looks like Acme's directory.

**All boxes ticked? You just shipped a feature by directing an agent.** 🎉

---

## Step 6 — The four-way comparison

While you work in Claude Code, the instructor runs the **identical prompt** in **Cursor**, **OpenAI Codex**, and **Google Gemini** on screen. Watch for four things (this is your debrief worksheet):

| Lens | What to notice | Claude Code | Cursor | Codex | Gemini |
|---|---|---|---|---|---|
| **Output quality** | Did it satisfy all 7 criteria first try? | | | | |
| **Control** | Did it show a plan you could approve *before* editing? | | | | |
| **Transparency** | Could you see which files/lines changed? | | | | |
| **Speed & fit** | How fast, and which felt right for *this* job? | | | | |

*(Jot a ✓ / ✗ / note in each cell as the tools run.)*

**What you'll typically see** (so you know what to look for even if a tool misbehaves on the day):
- **Claude Code** and **Codex CLI** work in the terminal against your real files, show a plan, and ask before applying edits — strong *control and transparency*.
- **Cursor** applies changes inside the editor with an inline diff — fast, very visual, great when you're hands-on-keyboard.
- **Gemini CLI** runs in the terminal too (open-source, generous free tier); behavior is similar to the other CLIs, quality varies by task.
- A prototyping tool like **V0/Replit** would *rebuild the page* rather than surgically edit it — a different philosophy, better for greenfield UI than for a targeted change.

---

## If a tool misbehaves (fallback)

Live demos and Wi-Fi are unpredictable. If one of the mirrored tools fails on the day:
- The instructor will show **pre-captured screenshots** of that tool's output for the same prompt.
- Your own Claude Code run is the one that matters — as long as *yours* worked, you've met the objective.
- TAs can help anyone whose Claude Code didn't respond (usually a login or folder-permission issue — see the pre-flight guide).

---

## Optional stretch (for fast finishers)

Give Claude Code **one** of these follow-ups — and notice how a good agent extends existing code:
- *"Also let me filter by Location, and add a dropdown to filter by Status."*
- *"Add a 'Clear' button next to the search box."*
- *"Highlight the matching text in each visible row."*

---

## Debrief — the one thing to take away

Same prompt, four tools, four behaviors. The lesson isn't "which tool wins" — it's that **a well-structured prompt is portable**: acceptance criteria, constraints, plan-first, and self-verification make *every* tool better. That's the skill you'll use for the rest of the day.

**Next up — M2:** if a good prompt is powerful, a good *methodology* makes it repeatable across a whole team. That's where specs come in.
