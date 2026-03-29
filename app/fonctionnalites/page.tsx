import Header from '@/components/Header';
import FonctionnalitesContent from '@/components/FonctionnalitesContent';

export const metadata = { title: 'Fonctionnalités — Hestia' };

export default function FonctionnalitesPage() {
  return (
    <main className="bg-white">
      <Header />
      <FonctionnalitesContent />
    </main>
  );
}
