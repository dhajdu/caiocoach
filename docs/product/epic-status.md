# Epic Status — CAIO Coach

At-a-glance dashboard of the six epics in [`epics.md`](./epics.md). Status is grounded in a code-level audit (2026-04-29).

| # | Epic | Status | % | Evidence |
|---|---|---|---|---|
| 1 | Content publishing | ✅ | 100 | 20+ posts in `posts-data.ts` with full structured metadata. `BlockRenderer` handles 10+ rich block types. Blog index/detail pages wired with static generation. `/infinite-leverage` renders the 14-day series with internal nav. |
| 2 | Coaching marketplace | ✅ | 100 | `app/coaching/page.tsx` renders form. `CoachingSignupForm` posts to `/api/coaching-signup` → Supabase RPC `submit_inquiry` (`type='coaching'`) → Lark webhook fires. |
| 3 | Newsletter funnel | ✅ | 100 | `NewsletterForm` posts to `/api/newsletter-signup` → RPC with `type='newsletter'`, `source_site='caiocoach.com'` → Lark notification. Embedded on home and `/infinite-leverage`. |
| 4 | Multi-site CRM sync | ✅ | 100 | Both routes call shared `submit_inquiry` RPC with `p_source_site='caiocoach.com'`. `supabase.ts` initialised on shared instance. Schema ownership deferred to ai-officer.com. |
| 5 | Blueprint library | 🔄 | 40 | `blueprints-data.ts` defines 35+ blueprints with metadata and category enum. `/blueprints` and `[slug]/page.tsx` wired with static generation. **Gap:** ~60% of slugs render a "coming soon" stub. No `downloadUrl` field on type — downloads aren't tracked. |
| 6 | Retreat landing & redirect | ✅ | 100 | `/retreat/page.tsx` redirects to ai-officer.com/retreat. Home and coaching pages include retreat CTA. |

---

## Glyph legend

| Glyph | Meaning |
|---|---|
| ✅ | Shipped — fully wired, in production |
| 🔄 | In progress — partial wiring, gaps to close |
| 📋 | Planned — skeleton exists but not wired |
| 🆕 | Needs planning — not defined in code |

---

## Critical gaps flagged in audit

1. **Blueprint content sparse (Epic 5).** Catalog and detail-page infrastructure are ready, but most slugs are placeholders. No `downloadUrl` field exists on the type, so download tracking is also unbuilt.

That's it — the rest of the site is in solid shape.

---

## Audit basis

Code-level audit on 2026-04-29 across `src/app/`, `src/components/`, `src/lib/`, and `src/app/api/`. Percentages reflect production wiring, not test coverage.
