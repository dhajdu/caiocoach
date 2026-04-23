'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company: company || null,
          type: 'coaching',
          message: message || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('ok');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'ok') {
    return (
      <div
        style={{
          border: '1px solid var(--fg-border)',
          background: 'var(--elev-1)',
          padding: 40,
        }}
      >
        <div className="t-eyebrow">Got it</div>
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 28,
            letterSpacing: '-0.01em',
            color: 'var(--fg)',
            margin: '12px 0 12px',
            lineHeight: 1.2,
          }}
        >
          On it. Reply within one business day.
        </h2>
        <p
          style={{
            maxWidth: 540,
            fontSize: 15,
            lineHeight: 1.65,
            color: 'var(--fg-70)',
            margin: 0,
          }}
        >
          If it&apos;s a fit, Dave will send a short Calendly with two or three
          times. If it&apos;s not, he&apos;ll tell you and point you somewhere
          better.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Field
        id="c-name"
        label="Name *"
        required
        value={name}
        onChange={setName}
        autoComplete="name"
      />
      <Field
        id="c-email"
        label="Work email *"
        type="email"
        required
        value={email}
        onChange={setEmail}
        autoComplete="email"
      />
      <Field
        id="c-company"
        label="Company"
        value={company}
        onChange={setCompany}
        autoComplete="organization"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label
          htmlFor="c-message"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-70)',
          }}
        >
          The AI problem you want coached *
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="One or two sentences. What's the thing you haven't cracked?"
          style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
          paddingTop: 8,
          borderTop: '1px solid var(--fg-border)',
        }}
      >
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary"
        >
          {status === 'submitting' ? 'Sending…' : 'Book the call →'}
        </button>
        <span
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-50)',
          }}
        >
          Reply within 1 business day
        </span>
        {status === 'error' && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ff8aa5',
              width: '100%',
            }}
          >
            {errorMsg}
          </span>
        )}
      </div>
    </form>
  );
}

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: 40,
  border: '1px solid var(--fg-border)',
  background: 'var(--elev-1)',
};

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid var(--border-strong)',
  color: 'var(--fg)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  padding: '12px 14px',
  width: '100%',
  outline: 'none',
  borderRadius: 0,
};

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
};

function Field({
  id,
  label,
  type = 'text',
  required,
  value,
  onChange,
  autoComplete,
}: FieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-70)',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        style={inputStyle}
      />
    </div>
  );
}
