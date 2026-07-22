/**
 * Navigation — transparent over hero, transitions to frosted white on scroll.
 * Mobile: full-screen drawer.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const NAV_LINKS = [
  { label: 'Why Partner', href: '/why-partner' },
  { label: 'Portfolio',   href: '/portfolio' },
  { label: 'Industries',  href: '/industries' },
  { label: 'Spotlight',   href: '/spotlight' },
  { label: 'Speaking',    href: '/speaking' },
  { label: 'About',       href: '/about' },
  { label: 'Downloads',   href: '/downloads' },
  { label: 'Contact',     href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHeroPage = location === '/';
  const lightText = isHeroPage && !scrolled;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'oklch(0.995 0.004 80 / 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0.90 0.010 78)' : '1px solid transparent',
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: '72px' }}>
          {/* Brand mark + wordmark */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0H20V18C20 22.418 16.418 26 12 26C7.582 26 4 22.418 4 18V16H8V18C8 20.209 9.791 22 12 22C14.209 22 16 20.209 16 18V0Z" fill="oklch(0.72 0.13 72)"/>
              <rect x="0" y="0" width="12" height="4" fill="oklch(0.72 0.13 72)"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.0625rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: lightText ? 'oklch(0.97 0.008 75)' : 'oklch(0.10 0.005 60)',
              transition: 'color 0.3s',
              whiteSpace: 'nowrap',
            }}>
              Jaye Watts
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.slice(0, 7).map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: location === link.href
                    ? 'oklch(0.72 0.13 72)'
                    : lightText ? 'oklch(0.78 0.008 75)' : 'oklch(0.42 0.006 65)',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.13 72)'; }}
                onMouseLeave={e => {
                  if (location !== link.href) {
                    (e.currentTarget as HTMLElement).style.color = lightText ? 'oklch(0.78 0.008 75)' : 'oklch(0.42 0.006 65)';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:inline-flex btn-primary" style={{ padding: '0.6rem 1.375rem', fontSize: '0.58rem' }}>
              Book a Conversation
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  height: '1.5px',
                  background: lightText ? 'oklch(0.97 0.008 75)' : 'oklch(0.10 0.005 60)',
                  transition: 'all 0.25s',
                  width: i === 1 ? (menuOpen ? '0' : '18px') : '22px',
                  transform: menuOpen
                    ? (i === 0 ? 'rotate(45deg) translate(3.5px, 3.5px)' : i === 2 ? 'rotate(-45deg) translate(3.5px, -3.5px)' : '')
                    : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          background: 'oklch(0.06 0.003 60)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-6 pt-16">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.25rem',
                fontWeight: 300,
                color: location === link.href ? 'oklch(0.72 0.13 72)' : 'oklch(0.95 0.008 75)',
                textDecoration: 'none',
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4" style={{ alignSelf: 'flex-start' }}>
            Book a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
