import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';

export const metadata: Metadata = {
  title: 'Hestia — Inventaire Intelligent',
  description: 'La tablette intelligente qui élimine le gaspillage alimentaire dans votre cuisine.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
