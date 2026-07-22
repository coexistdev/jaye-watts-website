/**
 * Obsidian Editorial Theme — Speaking
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const topics = [
  {
    title: 'Culture as Competitive Advantage',
    description: 'How brands that invest in cultural intelligence consistently outperform those that rely on traditional marketing alone.',
  },
  {
    title: 'The Future of Experiential Marketing',
    description: 'Moving beyond events to create immersive brand ecosystems that drive lasting behavioral change and community loyalty.',
  },
  {
    title: 'Gaming, Community, and the New Consumer',
    description: 'Understanding the gaming generation and how brands can authentically engage with this massive, influential audience.',
  },
  {
    title: 'Multidisciplinary Entrepreneurship',
    description: 'Building multiple ventures simultaneously by applying consistent strategic principles across diverse industries.',
  },
  {
    title: 'Brand Partnerships That Actually Work',
    description: 'The anatomy of high-impact brand partnerships — from identification and structuring to activation and measurement.',
  },
  {
    title: 'Innovation at the Intersection',
    description: 'Finding breakthrough opportunities at the crossroads of technology, culture, and consumer behavior.',
  },
];

const conferences = [
  { name: 'SXSW', type: 'Keynote', placeholder: true },
  { name: 'Cannes Lions', type: 'Panel', placeholder: true },
  { name: 'CES', type: 'Keynote', placeholder: true },
  { name: 'Advertising Week', type: 'Panel', placeholder: true },
  { name: 'Forbes CMO Summit', type: 'Keynote', placeholder: true },
  { name: 'Gaming Industry Conference', type: 'Keynote', placeholder: true },
  { name: 'Wine & Spirits Industry Forum', type: 'Panel', placeholder: true },
  { name: 'Entrepreneurship Summit', type: 'Keynote', placeholder: true },
];

export default function Speaking() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=85"
            alt="Jaye Watts speaking"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.08 0.003 60) 20%, transparent 80%)' }} />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Speaking</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Insights that shift perspective. Keynotes that drive action.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.65 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '100ms' }}>
              Jaye delivers authoritative keynotes and panel discussions on brand strategy, cultural innovation, gaming, entrepreneurship, and the future of experiential marketing.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 reveal" style={{ transitionDelay: '200ms' }}>
              <Link href="/contact" className="btn-gold">Book Jaye to Speak</Link>
              <Link href="/downloads" className="btn-outline-gold">Download Speaker Sheet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <SectionHeader
            number="01"
            label="Speaking Topics"
            title="Keynotes that move audiences to action."
            subtitle="Each keynote is tailored to your audience and objectives, drawing on real-world experience and current market intelligence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-12" style={{ background: 'oklch(0.88 0.008 75)' }}>
            {topics.map((topic, i) => (
              <div
                key={topic.title}
                className="reveal p-8"
                style={{ background: 'oklch(0.98 0.008 80)', transitionDelay: `${i * 60}ms` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.95 0.010 78)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.98 0.008 80)'; }}
              >
                <div className="gold-rule-solid mb-4" style={{ width: '24px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.12 0.005 60)', lineHeight: 1.3 }}>
                  {topic.title}
                </h3>
                <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.65 }}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule container" />

      {/* Conferences */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.98 0.008 80)' }}>
        <div className="container">
          <SectionHeader
            number="02"
            label="Conferences & Events"
            title="From global stages to intimate summits."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-12" style={{ background: 'oklch(0.88 0.008 75)' }}>
            {conferences.map((conf, i) => (
              <div
                key={conf.name}
                className="reveal p-6 text-center"
                style={{ background: 'oklch(0.98 0.008 80)', transitionDelay: `${i * 50}ms` }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 400, color: 'oklch(0.14 0.005 60)' }}>
                  {conf.name}
                </p>
                <p className="mt-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.72 0.12 75)' }}>
                  {conf.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 lg:py-24" style={{ background: 'oklch(0.95 0.010 78)', borderTop: '1px solid oklch(0.88 0.008 75)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-rule-solid" style={{ width: '32px' }} />
                <span className="section-label">Book Jaye</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'oklch(0.12 0.005 60)', lineHeight: 1.2 }}>
                Bring Jaye's perspective to your next event.
              </h2>
              <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.7 }}>
                Available for keynote addresses, panel discussions, fireside chats, workshops, and executive roundtables. All engagements are customized to your audience and objectives.
              </p>
            </div>
            <div className="reveal space-y-4" style={{ transitionDelay: '100ms' }}>
              {[
                { label: 'Keynote Address', detail: 'Full keynote, 45-60 minutes' },
                { label: 'Panel Discussion', detail: 'Moderated or participant, 30-60 minutes' },
                { label: 'Fireside Chat', detail: 'Intimate conversation format, 30-45 minutes' },
                { label: 'Workshop', detail: 'Interactive session, half or full day' },
                { label: 'Executive Roundtable', detail: 'Private C-suite discussion, 60-90 minutes' },
              ].map((format) => (
                <div
                  key={format.label}
                  className="flex items-center justify-between p-4"
                  style={{ border: '1px solid oklch(0.88 0.008 75)', background: 'oklch(0.98 0.008 80)' }}
                >
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.18 0.005 60)' }}>
                    {format.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'oklch(0.45 0.003 60)' }}>
                    {format.detail}
                  </span>
                </div>
              ))}
              <div className="pt-2">
                <Link href="/contact" className="btn-gold w-full text-center block">
                  Submit Speaking Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
