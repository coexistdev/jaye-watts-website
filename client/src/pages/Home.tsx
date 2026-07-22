/**
 * HOMEPAGE — "How is one person behind all of this?"
 * A cinematic reveal experience. Each section is a new layer of credibility.
 * Design: Obsidian Editorial — dark hero, light content sections, gold accents.
 */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const STATS = [
  { value: '20+', label: 'Years of cross-industry experience' },
  { value: '12+', label: 'Industries served simultaneously' },
  { value: '3', label: 'Ventures built from the ground up' },
  { value: '100+', label: 'Brand partnerships activated' },
];

const CAPABILITIES = [
  { number: '01', title: 'Launch Products', body: 'Jaye has taken products from concept to market across gaming, wine, hospitality, and technology — with the cultural intelligence to make launches land.' },
  { number: '02', title: 'Build Partnerships', body: 'From Fortune 500 co-marketing agreements to community-first brand collaborations, Jaye structures partnerships that create lasting mutual value.' },
  { number: '03', title: 'Enter New Markets', body: 'Whether entering gaming culture, multicultural audiences, or emerging lifestyle segments, Jaye provides the intelligence and relationships to move authentically.' },
  { number: '04', title: 'Reach Emerging Audiences', body: 'Gen Z, gaming communities, multicultural consumers, and the experiential economy — Jaye\'s network spans every audience brands are trying to reach.' },
  { number: '05', title: 'Elevate Brand Perception', body: 'Repositioning brands from transactional to cultural — from vendors to community members. Jaye has done it across industries.' },
  { number: '06', title: 'Advise Executive Leadership', body: 'C-suite advisory on brand strategy, cultural positioning, and partnership development. The strategic counsel that changes how leadership thinks.' },
];

const FEATURED_VENTURES = [
  {
    name: 'Coexist Gaming',
    role: 'Founder & CEO',
    description: 'Bridging gaming culture and mainstream brands. The trusted intermediary for Fortune 500 companies seeking authentic gaming audience engagement.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&q=80',
    tag: 'Gaming',
  },
  {
    name: 'Proud Wineaux',
    role: 'Founder',
    description: 'An inclusive wine lifestyle brand proving that the most powerful brand opportunities exist in the spaces traditional marketers overlook.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80',
    tag: 'Lifestyle',
  },
  {
    name: 'Coexist Agency',
    role: 'Founder & CEO',
    description: 'Full-service creative and experiential marketing agency producing brand activations and cultural campaigns for global brands.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80',
    tag: 'Agency',
  },
];

const INDUSTRIES_PREVIEW = ['Gaming', 'Music & Entertainment', 'Technology & AI', 'Hospitality & Travel', 'Wine & Spirits', 'Sports & Fitness', 'Consumer Goods', 'Media & Publishing', 'Multicultural Marketing', 'Experiential Events', 'Brand Strategy', 'Cultural Intelligence'];

const PRESS_FEATURES = [
  { outlet: 'Forbes', title: 'How Jaye Watts is Redefining Strategic Brand Partnerships', type: 'Feature Article' },
  { outlet: 'Ad Age', title: 'The Rise of Multidisciplinary Brand Strategists', type: 'Press Feature' },
  { outlet: 'Entrepreneur', title: 'The Multidisciplinary Entrepreneur', type: 'Feature Article' },
];

// Marquee component
function Marquee({ items }: { items: string[] }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-flex', animation: 'marquee 30s linear infinite', gap: '0' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', padding: '0 2rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 300, color: 'oklch(0.65 0.005 65)', fontStyle: 'italic' }}>{item}</span>
            <span style={{ color: 'oklch(0.72 0.13 72)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Reveal hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: 'oklch(1 0 0)' }}>
      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'oklch(1 0 0 / 95%)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(0.90 0.010 78)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="24" height="24" stroke={scrolled ? 'oklch(0.10 0.005 60)' : 'oklch(0.97 0.008 75)'} strokeWidth="1.5"/>
              <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="oklch(0.72 0.13 72)"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, letterSpacing: '0.04em', color: scrolled ? 'oklch(0.10 0.005 60)' : 'oklch(0.97 0.008 75)', transition: 'color 0.4s' }}>
              Jaye Watts
            </span>
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {[
              { href: '/why-partner', label: 'Why Partner' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/industries', label: 'Industries' },
              { href: '/speaking', label: 'Speaking' },
              { href: '/about', label: 'About' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: scrolled ? 'oklch(0.42 0.006 65)' : 'oklch(0.75 0.005 65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.72 0.13 72)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? 'oklch(0.42 0.006 65)' : 'oklch(0.75 0.005 65)'; }}
              className="hidden lg:inline"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.58rem', padding: '0.5rem 1.25rem' }}>
              Book a Conversation
            </Link>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '10vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/manus-storage/jaye-hero-portrait_b26f5a7c.jpg"
            alt="Jaye Watts"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.38)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, oklch(0.06 0.003 60) 0%, oklch(0.06 0.003 60 / 60%) 40%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, oklch(0.06 0.003 60 / 80%) 0%, transparent 60%)' }} />
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)' }}>Strategic Brand Partner</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: 'oklch(0.97 0.008 75)',
              letterSpacing: '-0.02em',
              opacity: 0,
              animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s forwards',
            }}>
              Where culture becomes<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>competitive advantage.</em>
            </h1>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.0625rem',
              color: 'oklch(0.65 0.005 65)',
              lineHeight: 1.75,
              maxWidth: '540px',
              marginTop: '1.75rem',
              opacity: 0,
              animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards',
            }}>
              Jaye "Letta J" Watts has spent 20+ years not just observing culture — but creating it. As a musician, gaming executive, wine entrepreneur, experiential marketer, and TV personality, she brings a perspective no consultant can replicate.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' }}>
              <Link href="/why-partner" className="btn-primary">Explore the Partnership</Link>
              <Link href="/portfolio" className="btn-outline-light">See the Work</Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.95s forwards' }}>
              {['Speaker', 'Founder', 'Advisor', 'Strategist', 'Creator'].map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid oklch(1 0 0 / 20%)', color: 'oklch(0.70 0.005 65)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.2s forwards' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', writingMode: 'vertical-rl' }}>Scroll</span>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, oklch(0.72 0.13 72), transparent)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: 'oklch(0.985 0.008 80)', borderTop: '1px solid oklch(0.90 0.010 78)', borderBottom: '1px solid oklch(0.90 0.010 78)', padding: '1.25rem 0', overflow: 'hidden' }}>
        <Marquee items={INDUSTRIES_PREVIEW} />
      </div>

      {/* ── IDENTITY REVEAL ── */}
      <section style={{ padding: '8rem 0', background: 'oklch(1 0 0)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="lg:grid-cols-2-custom">
            <div className="reveal" style={{ maxWidth: '480px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)' }}>The Difference</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'oklch(0.10 0.005 60)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                She doesn't just understand your audience.
                <em style={{ color: 'oklch(0.52 0.12 72)', fontStyle: 'italic', display: 'block' }}>She is your audience.</em>
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Jaye "Letta J" Watts has spent 20+ years not just observing culture — but creating it. As a musician, gaming executive, wine entrepreneur, experiential marketer, and TV personality, she brings a perspective no consultant can replicate.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.8, marginBottom: '2rem' }}>
                The result is strategic counsel that is never theoretical. It is earned, tested, and proven across every industry she advises.
              </p>
              <Link href="/about" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid oklch(0.72 0.13 72)', paddingBottom: '0.125rem' }}>
                Explore the full story →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', marginTop: '5rem', borderTop: '1px solid oklch(0.90 0.010 78)' }} className="md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.value}
                className="reveal"
                style={{
                  padding: '2.5rem',
                  borderRight: i < 3 ? '1px solid oklch(0.90 0.010 78)' : 'none',
                  borderBottom: i < 2 ? '1px solid oklch(0.90 0.010 78)' : 'none',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'oklch(0.10 0.005 60)', lineHeight: 1, letterSpacing: '-0.02em' }}>{stat.value}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.55 0.006 65)', marginTop: '0.5rem', lineHeight: 1.5 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED VENTURES ── */}
      <section style={{ padding: '6rem 0 8rem', background: 'oklch(0.985 0.008 80)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)' }}>Ventures</span>
              </div>
              <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 300, color: 'oklch(0.10 0.005 60)', lineHeight: 1.2, transitionDelay: '80ms' }}>
                She doesn't advise brands.<br />She builds them.
              </h2>
            </div>
            <Link href="/portfolio" className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)', textDecoration: 'none', borderBottom: '1px solid oklch(0.72 0.13 72)', paddingBottom: '0.125rem', transitionDelay: '80ms' }}>
              View all work →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="md:grid-cols-3-fallback">
            {FEATURED_VENTURES.map((v, i) => (
              <div
                key={v.name}
                className="reveal"
                style={{
                  background: 'white',
                  border: '1px solid oklch(0.90 0.010 78)',
                  overflow: 'hidden',
                  transitionDelay: `${i * 80}ms`,
                  transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px oklch(0.10 0.005 60 / 8%)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={v.img} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)' }}>{v.role}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid oklch(0.88 0.010 78)', color: 'oklch(0.60 0.006 65)' }}>{v.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '0.625rem' }}>{v.name}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.45 0.006 65)', lineHeight: 1.7 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section style={{ padding: '8rem 0', background: 'oklch(0.06 0.003 60)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)' }}>What She Does</span>
            </div>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)', lineHeight: 1.2, maxWidth: '480px', transitionDelay: '80ms' }}>
              Every engagement is built to move the needle.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }} className="md:grid-cols-3-fallback">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.number}
                className="reveal"
                style={{
                  padding: '2.5rem',
                  border: '1px solid oklch(1 0 0 / 8%)',
                  marginTop: i >= 2 ? '-1px' : 0,
                  marginLeft: i % 2 !== 0 ? '-1px' : 0,
                  transitionDelay: `${i * 60}ms`,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.10 0.003 60)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', display: 'block', marginBottom: '1rem' }}>{cap.number}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.85 0.008 75)', lineHeight: 1.35, marginBottom: '0.75rem' }}>{cap.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.52 0.005 65)', lineHeight: 1.75 }}>{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TEASER ── */}
      <section style={{ padding: '8rem 0', background: 'oklch(1 0 0)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)' }}>Industries</span>
              </div>
              <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 300, color: 'oklch(0.10 0.005 60)', lineHeight: 1.2, transitionDelay: '80ms' }}>
                One partner. Twelve industries.
              </h2>
            </div>
            <Link href="/industries" className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)', textDecoration: 'none', borderBottom: '1px solid oklch(0.72 0.13 72)', paddingBottom: '0.125rem', transitionDelay: '80ms' }}>
              Explore all industries →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: 'Gaming', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80' },
              { name: 'Music & Entertainment', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80' },
              { name: 'Technology & AI', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80' },
              { name: 'Hospitality & Travel', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80' },
              { name: 'Wine & Spirits', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80' },
              { name: 'Sports & Fitness', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80' },
              { name: 'Consumer Goods', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80' },
              { name: 'Media & Publishing', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80' },
            ].map((ind, i) => (
              <Link
                key={ind.name}
                href="/industries"
                className="reveal"
                style={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <img src={ind.img} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, oklch(0.06 0.003 60 / 80%) 0%, transparent 60%)' }} />
                <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 400, color: 'oklch(0.97 0.008 75)', lineHeight: 1.3 }}>{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING TEASER ── */}
      <section style={{ position: 'relative', padding: '8rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=85" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, oklch(0.06 0.003 60 / 90%) 0%, oklch(0.06 0.003 60 / 50%) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '600px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)' }}>Speaking</span>
            </div>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)', lineHeight: 1.15, transitionDelay: '80ms' }}>
              Insights that shift perspective. Keynotes that drive action.
            </h2>
            <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.65 0.005 65)', lineHeight: 1.75, marginTop: '1.5rem', marginBottom: '2.5rem', transitionDelay: '160ms' }}>
              From CES to Cannes Lions, Jaye delivers authoritative keynotes on brand strategy, cultural innovation, gaming, and the future of experiential marketing.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', transitionDelay: '240ms' }}>
              <Link href="/speaking" className="btn-primary">Book Jaye to Speak</Link>
              <Link href="/speaking" className="btn-outline-light">View Topics</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESS TEASER ── */}
      <section style={{ padding: '8rem 0', background: 'oklch(0.985 0.008 80)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)' }}>Spotlight</span>
              </div>
              <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 300, color: 'oklch(0.10 0.005 60)', lineHeight: 1.2, transitionDelay: '80ms' }}>
                The world's leading media trusts her perspective.
              </h2>
            </div>
            <Link href="/spotlight" className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.52 0.12 72)', textDecoration: 'none', borderBottom: '1px solid oklch(0.72 0.13 72)', paddingBottom: '0.125rem', transitionDelay: '80ms' }}>
              View all media →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="md:grid-cols-3-fallback">
            {PRESS_FEATURES.map((pf, i) => (
              <div
                key={pf.title}
                className="reveal"
                style={{
                  padding: '2rem',
                  background: 'white',
                  border: '1px solid oklch(0.90 0.010 78)',
                  transitionDelay: `${i * 80}ms`,
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px oklch(0.10 0.005 60 / 6%)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '0.75rem' }}>{pf.outlet}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.65, marginBottom: '1rem' }}>{pf.title}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.65 0.005 65)' }}>{pf.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '10rem 0', background: 'oklch(0.06 0.003 60)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)' }}>Begin</span>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'oklch(0.72 0.13 72)' }} />
            </div>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)', lineHeight: 1.15, letterSpacing: '-0.01em', transitionDelay: '80ms' }}>
              Ready to build something<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>that matters?</em>
            </h2>
            <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.55 0.005 65)', lineHeight: 1.75, marginTop: '1.5rem', marginBottom: '3rem', transitionDelay: '160ms' }}>
              The best partnerships begin with a conversation. Jaye will tell you honestly whether and how she can help — and if she can't, she will point you toward someone who can.
            </p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', transitionDelay: '240ms' }}>
              <Link href="/contact" className="btn-primary">Book a Conversation</Link>
              <Link href="/why-partner" className="btn-outline-light">Why Partner with Jaye</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'oklch(0.04 0.002 60)', borderTop: '1px solid oklch(1 0 0 / 8%)', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '3rem' }} className="md:grid-cols-4-fallback">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" stroke="oklch(0.97 0.008 75)" strokeWidth="1.5"/>
                  <path d="M8 14 L14 8 L20 14 L14 20 Z" fill="oklch(0.72 0.13 72)"/>
                </svg>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 400, color: 'oklch(0.85 0.008 75)' }}>Jaye Watts</span>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.45 0.005 65)', lineHeight: 1.7, maxWidth: '220px' }}>
                Strategic Brand Partner. Multidisciplinary strategist transforming attention into measurable business growth.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.25rem' }}>
                {['LinkedIn', 'Instagram', 'Twitter / X'].map(s => (
                  <a key={s} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.40 0.005 65)', textDecoration: 'none' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.72 0.13 72)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.40 0.005 65)'; }}
                  >{s}</a>
                ))}
              </div>
            </div>
            {[
              { title: 'My Work', links: [{ href: '/why-partner', label: 'Why Partner' }, { href: '/portfolio', label: 'Portfolio' }, { href: '/industries', label: 'Industries' }, { href: '/speaking', label: 'Speaking' }] },
              { title: 'About', links: [{ href: '/spotlight', label: 'In the Spotlight' }, { href: '/about', label: 'About Jaye' }, { href: '/downloads', label: 'Downloads' }, { href: '/contact', label: 'Contact' }] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '1.25rem' }}>{col.title}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {col.links.map(link => (
                    <Link key={link.href} href={link.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 65)', textDecoration: 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.85 0.008 75)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.50 0.005 65)'; }}
                    >{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '1.25rem' }}>Ready to transform your brand's impact?</p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '0.58rem', padding: '0.625rem 1.25rem' }}>Book a Conversation</Link>
            </div>
          </div>
          <div style={{ borderTop: '1px solid oklch(1 0 0 / 8%)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'oklch(0.35 0.005 65)' }}>© 2026 Jaye "Letta J" Watts. All rights reserved.</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'oklch(0.35 0.005 65)' }}>Strategic Brand Partner</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
