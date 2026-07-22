/**
 * CONTACT — "The right conversation changes everything."
 * Not a form. An invitation.
 */
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const INQUIRY_TYPES = [
  { value: 'partnership', label: 'Brand Partnership' },
  { value: 'advisory', label: 'Strategic Advisory' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'media', label: 'Media / Press Inquiry' },
  { value: 'other', label: 'Other' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="py-24 lg:py-32" style={{ background: 'oklch(0.985 0.008 80)', borderBottom: '1px solid oklch(0.90 0.010 78)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">Contact</span>
              </div>
              <h1 className="display-hero reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                The right conversation<br />
                <em style={{ color: 'oklch(0.52 0.12 72)', fontStyle: 'italic' }}>changes everything.</em>
              </h1>
            </div>
            <div className="lg:col-span-6 reveal" style={{ transitionDelay: '200ms' }}>
              <p className="body-lg" style={{ color: 'oklch(0.42 0.006 65)', maxWidth: '440px' }}>
                Whether you are exploring a brand partnership, seeking strategic advisory, booking a speaking engagement, or making a media inquiry — start here.
              </p>
              <p className="body-lg mt-4" style={{ color: 'oklch(0.42 0.006 65)', maxWidth: '440px' }}>
                Jaye reviews every inquiry personally and responds within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7 reveal">
              {submitted ? (
                <div style={{ padding: '4rem 3rem', border: '1px solid oklch(0.90 0.010 78)', background: 'oklch(0.985 0.008 80)', textAlign: 'center' }}>
                  <span style={{ color: 'oklch(0.72 0.13 72)', fontSize: '2rem', display: 'block', marginBottom: '1.5rem' }}>◆</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '1rem' }}>
                    Message received.
                  </h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.45 0.006 65)', lineHeight: 1.75 }}>
                    Thank you for reaching out. Jaye will review your inquiry and respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.55 0.006 65)', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid oklch(0.88 0.010 78)', background: 'white', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.10 0.005 60)', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'oklch(0.72 0.13 72)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'oklch(0.88 0.010 78)'; }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.55 0.006 65)', display: 'block', marginBottom: '0.5rem' }}>Company / Organization</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid oklch(0.88 0.010 78)', background: 'white', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.10 0.005 60)', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'oklch(0.72 0.13 72)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'oklch(0.88 0.010 78)'; }}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.55 0.006 65)', display: 'block', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid oklch(0.88 0.010 78)', background: 'white', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.10 0.005 60)', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'oklch(0.72 0.13 72)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'oklch(0.88 0.010 78)'; }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.55 0.006 65)', display: 'block', marginBottom: '0.5rem' }}>Nature of Inquiry *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {INQUIRY_TYPES.map(t => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setForm({ ...form, type: t.value })}
                          style={{
                            padding: '0.625rem 0.875rem',
                            border: `1px solid ${form.type === t.value ? 'oklch(0.72 0.13 72)' : 'oklch(0.88 0.010 78)'}`,
                            background: form.type === t.value ? 'oklch(0.72 0.13 72)' : 'white',
                            color: form.type === t.value ? 'oklch(0.10 0.005 60)' : 'oklch(0.50 0.006 65)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.55rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            textAlign: 'left',
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.55 0.006 65)', display: 'block', marginBottom: '0.5rem' }}>Tell Jaye About Your Vision *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid oklch(0.88 0.010 78)', background: 'white', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.10 0.005 60)', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'oklch(0.72 0.13 72)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'oklch(0.88 0.010 78)'; }}
                      placeholder="Share your brand challenge, partnership idea, or speaking opportunity. The more context you provide, the more useful Jaye's response will be."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full" style={{ justifyContent: 'center' }}>
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-5 space-y-10 reveal" style={{ transitionDelay: '120ms' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '0.75rem' }}>Response Time</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.4 }}>Within 48 hours for all inquiries. Jaye reads every message personally.</p>
              </div>
              <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)', paddingTop: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '0.75rem' }}>What to Expect</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.75 }}>
                  A direct, honest conversation about whether and how Jaye can help. No sales pitch. No gatekeeping. Just a genuine assessment of fit and opportunity.
                </p>
              </div>
              <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)', paddingTop: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '1rem' }}>Connect</p>
                <div className="flex gap-4">
                  {['LinkedIn', 'Instagram', 'Twitter / X'].map(platform => (
                    <a
                      key={platform}
                      href="#"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.006 65)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.52 0.12 72)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.50 0.006 65)'; }}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
