import { useEffect, useRef, useState } from 'react';
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
    img: '/manus-storage/IMG_2549_348f2cb3.JPG',
    tags: ['Brand Launch', 'Wine', 'Culture'],
  },
  {
    category: 'Experiential Marketing',
    title: 'Immersive Brand Activations That Create Lasting Cultural Memory',
    desc: 'Designed multi-sensory experiences that turned brand moments into cultural movements.',
    img: '/manus-storage/GenshinImpact_NYCFestival_JUL2023_jkratochvil_DSC_8703-2_70e043e0.webp',
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

// ── MEDIA CENTER DATA ──────────────────────────────────────────────────────────
type MediaCategory = 'All' | 'Television' | 'Publications' | 'Podcasts' | 'Gaming' | 'Technology' | 'Music & Entertainment' | 'Hospitality & Wine' | 'Brand Partnerships' | 'Speaking' | 'Videos';

interface MediaEntry {
  id: number;
  outlet: string;
  title: string;
  description: string;
  category: MediaCategory;
  type: string;
  date?: string;
  href?: string;
  cta?: string;
  featured?: boolean;
}

const MEDIA_ENTRIES: MediaEntry[] = [
  // ── FEATURED ──
  {
    id: 1,
    outlet: 'Netflix',
    title: 'The Future Of — Season 1, Episode 4: Gaming',
    description: 'Netflix\'s landmark docuseries spotlights Jaye "Letta J" Watts and Coexist Gaming as a defining force reshaping the future of the gaming industry.',
    category: 'Television',
    type: 'Documentary Series',
    href: 'https://www.netflix.com/watch/81197113?trackId=255824129&tctx=0%2C0%2Ce446d752-4342-4f81-ac0c-5c810d08e90e-179688356%2Ce446d752-4342-4f81-ac0c-5c810d08e90e-179688356%7C2%2C%2C%2C%2C%2C81123425%2CVideo%3A81197113%2CdetailsPageEpisodePlayButton',
    cta: 'Watch',
    featured: true,
  },
  // ── TELEVISION ──
  {
    id: 2,
    outlet: 'Netflix',
    title: 'King of Collectibles — Season 2, Episode 5',
    description: 'Jaye and Coexist Gaming appear in this Netflix series exploring the world of collectibles, gaming culture, and community-driven commerce.',
    category: 'Television',
    type: 'Documentary Series',
    href: 'https://www.netflix.com/watch/81718651?trackId=255824129&tctx=0%2C0%2C776df6bc-2221-413c-a3fb-2de7f5a87f60-3997640%2C776df6bc-2221-413c-a3fb-2de7f5a87f60-3997640%7C2%2C%2C%2C%2C%2C81505384%2CVideo%3A81718651%2CdetailsPageEpisodePlayButton',
    cta: 'Watch',
  },
  {
    id: 3,
    outlet: 'BBC London',
    title: 'BBC London Interview',
    description: 'Jaye sits down with BBC London to discuss her work at the intersection of gaming, music, and community building in New York City.',
    category: 'Television',
    type: 'Broadcast Interview',
    href: 'https://youtu.be/PMOpdcobLeI',
    cta: 'Watch',
  },
  {
    id: 4,
    outlet: 'FOX 5 New York',
    title: 'Good Day New York',
    description: 'Jaye joins FOX 5\'s Good Day New York to talk gaming, entrepreneurship, and the Coexist Gaming movement.',
    category: 'Television',
    type: 'Morning Show',
    href: 'https://youtu.be/6FOMA_zAUTc?si=tjhINlSoupyqZh9F',
    cta: 'Watch',
  },
  {
    id: 5,
    outlet: 'FOX 5 New York',
    title: 'Good Night New York',
    description: 'An evening feature with FOX 5 covering Jaye\'s vision for inclusive gaming and the Coexist GameHouse in Midtown Manhattan.',
    category: 'Television',
    type: 'Evening Feature',
    href: 'https://youtu.be/zflmRRtwHzs',
    cta: 'Watch',
  },
  // ── PUBLICATIONS ──
  {
    id: 6,
    outlet: 'Rolling Stone',
    title: 'How the Kendrick-Drake Beef Became a Viral Video Game',
    description: 'Rolling Stone covers the viral "Not Like Us: The Game" — developed inside Coexist Gaming — and Jaye\'s role in bridging hip-hop culture and gaming.',
    category: 'Music & Entertainment',
    type: 'Feature Article',
    date: 'July 2024',
    href: 'https://www.rollingstone.com/music/music-features/not-like-us-game-kendrick-lamar-drake-beef-1235061896/',
    cta: 'Read',
  },
  {
    id: 7,
    outlet: 'Billboard',
    title: "Kendrick Lamar's 'Not Like Us' Gets Turned Into a Video Game",
    description: 'Billboard reports on the viral game born inside Coexist Gaming, positioning Jaye\'s studio at the center of hip-hop and gaming culture.',
    category: 'Music & Entertainment',
    type: 'News Feature',
    date: 'July 2024',
    href: 'https://www.billboard.com/music/rb-hip-hop/kendrick-lamar-not-like-us-video-game-1235731886/',
    cta: 'Read',
  },
  {
    id: 8,
    outlet: 'Adweek',
    title: 'The Future of Women in Gaming With Letta J and Jay-Ann Lopez',
    description: 'Adweek features Jaye alongside Black Girl Gamers founder Jay-Ann Lopez to discuss representation, inclusion, and the future of the gaming industry.',
    category: 'Gaming',
    type: 'Video Feature',
    href: 'https://www.adweek.com/creativity/women-gaming-letta-j-jay-ann-lopez/',
    cta: 'Watch',
  },
  {
    id: 9,
    outlet: 'Essence',
    title: 'Why Diversity in Gaming Matters: Letta J on Latinx Heritage Month',
    description: 'Essence spotlights Jaye\'s advocacy for diversity and representation in gaming, celebrating her work during Latinx Heritage Month.',
    category: 'Gaming',
    type: 'Feature',
    href: 'https://www.essence.com/beauty/diversity-importance-gaming-letta-j-latinx-heritage-month/',
    cta: 'Read',
  },
  {
    id: 10,
    outlet: 'GamesIndustry.biz',
    title: "Coexist Gaming's Jaye Watts Made a Business Out of Togetherness",
    description: 'A deep-dive profile on how Jaye built the first subscription-based gaming lifestyle lounge in the world, from a Brooklyn duplex to Midtown NYC.',
    category: 'Gaming',
    type: 'Profile',
    date: 'November 2022',
    href: 'https://www.gamesindustry.biz/coexist-gamings-jaye-watts-made-a-business-out-of-togetherness',
    cta: 'Read',
  },
  {
    id: 11,
    outlet: 'Amazon Games',
    title: 'Black Voices in Gaming: Jaye Watts at D.I.C.E. Summit 2024',
    description: 'Amazon Games features Jaye as a pioneering voice at the D.I.C.E. Summit, highlighting her background in engineering, music, and gaming entrepreneurship.',
    category: 'Gaming',
    type: 'Feature',
    date: 'February 2024',
    href: 'https://www.amazongames.com/en-us/news/articles/black-voices-in-gaming',
    cta: 'Read',
  },
  {
    id: 12,
    outlet: 'Shoppe Black',
    title: 'From Console to Community: Coexist Gaming\'s Vision for Inclusive Gaming',
    description: 'Shoppe Black profiles Jaye\'s mission to create safe spaces for people of color and women in gaming, and the community-powered economy she has built.',
    category: 'Gaming',
    type: 'Interview',
    href: 'https://shoppeblack.us/coexist-gaming/',
    cta: 'Read',
  },
  {
    id: 13,
    outlet: 'Yahoo Finance',
    title: 'The Future of Gaming: Netflix Docuseries Puts Coexist Gaming in the Spotlight',
    description: 'Yahoo Finance covers the Netflix feature on Coexist Gaming and Jaye\'s Grammy-nominated journey from music to gaming CEO.',
    category: 'Technology',
    type: 'Press Release',
    date: 'October 2023',
    href: 'https://finance.yahoo.com/news/future-gaming-netflix-docuseries-puts-170000708.html',
    cta: 'Read',
  },
  {
    id: 14,
    outlet: 'LA Weekly',
    title: 'Grammy-Nominated Hitmaker and CEO of Video Game Incubator Shaking Up the Tech Scene',
    description: 'LA Weekly profiles Jaye\'s dual identity as a Grammy-nominated artist and gaming incubator CEO, charting her rise as a tech trailblazer.',
    category: 'Technology',
    type: 'Profile',
    date: 'December 2023',
    href: 'https://www.laweekly.com/grammy-nominated-hitmaker-ceo-of-video-game-incubator-shaking-up-the-tech-scene/',
    cta: 'Read',
  },
  {
    id: 15,
    outlet: 'The Chicago Journal',
    title: 'Bridging the Gap Between Gaming, Education, and Opportunity',
    description: 'The Chicago Journal covers Coexist Gaming\'s educational initiative at the Denzel Washington School of the Arts and Jaye\'s vision for equitable access to gaming careers.',
    category: 'Technology',
    type: 'Feature',
    date: 'February 2025',
    href: 'https://thechicagojournal.com/bridging-the-gap-between-gaming-education-and-opportunity-the-vision-of-coexist-gaming/',
    cta: 'Read',
  },
  {
    id: 16,
    outlet: 'NY Weekly',
    title: 'Gamified Education Introduces the Dawn of a New Era',
    description: 'NY Weekly spotlights Coexist Studios and Jaye\'s mission to transform K-12 education through gamified STEAM learning.',
    category: 'Technology',
    type: 'Feature',
    date: 'June 2024',
    href: 'https://nyweekly.com/business/gamified-education-introduces-the-dawn/',
    cta: 'Read',
  },
  {
    id: 17,
    outlet: 'Bold Journey',
    title: 'Meet Jaye "Letta J" Watts',
    description: 'Bold Journey Magazine sits down with Jaye for an in-depth conversation about purpose, perseverance, and building a multidisciplinary career across music, gaming, and tech.',
    category: 'Publications',
    type: 'Profile Interview',
    date: 'February 2024',
    href: 'https://boldjourney.com/news/meet-jaye-letta-j-watts/',
    cta: 'Read',
  },
  {
    id: 18,
    outlet: 'CanvasRebel',
    title: 'Meet Jaye "Letta J" Watts of Coexist Gaming',
    description: 'CanvasRebel explores Jaye\'s story of building Coexist Gaming from a Brooklyn duplex into a nationally recognized gaming brand.',
    category: 'Publications',
    type: 'Feature Interview',
    date: 'January 2025',
    href: 'https://canvasrebel.com/meet-jaye-letta-j-watts-of-coexist-gaming/',
    cta: 'Read',
  },
  {
    id: 19,
    outlet: 'Voyage NY',
    title: "Coexist Gaming's Letta J Introduces a New Era of Inclusivity in Gaming",
    description: 'Voyage New York profiles the Coexist GameHouse and Jaye\'s pioneering subscription-based model that is redefining what a gaming community can be.',
    category: 'Publications',
    type: 'Feature',
    date: 'March 2023',
    href: 'https://voyageny.com/coexist-gamings-letta-j-introduces-a-new-era/',
    cta: 'Read',
  },
  {
    id: 20,
    outlet: 'Sugar Gamers',
    title: 'Letta J: Building a Better Future for Gamers Everywhere',
    description: 'Sugar Gamers celebrates Jaye\'s work creating inclusive spaces and opportunities for underrepresented communities in gaming.',
    category: 'Gaming',
    type: 'Feature',
    href: 'https://sugargamers.com/letta-j-building-a-better-future-for-gamers-everywhere/',
    cta: 'Read',
  },
  {
    id: 21,
    outlet: 'HOT 97',
    title: "Jaye 'Letta J' Watts Talks Intertwining Music and Gaming + 'Not Like Us' Game",
    description: 'HOT 97 sits down with Jaye to discuss her musical upbringing, the creation of the viral "Not Like Us" video game, and the future of Coexist Gaming.',
    category: 'Music & Entertainment',
    type: 'Interview',
    date: 'August 2024',
    href: 'https://www.hot97.com/interviews/jaye-letta-j-watts-talks-intertwining-music-and-gaming-not-like-us-game/',
    cta: 'Read',
  },
  // ── VIDEOS & BRAND PARTNERSHIPS ──
  {
    id: 22,
    outlet: 'Microsoft',
    title: 'Microsoft Xbox Commercial',
    description: 'Jaye stars in a Microsoft Xbox commercial, representing the intersection of gaming culture and mainstream brand storytelling.',
    category: 'Brand Partnerships',
    type: 'Commercial',
    href: 'https://www.youtube.com/watch?v=0c3APlk2Shc',
    cta: 'Watch',
  },
  {
    id: 23,
    outlet: 'Ally Financial',
    title: 'Ally Commercial',
    description: 'Jaye appears in an Ally Financial brand campaign, bringing her cultural authority and authentic voice to a national financial services brand.',
    category: 'Brand Partnerships',
    type: 'Commercial',
    href: 'https://www.youtube.com/watch?v=hUUL8BfEq7E&list=PLj_NFvY7xsZl1vjFDrN98p2ncHHMugZuF&index=11',
    cta: 'Watch',
  },
  {
    id: 24,
    outlet: 'Moutai',
    title: 'Moutai Brand Partnership',
    description: 'Jaye partners with Moutai, the world\'s most valuable spirits brand, bridging luxury hospitality and cultural storytelling.',
    category: 'Hospitality & Wine',
    type: 'Brand Partnership',
    href: 'https://youtu.be/RRCbL7hte7c?si=CW1c-zz1mipcJlYC',
    cta: 'Watch',
  },
  {
    id: 25,
    outlet: 'gameHERS Awards',
    title: 'gameHERS Award Ceremony',
    description: 'Jaye is recognized at the gameHERS Awards, celebrating women who are shaping the future of gaming.',
    category: 'Gaming',
    type: 'Award',
    href: 'https://www.youtube.com/watch?v=FXw04Ikkd8o',
    cta: 'Watch',
  },
  {
    id: 26,
    outlet: 'Coexist Gaming',
    title: 'Coexist GameHouse Grand Opening',
    description: 'The official grand opening of the Coexist GameHouse in Midtown NYC — the first subscription-based gaming lounge of its kind.',
    category: 'Gaming',
    type: 'Event Video',
    href: 'https://www.youtube.com/watch?v=ix9eIAks9oc',
    cta: 'Watch',
  },
  {
    id: 27,
    outlet: 'Anthony Mackie',
    title: 'Anthony Mackie: How He Got His Start in the Marvel Universe',
    description: 'Jaye hosts an exclusive interview with Marvel star Anthony Mackie, discussing his journey and the intersection of entertainment and culture.',
    category: 'Music & Entertainment',
    type: 'Exclusive Interview',
    href: 'https://www.youtube.com/watch?v=UIhs2_lm8TI&t=11s',
    cta: 'Watch',
  },
  {
    id: 28,
    outlet: 'Anthony Mackie',
    title: 'Anthony Mackie Full Interview',
    description: 'The complete sit-down interview with Anthony Mackie, covering his career, Marvel, and his perspective on representation in entertainment.',
    category: 'Music & Entertainment',
    type: 'Full Interview',
    href: 'https://youtu.be/cvhY5PPY5n8?si=QHMa9Km-JLhGXeW4',
    cta: 'Watch',
  },
  // ── PODCASTS / VIDEOS ──
  {
    id: 29,
    outlet: 'The New Mind Podcast',
    title: 'The New Mind Podcast with Ella McCrystal',
    description: 'Jaye joins Ella McCrystal on The New Mind Podcast to explore entrepreneurship, gaming, and the mindset behind building a multidisciplinary career.',
    category: 'Podcasts',
    type: 'Podcast Episode',
    href: 'https://youtu.be/GszCg25Q29o',
    cta: 'Listen',
  },
  {
    id: 30,
    outlet: 'Pay 2 Play',
    title: 'Pay 2 Play: The Gaming Business Conversation',
    description: 'Jaye appears on Pay 2 Play to discuss the business of gaming, community monetization, and what it takes to build a sustainable gaming brand.',
    category: 'Podcasts',
    type: 'Podcast Episode',
    href: 'https://m.youtube.com/watch?v=dNgGwNLnVjQ&feature=youtu.be',
    cta: 'Listen',
  },
  {
    id: 31,
    outlet: 'Tech Talk',
    title: 'Tech Talk: Gaming, Innovation, and the Future',
    description: 'Jaye joins a Tech Talk conversation on the evolving role of gaming in technology, education, and community development.',
    category: 'Technology',
    type: 'Video Interview',
    href: 'https://youtu.be/tWP72UU0CHA',
    cta: 'Watch',
  },
  {
    id: 32,
    outlet: 'Letta J Music',
    title: "Your Hero's Journey",
    description: 'A short-form video capturing Jaye\'s philosophy on purpose, resilience, and the hero\'s journey that defines her multidisciplinary career.',
    category: 'Music & Entertainment',
    type: 'Short Film',
    href: 'https://youtube.com/shorts/__f8e0cuFM8?si=k43slA1b5QaxLxDf',
    cta: 'Watch',
  },
  // ── SPEAKING ──
  {
    id: 33,
    outlet: 'Denzel Washington School of the Arts',
    title: 'Gaming as a Career: Keynote for Parents and Students',
    description: 'Jaye delivers a keynote on gaming as a viable and lucrative career path, empowering students and parents at the Denzel Washington School of the Arts.',
    category: 'Speaking',
    type: 'Keynote',
  },
  // ── HOSPITALITY ──
  {
    id: 34,
    outlet: 'Proud Wineaux',
    title: 'Proud Wineaux: Redefining Wine Culture',
    description: 'Jaye\'s hospitality venture Proud Wineaux brings wine culture to new audiences, creating inclusive luxury experiences in the heart of New York City.',
    category: 'Hospitality & Wine',
    type: 'Venue Feature',
    href: 'https://connect2local.com/l/2760/proud-wineaux-138-w-34th-st-5th-floor-new-york-ny',
    cta: 'Explore',
  },
  {
    id: 35,
    outlet: 'Vistas Magazine',
    title: 'Vistas Magazine Feature',
    description: 'Vistas Magazine features Jaye in their Feb/March 2025 issue, covering her multidisciplinary career and vision for the future.',
    category: 'Publications',
    type: 'Magazine Feature',
    date: 'Feb/March 2025',
    href: 'https://issuu.com/vistasmagazine/docs/vistas_magazine_feb_march_25_',
    cta: 'Read',
  },
  {
    id: 36,
    outlet: 'WealthLab',
    title: 'This Grammy-Nominated Singer Puts the Social Into Gaming',
    description: 'WealthLab profiles how Jaye turned her Grammy-nominated music career into a gateway for building one of the most socially driven gaming communities in the country.',
    category: 'Publications',
    type: 'Profile',
    href: 'https://wealthlab.co/this-grammy-nominated-singer-puts-the-social-into-gaming',
    cta: 'Read',
  },
  {
    id: 37,
    outlet: 'Influencer Daily',
    title: 'Coexist Game House Brings Game Developers Together',
    description: 'Influencer Daily covers how Coexist Gaming\'s Game House is creating a pipeline for independent game developers and content creators.',
    category: 'Gaming',
    type: 'Feature',
    href: 'https://influencerdaily.com/coexist-game-house-brings-game-developers/',
    cta: 'Read',
  },
];

const MEDIA_CATEGORIES: MediaCategory[] = [
  'All', 'Television', 'Publications', 'Podcasts', 'Gaming',
  'Technology', 'Music & Entertainment', 'Hospitality & Wine',
  'Brand Partnerships', 'Speaking', 'Videos',
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
// ── MEDIA CENTER ─────────────────────────────────────────────────────────────
function MediaCenter() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('All');

  const featured = MEDIA_ENTRIES.find(e => e.featured);
  const filtered = MEDIA_ENTRIES.filter(e => {
    if (e.featured) return false;
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Videos') return e.cta === 'Watch';
    return e.category === activeCategory;
  });

  const ctaLabel = (entry: MediaEntry) => {
    if (!entry.href) return null;
    if (entry.cta === 'Watch') return 'Watch';
    if (entry.cta === 'Listen') return 'Listen';
    if (entry.cta === 'Explore') return 'Explore';
    return 'Read';
  };

  return (
    <section id="media" style={{ background: 'oklch(0.06 0.003 60)', padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Media Center</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'oklch(0.97 0.008 75)', marginBottom: '0.75rem' }}>
            Years of real credibility.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Across every industry she touches.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'oklch(0.55 0.005 65)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2.5rem' }}>
            From Netflix documentaries to Rolling Stone features, Billboard coverage to BBC broadcasts — a verified body of press, media, and public appearances spanning business, gaming, music, technology, and culture.
          </p>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={100}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3.5rem' }}>
            {MEDIA_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 1rem',
                  border: activeCategory === cat ? '1px solid var(--gold)' : '1px solid oklch(1 0 0 / 15%)',
                  background: activeCategory === cat ? 'var(--gold)' : 'transparent',
                  color: activeCategory === cat ? 'oklch(0.06 0.003 60)' : 'oklch(0.55 0.005 65)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Featured Story */}
        {featured && (activeCategory === 'All' || activeCategory === 'Television') && (
          <Reveal delay={150}>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', marginBottom: '3rem' }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                background: 'oklch(0.10 0.004 60)',
                border: '1px solid oklch(1 0 0 / 10%)',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'oklch(1 0 0 / 10%)')}
              >
                {/* Left: dark editorial panel */}
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', background: 'oklch(0.14 0.005 60)', padding: '0.3rem 0.75rem', border: '1px solid var(--gold)' }}>Featured</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)' }}>{featured.type}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.65 0.005 65)', marginBottom: '0.75rem' }}>{featured.outlet}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, color: 'oklch(0.97 0.008 75)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                      {featured.title}
                    </h3>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'oklch(0.55 0.005 65)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {featured.description}
                    </p>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                      Watch on Netflix →
                    </span>
                  </div>
                </div>
                {/* Right: accent panel */}
                <div style={{ background: 'oklch(0.08 0.004 60)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 300, color: 'oklch(0.14 0.005 60)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>N</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.30 0.005 65)' }}>Netflix</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.25 0.005 65)', marginTop: '0.5rem' }}>Documentary Series</div>
                    <div style={{ width: '40px', height: '1px', background: 'var(--gold)', margin: '1.5rem auto' }} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.35 0.005 65)' }}>Season 1, Episode 4</div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        )}

        {/* Logo Wall: Major Outlets */}
        {activeCategory === 'All' && (
          <Reveal delay={200}>
            <div style={{ borderTop: '1px solid oklch(1 0 0 / 8%)', borderBottom: '1px solid oklch(1 0 0 / 8%)', padding: '1.5rem 0', marginBottom: '3rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.30 0.005 65)', textAlign: 'center', marginBottom: '1.25rem' }}>As Featured In</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 2.5rem', alignItems: 'center' }}>
                {['Netflix', 'BBC', 'FOX 5', 'Rolling Stone', 'Billboard', 'Adweek', 'Essence', 'HOT 97', 'Amazon Games', 'GamesIndustry.biz', 'Yahoo Finance', 'LA Weekly'].map(name => (
                  <span key={name} style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'oklch(0.28 0.005 65)', letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>{name}</span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Media Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {filtered.map((entry, i) => {
            const cta = ctaLabel(entry);
            return (
              <Reveal key={entry.id} delay={i * 50}>
                <div style={{ height: '100%' }}>
                  {entry.href ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', background: 'oklch(0.10 0.004 60)', border: '1px solid oklch(1 0 0 / 8%)', padding: '1.5rem', transition: 'border-color 0.25s ease, transform 0.25s cubic-bezier(0.23,1,0.32,1)' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'oklch(1 0 0 / 8%)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{entry.outlet}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.35 0.005 65)', textAlign: 'right', maxWidth: '120px' }}>{entry.type}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'oklch(0.92 0.006 75)', lineHeight: 1.3, marginBottom: '0.75rem', flex: 1 }}>{entry.title}</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(0.45 0.005 65)', lineHeight: 1.65, marginBottom: '1rem' }}>{entry.description}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                        {entry.date && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.30 0.005 65)' }}>{entry.date}</span>}
                        {cta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{cta} →</span>}
                      </div>
                    </a>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'oklch(0.10 0.004 60)', border: '1px solid oklch(1 0 0 / 8%)', padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{entry.outlet}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.35 0.005 65)', textAlign: 'right', maxWidth: '120px' }}>{entry.type}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'oklch(0.92 0.006 75)', lineHeight: 1.3, marginBottom: '0.75rem', flex: 1 }}>{entry.title}</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'oklch(0.45 0.005 65)', lineHeight: 1.65, marginBottom: '1rem' }}>{entry.description}</p>
                      {entry.date && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.30 0.005 65)', marginTop: 'auto' }}>{entry.date}</span>}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Entry count */}
        <Reveal delay={100}>
          <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid oklch(1 0 0 / 8%)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.30 0.005 65)' }}>
              {activeCategory === 'All' ? `${MEDIA_ENTRIES.length} verified appearances` : `${filtered.length} ${activeCategory.toLowerCase()} appearances`}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
              Jaye "Letta J" Watts has spent 20+ years not just observing culture — but creating it. As an award-winning recording artist, gaming CEO, hospitality professional, experiential marketer, and media personality, she brings a perspective no consultant can replicate.
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
          <img src="/manus-storage/jayetedtalkwide_3b9f0a55.PNG" alt="Jaye Watts on the TED stage" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', filter: 'brightness(0.32)' }} />
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
      <MediaCenter />

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
                Jaye "Letta J" Watts is an award-winning recording artist, gaming CEO, hospitality professional, experiential marketer, and media personality. She has spent two decades at the intersection of culture and commerce, building brands that communities actually claim as their own.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Her work spans Fortune 500 brand strategy, independent venture building, keynote speaking, and executive advisory. As a James Beard Award-winning executive chef and captain, she brings a rare depth of craft and cultural fluency — always guided by the same principle: authentic cultural intelligence creates competitive advantage that data alone cannot replicate.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                When you partner with Jaye, you're not hiring a consultant. You're gaining access to a network, a perspective, and a track record built across industries, communities, and cultural moments that most brands spend years trying to reach.
              </p>
              <button onClick={() => scrollToId('contact')} className="btn-primary">Start a Partnership Conversation</button>
            </div>
            <div>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--cream)' }}>
                <img src="/manus-storage/jayeconstructionsite_ab81a5bb.webp" alt="Jaye Watts" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: "center center" }} />
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
