// Design: Obsidian Editorial Footer — dark, clean, anchor scroll links
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

const FOOTER_LINKS = [
  { label: 'Why Partner', id: 'why-partner' },
  { label: 'Featured Work', id: 'featured-work' },
  { label: 'Speaking', id: 'speaking' },
  { label: 'Industries', id: 'industries' },
  { label: 'Media & Press', id: 'media' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(0.04 0.002 60)', padding: '4rem 0 2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'oklch(0.97 0.008 75)', letterSpacing: '0.04em', marginBottom: '1rem', display: 'block' }}
            >
              Jaye Watts
            </button>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.45 0.005 65)', lineHeight: 1.7, maxWidth: '260px' }}>
              Strategic brand partner. Cultural intelligence. Twenty years at the intersection of culture and commerce.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.38 0.005 65)', marginBottom: '1.25rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FOOTER_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 65)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.97 0.008 75)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.50 0.005 65)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'oklch(0.38 0.005 65)', marginBottom: '1.25rem' }}>Connect</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Partnership Inquiries', href: 'mailto:hello@jayewatts.com' },
                { label: 'Speaking Bookings', href: 'mailto:speaking@jayewatts.com' },
                { label: 'Media Requests', href: 'mailto:media@jayewatts.com' },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'oklch(0.50 0.005 65)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.97 0.008 75)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.50 0.005 65)')}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid oklch(1 0 0 / 8%)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.32 0.005 65)' }}>
            © {new Date().getFullYear()} Jaye Watts. All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.32 0.005 65)' }}>
            Strategic Brand Partner · Cultural Intelligence
          </span>
        </div>
      </div>
    </footer>
  );
}
