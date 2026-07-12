import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Infinite Leverage',
  description:
    'Five AI employees. Two offices. One weekend. 14 days of building a one-person agentic company, documented end-to-end while it was happening.',
  alternates: { canonical: '/infinite-leverage' },
  openGraph: {
    title: 'Infinite Leverage - CAIO Coach',
    description:
      'Five AI employees. Two offices. One weekend. 14 days of building a one-person agentic company, documented end-to-end while it was happening.',
    url: '/infinite-leverage',
    type: 'article',
  },
};

type Day = {
  n: number;
  title: string;
  takeaway: string;
  href: string;
  pivot?: boolean;
};

const WEEK_1: Day[] = [
  {
    n: 1,
    title: 'The Blueprint.',
    takeaway:
      'Five AI employees. Two offices. From blank doc to a running org chart in a weekend.',
    href: '/blog/day-1-infinite-leverage-blueprint',
  },
  {
    n: 2,
    title: 'Set up trauma.',
    takeaway:
      'Meant to ship five agents. Shipped 12 production skills. Foundation work is the real work.',
    href: '/blog/day-2-infinite-leverage-blueprint',
  },
  {
    n: 3,
    title: 'The comms layer.',
    takeaway:
      "The system started running. I wasn't listening. Merged is not reviewed.",
    href: '/blog/day-3-infinite-leverage-blueprint',
    pivot: true,
  },
  {
    n: 4,
    title: 'Embracing Claude Code.',
    takeaway:
      'Killed Cowork. Moved the operation to Claude Code. A client bought the seat mid-build.',
    href: '/blog/day-4-infinite-leverage-blueprint',
    pivot: true,
  },
  {
    n: 5,
    title: 'Supabase.',
    takeaway:
      'A mini CRM before a 10am meeting. Ten forms, three databases, three sites.',
    href: '/blog/day-5-infinite-leverage-blueprint',
  },
  {
    n: 6,
    title: 'Routing & review.',
    takeaway:
      'Notification graphs, PM agent promotions, the rule that killed "it merged so it\'s done".',
    href: '/blog/day-6-infinite-leverage-blueprint',
  },
  {
    n: 7,
    title: 'The machine behind the curtain.',
    takeaway:
      'The agents stopped being the story. The orchestration layer did.',
    href: '/blog/day-7-infinite-leverage-blueprint',
  },
];

const WEEK_2: Day[] = [
  {
    n: 8,
    title: 'The content studio.',
    takeaway:
      'Every "teach the non-techie" memo turned out to be a module we already owed clients.',
    href: '/blog/day-8-the-content-studio',
  },
  {
    n: 9,
    title: 'The day the designer got stuck.',
    takeaway:
      'Shipping in public closed a 5-day engagement before the program was finished.',
    href: '/blog/day-9-designer-got-stuck',
  },
  {
    n: 10,
    title: 'The coaching assistant.',
    takeaway:
      'Daily, weekly, monthly cadences. What makes an AI team move vs. quietly drift.',
    href: '/blog/day-10-coaching-assistant',
  },
  {
    n: 11,
    title: 'The AI mindset shift.',
    takeaway:
      'The onboarding agent that asks better questions than the human version ever did.',
    href: '/blog/day-11-ai-mindset-shift-unlocked',
  },
  {
    n: 12,
    title: 'Two-track business model.',
    takeaway:
      'Always be cataloguing. The quiet skill the operator needs, the agent can\'t fake.',
    href: '/blog/day-12-two-track-business-model',
  },
  {
    n: 13,
    title: 'The coordination tax.',
    takeaway:
      'What we got wrong in week one and had to rebuild. All of it. With receipts.',
    href: '/blog/day-13-coordination-tax',
  },
  {
    n: 14,
    title: 'The world has moved.',
    takeaway:
      'Series finale. Six AI agents running, four queued, and the setup script that lets the pattern travel off my machine.',
    href: '/blog/day-14-world-has-moved',
  },
];

function DayCard({ day }: { day: Day }) {
  const cls = `${styles.day} ${day.pivot ? styles.dayPivot : ''}`.trim();
  const num = String(day.n).padStart(2, '0');
  return (
    <Link href={day.href} className={cls}>
      <div className={styles.dayNum}>
        <span className={styles.pre}>{day.pivot ? 'DAY · PIVOT' : 'DAY'}</span>
        {num}
      </div>
      <div className={styles.dayTitle}>{day.title}</div>
      <p className={styles.dayTakeaway}>{day.takeaway}</p>
      <div className={styles.dayRead}>Read →</div>
    </Link>
  );
}

export default function InfiniteLeveragePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.tagRow}>
            <span className="tag">
              <span className="dot" />
              Series 01 · Complete
            </span>
            <span className="tag tag-muted">14 days · Apr 05 → Apr 18 · 2026</span>
            <span className="tag tag-muted">A live build, in the open</span>
          </div>

          <h1 className={styles.heroTitle}>
            Infinite
            <br />
            Leverage<span className={styles.slash}>.</span>
          </h1>

          <p className={styles.lede}>
            Five AI employees. Two offices. One weekend. 14 days of building a one-person
            agentic company - documented end-to-end, while it was happening, without the
            retrospective gloss.
          </p>

          <div className={styles.ctas}>
            <Link
              className="btn btn-primary"
              href="/blog/day-1-infinite-leverage-blueprint"
            >
              Start from Day 01
            </Link>
            <a className="btn btn-ghost" href="#map">
              Jump to any day
            </a>
          </div>

          <div className={styles.metaStrip}>
            <div>
              <div className={styles.n}>14</div>
              <div className={styles.k}>Days serialized</div>
            </div>
            <div>
              <div className={styles.n}>12</div>
              <div className={styles.k}>Production skills shipped</div>
            </div>
            <div>
              <div className={styles.n}>3</div>
              <div className={styles.k}>Agent systems built</div>
            </div>
            <div>
              <div className={styles.n}>1</div>
              <div className={styles.k}>Founder · zero employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / Thesis</div>
            <div>
              <h2 className="t-h1">The playbook said: do the work, then organize.</h2>
              <p className="sub">
                We did the opposite. Set up the org chart first - staffed entirely by AI -
                and let the structure tell us what work was next.
              </p>
            </div>
          </div>

          <div className={styles.thesis}>
            <div>
              <p>A one-person agentic company isn&apos;t one founder plus N agents.</p>
              <p>
                It&apos;s one founder, plus N agents, plus the comms layer, plus the
                routines, plus the information architecture that lets the founder actually
                see what the system shipped.
              </p>
              <p>The agents are the easy part. The machine behind them is the whole game.</p>
            </div>
            <div className={styles.thesisSide}>
              <p>
                Over 14 days we built the machine. Not just the visible agents, but the
                plumbing - skills, tooling, routing, review workflows, a CRM, a comms layer,
                three websites, and the curriculum we didn&apos;t know we owed our clients.
              </p>
              <p>
                Every day is a real log. Some days the thing shipped. Some days we learned
                the thing we built three weeks ago was wrong.
              </p>
              <p>
                Read it as a build log. Read it as a leadership diary. Read it as the
                template for what your own org has to become before 2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MAP */}
      <section className="sec" id="map">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / The Map</div>
            <div>
              <h2 className="t-h1">14 days, laid flat.</h2>
              <p className="sub">
                Each day is a card. Click in for the full log. Designed so you can read the
                arc in order, or jump to the one that maps to your situation.
              </p>
            </div>
          </div>

          <div className={styles.weekMarker}>
            <span className={styles.wk}>Week 01</span>
            <h3 className={styles.wkTitle}>
              Setup <span className={styles.muted}>· Founding the one-person org.</span>
            </h3>
          </div>

          <div className={styles.mapGrid}>
            {WEEK_1.map((d) => (
              <DayCard key={d.n} day={d} />
            ))}
          </div>

          <div className={styles.weekMarker}>
            <span className={styles.wk}>Week 02</span>
            <h3 className={styles.wkTitle}>
              Leverage <span className={styles.muted}>· Selling while building.</span>
            </h3>
          </div>

          <div className={styles.mapGrid}>
            {WEEK_2.map((d) => (
              <DayCard key={d.n} day={d} />
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPED */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">03 / Shipped</div>
            <div>
              <h2 className="t-h1">What actually got built.</h2>
              <p className="sub">Not a vibes piece. Tangible artifacts, all of them still running.</p>
            </div>
          </div>

          <div className={styles.artifactStrip}>
            <Artifact n="12" l="Production skills" d="Agent-consumable modules covering brand, research, strategy, PM, and comms." />
            <Artifact n="03" l="Agent systems" d="Content, operations, and revenue - each with its own job description." />
            <Artifact n="03" l="Live websites" d="Marketing site, program hub, and a client travel project shipped in the same window." />
            <Artifact n="01" l="Mini CRM" d="Built in Supabase before a 10am meeting. No developer involved." />
            <Artifact n="10" l="Forms wired" d="Connected to three databases across three sites in one afternoon." />
            <Artifact n="01" l="Comms layer" d="The notification graph that lets one founder actually see what the system shipped." />
            <Artifact n="01" l="Client program" d="5-day engagement closed while the program was still being built live." />
            <Artifact n="22k" l="Words of log" d="Written in the moment. No retrospective gloss." />
          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">04 / Lessons</div>
            <div>
              <h2 className="t-h1">Five things we didn&apos;t know on Day 01.</h2>
              <p className="sub">Distilled from the full series. Cited to the day they first appeared.</p>
            </div>
          </div>

          <div className={styles.lessonList}>
            <Lesson
              num="01"
              claim="Foundation work is the real work."
              body="The part of an AI organization you never see - skills, tooling, permissions, review paths - is 80% of what makes it run. It is also the part that dies first when you cut corners. The founders who succeed are the ones who treat plumbing as strategy."
              cite="- Day 02 · Set up trauma"
            />
            <Lesson
              num="02"
              claim="Merged is not reviewed."
              body={`The moment your agents can ship without you, they will ship without you. "It's merged" stops meaning "it's right". You need a comms layer that forces human attention at the decision points that still require a human - and only those.`}
              cite="- Day 03 · The comms layer"
            />
            <Lesson
              num="03"
              claim="A 1-person company has three layers, not one."
              body="One founder. N agents. A comms-and-routines layer. Most people build the middle and wonder why the system runs away from them. The layer is the thing. Build it first, or retrofit it in pain."
              cite="- Day 03, Day 10"
            />
            <Lesson
              num="04"
              claim="Always be cataloguing."
              body="Information architecture is the unsexy skill that compounds hardest. Every document, decision, and artifact has a home, a canonical link, and an owner - or your agents hallucinate one for you. AI punishes sloppy knowledge systems the way the old internet rewarded them."
              cite="- Day 12 · Information architecture"
            />
            <Lesson
              num="05"
              claim="Build in public, sell from the log."
              body="The same series you're reading now closed a 5-day client engagement on Day 04, before the program we were selling was finished being built. Working in the open is not a marketing tactic. It's the new sales funnel."
              cite="- Day 04, Day 09"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="page-container">
          <div className={styles.ctaBox}>
            <div>
              <div className="t-eyebrow">Read next</div>
              <h2 className="t-h1" style={{ marginTop: 12 }}>
                Working on this in your own company?
              </h2>
              <p>
                The Infinite Leverage Blueprint is the public artifact. The retreat is
                where we apply it to your situation - your org chart, your agents, your
                comms layer.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                className="btn btn-primary"
                href="https://infiniteleverage-8.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the retreat →
              </a>
              <Link className="btn btn-ghost" href="/blog">
                Read essays
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="sec">
        <div className="page-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 32,
              alignItems: 'center',
              padding: 48,
              border: '1px solid var(--fg-border)',
              background: 'var(--elev-1)',
            }}
          >
            <div>
              <div className="t-eyebrow">Track the next build</div>
              <h2 className="t-h1" style={{ marginTop: 12 }}>
                Get the next series in your inbox.
              </h2>
              <p
                style={{
                  maxWidth: 560,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--fg-70)',
                  margin: '16px 0 0',
                }}
              >
                One short essay a week plus a heads-up when the next serialized build
                starts. No sign-up funnel. Unsubscribe with one click.
              </p>
            </div>
            <NewsletterForm source="infinite_leverage_page" />
          </div>
        </div>
      </section>
    </>
  );
}

function Artifact({ n, l, d }: { n: string; l: string; d: string }) {
  return (
    <div className={styles.artifact}>
      <div className={styles.n}>{n}</div>
      <div className={styles.l}>{l}</div>
      <div className={styles.d}>{d}</div>
    </div>
  );
}

function Lesson({
  num,
  claim,
  body,
  cite,
}: {
  num: string;
  claim: string;
  body: string;
  cite: string;
}) {
  return (
    <div className={styles.lesson}>
      <div className={styles.lessonNum}>{num}</div>
      <h3 className={styles.lessonClaim}>{claim}</h3>
      <p className={styles.lessonBody}>
        {body}
        <span className={styles.lessonCite}>{cite}</span>
      </p>
    </div>
  );
}
