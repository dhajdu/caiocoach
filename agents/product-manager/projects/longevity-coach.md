# Project: Longevity Coach

**One-liner:** A B2B longevity health platform for clinics — patient intake, risk scoring, supplement protocols, and AI coaching.
**Repo:** `/Users/davepro/code-projects/longevity-coach`
**Production:** longevitycoach.io
**Phase:** 2 (core clinical pipeline shipping)

---

## Context paths

Read these in order before running any skill:

1. `/Users/davepro/code-projects/longevity-coach/docs/product/product.md`
2. `/Users/davepro/code-projects/longevity-coach/docs/product/epic-status.md`
3. `/Users/davepro/code-projects/longevity-coach/docs/product/agents.md`
4. `/Users/davepro/code-projects/longevity-coach/docs/plans/` (scan for recent plans)

---

## Skills available

### Global
- `plan-my-day`
- `write-epics`

### Project-specific
- **clinical-workflow** — map a new clinical workflow (intake, risk, protocol, follow-up) and identify where AI fits
- **patient-context** — review what PatientContext carries and what gaps exist for a new agent or feature

---

## Key facts for PM judgment

- B2B product — the clinic is the customer, the patient is the user
- Three AI agents already running: Sage (protocols), Atlas (risk), Janet (patient coach)
- Biggest risk: clinical accuracy and liability — anything touching health data needs careful scoping
- Schema ownership is in longevity-coach (unlike sister sites that defer to aio-website)
- Tech: Next.js, Supabase, TypeScript, pnpm
