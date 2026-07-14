# Sample AI review — what @claude posts on your PR
*Reference example · the shape of a headless review comment. Yours will differ; this shows the register: specific, cited, severity-tagged, and never a rubber stamp.*

---

**Claude Code review — PR #42 · Hide closed tasks from board**

> Reviewed the diff against the surrounding code. One suggestion, otherwise looks solid. Summary: **0 important · 1 nit**.

🟢 **The fix is correct and well-tested.** `visibleTasks` now filters `status !== 'closed'` and the new test asserts both the hide and the opt-in (`includeClosed`) paths. The no-mutation test is a nice touch.

🟡 **Nit — `board.js:8` — magic string.** `'closed'` appears here and in the tests. Consider a shared `STATUS.CLOSED` constant so a future rename (e.g. `'done'`) can't silently un-fix this. Not blocking.

🔎 **Checked and clear:** no other call site depends on `visibleTasks` returning closed tasks by default (searched `board.js`, `server.js`); the filter view already passes `includeClosed: true`. No security or data concerns in this diff.

*This review does not approve or block the PR — a human still merges. Reply or push a change to re-run.*

---

### How to read it
- **🔴 important / 🟡 nit / 🟣 pre-existing** — triage by severity; only 🔴 should hold up a merge.
- **Citations (`file:line`)** — every claim points at real code, so you can verify in seconds.
- **"Checked and clear"** — the reviewer says what it *ruled out*, not just what it found. That's the signal it actually read the repo, not just the diff.
- **You decide.** The comment ends without approving. Machines gate; humans merge.
