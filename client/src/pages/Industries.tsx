/**
 * Obsidian Editorial Theme — Industries
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const industries = [
  {
    name: 'Gaming',
    description: 'As founder of Coexist Gaming, Jaye has deep roots in gaming culture — from esports activations to brand integrations and community building. She understands how to connect brands authentically with the gaming community.',
    highlights: ['Esports activations', 'Brand integrations', 'Community building', 'Gaming lifestyle'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&q=80',
  },
  {
    name: 'Music',
    description: 'With a music career spanning multiple decades, Jaye brings authentic cultural credibility to music industry partnerships, artist collaborations, and entertainment brand strategy.',
    highlights: ['Artist partnerships', 'Label strategy', 'Music marketing', 'Cultural credibility'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80',
  },
  {
    name: 'Technology',
    description: 'Bridging the gap between technology companies and mainstream consumer audiences through culturally intelligent marketing, community engagement, and strategic brand positioning.',
    highlights: ['Consumer tech', 'B2B positioning', 'Product launches', 'Innovation narrative'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
  },
  {
    name: 'Hospitality',
    description: 'Extensive hospitality industry experience spanning luxury hotels, experiential dining, and lifestyle brands — creating premium guest experiences and driving brand loyalty.',
    highlights: ['Luxury hotels', 'Experiential dining', 'Brand loyalty', 'Premium experiences'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80',
  },
  {
    name: 'Wine & Spirits',
    description: 'As founder of Proud Wineaux, Jaye has transformed how diverse audiences engage with wine culture — bringing expertise in lifestyle marketing, community building, and distribution strategy.',
    highlights: ['Lifestyle marketing', 'Diverse audiences', 'Distribution strategy', 'Brand building'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80',
  },
  {
    name: 'Entertainment',
    description: 'Deep entertainment industry relationships and experience spanning film, television, music, and live events — connecting brands with cultural moments that resonate.',
    highlights: ['Film & TV', 'Live events', 'Brand integrations', 'Cultural moments'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80',
  },
  {
    name: 'AI & Emerging Tech',
    description: 'Navigating the rapidly evolving AI landscape to help brands understand, adopt, and communicate emerging technologies in ways that build trust and drive adoption.',
    highlights: ['AI strategy', 'Tech adoption', 'Innovation narrative', 'Future positioning'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80',
  },
  {
    name: 'Luxury',
    description: 'Understanding the nuances of luxury brand positioning, high-net-worth consumer engagement, and the premium experiences that define category leadership.',
    highlights: ['Luxury positioning', 'HNW audiences', 'Premium experiences', 'Brand prestige'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80',
  },
];

export default function Industries() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Industries</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Expertise across every sector that shapes culture.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.60 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              Jaye's multidisciplinary background spans 12+ industries, enabling her to identify cross-sector opportunities and bring fresh perspectives to complex brand challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="space-y-0">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal grid lg:grid-cols-2 gap-0"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderBottom: '1px solid oklch(0.18 0.003 60)',
                }}
              >
                <div
                  className="p-8 lg:p-12"
                  style={{ background: i % 2 === 0 ? 'oklch(0.08 0.003 60)' : 'oklch(0.10 0.003 60)' }}
                >
                  <span className="section-number">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
                    {ind.name}
                  </h2>
                  <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.55 0.005 60)', lineHeight: 1.7 }}>
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {ind.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'oklch(0.50 0.005 60)',
                          border: '1px solid oklch(0.22 0.003 60)',
                          padding: '0.25rem 0.625rem',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.6) saturate(0.8)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'oklch(0.08 0.003 60 / 0.3)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: 'oklch(0.06 0.003 60)', borderTop: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container text-center">
          <div className="reveal max-w-lg mx-auto">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
              Your industry. Jaye's expertise.
            </h3>
            <p className="mt-4 mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.55 0.005 60)', lineHeight: 1.7 }}>
              Don't see your industry listed? Jaye's cross-sector expertise applies to virtually any brand challenge.
            </p>
            <Link href="/contact" className="btn-gold">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
