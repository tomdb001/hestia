'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MerciContent() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    try {
      setPrenom(localStorage.getItem('hestia_last_prenom') || '');
      setEmail(localStorage.getItem('hestia_last_email') || '');
    } catch (_) {}
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)', boxShadow: '0 20px 40px rgba(48,147,141,0.25)' }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f1f1e] mb-3">
            {prenom ? `Merci ${prenom}\u00a0!` : 'Merci pour votre commande\u00a0!'}
          </h1>
          <p className="text-gray-500 font-light leading-relaxed mb-2">
            Votre commande a bien été enregistrée.
          </p>
          {email && (
            <p className="text-gray-500 font-light text-sm">
              Un e-mail de confirmation sera envoyé à{' '}
              <span className="font-semibold text-[#30938d]">{email}</span>.
            </p>
          )}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="my-10 border-t border-gray-100"
        />

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-[#f8f9fa] rounded-2xl p-6 mb-8 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#0f1f1e] text-sm">Hestia</p>
              <p className="text-gray-400 text-xs">Tablette intelligente</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: 'Tablette Hestia', ok: true },
              { label: 'Support mural', ok: true },
              { label: 'Câble USB-C', ok: true },
              { label: 'Mises à jour incluses', ok: true },
              { label: 'Support technique', ok: true },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#22a085' }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0f2523] text-white text-sm font-semibold hover:bg-[#1a3a36] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
