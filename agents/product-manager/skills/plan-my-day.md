# Skill: Plan My Day

**Trigger:** Dave asks what to work on, wants priorities, or invokes `/product-manager` without specifying a skill.

**Output:** 8 prioritized action items with one sentence of reasoning each.

---

## Steps

1. **Read the project context** — you should already have loaded the project file and its live docs. If not, do it now.

2. **Scan for signals** in this order:
   - Open bugs (magenta in monitor) — blockers first
   - Epics marked `↻` (blocked) — what is blocking them?
   - Epics `◐` (in progress) — what's the next concrete step?
   - Epics `○` (planned) — is anything ready to start?
   - Epics `●` (complete) — any follow-up needed (docs, deploy, comms)?
   - Anything in the "Needs Human Review" sections of docs
   - Any stale context (docs not updated in >2 weeks, dead links, placeholders)

3. **Apply judgment:**
   - Prefer items that unblock other items over isolated tasks
   - Prefer items that close an open loop over items that open new ones
   - Prefer shipping over planning
   - Surface one "quick win" (<30 min) and one "deep work" item in the 8

4. **Output format:**

```
## Today's 8 — [Project Name] · [Date]

1. [P1] **Action title** — One sentence: why this, why now.
2. [P1] **Action title** — One sentence.
3. [P2] **Action title** — One sentence.
4. [P2] **Action title** — One sentence.
5. [P2] **Action title** — One sentence.
6. [P3] **Action title** — One sentence.
7. [P3] **Action title** — One sentence.
8. [QW] **Quick win** — One sentence: estimated <30 min.
```

Priority tags: `P1` = do today, `P2` = do this week, `P3` = schedule it, `QW` = quick win.

5. **Ask:** "Want me to go deeper on any of these, or start on one now?"

---

## Rules

- 8 items exactly — not 6, not 10
- Every item must trace to something real in the docs
- No invented tasks — if there's nothing in a category, skip it
- If the docs are stale or missing, flag that as item 1
