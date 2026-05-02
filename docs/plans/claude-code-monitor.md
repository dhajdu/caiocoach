# Claude Code Monitor — Portfolio Status System

**Started:** 2026-05-02  
**Owner:** Dave Hajdu  
**Output:** `caio-coach/site/public/claude-code-monitor.html`

---

## What this is

A single static HTML page that gives Dave a real-time view of every project in his portfolio — what's shipping, what needs his attention, and where to go to drill in. Lives on the caio-coach site, publicly accessible so Dave can follow along from anywhere.

---

## What we did today (2026-05-02)

### Portfolio docs standardized

Every project now has a consistent `docs/` structure:

```
docs/
  plans/              ← cross-functional plans (marketing, engineering, ops)
  product/
    epic-status.md    ← single source of truth for epic progress
  engineering/
    changes/          ← engineering PR-level audit trail
  architecture/
  brand/
  features/
  qa/
  operations/
```

Projects covered: aio-pad, aio-website, bhutan, caio-coach, dave-hajdu, edge8, eo-vietnam, fab-four, forever-app, infinite-leverage, leadership-coach, longevity-coach, mahjong-tarot.

### Per-project status pages created

Static `project-status.html` files built for:
- `bhutan/public/project-status.html`
- `eo-vietnam/public/project-status.html`
- `forever-app/website/public/project-status.html`
- `mahjong-tarot/website/public/project-status.html`

Design system: warm cream background, gold accent, serif headings, pipeline glyphs (`● ◐ ○ ↻`). Matches `longevity-coach/public/project-status.html`.

### Active project plans written

| Project | Plan | Location |
|---|---|---|
| forever-app | Marketing site (6 waves) | `docs/plans/marketing-site.md` |
| forever-app | Multi-recorder data model | `docs/plans/multi-recorder.md` |
| bhutan | Site initialization (5 waves) | `docs/plans/site-initialization.md` |
| eo-vietnam | Staff pipeline + RLS + email (6 waves) | `docs/plans/staff-pipeline-rls-email.md` |

### Blocking questions answered

All open questions for forever-app, bhutan, and eo-vietnam were answered by Dave and folded into the plans above.

---

## What the monitor will be

### Design

Static HTML — same design system as project-status pages. Served from `public/claude-code-monitor.html`. No Next.js build dependency; agents overwrite it directly.

### Layout

1. **Hero stats** — total projects, epics in flight, items needing Dave's review
2. **Needs You queue** — aggregated `## Needs Human Review` items from all `epic-status.md` files, tagged P1/P2/P3
3. **Portfolio table** — one row per project: name, phase, epic pipeline glyphs, last updated, links to production + project-status.html
4. **Project cards** — expandable detail per project with epic breakdown

### Update triggers

- **Agent-triggered:** PM agent rewrites the HTML at the end of every task that touches `epic-status.md`
- **Morning cron (5:30am):** Sweeps all projects, regenerates the full page

### Data source

`docs/product/epic-status.md` in each project repo. No database, no API — file reads only.

---

## Project registry

All 13 projects tracked by the monitor:

| Slug | Production URL | Status file |
|---|---|---|
| longevity-coach | longevitycoach.ai | `public/project-status.html` |
| forever-app | forever-8.com | `website/public/project-status.html` |
| eo-vietnam | eovietnamboard.com | `public/project-status.html` |
| bhutan | (pending) | `public/project-status.html` |
| caio-coach | caiocoach.com | `public/project-status.html` |
| aio-website | ai-officer.com | `public/project-status.html` |
| aio-pad | (internal) | `public/project-status.html` |
| infinite-leverage | infiniteleverage.ai | `public/project-status.html` |
| mahjong-tarot | (pending) | `website/public/project-status.html` |
| edge8 | edge8.co | `public/project-status.html` |
| fab-four | (pending) | `public/project-status.html` |
| leadership-coach | (pending) | `public/project-status.html` |
| dave-hajdu | davehajdu.com | `public/project-status.html` |

---

## Still to build

- [ ] `public/claude-code-monitor.html` — the actual page
- [ ] `## Needs Human Review` section added to all epic-status.md files
- [ ] PM and Developer agent files for each project
- [ ] `update-project-status` skill (called by agents after every task)
- [ ] Morning cron at 5:30am
- [ ] project-status.html for remaining projects (aio-pad, aio-website, caio-coach, edge8, etc.)
