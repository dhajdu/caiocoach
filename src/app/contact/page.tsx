import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Design your AI capability roadmap. A working session, not a demo. Walk out with a clear assessment of where you are, what gaps exist, and what to do next.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact - CAIO Coach',
    description:
      'Design your AI capability roadmap. A working session, not a demo. Walk out with a clear assessment of where you are, what gaps exist, and what to do next.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '140px 0 64px',
          borderBottom: '1px solid var(--fg-border)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />
        <div className="page-container relative">
          <div className="flex gap-2 flex-wrap mb-8">
            <span className="tag">
              <span className="dot" />
              Working session · Not a demo
            </span>
            <span className="tag tag-muted">30-45 minutes</span>
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(48px, 9vw, 108px)', margin: 0 }}
          >
            Design your AI
            <br />
            capability roadmap.
          </h1>
          <p
            style={{
              maxWidth: 640,
              fontSize: 18,
              lineHeight: 1.55,
              color: 'var(--fg-70)',
              margin: '32px 0 0',
            }}
          >
            You will leave with a clear assessment of where you are, what gaps exist,
            and what to do next.
          </p>
        </div>
      </section>

      {/* SESSION COVERS */}
      <section className="sec" style={{ paddingBottom: 48 }}>
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / The session</div>
            <div>
              <h2 className="t-h1">What the call covers.</h2>
              <p className="sub">
                Built for executives, operations leaders, L&amp;D professionals, and
                department heads getting serious about AI.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            {[
              {
                n: '01',
                title: 'AI maturity assessment',
                body: "A read on where your organisation is today - honestly, across the four offices: Revenue, Talent, Operations, Innovation.",
              },
              {
                n: '02',
                title: 'Capability gap map',
                body: 'The specific skills, systems, and routines missing between today and a credible AI-native operation.',
              },
              {
                n: '03',
                title: 'Delivery options',
                body: 'Coaching, retreat, keynote, or custom engagement - what fits your timeline, budget, and leadership bandwidth.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.n}
                style={{
                  padding: 40,
                  borderRight:
                    i < arr.length - 1 ? '1px solid var(--fg-border)' : 'none',
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-50)',
                    marginBottom: 24,
                  }}
                >
                  {item.n}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 20,
                    color: 'var(--fg)',
                    margin: '0 0 12px',
                    lineHeight: 1.25,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--fg-70)',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / Start</div>
            <div>
              <h2 className="t-h1">Tell us what you&apos;re working on.</h2>
              <p className="sub">
                Every inquiry is read by a human. We reply within one business day.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 760 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
