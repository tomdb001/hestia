import Header from '@/components/Header';
import TarifsContent from '@/components/TarifsContent';

export const metadata = { title: 'Tarifs — Hestia' };

export default function TarifsPage() {
  return (
    <main className="bg-white">
      <Header />
      <TarifsContent />
    </main>
  );
}
