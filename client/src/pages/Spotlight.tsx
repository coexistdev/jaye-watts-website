/**
 * Obsidian Editorial Theme — In the Spotlight
 * Media appearances organized by category.
 */
import { useState } from 'react';
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const categories = ['All', 'Television', 'Podcasts', 'Interviews', 'Publications', 'Press Features', 'Videos'];

const mediaItems = [
  {
    id: 1,
    category: 'Television',
    outlet: 'Major Network',
    title: 'The Future of Brand Strategy in the Digital Age',
    description: 'Jaye discusses how brands can leverage cultural intelligence and community engagement to drive growth in an increasingly fragmented media landscape.',
    type: 'TV Segment',
    placeholder: true,
  },
  {
    id: 2,
    category: 'Podcasts',
    outlet: 'Business Innovation Podcast',
    title: 'Gaming, Culture, and the Future of Brand Partnerships',
    description: 'An in-depth conversation on how gaming culture is reshaping brand strategy and the opportunities for forward-thinking companies.',
    type: 'Podcast Episode',
    placeholder: true,
  },
  {
    id: 3,
    category: 'Publications',
    outlet: 'Forbes',
    title: 'How Jaye Watts is Redefining Strategic Brand Partnerships',
    description: 'A feature profile on Jaye\'s multidisciplinary approach to brand strategy and her work at the intersection of culture, technology, and commerce.',
    type: 'Feature Article',
    placeholder: true,
  },
  {
    id: 4,
    category: 'Interviews',
    outlet: 'Industry Leader Series',
    title: 'Building Brands That Move Culture',
    description: 'Jaye shares her philosophy on brand building, the importance of cultural authenticity, and how she approaches complex strategic challenges.',
    type: 'Video Interview',
    placeholder: true,
  },
  {
    id: 5,
    category: 'Press Features',
    outlet: 'Ad Age',
    title: 'The Rise of Multidisciplinary Brand Strategists',
    description: 'Industry analysis featuring Jaye\'s perspective on the evolving role of brand strategists in a complex, multi-platform media environment.',
    type: 'Press Feature',
    placeholder: true,
  },
  {
    id: 6,
    category: 'Podcasts',
    outlet: 'Entrepreneurship Today',
    title: 'From Music to Gaming to Wine: Building Multiple Ventures',
    description: 'Jaye discusses her entrepreneurial journey, the lessons learned from building multiple brands simultaneously, and her vision for the future.',
    type: 'Podcast Episode',
    placeholder: true,
  },
  {
    id: 7,
    category: 'Television',
    outlet: 'Business Network',
    title: 'Women in Business: Breaking Barriers in Brand Strategy',
    description: 'A panel discussion featuring Jaye on the evolving landscape for women entrepreneurs and strategists in the brand and marketing industry.',
    type: 'TV Panel',
    placeholder: true,
  },
  {
    id: 8,
    category: 'Videos',
    outlet: 'Conference Keynote',
    title: 'Culture as Strategy: The New Competitive Advantage',
    description: 'Full keynote address from a major industry conference, exploring how cultural intelligence has become the defining competitive advantage for modern brands.',
    type: 'Keynote Video',
    placeholder: true,
  },
  {
    id: 9,
    category: 'Publications',
    outlet: 'Entrepreneur Magazine',
    title: 'The Multidisciplinary Entrepreneur',
    description: 'How Jaye built a portfolio of ventures across gaming, wine, and entertainment by applying consistent strategic principles across diverse industries.',
    type: 'Feature Article',
    placeholder: true,
  },
];

export default function Spotlight() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter((m) => m.category === activeCategory);

  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">In the Spotlight</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Media appearances, features, and press coverage.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.60 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              Jaye's expertise is regularly sought by leading media outlets, podcasts, and publications across business, entertainment, and culture.
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

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="reveal group"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  border: '1px solid oklch(0.18 0.003 60)',
                  background: 'oklch(0.10 0.003 60)',
                  padding: '1.5rem',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 0.3)';
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.12 0.003 60)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.18 0.003 60)';
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.10 0.003 60)';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'oklch(0.72 0.12 75)',
                      background: 'oklch(0.72 0.12 75 / 0.08)',
                      padding: '0.2rem 0.5rem',
                      border: '1px solid oklch(0.72 0.12 75 / 0.2)',
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'oklch(0.40 0.003 60)' }}>
                    {item.type}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(0.50 0.005 60)', marginBottom: '0.5rem' }}>
                  {item.outlet}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 400, color: 'oklch(0.90 0.008 75)', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.45 0.003 60)', lineHeight: 1.65 }}>
                  {item.description}
                </p>
                {item.placeholder && (
                  <p className="mt-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'oklch(0.35 0.003 60)' }}>
                    Media link coming soon
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'oklch(0.06 0.003 60)', borderTop: '1px solid oklch(0.18 0.003 60)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="reveal">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
              Media inquiries welcome.
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.55 0.005 60)', marginTop: '0.5rem' }}>
              For interviews, features, and press opportunities.
            </p>
          </div>
          <div className="reveal flex gap-4">
            <Link href="/contact" className="btn-gold">Media Inquiry</Link>
            <Link href="/downloads" className="btn-outline-gold">Press Kit</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
