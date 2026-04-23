'use client';

import { useState } from 'react';

const INTERESTS: { value: string; label: string }[] = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'coaching', label: 'Coaching' },
  { value: 'keynote', label: 'Keynote speaking' },
  { value: 'retreat', label: 'AI retreat' },
  { value: 'general', label: 'General inquiry' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [type, setType] = useState('consultation');
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
          phone: phone || null,
          company: company || null,
          role: role || null,
          type,
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
          padding: 48,
        }}
      >
        <div className="t-eyebrow">Inquiry received</div>
        <h2 className="t-h1" style={{ marginTop: 12 }}>
          We&apos;ve got your inquiry.
        </h2>
        <p
          style={{
            maxWidth: 560,
            fontSize: 16,
            lineHeight: 1.65,
            color: 'var(--fg-70)',
            margin: '16px 0 0',
          }}
        >
          Thanks for reaching out. We&apos;ll review your details and get back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Row>
        <Field
          id="c-name"
          label="Full name *"
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
      </Row>
      <Row>
        <Field
          id="c-phone"
          label="Phone"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
        <Field
          id="c-company"
          label="Company"
          value={company}
          onChange={setCompany}
          autoComplete="organization"
        />
      </Row>
      <Row>
        <Field
          id="c-role"
          label="Your role"
          value={role}
          onChange={setRole}
          autoComplete="organization-title"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label
            htmlFor="c-type"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--fg-70)',
            }}
          >
            I&apos;m interested in *
          </label>
          <select
            id="c-type"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={inputStyle}
          >
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.value} style={{ background: '#04102D' }}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
      </Row>
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
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you working on?"
          style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary"
        >
          {status === 'submitting' ? 'Submitting…' : 'Send inquiry →'}
        </button>
        {status === 'error' && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ff8aa5',
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
  padding: 48,
  border: '1px solid var(--fg-border)',
  background: 'var(--elev-1)',
};

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid var(--border-strong)',
  color: 'var(--fg)',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  padding: '12px 14px',
  width: '100%',
  outline: 'none',
  borderRadius: 0,
};

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
      }}
      className="contact-row"
    >
      {children}
      <style>{`@media (max-width: 640px){.contact-row{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
};

function Field({ id, label, type = 'text', required, value, onChange, autoComplete }: FieldProps) {
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
