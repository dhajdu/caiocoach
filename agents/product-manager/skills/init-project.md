# Skill: Init Project

**Trigger:** Dave starts a new project or an existing project has no product docs yet.

**Output:** A complete `docs/product/` folder with the standard documents written and ready for review.

---

## Steps

1. **Ask Dave three questions** (all required before writing anything):
   - "What is this project? Give me one sentence on what it does and who it's for."
   - "What does success look like in 6 months?"
   - "What's the first thing that needs to be built?"

2. **Scan the project directory** for any existing context:
   - README files, existing code, config files, prior planning docs
   - Any `docs/` folder with partial content
   - Git log — what has already been committed?

3. **Draft the following documents** in order:

   ### a. `docs/product/product.md`
   Product vision doc. Sections:
   - What it is (2-3 sentences)
   - Audiences (ranked, with their key question)
   - Values (ranked)
   - Business model (table: channel, pricing, demand shape)
   - Moat (what makes this hard to replicate)

   ### b. `docs/product/epics.md`
   Epic registry. Sections:
   - Epic table: # | Epic | Description | Phase | Owner
   - Phase definitions (what Phase 1, 2, 3 mean for this project)
   - Dependencies (which epics must precede others)

   ### c. `docs/product/epic-status.md`
   Status dashboard. Sections:
   - Status table: # | Epic | Status glyph | % | Evidence
   - Glyph legend
   - Critical gaps (what's missing or blocked)
   - Audit basis (date, what was audited)

   ### d. `docs/product/agents.md`
   Agent registry (even if empty). Sections:
   - Agent table: # | Agent | Type | Status | % | Description
   - Architecture rules
   - Glyph legend

4. **Show Dave all four drafts** before writing to disk. Ask: "Ready to write these, or do you want to adjust anything?"

5. **Write only after approval.** Write to the correct paths under the project's `docs/product/` folder.

6. **Confirm:** "Done. Your product docs are at `docs/product/`. Next step: open `epic-status.md` and ground the percentages in actual code."

---

## Rules

- Never invent features or capabilities — only document what Dave confirms
- Status glyphs start at `○` (planned) for everything not yet built
- Percentages start at `0` unless Dave says otherwise
- No em dashes in any output
- Ask before writing — never write speculatively
