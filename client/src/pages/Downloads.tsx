import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const SECTIONS = [
  {
    title: 'Press & Media',
    items: [
      { icon: '◆', format: 'PDF + ZIP', title: 'Press Kit', description: 'Complete press kit including biography, headshots, brand assets, and key talking points for media coverage.' },
      { icon: '◆', format: 'ZIP (High-Res)', title: 'Media Photos', description: 'High-resolution professional photography for editorial use, including headshots and event photography.' },
      { icon: '◆', format: 'ZIP (Vector + PNG)', title: 'Brand Assets', description: 'Official logos, wordmarks, and brand guidelines for approved use in partnership materials and press coverage.' },
    ],
  },
  {
    title: 'Professional Documents',
    items: [
      { icon: '◆', format: 'PDF', title: 'Executive Biography', description: 'Full executive biography covering Jaye\'s career history, ventures, expertise, and strategic focus areas.' },
      { icon: '◆', format: 'PDF', title: 'Executive CV', description: 'Comprehensive curriculum vitae detailing career history, partnerships, speaking engagements, and achievements.' },
    ],
  },
  {
    title: 'Speaking',
    items: [
      { icon: '◆', format: 'PDF', title: 'Speaker Sheet', description: 'One-page speaker overview including topics, audience fit, testimonials, and booking information for event organizers.' },
    ],
  },
];

export default function Downloads() {
  const handleRequest = () => {
    window.location.href = '/contact';
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="py-24 lg:py-32" style={{ background: 'oklch(0.985 0.008 80)', borderBottom: '1px solid oklch(0.90 0.010 78)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">Resource Center</span>
              </div>
              <h1 className="display-hero reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                Professional resources<br />
                for partners<br />
                <em style={{ color: 'oklch(0.52 0.12 72)', fontStyle: 'italic' }}>and press.</em>
              </h1>
            </div>
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: '200ms' }}>
              <p className="body-lg" style={{ color: 'oklch(0.42 0.006 65)' }}>
                Everything you need to feature, partner with, or book Jaye — available for immediate download upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="container">
          {SECTIONS.map((section, si) => (
            <div key={section.title} className={si > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-3 mb-8 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">{section.title}</span>
              </div>
              <div className={`grid gap-6 ${section.items.length === 3 ? 'md:grid-cols-3' : section.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                {section.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="reveal card-editorial p-8"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span style={{ color: 'oklch(0.72 0.13 72)', fontSize: '1rem' }}>{item.icon}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.65 0.005 65)' }}>{item.format}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '0.625rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.45 0.006 65)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{item.description}</p>
                    <button
                      onClick={handleRequest}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        padding: '0.6rem 1.25rem',
                        border: '1px solid oklch(0.88 0.010 78)',
                        background: 'transparent',
                        color: 'oklch(0.42 0.006 65)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.72 0.13 72)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.52 0.12 72)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.88 0.010 78)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.42 0.006 65)';
                      }}
                    >
                      Request Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'oklch(0.985 0.008 80)', borderTop: '1px solid oklch(0.90 0.010 78)' }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.25 }}>Need something specific?</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.45 0.006 65)', marginTop: '0.5rem' }}>Contact us directly for custom materials or immediate access.</p>
            </div>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
