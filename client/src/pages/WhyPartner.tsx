/**
 * Obsidian Editorial Theme — Why Partner With Jaye
 * Explains business value, capabilities, and outcomes.
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const capabilities = [
  {
    number: '01',
    title: 'Product Launch Strategy',
    description: 'From pre-launch positioning to post-launch amplification, Jaye architects go-to-market strategies that create cultural moments and drive measurable adoption.',
  },
  {
    number: '02',
    title: 'Brand Strategy',
    description: 'Deep brand audits, competitive positioning, and narrative frameworks that clarify who you are, who you serve, and why it matters to the market.',
  },
  {
    number: '03',
    title: 'Experiential Marketing',
    description: 'Designing immersive brand experiences that transform passive audiences into active participants and brand advocates.',
  },
  {
    number: '04',
    title: 'Community Engagement',
    description: 'Building authentic communities around brands through cultural fluency, trust-based programming, and long-term relationship architecture.',
  },
  {
    number: '05',
    title: 'Strategic Partnerships',
    description: 'Identifying, structuring, and activating brand partnerships that create mutual value and expand market reach.',
  },
  {
    number: '06',
    title: 'Creative Direction',
    description: 'Overseeing the creative vision for campaigns, activations, and brand expressions that resonate with target audiences.',
  },
  {
    number: '07',
    title: 'Executive Advisory',
    description: 'Serving as a trusted strategic advisor to C-suite executives navigating brand transformation, market entry, and cultural relevance.',
  },
  {
    number: '08',
    title: 'Innovation Strategy',
    description: 'Identifying emerging opportunities at the intersection of technology, culture, and consumer behavior to position brands ahead of the curve.',
  },
  {
    number: '09',
    title: 'Gaming & Emerging Technology',
    description: 'Helping brands navigate the gaming ecosystem, Web3, AI, and emerging platforms to reach new audiences and create new revenue streams.',
  },
  {
    number: '10',
    title: 'Hospitality & Luxury Experiences',
    description: 'Crafting premium brand experiences in hospitality and luxury that reinforce brand equity and deepen customer loyalty.',
  },
  {
    number: '11',
    title: 'Wine & Spirits',
    description: 'Deep industry expertise in wine and spirits marketing, distribution strategy, and lifestyle brand building for diverse audiences.',
  },
  {
    number: '12',
    title: 'Keynote Speaking',
    description: 'Delivering authoritative keynotes and panel discussions that position your event at the forefront of industry conversation.',
  },
];

const outcomes = [
  { metric: 'Increased brand awareness', detail: 'Through culturally resonant campaigns and strategic media placement' },
  { metric: 'New market penetration', detail: 'Entering underserved segments with authentic, community-first strategies' },
  { metric: 'Partnership revenue', detail: 'Structuring deals that create sustainable, recurring revenue streams' },
  { metric: 'Executive credibility', detail: 'Positioning leadership as thought leaders in their respective industries' },
  { metric: 'Community growth', detail: 'Building loyal audiences that amplify brand messages organically' },
  { metric: 'Product adoption', detail: 'Driving trial, conversion, and retention through strategic storytelling' },
];

export default function WhyPartner() {
  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'oklch(0.98 0.008 80)', borderBottom: '1px solid oklch(0.88 0.008 75)' }}>
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">Why Partner With Jaye</span>
            </div>
            <h1
              className="reveal"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.12 0.005 60)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              The business case for partnering with a multidisciplinary strategist.
            </h1>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.75, maxWidth: '640px', transitionDelay: '100ms' }}>
              Jaye Watts brings together 20+ years of cross-industry expertise to help organizations solve complex brand challenges, enter new markets, and build lasting cultural relevance.
            </p>
          </div>
        </div>
      </section>

      {/* The Value Proposition */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                number="01"
                label="The Value"
                title="From attention to measurable growth."
                subtitle="Most strategists operate in one lane. Jaye operates across all of them simultaneously — bringing the rare ability to connect brand strategy, cultural insight, technology, and execution into a single, coherent partnership."
              />
              <div className="mt-10 reveal" style={{ transitionDelay: '150ms' }}>
                <Link href="/contact" className="btn-gold">Begin a Conversation</Link>
              </div>
            </div>
            <div className="space-y-6">
              {outcomes.map((o, i) => (
                <div
                  key={o.metric}
                  className="reveal"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                    padding: '1.25rem 1.5rem',
                    border: '1px solid oklch(0.88 0.008 75)',
                    background: 'oklch(0.98 0.008 80)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, color: 'oklch(0.55 0.12 72)' }}>
                    {o.metric}
                  </p>
                  <p className="mt-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.6 }}>
                    {o.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule container" />

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.95 0.010 78)' }}>
        <div className="container">
          <SectionHeader
            number="02"
            label="Capabilities"
            title="A full spectrum of strategic services."
            subtitle="Each capability is backed by real-world execution, measurable outcomes, and deep industry relationships."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-12" style={{ background: 'oklch(0.88 0.008 75)' }}>
            {capabilities.map((cap, i) => (
              <div
                key={cap.number}
                className="reveal p-8 group transition-colors duration-200"
                style={{ background: 'oklch(1 0 0)', transitionDelay: `${i * 50}ms` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.98 0.008 80)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'oklch(1 0 0)'; }}
              >
                <span className="section-number">{cap.number}</span>
                <h3 className="mt-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.14 0.005 60)' }}>
                  {cap.title}
                </h3>
                <p className="mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.42 0.005 60)', lineHeight: 1.65 }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-obsidian">
        <div className="container text-center" style={{ color: 'oklch(0.95 0.008 75)' }}>
          <div className="reveal max-w-xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)' }}>
              Ready to explore a partnership?
            </h2>
            <p className="mt-4 mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.65 0.005 60)', lineHeight: 1.7 }}>
              Schedule a conversation to discuss how Jaye can help your organization achieve its strategic objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book a Conversation</Link>
              <Link href="/portfolio" className="btn-outline-gold">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
