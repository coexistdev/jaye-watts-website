/**
 * ABOUT — "How is one person behind all of this?"
 * The story that makes the visitor feel the full scope of who Jaye is.
 */
import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const STORY_CHAPTERS = [
  { number: '01', label: 'The Foundation', title: 'Music, Culture, and the Art of Storytelling', body: "Jaye's journey began in music — a world where storytelling, community, and cultural resonance are the currency of success. This foundation shaped her understanding of how authentic narratives move people, build loyalty, and create lasting impact. The skills she developed as an artist — reading audiences, crafting messages, building community — became the bedrock of her strategic approach." },
  { number: '02', label: 'The Expansion', title: 'From Entertainment to Entrepreneurship', body: "Recognizing that her skills transcended any single industry, Jaye began building ventures at the intersection of culture and commerce. Coexist Agency emerged as a full-service creative and experiential marketing firm, producing brand activations and cultural campaigns for global brands. Each engagement deepened her understanding of how brands could authentically connect with communities." },
  { number: '03', label: 'The Intersection', title: 'Gaming, Technology, and the New Cultural Frontier', body: "As gaming emerged as the dominant cultural force of the 21st century, Jaye was already there. Coexist Gaming became a vehicle for bridging gaming culture with mainstream brand strategy — helping Fortune 500 companies understand and authentically engage with one of the world's largest and most influential communities. Her early positioning in gaming established her as a pioneer in this space." },
  { number: '04', label: 'The Portfolio', title: 'Proud Wineaux and the Power of Inclusive Brand Building', body: "Proud Wineaux represents Jaye's commitment to building brands that create genuine belonging. By creating an inclusive wine lifestyle brand for underrepresented communities, she demonstrated that the most powerful brand opportunities often exist in the spaces traditional marketers overlook. The brand's success validated her thesis: authentic community-first brands outperform traditional marketing approaches." },
  { number: '05', label: 'The Present', title: 'Strategic Brand Partner to the World\'s Leading Organizations', body: "Today, Jaye operates as a multidisciplinary strategic brand partner — bringing 20+ years of cross-industry expertise to help organizations navigate complex brand challenges, enter new markets, and build lasting cultural relevance. Her unique position at the intersection of music, gaming, hospitality, wine, technology, and entertainment makes her one of the most versatile strategic partners available to global brands." },
];

const VENTURES = [
  { role: 'Founder & CEO', name: 'Coexist Gaming', description: 'Gaming culture brand and community platform' },
  { role: 'Founder', name: 'Proud Wineaux', description: 'Inclusive wine lifestyle brand' },
  { role: 'Founder & CEO', name: 'Coexist Agency', description: 'Experiential marketing and creative agency' },
];

const CREDENTIALS = [
  'Certified Sommelier',
  'CES Featured Speaker',
  'SXSW Keynote Speaker',
  'Forbes Featured Executive',
  'Gaming Industry Pioneer',
  'Advertising Week Panelist',
];

export default function About() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden" style={{ paddingBottom: '8vh' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85" alt="Jaye Watts" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.35)' }} />
          <div className="absolute inset-0 overlay-bottom" />
          <div className="absolute inset-0 overlay-left" />
        </div>
        <div className="relative container">
          <div style={{ maxWidth: '720px' }}>
            <div className="flex items-center gap-3 mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}>
              <span className="gold-line-short" />
              <span className="label-mono" style={{ color: 'oklch(0.72 0.13 72)' }}>About</span>
            </div>
            <h1 className="display-hero" style={{ color: 'oklch(0.97 0.008 75)', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' }}>
              Jaye "Letta J" Watts
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontStyle: 'italic', fontWeight: 300, color: 'oklch(0.72 0.13 72)', marginTop: '0.75rem', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.45s forwards' }}>
              Strategist. Founder. Speaker. Creator. Operator. Advisor. Culture Catalyst.
            </p>
            <p className="body-lg mt-5" style={{ color: 'oklch(0.65 0.005 65)', maxWidth: '560px', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s forwards' }}>
              A multidisciplinary strategic brand partner whose influence is earned through execution and results — not titles or follower counts.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="container">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="gold-line-short" />
              <span className="label-mono-dark">The Story</span>
            </div>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', maxWidth: '600px', transitionDelay: '80ms' }}>
              A career built at the intersection of culture and commerce.
            </h2>
            <p className="body-lg mt-4 reveal" style={{ color: 'oklch(0.45 0.006 65)', maxWidth: '480px', transitionDelay: '160ms' }}>
              Jaye's path is not linear — it's multidimensional. Each chapter has added a new layer of expertise, a new industry relationship, and a new perspective that makes her uniquely valuable as a strategic partner.
            </p>
          </div>

          <div className="space-y-0">
            {STORY_CHAPTERS.map((ch, i) => (
              <div
                key={ch.number}
                className="reveal grid lg:grid-cols-12 gap-8 py-10"
                style={{ borderTop: '1px solid oklch(0.90 0.010 78)', transitionDelay: `${i * 80}ms` }}
              >
                <div className="lg:col-span-2">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', display: 'block' }}>{ch.number}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.65 0.005 65)', display: 'block', marginTop: '0.25rem' }}>{ch.label}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.35 }}>{ch.title}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.8 }}>{ch.body}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)' }} />
          </div>
        </div>
      </section>

      {/* VENTURES + CREDENTIALS */}
      <section className="py-20 lg:py-28" style={{ background: 'oklch(0.985 0.008 80)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Ventures */}
            <div>
              <div className="flex items-center gap-3 mb-8 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">Ventures</span>
              </div>
              <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                Brands built from conviction.
              </h2>
              <div className="mt-10 space-y-0">
                {VENTURES.map((v, i) => (
                  <div
                    key={v.name}
                    className="reveal py-6"
                    style={{ borderTop: '1px solid oklch(0.90 0.010 78)', transitionDelay: `${i * 80}ms` }}
                  >
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)', marginBottom: '0.375rem' }}>{v.role}</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.3 }}>{v.name}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.006 65)', marginTop: '0.25rem' }}>{v.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="flex items-center gap-3 mb-8 reveal">
                <span className="gold-line-short" />
                <span className="label-mono-dark">Credentials</span>
              </div>
              <h2 className="display-xl reveal" style={{ color: 'oklch(0.10 0.005 60)', transitionDelay: '80ms' }}>
                Recognition earned, not claimed.
              </h2>
              <div className="mt-10 space-y-0">
                {CREDENTIALS.map((cred, i) => (
                  <div
                    key={cred}
                    className="reveal flex items-center gap-4 py-4"
                    style={{ borderTop: '1px solid oklch(0.90 0.010 78)', transitionDelay: `${i * 60}ms` }}
                  >
                    <span style={{ width: '6px', height: '6px', background: 'oklch(0.72 0.13 72)', borderRadius: '50%', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.25 0.005 60)' }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-obsidian text-center">
        <div className="container">
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.97 0.008 75)' }}>
              Ready to partner with Jaye?
            </h2>
            <p className="body-lg mt-5 mb-10 reveal" style={{ color: 'oklch(0.55 0.005 65)', transitionDelay: '80ms' }}>
              The best partnerships begin with a conversation. Let's explore what's possible together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal" style={{ transitionDelay: '160ms' }}>
              <Link href="/contact" className="btn-primary">Book a Conversation</Link>
              <Link href="/downloads" className="btn-outline-light">Executive Bio</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
