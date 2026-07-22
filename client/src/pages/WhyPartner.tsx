/**
 * WHY PARTNER — Emotional proof-of-concept experience.
 * Makes the visitor feel the value before they read the words.
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Lived Experience Across Every Industry She Advises',
    body: 'Jaye has not just consulted in gaming, music, hospitality, wine, and technology. She has built companies in them. This means strategic advice grounded in operational reality, not theory.',
  },
  {
    number: '02',
    title: 'Cultural Intelligence That Cannot Be Purchased',
    body: 'Twenty years of authentic community building across gaming, music, and lifestyle gives Jaye access and credibility that no agency or consultant can replicate. She is the bridge brands cannot build alone.',
  },
  {
    number: '03',
    title: 'A Network Built on Genuine Relationships',
    body: 'From C-suite executives to cultural tastemakers, Jaye\'s network spans industries and influence levels. When she makes an introduction, it lands because it comes from trust, not transaction.',
  },
  {
    number: '04',
    title: 'Execution, Not Just Strategy',
    body: 'Jaye does not hand over a deck and disappear. She stays in the work, from ideation through activation, ensuring that strategy becomes measurable results.',
  },
  {
    number: '05',
    title: 'A Multiplier, Not a Vendor',
    body: 'Partners describe working with Jaye as having a secret weapon. She amplifies internal teams, accelerates timelines, and opens doors that would otherwise take years to reach.',
  },
];

const PARTNERSHIP_TYPES = [
  {
    title: 'Strategic Brand Advisory',
    description: 'Ongoing strategic counsel for brands navigating cultural relevance, market expansion, or audience transformation.',
    ideal: 'CMOs, brand teams, and founders seeking a trusted strategic partner.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80',
  },
  {
    title: 'Partnership Development',
    description: 'Identifying, structuring, and activating brand partnerships that create mutual value and long-term equity.',
    ideal: 'Brands seeking co-marketing, co-creation, or ecosystem partnerships.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80',
  },
  {
    title: 'Market Entry Strategy',
    description: 'Deep cultural and competitive intelligence to help brands enter gaming, music, hospitality, or emerging markets authentically.',
    ideal: 'Established brands expanding into new verticals or demographics.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&q=80',
  },
  {
    title: 'Experiential & Activation',
    description: 'Designing and producing brand experiences that create genuine emotional connection and lasting cultural impact.',
    ideal: 'Brands investing in events, activations, and community-building.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&q=80',
  },
];

const PROOF_POINTS = [
  '"Working with Jaye fundamentally changed how we think about our brand\'s relationship with culture."',
  '"She identified a partnership opportunity we had been missing for three years and activated it in 90 days."',
  '"Jaye doesn\'t just advise. She becomes part of your team and your mission."',
  '"The ROI on our partnership with Jaye was measurable within the first quarter."',
];

export default function WhyPartner() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ paddingBottom: '8vh' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=85"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35)' }}
          />
          <div className="absolute inset-0 overlay-bottom" />
          <div className="absolute inset-0 overlay-left" />
        </div>
        <div className="relative container">
          <div style={{ maxWidth: '720px' }}>
            <div className="flex items-center gap-3 mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}>
              <span className="gold-line-short" />
              <span className="label-mono" style={{ color: 'oklch(0.72 0.13 72)' }}>Why Partner</span>
            </div>
            <h1 className="display-hero" style={{ color: 'oklch(0.97 0.008 75)', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' }}>
              There is no one<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>quite like this.</em>
            </h1>
            <p className="body-lg mt-6" style={{ color: 'oklch(0.65 0.005 65)', maxWidth: '560px', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards' }}>
              Jaye Watts is not a consultant. She is a force multiplier. The rare strategic partner who has lived inside every industry she advises, built the companies she talks about, and earned the relationships she brings to the table.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="gold-line-short" />
              <span className="label-mono-dark">What Sets Her Apart</span>
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', maxWidth: '560px', transitionDelay: '80ms' }}>
              Five reasons partners choose Jaye.
            </h2>
          </div>

          <div className="space-y-0">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.number}
                className="reveal grid lg:grid-cols-12 gap-8 lg:gap-12 items-start py-10"
                style={{
                  borderTop: '1px solid oklch(0.90 0.010 78)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="lg:col-span-1">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'oklch(0.72 0.13 72)' }}>{d.number}</span>
                </div>
                <div className="lg:col-span-5">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3 }}>{d.title}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.75 }}>{d.body}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)' }} />
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section className="py-20 bg-obsidian overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-3 mb-10 reveal">
            <span className="gold-line-short" />
            <span className="label-mono">What Partners Say</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROOF_POINTS.map((quote, i) => (
              <div
                key={i}
                className="reveal p-8"
                style={{
                  background: 'oklch(0.10 0.003 60)',
                  borderLeft: '2px solid oklch(0.72 0.13 72)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontStyle: 'italic', fontWeight: 300, color: 'oklch(0.85 0.008 75)', lineHeight: 1.6 }}>
                  {quote}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', marginTop: '1.25rem' }}>
                  Partner Testimonial
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="gold-line-short" />
              <span className="label-mono-dark">How We Work Together</span>
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', maxWidth: '560px', transitionDelay: '80ms' }}>
              Every partnership is custom. Here is where to start.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PARTNERSHIP_TYPES.map((pt, i) => (
              <div
                key={pt.title}
                className="reveal card-editorial overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }} className="img-zoom">
                  <img src={pt.img} alt={pt.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3, marginBottom: '0.75rem' }}>{pt.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.7, marginBottom: '1rem' }}>{pt.description}</p>
                  <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '0.375rem' }}>Ideal for</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.006 65)' }}>{pt.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-obsidian text-center">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="flex items-center justify-center gap-3 mb-8 reveal">
              <span className="gold-line-short" />
              <span className="label-mono">Begin the Conversation</span>
              <span className="gold-line-short" />
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.97 0.008 75)', transitionDelay: '80ms' }}>
              The right partnership changes everything.
            </h2>
            <p className="body-lg mt-6 mb-10 reveal" style={{ color: 'oklch(0.55 0.005 65)', transitionDelay: '160ms' }}>
              Start with a conversation. Jaye will tell you honestly whether and how she can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal" style={{ transitionDelay: '240ms' }}>
              <Link href="/contact" className="btn-primary">Book a Conversation</Link>
              <Link href="/portfolio" className="btn-outline-light">See the Work</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
