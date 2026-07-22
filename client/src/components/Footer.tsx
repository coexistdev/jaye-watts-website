import { Link } from 'wouter';

const col1 = [
  { label: 'Why Partner', href: '/why-partner' },
  { label: 'Industries',  href: '/industries' },
  { label: 'Speaking',    href: '/speaking' },
  { label: 'Downloads',   href: '/downloads' },
];
const col2 = [
  { label: 'Portfolio',       href: '/portfolio' },
  { label: 'In the Spotlight', href: '/spotlight' },
  { label: 'About',           href: '/about' },
  { label: 'Contact',         href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(0.06 0.003 60)', color: 'oklch(0.95 0.008 75)' }}>
      <div className="container py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="18" height="22" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H20V18C20 22.418 16.418 26 12 26C7.582 26 4 22.418 4 18V16H8V18C8 20.209 9.791 22 12 22C14.209 22 16 20.209 16 18V0Z" fill="oklch(0.72 0.13 72)"/>
                <rect x="0" y="0" width="12" height="4" fill="oklch(0.72 0.13 72)"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, letterSpacing: '0.04em' }}>
                Jaye Watts
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'oklch(0.50 0.005 65)', lineHeight: 1.7, maxWidth: '260px' }}>
              Strategic Brand Partner. Multidisciplinary strategist transforming attention into measurable business growth.
            </p>
            <div className="flex gap-5 mt-6">
              {['LinkedIn', 'Instagram', 'Twitter / X'].map(s => (
                <a key={s} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.13 72)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.005 65)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              {col1.map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.13 72)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.005 65)'; }}
                >{l.label}</Link>
              ))}
            </div>
            <div className="space-y-3">
              {col2.map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.45 0.005 65)', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.13 72)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.005 65)'; }}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.625rem', fontWeight: 300, lineHeight: 1.3, marginBottom: '1.25rem' }}>
              Ready to transform your brand's impact?
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Conversation
            </Link>
          </div>
        </div>

        <div style={{ height: '1px', background: 'oklch(0.72 0.13 72 / 0.15)', margin: '3rem 0 1.5rem' }} />
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'oklch(0.32 0.003 65)' }}>
            &copy; {new Date().getFullYear()} Jaye "Letta J" Watts. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'oklch(0.32 0.003 65)' }}>
            Strategic Brand Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
