'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

export default function CheckoutContent() {
  const router = useRouter();
  const { count, closeCart } = useCart();
  const [form, setForm] = useState({ prenom: '', nom: '', email: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const total = (173.99 * Math.max(count, 1)).toFixed(2).replace('.', ',');

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.prenom.trim()) { setError('Veuillez entrer votre prénom.'); return; }
    if (!form.nom.trim()) { setError('Veuillez entrer votre nom.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { setError('Adresse e-mail invalide.'); return; }
    setError('');
    setLoading(true);
    try {
      const orders = JSON.parse(localStorage.getItem('hestia_orders') || '[]');
      orders.push({ ...form, total, timestamp: new Date().toISOString() });
      localStorage.setItem('hestia_orders', JSON.stringify(orders));
      localStorage.setItem('hestia_last_email', form.email);
      localStorage.setItem('hestia_last_prenom', form.prenom);
    } catch (_) {}
    closeCart();
    router.push('/merci');
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0f1f1e] mb-2">Finalisez votre commande</h1>
          <p className="text-gray-500 text-sm font-light">Renseignez vos coordonnées pour confirmer.</p>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Récapitulatif</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[#0f1f1e] font-semibold text-sm">Hestia</p>
              <p className="text-gray-400 text-xs mt-0.5">Tablette intelligente · Qté {Math.max(count, 1)}</p>
            </div>
            <p className="font-black text-[#0f1f1e]">{total} €</p>
          </div>
          <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Total TTC</span>
            <span className="font-black text-[#0f1f1e] text-lg">{total} €</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Vos informations</p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="prenom" className="block text-xs font-semibold text-gray-600 mb-1.5">Prénom</label>
              <input
                id="prenom"
                type="text"
                name="given-name"
                autoComplete="given-name"
                placeholder="Marie"
                value={form.prenom}
                onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0f1f1e] text-sm outline-none focus:border-[#30938d] focus:ring-2 focus:ring-[#30938d]/10 transition-all"
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-xs font-semibold text-gray-600 mb-1.5">Nom</label>
              <input
                id="nom"
                type="text"
                name="family-name"
                autoComplete="family-name"
                placeholder="Dupont"
                value={form.nom}
                onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0f1f1e] text-sm outline-none focus:border-[#30938d] focus:ring-2 focus:ring-[#30938d]/10 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="marie@exemple.com"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0f1f1e] text-sm outline-none focus:border-[#30938d] focus:ring-2 focus:ring-[#30938d]/10 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium" role="alert">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-sm text-white bg-[#0f2523] hover:bg-[#1a3a36] disabled:opacity-60 transition-colors flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M21 12c0-4.97-4.03-9-9-9"/>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/>
                </svg>
                Confirmation…
              </>
            ) : (
              <>Confirmer ma commande — {total} €</>
            )}
          </button>

          <p className="text-center text-gray-400 text-xs">Satisfait ou remboursé 30 jours · Paiement sécurisé</p>
        </form>
      </motion.div>
    </main>
  );
}
