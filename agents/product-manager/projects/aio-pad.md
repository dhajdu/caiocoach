# Project: AIO Pad

**One-liner:** An internal AI workspace tool for the AI Officer team — prompt libraries, workflow automation, and team productivity.
**Repo:** `/Users/davepro/code-projects/aio-pad`
**Production:** Internal (not public-facing)
**Phase:** Live (active internal use)

---

## Context paths

Read these in order before running any skill:

1. `/Users/davepro/code-projects/aio-pad/docs/product/product.md` (may not exist — check)
2. `/Users/davepro/code-projects/aio-pad/docs/product/epic-status.md` (may not exist — check)
3. `/Users/davepro/code-projects/aio-pad/docs/plans/` (scan for recent plans)
4. `/Users/davepro/code-projects/aio-pad/README.md` (fallback context)

---

## Skills available

### Global
- `plan-my-day`
- `write-epics`
- `init-project` (use this if product docs are missing)

### Project-specific
- **workflow-audit** — review what workflows are currently automated, and identify the next highest-leverage automation to build

---

## Key facts for PM judgment

- Internal tool — the user is the team, not external customers
- "Live in production" means the team is actively using it, but docs may be sparse
- If product docs are missing, run `init-project` first before planning the day
- Prioritize workflows that save the most time per week for the team
