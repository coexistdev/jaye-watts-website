/**
 * PORTFOLIO — "I didn't know she also built that."
 * Each venture is a full story, not a card.
 */
import { useState } from 'react';
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const FILTERS = ['All', 'Ventures', 'Brand Partnerships', 'Experiential', 'Advisory'];

const PROJECTS = [
  {
    title: 'Coexist Gaming',
    category: 'Ventures',
    tags: ['Gaming', 'Community', 'Brand Strategy'],
    year: '2019 – Present',
    description: 'A gaming culture company bridging the gap between gaming communities and mainstream brands. Coexist Gaming has become the trusted intermediary for Fortune 500 companies seeking authentic engagement with gaming audiences.',
    impact: 'Activated 40+ brand partnerships. Reached 2M+ gaming community members. Featured at CES and SXSW.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=85',
    featured: true,
  },
  {
    title: 'Proud Wineaux',
    category: 'Ventures',
    tags: ['Wine', 'Lifestyle', 'Community'],
    year: '2020 – Present',
    description: 'An inclusive wine lifestyle brand proving that the most powerful brand opportunities exist in the spaces traditional marketers overlook. Proud Wineaux built a community-first brand that attracted major wine and lifestyle partnerships.',
    impact: 'Built a community of 50,000+ wine enthusiasts. Secured partnerships with major wine regions and lifestyle brands.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=85',
    featured: true,
  },
  {
    title: 'Coexist Agency',
    category: 'Ventures',
    tags: ['Experiential', 'Creative', 'Marketing'],
    year: '2015 – Present',
    description: 'Full-service creative and experiential marketing agency producing brand activations, cultural campaigns, and immersive experiences for global brands seeking authentic cultural connection.',
    impact: 'Produced 200+ brand activations. Served clients across entertainment, technology, and consumer goods.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=85',
    featured: true,
  },
  {
    title: 'Gaming Industry Partnership Program',
    category: 'Brand Partnerships',
    tags: ['Gaming', 'B2B', 'Strategy'],
    year: '2021',
    description: 'Designed and launched a structured partnership program connecting a Fortune 100 technology company with gaming culture influencers, events, and communities.',
    impact: 'Delivered 340% increase in gaming audience engagement. Program adopted as ongoing company initiative.',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=85',
    featured: false,
  },
  {
    title: 'Multicultural Brand Strategy',
    category: 'Advisory',
    tags: ['Multicultural', 'Brand', 'Strategy'],
    year: '2022',
    description: 'Strategic advisory engagement helping a global consumer brand develop an authentic multicultural marketing strategy and community engagement program.',
    impact: 'Repositioned brand perception among multicultural audiences. Launched three community-driven initiatives.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=85',
    featured: false,
  },
  {
    title: 'Entertainment Brand Activation',
    category: 'Experiential',
    tags: ['Entertainment', 'Events', 'Activation'],
    year: '2023',
    description: 'Conceived and produced a multi-city brand activation for a major entertainment company, creating immersive experiences that connected the brand to music and gaming culture.',
    impact: 'Reached 500,000+ consumers across 8 cities. Generated significant earned media coverage.',
    img: 'https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=900&q=85',
    featured: false,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden" style={{ paddingBottom: '8vh' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3)' }} />
          <div className="absolute inset-0 overlay-bottom" />
          <div className="absolute inset-0 overlay-left" />
        </div>
        <div className="relative container">
          <div style={{ maxWidth: '640px' }}>
            <div className="flex items-center gap-3 mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}>
              <span className="gold-line-short" />
              <span className="label-mono" style={{ color: 'oklch(0.72 0.13 72)' }}>Partnership Portfolio</span>
            </div>
            <h1 className="display-hero" style={{ color: 'oklch(0.97 0.008 75)', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' }}>
              The work<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>speaks for itself.</em>
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-14 reveal">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.25rem',
                  border: `1px solid ${activeFilter === f ? 'oklch(0.72 0.13 72)' : 'oklch(0.88 0.010 78)'}`,
                  background: activeFilter === f ? 'oklch(0.72 0.13 72)' : 'transparent',
                  color: activeFilter === f ? 'oklch(0.10 0.005 60)' : 'oklch(0.50 0.006 65)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured projects (large) */}
          <div className="space-y-6 mb-6">
            {filtered.filter(p => p.featured).map((p, i) => (
              <div
                key={p.title}
                className="reveal grid lg:grid-cols-2 overflow-hidden"
                style={{
                  background: 'oklch(0.985 0.008 80)',
                  border: '1px solid oklch(0.90 0.010 78)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="img-zoom" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="label-mono-dark">{p.category}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'oklch(0.65 0.005 65)' }}>{p.year}</span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.25, marginBottom: '1rem' }}>{p.title}</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{p.description}</p>
                    <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)', paddingTop: '1.25rem' }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '0.375rem' }}>Impact</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.65 }}>{p.impact}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {p.tags.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid oklch(0.88 0.010 78)', color: 'oklch(0.55 0.006 65)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standard projects (grid) */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.filter(p => !p.featured).map((p, i) => (
              <div
                key={p.title}
                className="reveal card-editorial overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="img-zoom" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="label-mono-dark">{p.category}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'oklch(0.65 0.005 65)', letterSpacing: '0.1em' }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '0.625rem' }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.7 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-obsidian text-center">
        <div className="container">
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.97 0.008 75)' }}>
              Ready to add your brand to this story?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8 reveal" style={{ transitionDelay: '80ms' }}>
              <Link href="/contact" className="btn-primary">Start a Partnership</Link>
              <Link href="/why-partner" className="btn-outline-light">Why Partner with Jaye</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
