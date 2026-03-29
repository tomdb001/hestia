'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Marketing() {
  return (
    <>
      {/* ── PROBLÈME ── */}
      <section className="bg-[#0f2523] py-24 md:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={reveal} className="text-xs font-bold uppercase tracking-widest text-[#55ddc7] mb-4">
              Le problème
            </motion.p>
            <motion.h2 variants={reveal} className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight text-white leading-tight">
              Chaque semaine, votre frigo<br />
              <span style={{ color: '#55ddc7' }}>gaspille en silence.</span>
            </motion.h2>
            <motion.p variants={reveal} className="mt-4 text-white/50 font-light text-lg max-w-xl mx-auto leading-relaxed">
              Pas par négligence. Mais tout simplement, parce qu&apos;aucun outil n&apos;était conçu pour gérer votre alimentation intelligemment.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {[
              {
                icon: '🗑',
                title: 'Aliments oubliés',
                desc: "Vous ouvrez le frigo et trouvez une salade noircie, un yaourt périmé depuis une semaine. Vous ne l'aviez même pas remarqué.",
              },
              {
                icon: '💸',
                title: 'Argent gâché',
                desc: "En moyenne, un belge jette 174 € d'aliments par an. Des produits achetés, jamais consommés, directement à la poubelle.",
              },
              {
                icon: '🌍',
                title: 'Impact environnemental',
                desc: "Le gaspillage alimentaire représente 3,3 gigatonnes de gaz à effet de serre par an. Chaque produit jeté a un coût planétaire.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={reveal}
                className="p-6 rounded-2xl border border-white/8"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={reveal} className="text-xs font-bold uppercase tracking-widest text-[#30938d] mb-4">
              La solution
            </motion.p>
            <motion.h2 variants={reveal} className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight text-[#0f1f1e] leading-tight">
              Hestia pense à votre place.<br />
              <span style={{ color: '#30938d' }}>Cuisinez sans vous soucier du reste.</span>
            </motion.h2>
            <motion.p variants={reveal} className="mt-4 text-gray-500 font-light text-lg max-w-xl mx-auto leading-relaxed">
              Une tablette fixée dans votre cuisine qui connaît votre frigo, votre placard et votre congélateur mieux que vous.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-5 mb-10"
          >
            {[
              {
                icon: '📋',
                problem: 'Aliments oubliés',
                solution: 'Inventaire en temps réel',
                desc: 'Frigo, placard, congélateur : tout est visible en un regard.',
                color: '#30938d',
              },
              {
                icon: '⏰',
                problem: 'Produits périmés',
                solution: 'Alertes 48h à l\'avance',
                desc: "Hestia vous notifie avant qu'il ne soit trop tard. Vous savez quoi cuisiner ce soir pour ne rien perdre.",
                color: '#f97316',
              },
              {
                icon: '🍽',
                problem: 'Pas d\'idées de recettes',
                solution: 'Recettes générées par l\'IA',
                desc: "L'IA analyse votre inventaire et génère des recettes adaptées à ce que vous avez. Sans effort de votre part.",
                color: '#8b5cf6',
              },
              {
                icon: '➕',
                problem: 'Saisie fastidieuse',
                solution: 'Ajout en 10 secondes',
                desc: "Nom, emplacement, quantité, date de péremption. L'ajout d'un produit prend 10 secondes, même pour les enfants.",
                color: '#22a085',
              },
            ].map((item) => (
              <motion.div
                key={item.solution}
                variants={reveal}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: `${item.color}12` }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: item.color }}>
                      {item.solution}
                    </p>
                    <h3 className="text-[#0f1f1e] font-bold text-sm mb-1.5">{item.problem} → résolu</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/fonctionnalites"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0f2523] text-white text-sm font-semibold hover:bg-[#1a3a36] transition-colors"
            >
              Découvrir toutes les fonctionnalités
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
