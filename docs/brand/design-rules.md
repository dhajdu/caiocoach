# Design Rules — CAIO Coach

Brand and layout standards for caiocoach.com. The source of truth for tokens is `src/app/globals.css`; this document records the design intent.

---

## Colours

| Token | Hex | Use |
|---|---|---|
| Navy | `#04102D` | Primary text, dark backgrounds, headers |
| Blue | `#287BE8` | Primary accent, links, CTAs |
| Mint | `#6FF2C1` | Highlight accent, positive callouts |
| Magenta | `#D1458B` | Secondary accent, emphasis |

---

## Typography

- **Body and headings:** Inter via `next/font`.
- **Code and monospace:** JetBrains Mono via `next/font`.

---

## Layout

| Element | Value |
|---|---|
| Body container max width | `max-w-[920px]` |
| Hero container max width | `max-w-[1080px]` |
| Mobile horizontal padding | `px-6` |
| Desktop horizontal padding | `md:px-10` |

All grids stack to a single column on mobile.

---

## Writing rules

- **No em dashes.** Use commas, periods, or parentheses instead. This is non-negotiable in any rendered content.

---

## Component primitives

shadcn/ui components in use: `Card`, `Badge`, `Accordion`, `Button`. Add new primitives via the shadcn CLI; do not hand-roll equivalents.

---

## Source of truth

Tokens (CSS variables) live in `src/app/globals.css`. If a token in this document drifts from globals.css, globals.css wins — and this document gets updated.
