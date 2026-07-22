import Navigation from './Navigation';
import Footer from './Footer';
import { useReveal } from '../hooks/useReveal';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
