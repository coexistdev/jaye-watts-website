/**
 * SPEAKING — "Keynotes that make audiences rethink everything."
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const TOPICS = [
  { title: 'The Creator Economy as Competitive Advantage', description: 'How brands that invest in cultural intelligence consistently outperform those that rely on traditional marketing alone. A framework for building cultural fluency into brand strategy.' },
  { title: 'The Future of Experiential Marketing', description: 'Moving beyond events to create immersive brand ecosystems that drive lasting behavioral change and community loyalty. Real-world case studies from gaming, music, and hospitality.' },
  { title: 'Gaming, Community, and the New Consumer', description: 'Understanding the gaming generation and how brands can authentically engage with this massive, influential audience. The opportunity most brands are still missing.' },
  { title: 'Multidisciplinary Entrepreneurship', description: 'Building multiple ventures simultaneously by applying consistent strategic principles across diverse industries. The mindset, systems, and networks that make it possible.' },
  { title: 'Brand Partnerships That Actually Work', description: 'The anatomy of high-impact brand partnerships — from identification and structuring to activation and measurement. Why most partnerships fail and how to build ones that don\'t.' },
  { title: 'Innovation at the Intersection', description: 'Finding breakthrough opportunities at the crossroads of technology, culture, and consumer behavior. How to see the connections others miss and move first.' },
];

const CONFERENCES = [
  { name: 'SXSW', role: 'Keynote' },
  { name: 'Cannes Lions', role: 'Panel' },
  { name: 'CES', role: 'Keynote' },
  { name: 'Advertising Week', role: 'Panel' },
  { name: 'Forbes CMO Summit', role: 'Keynote' },
  { name: 'Gaming Industry Conference', role: 'Keynote' },
  { name: 'Wine & Spirits Industry Forum', role: 'Panel' },
  { name: 'Entrepreneurship Summit', role: 'Keynote' },
];

const FORMATS = [
  { name: 'Keynote Address', detail: 'Full keynote, 45–60 minutes' },
  { name: 'Panel Discussion', detail: 'Moderator or participant, 30–60 minutes' },
  { name: 'Fireside Chat', detail: 'Intimate conversation format, 30–45 minutes' },
  { name: 'Workshop', detail: 'Interactive session, half or full day' },
  { name: 'Executive Roundtable', detail: 'Private C-suite discussion, 60–90 minutes' },
];

export default function Speaking() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden" style={{ paddingBottom: '8vh' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=85" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3)' }} />
          <div className="absolute inset-0 overlay-bottom" />
          <div className="absolute inset-0 overlay-left" />
        </div>
        <div className="relative container">
          <div style={{ maxWidth: '680px' }}>
            <div className="flex items-center gap-3 mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}>
              <span className="gold-line-short" />
              <span className="label-mono" style={{ color: 'oklch(0.72 0.13 72)' }}>Speaking</span>
            </div>
            <h1 className="display-hero" style={{ color: 'oklch(0.97 0.008 75)', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' }}>
              Insights that shift<br />perspective. Keynotes<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>that drive action.</em>
            </h1>
            <p className="body-lg mt-6" style={{ color: 'oklch(0.65 0.005 65)', maxWidth: '520px', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards' }}>
              Jaye delivers authoritative keynotes and panel discussions on brand strategy, cultural innovation, gaming, entrepreneurship, and the future of experiential marketing.
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="container">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="gold-line-short" />
              <span className="label-mono-dark">Speaking Topics</span>
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', maxWidth: '560px', transitionDelay: '80ms' }}>
              Keynotes that move audiences to action.
            </h2>
            <p className="body-lg mt-4 reveal" style={{ color: 'oklch(0.45 0.006 65)', maxWidth: '480px', transitionDelay: '160ms' }}>
              Each keynote is tailored to your audience and objectives, drawing on real-world experience and current market intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {TOPICS.map((topic, i) => (
              <div
                key={topic.title}
                className="reveal p-8"
                style={{
                  border: '1px solid oklch(0.90 0.010 78)',
                  marginTop: i >= 3 ? '-1px' : 0,
                  marginLeft: i % 3 !== 0 ? '-1px' : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.985 0.008 80)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', display: 'block', marginBottom: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.35, marginBottom: '0.75rem' }}>{topic.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.45 0.006 65)', lineHeight: 1.75 }}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCES */}
      <section className="py-20 lg:py-28 bg-obsidian">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="gold-line-short" />
              <span className="label-mono">Conferences & Events</span>
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.97 0.008 75)', maxWidth: '560px', transitionDelay: '80ms' }}>
              From global stages to intimate summits.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {CONFERENCES.map((conf, i) => (
              <div
                key={conf.name}
                className="reveal p-6 text-center"
                style={{
                  border: '1px solid oklch(1 0 0 / 10%)',
                  marginTop: i >= 4 ? '-1px' : 0,
                  marginLeft: i % 4 !== 0 ? '-1px' : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 400, color: 'oklch(0.85 0.008 75)', lineHeight: 1.3 }}>{conf.name}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginTop: '0.375rem' }}>{conf.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">Book Jaye</span>
              </div>
              <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                Bring Jaye's perspective to your next event.
              </h2>
              <p className="body-lg mt-5 reveal" style={{ color: 'oklch(0.45 0.006 65)', transitionDelay: '160ms' }}>
                Available for keynote addresses, panel discussions, fireside chats, workshops, and executive roundtables. All engagements are customized to your audience and objectives.
              </p>
              <div className="mt-8 reveal" style={{ transitionDelay: '240ms' }}>
                <Link href="/contact" className="btn-primary">Submit Speaking Inquiry</Link>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <div className="space-y-0">
                {FORMATS.map((fmt, i) => (
                  <div
                    key={fmt.name}
                    className="flex items-center justify-between py-5"
                    style={{ borderBottom: '1px solid oklch(0.90 0.010 78)' }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)' }}>{fmt.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'oklch(0.55 0.006 65)' }}>{fmt.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
