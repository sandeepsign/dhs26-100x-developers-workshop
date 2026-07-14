# 🃏 Prompt Pattern Cards
### Five moves that make every AI coding tool better · M1 keeper · the 100x Masterclass

> These patterns are **tool-agnostic**. They work the same in Claude Code, Cursor, Codex, Gemini, Replit, and V0. Learn them once; use them everywhere. **Context is king — the agent only knows what you put in front of it.**

---

## Card 1 — State explicit acceptance criteria
**The single highest-leverage move.** Describe *what "done" looks like* as a numbered, testable list — not how to code it.

> **Template:**
> ```
> Feature: <what you want>.
> Acceptance criteria:
> 1. <observable, testable statement>
> 2. <observable, testable statement>
> 3. <edge case / empty state>
> ```

> **Example:** *"3. When no rows match, hide the table and show 'No matching employees.'"*

**Why:** ambiguity in = chaos out. Criteria become the contract the agent builds against — and the checklist you verify against.

---

## Card 2 — Show an example
One concrete sample beats a paragraph of description. Give an input → output, a sample row, or a "make it look like this."

> **Template:** *"Here's one example: input `eng` should show only Engineering rows. Follow that pattern for any search term."*

**Why:** examples pin down intent that prose leaves fuzzy. This is "few-shot" prompting, and it's the fastest way to remove ambiguity.

---

## Card 3 — Ask for a plan first
Make the agent outline its approach **before** it edits anything. Read the plan, approve or redirect, *then* let it build.

> **Template:** *"Before writing any code, briefly outline your plan and wait for my go-ahead."*

**Why:** catching a wrong turn in a 3-line plan costs seconds; catching it after 200 lines of edits costs minutes. This is where you stay the human in the loop.

---

## Card 4 — Iterate with specific feedback
When it's not right, don't restart — steer. Name the **file, line, or behavior** precisely.

> **Template:** *"Almost — in `index.html`, the count doesn't reset when I clear the box. Fix just that; leave the rest."*

**Why:** vague feedback ("make it better") gets vague results. Specific, located feedback gets a surgical fix and preserves what already works.

---

## Card 5 — Make it verify itself
End the prompt by asking the agent to tell you **how to check each criterion**. Turn it into your QA partner.

> **Template:** *"After implementing, tell me how to verify each acceptance criterion."*

**Why:** it closes the agentic loop (Perceive → Plan → Act → **Verify**), surfaces gaps the agent already knows about, and gives you a ready-made test script.

---

## Put them together — the anatomy of the Build #0 prompt

```
[Role + context]      You are adding a feature to index.html (one file, no framework)…
[Acceptance criteria] 1…2…3…  (the testable contract)
[Constraints]         one file, no libraries, keep the visual style
[Plan-first]          Before writing code, outline your plan.
[Self-verify]         After implementing, tell me how to verify each criterion.
```

**Five moves. Any tool. Reliably better output.** Keep this card next to your keyboard.
