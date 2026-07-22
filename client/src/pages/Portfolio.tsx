/**
 * Obsidian Editorial Theme — Partnership Portfolio
 * Premium case studies, campaigns, and brand activations.
 */
import { useState } from 'react';
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const categories = ['All', 'Brand Strategy', 'Experiential', 'Speaking', 'Partnerships', 'Ventures'];

const caseStudies = [
  {
    id: 1,
    category: 'Ventures',
    title: 'Coexist Gaming',
    subtitle: 'Building a gaming culture brand from the ground up',
    description: 'Founded and scaled Coexist Gaming as a premier gaming lifestyle brand, creating community-driven activations, brand partnerships, and content that bridges gaming culture with mainstream consumer brands.',
    outcomes: ['10M+ community reach', 'Fortune 500 brand partnerships', 'National media coverage'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80',
    tags: ['Gaming', 'Brand Building', 'Community'],
  },
  {
    id: 2,
    category: 'Ventures',
    title: 'Proud Wineaux',
    subtitle: 'Redefining wine culture for diverse audiences',
    description: 'Founded Proud Wineaux to create an inclusive wine lifestyle brand that speaks authentically to underrepresented communities, building a loyal following and establishing strategic partnerships with wineries and hospitality brands.',
    outcomes: ['Sold-out events series', 'National distribution partnerships', 'Featured in major publications'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80',
    tags: ['Wine & Spirits', 'Lifestyle', 'Community'],
  },
  {
    id: 3,
    category: 'Ventures',
    title: 'Coexist Agency',
    subtitle: 'Full-service experiential marketing agency',
    description: 'Built Coexist Agency into a full-service creative and experiential marketing firm, producing brand activations, cultural events, and strategic campaigns for global brands across entertainment, technology, and consumer goods.',
    outcomes: ['100+ activations produced', 'Global brand clients', 'Multi-million dollar campaigns'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    tags: ['Agency', 'Experiential', 'Entertainment'],
  },
  {
    id: 4,
    category: 'Experiential',
    title: 'Brand Activation Series',
    subtitle: 'Immersive experiences for Fortune 500 brands',
    description: 'Designed and executed a series of immersive brand activations for Fortune 500 clients, creating memorable consumer touchpoints that drove measurable engagement, social amplification, and purchase intent.',
    outcomes: ['500K+ consumer touchpoints', '300% social engagement lift', 'Industry award recognition'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    tags: ['Experiential', 'Fortune 500', 'Events'],
  },
  {
    id: 5,
    category: 'Brand Strategy',
    title: 'Market Entry Strategy',
    subtitle: 'Entering new markets with cultural intelligence',
    description: 'Developed comprehensive market entry strategies for brands seeking to reach diverse and underserved consumer segments, combining cultural research, community partnerships, and targeted activation plans.',
    outcomes: ['New market penetration', 'Community trust built', 'Sustained revenue growth'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
    tags: ['Strategy', 'Market Entry', 'Diversity'],
  },
  {
    id: 6,
    category: 'Speaking',
    title: 'Global Conference Keynotes',
    subtitle: 'Thought leadership on culture, brand, and innovation',
    description: 'Delivered keynote addresses and panel discussions at major industry conferences, sharing insights on brand strategy, gaming culture, entrepreneurship, and the future of experiential marketing.',
    outcomes: ['50+ conferences', 'International stages', 'Industry recognition'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80',
    tags: ['Speaking', 'Thought Leadership', 'Global'],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Partnership Portfolio</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Work that defines industries and moves culture.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.60 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              A curated selection of campaigns, partnerships, ventures, and activations representing the breadth of Jaye's strategic impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ borderBottom: '1px solid oklch(0.18 0.003 60)', background: 'oklch(0.06 0.003 60)' }}>
        <div className="container py-0">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="transition-all duration-200 whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '1.125rem 1.5rem',
                  color: activeCategory === cat ? 'oklch(0.72 0.12 75)' : 'oklch(0.50 0.005 60)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeCategory === cat ? '2px solid oklch(0.72 0.12 75)' : '2px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study, i) => (
              <div
                key={study.id}
                className="reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.08 0.003 60 / 0.9) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'oklch(0.72 0.12 75)',
                        background: 'oklch(0.08 0.003 60 / 0.8)',
                        padding: '0.25rem 0.625rem',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="pt-5 pb-6" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'oklch(0.95 0.008 75)' }}>
                    {study.title}
                  </h3>
                  <p className="mt-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.55 0.005 60)' }}>
                    {study.subtitle}
                  </p>
                  <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 60)', lineHeight: 1.65 }}>
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.outcomes.map((o) => (
                      <span
                        key={o}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'oklch(0.72 0.12 75)',
                          background: 'oklch(0.72 0.12 75 / 0.08)',
                          padding: '0.25rem 0.625rem',
                          border: '1px solid oklch(0.72 0.12 75 / 0.2)',
                        }}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ background: 'oklch(0.06 0.003 60)', borderTop: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="reveal">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
              Interested in working together?
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.55 0.005 60)', marginTop: '0.5rem' }}>
              Let's discuss how Jaye can bring this level of impact to your brand.
            </p>
          </div>
          <div className="reveal flex gap-4 flex-shrink-0">
            <Link href="/contact" className="btn-gold">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
