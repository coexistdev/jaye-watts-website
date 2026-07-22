/**
 * Obsidian Editorial Theme — Navigation
 * Transparent over hero, transitions to dark/blur on scroll.
 * Hides on scroll-down, reveals on scroll-up.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const navLinks = [
  { label: 'Why Partner', href: '/why-partner' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Spotlight', href: '/spotlight' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'About', href: '/about' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

// Primary nav links shown in desktop header (condensed)
const primaryLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Spotlight', href: '/spotlight' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'About', href: '/about' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          background: scrolled ? 'oklch(0.08 0.003 60 / 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0.18 0.003 60)' : '1px solid transparent',
        }}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/manus-storage/jaye-logo-mark_70fdcdba.png"
                alt="Jaye Watts"
                className="h-8 w-8 object-contain"
              />
              <span
                className="hidden sm:block"
                style={{ fontFamily: 'var(--font-mono)', color: 'oklch(0.95 0.008 75)', letterSpacing: '0.18em', fontSize: '0.7rem', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
              >
                Jaye Watts
              </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: location === link.href
                    ? 'oklch(0.72 0.12 75)'
                    : 'oklch(0.70 0.005 60)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (location !== link.href) {
                    (e.target as HTMLElement).style.color = 'oklch(0.95 0.008 75)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location !== link.href) {
                    (e.target as HTMLElement).style.color = 'oklch(0.70 0.005 60)';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block btn-gold text-xs py-2.5 px-5">
              Book a Conversation
            </Link>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: 'oklch(0.95 0.008 75)',
                  transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                }}
              />
              <span
                className="block w-4 h-px transition-all duration-300"
                style={{
                  background: 'oklch(0.95 0.008 75)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: 'oklch(0.95 0.008 75)',
                  transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          background: 'oklch(0.08 0.003 60)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-8 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 300,
                color: location === link.href ? 'oklch(0.72 0.12 75)' : 'oklch(0.95 0.008 75)',
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold mt-4 text-center">
            Book a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
