@AGENTS.md

# CAIO Coach Website

Next.js 16 site for caiocoach.com. AI leadership coaching by Dave Hajdu.

## Tech Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- shadcn/ui components (Card, Badge, Accordion, Button)
- Supabase (shared instance across all Dave's sites)
- Inter + JetBrains Mono via next/font
- Deployed to Vercel via git push

## Project Structure
- `src/app/` - App Router pages
- `src/components/` - Shared components (Navbar, Footer, ScrollReveal, Hero, BlockRenderer, SeriesNav)
- `src/components/ui/` - shadcn/ui primitives
- `src/lib/` - Data and utilities (posts-data.ts, types.ts, supabase.ts)
- `public/images/` - Site images
- `public/blog/images/` - Blog post images

## Blog System
- Posts stored as structured data in `src/lib/posts-data.ts`
- POSTS array (metadata) + BLOCKS_BY_SLUG record (content blocks)
- BlockRenderer handles all rich components (pull-quote, emphasis-box, stat-callout, etc.)
- The /publish skill writes TypeScript data, not HTML files

## Design Rules
- No em dashes ever
- Container: max-w-[920px] for body content, max-w-[1080px] for hero
- Padding: px-6 mobile, md:px-10 desktop
- Colors: navy (#04102D), blue (#287BE8), mint (#6FF2C1), magenta (#D1458B)
- All grids stack to single column on mobile

## Deploy
```
git push origin main
```
Vercel auto-deploys from GitHub.
