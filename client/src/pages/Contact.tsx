/**
 * Obsidian Editorial Theme — Contact
 * Dedicated inquiry forms for different partnership types.
 */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import PageLayout from '../components/PageLayout';

const inquiryTypes = [
  { id: 'brand-partnership', label: 'Brand Partnership' },
  { id: 'speaking', label: 'Speaking Engagement' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'advisory', label: 'Advisory' },
  { id: 'media', label: 'Media Inquiry' },
  { id: 'investment', label: 'Investment Opportunity' },
];

interface FormData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export default function Contact() {
  const [activeType, setActiveType] = useState('brand-partnership');
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Your inquiry has been received. Jaye\'s team will be in touch within 48 hours.');
    reset();
  };

  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'oklch(0.98 0.008 80)', borderBottom: '1px solid oklch(0.88 0.008 75)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Contact</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.12 0.005 60)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Begin a conversation.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              Whether you're exploring a brand partnership, booking a keynote, or seeking strategic advisory, Jaye's team responds to all qualified inquiries within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Inquiry type selector */}
            <div className="lg:col-span-2 reveal">
              <p className="section-label mb-6">Inquiry Type</p>
              <div className="space-y-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className="w-full text-left p-4 transition-all duration-200"
                    style={{
                      border: '1px solid',
                      borderColor: activeType === type.id ? 'oklch(0.68 0.13 72)' : 'oklch(0.88 0.008 75)',
                      background: activeType === type.id ? 'oklch(0.68 0.13 72 / 0.07)' : 'oklch(0.98 0.008 80)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        color: activeType === type.id ? 'oklch(0.50 0.12 72)' : 'oklch(0.35 0.005 60)',
                      }}
                    >
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: '1px solid oklch(0.88 0.008 75)' }}>
                <p className="section-label mb-4">Response Time</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.7 }}>
                  All qualified inquiries receive a response within 48 business hours. For urgent matters, please indicate in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal" style={{ transitionDelay: '100ms' }}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Full Name *</label>
                    <input
                      {...register('name', { required: true })}
                      placeholder="Your full name"
                      className="w-full p-4 transition-colors duration-200"
                      style={{
                        background: 'oklch(0.98 0.008 80)',
                        border: '1px solid oklch(0.88 0.008 75)',
                        color: 'oklch(0.14 0.005 60)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.68 0.13 72)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.008 75)'; }}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Title / Role</label>
                    <input
                      {...register('title')}
                      placeholder="Chief Marketing Officer"
                      className="w-full p-4 transition-colors duration-200"
                      style={{
                        background: 'oklch(0.98 0.008 80)',
                        border: '1px solid oklch(0.88 0.008 75)',
                        color: 'oklch(0.14 0.005 60)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.68 0.13 72)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.008 75)'; }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Company / Organization *</label>
                    <input
                      {...register('company', { required: true })}
                      placeholder="Your organization"
                      className="w-full p-4"
                      style={{
                        background: 'oklch(0.98 0.008 80)',
                        border: '1px solid oklch(0.88 0.008 75)',
                        color: 'oklch(0.14 0.005 60)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.68 0.13 72)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.008 75)'; }}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email Address *</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="your@company.com"
                      className="w-full p-4"
                      style={{
                        background: 'oklch(0.98 0.008 80)',
                        border: '1px solid oklch(0.88 0.008 75)',
                        color: 'oklch(0.14 0.005 60)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.68 0.13 72)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.008 75)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={6}
                    placeholder="Please describe your partnership opportunity, speaking engagement, or inquiry in detail. Include relevant timelines, objectives, and any specific requirements."
                    className="w-full p-4 resize-none"
                    style={{
                      background: 'oklch(0.98 0.008 80)',
                      border: '1px solid oklch(0.88 0.008 75)',
                      color: 'oklch(0.14 0.005 60)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      lineHeight: 1.65,
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'oklch(0.68 0.13 72)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.008 75)'; }}
                  />
                </div>

                <input type="hidden" {...register('inquiryType')} value={activeType} />

                <div className="flex items-center justify-between pt-2">
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'oklch(0.50 0.005 60)' }}>
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold"
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
