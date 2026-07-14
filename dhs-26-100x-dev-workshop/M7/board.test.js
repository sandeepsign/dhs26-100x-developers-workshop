// examples/board.test.js — the test-first fix for Bug 1 ("closed tasks still show")
// Reference example. Write this FIRST and watch it fail (red), then apply the
// fix in board.js and watch it pass (green). The test then stays as a
// permanent regression guard.
//
// Run: npm test   (Jest-style; adapt to your runner if different)

const { visibleTasks } = require('../board');

const tasks = [
  { id: 't1', title: 'Write PRD',      status: 'todo' },
  { id: 't2', title: 'Build API',      status: 'in_progress' },
  { id: 't3', title: 'Ship v1',        status: 'closed' },   // done / closed
];

describe('board view', () => {
  test('hides closed tasks from the default board', () => {
    const shown = visibleTasks(tasks);
    const ids = shown.map(t => t.id);
    expect(ids).toContain('t1');
    expect(ids).toContain('t2');
    expect(ids).not.toContain('t3');          // <-- fails before the fix
  });

  test('shows closed tasks when explicitly requested', () => {
    const shown = visibleTasks(tasks, { includeClosed: true });
    expect(shown.map(t => t.id)).toContain('t3');
  });

  test('does not mutate the input array', () => {
    const copy = tasks.slice();
    visibleTasks(tasks);
    expect(tasks).toEqual(copy);
  });
});
