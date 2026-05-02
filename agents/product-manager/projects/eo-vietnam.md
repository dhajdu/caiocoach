# Project: EO Vietnam

**One-liner:** An AI-powered operations platform for the Entrepreneurs Organization Vietnam chapter — staff pipeline, events, member management, and communications.
**Repo:** `/Users/davepro/code-projects/eo-vietnam`
**Production:** eo-vietnam.com (Phase 1 site live)
**Phase:** 1 (website live, platform in early build)
**Clients:** Tam and Alex (EO Vietnam leadership)

---

## Context paths

Read these in order before running any skill:

1. `/Users/davepro/code-projects/eo-vietnam/docs/product/product.md`
2. `/Users/davepro/code-projects/eo-vietnam/docs/product/epic-status.md`
3. `/Users/davepro/code-projects/eo-vietnam/docs/plans/` (scan for recent plans — staff-pipeline-rls-email.md is key)

---

## Skills available

### Global
- `plan-my-day`
- `write-epics`
- `init-project`

### Project-specific
- **member-ops** — map a member management workflow (applications, approvals, renewals) and identify automation opportunities
- **event-ops** — scope an event lifecycle (creation, invites, RSVPs, post-event comms) end to end

---

## Key facts for PM judgment

- Client project — Tam and Alex are the primary stakeholders, not Dave directly
- 10-epic roadmap; Phase 1 (public website) is live
- Staff pipeline with RLS and email notifications is the active build (see plans/staff-pipeline-rls-email.md)
- EO is a global org — anything member-facing must respect EO global standards
- Supabase is the backend; RLS (row-level security) is critical for member data privacy
- Tech: Next.js, Supabase, TypeScript, Vercel
