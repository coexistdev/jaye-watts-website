import { Link } from 'wouter';
import PageLayout from '../components/PageLayout';

const INDUSTRIES = [
  { name: 'Gaming', description: 'Jaye built a gaming company before advising gaming brands. Her understanding of gaming culture, community, and commerce is not academic. It is operational.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', tags: ['Esports', 'Community', 'Brand Partnerships', 'Cultural Strategy'] },
  { name: 'Music & Entertainment', description: 'As a musician and entertainment industry veteran, Jaye understands how culture is created, distributed, and monetized. She helps brands become part of the story, not just sponsors of it.', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80', tags: ['Artist Partnerships', 'Label Relations', 'Live Events', 'Sync Licensing'] },
  { name: 'Technology & AI', description: 'From CES keynotes to AI advisory boards, Jaye bridges the gap between technology innovation and human cultural adoption. She helps tech brands communicate value to audiences that matter.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', tags: ['AI Strategy', 'Consumer Tech', 'B2B Technology', 'Innovation'] },
  { name: 'Hospitality & Travel', description: 'A hospitality entrepreneur and certified sommelier, Jaye brings genuine expertise to brands in the hospitality, hotel, and travel space. She understands the luxury consumer and the experiential economy.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', tags: ['Luxury Hotels', 'Travel Brands', 'Experience Design', 'Lifestyle'] },
  { name: 'Wine & Spirits', description: 'As founder of Proud Wineaux and a certified wine professional, Jaye brings authentic community and brand-building expertise to wine, spirits, and beverage brands seeking cultural relevance.', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', tags: ['Wine Brands', 'Spirits', 'Community Building', 'Lifestyle Marketing'] },
  { name: 'Sports & Fitness', description: 'Jaye\'s network spans professional sports, esports, and fitness communities. She helps sports brands connect authentically with the next generation of fans and consumers.', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', tags: ['Pro Sports', 'Esports', 'Fitness Brands', 'Athlete Partnerships'] },
  { name: 'Consumer Goods & Retail', description: 'From product launches to retail activations, Jaye helps consumer brands understand and reach multicultural, gaming, and emerging audiences with authentic cultural intelligence.', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80', tags: ['Product Launch', 'Retail Strategy', 'Multicultural Marketing', 'Brand Building'] },
  { name: 'Media & Publishing', description: 'With television appearances, podcast features, and editorial contributions, Jaye understands the media landscape from both sides. She helps media brands build community and brands build media presence.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', tags: ['Television', 'Digital Media', 'Publishing', 'Content Strategy'] },
];

export default function Industries() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden" style={{ paddingBottom: '8vh' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=85" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.28)' }} />
          <div className="absolute inset-0 overlay-bottom" />
          <div className="absolute inset-0 overlay-left" />
        </div>
        <div className="relative container">
          <div style={{ maxWidth: '640px' }}>
            <div className="flex items-center gap-3 mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}>
              <span className="gold-line-short" />
              <span className="label-mono" style={{ color: 'oklch(0.72 0.13 72)' }}>Industries</span>
            </div>
            <h1 className="display-hero" style={{ color: 'oklch(0.97 0.008 75)', opacity: 0, animation: 'fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards' }}>
              One partner.<br />
              <em style={{ color: 'oklch(0.72 0.13 72)', fontStyle: 'italic' }}>Every industry.</em>
            </h1>
            <p className="body-lg mt-6" style={{ color: 'oklch(0.65 0.005 65)', maxWidth: '520px', opacity: 0, animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards' }}>
              Jaye's cross-industry fluency is not a feature. It is the entire value proposition. The connections between industries are where the most powerful brand opportunities live.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="container">
          <div className="space-y-0">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal grid lg:grid-cols-12 gap-0"
                style={{
                  borderTop: '1px solid oklch(0.90 0.010 78)',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Image */}
                <div className="lg:col-span-4 img-zoom" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
                </div>
                {/* Content */}
                <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center" style={{ background: i % 2 === 0 ? 'oklch(0.985 0.008 80)' : 'oklch(1 0 0)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.72 0.13 72)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, color: 'oklch(0.10 0.005 60)', lineHeight: 1.2 }}>{ind.name}</h2>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'oklch(0.42 0.006 65)', lineHeight: 1.75, maxWidth: '520px', marginBottom: '1.25rem' }}>{ind.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.tags.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid oklch(0.88 0.010 78)', color: 'oklch(0.55 0.006 65)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid oklch(0.90 0.010 78)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-obsidian text-center">
        <div className="container">
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 className="display-xl reveal" style={{ color: 'oklch(0.97 0.008 75)' }}>
              Your industry is next.
            </h2>
            <p className="body-lg mt-5 mb-10 reveal" style={{ color: 'oklch(0.55 0.005 65)', transitionDelay: '80ms' }}>
              Whether you are in an industry listed above or operating at the intersection of several, Jaye brings the cross-industry intelligence to help you see and seize opportunities others miss.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal" style={{ transitionDelay: '160ms' }}>
              <Link href="/contact" className="btn-primary">Book a Conversation</Link>
              <Link href="/portfolio" className="btn-outline-light">See the Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
