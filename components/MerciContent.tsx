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
            {prenom ? `Merci ${prenom}\u00a0!` : 'Merci pour votre intérêt\u00a0!'}
          </h1>
          <p className="text-gray-500 font-light leading-relaxed">
            Votre commande a bien été enregistrée{email ? <> pour <span className="font-semibold text-[#30938d]">{email}</span></> : ''}.
          </p>
        </motion.div>

        {/* MVP notice */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 rounded-2xl border border-[#d0f0ec] bg-[#f0faf9] p-6 text-left"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#0f1f1e] text-sm mb-1">Un mot sur Hestia</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hestia est actuellement un <span className="font-semibold">projet étudiant en phase de développement</span>. Vous ne serez pas livré pour le moment — mais votre intérêt compte énormément pour nous.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">
                Si le produit vous plaît ou si vous avez des questions, des suggestions ou simplement envie d&apos;en savoir plus, contactez-nous directement. Votre avis nous aide à construire le meilleur produit possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="mailto:hestia.tieproject@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0f2523] text-white text-sm font-semibold hover:bg-[#1a3a36] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Nous contacter
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-[#0f1f1e] text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
