/**
 * Obsidian Editorial Theme — Downloads
 * Professional resource center.
 */
import { Link } from 'wouter';
import { toast } from 'sonner';
import PageLayout from '../components/PageLayout';

const resources = [
  {
    category: 'Press & Media',
    items: [
      {
        title: 'Press Kit',
        description: 'Complete press kit including biography, headshots, brand assets, and key talking points for media coverage.',
        format: 'PDF + ZIP',
        icon: '◈',
      },
      {
        title: 'Media Photos',
        description: 'High-resolution professional photography for editorial use, including headshots and event photography.',
        format: 'ZIP (High-Res)',
        icon: '◈',
      },
      {
        title: 'Brand Assets',
        description: 'Official logos, wordmarks, and brand guidelines for approved use in partnership materials and press coverage.',
        format: 'ZIP (Vector + PNG)',
        icon: '◈',
      },
    ],
  },
  {
    category: 'Professional Documents',
    items: [
      {
        title: 'Executive Biography',
        description: "Full executive biography covering Jaye's career history, ventures, expertise, and strategic focus areas.",
        format: 'PDF',
        icon: '◈',
      },
      {
        title: 'Executive CV',
        description: 'Comprehensive curriculum vitae detailing career history, partnerships, speaking engagements, and achievements.',
        format: 'PDF',
        icon: '◈',
      },
    ],
  },
  {
    category: 'Speaking',
    items: [
      {
        title: 'Speaker Sheet',
        description: 'One-page speaker overview including topics, audience fit, testimonials, and booking information for event organizers.',
        format: 'PDF',
        icon: '◈',
      },
    ],
  },
];

export default function Downloads() {
  const handleRequest = () => {
    toast('Download available soon. Please contact us directly for immediate access.');
  };

  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Resource Center</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Professional resources for partners and press.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.60 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              Everything you need to feature, partner with, or book Jaye — available for immediate download.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="space-y-16">
            {resources.map((group, gi) => (
              <div key={group.category} className="reveal" style={{ transitionDelay: `${gi * 100}ms` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="gold-rule-solid" style={{ width: '24px' }} />
                  <span className="section-label">{group.category}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'oklch(0.18 0.003 60)' }}>
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="group p-8 transition-colors duration-200"
                      style={{ background: 'oklch(0.08 0.003 60)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.11 0.003 60)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.08 0.003 60)'; }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span style={{ fontSize: '1.25rem', color: 'oklch(0.72 0.12 75)' }}>{item.icon}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(0.40 0.003 60)' }}>
                          {item.format}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.95 0.008 75)' }}>
                        {item.title}
                      </h3>
                      <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 60)', lineHeight: 1.65 }}>
                        {item.description}
                      </p>
                      <button
                        className="mt-6 btn-outline-gold"
                        style={{ fontSize: '0.65rem', padding: '0.5rem 1rem' }}
                        onClick={handleRequest}
                      >
                        Request Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: 'oklch(0.06 0.003 60)', borderTop: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="reveal">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
              Need something specific?
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.55 0.005 60)', marginTop: '0.5rem' }}>
              Contact us directly for custom materials or immediate access.
            </p>
          </div>
          <div className="reveal">
            <Link href="/contact" className="btn-gold">Contact Us</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
