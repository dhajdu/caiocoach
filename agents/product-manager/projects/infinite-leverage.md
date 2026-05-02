# Project: Infinite Leverage

**One-liner:** A content and community platform for the Infinite Leverage Blueprint — Dave's 14-part series on building a one-person agentic company.
**Repo:** `/Users/davepro/code-projects/infinite-leverage`
**Production:** Hosted under caiocoach.com/infinite-leverage (series) and potentially standalone
**Phase:** 1 (series live on caio-coach; standalone platform planned)

---

## Context paths

Read these in order before running any skill:

1. `/Users/davepro/code-projects/infinite-leverage/docs/product/product.md` (may not exist — check)
2. `/Users/davepro/code-projects/infinite-leverage/docs/product/epic-status.md` (may not exist — check)
3. `/Users/davepro/code-projects/caio-coach/site/src/lib/posts-data.ts` (the series lives in caio-coach's post data)

---

## Skills available

### Global
- `plan-my-day`
- `write-epics`
- `init-project` (use this if product docs are missing)

### Project-specific
- **series-audit** — review all 14 ILB episodes for completeness, consistency, and cross-links; flag gaps

---

## Key facts for PM judgment

- The 14-day Infinite Leverage Blueprint series is the core content asset
- Series currently rendered inside caio-coach at `/infinite-leverage` with a SeriesNav component
- If a standalone platform is planned, it would need its own repo, domain, and schema
- Uses the shared Supabase CRM (newsletter signups, inquiries)
- If product docs are missing, run `init-project` before planning
