import { useEffect, useState } from 'react';

// Design: Obsidian Editorial — transparent over hero, white on scroll.
// Single-page anchor navigation — no routing, smooth scroll to chapters.
const NAV_LINKS = [
  { label: 'Why Partner', href: 'why-partner' },
  { label: 'Work',        href: 'featured-work' },
  { label: 'Speaking',    href: 'speaking' },
  { label: 'Industries',  href: 'industries' },
  { label: 'Media',       href: 'media' },
  { label: 'About',       href: 'about' },
  { label: 'Contact',     href: 'contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const lightText = !scrolled;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          background: scrolled ? 'oklch(1 0 0 / 96%)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0.90 0.005 78)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Wordmark */}
          <button
            onClick={() => scrollTo('top')}
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: lightText ? 'oklch(0.97 0.008 75)' : 'var(--ink)',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Jaye Watts
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden lg:flex">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: lightText ? 'oklch(0.75 0.005 65)' : 'var(--ink-mid)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = lightText ? 'oklch(0.97 0.008 75)' : 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = lightText ? 'oklch(0.75 0.005 65)' : 'var(--ink-mid)')}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ fontSize: '0.55rem', padding: '0.5rem 1.2rem', marginLeft: '0.25rem' }}
            >
              Book a Conversation
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden"
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: i === 1 ? (menuOpen ? '0' : '18px') : '22px',
                height: '1.5px',
                background: lightText ? 'oklch(0.97 0.008 75)' : 'var(--ink)',
                transition: 'all 0.25s',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(3.5px,3.5px)' : i === 2 ? 'rotate(-45deg) translate(3.5px,-3.5px)' : '') : 'none',
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'var(--obsidian)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }} className="lg:hidden">
        {NAV_LINKS.map(link => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 300,
              color: 'oklch(0.97 0.008 75)',
              letterSpacing: '0.02em',
            }}
          >
            {link.label}
          </button>
        ))}
        <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ marginTop: '0.5rem' }}>
          Book a Conversation
        </button>
      </div>
    </>
  );
}
