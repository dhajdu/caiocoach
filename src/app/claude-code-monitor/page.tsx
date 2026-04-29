import type { Metadata } from 'next';
import styles from './page.module.css';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Claude Code Monitor',
  description:
    'Live status dashboard across the active build slate: epic progress, pipeline stages, and open bugs across thirteen projects.',
  alternates: { canonical: '/claude-code-monitor' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Claude Code Monitor',
    description:
      'Live status dashboard across the active build slate.',
    type: 'website',
    url: '/claude-code-monitor',
  },
};

type Epic = {
  num: number;
  name: string;
  pipeline: string;
  estimate: string;
  open: string;
  closed: string;
};

type Agent = {
  name: string;
  job: string;
  schedule: string;
  context: string[];
};

type Project = {
  slug: string;
  klass: string;
  name: string;
  tagline: string;
  url: string;
  domain: string;
  created: string;
  lastUpdated: string;
  phase: string;
  totalOpen: string;
  totalClosed: string;
  inferred: boolean;
  epics: Epic[];
  agents: Agent[];
};

function ageFromDate(iso: string): string {
  const start = new Date(iso);
  const now = new Date();
  const days = Math.max(0, Math.floor((now.getTime() - start.getTime()) / 86400000));
  if (days < 1) return 'today';
  if (days < 14) return `${days} day${days === 1 ? '' : 's'}`;
  if (days < 60) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks === 1 ? '' : 's'}`;
  }
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} month${months === 1 ? '' : 's'}`;
  }
  const years = (days / 365).toFixed(1);
  return `${years} years`;
}

const PROJECTS: Project[] = [
  {
    slug: 'caio-coach',
    klass: styles.cardCaio,
    name: 'CAIO Coach',
    tagline: 'AI leadership coaching practice · content-led marketing',
    url: 'https://www.caiocoach.com',
    domain: 'caiocoach.com',
    created: '2026-04-02',
    lastUpdated: '2026-04-29',
    phase: 'Live, iterating',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Content publishing', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 2, name: 'Coaching marketplace', pipeline: '●●●○○', estimate: '75%', open: '0', closed: '0' },
      { num: 3, name: 'Newsletter funnel', pipeline: '●●○○○', estimate: '50%', open: '0', closed: '0' },
      { num: 4, name: 'Multi-site CRM sync', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 5, name: 'Blueprint library', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
      { num: 6, name: 'Retreat landing and redirect', pipeline: '●◐○○○', estimate: '40%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'forever-app',
    klass: styles.cardForever,
    name: 'Forever',
    tagline: 'The 8-minute capture loop · memoir engine',
    url: 'https://forever-8.com',
    domain: 'forever-8.com',
    created: '2026-04-25',
    lastUpdated: '2026-04-28',
    phase: 'Pilot',
    totalOpen: '12 open',
    totalClosed: '0 closed',
    inferred: false,
    epics: [
      { num: 1, name: 'The Ritual', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
      { num: 2, name: 'The Catalyst', pipeline: '●●○○◐', estimate: '70%', open: '0', closed: '0' },
      { num: 3, name: 'The Living Archive', pipeline: '●◐○○◐', estimate: '55%', open: '1 (P1)', closed: '0' },
      { num: 4, name: 'The Memoir Engine', pipeline: '●●○○◐', estimate: '60%', open: '5 (P1×3, P2, P3×2)', closed: '0' },
      { num: 5, name: 'The Family Circle', pipeline: '●○○○○', estimate: '10%', open: '1 (P3)', closed: '0' },
      { num: 6, name: 'The Caregiver Toolkit', pipeline: '●○○○○', estimate: '10%', open: '0', closed: '0' },
      { num: 7, name: 'The Trust Foundation', pipeline: '●◐○○○', estimate: '25%', open: '2 (P1, P3)', closed: '0' },
      { num: 8, name: 'The First Five Minutes', pipeline: '●●○○◐', estimate: '65%', open: '4 (P1×3, P2)', closed: '0' },
      { num: 9, name: 'The Voice That Stays', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'mahjong-tarot',
    klass: styles.cardMahjong,
    name: 'The Mahjong Tarot',
    tagline: 'Eastern divination, treated seriously · daily almanac and readings',
    url: 'https://mahjongtarot.com',
    domain: 'mahjongtarot.com',
    created: '2026-04-06',
    lastUpdated: '2026-04-29',
    phase: 'Phase 1 · Wedge',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Daily Almanac', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
      { num: 2, name: 'Find a Good Day', pipeline: '●◐○○○', estimate: '40%', open: '0', closed: '0' },
      { num: 3, name: 'Personal Pillar Layer', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 4, name: 'Readings Catalogue', pipeline: '●○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 5, name: 'Voice and Content Engine', pipeline: '●●○○○', estimate: '50%', open: '0', closed: '0' },
      { num: 6, name: 'Founder Cohort and Subscription', pipeline: '●○○○○', estimate: '10%', open: '0', closed: '0' },
      { num: 7, name: 'Book Integration', pipeline: '●○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 8, name: '1-on-1 Practice Layer', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 9, name: 'Share and Acquisition Loop', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 10, name: 'Member Dashboard', pipeline: '●◐○○○', estimate: '30%', open: '0', closed: '0' },
    ],
    agents: [
      {
        name: 'Writer',
        job: 'Produces every written deliverable for the upcoming week in Bill Hajdu\'s voice.',
        schedule: 'Ad-hoc',
        context: ['agents/writer/context/persona.md', 'agents/writer/context/style-guide.md'],
      },
      {
        name: 'Designer',
        job: 'Generates a unique hero and channel image for every written content piece via Gemini.',
        schedule: 'Ad-hoc',
        context: ['agents/designer/context/persona.md'],
      },
      {
        name: 'Web Developer',
        job: 'Transforms approved markdown into Next.js JSX components and publishes them to the site.',
        schedule: 'Ad-hoc',
        context: ['agents/web-developer/context/persona.md', 'web-style-guide.md', 'file-conventions.md'],
      },
      {
        name: 'Product Manager',
        job: 'Translates ideas and problems into structured PM artifacts (epics, personas, vision reports).',
        schedule: 'Ad-hoc',
        context: ['agents/product-manager/context/persona.md'],
      },
      {
        name: 'Project Manager',
        job: 'Owns delivery — scope, schedule, risk, and quality across stand-ups, RAID, and status reports.',
        schedule: 'Daily standup',
        context: ['agents/project-manager/context/persona.md'],
      },
    ],
  },
  {
    slug: 'content-studio',
    klass: styles.cardContent,
    name: 'Content Studio',
    tagline: 'Multi-brand content production hub · workflow + skills',
    url: 'internal',
    domain: 'internal — meta-project',
    created: '2026-04-15',
    lastUpdated: '2026-04-29',
    phase: 'Operational',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Brand context library', pipeline: '●●●◐○', estimate: '60%', open: '0', closed: '0' },
      { num: 2, name: 'Blog production workflow', pipeline: '●●●●◐', estimate: '90%', open: '0', closed: '0' },
      { num: 3, name: 'Social media variants', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 4, name: 'Image generation', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 5, name: 'Cross-brand handoff to web-developer', pipeline: '●●●○○', estimate: '75%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'aio-website',
    klass: styles.cardAio,
    name: 'AI Officer Institute',
    tagline: 'Train and certify senior leaders as AI Officers',
    url: 'https://ai-officer.com',
    domain: 'ai-officer.com',
    created: '2026-04-04',
    lastUpdated: '2026-04-29',
    phase: 'Commerce live',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Public marketing site', pipeline: '○○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 2, name: 'Events commerce', pipeline: '●●●●◐', estimate: '95%', open: '0', closed: '0' },
      { num: 3, name: 'Vietnam offline-pay path', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
      { num: 4, name: 'Membership commerce', pipeline: '●●●●○', estimate: '90%', open: '0', closed: '0' },
      { num: 5, name: 'Member experience handoff', pipeline: '●◐○○○', estimate: '40%', open: '0', closed: '0' },
      { num: 6, name: 'Lead capture and inquiry CRM', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 7, name: 'Admin operations console', pipeline: '●●●●○', estimate: '90%', open: '0', closed: '0' },
      { num: 8, name: 'Newsletter list management', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 9, name: 'Operational notifications', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 10, name: 'Analytics and instrumentation', pipeline: '●◐○○○', estimate: '30%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'aio-pad',
    klass: styles.cardAioPad,
    name: 'AIO Pad',
    tagline: '2BR Saigon apartment · $80/night · car-driver service',
    url: 'https://aio-pad.com',
    domain: 'aio-pad.com',
    created: '2026-04-27',
    lastUpdated: '2026-04-29',
    phase: 'Live, iterating',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Apartment booking flow', pipeline: '●●●◐○', estimate: '80%', open: '0', closed: '0' },
      { num: 2, name: 'Availability calendar', pipeline: '●●●◐○', estimate: '80%', open: '0', closed: '0' },
      { num: 3, name: 'Car-driver service', pipeline: '●●●○○', estimate: '75%', open: '0', closed: '0' },
      { num: 4, name: 'Stripe webhook resilience', pipeline: '●●◐○○', estimate: '75%', open: '0', closed: '0' },
      { num: 5, name: 'Transactional email', pipeline: '●●◐○○', estimate: '70%', open: '0', closed: '0' },
      { num: 6, name: 'Multi-brand CRM integration', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'bhutan',
    klass: styles.cardBhutan,
    name: 'Bhutan Luxe',
    tagline: 'Bespoke luxury Bhutan group journeys · pre-build',
    url: 'https://bhutan-luxe.com',
    domain: 'TBD',
    created: '2026-04-14',
    lastUpdated: '2026-04-29',
    phase: 'Pre-build',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Brand-led marketing site', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 2, name: 'Lead capture and inquiry routing', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 3, name: 'Photography and storytelling content', pipeline: '◐○○○○', estimate: '10%', open: '0', closed: '0' },
      { num: 4, name: 'Affiliate trust and discoverability', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'dave-hajdu',
    klass: styles.cardDave,
    name: 'Dave Hajdu',
    tagline: 'Senior-leader personal site · speaking, consulting, books',
    url: 'https://davehajdu.com',
    domain: 'davehajdu.com',
    created: '2026-04-01',
    lastUpdated: '2026-04-29',
    phase: 'Live, iterating',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Landing and hero', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 2, name: 'Speaking and booking', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 3, name: 'Consulting sales', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 4, name: 'Content hub (blog)', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 5, name: 'Books and presales', pipeline: '●◐○○○', estimate: '30%', open: '0', closed: '0' },
      { num: 6, name: 'Lead capture and CRM sync', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 7, name: 'Email and onboarding', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 8, name: 'Newsletter', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'edge8',
    klass: styles.cardEdge8,
    name: 'Edge8',
    tagline: 'Edge8 USA · consulting + AI staffing',
    url: 'https://edge8.co',
    domain: 'edge8.co',
    created: '2026-04-23',
    lastUpdated: '2026-04-29',
    phase: 'Live, iterating',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Marketing and service pages', pipeline: '●●●●○', estimate: '90%', open: '0', closed: '0' },
      { num: 2, name: 'Case studies', pipeline: '●●●●○', estimate: '90%', open: '0', closed: '0' },
      { num: 3, name: 'Blog', pipeline: '●●●●○', estimate: '85%', open: '0', closed: '0' },
      { num: 4, name: 'Brand discipline', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 5, name: 'Lead capture and multi-brand CRM', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 6, name: 'Analytics and SEO', pipeline: '●◐○○○', estimate: '25%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'fab-four',
    klass: styles.cardFabFour,
    name: 'Fab Four Academy',
    tagline: 'Leadership through The Beatles · Dan Absher\'s daily wisdom and book platform',
    url: 'https://www.fabfouracademy.com',
    domain: 'fabfouracademy.com',
    created: '2026-04-23',
    lastUpdated: '2026-04-29',
    phase: 'Pre-build',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Daily Words of Wisdom', pipeline: '●◐○○○', estimate: '15%', open: '0', closed: '0' },
      { num: 2, name: 'Book promotion and conversion', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 3, name: 'Speaking and consulting funnel', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 4, name: 'Blog', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 5, name: 'Email signup and community', pipeline: '●○○○○', estimate: '10%', open: '0', closed: '0' },
      { num: 6, name: 'Brand-led layout, polish, and SEO', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'leadership-coach',
    klass: styles.cardLeadership,
    name: 'Leadership Coach',
    tagline: 'Operator knowledge base · used by leadership-coach skill',
    url: 'internal',
    domain: 'internal — knowledge base',
    created: '2026-04-14',
    lastUpdated: '2026-04-29',
    phase: 'Operational',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Foundation: Operating System', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 2, name: 'Foundation: Leadership brand identity', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 3, name: 'Foundation: Communication style', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 4, name: 'Foundation: Emotional intelligence guide', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 5, name: 'Foundation: 2026 OKRs', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 6, name: 'Workflows: 1-1 and communications', pipeline: '●●●◐○', estimate: '70%', open: '0', closed: '0' },
    ],
    agents: [],
  },
  {
    slug: 'longevity-coach',
    klass: styles.cardLongevity,
    name: 'Longevity Coach',
    tagline: 'Live longer, on purpose. · biological-age platform',
    url: 'https://longevity-coach.io',
    domain: 'longevity-coach.io',
    created: '2026-04-23',
    lastUpdated: '2026-04-29',
    phase: 'Sprint 2 · Engineering Completeness',
    totalOpen: '0 open',
    totalClosed: '8 closed',
    inferred: false,
    epics: [
      { num: 1, name: 'The Front Door', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '3' },
      { num: 2, name: 'The Intake', pipeline: '●●●◐○', estimate: '99%', open: '0', closed: '0' },
      { num: 3, name: 'The Number', pipeline: '●●●○○', estimate: '85%', open: '0', closed: '1' },
      { num: 4, name: 'The Protocol', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 5, name: 'The Report', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '1' },
      { num: 6, name: 'The Coach', pipeline: '●●●○○', estimate: '95%', open: '0', closed: '1' },
      { num: 7, name: 'The Daily Return', pipeline: '●●●○○', estimate: '90%', open: '0', closed: '0' },
      { num: 8, name: 'The Living Record', pipeline: '●●●○○', estimate: '85%', open: '0', closed: '0' },
      { num: 9, name: 'The Care Team', pipeline: '●●●◐○', estimate: '75%', open: '0', closed: '0' },
      { num: 10, name: 'The Knowledge Engine', pipeline: '●◐◐○○', estimate: '60%', open: '0', closed: '1' },
      { num: 11, name: 'The Trust Layer', pipeline: '●●●○○', estimate: '95%', open: '0', closed: '1' },
      { num: 12, name: 'The Distribution', pipeline: '●●◐○○', estimate: '55%', open: '0', closed: '0' },
      { num: 13, name: 'The Business Model', pipeline: '●●◐○○', estimate: '45%', open: '0', closed: '0' },
      { num: 14, name: 'The Platform Foundation', pipeline: '●●○○○', estimate: '65%', open: '0', closed: '0' },
    ],
    agents: [
      {
        name: 'Sage',
        job: 'Pipeline worker that generates personalised supplement protocols from de-identified patient data.',
        schedule: 'Async (event-triggered)',
        context: ['lib/ai/pipelines/supplement-protocol.ts', 'docs/architecture/agent-system.md'],
      },
      {
        name: 'Atlas',
        job: 'Pipeline worker that produces five-domain risk scores, biological age, and a calm risk narrative.',
        schedule: 'Async (event-triggered)',
        context: ['lib/ai/pipelines/risk-narrative.ts', 'docs/architecture/agent-system.md'],
      },
      {
        name: 'Janet',
        job: 'Real-time health coach that answers patient questions using pre-computed risk and protocol context.',
        schedule: 'Ad-hoc',
        context: ['lib/ai/agents/janet.ts', 'lib/ai/patient-context.ts'],
      },
      {
        name: 'Janet-Clinician Brief',
        job: 'Pipeline worker that generates a clinician-ready brief for care-team handoff. Phase 5.',
        schedule: 'Planned',
        context: ['docs/architecture/agent-system.md'],
      },
      {
        name: 'PT Coach',
        job: 'Live coaching plus monthly plan generation for personal training. Phase 3.',
        schedule: 'Planned',
        context: ['docs/architecture/agent-system.md'],
      },
      {
        name: 'Alex',
        job: 'Patient support agent — billing questions, account help, escalation. Phase 3.',
        schedule: 'Planned',
        context: ['docs/architecture/agent-system.md'],
      },
      {
        name: 'Marco',
        job: 'Pipeline worker that generates personalised meal plans from patient context. Phase 3.',
        schedule: 'Planned',
        context: ['docs/architecture/agent-system.md'],
      },
      {
        name: 'Nova',
        job: 'Pipeline worker that populates the RAG health-knowledge base with curated longevity research. Phase 4.',
        schedule: 'Planned',
        context: ['docs/architecture/agent-system.md'],
      },
    ],
  },
  {
    slug: 'web-developer',
    klass: styles.cardWebDev,
    name: 'Web Developer',
    tagline: 'Multi-site publishing hub · per-site context',
    url: 'internal',
    domain: 'internal — meta-project',
    created: '2026-04-15',
    lastUpdated: '2026-04-29',
    phase: 'Operational',
    totalOpen: '0 open',
    totalClosed: '0 closed',
    inferred: true,
    epics: [
      { num: 1, name: 'Per-site context library', pipeline: '●●●◐○', estimate: '60%', open: '0', closed: '0' },
      { num: 2, name: 'Markdown-to-page transformation', pipeline: '●●●◐○', estimate: '70%', open: '0', closed: '0' },
      { num: 3, name: 'Image optimisation and placement', pipeline: '●●●●◐', estimate: '80%', open: '0', closed: '0' },
      { num: 4, name: 'Index and navigation update', pipeline: '●●●◐○', estimate: '60%', open: '0', closed: '0' },
      { num: 5, name: 'Safe git handoff', pipeline: '●●●●◐', estimate: '90%', open: '0', closed: '0' },
    ],
    agents: [],
  },
];

function bugClass(value: string, kind: 'open' | 'closed'): string {
  if (value === '0') return styles.colBugs;
  return `${styles.colBugs} ${kind === 'open' ? styles.hasOpen : styles.hasClosed}`;
}

export default function ClaudeCodeMonitorPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.eyebrowRow}>
            <span className="tag">
              <span className="dot" />
              Status Dashboard
            </span>
            <span className="tag tag-muted">Updated 2026-04-29</span>
          </div>
          <h1 className={styles.display}>
            Claude Code
            <br />
            Monitor.
          </h1>
          <p className={styles.lede}>
            Epic summaries across the active build slate. Pipeline progress, estimates,
            and open bugs across every shipped product.
          </p>
          <div className={styles.metaLine}>
            13 projects · 95 epics · 13 agents · 12 open bugs · 8 closed
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="page-container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Active projects</div>
              <div className={styles.statValue}>13</div>
              <div className={styles.statNote}>7 customer-facing · 6 internal &amp; pre-build</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Total epics</div>
              <div className={styles.statValue}>95</div>
              <div className={styles.statNote}>14 Longevity · 10 Mahjong · 10 AIO · 9 Forever · others smaller</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Total agents</div>
              <div className={styles.statValue}>13</div>
              <div className={styles.statNote}>8 Longevity · 5 Mahjong · others not yet</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Open bugs</div>
              <div className={styles.statValue}>12</div>
              <div className={styles.statNote}>12 Forever · 0 Longevity · others not tracked</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Closed bugs</div>
              <div className={styles.statValue}>8</div>
              <div className={styles.statNote}>8 Longevity · all-time, across projects</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="page-container">
          <div className={styles.globalLegend}>
            <div>
              <span className={styles.globalLegendLabel}>Pipeline</span>
              <span className={styles.globalLegendStages}>
                Planned · Feature Complete · Unit Tested · Regression · User Reviewed
              </span>
            </div>
            <div className={styles.globalLegendKeys}>
              <code>●</code> passed
              <code>◐</code> partial
              <code>○</code> not yet
              <code>↻</code> regressed
            </div>
          </div>

          <div className={styles.grid}>
            {PROJECTS.map((p) => (
              <article key={p.slug} className={`${styles.card} ${p.klass}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardDot} aria-hidden />
                  <div className={styles.cardTitleBlock}>
                    <h2 className={styles.cardTitle}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardTitleLink}
                      >
                        {p.name}
                        <span className={styles.extArrow} aria-hidden>↗</span>
                      </a>
                    </h2>
                    <p className={styles.cardTagline}>{p.tagline}</p>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span><strong>Age:</strong> {ageFromDate(p.created)}</span>
                  <span><strong>Updated:</strong> {p.lastUpdated}</span>
                  <span><strong>Phase:</strong> {p.phase}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.domainLink}
                  >
                    {p.domain} →
                  </a>
                </div>

                <div className={styles.sectionLabel}>Epics</div>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.colNum}>#</th>
                      <th>Epic</th>
                      <th className={styles.colPipeline}>Pipeline</th>
                      <th className={styles.colEst}>Est.</th>
                      <th className={styles.colBugs}>Open</th>
                      <th className={styles.colBugs}>Closed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.epics.map((e) => (
                      <tr key={e.num}>
                        <td className={styles.colNum}>{e.num}</td>
                        <td className={styles.colEpic}>{e.name}</td>
                        <td className={styles.colPipeline}>{e.pipeline}</td>
                        <td className={styles.colEst}>{e.estimate}</td>
                        <td className={bugClass(e.open, 'open')}>{e.open}</td>
                        <td className={bugClass(e.closed, 'closed')}>{e.closed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={`${styles.sectionLabel} ${styles.sectionLabelTop}`}>Agents</div>
                {p.agents.length === 0 ? (
                  <div className={styles.emptyAgents}>No agents defined yet.</div>
                ) : (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Agent</th>
                        <th>Job description</th>
                        <th className={styles.colSchedule}>Schedule</th>
                        <th className={styles.colContext}>Context files</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.agents.map((a) => (
                        <tr key={a.name}>
                          <td className={styles.colEpic}>{a.name}</td>
                          <td>{a.job}</td>
                          <td className={styles.colSchedule}>{a.schedule}</td>
                          <td className={styles.colContext}>
                            {a.context.map((f, i) => (
                              <span key={f}>
                                <code>{f}</code>
                                {i < a.context.length - 1 ? ' ' : ''}
                              </span>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                <div className={styles.footer}>
                  <span>
                    Bugs:{' '}
                    <span style={p.totalOpen === '0 open' ? undefined : { color: '#D1458B' }}>
                      {p.totalOpen}
                    </span>
                    {' · '}
                    <span style={p.totalClosed === '0 closed' ? undefined : { color: '#6FF2C1' }}>
                      {p.totalClosed}
                    </span>
                  </span>
                  {p.inferred && <span>Pipeline values inferred</span>}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.footnote}>
            <strong>Note on inferred values.</strong>{' '}
            Four of the six projects (Mahjong Tarot, AI Officer Institute, Dave Hajdu, CAIO Coach)
            do not yet track explicit pipeline glyphs in their source files. Their pipeline column
            is inferred from status emoji and percent-done in each project&apos;s epic-status.md.
            When those sources are updated to track real pipeline state, the values here are
            replaced verbatim.
          </div>
        </div>
      </section>
    </>
  );
}
