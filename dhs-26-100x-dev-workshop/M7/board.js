// examples/board.js — the fixed module (Bug 1). Small, scoped change.
//
// BEFORE (the bug): returned every task, so closed/Done cards stayed on the board.
//   function visibleTasks(tasks) { return tasks; }
//
// AFTER (the fix): hide closed tasks from the default view; allow opt-in.
// The whole fix is the one filter below — that's the point of "smallest change".

function visibleTasks(tasks, { includeClosed = false } = {}) {
  if (includeClosed) return tasks.slice();
  return tasks.filter(t => t.status !== 'closed');
}

module.exports = { visibleTasks };
