# AI Officer Institute — QA Acceptance Criteria & Test Plan
**Prepared by:** QA (Every.to methodology)
**Site under test:** https://aiofficer.vercel.app / ai-officer.com
**Audit date:** 2026-03-31
**Last updated:** 2026-03-31 — All P0 bugs resolved
**Source audited:** `/AIO/Website/` (full static HTML site)

---

## How to Read This Document

Issues are rated **P0 / P1 / P2 / P3** (P0 = ship blocker, P3 = polish). Each section has acceptance criteria — the pass/fail bar — followed by specific test cases. Known bugs found during this audit are noted with ⚠️.

---

## Section 1 — Navigation & Routing

### Acceptance Criteria

- AC-NAV-1: Every page in the site is reachable from at least one nav link or prev/next control. No orphan pages.
- AC-NAV-2: The topbar active state correctly highlights the section the user is currently in.
- AC-NAV-3: Prev/Next controls on course and micro-session pages navigate to the correct adjacent page in the correct sequence.
- AC-NAV-4: "Back to Hub" or equivalent escape route exists on all leaf pages.
- AC-NAV-5: All internal links resolve to 200 (no 404s).

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-NAV-01 | P0 | Click through all topbar links from every page depth (root, /blog/posts/, /micro-sessions/, /generative-ai/, /agentic-ai/) | Each link resolves, no 404 | — |
| T-NAV-02 | P0 | On Agentic AI Mission 6 page, verify a "Next" control exists | Should link to next logical destination | — |
| T-NAV-03 | P0 | On any micro-session page (e.g., deep-research.html), verify Prev/Next controls render | Controls should appear | — |
| T-NAV-04 | P1 | Verify `cowork-first-workflow.html` is not a dead/duplicate stub | Should either redirect or be a full page | — |
| T-NAV-05 | P1 | Verify `build-ai-team-paperclip.html` vs `build-your-ai-team-paperclip.html` — only one canonical version should exist | No duplicate content pages | — |
| T-NAV-06 | P2 | Visit `/blog/posts/[post].html` and verify topbar Blog link is `.active` | Active state applied | — |

### ⚠️ Known Bugs

**BUG-NAV-01 [P0] ✅ FIXED — nav.js PAGES array critically incomplete**
`shared/nav.js` drives all prev/next navigation site-wide. The PAGES array previously contained only 11 entries (4 GenAI missions, 5 Agentic missions, 2 micro-sessions). It now contains **27 entries**: all 4 GenAI missions, all **6** Agentic missions (added M6 "From Prototype to Production"), and all **17 micro-sessions** across Generative AI, Agentic AI, and Leadership tracks.

**BUG-NAV-02 [P1] — Duplicate/orphan micro-session file**
Both `micro-sessions/cowork-first-workflow.html` and `micro-sessions/claude-cowork-first-workflow.html` exist. nav.js references `cowork-first-workflow`. The richer, fully-built version appears to be `claude-cowork-first-workflow`. One of these is likely an orphan.

---

## Section 2 — Meta, SEO & Social Sharing

### Acceptance Criteria

- AC-SEO-1: Every page has a unique `<title>` that matches the format: `[Page Name] | AI Officer Institute`.
- AC-SEO-2: Every page has a `<meta name="description">` between 120–160 characters.
- AC-SEO-3: Every page has `og:title`, `og:description`, `og:url`, and `og:image` tags.
- AC-SEO-4: `og:image` must point to a file that actually exists on the server.
- AC-SEO-5: Every blog post page has a `<link rel="canonical">` tag.
- AC-SEO-6: All pages have `<meta name="robots" content="index, follow">`.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-SEO-01 | P0 | Fetch `/og-image.jpg` on the live domain | HTTP 200 | — |
| T-SEO-02 | P0 | Inspect og:image tag on each blog post page | Tag present with valid URL | — |
| T-SEO-03 | P1 | Paste each blog post URL into https://cards-dev.twitter.com/validator | Card renders with image | — |
| T-SEO-04 | P1 | Paste blog index URL into Facebook Sharing Debugger | Image appears correctly | — |
| T-SEO-05 | P1 | Check `<title>` tag on index.html | Should say "AI Officer Institute" not "AIO Labs" | — |
| T-SEO-06 | P2 | Validate JSON-LD on blog posts via Google Rich Results Test | No errors | — |
| T-SEO-07 | P2 | Check all course pages for `<meta name="description">` | All present | — |

### ⚠️ Known Bugs

**BUG-SEO-01 [P0] ✅ FIXED — og:image missing on all 13 blog posts**
Both `og:image` and `twitter:image` tags pointing to `https://www.ai-officer.com/og-image.jpg` have been added to all 13 blog posts, inserted immediately after the existing `og:url` tag.

**BUG-SEO-02 [P0] ✅ FIXED — og-image.jpg does not exist**
A branded 1200×630px JPEG (60KB) has been generated and saved to the site root (`/og-image.jpg`). Design uses the AIO navy/blue/mint color palette with headline "Lead the AI Era. Don't just use it." and "AI Officer Institute" wordmark.

**BUG-SEO-03 [P1] — Brand name inconsistency in page titles**
`index.html` `<title>` reads "Home — AIO Labs". All other pages say "AI Officer Institute". The topbar brand renders "AIO Labs" in HTML but schemas/meta say "AI Officer Institute". Pick one name and apply it consistently across all titles, metas, and schema markup.

**BUG-SEO-04 [P2] — No favicon**
No `favicon.ico`, `favicon.png`, or `<link rel="icon">` exists anywhere in the project. Browsers show a blank tab icon; bookmarks are unbranded.

---

## Section 3 — Typography & Visual Consistency

### Acceptance Criteria

- AC-TYPE-1: A single typeface pairing is used consistently: DM Sans (body) + JetBrains Mono (code/data) on all non-blog pages; Inter on blog pages (per style guide).
- AC-TYPE-2: Color tokens (`--navy`, `--blue`, `--magenta`, `--mint`) are used throughout. No rogue hardcoded hex values outside of the shared stylesheet.
- AC-TYPE-3: H1 → H2 → H3 heading hierarchy is never skipped on any page.
- AC-TYPE-4: Body copy is minimum 14px and meets WCAG AA contrast ratio (4.5:1) against its background.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-TYPE-01 | P1 | Load a course page and a micro-session page; inspect font in DevTools | DM Sans renders, no flash of fallback | — |
| T-TYPE-02 | P1 | Load a blog post; inspect font | Inter renders | — |
| T-TYPE-03 | P2 | Run axe or Lighthouse accessibility audit on a blog post | All text passes 4.5:1 contrast | — |
| T-TYPE-04 | P2 | Grep for hex values in inline `<style>` blocks across pages | Only design-token-matching values used | — |
| T-TYPE-05 | P2 | Inspect heading structure on each page type | No skipped heading levels | — |

### ⚠️ Known Bugs

**BUG-TYPE-01 [P2] — `--border-hover` CSS variable undefined in shared stylesheet**
`shared/styles.css` line 324 references `var(--border-hover)` in `.mission-nav-btn:hover` but `--border-hover` is never defined in the shared `:root`. It is only defined as a local token in individual page `<style>` blocks (e.g., index.html, micro-sessions pages). On any page that doesn't define it locally, hover borders on mission nav buttons silently fall back to `unset`, producing no visible border change on hover.

**BUG-TYPE-02 [P2] — Redundant CSS tokens in index.html**
`index.html` defines `--royal: #287BE8` and `--fuchsia: #287BE8` — both identical to `--blue`. These are unused tokens from an earlier design iteration. They add noise and could cause confusion.

**BUG-TYPE-03 [P3] — CSS token redefinition in local `<style>` blocks**
Many micro-session and course pages redefine `--text-primary`, `--text-secondary`, `--text-muted`, `--border`, etc. in their local `<style>` blocks — even though these are already defined in `shared/styles.css`. If the shared values ever change, local overrides may cause visual drift.

---

## Section 4 — Layout & Responsiveness

### Acceptance Criteria

- AC-LAY-1: All pages are usable at 375px (iPhone SE), 768px (iPad), and 1280px (laptop).
- AC-LAY-2: The fixed topbar does not obscure page content at any viewport width.
- AC-LAY-3: The sidebar on course pages collapses gracefully on mobile and does not force horizontal scroll.
- AC-LAY-4: No content is clipped or hidden on mobile that is visible on desktop.
- AC-LAY-5: Blog post content (`max-width: 720px`) is readable and not edge-to-edge on mobile.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-LAY-01 | P1 | Resize browser to 375px on a course mission page | Sidebar collapses or scrolls; no horizontal overflow | — |
| T-LAY-02 | P1 | Resize to 375px on blog post | Text readable, no edge-to-edge lines, topbar intact | — |
| T-LAY-03 | P1 | Resize to 375px on micro-session landing page | 2-column `.mission-body` grid stacks to 1-column | — |
| T-LAY-04 | P1 | Check topbar nav on 768px | Nav links don't overflow or wrap awkwardly | — |
| T-LAY-05 | P2 | Check data-callout 3-column grid on blog posts at 375px | Stacks to 1-column | — |
| T-LAY-06 | P2 | Verify hero-card `.hero-inner` 2-column layout on index.html at 768px | Stacks gracefully | — |

---

## Section 5 — Interactive Components

### Acceptance Criteria

- AC-INT-1: All filter tabs (on the micro-sessions index) correctly filter the card grid and retain state on click.
- AC-INT-2: The hero video play button on index.html triggers the intended action (opens video or navigates).
- AC-INT-3: All CTA buttons and course navigation links are keyboard-accessible (Tab + Enter).
- AC-INT-4: Hover states are visually distinct and consistent across all card types.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-INT-01 | P1 | Click each filter tab on micro-sessions/index.html | Cards filter correctly; tab shows active state | — |
| T-INT-02 | P1 | Click hero video play button on index.html | Video plays or correct modal/link opens | — |
| T-INT-03 | P1 | Tab through all interactive elements on a mission page | Focus ring visible throughout; no focus traps | — |
| T-INT-04 | P2 | Hover over `.brief-card`, `.page-nav-link`, `.mission-nav-btn` | Border/shadow changes as designed | — |
| T-INT-05 | P2 | Verify `.upcoming-tag-dot` pulse animation renders on micro-sessions index | Pulsing dot visible | — |

---

## Section 6 — Content Completeness

### Acceptance Criteria

- AC-CON-1: All blog posts listed in `blog/index.html` exist as files and load without error.
- AC-CON-2: No blog post card links to a page that returns 404.
- AC-CON-3: All micro-session sub-pages (video, slides, prompts, recap, resources) exist for every session.
- AC-CON-4: All images referenced in HTML `<img>` tags or CSS `background-image` properties resolve to HTTP 200.
- AC-CON-5: The topbar stats (streak, XP, avatar) either display real user data or are clearly marked as placeholder UI.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-CON-01 | P0 | Crawl all links in blog/index.html; check each post URL | All return 200 | — |
| T-CON-02 | P1 | For each micro-session, verify all 5 sub-pages exist: -video, -slides, -prompts, -recap, -resources | All 5 files exist per session | — |
| T-CON-03 | P1 | Run a link checker (e.g., `lychee` or `broken-link-checker`) across the full site | Zero 404s | — |
| T-CON-04 | P1 | Inspect all `<img>` src values for WebP images in blog posts | All images load; no broken img tags | — |
| T-CON-05 | P2 | Review hardcoded topbar stats: `🔥 7`, `1,240 xp`, `DH` avatar | Confirm these are intentional static UI or flag for dynamic data | — |

### ⚠️ Known Bugs

**BUG-CON-01 [P2] — Topbar user stats are hardcoded across all pages**
Every page displays `🔥 7`, `1,240 xp`, and the `DH` avatar. These values are hardcoded in the HTML and never change. If this is meant to reflect real user progress, it is misleading. If it is placeholder UI, it should be visually marked as such or removed until real data is available.

---

## Section 7 — Performance

### Acceptance Criteria

- AC-PERF-1: Lighthouse Performance score ≥ 85 on desktop, ≥ 70 on mobile.
- AC-PERF-2: Largest Contentful Paint (LCP) ≤ 2.5s on a simulated 4G connection.
- AC-PERF-3: All images are served as WebP where possible.
- AC-PERF-4: Google Fonts are loaded with `display=swap` to prevent render-blocking.

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-PERF-01 | P1 | Run Lighthouse on index.html, a blog post, and a mission page | Performance ≥ 85 desktop | — |
| T-PERF-02 | P1 | Check all Google Fonts `<link>` tags | All include `display=swap` | — |
| T-PERF-03 | P2 | Verify blog post images are `.webp` format | All images are WebP | — |
| T-PERF-04 | P2 | Check no render-blocking scripts in `<head>` without `async` or `defer` | No blocking JS | — |

---

## Section 8 — Accessibility (WCAG 2.1 AA)

### Acceptance Criteria

- AC-A11Y-1: All images have descriptive `alt` text (or `alt=""` for decorative images).
- AC-A11Y-2: All interactive elements have visible focus states.
- AC-A11Y-3: Color is never the sole means of conveying information.
- AC-A11Y-4: The page `lang` attribute is set to `"en"` on all pages.
- AC-A11Y-5: No ARIA attributes are used incorrectly (e.g., `aria-label` on non-interactive elements).

### Test Cases

| ID | Priority | Test | Expected | Status |
|----|----------|------|----------|--------|
| T-A11Y-01 | P1 | Run axe DevTools on index.html, a blog post, a mission page | Zero critical violations | — |
| T-A11Y-02 | P1 | Verify all `<img>` tags have `alt` attributes | All images have alt | — |
| T-A11Y-03 | P1 | Tab through the entire homepage | Every interactive element reachable and has visible focus | — |
| T-A11Y-04 | P2 | Check color contrast of `var(--text-muted)` (#6b7194) on `var(--surface)` (#f4f6fa) | ≥ 4.5:1 | — |
| T-A11Y-05 | P2 | Check contrast of `rgba(255,255,255,0.45)` topbar nav links on navy background | ≥ 4.5:1 | — |

---

## Bug Priority Summary

| Bug ID | Priority | Section | Description |
|--------|----------|---------|-------------|
| BUG-NAV-01 | **P0** ✅ FIXED | Navigation | nav.js PAGES array now has all 27 entries (was 11). Added 16 micro-sessions + Agentic AI M6. |
| BUG-SEO-01 | **P0** ✅ FIXED | SEO | og:image + twitter:image added to all 13 blog posts. |
| BUG-SEO-02 | **P0** ✅ FIXED | SEO | og-image.jpg (1200×630, 60KB) created and deployed to site root. |
| BUG-NAV-02 | P1 | Navigation | Duplicate/orphan micro-session file (cowork-first-workflow) |
| BUG-SEO-03 | P1 | SEO | Brand name "AIO Labs" vs "AI Officer Institute" inconsistency |
| BUG-SEO-04 | P2 | SEO | No favicon |
| BUG-TYPE-01 | P2 | Typography | `--border-hover` undefined in shared CSS; hover state broken on some pages |
| BUG-CON-01 | P2 | Content | Topbar stats hardcoded (🔥 7, 1,240 xp, DH) |
| BUG-TYPE-02 | P2 | CSS | Redundant `--royal` / `--fuchsia` tokens in index.html |
| BUG-TYPE-03 | P3 | CSS | Token redefinition in local `<style>` blocks across many pages |

---

## Recommended Fix Order

~~1. **Fix BUG-NAV-01** — ✅ Done (2026-03-31)~~
~~2. **Create og-image.jpg + add og:image to all blog posts** — ✅ Done (2026-03-31)~~
3. **Resolve brand name** — pick "AI Officer Institute" and apply it universally across all page `<title>` tags and topbar brand.
4. **Add favicon** — one file, immediate visual professionalism.
5. **Move `--border-hover` into shared CSS `:root`** — one-line fix, eliminates silent style failures.

---

*This document should be updated as bugs are resolved. Re-run Lighthouse and axe on every major deploy.*
