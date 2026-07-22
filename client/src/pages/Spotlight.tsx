/**
 * IN THE SPOTLIGHT — "The world's leading media trusts her perspective."
 * Each feature is a credibility signal, not just a press clip.
 */
import { useState } from 'react';
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const FILTERS = ['All', 'Television', 'Podcasts', 'Interviews', 'Publications', 'Press Features', 'Videos'];

const FEATURES = [
  { type: 'Television', format: 'TV Segment', outlet: 'Major Network', title: 'The Future of Brand Strategy in the Digital Age', description: 'Jaye discusses how brands can leverage cultural intelligence and community engagement to drive growth in an increasingly fragmented media landscape.', img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80' },
  { type: 'Podcasts', format: 'Podcast Episode', outlet: 'Business Innovation Podcast', title: 'Gaming, Culture, and the Future of Brand Partnerships', description: 'An in-depth conversation on how gaming culture is reshaping brand strategy and the opportunities for forward-thinking companies.', img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80' },
  { type: 'Publications', format: 'Feature Article', outlet: 'Forbes', title: 'How Jaye Watts is Redefining Strategic Brand Partnerships', description: 'A feature profile on Jaye\'s multidisciplinary approach to brand strategy and her work at the intersection of culture, technology, and commerce.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80' },
  { type: 'Interviews', format: 'Video Interview', outlet: 'Industry Leader Series', title: 'Building Brands That Move Culture', description: 'Jaye shares her philosophy on brand building, the importance of cultural authenticity, and how she approaches complex strategic challenges.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80' },
  { type: 'Press Features', format: 'Press Feature', outlet: 'Ad Age', title: 'The Rise of Multidisciplinary Brand Strategists', description: 'Industry analysis featuring Jaye\'s perspective on the evolving role of brand strategists in a complex, multi-platform media environment.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80' },
  { type: 'Podcasts', format: 'Podcast Episode', outlet: 'Entrepreneurship Today', title: 'From Music to Gaming to Wine: Building Multiple Ventures', description: 'Jaye discusses her entrepreneurial journey, the lessons learned from building multiple ventures simultaneously, and her vision for the future.', img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80' },
  { type: 'Television', format: 'TV Panel', outlet: 'Business Network', title: 'Women in Business: Breaking Barriers in Brand Strategy', description: 'A panel discussion featuring Jaye on the evolving landscape for women entrepreneurs and strategists in the brand and marketing industry.', img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80' },
  { type: 'Videos', format: 'Keynote Video', outlet: 'Conference Keynote', title: 'Culture as Strategy: The New Competitive Advantage', description: 'Full keynote address from a major industry conference, exploring how cultural intelligence has become the defining competitive advantage for modern brands.', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  { type: 'Publications', format: 'Feature Article', outlet: 'Entrepreneur Magazine', title: 'The Multidisciplinary Entrepreneur', description: 'How Jaye built a portfolio of ventures across gaming, wine, and entertainment by applying consistent strategic principles across diverse industries.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80' },
];

const TYPE_COLORS: Record<string, string> = {
  Television: 'oklch(0.35 0.10 250)',
  Podcasts: 'oklch(0.35 0.10 150)',
  Publications: 'oklch(0.35 0.10 30)',
  Interviews: 'oklch(0.35 0.10 300)',
  'Press Features': 'oklch(0.35 0.10 200)',
  Videos: 'oklch(0.35 0.10 350)',
};

export default function Spotlight() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? FEATURES : FEATURES.filter(f => f.type === activeFilter);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="py-24 lg:py-32" style={{ background: 'oklch(0.985 0.008 80)', borderBottom: '1px solid oklch(0.90 0.010 78)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">In the Spotlight</span>
              </div>
              <h1 className="display-hero reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                The world's leading<br />
                media trusts her<br />
                <em style={{ color: 'oklch(0.52 0.12 72)', fontStyle: 'italic' }}>perspective.</em>
              </h1>
            </div>
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: '200ms' }}>
              <p className="body-lg" style={{ color: 'oklch(0.42 0.006 65)' }}>
                Jaye's expertise is regularly sought by leading media outlets, podcasts, and publications across business, entertainment, and culture. Each appearance is a signal of the trust the industry places in her thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-6 bg-white" style={{ borderBottom: '1px solid oklch(0.90 0.010 78)', position: 'sticky', top: '72px', zIndex: 40 }}>
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 1rem',
                  border: `1px solid ${activeFilter === f ? 'oklch(0.52 0.12 72)' : 'oklch(0.88 0.010 78)'}`,
                  background: activeFilter === f ? 'oklch(0.52 0.12 72)' : 'transparent',
                  color: activeFilter === f ? 'white' : 'oklch(0.50 0.006 65)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 lg:py-24 bg-canvas">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={item.title}
                className="reveal card-editorial overflow-hidden group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="img-zoom" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem',
                      background: `${TYPE_COLORS[item.type] || 'oklch(0.35 0.06 65)'}22`,
                      color: TYPE_COLORS[item.type] || 'oklch(0.35 0.06 65)',
                      border: `1px solid ${TYPE_COLORS[item.type] || 'oklch(0.35 0.06 65)'}44`,
                    }}>{item.type}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'oklch(0.65 0.005 65)' }}>{item.format}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)', marginBottom: '0.5rem' }}>{item.outlet}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.35, marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.45 0.006 65)', lineHeight: 1.7 }}>{item.description}</p>
                  <div className="mt-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.65 0.005 65)' }}>Media link coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA INQUIRY CTA */}
      <section className="py-16" style={{ background: 'oklch(0.985 0.008 80)', borderTop: '1px solid oklch(0.90 0.010 78)' }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.25 }}>Media inquiries welcome.</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.45 0.006 65)', marginTop: '0.5rem' }}>For interviews, features, and press opportunities.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">Media Inquiry</Link>
              <Link href="/downloads" className="btn-secondary">Press Kit</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
