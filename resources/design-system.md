# AIO Blog Post Style Guide

This is the design and editorial reference for all AI Officer Institute blog content. It defines the visual system, brand voice, blog frameworks, and output format specifications. This document is reference material, not instructions.

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#04102D` | Hero backgrounds, footer, headings |
| `--blue` | `#287BE8` | Primary accent, badges, links, eyebrows, section labels |
| `--magenta` | `#D1458B` | Secondary accent, highlights, build notes, warnings |
| `--mint` | `#6FF2C1` | Dark-background-only accent: eyebrow lines, bullets, callout borders, footer brand |
| `--gray` | `#EAEEF2` | Intro band backgrounds, callout fills, alternating rows |
| `--white` | `#FFFFFF` | Page background, card fills |
| `--ink` | `#04102D` | Default body text on white backgrounds |
| `--muted` | `#5A6478` | Secondary body text, descriptions, captions |

**Critical:** Mint (`#6FF2C1`) only appears on dark backgrounds (navy, dark cards). On white/light backgrounds, use teal (`#1AA87C`) or blue instead.

---

## Typography

- **Font family:** Inter (Google Fonts), weights 300 through 900
- **Hero title:** clamp(34px, 5.5vw, 60px), weight 800, letter-spacing -0.03em, white
- **Hero title accent phrase:** Linear gradient text (blue 0% to mint 100%), applied via `-webkit-background-clip: text`
- **Eyebrow:** 10.5px, weight 600, letter-spacing 0.22em, uppercase, mint, with 28px leading line
- **Section labels:** 11px, weight 700, letter-spacing 0.14em or 0.22em, uppercase, blue
- **Section headings:** 19px, weight 700, letter-spacing -0.02em, navy
- **Body text:** 14.5px, weight 400, line-height 1.75, color `#3A4A60`
- **List items:** 14px, line-height 1.65, color `#3A4A60`, mint dot bullets (6px circles)
- **Callouts:** 13px, italic, color `--muted`, gray background, 3px mint left border
- **Intro band:** 15px, weight 400, line-height 1.8, color `#2A3650`, key phrases in blue bold

---

## Brand Voice

- **Author:** Dave Hajdu, Founder & Chief AI Officer, Edge8 AI / AI Officer Institute
- **Tone:** Direct, confident, experience-backed. Not academic, not salesy. Speaks from real workshop and consulting experience.
- **Perspective:** First person ("I asked 102 founders...", "I keep testing this..."). Never third person about Dave.
- **Evidence:** Concrete numbers, specific examples, named frameworks. Never vague claims.
- **Paragraphs:** Short. 2-4 sentences max. One idea per paragraph.
- **No em dashes.** Use commas, periods, semicolons, or restructure the sentence.
- **Formatting:** Clean and direct. No excessive bold or caps. Bold is reserved for key phrases that carry the argument.

### Voice Examples

Good: "Last week, 102 founders in Australia. Same exercise I've run with over 500 founders across multiple countries."

Bad: "In recent weeks, we have conducted extensive workshops with numerous founder communities across the Asia-Pacific region."

Good: "If you automate chaos, you get faster chaos."

Bad: "Organizations that implement automation without first addressing underlying process inefficiencies may find that the results are suboptimal."

---

## Layout Specifications

- **Max content width:** 880px, centered
- **Hero:** 72px top padding, 64px bottom, 48px sides. Navy background with three radial gradient overlays.
- **Intro band:** 32px vertical padding, 48px sides. Gray background.
- **Main content:** 64px top padding, 80px bottom, 48px sides.
- **Footer:** 28px vertical padding, 48px sides. Navy background, mint brand accent.
- **Mobile breakpoint:** 640px. Reduce side padding to 20px. Stack grids to single column.

---

## Shared Components

### Hero (all post types)

```
Structure:
  Background: var(--navy) with radial gradient overlays
  1. Eyebrow — "AI Officer Institute · [Category]"
  2. Title — white with one .accent gradient phrase
  3. Subtitle — white at 60% opacity, max-width 520px
  4. Pills — 2-3 tags (pill-blue, pill-mag, pill-mint)
```

### Intro Band

Gray strip below hero. Single paragraph. Key phrase in `<strong>` styled blue. This is the thesis sentence.

### Callout Boxes

| Type | Border Color | Background | Text Style | Use For |
|------|-------------|------------|------------|---------|
| Standard | 3px mint (left) | `var(--gray)` | 13px italic, muted | Examples, insights, evidence |
| Highlight / Build Note | 3px magenta (top) | Light magenta tint | Normal weight, magenta label | Warnings, decision points, key asides |

### Footer

```
Background: var(--navy)
Left: "AI Officer Institute · Leadership in the AI Era" (mint for brand name)
Right: "aiofficer.com" (white at 20% opacity, uppercase)
Border-top: 1px solid rgba(111,242,193,0.12)
```

### Pill Tags

| Class | Background | Text | Border | Use For |
|-------|-----------|------|--------|---------|
| `pill-blue` | rgba(40,123,232,0.2) | #7BB8FF | rgba(40,123,232,0.3) | Leadership, Strategy, Frameworks |
| `pill-mag` | rgba(209,69,139,0.18) | #F09AC5 | rgba(209,69,139,0.3) | Curriculum, Workshops, Case Studies |
| `pill-mint` | rgba(111,242,193,0.15) | var(--mint) | rgba(111,242,193,0.25) | Gen AI, Agentic AI, Tools & Tech |

Always use 2-3 pills per post. At least one should be `pill-blue` (leadership angle).

---

## The Five Blog Frameworks

### 1. Step-by-Step Framework Post

**When to use:** Teaching a repeatable process with numbered steps that build on each other.

**Title pattern:** "How to [Verb] [Object]"

**Example titles:** "How to Design an AI Program," "How to Run an AI Audit in 5 Steps," "The 7-Step Workflow Pattern"

**Structure:**
- Hero + intro band
- Vertical spine layout: numbered badges (44px square, 12px border-radius, blue) connected by 2px gradient lines
- Each step: title, uppercase subtitle, description, mint-dot bullet list, optional callout
- Step 3 badge uses blue-to-magenta gradient (the "build" step)
- One step may include a Build Note card (magenta accent)
- Gradient divider
- "Pattern at a Glance" summary: 5-column navy grid, alternating dark backgrounds, colored accent bars, large faded numbers, step names
- Footer

### 2. Thesis / Manifesto Post

**When to use:** Thought leadership, conference recaps, making an argument with evidence.

**Title pattern:** Big stat, bold claim, or provocative question

**Example titles:** "95% of Companies See No ROI from AI," "The Job Changed and We Didn't," "Why Documentation Is the Build Spec"

**Structure:**
- Hero with oversized stat or bold claim
- Intro band with credibility context
- Narrative sections, each with:
  - Uppercase blue section label (e.g., "THE EVIDENCE," "THE SHIFT")
  - Section heading
  - Body paragraphs
  - One visual element per section (card grid, bar chart, split bar, workflow pills, or callout)
- Closing CTA with gradient background
- Footer

**Available visual elements:** Problem cards (3-col), horizontal bar chart, split ratio bar, workflow pill chain, 2x2 concept grid, callout boxes

### 3. Listicle / Card Grid Post

**When to use:** Quick-hit standalone items that don't need sequential order.

**Title pattern:** "[Number] [Things] [Context]"

**Example titles:** "5 Questions Every AI Officer Should Ask," "7 Signs Your AI Program Will Fail," "The AI Tools We Actually Use"

**Structure:**
- Hero + intro band
- 2-column card grid (1-col on mobile)
- Each card: colored number/icon, title (16px, 700), description (14px, 2-4 sentences), optional bottom accent
- Card colors rotate: blue, magenta, teal. Never repeat consecutively.
- Optional closing callout or CTA
- Footer

**Card spec:** White background, 1px border rgba(4,16,45,0.08), 12px radius, 24px padding, hover lifts 2px

### 4. Case Study / Story Post

**When to use:** Client wins, workshop recaps, before/after narratives.

**Title pattern:** "How [Subject] [Achieved Result]" or "From [Before] to [After]"

**Example titles:** "How 102 Founders Built Prototypes in One Hour," "From 40 Hours to 4: An AI Program Case Study"

**Structure:**
- Hero + intro band
- Context section (who, what, where)
- Challenge section (the problem). Can use problem cards or callout.
- Approach section (what was done). Mini step-spine or workflow pills.
- Results banner: navy background, 12px radius, 3-4 metric columns (large number in mint/blue, label below in white 60%)
- Takeaway section with callout
- Optional pull quote (22px, italic, navy, 3px magenta left border)
- Footer

### 5. Comparison / Versus Post

**When to use:** Two or three options compared side by side for a decision.

**Title pattern:** "[Option A] vs. [Option B]: [Question]"

**Example titles:** "No-Code vs. Agentic Workflows: When Do You Need Engineers?," "AI Officer vs. CTO: What's the Difference?"

**Structure:**
- Hero + intro band
- Overview section (why this comparison matters)
- Comparison table: bordered container, navy header row, alternating white/gray body rows, optional blue "verdict" row
- Deep dive per option: colored badge, "Best for" tag, strengths bullets, limitations in muted style
- Decision guide: split card with "Choose X when... / Choose Y when..."
- Bottom line paragraph
- Footer

---

## Output Format Specifications

### Circle (Rich HTML)

Full standalone HTML file with:
- `<!DOCTYPE html>` wrapper, `<head>` with meta viewport, Google Fonts `<link>`, inline `<style>`
- All CSS using the `--variable` tokens above
- `fadeUp` animations on content sections
- Responsive at 640px breakpoint
- Single file, no external dependencies except Google Fonts

### Circle Embed Adaptation

When embedding inside a Circle custom HTML field:
- Remove `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` wrappers
- Keep `<style>` block, but switch Google Fonts to `@import` instead of `<link>`
- Wrap everything in a unique container class (e.g., `.aio-post-[slug]`)
- Prefix all CSS selectors with the container class to prevent style conflicts

### Wix (Rich Text)

Wix blog editor does not support raw HTML in the body. Content must be formatted as rich text:
- **Title:** Plain text, largest heading size
- **Subtitle:** Plain text, secondary heading or bold paragraph
- **Body:** Standard paragraphs with bold and italic formatting
- **Lists:** Standard bullet lists
- **Callouts:** Bold text or blockquote formatting (Wix doesn't support custom-styled callout boxes)
- **Images:** Any data viz (bar charts, grids) should be exported as images and uploaded separately
- **Links:** Inline links where relevant
- No custom CSS, no HTML tags, no color styling. Clean readable text that works in Wix's editor.

### Facebook Post

- **Audience:** Founders (Dave's personal network, mix of entrepreneurs, executives, former colleagues)
- **Length:** 150-300 words
- **Tone:** Personal, conversational, story-led. Open with a hook or anecdote from the blog post.
- **Structure:** Hook (1-2 sentences) → Key insight (2-3 short paragraphs) → One-line takeaway → Optional CTA or question
- **Hashtags:** None or minimal (1-2 max). Facebook penalizes excessive hashtags.
- **No links in body** (kills reach). Add link in first comment instead. End with: "[Link in first comment]"
- **Formatting:** Use line breaks between paragraphs. No bullet points. No emoji unless it's natural.

### LinkedIn Post

- **Audience:** Young professionals, job seekers, people looking to upskill with AI
- **Length:** 200-400 words
- **Tone:** Professional but approachable. Frame insights as career advice or skill-building. Use "you" language.
- **Structure:** Hook line (bold or provocative) → 3-5 short paragraphs → Key takeaway → CTA to comment or follow
- **Formatting:** Short lines. One sentence per line for the hook section. Use line breaks generously.
- **Hashtags:** 3-5 relevant hashtags at the end. Always include: `#aiofficercertification` `#leadershipintheaiera` `#theother50%`. Add 1-2 topic-specific tags.
- **Link:** Include at the end, before hashtags. LinkedIn doesn't penalize links as heavily as Facebook.

### Tweet / X Post

- **Length:** Under 280 characters
- **Tone:** Punchy, quotable. Extract the single most shareable insight from the blog post.
- **Structure:** One sharp observation or stat + optional one-line elaboration
- **No hashtags** unless highly relevant (1 max)
- **No links** in the tweet (kills reach). Post link as a reply.

---

## Appendix: Base CSS Template

This is the starting CSS for every HTML blog post. Framework-specific styles layer on top.

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:    #04102D;
  --blue:    #287BE8;
  --magenta: #D1458B;
  --mint:    #6FF2C1;
  --gray:    #EAEEF2;
  --white:   #FFFFFF;
  --ink:     #04102D;
  --muted:   #5A6478;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--white);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.hero {
  background: var(--navy);
  position: relative;
  padding: 72px 48px 64px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 90% at 90% 40%, rgba(40,123,232,0.22) 0%, transparent 65%),
    radial-gradient(ellipse 45% 70% at 5% 85%, rgba(209,69,139,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 30% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%);
  pointer-events: none;
}

.hero-inner { position: relative; max-width: 880px; margin: 0 auto; }

.eyebrow {
  font-size: 10.5px; font-weight: 600; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--mint);
  margin-bottom: 28px; display: flex; align-items: center; gap: 14px;
}

.eyebrow::before {
  content: ''; width: 28px; height: 2px;
  background: var(--mint); border-radius: 2px; flex-shrink: 0;
}

.hero h1 {
  font-size: clamp(34px, 5.5vw, 60px); font-weight: 800;
  color: var(--white); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 20px;
}

.hero h1 .accent {
  background: linear-gradient(90deg, var(--blue) 0%, var(--mint) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.hero-sub {
  font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.6);
  max-width: 520px; line-height: 1.75; margin-bottom: 36px;
}

.hero-pills { display: flex; gap: 10px; flex-wrap: wrap; }

.pill {
  display: inline-flex; align-items: center; padding: 5px 14px;
  border-radius: 100px; font-size: 12px; font-weight: 500; letter-spacing: 0.02em;
}

.pill-blue { background: rgba(40,123,232,0.2); color: #7BB8FF; border: 1px solid rgba(40,123,232,0.3); }
.pill-mag  { background: rgba(209,69,139,0.18); color: #F09AC5; border: 1px solid rgba(209,69,139,0.3); }
.pill-mint { background: rgba(111,242,193,0.15); color: var(--mint); border: 1px solid rgba(111,242,193,0.25); }

.intro { background: var(--gray); padding: 32px 48px; border-bottom: 1px solid rgba(4,16,45,0.08); }
.intro-inner { max-width: 880px; margin: 0 auto; font-size: 15px; font-weight: 400; line-height: 1.8; color: #2A3650; }
.intro-inner strong { color: var(--blue); font-weight: 600; }

.main { max-width: 880px; margin: 0 auto; padding: 64px 48px 80px; }

.callout {
  background: var(--gray); border-left: 3px solid var(--mint);
  padding: 11px 15px; border-radius: 0 6px 6px 0;
  font-size: 13px; color: var(--muted); font-style: italic; line-height: 1.65;
}

@keyframes fadeUp { to { opacity: 1; transform: none; } }

.page-footer {
  background: var(--navy); padding: 28px 48px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; border-top: 1px solid rgba(111,242,193,0.12);
}

.footer-brand { font-size: 13.5px; font-weight: 600; color: rgba(255,255,255,0.4); }
.footer-brand span { color: var(--mint); }
.footer-tag { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.2); letter-spacing: 0.08em; text-transform: uppercase; }

@media (max-width: 640px) {
  .hero, .intro { padding-left: 20px; padding-right: 20px; }
  .main { padding: 48px 20px 60px; }
  .page-footer { padding: 24px 20px; }
}
```

---

*Last updated: March 30, 2026*
