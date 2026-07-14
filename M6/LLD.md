# TaskFlow Notifications Service — Low-Level Design (LLD)
*Reference example · one service, module by module, generated from the code*

## Scope
The **notifications microservice** only. It receives a request when a task changes and sends a notice. It owns no task data; it is called by the TaskFlow API.

## Modules
| Module | Responsibility |
|---|---|
| `server.js` | Bootstraps Express, wires routes, listens on `process.env.PORT` |
| `routes/notify.js` | Handles `POST /notify` — validate → dispatch |
| `routes/health.js` | Handles `GET /health` — liveness |
| `lib/sender.js` | The delivery mechanism (log/stub today; email/push later) |

## API contract
### `POST /notify`
Request body:
```json
{ "taskId": "t_123", "message": "Task moved to In Progress" }
```
- **Validation:** `taskId` and `message` are both **required, non-empty strings**. Missing/blank → `400` with `{ "error": "taskId and message are required" }`.
- **Success:** `200` with `{ "ok": true }` after `sender.send()` resolves.
- **Failure (delivery):** `502` with `{ "ok": false, "error": "<reason>" }`.

### `GET /health`
- `200` with `{ "status": "ok" }`. No side effects. Used by uptime checks.

## Control flow (`POST /notify`)
1. Parse JSON body.
2. `validate(body)` → throws `ValidationError` on bad input (caught → `400`).
3. `sender.send(taskId, message)` → returns a receipt or throws.
4. Respond `200 { ok: true }`; on send error, `502`.

## Data & state
Stateless. No database. Each request is independent. (If retries/queueing are needed later, add an outbox table — noted as future work.)

## Error handling
- One centralized error middleware maps `ValidationError → 400`, delivery errors → `502`, everything else → `500` with a generic message (no internals leaked).

## Tests (core paths)
- `POST /notify` with a missing `message` → **400**.
- `POST /notify` with valid body → **200** and `sender.send` called once with the right args.
- `GET /health` → **200 { status: "ok" }**.

## Configuration
- `PORT` — from `process.env.PORT` (Replit sets this).
- Delivery target/keys — via env (none required for the log stub).

---
*Every route, status code and validation rule here matches the notifications service built in M4. Regenerate this file whenever the service changes.*
