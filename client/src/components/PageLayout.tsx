/**
 * Obsidian Editorial Theme — Page Layout Wrapper
 */
import Navigation from './Navigation';
import Footer from './Footer';
import { useScrollReveal } from '../hooks/useReveal';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  useScrollReveal();
  return (
    <div className={`min-h-screen flex flex-col ${className}`} style={{ background: 'oklch(0.08 0.003 60)' }}>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
