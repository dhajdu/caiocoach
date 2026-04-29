# Data Flows — CAIO Coach

CAIO Coach is a stateless content site. It owns no database schema. It writes into the shared CRM via Supabase RPC, notifies the founder via Lark, and renders content from in-repo TypeScript data.

---

## Content data model

Blog posts and the *Infinite Leverage Blueprint* series live in `src/lib/posts-data.ts` as two structures:

- `POSTS` — array of post metadata (slug, title, summary, series, hero image, dates).
- `BLOCKS_BY_SLUG` — record mapping slug → array of typed content blocks.

Block types include `paragraph`, `heading`, `pull-quote`, `emphasis-box`, `stat-callout`, `image`, and others. The `BlockRenderer` component dispatches each block to its renderer.

Blueprint metadata lives in a parallel `blueprints-data.ts` file with category and office tags.

**Why structured data, not Markdown?** Authoring discipline. The schema enforces what blocks exist; the BlockRenderer enforces how they look. New posts are added via the `/publish` skill, which writes TypeScript directly.

---

## Form pipeline

Two forms write into the shared CRM:

| Form | Inquiry type | Where it lives |
|---|---|---|
| Coaching signup | `coaching` | Coaching landing page |
| Newsletter signup | `newsletter` | Inline component used across pages |

Both submit to a server action that calls the `submit_inquiry` RPC on the shared Supabase instance. The RPC creates or updates a `people` row (deduped by email) and inserts an `inquiries` row tagged with:

- `source_site = 'caiocoach.com'`
- `type` set per the form
- `source` set to a page-specific identifier where useful

After the RPC succeeds, a Lark webhook fires a card to the founder. If the Lark call fails, the inquiry is still recorded — Lark is non-fatal.

Canonical schema and RPC contract: [aio-website/docs/architecture/database-schema.md](../../../aio-website/docs/architecture/database-schema.md).

---

## What this site does NOT own

- The `people`, `inquiries`, `activity_log` tables (owned by ai-officer.com migrations).
- Inquiry-pipeline state transitions (handled in the AIO admin console).
- Email broadcast for the newsletter (TBD — likely an external tool).
- Retreat booking (lives at ai-officer.com).

---

## Cross-references

- Canonical schema: [aio-website/docs/architecture/database-schema.md](../../../aio-website/docs/architecture/database-schema.md).
- Multi-brand vision: [aio-website/docs/product/product.md](../../../aio-website/docs/product/product.md).
- Block schema and renderer: `src/components/BlockRenderer.tsx`, `src/lib/types.ts`.
