/**
 * Obsidian Editorial Theme — Homepage
 * Cinematic hero, value proposition, featured work, media, speaking, and CTA sections.
 */
import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { value: '20+', label: 'Years of Industry Experience' },
  { value: '100+', label: 'Brand Partnerships Executed' },
  { value: '50+', label: 'Fortune 500 Engagements' },
  { value: '12', label: 'Industries Served' },
];

const capabilities = [
  'Brand Strategy',
  'Experiential Marketing',
  'Product Launch Strategy',
  'Community Engagement',
  'Strategic Partnerships',
  'Creative Direction',
  'Executive Advisory',
  'Innovation Strategy',
  'Gaming & Emerging Tech',
  'Hospitality & Luxury',
  'Wine & Spirits',
  'Keynote Speaking',
];

const featuredWork = [
  {
    number: '01',
    category: 'Gaming',
    title: 'Coexist Gaming',
    description: 'Building the intersection of gaming culture and brand strategy, creating community-driven activations that drive measurable engagement and revenue.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    href: '/portfolio',
  },
  {
    number: '02',
    category: 'Wine & Spirits',
    title: 'Proud Wineaux',
    description: 'Founder of a wine lifestyle brand that bridges culture, community, and commerce — redefining how diverse audiences engage with the wine industry.',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    href: '/portfolio',
  },
  {
    number: '03',
    category: 'Entertainment',
    title: 'Coexist Agency',
    description: 'A full-service creative agency producing experiential campaigns, brand activations, and cultural moments for global brands.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    href: '/portfolio',
  },
];

const industries = [
  'Gaming', 'Music', 'Technology', 'Hospitality', 'Wine & Spirits',
  'Entertainment', 'AI', 'Education', 'Consumer Products', 'Luxury',
  'Experiential Marketing', 'Media',
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/jaye-hero-main_1060a15d.jpg"
            alt="Jaye Watts"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.08 0.003 60) 0%, oklch(0.08 0.003 60 / 0.6) 40%, transparent 70%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, oklch(0.08 0.003 60 / 0.5) 0%, transparent 60%)' }} />
        </div>

        {/* Hero content */}
        <div className="relative container pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div
              className="flex items-center gap-4 mb-8"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Strategic Brand Partner</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 300,
                color: 'oklch(0.95 0.008 75)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
              }}
            >
              Where culture becomes<br />
              <em style={{ color: 'oklch(0.68 0.13 72)', fontStyle: 'italic' }}>competitive advantage.</em>
            </h1>

            <p
              className="mt-6 max-w-xl"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.0625rem',
                color: 'oklch(0.75 0.005 60)',
                lineHeight: 1.75,
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
              }}
            >
              Jaye "Letta J" Watts operates at the intersection of business strategy, culture, innovation, storytelling, technology, and experiential marketing. She turns attention into participation, and participation into lasting business growth.
            </p>

            <div
              className="flex flex-wrap gap-4 mt-10"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.35s',
              }}
            >
              <Link href="/contact" className="btn-gold">Book a Conversation</Link>
              <Link href="/why-partner" className="btn-outline-gold">Why Partner With Jaye</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
          style={{
            opacity: heroLoaded ? 0.5 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}
        >
          <span className="section-number" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>Scroll</span>
          <div style={{ width: '1px', height: '48px', background: 'oklch(0.72 0.12 75 / 0.5)' }} />
        </div>
      </section>

      {/* ── QUICK NAVIGATION TILES ───────────────────────────────────── */}
      <section style={{ background: 'oklch(1 0 0)', borderTop: '1px solid oklch(0.88 0.008 75)' }}>
        <div className="container py-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y" style={{ borderColor: 'oklch(0.88 0.008 75)' }}>
            {[
              { label: 'Partner With Jaye', href: '/why-partner' },
              { label: 'Speaking', href: '/speaking' },
              { label: 'Media', href: '/spotlight' },
              { label: 'Case Studies', href: '/portfolio' },
              { label: 'Press Kit', href: '/downloads' },
              { label: 'Book a Conversation', href: '/contact', highlight: true },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-center py-5 px-4 transition-all duration-200"
                style={{
                  background: item.highlight ? 'oklch(0.68 0.13 72 / 0.07)' : 'transparent',
                  borderColor: 'oklch(0.88 0.008 75)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = item.highlight ? 'oklch(0.68 0.13 72 / 0.12)' : 'oklch(0.95 0.010 78)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = item.highlight ? 'oklch(0.68 0.13 72 / 0.07)' : 'transparent';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: item.highlight ? 'oklch(0.68 0.13 72)' : 'oklch(0.40 0.005 60)',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.98 0.008 80)' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x" style={{ borderColor: 'oklch(0.88 0.008 75)' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal lg:px-10 first:pl-0 last:pr-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'oklch(0.68 0.13 72)', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p className="mt-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.005 60)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule container" />

      {/* ── VALUE PROPOSITION ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <div className="editorial-split">
            <SectionHeader
              number="01"
              label="The Partnership Value"
              title="The partner brands call when outcomes matter."
              subtitle="Jaye brings together strategy, storytelling, experiential innovation, technology, partnerships, and community engagement to deliver results that move the needle — not just the conversation."
            />
            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="reveal"
                    style={{
                      transitionDelay: `${i * 40}ms`,
                      padding: '0.75rem 1rem',
                      border: '1px solid oklch(0.88 0.008 75)',
                      background: 'oklch(0.98 0.008 80)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.30 0.005 60)' }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/why-partner" className="btn-outline-gold">
                  Explore the Full Value
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule container" />

      {/* ── FEATURED WORK ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.95 0.010 78)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12 relative">
            <SectionHeader
              number="02"
              label="Featured Work"
              title="Ventures that define categories."
            />
            <Link href="/portfolio" className="hidden lg:block btn-outline-gold">
              View All Work
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredWork.map((work, i) => (
              <Link
                key={work.number}
                href={work.href}
                className="reveal group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: 'scale(1.02)' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.07)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.02)'; }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.08 0.003 60 / 0.85) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="section-label">{work.category}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'oklch(0.95 0.008 75)', marginTop: '0.25rem' }}>
                      {work.title}
                    </h3>
                  </div>
                  <div
                    className="absolute top-4 right-4 transition-opacity duration-200"
                    style={{ opacity: 0 }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.closest('a');
                        if (parent) {
                          parent.addEventListener('mouseenter', () => { el.style.opacity = '1'; });
                          parent.addEventListener('mouseleave', () => { el.style.opacity = '0'; });
                        }
                      }
                    }}
                  >
                    <span className="section-number" style={{ color: 'oklch(0.72 0.12 75)' }}>{work.number}</span>
                  </div>
                </div>
                <div className="pt-4 pb-2" style={{ borderBottom: '1px solid oklch(0.18 0.003 60)' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.55 0.005 60)', lineHeight: 1.6 }}>
                    {work.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 lg:hidden">
            <Link href="/portfolio" className="btn-outline-gold">View All Work</Link>
          </div>
        </div>
      </section>

      {/* ── SPEAKING TEASER ──────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=85"
            alt="Jaye Watts speaking"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, oklch(0.08 0.003 60 / 0.85) 0%, oklch(0.08 0.003 60 / 0.4) 100%)' }} />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-rule-solid" style={{ width: '32px' }} />
                <span className="section-label">Keynote Speaking</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.15 }}>
                Insights that shift perspective. Keynotes that drive action.
              </h2>
              <p className="mt-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.70 0.005 60)', lineHeight: 1.7 }}>
                Jaye delivers keynote addresses and panel discussions on brand strategy, cultural innovation, gaming, entrepreneurship, and the future of experiential marketing at conferences worldwide.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/speaking" className="btn-gold">Explore Speaking</Link>
                <Link href="/contact" className="btn-outline-gold">Book Jaye to Speak</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <SectionHeader
            number="03"
            label="Industries"
            title="Expertise across every sector that shapes culture."
          />
          <div className="flex flex-wrap gap-3 mt-12">
            {industries.map((ind, i) => (
              <Link
                key={ind}
                href="/industries"
                className="reveal transition-all duration-200"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  padding: '0.625rem 1.25rem',
                  border: '1px solid oklch(0.85 0.008 75)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'oklch(0.35 0.005 60)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'oklch(0.68 0.13 72)';
                  el.style.color = 'oklch(0.55 0.12 72)';
                  el.style.background = 'oklch(0.68 0.13 72 / 0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'oklch(0.85 0.008 75)';
                  el.style.color = 'oklch(0.35 0.005 60)';
                  el.style.background = 'transparent';
                }}
              >
                {ind}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries" className="btn-outline-gold">View Industry Expertise</Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="container text-center" style={{ color: 'oklch(0.95 0.008 75)' }}>
          <div className="reveal max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-rule-solid" style={{ width: '32px' }} />
              <span className="section-label-light">Begin a Partnership</span>
              <div className="gold-rule-solid" style={{ width: '32px' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)', lineHeight: 1.1 }}>
              Ready to build something<br />
              <em style={{ color: 'oklch(0.68 0.13 72)', fontStyle: 'italic' }}>that matters?</em>
            </h2>
            <p className="mt-6 mb-10" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.65 0.005 60)', lineHeight: 1.7 }}>
              Whether you're launching a product, entering a new market, building community, or seeking a strategic advisor, Jaye brings the expertise, relationships, and execution capability to make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book a Conversation</Link>
              <Link href="/downloads" className="btn-outline-gold">Download Press Kit</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
