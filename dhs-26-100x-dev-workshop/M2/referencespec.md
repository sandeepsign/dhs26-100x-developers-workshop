# Reference: TaskFlow spec (what "good" looks like)
### An example of the artifact `/speckit.specify` should produce — for comparison, not copying

> Your generated `spec.md` won't match this word-for-word — that's fine. Use it to sanity-check that *your* spec is this concrete: testable acceptance criteria, no tech-stack details, no ambiguity.

---

## Feature: TaskFlow — team task board

### Why
Teams need a shared, at-a-glance view of who is doing what and by when, without the weight of a full project-management tool.

### User stories & acceptance criteria

**US-1 — Create a task**
As a team member, I can create a task so the work is tracked.
- **AC-1.1** A task **requires** a non-empty `title`.
- **AC-1.2** A task **may** have an `assignee` (a team member) and a `dueDate`.
- **AC-1.3** A new task defaults to status **To-Do**.
- **AC-1.4** After creating, the task appears on the board immediately.

**US-2 — Move a task across the board**
As a team member, I can change a task's status so the board reflects reality.
- **AC-2.1** `status` is exactly one of **To-Do · In Progress · Done**.
- **AC-2.2** A task can move to any status (no forced order).

**US-3 — View the board**
As anyone on the team, I can see all tasks grouped by status.
- **AC-3.1** The board shows three columns: To-Do, In Progress, Done.
- **AC-3.2** Each card shows title, assignee (if any), and due date (if any).

**US-4 — Filter the board**
As a team member, I can filter to focus.
- **AC-4.1** I can filter by **assignee**; only that member's tasks show.
- **AC-4.2** I can filter by **status**.
- **AC-4.3** Clearing the filter restores all tasks.

### Data model (the *what*, not the *how*)
- **Task**: `id`, `title` (required), `assignee` (optional), `dueDate` (optional), `status` (enum)
- **Status**: `To-Do` | `In Progress` | `Done`

### Explicitly out of scope
Authentication, real-time sync, comments, attachments, notifications. (Notifications arrive in M4.)

### Open questions (for `/speckit.clarify`)
- Can a task be unassigned? *(Assumed: yes — AC-1.2 says "may".)*
- Is `dueDate` validated against today? *(Assumed: no validation for the slice.)*

---

*Notice what's **absent**: no framework, no database choice, no file layout. Those belong in `plan.md`, produced by `/speckit.plan`. Keeping "what" and "how" separate is the core discipline of spec-driven development.*
