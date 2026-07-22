
interface SectionHeaderProps {
  number?: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleSize?: string;
}

export default function SectionHeader({ number, label, title, subtitle, align = 'left', titleSize }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`reveal ${isCenter ? 'text-center' : ''}`} style={{ position: 'relative' }}>
      {/* Oversized ghost number — editorial architecture device */}
      {number && (
        <span
          className="editorial-number"
          style={{
            position: 'absolute',
            top: '-1.5rem',
            left: isCenter ? '50%' : '-0.25rem',
            transform: isCenter ? 'translateX(-50%)' : 'none',
            zIndex: 0,
          }}
        >
          {number}
        </span>
      )}
      <div className={`flex items-center gap-4 mb-4 ${isCenter ? 'justify-center' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
        <div className="gold-rule-solid" style={{ width: '32px' }} />
        <span className="section-label">{label}</span>
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: titleSize || 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          color: 'oklch(0.95 0.008 75)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'oklch(0.55 0.005 60)',
            lineHeight: 1.75,
            maxWidth: isCenter ? '600px' : '520px',
            marginLeft: isCenter ? 'auto' : undefined,
            marginRight: isCenter ? 'auto' : undefined,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
