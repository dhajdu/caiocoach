import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.tagRow}>
            <span className="tag">
              <span className="dot" />
              Coaching with Dave Hajdu
            </span>
            <span className="tag tag-muted">Q3 · 2026 cohort open</span>
          </div>

          <h1 className={styles.display}>
            Leadership
            <br />
            has <span className={styles.slash}>/</span>changed.
          </h1>

          <p className={styles.lede}>
            Half the job is still people. The other half is now AI.
            <br />
            We coach you on both.
          </p>

          <div className={styles.ctaRow}>
            <a
              className="btn btn-primary"
              href="https://ai-officer.com/retreat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the retreat →
            </a>
            <Link className="btn btn-ghost" href="/infinite-leverage">
              The Blueprint →
            </Link>
            <span className={styles.price}>3 days · 2 nights · 30 seats</span>
          </div>

          <div className={styles.heroStats}>
            <div>
              <div className={styles.num}>9.5M</div>
              <div className={styles.label}>
                Raised for TINYpulse. Dave led it without reading a line of code.
              </div>
            </div>
            <div>
              <div className={styles.num}>50/50</div>
              <div className={styles.label}>
                The emerging split of human and AI work in every modern workflow.
              </div>
            </div>
            <div>
              <div className={styles.num}>4</div>
              <div className={styles.label}>
                Offices of the future: Revenue, Talent, Operations, Innovation.
              </div>
            </div>
            <div>
              <div className={styles.num}>420+</div>
              <div className={styles.label}>
                Certified AI officers trained across four continents and counting.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DAVE */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / Your coach</div>
            <div>
              <h2 className="t-h1">I coach leaders to lead the AI half of the job.</h2>
              <p className="sub">
                Not to code. Not to become a data scientist. To lead the AI half of every
                workflow you&apos;re already responsible for.
              </p>
            </div>
          </div>

          <div className={styles.about}>
            <div className={styles.portrait}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dave-portrait.webp" alt="Dave Hajdu" />
              <div className={styles.portraitMeta}>
                <div>
                  <div className={styles.portraitName}>Dave Hajdu</div>
                  <div className={styles.portraitRole}>Founder · Edge8 AI</div>
                </div>
                <div className={styles.portraitTag}>
                  CAIO
                  <br />
                  Coach
                </div>
              </div>
            </div>
            <div className={styles.aboutBody}>
              <p>
                We raised <strong>$9.5 million for TINYpulse</strong>. Had Baseline Venture
                Capital behind us, a real board, and a real team. And for most of that
                journey, I couldn&apos;t tell you the difference between a repository and a
                folder.
              </p>
              <p>
                That wasn&apos;t laziness. That was just how it worked, until AI made it
                inefficient. Now every executive faces the same inflection point I did. The
                wall between leadership and the technical side of the business is coming
                down, whether you&apos;re ready or not.
              </p>
              <p>
                I coach leaders to get ready. The organizational framework I use is the{' '}
                <Link className={styles.aboutInline} href="/blog">
                  Four Offices of the Future
                </Link>{' '}
                - Revenue, Talent, Operations, Innovation. Join the{' '}
                <Link className={styles.aboutInline} href="/community">
                  Leadership in the AI Era
                </Link>{' '}
                community and work through it with a global cohort of executives.
              </p>
              <div className={styles.credentials}>
                <span className="tag tag-muted">TINYpulse · $9.5M raised</span>
                <span className="tag tag-muted">Microsoft alumni</span>
                <span className="tag tag-muted">Founder · Edge8 AI</span>
                <span className="tag tag-muted">Global faculty · EO Vietnam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / Program</div>
            <div>
              <h2 className="t-h1">Two ways in.</h2>
              <p className="sub">
                Weekly group coaching at $99 per month, or focused private work with Dave by
                arrangement.
              </p>
            </div>
          </div>

          <div className={styles.offers}>
            <div className={styles.offer}>
              <div className={styles.offerType}>Group coaching</div>
              <h3 className={styles.offerTitle}>Weekly live sessions</h3>
              <p className={styles.offerDesc}>
                Each week, members submit the AI challenges they&apos;re facing. Dave
                coaches the top topics live. Anyone can join, ask questions, and get
                real-time guidance on their specific situation.
              </p>
              <div className={styles.priceRow}>
                <div className={styles.offerPrice}>$99</div>
                <div className={styles.offerPer}>/ month</div>
              </div>
              <ul className={styles.offerList}>
                <li>Weekly live coaching sessions</li>
                <li>Submit your own topics and questions</li>
                <li>Access to every micro-session and thought leadership archive</li>
                <li>Community of global AI leaders</li>
                <li>Certification program included</li>
              </ul>
              <div className={styles.offerAct}>
                <a
                  className="btn btn-primary"
                  href="https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join for $99 / month
                </a>
              </div>
            </div>

            <div className={styles.offer}>
              <div className={styles.offerType}>Private coaching</div>
              <h3 className={styles.offerTitle}>One-on-one with Dave</h3>
              <p className={styles.offerDesc}>
                For executives who want focused, private attention on their AI strategy.
                Dave works directly with you on your roadmap, your team, and your specific
                business context.
              </p>
              <div className={styles.priceRow}>
                <div className={styles.offerPrice}>-</div>
                <div className={styles.offerPer}>By arrangement</div>
              </div>
              <ul className={styles.offerList}>
                <li>Dedicated 1:1 sessions with Dave</li>
                <li>Custom AI roadmap for your organisation</li>
                <li>Team coaching and enablement</li>
                <li>Limited availability - enquire first</li>
              </ul>
              <div className={styles.offerAct}>
                <Link className="btn btn-ghost" href="/coaching">
                  Enquire about private coaching
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD NOTES */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">03 / Writing</div>
            <div>
              <h2 className="t-h1">Field notes.</h2>
              <p className="sub">
                Serialized builds on one side, standalone essays on the other.
              </p>
            </div>
          </div>

          <div className={styles.fieldNotes}>
            <Link
              href="/infinite-leverage"
              className={`${styles.notesCard} ${styles.notesCardFeatured}`}
            >
              <div className={styles.notesHead}>
                <span className={styles.notesDate}>14-day series · complete</span>
                <span className={styles.notesNum}>Series 01</span>
              </div>
              <div className={styles.notesGlyph}>
                Infinite
                <br />
                Leverage.
              </div>
              <p className={styles.notesExcerpt}>
                Five AI employees. Two offices. One weekend. 14 days of building a
                one-person agentic company - and what it proved about how the next decade
                of work gets built.
              </p>
              <div className={styles.notesFoot}>
                <span className={styles.notesRead}>Read the Blueprint →</span>
                <span className={styles.notesMetaRight}>14 days · 22k words</span>
              </div>
            </Link>

            <Link href="/blog" className={styles.notesCard}>
              <div className={styles.notesHead}>
                <span className={styles.notesDate}>Standalone essays</span>
                <span className={styles.notesNum}>Ongoing</span>
              </div>
              <h3 className={styles.notesTitle}>Essays on leadership in the 50/50 era.</h3>
              <p className={styles.notesExcerpt}>
                Frameworks, case studies, and hard-earned insights for leaders navigating
                the transition from using AI to leading it. The Four Offices. The skill
                your team actually needs. Why iteration is the secret weapon.
              </p>
              <p className={styles.notesMeta}>
                Latest · Using AI was 2025. Leading AI is 2026.
              </p>
              <div className={styles.notesFoot}>
                <span className={styles.notesRead}>All essays →</span>
                <span className={styles.notesMetaRight}>7 essays · monthly</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY BAND */}
      <section className="sec">
        <div className="page-container">
          <div className={styles.band}>
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 20 }}>
                Community
              </div>
              <h2 className="t-h1">Leadership in the AI Era - a global cohort.</h2>
              <p>
                A community of executives coaching each other through the Four Offices
                framework. Weekly live sessions. A shared archive of what&apos;s working.
                Apply to the Q3 cohort before enrollment closes.
              </p>
            </div>
            <div className={styles.bandCtas}>
              <a
                className="btn btn-primary"
                href="https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to cohort
              </a>
              <a
                className="btn btn-ghost"
                href="https://community.ai-officer.com/feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit community
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
