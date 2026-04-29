# Epics — CAIO Coach

Six thematic epics. Status is tracked separately in [`epic-status.md`](./epic-status.md).

---

## Epic 1 — Content publishing

**Thesis:** A reader can find any of the founder's writing in two clicks and read it in a layout designed for long-form ideas.

**Bundle:** Blog index, individual post pages, the *Infinite Leverage Blueprint* series, blueprint resource pages.

**Mechanism:** Posts are structured TypeScript data in `src/lib/posts-data.ts` (POSTS metadata + BLOCKS_BY_SLUG content blocks). The `BlockRenderer` component handles rich block types (pull-quote, emphasis-box, stat-callout, etc.). Series navigation lives in `SeriesNav`.

**Success criterion:** New posts publish via the `/publish` skill in under 10 minutes. Reader pageviews per post trend up over time. Blueprint download rates are measurable.

---

## Epic 2 — Coaching marketplace

**Thesis:** A senior buyer can request a coaching session in under a minute, and the founder gets the inquiry within seconds.

**Bundle:** Coaching landing page, CoachingSignupForm, server action that hits the shared CRM, Lark notification to the founder.

**Mechanism:** Form submit → server action → `submit_inquiry` RPC into Supabase → `inquiries` row with `type = 'coaching'`, `source_site = 'caiocoach.com'` → Lark webhook fires the founder a card.

**Success criterion:** Median time from form submit to founder reply is under 24 hours. No inquiry gets lost between form and Lark.

---

## Epic 3 — Newsletter funnel

**Thesis:** Convert readers into 50/50 Memo subscribers and feed the long-game audience.

**Bundle:** Newsletter signup component, server action, list capture in shared CRM, downstream broadcast tool.

**Mechanism:** Email entry → server action → `submit_inquiry` RPC with `type = 'newsletter'` → row appears in the shared `inquiries` table. The downstream send/broadcast pipeline (Resend / external broadcast tool) is out of scope for this site and currently TBD.

**Success criterion:** Subscriber count is measured per month. Each new memo arrives in subscriber inboxes without manual list export.

---

## Epic 4 — Multi-site CRM sync

**Thesis:** Every contact captured here is queryable alongside contacts from the sister brands so the founder can see one history per person.

**Bundle:** `source_site` tagging, shared `people` + `inquiries` schema, no local DB writes that conflict with the canonical schema.

**Mechanism:** This site never owns schema. All writes go through the shared `submit_inquiry` RPC; the `source_site` column flags origin. The schema is owned by ai-officer.com — see [aio-website/docs/architecture/database-schema.md](../../../aio-website/docs/architecture/database-schema.md).

**Success criterion:** Every inquiry is tagged correctly. No drift between this site's RPC payload and the canonical schema. Sister brands' admin UI can see CAIO Coach inquiries without code changes here.

---

## Epic 5 — Blueprint library

**Thesis:** Practical frameworks across four offices (Leverage, Talent, Operations, Innovation) that turn readers into evangelists and inquiries.

**Bundle:** Blueprint catalog page, individual blueprint detail pages, downloadable PDFs (or links), category filters.

**Mechanism:** Blueprint metadata in `src/lib/blueprints-data.ts`. Categories drive the filter UI. Each blueprint links to a download or external checkout URL — no native commerce here today.

**Success criterion:** Blueprint downloads are tracked. A blueprint download converts to a memo subscribe or coaching inquiry at a measurable rate.

---

## Epic 6 — Retreat landing & redirect

**Thesis:** Drive retreat-curious traffic from the coaching brand to the AI Officer Institute retreat at ai-officer.com without confusing the visitor.

**Bundle:** Retreat call-out on home, dedicated retreat page that primarily redirects.

**Mechanism:** `app/retreat/page.tsx` redirects to ai-officer.com/events/infinite-leverage-retreat (or hosts a thin landing that links there). No native booking.

**Success criterion:** Retreat clicks from caiocoach.com are measurable in the AI Officer analytics. No retreat purchase logic lives in this site.
