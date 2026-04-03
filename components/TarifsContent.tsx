'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from './CartContext';
import { trackAddToCart } from '@/lib/gtag';

export default function TarifsContent() {
  const { add, openCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    add();
    setAdded(true);
    trackAddToCart();
  }

  const inclus = [
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
      label: 'Tablette Hestia', desc: 'Écran tactile résistant aux éclaboussures',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
      label: 'Taille', desc: '10 pouces',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg>,
      label: 'Autonomie de la batterie', desc: "Jusqu'à 12 heures en restant allumé",
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
      label: 'Type de recharge', desc: 'USB-C, charge rapide',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>,
      label: 'Connectée au Wi-Fi', desc: 'Wi-Fi 2.4 GHz & 5 GHz',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
      label: 'Caméra frontale', desc: '5 MP',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
      label: 'Mises à jour incluses', desc: 'Nouvelles fonctionnalités gratuites',
    },
  ];

  const faq = [
    { q: 'Quand vais-je recevoir ma commande ?', r: "Votre commande est traitée immédiatement. Vous recevrez un e-mail de confirmation avec les détails d'expédition." },
    { q: 'Est-ce que je paye maintenant ?', r: "Oui, le paiement est effectué lors de la commande. Vous recevez votre Hestia sous quelques jours ouvrables." },
    { q: 'Puis-je retourner mon Hestia ?', r: "Oui, vous bénéficiez d'un droit de retour de 30 jours. Aucun frais de retour." },
    { q: "L'application est-elle incluse ?", r: "Oui. L'application Hestia est incluse et fonctionne hors-ligne." },
    { q: 'Hestia fonctionne-t-elle sans internet ?', r: "L'inventaire et les alertes fonctionnent hors-ligne. La génération de recettes par IA nécessite une connexion." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto px-6"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#f0faf9] text-[#30938d] border border-[#d0f0ec] mb-6">
            Tarifs
          </span>
          <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-black tracking-tight leading-tight text-[#0f1f1e] mb-4">
            Un prix unique.<br />
            <span style={{ color: '#30938d' }}>Tout inclus.</span>
          </h1>
          <p className="text-gray-500 font-light text-lg">Pas d&apos;abonnement. Pas de surprise. Une seule fois.</p>
        </motion.div>
      </section>

      {/* Pricing card */}
      <section className="pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-lg mx-auto rounded-3xl border-2 border-[#0f2523] overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(15,37,35,0.12)' }}
        >
          {/* Card header */}
          <div className="bg-[#0f2523] px-8 py-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <p className="text-[#55ddc7] text-xs font-bold uppercase tracking-widest mb-1">Hestia</p>
            <div className="flex items-baseline justify-center gap-2 mt-3">
              <span className="text-5xl font-black text-white">173,99 €</span>
              <span className="text-white/40 text-sm">TTC</span>
            </div>
            <p className="text-white/40 text-xs mt-2">Rentabilisé en moins d'1 an</p>
          </div>

          {/* Card body */}
          <div className="bg-white px-8 py-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Ce qui est inclus</p>
            <ul className="space-y-4 mb-8">
              {inclus.map(item => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="shrink-0 text-[#30938d]">{item.icon}</span>
                  <div>
                    <p className="text-[#0f1f1e] font-semibold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {added ? (
              <motion.button
                initial={{ scale: 0.96 }} animate={{ scale: 1 }}
                onClick={openCart}
                className="w-full py-4 rounded-xl font-bold text-sm text-white transition-colors flex items-center justify-center gap-2"
                style={{ background: '#22a085' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                Ajouté au panier — Voir le panier →
              </motion.button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-[#0f2523] hover:bg-[#1a3a36] transition-colors flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6"/>
                </svg>
                Commander Hestia — 173,99 €
              </button>
            )}

            <p className="text-center text-gray-300 text-xs mt-3">Satisfait ou remboursé 30 jours · Paiement sécurisé</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f1f1e]">Questions fréquentes</h2>
          </motion.div>
          <div className="space-y-2">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#0f1f1e] font-semibold text-sm">{item.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round"
                    className="shrink-0 transition-transform"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                    <div className="pt-3">{item.r}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
