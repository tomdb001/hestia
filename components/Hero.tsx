'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tablet, DashboardScreen } from './Mockup';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-0 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-64 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(15,37,35,0.04) 0%, transparent 100%)' }} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="inline-flex items-center gap-2 mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#f0faf9] text-[#30938d] border border-[#d0f0ec]">
            La tablette intelligente pour votre cuisine
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-[clamp(2.8rem,8vw,5.5rem)] font-black tracking-tight leading-[1.05] text-[#0f1f1e]"
        >
          Less waste,<br />
          <span style={{ color: '#30938d' }}>more taste.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="mt-5 text-[clamp(1rem,2vw,1.2rem)] text-gray-500 font-light max-w-xl mx-auto leading-relaxed"
        >
          Hestia est une tablette intelligente pour votre cuisine. Elle suit vos aliments,
          vous alerte avant qu&apos;ils ne périment et vous propose des recettes avec ce que vous avez déjà.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          <Link
            href="/tarifs"
            className="px-7 py-3.5 rounded-full bg-[#0f2523] text-white text-sm font-semibold hover:bg-[#1a3a36] transition-colors"
          >
            Commander — 173,99 €
          </Link>
          <Link
            href="/fonctionnalites"
            className="px-7 py-3.5 rounded-full border border-gray-200 text-[#0f1f1e] text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Voir comment ça marche
          </Link>
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-5 text-xs text-gray-400">
          Satisfaction garantie 100%
        </motion.p>
      </div>

      {/* Product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-14 mx-auto"
        style={{ maxWidth: 700 }}
      >
        <div className="absolute inset-x-16 top-10 bottom-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(48,147,141,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <div className="relative flex items-end justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
            style={{ marginBottom: 32, transformOrigin: 'bottom center' }}
          >
            <Tablet width={190}><InventoryMini /></Tablet>
          </motion.div>

          <div className="relative z-10">
            <Tablet width={260}><DashboardScreen /></Tablet>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
            style={{ marginBottom: 32, transformOrigin: 'bottom center' }}
          >
            <Tablet width={190}><RecipesMini /></Tablet>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, white 30%, transparent)' }} />
      </motion.div>
    </section>
  );
}

function InventoryMini() {
  const items = [
    { name: 'Salade verte', days: '1j', color: '#ef4444' },
    { name: 'Yaourt nature', days: '2j', color: '#f97316' },
    { name: 'Tomates', days: '5j', color: '#22c55e' },
    { name: 'Œufs fermiers', days: '14j', color: '#22c55e' },
    { name: 'Emmental râpé', days: '9j', color: '#22c55e' },
  ];
  return (
    <div className="w-full h-full bg-white flex flex-col" style={{ fontSize: 10 }}>
      <div className="px-3 pt-3 pb-2 border-b border-gray-100">
        <p className="font-black text-[11px]">Mon Frigo</p>
        <p className="text-[8px] text-gray-400 mt-0.5">14 produits suivis</p>
      </div>
      <div className="flex-1 overflow-hidden px-2 py-1.5 space-y-1">
        {items.map(i => (
          <div key={i.name} className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-gray-50">
            <span className="text-[9px] font-medium text-gray-700">{i.name}</span>
            <span className="text-[8px] font-bold" style={{ color: i.color }}>{i.days}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipesMini() {
  return (
    <div className="w-full h-full bg-white flex flex-col" style={{ fontSize: 10 }}>
      <div className="px-3 pt-3 pb-2 border-b border-gray-100">
        <p className="font-black text-[11px]">Recettes</p>
        <p className="text-[8px] text-gray-400 mt-0.5">Adaptées à votre frigo</p>
      </div>
      <div className="flex-1 overflow-hidden px-2 py-1.5 space-y-1.5">
        {[
          { emoji: '🥗', name: 'Bol épinards saumon', time: '20 min', bg: '#0f2523' },
          { emoji: '🍳', name: 'Omelette aux herbes', time: '10 min', bg: '#4c1d95' },
          { emoji: '🥙', name: 'Wrap au saumon', time: '8 min', bg: '#7c2d12' },
        ].map(r => (
          <div key={r.name} className="rounded-lg overflow-hidden">
            <div className="px-2.5 py-1.5 flex items-center gap-1.5" style={{ background: r.bg }}>
              <span className="text-sm">{r.emoji}</span>
              <div>
                <p className="text-white font-bold text-[9px]">{r.name}</p>
                <p className="text-white/40 text-[7px]">{r.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
