import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Book a coaching call',
  description:
    'Book a 30-minute 1:1 with Dave Hajdu. Bring your hardest AI problem. You leave with a diagnosis, a next move, and an honest read on whether coaching is the right fit.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Book a coaching call - CAIO Coach',
    description:
      'Book a 30-minute 1:1 with Dave Hajdu. Bring your hardest AI problem. You leave with a diagnosis, a next move, and an honest read on whether coaching is the right fit.',
    url: '/contact',
    type: 'website',
  },
};

const LEAVE_WITH = [
  "A clear diagnosis of what's actually stuck.",
  'The next concrete move - or the next two or three.',
  'An honest read on whether coaching is the right fit.',
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '140px 0 56px',
          borderBottom: '1px solid var(--fg-border)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />
        <div className="page-container relative">
          <div className="flex gap-2 flex-wrap mb-8">
            <span className="tag">
              <span className="dot" />
              30-minute 1:1 with Dave
            </span>
            <span className="tag tag-muted">Coaching inquiry</span>
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(48px, 9vw, 108px)', margin: 0 }}
          >
            Bring your hardest
            <br />
            AI problem.
          </h1>
          <p
            style={{
              maxWidth: 640,
              fontSize: 20,
              lineHeight: 1.5,
              color: 'var(--fg-70)',
              margin: '32px 0 0',
            }}
          >
            Thirty minutes, on a call with Dave. No pitch deck. No demo. The one
            thing you haven&apos;t cracked, coached in real time.
          </p>
        </div>
      </section>

      {/* FORM + "YOU LEAVE WITH" */}
      <section className="sec" style={{ paddingTop: 72 }}>
        <div className="page-container">
          <div
            className="grid gap-10 md:gap-14"
            style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}
          >
            <div
              className="grid contact-grid"
              style={{
                gridTemplateColumns: '260px 1fr',
                gap: 56,
                alignItems: 'start',
              }}
            >
              <aside>
                <div className="t-eyebrow" style={{ marginBottom: 16 }}>
                  You leave with
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                  }}
                >
                  {LEAVE_WITH.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 14,
                        fontSize: 15,
                        lineHeight: 1.5,
                        color: 'var(--fg)',
                      }}
                    >
                      <span
                        className="font-mono"
                        style={{
                          color: 'var(--fg-50)',
                          fontSize: 12,
                          letterSpacing: '0.14em',
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 32,
                    paddingTop: 24,
                    borderTop: '1px solid var(--fg-border)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: 'var(--fg-70)',
                  }}
                >
                  Not ready for a call?{' '}
                  <Link
                    href="/coaching"
                    style={{
                      color: 'var(--fg)',
                      borderBottom: '1px solid var(--fg-30)',
                    }}
                  >
                    Join the weekly group at $99/mo
                  </Link>
                  .
                </div>
              </aside>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  );
}
