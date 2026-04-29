# QA Plan — CAIO Coach

Tiered test plan. CAIO Coach is content-heavy and stateless — most quality risk lives in form delivery, content rendering, and the cross-brand CRM contract.

---

## Tier 1 — Smoke (every deploy)

- Homepage returns 200; the founder's hero copy renders.
- A representative blog post URL returns 200 and the BlockRenderer paints all block types without errors.
- The blueprint catalog page renders all blueprint cards.
- The coaching landing page renders the inquiry form.

---

## Tier 2 — Form pipeline (pre-release)

End-to-end form flows.

- **Coaching signup.** Submit form with valid input → 200 → row appears in shared `inquiries` with `type = 'coaching'`, `source_site = 'caiocoach.com'` → Lark card fires to founder.
- **Newsletter signup.** Submit form → 200 → row appears in shared `inquiries` with `type = 'newsletter'`.
- **Validation.** Empty email, invalid email, oversized message — all rejected with field-level error and no DB write.

---

## Tier 3 — Cross-brand CRM contract

The shared schema is owned by aio-website. This tier guards against drift.

- The RPC payload shape matches the canonical `submit_inquiry` signature in [aio-website/supabase/002_add_date_requested.sql](../../../aio-website/supabase/002_add_date_requested.sql).
- New required fields in the canonical RPC fail this site's submit; surface that as a deploy-blocking error.
- `source_site` is always `'caiocoach.com'` (never default).

---

## Tier 4 — Content rendering

- Every block type in `BLOCKS_BY_SLUG` renders without console errors on at least one published post.
- Series navigation links resolve to the right next/previous post.
- Hero images and inline images load (no 404s).

---

## Tier 5 — Brand discipline

- No em dashes appear in any rendered post (per [`docs/brand/design-rules.md`](../brand/design-rules.md)).
- Container widths and padding match the brand spec.
- Colour tokens used in components match the brand palette.

---

## Quality gates

| Gate | When | Failure mode |
|---|---|---|
| Tier 1 smoke | Every deploy | Block merge to main |
| Tier 2 forms | Pre-release | Block release |
| Tier 3 contract | After AIO schema migration | Manual sign-off required |
| Tier 4 content | After BlockRenderer changes | Manual sign-off required |
| Tier 5 brand | Pre-release of new content | Editorial review |

---

## Sequencing

Tier 1 runs automatically on PR. Tiers 2–4 run pre-release. Tier 5 is part of editorial review for new posts and blueprints.
