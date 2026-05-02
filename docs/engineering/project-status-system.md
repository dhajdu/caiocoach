# Project Status System — Engineering Plan

**Author:** Dave Hajdu  
**Date:** 2026-05-02  
**Status:** Ready for implementation  
**Audience:** Lead engineer

---

## 1. What We're Building and Why

Every morning Dave needs to open one page, see what needs his attention across every active project, and efficiently delegate to developer agents. Those same agents need to know — without being told — what to work on each day.

Right now that information exists but is scattered: in `epic-status.md` files across a dozen repos, in open PRs, in Slack threads. Nobody has a clean view.

This system creates two artefacts:

| Artefact | Audience | Purpose |
|---|---|---|
| **Per-project `project-status.html`** | Dave + the project's dev agent | Full detail — epics, pipeline stages, bugs, build log, companion docs |
| **Master `claude-code-monitor.html`** | Dave (morning) + all dev agents | Portfolio view — "Needs You" queue, every project's status at a glance, links to production and per-project detail |

Both are static HTML files using a shared design system (established in the longevity-coach project-status.html). No build step, no login, open in any browser.

---

## 2. Agent Roles — Every Project Gets Two

Every project in the portfolio must have two agent roles defined. These are Claude Code subagents (`.claude/agents/` in the project repo).

### 2a. Project Manager Agent

**Responsibility:** Keeps the project's status documentation accurate and surfaces blockers to Dave.

**Triggers:**
- Called by the developer agent at the end of any completed task
- Called by the morning cron (reads state, does not necessarily change it)

**What it does each run:**
1. Reads `docs/product/epic-status.md` (or equivalent for that project)
2. Reads recent git log
3. Updates epic completion percentages based on what landed
4. Writes or updates the `## Needs Human Review` section (see format below)
5. Regenerates `project-status.html` for that project
6. Notifies the master regeneration agent (or writes a flag file)

**What it does NOT do:**
- Write code
- Make product decisions
- Approve its own items for human review

### 2b. Developer Agent

**Responsibility:** Picks up work from `epic-status.md` and ships it.

**Triggers:**
- Called by Dave with a task, or
- Runs autonomously on a schedule if the project has recurring work (e.g. content pipeline)

**What it does each run:**
1. Reads `docs/product/epic-status.md` to understand current state and priority
2. Reads `## Needs Human Review` to know what is blocked on Dave (and skips those)
3. Picks the highest-priority unblocked item
4. Implements it following the project's dev conventions (CLAUDE.md)
5. On completion: calls the PM agent to update status
6. The PM agent update is the last step — not optional

**Convention:** Every project's `CLAUDE.md` must document which agent handles which role and where their context files live.

---

## 3. The `## Needs Human Review` Standard

Every project's `epic-status.md` must contain this section. Format is fixed — the master regeneration agent reads it mechanically.

```markdown
## Needs Human Review

> Items here block dev agent progress or require a product/business decision.
> Format: one item per line, tagged by type and priority.

- [REVIEW | P1 | Epic 3] BUG-010 — onboarding silently fails to write risk_scores. Fix in PR #88 — needs merge approval.
- [DECISION | P1 | Epic 12] Pricing page layout broken — needs Dave to pick between layout option A or B (mockups in docs/decisions/pricing-layout.md).
- [CONTENT | P2 | Epic 1] Homepage hero copy needs final approval before developer can ship.
- [DOMAIN | P2] DNS for bhutan-luxe.com not pointed — blocks any production testing.
```

**Tag types:**
| Tag | Meaning |
|---|---|
| `REVIEW` | A PR or deliverable ready for Dave's eyes |
| `DECISION` | A product/design/business call only Dave can make |
| `CONTENT` | Copy, images, or brand material needed before dev can proceed |
| `DOMAIN` | Infrastructure/credentials/env vars Dave controls |
| `EXTERNAL` | Waiting on a third party (vendor, contractor, partner) |

**Priority:** P1 = blocking dev work today · P2 = blocking this week · P3 = nice to have soon

When Dave resolves an item, the PM agent removes it from the list on the next run.

---

## 4. Data Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Source of truth (per project)                              │
│                                                             │
│  docs/product/epic-status.md                                │
│  ├── Epic table (%, pipeline stage, open/closed bugs)       │
│  ├── ## Needs Human Review                                  │
│  └── Per-epic detail (what's done, what's missing)         │
└────────────────┬────────────────────────────────────────────┘
                 │  PM agent reads + writes
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  Per-project rendered view                                  │
│                                                             │
│  public/project-status.html                                 │
│  ├── Hero stats (epics, avg %, bugs, regressions)          │
│  ├── Alert banners (P1 bugs, regressions, CI status)       │
│  ├── Epic summary table                                     │
│  ├── Epic detail cards                                      │
│  ├── Build log (git history grouped by date)                │
│  └── Companion docs links                                   │
└────────────────┬────────────────────────────────────────────┘
                 │  master agent aggregates
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  Master dashboard                                           │
│                                                             │
│  caio-coach/site/public/claude-code-monitor.html           │
│  ├── "Needs You" queue  ← aggregated from all projects      │
│  ├── Portfolio stats bar                                    │
│  └── Project grid (one card per project)                    │
│      ├── Name, tagline, phase pill                         │
│      ├── Epic count + avg completion bar                   │
│      ├── Open bug count                                     │
│      ├── [Visit Site ↗]  link to production domain         │
│      └── [Full Status →]  link to project-status.html      │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Master Dashboard — Layout Spec

The master uses the same CSS design system as the per-project files (light background, serif headlines, pipeline glyphs). Sections in order:

### 5a. Sticky Nav
`Claude Code Monitor` brand · links: Needs You · Projects · Agents

### 5b. Hero
- Headline: **"Everything, today."**
- Sub: last-updated timestamp + one-line summary of the day's activity
- Stats grid (4 cells): Total Projects · Total Epics · Open Items for Dave · Open Bugs

### 5c. "Needs You" Queue ← most important section
All `## Needs Human Review` items from every project, sorted by priority (P1 first), then by project.

Each item shows:
- Priority pill (P1 red / P2 amber / P3 grey)
- Type tag (REVIEW / DECISION / CONTENT / DOMAIN / EXTERNAL)
- Project name + epic reference
- The item description
- Direct link to that project's `project-status.html#epic-N`

If there are no items: a green "All clear — nothing waiting for you." banner.

### 5d. Portfolio Summary Table
One row per project. Columns: Project · Phase · Epics · Avg % · Open Bugs · Production · Status

The Production link opens the live site. The Status link opens `project-status.html`.

### 5e. Project Cards Grid
One card per project. Each card:
- Project name (links to production) + tagline
- Phase pill
- Epic completion bar (visual, not a table)
- Open bug count (red if > 0)
- Agent count
- Two buttons: **Visit Site ↗** · **Full Status →**

### 5f. Footer
`Generated [timestamp] · Source: epic-status.md across [N] projects`

---

## 6. Update Mechanism

### Trigger 1 — Developer agent completion (real-time)
Every developer agent's final step is always:
```
call PM agent → PM regenerates project-status.html → master flag written
```
The master flag (`/tmp/status-refresh-needed`) is picked up the next time the master agent runs.

### Trigger 2 — Morning cron (5:30am daily)
A scheduled Claude Code agent runs daily. It:
1. Iterates the project registry (see §7)
2. For each project: reads `epic-status.md`, regenerates `project-status.html`
3. Regenerates `claude-code-monitor.html`
4. Sends Dave a push notification or Lark message: "Morning queue ready — N items need you."

The morning cron is the safety net. Even if ad-hoc triggers were missed, the master is fresh by the time Dave opens it.

### Trigger 3 — On demand
Any agent (or Dave) can call `update-project-status <slug>` to force a refresh of one project and rebuild the master.

---

## 7. Project Registry

The registry is a single JSON file at `caio-coach/site/docs/engineering/project-registry.json`. The master agent and all updater skills read from this file — it is the single source of project metadata.

```json
[
  {
    "slug": "longevity-coach",
    "name": "Janet Cares",
    "tagline": "Biological-age platform · personalised health coaching",
    "productionUrl": "https://janet.care",
    "statusUrl": "https://janet.care/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/longevity-coach/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/longevity-coach/public/project-status.html",
    "phase": "Phase 2 · Intelligence"
  },
  {
    "slug": "mahjong-tarot",
    "name": "The Mahjong Tarot",
    "tagline": "Eastern divination, treated seriously · daily almanac",
    "productionUrl": "https://mahjongtarot.com",
    "statusUrl": "https://mahjongtarot.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/mahjong-tarot/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/mahjong-tarot/website/public/project-status.html",
    "phase": "Phase 1 · Wedge"
  },
  {
    "slug": "forever-app",
    "name": "Forever",
    "tagline": "The 8-minute capture loop · memoir engine",
    "productionUrl": "https://forever-8.com",
    "statusUrl": "https://forever-8.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/forever-app/website/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/forever-app/website/public/project-status.html",
    "phase": "Pilot"
  },
  {
    "slug": "aio-website",
    "name": "AI Officer Institute",
    "tagline": "Train and certify senior leaders as AI Officers",
    "productionUrl": "https://ai-officer.com",
    "statusUrl": "https://ai-officer.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/aio-website/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/aio-website/public/project-status.html",
    "phase": "Commerce live"
  },
  {
    "slug": "caio-coach",
    "name": "CAIO Coach",
    "tagline": "AI leadership coaching practice · content-led marketing",
    "productionUrl": "https://www.caiocoach.com",
    "statusUrl": "https://www.caiocoach.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/caio-coach/site/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/caio-coach/site/public/project-status.html",
    "phase": "Live, iterating"
  },
  {
    "slug": "aio-pad",
    "name": "AIO Pad",
    "tagline": "2BR Saigon apartment · car-driver service",
    "productionUrl": "https://aio-pad.com",
    "statusUrl": "https://aio-pad.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/aio-pad/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/aio-pad/public/project-status.html",
    "phase": "Live, iterating"
  },
  {
    "slug": "bhutan",
    "name": "Bhutan Luxe",
    "tagline": "Bespoke luxury Bhutan group journeys",
    "productionUrl": "https://bhutan-luxe.com",
    "statusUrl": "https://bhutan-luxe.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/bhutan/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/bhutan/public/project-status.html",
    "phase": "Pre-build"
  },
  {
    "slug": "eo-vietnam",
    "name": "EO Vietnam",
    "tagline": "Entrepreneurs' Organization Vietnam chapter site",
    "productionUrl": "https://eo-vietnam.com",
    "statusUrl": "https://eo-vietnam.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/eo-vietnam/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/eo-vietnam/public/project-status.html",
    "phase": "Building"
  },
  {
    "slug": "dave-hajdu",
    "name": "Dave Hajdu",
    "tagline": "Personal site · speaking, consulting, books",
    "productionUrl": "https://davehajdu.com",
    "statusUrl": "https://davehajdu.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/dave-hajdu/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/dave-hajdu/public/project-status.html",
    "phase": "Live, iterating"
  },
  {
    "slug": "edge8",
    "name": "Edge8",
    "tagline": "Edge8 USA · consulting and AI staffing",
    "productionUrl": "https://edge8.co",
    "statusUrl": "https://edge8.co/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/edge8/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/edge8/public/project-status.html",
    "phase": "Live, iterating"
  },
  {
    "slug": "fab-four",
    "name": "Fab Four Academy",
    "tagline": "Leadership through The Beatles · Dan Absher's platform",
    "productionUrl": "https://www.fabfouracademy.com",
    "statusUrl": "https://www.fabfouracademy.com/project-status.html",
    "epicStatusPath": "/Users/davepro/code-projects/fab-four/docs/product/epic-status.md",
    "projectStatusHtmlPath": "/Users/davepro/code-projects/fab-four/website/public/project-status.html",
    "phase": "Pre-build"
  }
]
```

---

## 8. Build Order

### Wave 1 — Foundation (do first, blocks everything else)

**1.1 Standardize epic-status.md format across all projects**
Every project's `epic-status.md` must have the `## Needs Human Review` section (even if empty). Go through all 11 projects and add the section. This is the data that makes the master useful.

**1.2 Write project-registry.json**
Create `/Users/davepro/code-projects/caio-coach/site/docs/engineering/project-registry.json` with all projects (template in §7 above). Confirm all `epicStatusPath` values are correct for every project.

**1.3 Create the `update-project-status` skill**
A Claude Code skill (stored in `~/.claude/skills/` or the caio-coach skill directory) that:
- Takes a project slug as argument
- Reads that project's `epic-status.md`
- Reads recent git log
- Regenerates that project's `project-status.html`
- Regenerates `claude-code-monitor.html`

---

### Wave 2 — Master Dashboard

**2.1 Build `claude-code-monitor.html`**
Static HTML file at `caio-coach/site/public/claude-code-monitor.html`.
- Same CSS design system as per-project files (copy verbatim)
- Sections per §5
- "Needs You" queue reads from all `## Needs Human Review` sections
- Project grid with production + status links from registry

**2.2 Retire or redirect the Next.js `/claude-code-monitor` route**
Add a redirect in `caio-coach/site/src/app/claude-code-monitor/page.tsx` to `/claude-code-monitor.html`, or replace the TSX with a simple meta-refresh to the static file. The static file is the source of truth going forward.

---

### Wave 3 — Agent Roles

**3.1 Create PM agent for each project**
For each project: add `.claude/agents/project-manager.md` (the agent persona and instructions). The PM agent:
- Knows how to read and update that project's `epic-status.md`
- Knows how to call `update-project-status <slug>`
- Knows the `## Needs Human Review` format

**3.2 Create Developer agent for each project**
For each project: add `.claude/agents/developer.md`. The developer agent:
- Knows to read `epic-status.md` at the start of each session
- Knows to skip anything tagged in `## Needs Human Review`
- Knows to call the PM agent as its last step

**3.3 Update existing project CLAUDE.md files**
Add a section to each project's `CLAUDE.md` pointing to the PM and Developer agent files and making the "call PM at end of task" rule explicit.

---

### Wave 4 — Automation

**4.1 Morning cron**
Use Claude Code's scheduled agent feature. Schedule a daily agent at 5:30am that:
1. Loops through `project-registry.json`
2. Calls `update-project-status` for each project
3. Rebuilds the master
4. Sends a Lark message to Dave with the count of "Needs You" items

**4.2 Wire dev agents to call PM on completion**
Audit the existing dev agent skills (especially mahjong-studio, build-page, writer) and add the `update-project-status` call as a final step.

---

## 9. Success Criteria

The system is working when:

1. Dave opens `caiocoach.com/claude-code-monitor.html` each morning and sees a "Needs You" queue that reflects reality — no stale items, no missing items.
2. A developer agent on any project can open `epic-status.md` and know, without asking Dave, what to work on today.
3. When a developer agent completes a task, the project's `project-status.html` updates within 5 minutes, and the master updates within 5 minutes.
4. The morning cron runs reliably and sends a Lark notification by 5:30am.
5. Dave does not need to manually update any status file — agents do it.

---

## 10. Open Questions for the Engineer

1. **eo-vietnam `epic-status.md`** — this project has no formal epic docs yet. Does the engineer create them from the codebase, or does Dave define the epics first?
2. **aio-pad and dave-hajdu** — same question. These projects have epic data in the Claude Code Monitor TSX but not in a formal `epic-status.md`. Which is canonical?
3. **Lark notification format** — does the morning cron send a full summary or just a count + link?
4. **caio-coach project-status.html** — this project doesn't have one yet (only the master monitor). Should we add a per-project status file for caio-coach itself?
5. **Agent file location** — should PM and Developer agents live in `.claude/agents/` (project-local) or in `~/.claude/agents/` (global, accessible across projects)? Project-local is safer; global is more convenient for the morning cron.
