interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light = false, centered = false }: SectionHeaderProps) {
  const textColor = light ? 'oklch(0.95 0.008 75)' : 'oklch(0.10 0.005 60)';
  const subColor  = light ? 'oklch(0.65 0.005 65)' : 'oklch(0.40 0.006 65)';
  return (
    <div className={`reveal ${centered ? 'text-center' : ''}`} style={{ maxWidth: centered ? '640px' : '680px', margin: centered ? '0 auto' : '0' }}>
      <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
        <span className="gold-line-short" />
        <span className="label-mono">{label}</span>
      </div>
      <h2 className="display-lg" style={{ color: textColor }}>{title}</h2>
      {subtitle && (
        <p className="body-lg mt-4" style={{ color: subColor }}>{subtitle}</p>
      )}
    </div>
  );
}
