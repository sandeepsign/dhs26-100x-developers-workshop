# Worked fix — Bug 1: "Closed tasks still show on the board"
*Reference example · the whole test-first loop, start to finish.*

## 1. Root cause (diagnose before fixing)
The board rendered **every** task returned by `visibleTasks()`, which returned the list unfiltered. Closed (Done) tasks were never removed, so their cards stayed on the default board. `board.js:visibleTasks` — one missing filter.

## 2. Failing test first (red)
See `board.test.js`. The key assertion:
```js
expect(ids).not.toContain('t3');   // t3 is status: 'closed'
```
Run `npm test` → **1 failing**. The bug is now reproduced and pinned down.

## 3. Smallest fix (green)
```diff
-function visibleTasks(tasks) {
-  return tasks;
-}
+function visibleTasks(tasks, { includeClosed = false } = {}) {
+  if (includeClosed) return tasks.slice();
+  return tasks.filter(t => t.status !== 'closed');
+}
```
Run `npm test` → **all passing**. The diff is three lines of logic — scoped, revertible, easy to review.

## 4. Why this is "good"
- **Test-first:** the test proves the bug, then proves the fix, then stays as a regression guard.
- **Small diff:** no refactor smuggled in; a reviewer can read it in ten seconds.
- **Opt-in preserved:** `includeClosed` keeps the "show done" path working — we fixed the default, not the capability.
- **No mutation:** `filter`/`slice` return new arrays; the third test guards that.

## 5. Ship it
```bash
git checkout -b fix/closed-tasks-hidden
git add board.js board.test.js
git commit -m "Hide closed tasks from board (fixes #1)"
git push -u origin fix/closed-tasks-hidden
gh pr create --fill
```
Then CI runs: **lint ✓ · tests ✓ · AI review** (see `ai-review-comment.md` for the kind of comment it posts).
