# Skill: Write Epics

**Trigger:** Dave has an idea for a new feature, wants to plan a new phase, or asks to write epics/stories for something.

**Output:** A structured epic with user stories, acceptance criteria, and a sizing estimate — ready to add to `epics.md` and `epic-status.md`.

---

## Steps

1. **Start with the problem, not the solution:**
   Ask: "What problem does this solve, and for whom?"
   Do not proceed until Dave answers. An epic without a problem statement gets shelved.

2. **Clarify scope:**
   - "Is this a new epic or an extension of an existing one?"
   - "What phase does this belong to?"
   - "Are there dependencies on other epics?"

3. **Draft the epic:**

   ```markdown
   ## Epic [N]: [Name]

   **Problem:** One sentence — what user pain or business gap this addresses.
   **Outcome:** One sentence — what success looks like when this is done.
   **Phase:** [1 / 2 / 3]
   **Dependencies:** [list epic numbers, or "none"]

   ### User Stories

   | # | As a... | I want to... | So that... | Size |
   |---|---------|--------------|------------|------|
   | 1 | [role]  | [action]     | [benefit]  | S/M/L/XL |
   | 2 | ...     | ...          | ...        | ... |

   ### Acceptance Criteria

   - [ ] [Specific, testable condition]
   - [ ] [Specific, testable condition]
   - [ ] ...

   ### Out of scope
   - [What this epic deliberately does not include]

   ### Sizing
   | Story | Points | Notes |
   |-------|--------|-------|
   | 1     | [1-8]  | |
   | Total | [sum]  | [S <5 / M 5-13 / L 13-21 / XL >21] |
   ```

4. **Show the draft to Dave.** Ask: "Does this capture it? Anything missing or wrong?"

5. **After approval, ask:** "Should I add this to `epics.md` and create a placeholder row in `epic-status.md`?"

6. **Write only after confirmation.** Append to `epics.md`, add a `○ 0%` row to `epic-status.md`.

---

## Rules

- The problem statement comes before the solution — always
- User stories use "As a [role]" format — not "The system should"
- Acceptance criteria are testable — no vague language like "works well" or "is fast"
- Out of scope section is mandatory — it prevents scope creep
- Sizing uses Fibonacci points (1, 2, 3, 5, 8, 13, 21)
- No em dashes anywhere in output
- Ask before writing to disk
