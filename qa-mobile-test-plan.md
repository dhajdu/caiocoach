# AI Officer Institute — Mobile Responsive QA Test Plan
**Prepared by:** QA (Every.to methodology)
**Site under test:** https://aiofficer.vercel.app / ai-officer.com
**Audit date:** 2026-03-31
**Scope:** All pages across all site sections

---

## How to Read This Document

Issues are rated **P0 / P1 / P2 / P3** (P0 = ship blocker, P3 = polish). Test cases cover three device classes: **Mobile** (375px — iPhone SE / standard iPhone), **Tablet** (768px — iPad portrait), and **Desktop** (1280px — baseline). All testing should be done in Chrome DevTools device emulation and on a real device where noted.

---

## Section 1 — Topbar Navigation

### Acceptance Criteria

- AC-MOB-NAV-1: On mobile (≤900px), navigation links are hidden and replaced by a functional hamburger menu or equivalent pattern. Users can reach any section of the site.
- AC-MOB-NAV-2: The topbar brand logo is always visible and tappable on all breakpoints.
- AC-MOB-NAV-3: The topbar does not overflow horizontally or push content off-screen at any viewport width.
- AC-MOB-NAV-4: Topbar right panel (stats, avatar) is hidden or gracefully collapsed on mobile so it does not crowd the brand logo.

### Test Cases

| ID | Priority | Breakpoint | Page | Test | Expected | Status |
|----|----------|------------|------|------|----------|--------|
| T-MOB-NAV-01 | **P0** | 375px | All | Resize to 375px. Observe topbar. | Nav links hidden. A hamburger menu or equivalent allows full navigation. | ⚠️ FAIL — nav hides but no replacement menu exists on any page. |
| T-MOB-NAV-02 | **P0** | 375px | certification, coaching, micro-sessions, mission pages | Resize to 375px. Observe topbar. | topbar-right (AI Buddy, 🔥 7, 1,240 xp, DH avatar) hidden OR reflowed cleanly. | ⚠️ FAIL — topbar-right stays visible on all pages except index.html, likely causing topbar overflow. |
| T-MOB-NAV-03 | P1 | 375px | All | Tap the brand logo. | Navigates to index.html. | — |
| T-MOB-NAV-04 | P1 | 768px | All | Resize to 768px. | Topbar layout holds. No overflow, no truncation. | — |
| T-MOB-NAV-05 | P2 | 375px | micro-sessions/index.html | Resize to 375px. | topbar-nav hides. | ⚠️ LIKELY FAIL — micro-sessions/index.html @media block does not include `.topbar-nav { display: none }` rule. |

### Known Bugs

| ID | Priority | Description | Affected Pages |
|----|----------|-------------|----------------|
| BUG-MOB-001 | **P0** | No hamburger menu or mobile navigation pattern. When `.topbar-nav` hides at 900px, there is zero replacement. Users on mobile cannot navigate between Certification, Coaching, Micro-Sessions, Blog, or My Team. | All pages |
| BUG-MOB-002 | **P1** | `.topbar-right` (stats + avatar + AI Buddy button) is only hidden on `index.html`. All other pages leave it visible at 375px, crowding the topbar beside the brand logo. | All pages except index.html |
| BUG-MOB-003 | **P2** | `micro-sessions/index.html` @media block is missing `.topbar-nav { display: none }`. Nav links may remain visible at 900px on this page. | micro-sessions/index.html |

---

## Section 2 — Homepage (index.html)

### Acceptance Criteria

- AC-MOB-HOME-1: Hero card (progress summary) stacks vertically on mobile with no truncation.
- AC-MOB-HOME-2: All grid sections (Up Next cards, track cards, leaderboard) collapse to single-column on mobile.
- AC-MOB-HOME-3: The AI Buddy FAB does not cover primary CTAs or critical content at 375px.
- AC-MOB-HOME-4: Stats row (Missions, CAIO Coaching, Rank) wraps or stacks cleanly.

### Test Cases

| ID | Priority | Breakpoint | Test | Expected | Status |
|----|----------|------------|------|----------|--------|
| T-MOB-HOME-01 | P1 | 375px | Load index.html. Check hero card. | `.hero-inner { flex-direction: column }`. h1 wraps cleanly. No horizontal scroll. | — |
| T-MOB-HOME-02 | P1 | 375px | Check Up Next cards and track cards. | `.grid-2, .grid-3 { grid-template-columns: 1fr }`. Cards stack vertically. | — |
| T-MOB-HOME-03 | P1 | 375px | Check stats row (Missions / CAIO Coaching / Rank). | `.stats-row { flex-direction: column }`. No truncation. | — |
| T-MOB-HOME-04 | P2 | 375px | Scroll to bottom. Check AI Buddy FAB (bottom-right, fixed). | FAB visible and accessible. Does not obscure the last card or footer. | — |
| T-MOB-HOME-05 | P2 | 375px | Open AI Buddy panel (tap FAB). | Panel opens. Chat input accessible above keyboard. No content cut off. | — |
| T-MOB-HOME-06 | P3 | 375px | Check hero video element. | `.hero-video { display: none }` at 900px. No broken image or whitespace gap. | — |

---

## Section 3 — Certification Journey (certification.html)

### Acceptance Criteria

- AC-MOB-CERT-1: Mission grid (`mgrid`) collapses to single-column on mobile.
- AC-MOB-CERT-2: Support cards collapse to single-column on mobile.
- AC-MOB-CERT-3: Journey hero (headline + CTA) stacks cleanly at 375px.
- AC-MOB-CERT-4: Progress badge / certification status block does not overflow.

### Test Cases

| ID | Priority | Breakpoint | Test | Expected | Status |
|----|----------|------------|------|----------|--------|
| T-MOB-CERT-01 | P1 | 375px | Load certification.html. Check mission grid. | `mgrid { grid-template-columns: 1fr }`. All mission cards stack. | — |
| T-MOB-CERT-02 | P1 | 375px | Check support cards (Micro-Sessions, CAIO Coaching). | `support-grid { grid-template-columns: 1fr }`. Cards stack. | — |
| T-MOB-CERT-03 | P1 | 375px | Check journey hero section. | `flex-direction: column`. h1 font-size 26px. No text truncation. | — |
| T-MOB-CERT-04 | P2 | 375px | Check page-main top padding. | `padding-top: 70px` clears the fixed topbar (56px). Content not obscured. | — |
| T-MOB-CERT-05 | P2 | 768px | Resize to 768px (tablet). Check mission grid. | Grid holds 2-column layout comfortably, or collapses cleanly. | — |

---

## Section 4 — CAIO Coaching (coaching.html)

### Acceptance Criteria

- AC-MOB-COACH-1: Coaching hero collapses to single-column on mobile (countdown widget hidden).
- AC-MOB-COACH-2: Coaching body (main column + sidebar) stacks on mobile.
- AC-MOB-COACH-3: Session filter pills (All / Agentic AI / Generative AI / Leadership) are scrollable or wrap on small screens.
- AC-MOB-COACH-4: Session cards display cleanly without horizontal overflow.

### Test Cases

| ID | Priority | Breakpoint | Test | Expected | Status |
|----|----------|------------|------|----------|--------|
| T-MOB-COACH-01 | P1 | 375px | Load coaching.html. Check hero. | `coaching-hero { grid-template-columns: 1fr }`. Countdown hidden. | — |
| T-MOB-COACH-02 | P1 | 375px | Check coaching body (main + sidebar). | `coaching-body { grid-template-columns: 1fr }`. Sidebar stacks below. | — |
| T-MOB-COACH-03 | P1 | 375px | Check session filter pills row. | Pills wrap or scroll horizontally without clipping. No pill cut off by viewport edge. | — |
| T-MOB-COACH-04 | P2 | 375px | Check session cards grid. | Cards stack single-column. Student avatar, name, arrow all visible. | — |
| T-MOB-COACH-05 | P2 | 375px | Check sidebar panel (Book a Session). | Sidebar stacks below grid. `position: static`. No content hidden. | — |

---

## Section 5 — Mission Pages (generative-ai/, agentic-ai/)

### Acceptance Criteria

- AC-MOB-MISS-1: Mission body (content + 300px sidebar) collapses to single-column on mobile.
- AC-MOB-MISS-2: Mission nav strip (prev/next) stacks cleanly on mobile.
- AC-MOB-MISS-3: Challenge grid collapses to single-column on mobile.
- AC-MOB-MISS-4: Prompt pages, textbook pages, and slides pages display without horizontal scroll at 375px.

### Test Cases

| ID | Priority | Breakpoint | Page | Test | Expected | Status |
|----|----------|------------|------|------|----------|--------|
| T-MOB-MISS-01 | P1 | 375px | generative-ai/mission-1.html | Check mission-body grid. | `grid-template-columns: 1fr`. Sidebar stacks below content. | — |
| T-MOB-MISS-02 | P1 | 375px | generative-ai/mission-1.html | Check mission-nav-strip (prev/next). | `grid-template-columns: 1fr`. Stacks vertically. No overflow. | — |
| T-MOB-MISS-03 | P1 | 375px | generative-ai/mission-1.html | Check challenge-grid. | `grid-template-columns: 1fr`. Cards stack. | — |
| T-MOB-MISS-04 | P1 | 375px | generative-ai/mission-1-prompts.html | Load prompts page. Check layout. | Page renders within viewport. No horizontal scroll. | — |
| T-MOB-MISS-05 | P1 | 375px | generative-ai/mission-1-textbook.html | Load textbook. Check typography and any tables/code blocks. | Text wraps. Any pre/code blocks scroll horizontally within their container (not the page). | — |
| T-MOB-MISS-06 | P2 | 375px | generative-ai/mission-1-slides.html | Load slides page. Check slide layout. | Slide content fits within viewport. No horizontal page scroll. | — |
| T-MOB-MISS-07 | P2 | 375px | agentic-ai/mission-1.html | Repeat T-MOB-MISS-01 through 03 for Agentic AI track. | Same pass criteria. | — |

---

## Section 6 — Micro-Sessions

### Acceptance Criteria

- AC-MOB-MICRO-1: Sessions hub grid collapses to single-column on mobile.
- AC-MOB-MICRO-2: Hub body (main + sidebar) stacks on mobile; sidebar loses sticky positioning.
- AC-MOB-MICRO-3: Individual micro-session pages (main, recap, slides, resources, quiz) all display without horizontal scroll at 375px.
- AC-MOB-MICRO-4: Video embeds scale proportionally (aspect ratio maintained, no overflow).

### Test Cases

| ID | Priority | Breakpoint | Page | Test | Expected | Status |
|----|----------|------------|------|------|----------|--------|
| T-MOB-MICRO-01 | P1 | 375px | micro-sessions/index.html | Check sessions grid. | `sessions-grid { grid-template-columns: 1fr }`. Session cards stack. | — |
| T-MOB-MICRO-02 | P1 | 375px | micro-sessions/index.html | Check hub body (main + sidebar). | `hub-body { grid-template-columns: 1fr }`. Sidebar stacks below. | — |
| T-MOB-MICRO-03 | P1 | 375px | micro-sessions/deep-research.html | Load main session page. Check layout. | Content fits viewport. No horizontal scroll. | — |
| T-MOB-MICRO-04 | P1 | 375px | micro-sessions/deep-research.html | Check video embed (if present). | Embed scales to 100% width. Aspect ratio maintained (16:9). | — |
| T-MOB-MICRO-05 | P2 | 375px | micro-sessions/deep-research-recap.html | Load recap page. Check layout. | Content fits viewport. Challenge block readable. | — |
| T-MOB-MICRO-06 | P2 | 375px | micro-sessions/deep-research-slides.html | Load slides page. | Slides fit viewport. No horizontal overflow. | — |
| T-MOB-MICRO-07 | P3 | 375px | micro-sessions/deep-research-quiz.html | Load quiz page. Answer options render fully. | Tap targets ≥44px. No answer text truncated. | — |

---

## Section 7 — Blog

### Acceptance Criteria

- AC-MOB-BLOG-1: Blog index sidebar hides on mobile; full-width layout activates.
- AC-MOB-BLOG-2: Blog post typography (DM Sans body, line length) is readable at 375px. No overflow.
- AC-MOB-BLOG-3: Blog post hero image scales correctly. No cropping or overflow.
- AC-MOB-BLOG-4: Pull-quote blocks, callout boxes, and any inline tables fit within viewport.

### Test Cases

| ID | Priority | Breakpoint | Page | Test | Expected | Status |
|----|----------|------------|------|------|----------|--------|
| T-MOB-BLOG-01 | P1 | 375px | blog/index.html | Load index. Check `.sidebar { display: none }`. | Sidebar hidden. Main column expands to full width. | — |
| T-MOB-BLOG-02 | P1 | 375px | blog/index.html | Check topbar-nav. | Nav hides. ⚠️ No mobile menu — same BUG-MOB-001 applies. | ⚠️ FAIL (same as BUG-MOB-001) |
| T-MOB-BLOG-03 | P1 | 375px | blog/posts/four-offices-of-the-future.html | Load post. Read body copy. | Font size ≥16px. Line length comfortable. No horizontal scroll. | — |
| T-MOB-BLOG-04 | P2 | 375px | blog/posts/four-offices-of-the-future.html | Check hero / featured image. | Image scales to 100% width. No overflow. | — |
| T-MOB-BLOG-05 | P2 | 375px | blog/posts/ (any post with tables or callouts) | Check rich content blocks. | Callout boxes wrap. Tables scroll horizontally within container. | — |
| T-MOB-BLOG-06 | P3 | 375px | blog/index.html | Check `.fw-grid, .compare-block` collapse. | Both collapse to `grid-template-columns: 1fr`. | — |

---

## Section 8 — Touch & Interaction

### Acceptance Criteria

- AC-MOB-TOUCH-1: All interactive tap targets (buttons, cards, links, nav items) meet the 44×44px minimum touch target size.
- AC-MOB-TOUCH-2: No interactive element is partially obscured by the fixed topbar or AI Buddy FAB.
- AC-MOB-TOUCH-3: The AI Buddy chat panel is fully usable on mobile (input not covered by keyboard, send button reachable).
- AC-MOB-TOUCH-4: Hover states do not substitute for tap states — all interactive affordances are visible without hover.

### Test Cases

| ID | Priority | Breakpoint | Test | Expected | Status |
|----|----------|------------|------|----------|--------|
| T-MOB-TOUCH-01 | P1 | 375px | Inspect topbar brand link in DevTools. Check tap target height. | ≥44px tall. | — |
| T-MOB-TOUCH-02 | P1 | 375px | Check primary CTAs on index, certification, coaching pages. | Buttons ≥44px tall. Padding sufficient. | — |
| T-MOB-TOUCH-03 | P1 | 375px | Scroll to any CTA near the bottom of a page. Check FAB overlap. | FAB (`bottom: 28px, right: 28px`) does not cover any primary button. | — |
| T-MOB-TOUCH-04 | P2 | 375px | Tap AI Buddy FAB. Type a message in the input field. Observe keyboard behavior. | Input scrolls into view above keyboard. Send button tappable. | — |
| T-MOB-TOUCH-05 | P2 | 375px | Check mission card and session card tap targets. | Full card is tappable (anchor wraps entire card). No dead zones. | — |
| T-MOB-TOUCH-06 | P3 | Real device | Navigate key pages on a physical iPhone (375px). | No unintended zoom on input focus. Text does not scale unexpectedly. | — |

---

## Section 9 — Typography & Readability

### Acceptance Criteria

- AC-MOB-TYPE-1: Body text is ≥15px (ideally 16px) on mobile to prevent iOS auto-zoom on focus.
- AC-MOB-TYPE-2: Headings use `clamp()` or mobile-specific font-size overrides to prevent overflow at 375px.
- AC-MOB-TYPE-3: No text is truncated by overflow: hidden without intentional ellipsis.
- AC-MOB-TYPE-4: Letter-spacing on small caps / eyebrow labels does not cause overflow at narrow widths.

### Test Cases

| ID | Priority | Breakpoint | Test | Expected | Status |
|----|----------|------------|------|----------|--------|
| T-MOB-TYPE-01 | P1 | 375px | Inspect body text on mission and blog pages. | `font-size ≥ 15px`. No auto-zoom on iOS when tapping inputs. | — |
| T-MOB-TYPE-02 | P1 | 375px | Check h1 on homepage, certification, coaching heroes. | Hero h1 uses `font-size: 26px` or `clamp()`. No overflow past viewport. | — |
| T-MOB-TYPE-03 | P2 | 375px | Check `.hero-eyebrow` on all pages using it. | White text + mint line renders without wrapping incorrectly or being clipped. | — |
| T-MOB-TYPE-04 | P3 | 375px | Check section-pill labels, badge text, and upnext-eyebrow labels. | All uppercase small-text elements wrap or stay within their container. | — |

---

## Summary: Bug Register

| ID | Priority | Description | Affected | Recommended Fix |
|----|----------|-------------|----------|-----------------|
| BUG-MOB-001 | **P0** | No mobile navigation — `.topbar-nav` hides at 900px with no hamburger or replacement. Site is unnavigable on mobile. | All pages | Add hamburger button to topbar; toggle a mobile nav drawer via JS |
| BUG-MOB-002 | **P1** | `.topbar-right` (stats + avatar + AI Buddy) only hides on `index.html`. Stays visible on all other pages at 375px, likely causing topbar overflow. | All pages except index.html | Add `.topbar-right { display: none }` to shared @media block, or add to each page's local @media |
| BUG-MOB-003 | **P2** | `micro-sessions/index.html` @media block missing `.topbar-nav { display: none }`. | micro-sessions/index.html | Add to that page's @media block |
| BUG-MOB-004 | **P2** | Single breakpoint at 900px only. No 768px (tablet), 480px (large phone), or 375px (iPhone) breakpoints. Layouts may work at 850px but fail at 375px. | All pages | Add targeted 375px and 768px breakpoints for critical layouts |
| BUG-MOB-005 | **P2** | AI Buddy FAB (`bottom: 28px, right: 28px`) is fixed-position with no mobile offset adjustment. May cover bottom CTAs or nav elements at 375px. | index.html (FAB only appears here) | Test on real device; adjust `bottom` value if FAB obscures content |
| BUG-MOB-006 | **P3** | Slide pages (`*-slides.html`) have minimal mobile breakpoint coverage. Slide card layouts may overflow at 375px. | All *-slides.html pages | Audit each slides template; add `max-width: 100%; overflow-x: auto` to slide containers |

---

## Recommended Fix Order

**Sprint 1 — Ship blockers**
1. BUG-MOB-001: Mobile navigation (hamburger menu) — affects every page, every user
2. BUG-MOB-002: Hide topbar-right on mobile globally (one shared CSS rule, 10-minute fix)

**Sprint 2 — Core UX**
3. BUG-MOB-003: Fix micro-sessions/index.html @media block (5-minute fix)
4. BUG-MOB-004: Add 375px breakpoints for any layout that breaks below 900px
5. BUG-MOB-005: Test FAB on real device, adjust if needed

**Sprint 3 — Polish**
6. BUG-MOB-006: Audit and fix slide page layouts

---

## Test Devices & Environments

| Device | Viewport | Priority | Notes |
|--------|----------|----------|-------|
| iPhone 16 (or SE) | 375px | Required | Real device — test keyboard, scroll, and zoom behaviour |
| iPhone 14 Pro | 393px | Recommended | Most common iOS viewport |
| iPad portrait | 768px | Required | Tablet break point |
| Chrome DevTools — Galaxy S20 | 360px | Required | Android baseline |
| Chrome DevTools — 900px | 900px | Required | Breakpoint boundary |
| Chrome DevTools — 899px | 899px | Required | One pixel below breakpoint — confirms trigger |

---

*Last updated: 2026-03-31*
