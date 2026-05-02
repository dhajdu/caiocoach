# Project: CAIO Coach

**One-liner:** Content-led marketing site for Dave Hajdu's AI leadership coaching practice — blog, blueprints, coaching inquiry, and newsletter.
**Repo:** `/Users/davepro/code-projects/caio-coach/site`
**Production:** caiocoach.com
**Phase:** 2 (core site live, blueprint library sparse)

---

## Context paths

Read these in order before running any skill:

1. `/Users/davepro/code-projects/caio-coach/site/docs/product/product.md`
2. `/Users/davepro/code-projects/caio-coach/site/docs/product/epic-status.md`
3. `/Users/davepro/code-projects/caio-coach/site/docs/plans/claude-code-monitor.md`
4. `/Users/davepro/code-projects/caio-coach/site/src/lib/posts-data.ts` (blog post registry — scan for gaps)

---

## Skills available

### Global
- `plan-my-day`
- `write-epics`

### Project-specific
- **content-pipeline** — review the blog post schedule, identify gaps, and draft a publishing plan for the next 4 weeks
- **blueprint-audit** — scan `blueprints-data.ts` and identify which slugs are placeholders vs. live content; prioritize what to write next

---

## Key facts for PM judgment

- Founder's personal brand — tone and voice are the moat; don't let anything feel generic
- Epic 5 (Blueprint library) is the only incomplete epic — ~60% of slugs are placeholder "coming soon" stubs
- Blog posts are structured data in `src/lib/posts-data.ts`, not markdown files
- The `/publish` skill handles new blog post creation — use it, don't hand-write data
- Coaching inquiry → Supabase → Lark notification chain is fully wired and live
- Tech: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Supabase, Vercel
