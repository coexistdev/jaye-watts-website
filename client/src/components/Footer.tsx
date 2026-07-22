/**
 * Obsidian Editorial Theme — Footer
 */
import { Link } from 'wouter';

const footerLinks = [
  { label: 'Why Partner', href: '/why-partner' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'In the Spotlight', href: '/spotlight' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'About', href: '/about' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jayewatts' },
  { label: 'Instagram', href: 'https://instagram.com/lettaj' },
  { label: 'Twitter / X', href: 'https://twitter.com/lettaj' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(0.06 0.003 60)', borderTop: '1px solid oklch(0.18 0.003 60)' }}>
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/manus-storage/jaye-logo-mark_70fdcdba.png"
                alt="Jaye Watts"
                className="h-10 w-10 object-contain"
              />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)' }}>
                Jaye Watts
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 60)', lineHeight: 1.7, maxWidth: '280px' }}>
              Strategic Brand Partner. Multidisciplinary strategist transforming attention into measurable business growth.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.005 60)' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'oklch(0.72 0.12 75)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'oklch(0.50 0.005 60)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-1">
            <p className="section-label mb-6">Navigation</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.55 0.005 60)' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'oklch(0.95 0.008 75)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'oklch(0.55 0.005 60)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-1">
            <p className="section-label mb-6">Begin a Partnership</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'oklch(0.95 0.008 75)', lineHeight: 1.4, marginBottom: '1.5rem' }}>
              Ready to transform your brand's impact?
            </p>
            <Link href="/contact" className="btn-gold">
              Book a Conversation
            </Link>
          </div>
        </div>

        <div className="gold-rule-solid mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'oklch(0.35 0.003 60)' }}>
            &copy; {new Date().getFullYear()} Jaye "Letta J" Watts. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'oklch(0.35 0.003 60)' }}>
            Strategic Brand Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
