/**
 * Obsidian Editorial Theme — About
 * Jaye's story through the lens of multidisciplinary expertise.
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const chapters = [
  {
    number: '01',
    era: 'The Foundation',
    title: 'Music, Culture, and the Art of Storytelling',
    body: 'Jaye\'s journey began in music — a world where storytelling, community, and cultural resonance are the currency of success. This foundation shaped her understanding of how authentic narratives move people, build loyalty, and create lasting impact. The skills she developed as an artist — reading audiences, crafting messages, building community — became the bedrock of her strategic approach.',
  },
  {
    number: '02',
    era: 'The Expansion',
    title: 'From Entertainment to Entrepreneurship',
    body: 'Recognizing that her skills transcended any single industry, Jaye began building ventures at the intersection of culture and commerce. Coexist Agency emerged as a full-service creative and experiential marketing firm, producing brand activations and cultural campaigns for global brands. Each engagement deepened her understanding of how brands could authentically connect with communities.',
  },
  {
    number: '03',
    era: 'The Innovation',
    title: 'Gaming, Technology, and the New Cultural Frontier',
    body: 'As gaming emerged as the dominant cultural force of the 21st century, Jaye was already there. Coexist Gaming became a vehicle for bridging gaming culture with mainstream brand strategy — helping Fortune 500 companies understand and authentically engage with one of the world\'s largest and most influential communities. Her early positioning in gaming established her as a pioneer in this space.',
  },
  {
    number: '04',
    era: 'The Portfolio',
    title: 'Proud Wineaux and the Power of Inclusive Brand Building',
    body: 'Proud Wineaux represents Jaye\'s commitment to building brands that create genuine belonging. By creating an inclusive wine lifestyle brand for underrepresented communities, she demonstrated that the most powerful brand opportunities often exist in the spaces that traditional marketers overlook. The brand\'s success validated her thesis: authentic community-first brands outperform traditional marketing approaches.',
  },
  {
    number: '05',
    era: 'The Present',
    title: 'Strategic Brand Partner to the World\'s Leading Organizations',
    body: 'Today, Jaye operates as a multidisciplinary strategic brand partner — bringing 20+ years of cross-industry expertise to help organizations navigate complex brand challenges, enter new markets, and build lasting cultural relevance. Her unique position at the intersection of music, gaming, hospitality, wine, technology, and entertainment makes her one of the most versatile strategic partners available to global brands.',
  },
];

const ventures = [
  { name: 'Coexist Gaming', role: 'Founder & CEO', description: 'Gaming culture brand and community platform' },
  { name: 'Proud Wineaux', role: 'Founder', description: 'Inclusive wine lifestyle brand' },
  { name: 'Coexist Agency', role: 'Founder & CEO', description: 'Experiential marketing and creative agency' },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85"
            alt="Jaye Watts"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.08 0.003 60) 30%, transparent 80%)' }} />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="gold-rule-solid" style={{ width: '40px' }} />
              <span className="section-label">About Jaye</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Jaye "Letta J" Watts
            </h1>
            <p className="mt-4 reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'oklch(0.72 0.12 75)', transitionDelay: '80ms' }}>
              Strategist. Founder. Speaker. Creator. Operator. Advisor. Culture Catalyst.
            </p>
            <p className="mt-6 reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', color: 'oklch(0.65 0.005 60)', lineHeight: 1.75, maxWidth: '560px', transitionDelay: '150ms' }}>
              A multidisciplinary strategic brand partner whose influence is earned through execution and results — not titles or follower counts.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(1 0 0)' }}>
        <div className="container">
          <SectionHeader
            number="01"
            label="The Story"
            title="A career built at the intersection of culture and commerce."
            subtitle="Jaye's path is not linear — it's multidimensional. Each chapter has added a new layer of expertise, a new industry relationship, and a new perspective that makes her uniquely valuable as a strategic partner."
          />
          <div className="mt-16 space-y-0">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.number}
                className="reveal grid lg:grid-cols-4 gap-0"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderTop: '1px solid oklch(0.88 0.008 75)',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                }}
              >
                <div className="lg:col-span-1 mb-4 lg:mb-0">
                  <span className="section-number">{chapter.number}</span>
                  <p className="mt-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.72 0.12 75)' }}>
                    {chapter.era}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, color: 'oklch(0.12 0.005 60)', lineHeight: 1.3 }}>
                    {chapter.title}
                  </h3>
                  <p className="mt-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.75 }}>
                    {chapter.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule container" />

      {/* Ventures */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.95 0.010 78)' }}>
        <div className="container">
          <SectionHeader
            number="02"
            label="Ventures"
            title="Brands built from conviction."
          />
          <div className="grid md:grid-cols-3 gap-px mt-12" style={{ background: 'oklch(0.88 0.008 75)' }}>
            {ventures.map((v, i) => (
              <div
                key={v.name}
                className="reveal p-8"
                style={{ background: 'oklch(0.95 0.010 78)', transitionDelay: `${i * 80}ms` }}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.72 0.12 75)' }}>
                  {v.role}
                </p>
                <h3 className="mt-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 300, color: 'oklch(0.14 0.005 60)' }}>
                  {v.name}
                </h3>
                <p className="mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.40 0.005 60)' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ background: 'oklch(0.98 0.008 80)', borderTop: '1px solid oklch(0.88 0.008 75)' }}>
        <div className="container text-center">
          <div className="reveal max-w-xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'oklch(0.14 0.005 60)' }}>
              Ready to partner with Jaye?
            </h2>
            <p className="mt-4 mb-8" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.40 0.005 60)', lineHeight: 1.7 }}>
              The best partnerships begin with a conversation. Let's explore what's possible together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book a Conversation</Link>
              <Link href="/downloads" className="btn-outline-gold">Executive Bio</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
