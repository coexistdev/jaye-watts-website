import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// ── DATA ──────────────────────────────────────────────────────────────────────
const STATS = [
  { number: '20+', label: 'Years of Industry Experience' },
  { number: '12+', label: 'Industries Activated' },
  { number: '3',   label: 'Continents Reached' },
  { number: '100+', label: 'Brand Partnerships Executed' },
];

const CAPABILITIES = [
  'Brand Strategy', 'Cultural Intelligence', 'Partnership Architecture',
  'Gaming & Esports', 'Wine & Hospitality', 'Music & Entertainment',
  'Experiential Marketing', 'TV & Media', 'Community Building',
  'Keynote Speaking', 'Executive Advisory', 'Product Development',
];

const WORK_ITEMS = [
  {
    category: 'Gaming & Esports',
    title: 'Building the Bridge Between Gaming Culture and Mainstream Brands',
    desc: 'Architected brand entry strategies for Fortune 500 companies entering the gaming space.',
    img: '/manus-storage/WebOptimized-2882_5013cc18.jpg',
    tags: ['Strategy', 'Gaming', 'Brand'],
  },
  {
    category: 'Wine & Hospitality',
    title: 'Redefining Luxury Wine for a New Generation of Consumers',
    desc: 'Developed and launched a premium wine brand that speaks directly to multicultural audiences.',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80',
    tags: ['Brand Launch', 'Wine', 'Culture'],
  },
  {
    category: 'Experiential Marketing',
    title: 'Immersive Brand Activations That Create Lasting Cultural Memory',
    desc: 'Designed multi-sensory experiences that turned brand moments into cultural movements.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80',
    tags: ['Events', 'Activation', 'Experience'],
  },
];

const SPEAKING_TOPICS = [
  { title: 'Culture as Competitive Advantage', desc: 'How brands that invest in cultural intelligence outperform those that rely solely on data.' },
  { title: 'The New Multicultural Consumer', desc: 'Understanding the values, behaviors, and purchasing power of today\'s diverse majority.' },
  { title: 'Gaming, Music & the Future of Brand Relevance', desc: 'Why the intersection of entertainment and commerce is the most important space in marketing.' },
  { title: 'Partnership Architecture', desc: 'Building strategic alliances that create equity, not just awareness, for all parties involved.' },
  { title: 'Authentic Storytelling at Scale', desc: 'Moving beyond performative diversity to build brands that communities actually claim as their own.' },
  { title: 'The Entrepreneur\'s Edge', desc: 'Lessons from building businesses across gaming, wine, music, and media simultaneously.' },
];

const CONFERENCES = [
  { name: 'SXSW', label: 'Keynote' }, { name: 'Cannes Lions', label: 'Speaker' },
  { name: 'CES', label: 'Panelist' }, { name: 'Forbes CMO Summit', label: 'Featured' },
  { name: 'Ad Age Next', label: 'Keynote' }, { name: 'Essence Festival', label: 'Speaker' },
  { name: 'GDC', label: 'Panelist' }, { name: 'Fast Company Innovation', label: 'Featured' },
];

const INDUSTRIES = [
  'Gaming & Esports', 'Wine & Spirits', 'Music & Entertainment', 'Technology',
  'Fashion & Lifestyle', 'Food & Beverage', 'Financial Services', 'Sports & Athletics',
  'Beauty & Wellness', 'Media & Publishing', 'Automotive', 'Travel & Hospitality',
];

const PRESS_ITEMS = [
  { outlet: 'Forbes', headline: 'How Jaye Watts Is Redefining Strategic Brand Partnerships', type: 'Feature Article', href: '#' },
  { outlet: 'Ad Age', headline: 'Women in Business: Rethinking Brand Strategy', type: 'Interview', href: '#' },
  { outlet: 'The Hollywood Reporter', headline: 'The Multihyphenate Rewriting the Rules of Brand Strategy', type: 'Profile', href: '#' },
  { outlet: 'Fast Company', headline: 'The Most Creative People in Business 2024', type: 'List Feature', href: '#' },
  { outlet: 'Variety', headline: 'Gaming, Wine, and the Art of the Cultural Pivot', type: 'Feature', href: '#' },
  { outlet: 'Entrepreneur', headline: 'Building Empires Across Industries: The Jaye Watts Playbook', type: 'Cover Story', href: '#' },
];

const ABOUT_VENTURES = [
  { title: 'Gaming Executive', desc: 'Built and scaled gaming ventures reaching millions of players globally.' },
  { title: 'Wine Entrepreneur', desc: 'Founded a premium wine brand redefining luxury for diverse audiences.' },
  { title: 'TV Personality', desc: 'Featured across major networks as a cultural authority and brand voice.' },
  { title: 'Keynote Speaker', desc: 'Delivered transformative talks at SXSW, Cannes Lions, Forbes CMO Summit.' },
];

const WHY_ITEMS = [
  { title: 'Launch Products', desc: 'Enter new markets with cultural credibility built in from day one.' },
  { title: 'Build Partnerships', desc: 'Create alliances that generate equity, not just awareness.' },
  { title: 'Enter New Markets', desc: 'Navigate gaming, wine, music, and entertainment with an insider\'s edge.' },
  { title: 'Reach Emerging Audiences', desc: 'Connect authentically with multicultural and Gen Z consumers.' },
  { title: 'Elevate Brand Perception', desc: 'Move from transactional to transformational brand relationships.' },
  { title: 'Advise Executive Leadership', desc: 'Strategic counsel at the C-suite level on culture and community.' },
];

// ── SCROLL HELPER ─────────────────────────────────────────────────────────────
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

// ── REVEAL WRAPPER COMPONENT ─────────────────────────────────────────────────
// Using a component instead of a hook inside map() to comply with Rules of Hooks
function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────────────────
function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-light)', padding: '0 2.5rem' }}>
            {item}<span style={{ marginLeft: '2.5rem', color: 'var(--gold)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── SECTION HEADER ────────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, headline, body, light = false, center = false }: {
  eyebrow: string; headline: string; body?: string; light?: boolean; center?: boolean;
}) {
  return (
    <Reveal style={{ textAlign: center ? 'center' : 'left', marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: center ? 'center' : 'flex-start', marginBottom: '1rem' }}>
        {!center && <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block', flexShrink: 0 }} />}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>{eyebrow}</span>
      </div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.85rem, 4vw, 3rem)',
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        color: light ? 'oklch(0.97 0.008 75)' : 'var(--ink)',
        maxWidth: center ? '700px' : undefined,
        margin: center ? '0 auto' : undefined,
      }}>
        {headline}
      </h2>
      {body && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          lineHeight: 1.75,
          color: light ? 'oklch(0.62 0.005 65)' : 'var(--ink-muted)',
          marginTop: '1rem',
          maxWidth: '520px',
          margin: center ? '1rem auto 0' : '1rem 0 0',
        }}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: 'white' }}>
      <Navigation />

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '10vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/manus-storage/jaye-hero-portrait_b26f5a7c.jpg"
            alt="Jaye Watts"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.38)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, oklch(0.06 0.003 60) 0%, oklch(0.06 0.003 60 / 55%) 40%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, oklch(0.06 0.003 60 / 75%) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' }}>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Strategic Brand Partner</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6.5vw, 5rem)', fontWeight: 300, lineHeight: 1.08, color: 'oklch(0.97 0.008 75)', letterSpacing: '-0.02em', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s forwards' }}>
              Where culture becomes<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>competitive advantage.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.62 0.005 65)', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards' }}>
              Jaye "Letta J" Watts has spent 20+ years not just observing culture — but creating it. As a musician, gaming executive, wine entrepreneur, experiential marketer, and TV personality, she brings a perspective no consultant can replicate.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '2.25rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' }}>
              <button onClick={() => scrollToId('why-partner')} className="btn-primary">Explore the Partnership</button>
              <button onClick={() => scrollToId('featured-work')} className="btn-outline-light">See the Work</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.95s forwards' }}>
              {['Speaker', 'Founder', 'Advisor', 'Strategist', 'Creator'].map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid oklch(1 0 0 / 20%)', color: 'oklch(0.65 0.005 65)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s forwards' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.40 0.005 65)', writingMode: 'vertical-rl' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div style={{ background: 'var(--cream)', borderTop: '1px solid oklch(0.90 0.005 78)', borderBottom: '1px solid oklch(0.90 0.005 78)', padding: '1.125rem 0', overflow: 'hidden' }}>
        <Marquee items={INDUSTRIES} />
      </div>

      {/* ══ STATS ══ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 200, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--gold)', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.number}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '0.5rem' }}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY PARTNER ══ */}
      <section id="why-partner" style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <SectionHeader
                eyebrow="The Partnership Value"
                headline="She doesn't just understand your audience. She is your audience."
                body="Jaye brings lived experience across the industries, communities, and cultural moments your brand is trying to reach. This isn't research. This is residency."
              />
              <button onClick={() => scrollToId('contact')} className="btn-outline" style={{ marginTop: '0.5rem' }}>
                Start a Conversation
              </button>
            </div>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {CAPABILITIES.map(cap => (
                  <span key={cap} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.35rem 0.75rem', border: '1px solid oklch(0.80 0.005 65)', color: 'var(--ink-light)' }}>{cap}</span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
                {WHY_ITEMS.map((item, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.4rem' }}>{item.title}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED WORK ══ */}
      <section id="featured-work" style={{ background: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
          <SectionHeader eyebrow="Featured Work" headline="She doesn't just advise brands, she builds them." />
            <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap', marginBottom: '3rem' }}>
              View All Work →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {WORK_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ background: 'white', overflow: 'hidden', transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ paddingTop: '1.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>{item.category}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '0.6rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>{item.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                      {item.tags.map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.65rem', border: '1px solid oklch(0.82 0.005 65)', color: 'var(--ink-light)' }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPEAKING ══ */}
      <section id="speaking" style={{ position: 'relative', padding: '7rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="Speaking" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.28)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, oklch(0.06 0.003 60 / 90%) 0%, oklch(0.06 0.003 60 / 40%) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Keynote Speaking</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: 'oklch(0.97 0.008 75)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Insights that shift perspective.<br />
              <em style={{ color: 'var(--gold)' }}>Keynotes that drive action.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.62 0.005 65)', lineHeight: 1.75, marginBottom: '2rem' }}>
              From SXSW to Cannes Lions, Jaye delivers conversations on culture, brand strategy, gaming, entrepreneurship, and the future of consumer connection that leave audiences with new frameworks — not just inspiration.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
              <button onClick={() => scrollToId('contact')} className="btn-primary">Book Jaye to Speak</button>
              <button onClick={() => scrollToId('contact')} className="btn-outline-light">Speaking Inquiry</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', marginTop: '5rem' }}>
            {SPEAKING_TOPICS.map((topic, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ borderTop: '1px solid oklch(1 0 0 / 15%)', padding: '1.75rem 1.5rem 1.75rem 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'oklch(0.97 0.008 75)', marginBottom: '0.6rem', lineHeight: 1.25 }}>{topic.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(0.55 0.005 65)', lineHeight: 1.65 }}>{topic.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: '4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', marginBottom: '1.5rem' }}>Conferences & Events</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'oklch(1 0 0 / 8%)' }}>
              {CONFERENCES.map((conf, i) => (
                <div key={i} style={{ background: 'oklch(0.06 0.003 60)', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'oklch(0.90 0.008 75)', marginBottom: '0.3rem' }}>{conf.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{conf.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section id="industries" style={{ background: 'white', padding: '6rem 0' }}>
        <div className="container">
          <SectionHeader
            eyebrow="One Partner. Twelve Industries."
            headline="The breadth of experience your brand needs in one relationship."
            center
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {INDUSTRIES.map(ind => (
              <span key={ind} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.35rem 0.75rem', border: '1px solid oklch(0.80 0.005 65)', color: 'var(--ink-light)' }}>{ind}</span>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => scrollToId('contact')} className="btn-outline">Explore Industry Expertise</button>
          </div>
        </div>
      </section>

      {/* ══ MEDIA & PRESS ══ */}
      <section id="media" style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <SectionHeader eyebrow="In the Spotlight" headline="The world's leading media trusts her perspective." />
            <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap', marginBottom: '3rem' }}>
              View All Media →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {PRESS_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <a href={item.href} style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid var(--gold)', padding: '1.5rem', background: 'white', transition: 'transform 0.25s cubic-bezier(0.23,1,0.32,1)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{item.outlet}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{item.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3 }}>{item.headline}</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '1rem' }}>Read →</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ background: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <SectionHeader
                eyebrow="About Jaye"
                headline="Twenty years of culture-making, condensed into one strategic partnership."
              />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Jaye "Letta J" Watts is a musician, gaming executive, wine entrepreneur, experiential marketer, TV personality, and strategic advisor. She has spent two decades at the intersection of culture and commerce, building brands that communities actually claim as their own.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Her work spans Fortune 500 brand strategy, independent venture building, keynote speaking, and executive advisory — always guided by the same principle: authentic cultural intelligence creates competitive advantage that data alone cannot replicate.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                When you partner with Jaye, you're not hiring a consultant. You're gaining access to a network, a perspective, and a track record built across industries, communities, and cultural moments that most brands spend years trying to reach.
              </p>
              <button onClick={() => scrollToId('contact')} className="btn-primary">Start a Partnership Conversation</button>
            </div>
            <div>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--cream)' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Jaye Watts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                {ABOUT_VENTURES.map((item, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.35rem' }}>{item.title}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: 'var(--obsidian)', padding: '7rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Ready to Partner</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 300, lineHeight: 1.1, color: 'oklch(0.97 0.008 75)', letterSpacing: '-0.02em', maxWidth: '700px', margin: '0 auto 1.25rem' }}>
            Ready to build something<br />
            <em style={{ color: 'var(--gold)' }}>that matters?</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.55 0.005 65)', lineHeight: 1.75, maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Whether you're launching a product, entering a new market, or building a partnership that lasts — let's start with a conversation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href="mailto:hello@jayewatts.com" className="btn-primary">Book a Conversation</a>
            <button onClick={() => {}} className="btn-outline-light">Download Media Kit</button>
          </div>
          <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {['First Name', 'Last Name'].map(label => (
                <div key={label}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', display: 'block', marginBottom: '0.4rem' }}>{label}</label>
                  <input type="text" placeholder={label} style={{ width: '100%', background: 'oklch(0.10 0.004 60)', border: '1px solid oklch(1 0 0 / 12%)', padding: '0.75rem 1rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'oklch(0.85 0.005 65)', outline: 'none' }} />
                </div>
              ))}
            </div>
            {[{ label: 'Email', type: 'email', placeholder: 'your@email.com' }, { label: 'Company', type: 'text', placeholder: 'Your Company' }].map(f => (
              <div key={f.label} style={{ marginBottom: '1rem' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', background: 'oklch(0.10 0.004 60)', border: '1px solid oklch(1 0 0 / 12%)', padding: '0.75rem 1rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'oklch(0.85 0.005 65)', outline: 'none' }} />
              </div>
            ))}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
              <textarea rows={4} placeholder="Tell me about your brand and what you're looking to achieve..." style={{ width: '100%', background: 'oklch(0.10 0.004 60)', border: '1px solid oklch(1 0 0 / 12%)', padding: '0.75rem 1rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'oklch(0.85 0.005 65)', outline: 'none', resize: 'vertical' }} />
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
