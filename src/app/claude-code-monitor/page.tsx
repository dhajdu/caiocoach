import type { Metadata } from 'next';
import styles from './page.module.css';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Claude Code Monitor',
  description:
    'Live status dashboard across the active build slate: epic progress, pipeline stages, and open bugs across six projects.',
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
  },
  {
    slug: 'longevity-coach',
    klass: styles.cardLongevity,
    name: 'Longevity Coach',
    tagline: 'Live longer, on purpose. · biological-age platform',
    url: 'https://longevity-coach.io',
    domain: 'longevity-coach.io',
    created: '2026-04-23',
    lastUpdated: '2026-04-28',
    phase: 'Phase 2 · Intelligence',
    totalOpen: '7 open',
    totalClosed: '1 closed',
    inferred: false,
    epics: [
      { num: 1, name: 'The Front Door', pipeline: '●●●◐◐', estimate: '90%', open: '2 (P2, P3)', closed: '1' },
      { num: 2, name: 'The Intake', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 3, name: 'The Number', pipeline: '●●○○○', estimate: '50%', open: '1 (P1)', closed: '0' },
      { num: 4, name: 'The Protocol', pipeline: '●●○○○', estimate: '50%', open: '0', closed: '0' },
      { num: 5, name: 'The Report', pipeline: '●◐○○○', estimate: '35%', open: '1 (P3)', closed: '0' },
      { num: 6, name: 'The Coach', pipeline: '●●○○○', estimate: '60%', open: '1 (P2)', closed: '0' },
      { num: 7, name: 'The Daily Return', pipeline: '●◐○○○', estimate: '25%', open: '0', closed: '0' },
      { num: 8, name: 'The Living Record', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 9, name: 'The Care Team', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 10, name: 'The Knowledge Engine', pipeline: '●○○○○', estimate: '5%', open: '1 (P2)', closed: '0' },
      { num: 11, name: 'The Trust Layer', pipeline: '●●◐○○', estimate: '55%', open: '1 (P2)', closed: '0' },
      { num: 12, name: 'The Distribution', pipeline: '●○○○○', estimate: '5%', open: '0', closed: '0' },
      { num: 13, name: 'The Business Model', pipeline: '●○○○○', estimate: '0%', open: '0', closed: '0' },
      { num: 14, name: 'The Platform Foundation', pipeline: '●◐○○○', estimate: '40%', open: '0', closed: '0' },
    ],
  },
  {
    slug: 'mahjong-tarot',
    klass: styles.cardMahjong,
    name: 'The Mahjong Tarot',
    tagline: 'Eastern divination, treated seriously · daily almanac and readings',
    url: 'https://mahjongtarot.com',
    domain: 'mahjongtarot.com',
    created: '2026-04-06',
    lastUpdated: '2026-04-28',
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
      { num: 1, name: 'Public marketing site', pipeline: '●○○○○', estimate: '15%', open: '0', closed: '0' },
      { num: 2, name: 'Events commerce', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 3, name: 'Vietnam offline-pay path', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 4, name: 'Membership commerce', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 5, name: 'Member experience handoff', pipeline: '●○○○○', estimate: '10%', open: '0', closed: '0' },
      { num: 6, name: 'Lead capture and inquiry CRM', pipeline: '●●●○○', estimate: '80%', open: '0', closed: '0' },
      { num: 7, name: 'Admin operations console', pipeline: '●●◐○○', estimate: '70%', open: '0', closed: '0' },
      { num: 8, name: 'Newsletter list management', pipeline: '●●◐○○', estimate: '60%', open: '0', closed: '0' },
      { num: 9, name: 'Operational notifications', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 10, name: 'Analytics and instrumentation', pipeline: '●◐○○○', estimate: '25%', open: '0', closed: '0' },
    ],
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
      { num: 1, name: 'Landing and hero', pipeline: '●●●◐◐', estimate: '95%', open: '0', closed: '0' },
      { num: 2, name: 'Speaking and booking', pipeline: '●●●◐◐', estimate: '90%', open: '0', closed: '0' },
      { num: 3, name: 'Consulting sales', pipeline: '●●●◐○', estimate: '85%', open: '0', closed: '0' },
      { num: 4, name: 'Content hub (blog)', pipeline: '●◐○○○', estimate: '40%', open: '0', closed: '0' },
      { num: 5, name: 'Books and presales', pipeline: '●●○○○', estimate: '50%', open: '0', closed: '0' },
      { num: 6, name: 'Lead capture and CRM sync', pipeline: '●●●●●', estimate: '100%', open: '0', closed: '0' },
      { num: 7, name: 'Email and onboarding', pipeline: '●◐○○○', estimate: '30%', open: '0', closed: '0' },
      { num: 8, name: 'Newsletter', pipeline: '○○○○○', estimate: '0%', open: '0', closed: '0' },
    ],
  },
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
            6 projects · 57 epics tracked · 19 open bugs · 1 closed
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="page-container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Active projects</div>
              <div className={styles.statValue}>6</div>
              <div className={styles.statNote}>Forever, Longevity, Mahjong, AIO, Dave Hajdu, CAIO</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Total epics</div>
              <div className={styles.statValue}>57</div>
              <div className={styles.statNote}>9 + 14 + 10 + 10 + 8 + 6</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Open bugs</div>
              <div className={styles.statValue}>19</div>
              <div className={styles.statNote}>12 Forever · 7 Longevity · others not tracked</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Closed bugs</div>
              <div className={styles.statValue}>1</div>
              <div className={styles.statNote}>All-time, across projects</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="page-container">
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

                <div className={styles.legend}>
                  <strong>Pipeline:</strong> Planned · Feature Complete · Unit Tested · Regression · User Reviewed
                  <br />
                  <code>●</code> passed · <code>◐</code> partial · <code>○</code> not yet · <code>↻</code> regressed
                </div>

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
