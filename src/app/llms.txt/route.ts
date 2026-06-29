import { POSTS } from '@/lib/posts-data';
import { BLUEPRINTS } from '@/lib/blueprints-data';

// Generated at build time from the same data that powers the sitemap, so the
// file stays in sync as posts and blueprints are added. Served like a static asset.
export const dynamic = 'force-static';

const baseUrl = 'https://www.caiocoach.com';

function clean(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function describe(text: string, max = 200): string {
  const c = clean(text);
  if (c.length <= max) return c;
  const cut = c.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trim()}...`;
}

const startHere: [path: string, title: string, desc: string][] = [
  ['/', 'Home', 'Overview of CAIO Coach and how Dave Hajdu helps leaders adopt AI.'],
  ['/coaching', 'AI Leadership Coaching', '1:1 and group coaching for executives, founders, and HR leaders.'],
  ['/infinite-leverage', 'Infinite Leverage', 'The method for building and operating a company with a team of AI agents.'],
  ['/certification', 'CAIO Certification', 'Become a certified Chief AI Officer (CAIO).'],
  ['/community', 'Community', 'Join the CAIO practitioner community.'],
  ['/blueprints', 'Blueprints', 'Practical, copy-ready plans, workflows, and guides.'],
  ['/resources/100-business-frameworks', '100 Business Frameworks', 'A reference library of frameworks for AI-era leadership.'],
  ['/blog', 'Blog', 'Essays on AI leadership, AI agents, and Infinite Leverage.'],
  ['/contact', 'Contact', 'Get in touch to work with Dave Hajdu.'],
];

export async function GET() {
  const lines: string[] = [];

  lines.push('# CAIO Coach: AI Leadership Coaching by Dave Hajdu');
  lines.push('');
  lines.push(
    '> CAIO Coach (caiocoach.com) provides expert AI coaching for executives, founders, and HR leaders who want to lead in the AI era. Founded by Dave Hajdu, it teaches "Infinite Leverage": how to build and run a company with a team of AI agents. Offerings include 1:1 executive coaching, the Chief AI Officer (CAIO) certification, founder retreats, a practitioner community, and a library of essays and ready-to-use blueprints.'
  );
  lines.push('');
  lines.push('CAIO Coach helps non-technical leaders become fluent operators of AI agents. Recurring ideas across the site:');
  lines.push('');
  lines.push('- Infinite Leverage: running a one-person or small company with a team of AI agents.');
  lines.push('- Human Tokens: one hour of skilled, leveraged work as the unit of output, with the AI Token Ratio measuring delivery leverage.');
  lines.push('- The Four Offices of the Future: Revenue, Talent, Operations, and Innovation, each staffed by human and AI tokens.');
  lines.push('- The Other 50%: leadership in the AI era is 50% human and 50% AI.');
  lines.push('');

  lines.push('## Start here');
  lines.push('');
  for (const [path, title, desc] of startHere) {
    lines.push(`- [${title}](${baseUrl}${path}): ${desc}`);
  }
  lines.push('');

  lines.push('## Blog: essays on AI leadership');
  lines.push('');
  for (const post of POSTS) {
    const desc = describe(post.excerpt || post.subtitle || '');
    lines.push(`- [${clean(post.title)}](${baseUrl}/blog/${post.slug})${desc ? `: ${desc}` : ''}`);
  }
  lines.push('');

  lines.push('## Blueprints: copy-ready plans and guides');
  lines.push('');
  for (const bp of BLUEPRINTS) {
    const desc = describe(bp.excerpt || bp.subtitle || '');
    lines.push(`- [${clean(bp.title)}](${baseUrl}/blueprints/${bp.slug})${desc ? `: ${desc}` : ''}`);
  }
  lines.push('');

  lines.push('## About');
  lines.push('');
  lines.push('- Brand: CAIO Coach, the Chief AI Officer coaching practice.');
  lines.push('- Coach: Dave Hajdu.');
  lines.push('- Company: AI Officer Institute LLC, USA.');
  lines.push('- Contact: dave@edge8.ai, +84 90 995 8581 (Vietnam), +1 206 395 8872 (US).');
  lines.push(`- Sitemap: ${baseUrl}/sitemap.xml`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
